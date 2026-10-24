// 用草稿的 WidgetMetadata 更新网页编辑器里的模块与选项：node update-builder.js <明文脚本> <docs/builder/index.html>
// 只写入名称、选项与说明（不含任何代码），让编辑器的选项名称跟已发布的模块一致。
const vm = require('vm');
const fs = require('fs');

const [src, page] = process.argv.slice(2);
const ctx = { console: { log() {}, warn() {}, error() {} }, Widget: { tmdb: {}, http: {}, storage: { get() {}, set() {} } } };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(src, 'utf8'), ctx);
const meta = ctx.WidgetMetadata;
const data = {
  version: meta.version,
  id: meta.id,
  modules: meta.modules.map((m) => ({
    id: m.id,
    title: m.title,
    fn: m.functionName,
    desc: m.description,
    params: m.params.map((p) => {
      const q = { n: p.name, t: p.title, type: p.type, v: p.value };
      if (p.enumOptions) q.o = p.enumOptions.map((o) => [o.value, o.title]);
      if (p.belongTo) q.b = [p.belongTo.paramName, p.belongTo.value];
      return q;
    }),
  })),
};

const html = fs.readFileSync(page, 'utf8');
const open = '<script id="data-modules" type="application/json">';
const a = html.indexOf(open);
if (a < 0) throw new Error('编辑器页面里找不到 data-modules');
const b = html.indexOf('</script>', a + open.length);
const body = JSON.stringify(data).replace(/<\//g, '<\\/');
fs.writeFileSync(page, html.slice(0, a + open.length) + body + html.slice(b));
console.log('编辑器已同步到 ' + meta.version);
