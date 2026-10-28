// B站排行片单 · Bolinxxlin
// 读 B站公开的番剧／影视排行榜，配对 TMDB 显示海报；只有片单，不含播放（播放靠自己的媒体库或片源模块）。
var WidgetMetadata = {
  id: "bilibili.rank.catalog",
  title: "B站排行",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  description: "B站番剧、国创、纪录片、电影、电视剧、综艺排行榜，照排名显示，配对 TMDB 海报；只有片单，不含播放。",
  author: "Bolinxxlin",
  site: "https://www.bilibili.com/v/popular/rank/all",
  modules: [
    {
      id: "blAnime",
      title: "番剧",
      functionName: "loadAnime",
      cacheDuration: 1800,
      params: [
        { name: "day", title: "统计周期", type: "enumeration", value: "3", enumOptions: [ { title: "三日", value: "3" }, { title: "一周", value: "7" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "blGuochuang",
      title: "国创",
      functionName: "loadGuochuang",
      cacheDuration: 1800,
      params: [
        { name: "day", title: "统计周期", type: "enumeration", value: "3", enumOptions: [ { title: "三日", value: "3" }, { title: "一周", value: "7" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "blDoc",
      title: "纪录片",
      functionName: "loadDoc",
      cacheDuration: 1800,
      params: [
        { name: "day", title: "统计周期", type: "enumeration", value: "3", enumOptions: [ { title: "三日", value: "3" }, { title: "一周", value: "7" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "blMovie",
      title: "电影",
      functionName: "loadMovie",
      cacheDuration: 1800,
      params: [
        { name: "day", title: "统计周期", type: "enumeration", value: "3", enumOptions: [ { title: "三日", value: "3" }, { title: "一周", value: "7" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "blTv",
      title: "电视剧",
      functionName: "loadTv",
      cacheDuration: 1800,
      params: [
        { name: "day", title: "统计周期", type: "enumeration", value: "3", enumOptions: [ { title: "三日", value: "3" }, { title: "一周", value: "7" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "blVariety",
      title: "综艺",
      functionName: "loadVariety",
      cacheDuration: 1800,
      params: [
        { name: "day", title: "统计周期", type: "enumeration", value: "3", enumOptions: [ { title: "三日", value: "3" }, { title: "一周", value: "7" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    }
  ]
};

var BL_TYPE = { blAnime: ["1", "tv"], blGuochuang: ["4", "tv"], blDoc: ["3", "tv"], blMovie: ["2", "movie"], blTv: ["5", "tv"], blVariety: ["7", "tv"] };
var BL_UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";
var BL_API = [
  "https://api.bilibili.com/pgc/web/rank/list?day=%DAY%&season_type=%TYPE%",
  "https://api.bilibili.com/pgc/season/rank/web/list?day=%DAY%&season_type=%TYPE%"
];

// 排行榜一次给完（约 100 部），没有翻页：第 2 页起是空的
async function blFetch(type, day) {
  var lastErr = null;
  for (var i = 0; i < BL_API.length; i++) {
    try {
      var res = await Widget.http.get(BL_API[i].replace("%DAY%", day).replace("%TYPE%", type), { headers: { "User-Agent": BL_UA, Referer: "https://www.bilibili.com/", Accept: "application/json" } });
      var body = res && res.data !== undefined ? res.data : res;
      if (typeof body === "string") body = JSON.parse(body);
      var list = body && ((body.result && body.result.list) || (body.data && body.data.list));
      if (body && body.code === 0 && Array.isArray(list)) {
        var cards = [], seen = {};
        for (var n = 0; n < list.length; n++) {
          var x = list[n] || {};
          var title = String(x.title || "").trim(), sid = String(x.season_id || x.ss_id || "");
          if (!title || !sid || seen[sid]) continue;
          seen[sid] = 1;
          var m = String(x.new_ep && x.new_ep.pub_time || x.pub_index || "").match(/(19|20)[0-9]{2}/);
          cards.push({ cid: "bl" + sid, title: title, year: m ? parseInt(m[0], 10) : 0, genre: String(x.badge || "") });
        }
        return cards;
      }
      lastErr = new Error("B站排行返回异常：" + String(body && (body.message || body.code)));
    } catch (e) { lastErr = new Error("B站排行暂时读不到，请稍后刷新"); }
  }
  throw lastErr || new Error("B站排行暂时读不到，请稍后刷新");
}

async function blLoad(key, params) {
  params = params || {};
  if ((parseInt(params.page, 10) || 1) > 1) return [];
  var c = BL_TYPE[key];
  var cards = await blFetch(c[0], params.day === "7" ? "7" : "3");
  return await blResolveAll(cards, c[1]);
}

function blNorm(s) {
  return String(s || "").toLowerCase()
    .replace(/[\s·・:：!！?？,，.。'"、]/g, "")
    .replace(/[（(][^)）]*[)）]/g, "");
}

function blVariants(title) {
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

function blJunk(title) {
  return /(拆解|解说|盘点|大赏|合集|预告|花絮|精选|混剪|周周看|名场面|彩蛋|剧情回顾|幕后|cut合集)/i.test(String(title || ""));
}

function blGrams(s) {
  var t = blNorm(s);
  var set = {};
  for (var i = 0; i < t.length - 1; i++) set[t.substr(i, 2)] = 1;
  if (t.length === 1) set[t] = 1;
  return set;
}

function blSim(a, b) {
  var ga = blGrams(a), gb = blGrams(b);
  var ka = Object.keys(ga), kb = Object.keys(gb);
  if (!ka.length || !kb.length) return 0;
  var inter = 0;
  for (var i = 0; i < ka.length; i++) if (gb[ka[i]]) inter++;
  return inter / (ka.length + kb.length - inter);
}

function blBest(results, names, year, kind) {
  var best = null, bestScore = 0;
  var imgAlt = null, imgScore = -1;
  for (var i = 0; i < (results || []).length; i++) {
    var r = results[i];
    if (!r || !r.id) continue;
    var title = r.name || r.title || r.original_name || r.original_title || "";
    var alt = (r.original_name || r.original_title || "");
    var score = 0;
    for (var n = 0; n < names.length; n++) {
      var s2 = Math.max(blSim(names[n], title), alt ? blSim(names[n], alt) : 0);
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
async function blSearch(kind, query) {
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
async function blSeasonDate(id, year) {
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

async function blMatchOne(card, kind) {
  if (blJunk(card.title)) return null;
  var ck = "blpc:tmdb:" + card.cid;
  var cached = await cacheGet(ck);
  if (cached) return cached.id ? cached : null;
  var names = blVariants(card.title).slice(0, 2);
  var hit = null, anyFailed = false;
  for (var i = 0; i < names.length && !hit; i++) {
    var res = await blSearch(kind, names[i]);
    if (res.failed) anyFailed = true;
    hit = blBest(res, names, card.year, kind);
  }
  if (!hit) {
    var alt = kind === "tv" ? "movie" : "tv";
    var res2 = await blSearch(alt, names[0]);
    if (res2.failed) anyFailed = true;
    hit = blBest(res2, names, card.year, alt);
  }
  if (hit && hit.kind === "tv" && card.year && String(hit.date || "").slice(0, 4) < String(card.year)) {
    hit.date = (await blSeasonDate(hit.id, card.year)) || hit.date;
  }
  if (hit || !anyFailed) await cacheSet(ck, hit ? hit : { id: 0 });
  return hit;
}

function blToItem(card, hit) {
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

async function blResolveAll(cards, kind) {
  // Bolinxxlin：照平台原本的顺序输出（热门排序不被打乱），电影与剧集分开去重
  var hits = new Array(cards.length), next = 0;
  async function worker() {
    while (next < cards.length) {
      var i = next++;
      try { hits[i] = await blMatchOne(cards[i], kind); } catch (e) { hits[i] = null; }
    }
  }
  await Promise.all(Array.from({ length: 12 }, function () { return worker(); }));
  var out = [], seen = {};
  for (var i = 0; i < cards.length; i++) {
    var hit = hits[i];
    if (!hit || !hit.id || seen[hit.kind + ":" + hit.id]) continue;
    var item = blToItem(cards[i], hit);
    if (!item) continue;
    seen[hit.kind + ":" + hit.id] = 1;
    out.push(item);
  }
  return out;
}

async function loadAnime(params) { return await blLoad("blAnime", params); }
async function loadGuochuang(params) { return await blLoad("blGuochuang", params); }
async function loadDoc(params) { return await blLoad("blDoc", params); }
async function loadMovie(params) { return await blLoad("blMovie", params); }
async function loadTv(params) { return await blLoad("blTv", params); }
async function loadVariety(params) { return await blLoad("blVariety", params); }
