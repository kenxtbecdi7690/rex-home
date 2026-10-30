// 发布前检查（只用模拟数据，不连网）：node check-module.js <明文脚本>
// 1) 每个模块的每个下拉选项：TMDB 片库模式第 1、2 页都要刚好 200 部（轮播 20 张）；
//    豆瓣模式在没有网络时报「格式异常」属正常，不计失败。
// 2) 首页各行同时读取（豆瓣榜单开去重时），各行之间重复为 0。
// 3) 模拟 App 重开（记忆体清空、本机储存保留），先读的行占用的影片，后读的行不会再出现。
// 4) 选项名称不能太长（中文算 2 格），否则 Rex 设置页左边的参数名称会被挤成一个字。
// 5) v152 起：缓存过期后网络失败时，行要沿用上次成功的第一页，不能整行消失（v151 及以前不检查）。
const vm = require('vm');
// 假时钟与网络失败开关：只给第 5 项检查用，默认不影响其他检查
globalThis.__skew = 0;
globalThis.__fail = false;
class FakeDate extends Date {
  constructor(...a) { if (a.length) super(...a); else super(Date.now() + globalThis.__skew); }
  static now() { return Date.now() + globalThis.__skew; }
}
const fs = require('fs');

const file = process.argv[2];
const source = fs.readFileSync(file, 'utf8');
const failures = [];

function mockTmdb(overlap) {
  // overlap：同一国家、同一页的片编号固定，不同行会拿到同一批片，用来检查去重
  let id = 1;
  const keywords = new Map();
  const NETWORKS = [2007, 1330, 1419, 1631, 1605, 213, 2739, 49, 3186, 2552, 1024].map((x) => ({ id: x }));
  return {
    get: async (path, opt) => {
      const q = (opt && opt.params) || opt || {};
      if (/search\/keyword/.test(path)) {
        if (!keywords.has(q.query)) keywords.set(q.query, 90000 + keywords.size);
        return { results: [{ id: keywords.get(q.query), name: q.query }] };
      }
      if (/search\//.test(path)) {
        return { page: 1, total_pages: 1, results: [{ id: id++, name: q.query, title: q.query, poster_path: '/p.jpg', first_air_date: '2020-01-01', release_date: '2020-01-01', origin_country: ['CN'], genre_ids: [18], vote_count: 9, popularity: 1 }] };
      }
      if (/discover|trending|now_playing|on_the_air|popular|top_rated/.test(path)) {
        const genres = q.with_genres ? String(q.with_genres).split(/[,|]/).map(Number) : [18];
        const countries = String(q.with_origin_country || 'CN|KR|US|JP').split('|');
        const gk = Object.keys(q).find((k) => /date\.gte$/.test(k));
        const lk = Object.keys(q).find((k) => /date\.lte$/.test(k));
        const lo = gk ? Date.parse(q[gk]) : Date.UTC(1950, 0, 1);
        const hi = lk ? Date.parse(q[lk]) : Date.UTC(2026, 9, 20);
        const span = Math.max(1, Math.floor((hi - lo) / 86400000));
        return {
          page: q.page || 1, total_pages: 30, total_results: 600,
          results: Array.from({ length: 20 }, (_, i) => {
            const country = countries[i % countries.length];
            const n = overlap ? ['CN', 'HK', 'TW', 'MO', 'KR', 'JP', 'US', 'GB', 'TH', 'SG', 'MY', 'ES', 'TR', 'IN'].indexOf(country) * 100000 + (Number(q.page || 1) - 1) * 20 + i + 1 : id++;
            const d = new Date(hi - ((n * 7919) % span) * 86400000).toISOString().slice(0, 10);
            return { id: n, name: '剧' + n, title: '片' + n, poster_path: '/p' + n + '.jpg', backdrop_path: '/b.jpg', first_air_date: d, release_date: d, origin_country: [country], original_language: 'zh', genre_ids: genres, vote_average: 7, vote_count: 50, popularity: 10, media_type: /trending/.test(path) ? (i % 2 ? 'tv' : 'movie') : undefined };
          }),
        };
      }
      if (/^\/?(tv|movie)\/\d+/.test(path)) {
        const did = Number(path.match(/\d+/)[0]);
        return { id: did, name: '剧' + did, title: '片' + did, poster_path: '/p' + did + '.jpg', backdrop_path: '/b.jpg', first_air_date: '2025-06-01', release_date: '2025-06-01', last_air_date: '2026-09-01', origin_country: ['CN'], production_countries: [{ iso_3166_1: 'CN' }], genres: [{ id: 18 }], vote_count: 50, vote_average: 7, networks: NETWORKS, production_companies: [] };
      }
      return { results: [] };
    },
  };
}

