// 导出工具自动测试（本机浏览器，不连网，不含任何个人资料；样本由本脚本合成）
// 用法：node tests/tools-roundtrip.js
// 需要：playwright（已装好 Chromium）与 jszip 3.10.1。jszip 位置可用环境变量 JSZIP_PATH 指定，
//       默认依次试 require('jszip')、/opt/node-tools/node_modules/jszip。
// 检查：
//  1) 三个页面在手机宽度（375）与 Mac 宽度（1440）都没有横向滚动，没有页面错误；
//  2) 打开「Mac 写法」的 .rex 直接导出，三个 JSON 必须与原档逐字相同、顺序 manifest→layout→home；
//  3) 打开「非 Mac 写法」的 .rex（顺序不同、空 avatarData）导出：layout 内容相同，并改成 Mac 写法。
const path = require('path');
const fs = require('fs');
const os = require('os');
const { chromium } = require('playwright');

function loadJSZip() {
  const tries = [process.env.JSZIP_PATH, 'jszip', '/opt/node-tools/node_modules/jszip'].filter(Boolean);
  for (const t of tries) { try { return require(t); } catch (_) {} }
  throw new Error('找不到 jszip，请设置 JSZIP_PATH');
}
const JSZip = loadJSZip();
const jszipFile = (() => {
  for (const t of [process.env.JSZIP_PATH, 'jszip', '/opt/node-tools/node_modules/jszip'].filter(Boolean)) {
    try { return path.join(path.dirname(require.resolve(t)), '..', 'dist', 'jszip.min.js'); } catch (_) {}
  }
})();

const root = path.resolve(__dirname, '..');
const failures = [];
const check = (cond, msg) => { if (!cond) failures.push(msg); console.log((cond ? '通过  ' : '失败  ') + msg); };

