// 优酷片单 · 原作者 MakkaPakka，Bolinxxlin 改编号与默认值（只有片单，片名经 youku-worker 中转）
var WidgetMetadata = {
  id: "youku.video.catalog",
  title: "优酷片单",
  version: "1.10.0",
  requiredVersion: "0.0.1",
  description: "优酷片库：按频道 + 地区 + 年份筛选，自动翻页，输出 TMDB 条目（含封面）。需配合 youku-worker 中转（优酷签名在浏览器环境算不了）",
  author: "MakkaPakka（Bolinxxlin 改编号与默认值）",
  globalParams: [
    { name: "base", title: "API 地址", type: "input", value: "", description: "留空使用内置地址；如需换自己的 Worker，在此填写完整地址" }
  ],
  modules: [
    {
      id: "ykTv",
      title: "电视剧",
      functionName: "loadYkTv",
      cacheDuration: 600,
      params: [
        { name: "mainArea", title: "地区", type: "enumeration", value: "", enumOptions: [ { title: "全部地区", value: "" }, { title: "中国内地", value: "中国内地" }, { title: "中国香港", value: "中国香港" }, { title: "中国台湾", value: "中国台湾" }, { title: "韩国", value: "韩国" }, { title: "美国", value: "美国" }, { title: "英国", value: "英国" }, { title: "日本", value: "日本" }, { title: "泰国", value: "泰国" } ] },
        { name: "year", title: "年份", type: "enumeration", value: "", enumOptions: [ { title: "全部年份", value: "" }, { title: "即将上线", value: "即将上线" }, { title: "2026", value: "2026" }, { title: "2025", value: "2025" }, { title: "2024", value: "2024" }, { title: "2023", value: "2023" }, { title: "2022", value: "2022" }, { title: "2021", value: "2021" }, { title: "2020", value: "2020" }, { title: "2019", value: "2019" }, { title: "2018", value: "2018" }, { title: "2017", value: "2017" }, { title: "2016", value: "2016" }, { title: "2015", value: "2015" }, { title: "2014-2011", value: "2014-2011" }, { title: "更早", value: "更早" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "ykMovie",
      title: "电影",
      functionName: "loadYkMovie",
      cacheDuration: 600,
      params: [
        { name: "mainArea", title: "地区", type: "enumeration", value: "", enumOptions: [ { title: "全部地区", value: "" }, { title: "中国内地", value: "中国内地" }, { title: "中国香港", value: "中国香港" }, { title: "中国台湾", value: "中国台湾" }, { title: "韩国", value: "韩国" }, { title: "美国", value: "美国" }, { title: "英国", value: "英国" }, { title: "日本", value: "日本" }, { title: "泰国", value: "泰国" } ] },
        { name: "year", title: "年份", type: "enumeration", value: "", enumOptions: [ { title: "全部年份", value: "" }, { title: "即将上线", value: "即将上线" }, { title: "2026", value: "2026" }, { title: "2025", value: "2025" }, { title: "2024", value: "2024" }, { title: "2023", value: "2023" }, { title: "2022", value: "2022" }, { title: "2021", value: "2021" }, { title: "2020", value: "2020" }, { title: "2019", value: "2019" }, { title: "2018", value: "2018" }, { title: "2017", value: "2017" }, { title: "2016", value: "2016" }, { title: "2015", value: "2015" }, { title: "2014-2011", value: "2014-2011" }, { title: "更早", value: "更早" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "ykVariety",
      title: "综艺",
      functionName: "loadYkVariety",
      cacheDuration: 600,
      params: [
        { name: "mainArea", title: "地区", type: "enumeration", value: "", enumOptions: [ { title: "全部地区", value: "" }, { title: "中国内地", value: "中国内地" }, { title: "中国香港", value: "中国香港" }, { title: "中国台湾", value: "中国台湾" }, { title: "韩国", value: "韩国" }, { title: "美国", value: "美国" }, { title: "英国", value: "英国" }, { title: "日本", value: "日本" }, { title: "泰国", value: "泰国" } ] },
        { name: "year", title: "年份", type: "enumeration", value: "", enumOptions: [ { title: "全部年份", value: "" }, { title: "即将上线", value: "即将上线" }, { title: "2026", value: "2026" }, { title: "2025", value: "2025" }, { title: "2024", value: "2024" }, { title: "2023", value: "2023" }, { title: "2022", value: "2022" }, { title: "2021", value: "2021" }, { title: "2020", value: "2020" }, { title: "2019", value: "2019" }, { title: "2018", value: "2018" }, { title: "2017", value: "2017" }, { title: "2016", value: "2016" }, { title: "2015", value: "2015" }, { title: "2014-2011", value: "2014-2011" }, { title: "更早", value: "更早" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "ykAnime",
      title: "动漫",
      functionName: "loadYkAnime",
      cacheDuration: 600,
      params: [
        { name: "mainArea", title: "地区", type: "enumeration", value: "", enumOptions: [ { title: "全部地区", value: "" }, { title: "中国内地", value: "中国内地" }, { title: "中国香港", value: "中国香港" }, { title: "中国台湾", value: "中国台湾" }, { title: "韩国", value: "韩国" }, { title: "美国", value: "美国" }, { title: "英国", value: "英国" }, { title: "日本", value: "日本" }, { title: "泰国", value: "泰国" } ] },
        { name: "year", title: "年份", type: "enumeration", value: "", enumOptions: [ { title: "全部年份", value: "" }, { title: "即将上线", value: "即将上线" }, { title: "2026", value: "2026" }, { title: "2025", value: "2025" }, { title: "2024", value: "2024" }, { title: "2023", value: "2023" }, { title: "2022", value: "2022" }, { title: "2021", value: "2021" }, { title: "2020", value: "2020" }, { title: "2019", value: "2019" }, { title: "2018", value: "2018" }, { title: "2017", value: "2017" }, { title: "2016", value: "2016" }, { title: "2015", value: "2015" }, { title: "2014-2011", value: "2014-2011" }, { title: "更早", value: "更早" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "ykDoc",
      title: "纪录片",
      functionName: "loadYkDoc",
      cacheDuration: 600,
      params: [
        { name: "mainArea", title: "地区", type: "enumeration", value: "", enumOptions: [ { title: "全部地区", value: "" }, { title: "中国内地", value: "中国内地" }, { title: "中国香港", value: "中国香港" }, { title: "中国台湾", value: "中国台湾" }, { title: "韩国", value: "韩国" }, { title: "美国", value: "美国" }, { title: "英国", value: "英国" }, { title: "日本", value: "日本" }, { title: "泰国", value: "泰国" } ] },
        { name: "year", title: "年份", type: "enumeration", value: "", enumOptions: [ { title: "全部年份", value: "" }, { title: "即将上线", value: "即将上线" }, { title: "2026", value: "2026" }, { title: "2025", value: "2025" }, { title: "2024", value: "2024" }, { title: "2023", value: "2023" }, { title: "2022", value: "2022" }, { title: "2021", value: "2021" }, { title: "2020", value: "2020" }, { title: "2019", value: "2019" }, { title: "2018", value: "2018" }, { title: "2017", value: "2017" }, { title: "2016", value: "2016" }, { title: "2015", value: "2015" }, { title: "2014-2011", value: "2014-2011" }, { title: "更早", value: "更早" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "ykKids",
      title: "少儿",
      functionName: "loadYkKids",
      cacheDuration: 600,
      params: [
        { name: "mainArea", title: "地区", type: "enumeration", value: "", enumOptions: [ { title: "全部地区", value: "" }, { title: "中国内地", value: "中国内地" }, { title: "中国香港", value: "中国香港" }, { title: "中国台湾", value: "中国台湾" }, { title: "韩国", value: "韩国" }, { title: "美国", value: "美国" }, { title: "英国", value: "英国" }, { title: "日本", value: "日本" }, { title: "泰国", value: "泰国" } ] },
        { name: "year", title: "年份", type: "enumeration", value: "", enumOptions: [ { title: "全部年份", value: "" }, { title: "即将上线", value: "即将上线" }, { title: "2026", value: "2026" }, { title: "2025", value: "2025" }, { title: "2024", value: "2024" }, { title: "2023", value: "2023" }, { title: "2022", value: "2022" }, { title: "2021", value: "2021" }, { title: "2020", value: "2020" }, { title: "2019", value: "2019" }, { title: "2018", value: "2018" }, { title: "2017", value: "2017" }, { title: "2016", value: "2016" }, { title: "2015", value: "2015" }, { title: "2014-2011", value: "2014-2011" }, { title: "更早", value: "更早" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    }
  ]
};

var YK_FALLBACK = "https://youku-api.xtbecdi7690.workers.dev";

var YK_CAT = { tv: "电视剧", movie: "电影", variety: "综艺", anime: "动漫", doc: "纪录片", kids: "少儿" };

async function ykFetch(category, params, page) {
  params = params || {};
  var base = String(params.base || "").trim();
  if (!/^https?:\/\//i.test(base)) base = YK_FALLBACK;
  if (base.charAt(base.length - 1) === "/") base = base.slice(0, -1);
  var u = base + "?category=" + encodeURIComponent(category) + "&page=" + (parseInt(page, 10) || 1);
  if (params.mainArea) u += "&area=" + encodeURIComponent(params.mainArea);
  if (params.year) u += "&year=" + encodeURIComponent(params.year);
  var res = await Widget.http.get(u, { headers: { accept: "application/json" } });
  var body = res && res.data !== undefined ? res.data : res;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch (e) { body = null; } }
  if (!body) throw new Error("优酷 Worker 没有回应，请检查 API 地址");
  if (body.ok === false) throw new Error("优酷 Worker 出错：" + String(body.error || body.message || "未知原因"));
  var items = body.items || [];
  var cards = [];
  var seen = {};
  for (var i = 0; i < items.length; i++) {
    var t = String(items[i].title || "").trim();
    if (!t || seen[t]) continue;
    seen[t] = 1;
    // Bolinxxlin：Worker v2 会回传年份与标签；旧 Worker 没有就是 0
    var tags = Array.isArray(items[i].tags) ? items[i].tags : [];
    var genre = tags.filter(function (x) { return /·/.test(String(x)); }).join(" · ").replace(/\s+/g, "");
    cards.push({ cid: "yk" + t, title: t, year: parseInt(items[i].year, 10) || 0, genre: genre });
  }
  return cards;
}
function ykNorm(s) {
  return String(s || "").toLowerCase()
    .replace(/[\s·・:：!！?？,，.。'"、]/g, "")
    .replace(/[（(][^)）]*[)）]/g, "");
}

function ykVariants(title) {
  var raw = String(title || "").trim();
  if (!raw) return [];
  var list = [];
  function add(x) {
    x = String(x || "").trim();
    if (x.length >= 2 && list.indexOf(x) < 0) list.push(x);
  }
  add(raw);
  var a = raw.replace(/[（(][^)）]*[)）]/g, "").replace(/【[^】]*】/g, "").replace(/\[[^\]]*\]/g, "").trim();
  add(a);
  var b = a.replace(/[·・].*$/, "").trim();
  add(b);
  var c = b.replace(/第\s*[0-9一二三四五六七八九十]+\s*[季期部篇].*$/, "").trim();
  add(c);
  var d = c.replace(/\s*(年番|完结季|完结篇|特别篇|普通话版|国语版|日语版|粤语版|中配版)$/, "").trim();
  add(d);
  var e = d.replace(/\s*(爽看版|精编版|加更版|会员版|悠享版|抢先版|完整版|导演剪辑版|速看版|高能版|纯享版|竖屏版|横屏版|特辑|番外|大结局)$/, "").trim();
  add(e);
  return list;
}

function ykJunk(title) {
  return /(拆解|解说|盘点|大赏|合集|预告|花絮|精选|混剪|周周看|名场面|彩蛋|剧情回顾|幕后|cut合集)/i.test(String(title || ""));
}

function ykGrams(s) {
  var t = ykNorm(s);
  var set = {};
  for (var i = 0; i < t.length - 1; i++) set[t.substr(i, 2)] = 1;
  if (t.length === 1) set[t] = 1;
  return set;
}

function ykSim(a, b) {
  var ga = ykGrams(a), gb = ykGrams(b);
  var ka = Object.keys(ga), kb = Object.keys(gb);
  if (!ka.length || !kb.length) return 0;
  var inter = 0;
  for (var i = 0; i < ka.length; i++) if (gb[ka[i]]) inter++;
  return inter / (ka.length + kb.length - inter);
}

function ykBest(results, names, year, kind) {
  var best = null, bestScore = 0;
  var imgAlt = null, imgScore = -1;
  for (var i = 0; i < (results || []).length; i++) {
    var r = results[i];
    if (!r || !r.id) continue;
    var title = r.name || r.title || r.original_name || r.original_title || "";
    var alt = (r.original_name || r.original_title || "");
    var score = 0;
    for (var n = 0; n < names.length; n++) {
      var s2 = Math.max(ykSim(names[n], title), alt ? ykSim(names[n], alt) : 0);
      if (s2 > score) score = s2;
    }
    if (score < (year ? 0.6 : 0.8)) continue; // Bolinxxlin：片名不够像就跳过，避免配错海报
    var date = String(r.first_air_date || r.release_date || "");
    if (year && date.slice(0, 4) === String(year)) score += 0.5;
    else if (year && date && Math.abs(parseInt(date.slice(0, 4), 10) - parseInt(year, 10)) === 1) score += 0.25;
    score += Math.min(0.2, (r.popularity || 0) / 5000);
    if (r.poster_path && score > imgScore) { imgScore = score; imgAlt = r; }
    if (score > bestScore) { bestScore = score; best = r; }
  }
  if (!best || bestScore < 0.72) return null;
  if (!best.poster_path && !best.backdrop_path && imgAlt && imgScore >= bestScore - 0.18) best = imgAlt;
  return {
    id: best.id,
    kind: kind,
    poster: best.poster_path || "",
    backdrop: best.backdrop_path || "",
    date: best.first_air_date || best.release_date || "",
    vote: best.vote_average || 0
  };
}

// Bolinxxlin：同一时间最多 8 个 TMDB 请求，24 行一起载入也不会被限流。
var TMDB_SLOT = 8, TMDB_BUSY = 0, TMDB_QUEUE = [];
function tmdbAcquire() { if (TMDB_BUSY < TMDB_SLOT) { TMDB_BUSY++; return Promise.resolve(); } return new Promise(function (r) { TMDB_QUEUE.push(r); }); }
function tmdbRelease() { var n = TMDB_QUEUE.shift(); if (n) n(); else TMDB_BUSY--; }
async function ykSearch(kind, query) {
  await tmdbAcquire();
  try {
    var r = await Widget.tmdb.get("search/" + kind, { params: { query: query, language: "zh-CN", include_adult: "false" } });
    tmdbRelease();
    return (r && r.results) || [];
  } catch (e) {
    tmdbRelease();
    var failed = [];
    failed.failed = true; // Bolinxxlin：请求失败，不当成查无此片
    return failed;
  }
}

async function cacheGet(key) {
  try {
    var v = await Widget.storage.get(key);
    if (!v) return null;
    var o = typeof v === "string" ? JSON.parse(v) : v;
    if (o && o.ts && Date.now() - o.ts < (o.id ? 604800000 : 86400000)) return o; // Bolinxxlin：查不到的只记 1 天，新剧上了 TMDB 就能补上
  } catch (e) {}
  return null;
}

async function cacheSet(key, obj) {
  try { await Widget.storage.set(key, JSON.stringify(Object.assign({ ts: Date.now() }, obj))); } catch (e) {}
}
// Bolinxxlin：老剧出新一季时，用平台年份那一季的首播日期，排序才会排在前面
async function ykSeasonDate(id, year) {
  await tmdbAcquire();
  try {
    var d = await Widget.tmdb.get("tv/" + id, { params: { language: "zh-CN" } });
    tmdbRelease();
    var ss = (d && d.seasons) || [], best = "";
    for (var i = 0; i < ss.length; i++) {
      var a = String(ss[i].air_date || "");
      if (Number(ss[i].season_number) > 0 && a.slice(0, 4) === String(year) && a > best) best = a;
    }
    return best;
  } catch (e) {
    tmdbRelease();
    return "";
  }
}

async function ykMatchOne(card, kind) {
  if (ykJunk(card.title)) return null;
  var ck = "ykpc:tmdb:" + card.cid;
  var cached = await cacheGet(ck);
  if (cached) return cached.id ? cached : null;
  var names = ykVariants(card.title).slice(0, 2);
  var hit = null, anyFailed = false;
  for (var i = 0; i < names.length && !hit; i++) {
    var res = await ykSearch(kind, names[i]);
    if (res.failed) anyFailed = true;
    hit = ykBest(res, names, card.year, kind);
  }
  if (!hit) {
    var alt = kind === "tv" ? "movie" : "tv";
    var res2 = await ykSearch(alt, names[0]);
    if (res2.failed) anyFailed = true;
    hit = ykBest(res2, names, card.year, alt);
  }
  if (hit && hit.kind === "tv" && card.year && String(hit.date || "").slice(0, 4) < String(card.year)) {
    hit.date = (await ykSeasonDate(hit.id, card.year)) || hit.date;
  }
  if (hit || !anyFailed) await cacheSet(ck, hit ? hit : { id: 0 });
  return hit;
}

function ykToItem(card, hit) {
  var poster = hit.poster ? "https://image.tmdb.org/t/p/w500" + hit.poster : "";
  var backdrop = hit.backdrop ? "https://image.tmdb.org/t/p/w780" + hit.backdrop : poster;
  if (!poster && !backdrop) return null;
  return {
    id: hit.id,
    type: "tmdb",
    title: card.title,
    mediaType: hit.kind,
    posterPath: poster,
    backdropPath: backdrop,
    coverUrl: backdrop,
    releaseDate: hit.date || (card.year ? String(card.year) : ""),
    rating: hit.vote > 0 ? hit.vote : undefined,
    genreTitle: card.genre || ""
  };
}

async function ykResolveAll(cards, kind) {
  // Bolinxxlin：照平台原本的顺序输出（热门排序不被打乱），电影与剧集分开去重
  var hits = new Array(cards.length), next = 0;
  async function worker() {
    while (next < cards.length) {
      var i = next++;
      try { hits[i] = await ykMatchOne(cards[i], kind); } catch (e) { hits[i] = null; }
    }
  }
  await Promise.all(Array.from({ length: 12 }, function () { return worker(); }));
  var out = [], seen = {};
  for (var i = 0; i < cards.length; i++) {
    var hit = hits[i];
    if (!hit || !hit.id || seen[hit.kind + ":" + hit.id]) continue;
    var item = ykToItem(cards[i], hit);
    if (!item) continue;
    seen[hit.kind + ":" + hit.id] = 1;
    out.push(item);
  }
  return out;
}

async function loadYkChannel(chKey, params) {
  params = params || {};
  var cat = YK_CAT[chKey];
  if (!cat) return [];
  var kind = chKey === "movie" ? "movie" : "tv";
  return await fillRexPage(params.page, function (sp) { return ykFetch(cat, params, sp); }, function (cards) { return ykResolveAll(cards, kind); }, fillKey("yk", chKey, params));
}
async function loadYkTv(params) { return await loadYkChannel("tv", params); }
async function loadYkMovie(params) { return await loadYkChannel("movie", params); }
async function loadYkVariety(params) { return await loadYkChannel("variety", params); }
async function loadYkAnime(params) { return await loadYkChannel("anime", params); }
async function loadYkDoc(params) { return await loadYkChannel("doc", params); }
async function loadYkKids(params) { return await loadYkChannel("kids", params); }

// Bolinxxlin：Rex 每一页尽量补到 FILL_TARGET 部（跟 Rex首页一样 200 部），最多读平台 FILL_MAX 页；
// 超过 FILL_BUDGET 毫秒就先交出已找到的，下一页从没读的地方接着读。每页起点会记下来，翻页不重复、不漏片。
var FILL_TARGET = 200, FILL_MAX = 40, FILL_BUDGET = 25000, FILL_TTL = 86400000;
async function fillGet(key) {
  try { var v = await Widget.storage.get(key); if (!v) return 0; var o = typeof v === "string" ? JSON.parse(v) : v; return o && Date.now() - o.ts < FILL_TTL ? o.sp : 0; } catch (e) { return 0; }
}
async function fillSet(key, sp) { try { await Widget.storage.set(key, JSON.stringify({ ts: Date.now(), sp: sp })); } catch (e) {} }
async function fillRexPage(page, fetchCards, resolveCards, key) {
  var p = Math.max(1, parseInt(page, 10) || 1);
  var start = 1;
  if (p > 1) {
    start = await fillGet(key + ":" + p);
    if (!start) { await fillRexPage(p - 1, fetchCards, resolveCards, key); start = await fillGet(key + ":" + p); }
    if (!start) return [];
  }
  var out = [], seen = {}, sp = start, t0 = Date.now();
  function grab(n) { return Promise.resolve().then(function () { return fetchCards(n); }); }
  var pending = grab(sp);
  for (; sp < start + FILL_MAX && out.length < FILL_TARGET; sp++) {
    var cards;
    try { cards = await pending; } catch (e) { if (sp === start) throw e; break; }
    if (!cards || !cards.length) { sp = 0; break; }
    var more = sp + 1 < start + FILL_MAX && Date.now() - t0 < FILL_BUDGET;
    // 一边配对这一页，一边先抓下一页
    pending = more ? grab(sp + 1) : null;
    if (pending) pending.catch(function () {});
    var items = await resolveCards(cards);
    // 整页收完再停（可能略多于 200），平台这一页剩下的片才不会被跳过
    for (var i = 0; i < items.length; i++) {
      var k = items[i].mediaType + ":" + items[i].id;
      if (!seen[k]) { seen[k] = 1; out.push(items[i]); }
    }
    if (!more) { sp++; break; }
  }
  // Bolinxxlin：每页按首映／首播时间从新到旧排（跟 Rex首页一样），没有日期的排最后
  out.sort(function (a, b) { return String(b.releaseDate || "").localeCompare(String(a.releaseDate || "")); });
  await fillSet(key + ":" + (p + 1), sp);
  return out;
}
function fillKey(prefix, chKey, params) {
  var o = {}; for (var k in params || {}) if (k !== "page") o[k] = params[k];
  return prefix + ":fill:" + chKey + ":" + JSON.stringify(o);
}