function load(store, overlap) {
  const storage = store
    ? { get: (k) => (store.has(k) ? store.get(k) : null), set: (k, v) => { store.set(k, v); }, remove: (k) => { store.delete(k); } }
    : { get: () => null, set: () => {} };
  const ctx = { console: { log() {}, warn() {}, error() {} }, Widget: { tmdb: (function () { const good = mockTmdb(overlap); return { get: (p, o) => (globalThis.__fail ? Promise.reject(new Error('net')) : good.get(p, o)) }; })(), http: { get: async () => ({ status: 200, data: {} }) }, storage }, setTimeout, clearTimeout, Promise, Date: FakeDate, Math, JSON };
  vm.createContext(ctx);
  vm.runInContext(source, ctx);
  return ctx;
}

const defaults = (ctx, id) => {
  const p = {};
  ctx.WidgetMetadata.modules.find((m) => m.id === id).params.forEach((x) => { p[x.name] = x.value; });
  return p;
};
const keyOf = (x) => x.mediaType + '.' + x.id;
const withTimeout = (promise) => Promise.race([promise, new Promise((_, reject) => setTimeout(() => reject(new Error('超时 20 秒')), 20000))]);

const MAX_OPTION_WIDTH = 24;
const width = (text) => Array.from(String(text)).reduce((n, ch) => n + (ch.charCodeAt(0) > 0xff ? 2 : 1), 0);

function checkOptionNames() {
  const ctx = load(null);
  for (const m of ctx.WidgetMetadata.modules) {
    for (const p of m.params) {
      for (const o of p.enumOptions || []) {
        if (width(o.title) > MAX_OPTION_WIDTH) failures.push(m.title + '「' + p.title + '」选项太长：' + o.title);
      }
    }
  }
}

async function checkEveryOption() {
  const ctx = load(null);
  const SKIP = new Set(['page', 'pageSize', 'size', 'dedupe']);
  let total = 0;
  for (const m of ctx.WidgetMetadata.modules) {
    const base = defaults(ctx, m.id);
    base.dedupe = 'off';
    const want = m.id === 'rowBanner' ? 20 : 200;
    const runs = [['默认', base]];
    for (const p of m.params) {
      if (SKIP.has(p.name) || !p.enumOptions) continue;
      for (const o of p.enumOptions) {
        if (o.value === p.value) continue;
        const next = Object.assign({}, base, { [p.name]: o.value });
        if (p.belongTo && !p.belongTo.value.includes(base[p.belongTo.paramName])) next[p.belongTo.paramName] = p.belongTo.value[0];
        runs.push([p.title + '=' + o.title, next]);
      }
    }
    for (const [label, params] of runs) {
      total++;
      const where = m.title + '「' + label + '」';
      try {
        const page1 = await withTimeout(ctx[m.functionName](Object.assign({}, params)));
        if (page1.length !== want) { failures.push(where + ' 第1页 ' + page1.length + ' 部'); continue; }
        if (m.id !== 'rowBanner') {
          const page2 = await withTimeout(ctx[m.functionName](Object.assign({}, params, { page: '2' })));
          if (page2.length !== 200) failures.push(where + ' 第2页 ' + page2.length + ' 部');
        }
      } catch (e) {
        if (!/豆瓣|猫眼/.test(String(e && e.message))) failures.push(where + ' 报错：' + (e && e.message));
      }
    }
  }
  return total;
}

async function checkNoDuplicates() {
  const order = ['rowSeries', 'rowDramaRegion', 'rowMovie', 'rowAnime', 'rowVariety', 'rowDocumentary', 'rowCharts'];
  for (const rows of [order, order.slice().reverse()]) {
    const ctx = load(null, true);
    const seen = new Set();
    let dup = 0;
    for (const id of rows) {
      const list = await ctx[id](Object.assign(defaults(ctx, id), { dedupe: 'on' }));
      list.forEach((x) => { if (seen.has(keyOf(x))) dup++; else seen.add(keyOf(x)); });
    }
    if (dup) failures.push('首页重复 ' + dup + ' 部（顺序：' + rows.join('→') + '）');
  }
}