// 合成样本：Mac 写法 = 紧凑 JSON，「/」写成「\/」
const macJson = (v) => Buffer.from(JSON.stringify(v).replace(/\//g, '\\/'), 'utf8');
function layout() {
  const item = (id, title, style, grid) => ({
    widgetURL: 'https://example.invalid/rex-home.js', functionId: 'f' + id, style, params: [{ key: 'dedupe', value: 'on' }],
    iconUrl: '', widgetBundleId: 'rex.home.unified', count: 0, name: 'Rex首页', gridSize: grid, widgetId: 'rex.home.unified',
    subtitle: '', id: 'ITEM-' + id, title,
  });
  return [
    { title: '测试轮播', isActive: true, id: 'ROW-1', items: [item(1, '轮播', 'banner', [-1, 3])] },
    { title: '测试剧集', isActive: true, id: 'ROW-2', items: [item(2, '剧集', 'fullWidthPoster', [-1, 2.3])] },
    { title: '测试电影', isActive: false, id: 'ROW-3', items: [item(3, '电影', 'fullWidthPoster', [-1, 2.3])] },
  ];
}
async function makeRex(file, { mac }) {
  const z = new JSZip();
  const manifest = macJson({ format: 'video.fika.rex.home-package', version: 1 });
  const lay = macJson(layout());
  const home = mac ? macJson({ avatar: 'avatar-22', isIndependent: false, title: '测试首页' })
                   : Buffer.from(JSON.stringify({ avatar: 'avatar-22', isIndependent: false, title: '测试首页', avatarData: '' }), 'utf8');
  const opt = { unixPermissions: 0o100644 };
  if (mac) { z.file('rex-manifest.json', manifest, opt); z.file('rex-layout.json', lay, opt); z.file('rex-home.json', home, opt); }
  else { z.file('rex-manifest.json', manifest, opt); z.file('rex-home.json', home, opt); z.file('rex-layout.json', lay, opt); }
  fs.writeFileSync(file, await z.generateAsync({ type: 'nodebuffer', platform: 'UNIX' }));
}

(async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'rex-tools-'));
  const macRex = path.join(tmp, 'mac.rex'), otherRex = path.join(tmp, 'other.rex');
  await makeRex(macRex, { mac: true }); await makeRex(otherRex, { mac: false });
  const browser = await chromium.launch();
  const route = (p) => p.route('**/jszip.min.js', (r) => r.fulfill({ path: jszipFile, contentType: 'application/javascript' }));

  for (const pageName of ['builder', 'fwd2rex', 'export']) {
    for (const w of [375, 1440]) {
      const p = await browser.newPage({ viewport: { width: w, height: 900 } }); const errs = [];
      p.on('pageerror', (e) => errs.push(e.message)); await route(p);
      await p.goto('file://' + path.join(root, 'docs', pageName, 'index.html')); await p.waitForTimeout(400);
      const sw = await p.evaluate(() => document.documentElement.scrollWidth);
      check(sw <= w, pageName + ' 在 ' + w + ' 宽度没有横向滚动（' + sw + '）');
      check(errs.length === 0, pageName + ' 在 ' + w + ' 宽度没有页面错误' + (errs.length ? '：' + errs[0] : ''));
      await p.close();
    }
  }

  async function exportOf(file) {
    const p = await browser.newPage({ viewport: { width: 1440, height: 900 }, acceptDownloads: true }); const errs = [];
    p.on('pageerror', (e) => errs.push(e.message)); await route(p);
    await p.goto('file://' + path.join(root, 'docs', 'builder', 'index.html')); await p.waitForTimeout(300);
    await p.setInputFiles('#fileIn', file); await p.waitForTimeout(1000);
    const [d] = await Promise.all([p.waitForEvent('download', { timeout: 8000 }), p.getByRole('button', { name: '导出首页' }).click()]);
    const out = path.join(tmp, 'out-' + path.basename(file)); await d.saveAs(out); await p.close();
    const z = await JSZip.loadAsync(fs.readFileSync(out));
    const read = async (n) => (z.file(n) ? z.file(n).async('string') : null);
    return { order: Object.keys(z.files), manifest: await read('rex-manifest.json'), layout: await read('rex-layout.json'), home: await read('rex-home.json'), errs };
  }
  const orig = async (file, n) => { const z = await JSZip.loadAsync(fs.readFileSync(file)); return z.file(n).async('string'); };

  const A = await exportOf(macRex);
  check(A.order.join() === 'rex-manifest.json,rex-layout.json,rex-home.json', 'Mac 写法 .rex：导出顺序为 manifest→layout→home');
  for (const [k, n] of [['manifest', 'rex-manifest.json'], ['layout', 'rex-layout.json'], ['home', 'rex-home.json']]) {
    check(A[k] === await orig(macRex, n), 'Mac 写法 .rex：' + n + ' 与原档逐字相同');
  }
  check(A.errs.length === 0, 'Mac 写法 .rex：导出过程没有页面错误');

  const B = await exportOf(otherRex);
  check(B.order.join() === 'rex-manifest.json,rex-layout.json,rex-home.json', '非 Mac 写法 .rex：导出改为 manifest→layout→home');
  check(JSON.stringify(JSON.parse(B.layout)) === JSON.stringify(JSON.parse(await orig(otherRex, 'rex-layout.json'))), '非 Mac 写法 .rex：layout 内容不变');
  check(!/avatarData/.test(B.home), '非 Mac 写法 .rex：没有自订头像时不写 avatarData');
  check(B.layout.includes('\\/') && !B.layout.includes('"https://'), '非 Mac 写法 .rex：「/」写成「\\/」');

  await browser.close(); fs.rmSync(tmp, { recursive: true, force: true });
  console.log(failures.length ? '\n未通过：' + failures.length + ' 项' : '\n全部通过');
  process.exit(failures.length ? 1 : 0);
})().catch((e) => { console.error('测试程序出错：' + (e && e.stack || e)); process.exit(2); });