async function checkRestart() {
  const store = new Map();
  const first = load(store, true);
  const series = await first.rowSeries(defaults(first, 'rowSeries'));
  await new Promise((r) => setTimeout(r, 800));
  const second = load(store, true);
  const charts = await second.rowCharts(Object.assign(defaults(second, 'rowCharts'), { dedupe: 'on' }));
  const ids = new Set(series.map(keyOf));
  const dup = charts.filter((x) => ids.has(keyOf(x))).length;
  if (dup) failures.push('App 重开后重复 ' + dup + ' 部');
}


// v152 起：行读取失败（网络）时沿用上次成功的第一页
async function checkLastGood() {
  const flush = () => new Promise((r) => setTimeout(r, 800));
  const attempt = async (fn) => { try { return { v: await fn() }; } catch (e) { return { e }; } };
  const hours3 = 3 * 3600 * 1000;
  try {
    globalThis.__fail = false; globalThis.__skew = 0;
    const store = new Map();
    const a = load(store, true);
    const first = await a.rowMovie(defaults(a, 'rowMovie'));
    if (!first.length) { failures.push('上次结果检查：首次读取没有片'); return; }
    await flush();
    // 缓存过期（拨 3 小时）后网络失败：沿用上次结果
    globalThis.__skew = hours3; globalThis.__fail = true;
    const b = load(store, true);
    const r = await attempt(() => b.rowMovie(defaults(b, 'rowMovie')));
    if (r.e || !r.v.length || r.v.map(keyOf).join() !== first.map(keyOf).join()) failures.push('缓存过期后网络失败，电影行没有沿用上次结果（会整行消失）');
    // 没有上次结果：仍要报错
    const c = load(new Map(), true);
    if (!(await attempt(() => c.rowMovie(defaults(c, 'rowMovie')))).e) failures.push('没有上次结果时应该报错，却没有');
    // 第 2 页失败：不能拿第 1 页顶替
    const d = load(store, true);
    if (!(await attempt(() => d.rowMovie(Object.assign(defaults(d, 'rowMovie'), { page: 2 })))).e) failures.push('第 2 页失败时不应拿第 1 页顶替');
    // 无效设置：仍要报错
    const e = load(store, true);
    if (!(await attempt(() => e.rowMovie(Object.assign(defaults(e, 'rowMovie'), { pageSize: 7 })))).e) failures.push('无效设置应该报错，却没有');
    // 沿用的结果仍要扣掉其他行已占用的影片
    globalThis.__fail = false; globalThis.__skew = 0;
    const st = new Map();
    const f = load(st, true);
    await f.rowMovie(defaults(f, 'rowMovie')); await flush();
    const g = load(st, true);
    const series = await g.rowSeries(defaults(g, 'rowSeries'));
    globalThis.__skew = hours3; globalThis.__fail = true;
    const r5 = await attempt(() => g.rowMovie(defaults(g, 'rowMovie')));
    const ids = new Set(series.map(keyOf));
    if (r5.e || !r5.v.length || r5.v.some((x) => ids.has(keyOf(x)))) failures.push('沿用上次结果时，与其他行重复或为空');
  } finally {
    globalThis.__fail = false; globalThis.__skew = 0;
  }
}

(async () => {
  checkOptionNames();
  const combos = await checkEveryOption();
  await checkNoDuplicates();
  await checkRestart();
  const ver = Number((/RexHomeVer\s*=\s*'v(\d+)'/.exec(source) || [])[1]);
  const lastGood = ver >= 152;
  if (lastGood) await checkLastGood();
  if (failures.length) {
    failures.slice(0, 30).forEach((f) => console.log('::error::' + f));
    console.log('检查未通过：' + failures.length + ' 项');
    process.exit(1);
  }
  console.log('检查通过：' + combos + ' 种选项组合都是 200 部（轮播 20 张）；首页与 App 重开后重复 0；选项名称长度正常' + (lastGood ? '；网络失败时沿用上次结果' : '（v152 起才检查网络失败时沿用上次结果）'));
})().catch((e) => { console.log('::error::检查程序出错：' + (e && e.stack || e)); process.exit(1); });
