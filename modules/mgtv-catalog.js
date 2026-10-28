// 芒果TV片单 · 原作者 MakkaPakka（github.com/MakkaPakka518/Rex_Widgets），Bolinxxlin 改编号与默认值（只有片单）
var WidgetMetadata = {
  id: "mgtv.video.catalog",
  title: "芒果TV片单",
  version: "1.7.0",
  requiredVersion: "0.0.1",
  description: "芒果TV片库：每个频道独立筛选（类型/地区/年份/状态/资费/排序），可多级叠加，自动翻页，输出 TMDB 条目（含封面）",
  author: "MakkaPakka（Bolinxxlin 改编号与默认值）",
  modules: [
    {
      id: "mgTv",
      title: "电视剧",
      functionName: "loadMgTv",
      channelId: 2,
      cacheDuration: 600,
      params: [
        { name: "kind", title: "类型", type: "enumeration", value: "a1", enumOptions: [ { title: "全部", value: "a1" }, { title: "爱情", value: "3094" }, { title: "都市", value: "3093" }, { title: "青春", value: "3003" }, { title: "奇幻", value: "3092" }, { title: "军旅", value: "3091" }, { title: "武侠", value: "3090" }, { title: "古装", value: "148" }, { title: "科幻", value: "3088" }, { title: "竞技", value: "3087" }, { title: "传奇", value: "3086" }, { title: "家庭", value: "3007" }, { title: "历史", value: "3085" }, { title: "仙侠", value: "3084" }, { title: "喜剧", value: "3005" }, { title: "革命", value: "3083" }, { title: "悬疑", value: "3002" }, { title: "民国", value: "3153" }, { title: "现实", value: "3082" }, { title: "乡村", value: "3010" }, { title: "权谋", value: "3080" }, { title: "商战", value: "3078" }, { title: "逆袭", value: "3077" }, { title: "年代剧", value: "3116" }, { title: "神话", value: "3076" } ] },
        { name: "area", title: "地区", type: "enumeration", value: "a1", enumOptions: [ { title: "全部", value: "a1" }, { title: "内地", value: "10" }, { title: "港台", value: "12" }, { title: "泰国", value: "193" } ] },
        { name: "year", title: "年份", type: "enumeration", value: "all", enumOptions: [ { title: "全部", value: "all" }, { title: "2026", value: "2026" }, { title: "2025", value: "2025" }, { title: "2024", value: "2024" }, { title: "2023", value: "2023" }, { title: "2022", value: "2022" }, { title: "2021", value: "2021" }, { title: "2020", value: "2020" }, { title: "2019", value: "2019" }, { title: "2018", value: "2018" }, { title: "2017", value: "2017" }, { title: "2016", value: "2016" }, { title: "2015", value: "2015" }, { title: "2010-2014", value: "2014t2010" }, { title: "2000-2009", value: "2009t2000" }, { title: "90年代", value: "1990s" }, { title: "更早", value: "1989e" } ] },
        { name: "feature", title: "状态", type: "enumeration", value: "all", enumOptions: [ { title: "全部", value: "all" }, { title: "已完结", value: "0" } ] },
        { name: "chargeInfo", title: "资费", type: "enumeration", value: "a1", enumOptions: [ { title: "全部", value: "a1" }, { title: "免费", value: "b1" }, { title: "VIP", value: "b2" } ] },
        { name: "sort", title: "排序", type: "enumeration", value: "c1", enumOptions: [ { title: "最热", value: "c2" }, { title: "最新", value: "c1" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "mgMovie",
      title: "电影",
      functionName: "loadMgMovie",
      channelId: 3,
      cacheDuration: 600,
      params: [
        { name: "kind", title: "类型", type: "enumeration", value: "a1", enumOptions: [ { title: "全部", value: "a1" }, { title: "爱情", value: "175" }, { title: "喜剧", value: "176" }, { title: "青春", value: "39" }, { title: "奇幻", value: "3027" }, { title: "剧情", value: "3028" }, { title: "国漫", value: "3096" }, { title: "科幻", value: "178" }, { title: "动作", value: "177" }, { title: "励志", value: "34" }, { title: "历史", value: "46" }, { title: "古装", value: "35" }, { title: "家庭", value: "36" }, { title: "战争", value: "44" }, { title: "犯罪", value: "3097" }, { title: "悬疑", value: "3029" }, { title: "经典", value: "3098" }, { title: "冒险", value: "3099" }, { title: "灾难", value: "3100" } ] },
        { name: "edition", title: "版本", type: "enumeration", value: "a1", enumOptions: [ { title: "全部", value: "a1" }, { title: "院线大片", value: "182" }, { title: "独播影院", value: "183" } ] },
        { name: "area", title: "地区", type: "enumeration", value: "a1", enumOptions: [ { title: "全部", value: "a1" }, { title: "内地", value: "27" }, { title: "中国香港", value: "3036" }, { title: "欧美", value: "3073" }, { title: "其他", value: "other" } ] },
        { name: "year", title: "年份", type: "enumeration", value: "all", enumOptions: [ { title: "全部", value: "all" }, { title: "2026", value: "2026" }, { title: "2025", value: "2025" }, { title: "2024", value: "2024" }, { title: "2023", value: "2023" }, { title: "2022", value: "2022" }, { title: "2021", value: "2021" }, { title: "2020", value: "2020" }, { title: "2019", value: "2019" }, { title: "2018", value: "2018" }, { title: "2017", value: "2017" }, { title: "2016", value: "2016" }, { title: "2015", value: "2015" }, { title: "2010-2014", value: "2014t2010" }, { title: "2000-2009", value: "2009t2000" }, { title: "90年代", value: "1990s" }, { title: "更早", value: "1989e" } ] },
        { name: "chargeInfo", title: "资费", type: "enumeration", value: "a1", enumOptions: [ { title: "全部", value: "a1" }, { title: "免费", value: "b1" }, { title: "VIP", value: "b2" }, { title: "VIP用券", value: "b3" }, { title: "付费点播", value: "b4" } ] },
        { name: "sort", title: "排序", type: "enumeration", value: "c1", enumOptions: [ { title: "最热", value: "c2" }, { title: "最新", value: "c1" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "mgVariety",
      title: "综艺",
      functionName: "loadMgVariety",
      channelId: 1,
      cacheDuration: 600,
      params: [
        { name: "kind", title: "类型", type: "enumeration", value: "a1", enumOptions: [ { title: "全部", value: "a1" }, { title: "音乐", value: "8" }, { title: "推理", value: "3075" }, { title: "生活", value: "9" }, { title: "情感", value: "7" }, { title: "旅游", value: "170" }, { title: "播客", value: "3157" }, { title: "文化", value: "3143" }, { title: "美食", value: "3011" }, { title: "语言", value: "3152" }, { title: "亲子", value: "179" }, { title: "游戏", value: "3144" }, { title: "演唱会", value: "4" }, { title: "竞技", value: "174" }, { title: "表演", value: "180" } ] },
        { name: "chargeInfo", title: "资费", type: "enumeration", value: "a1", enumOptions: [ { title: "全部", value: "a1" }, { title: "免费", value: "b1" }, { title: "VIP", value: "b2" } ] },
        { name: "sort", title: "排序", type: "enumeration", value: "c1", enumOptions: [ { title: "最热", value: "c2" }, { title: "最新", value: "c1" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "mgAnime",
      title: "动漫",
      functionName: "loadMgAnime",
      channelId: 50,
      cacheDuration: 600,
      params: [
        { name: "kind", title: "类型", type: "enumeration", value: "a1", enumOptions: [ { title: "全部", value: "a1" }, { title: "恋爱", value: "84" }, { title: "冒险", value: "87" }, { title: "魔法", value: "64" }, { title: "青春", value: "63" }, { title: "搞笑", value: "62" }, { title: "玄幻", value: "3150" }, { title: "武侠", value: "195" }, { title: "科幻", value: "90" }, { title: "经典", value: "71" }, { title: "特摄", value: "66" }, { title: "悬疑", value: "3112" } ] },
        { name: "area", title: "地区", type: "enumeration", value: "a1", enumOptions: [ { title: "全部", value: "a1" }, { title: "内地", value: "52" }, { title: "欧美", value: "53" }, { title: "其他", value: "55" } ] },
        { name: "edition", title: "版本", type: "enumeration", value: "a1", enumOptions: [ { title: "全部", value: "a1" }, { title: "TV版", value: "57" }, { title: "剧场版", value: "165" }, { title: "真人版", value: "167" }, { title: "其他", value: "58" } ] },
        { name: "sort", title: "排序", type: "enumeration", value: "c1", enumOptions: [ { title: "最新", value: "c1" }, { title: "最热", value: "c2" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "mgDoc",
      title: "纪录片",
      functionName: "loadMgDoc",
      channelId: 51,
      cacheDuration: 600,
      params: [
        { name: "kind", title: "类型", type: "enumeration", value: "a1", enumOptions: [ { title: "全部", value: "a1" }, { title: "文化", value: "98" }, { title: "励志", value: "99" }, { title: "历史", value: "100" }, { title: "生活", value: "97" }, { title: "乡村", value: "3147" }, { title: "职业", value: "3148" }, { title: "青春", value: "3149" }, { title: "旅游", value: "103" }, { title: "科普", value: "3146" }, { title: "军事", value: "101" }, { title: "运动", value: "104" }, { title: "动物", value: "3026" } ] },
        { name: "sort", title: "排序", type: "enumeration", value: "c1", enumOptions: [ { title: "最新", value: "c1" }, { title: "最热", value: "c2" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "mgKids",
      title: "少儿",
      functionName: "loadMgKids",
      channelId: 10,
      cacheDuration: 600,
      params: [
        { name: "kind", title: "类型", type: "enumeration", value: "a1", enumOptions: [ { title: "全部", value: "a1" }, { title: "儿歌", value: "184" }, { title: "冒险", value: "87" }, { title: "益智", value: "83" }, { title: "魔法", value: "3103" }, { title: "机甲", value: "3104" }, { title: "经典", value: "95" }, { title: "竞技", value: "88" }, { title: "搞笑", value: "62" }, { title: "励志", value: "194" }, { title: "科幻", value: "90" }, { title: "早教", value: "3101" } ] },
        { name: "fitAge", title: "年龄段", type: "enumeration", value: "a1", enumOptions: [ { title: "全部", value: "a1" }, { title: "0-3岁", value: "74" }, { title: "4-6岁", value: "75" }, { title: "7-10岁", value: "76" }, { title: "11-14岁", value: "77" } ] },
        { name: "sort", title: "排序", type: "enumeration", value: "c1", enumOptions: [ { title: "最新", value: "c1" }, { title: "最热", value: "c2" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    }
  ]
};

var MG_API = "https://pianku.api.mgtv.com/rider/list/pcweb/v3";
var MG_KEYS = ["kind", "area", "year", "feature", "chargeInfo", "sort", "edition", "fitAge"];
var MG_CH = { tv: 2, movie: 3, variety: 1, anime: 50, doc: 51, kids: 10 };

function mgQs(o) {
  var p = [];
  for (var k in o) {
    if (!o.hasOwnProperty(k)) continue;
    p.push(encodeURIComponent(k) + "=" + encodeURIComponent(o[k]));
  }
  return p.join("&");
}

async function mgFetch(cid, params, page) {
  params = params || {};
  var q = {
    allowedRC: "1", platform: "pcweb", channelId: cid,
    pn: parseInt(page, 10) || 1, pc: 24, hudong: 1, _support: "10000000"
  };
  for (var i = 0; i < MG_KEYS.length; i++) {
    var k = MG_KEYS[i];
    if (params[k]) q[k] = params[k];
  }
  var res = await Widget.http.get(MG_API + "?" + mgQs(q), {
    headers: { Referer: "https://www.mgtv.com/lib/" + cid, accept: "application/json" }
  });
  var body = res && res.data !== undefined ? res.data : res;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch (e) { body = null; } }
  if (!body || !body.data) throw new Error("芒果TV片库返回格式异常，请稍后刷新");
  var docs = (body && body.data && body.data.hitDocs) || [];
  var cards = [];
  var seen = {};
  for (var n = 0; n < docs.length; n++) {
    var d = docs[n] || {};
    var title = String(d.title || "").trim();
    var cid2 = String(d.clipId || "");
    if (!title || !cid2 || seen[cid2]) continue;
    seen[cid2] = 1;
    cards.push({ cid: "mg" + cid2, title: title, year: parseInt(d.year, 10) || 0 });
  }
  return cards;
}

async function loadMgChannel(chKey, params) {
  var cid = MG_CH[chKey];
  if (!cid) return [];
  var kind = chKey === "movie" ? "movie" : "tv";
  return await fillRexPage((params || {}).page, function (sp) { return mgFetch(cid, params, sp); }, function (cards) { return mgResolveAll(cards, kind); }, fillKey("mg", chKey, params));
}
function mgNorm(s) {
  return String(s || "").toLowerCase()
    .replace(/[\s·・:：!！?？,，.。'"、]/g, "")
    .replace(/[（(][^)）]*[)）]/g, "");
}

function mgVariants(title) {
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

function mgJunk(title) {
  return /(拆解|解说|盘点|大赏|合集|预告|花絮|精选|混剪|周周看|名场面|彩蛋|剧情回顾|幕后|cut合集)/i.test(String(title || ""));
}

function mgGrams(s) {
  var t = mgNorm(s);
  var set = {};
  for (var i = 0; i < t.length - 1; i++) set[t.substr(i, 2)] = 1;
  if (t.length === 1) set[t] = 1;
  return set;
}

function mgSim(a, b) {
  var ga = mgGrams(a), gb = mgGrams(b);
  var ka = Object.keys(ga), kb = Object.keys(gb);
  if (!ka.length || !kb.length) return 0;
  var inter = 0;
  for (var i = 0; i < ka.length; i++) if (gb[ka[i]]) inter++;
  return inter / (ka.length + kb.length - inter);
}

function mgBest(results, names, year, kind) {
  var best = null, bestScore = 0;
  var imgAlt = null, imgScore = -1;
  for (var i = 0; i < (results || []).length; i++) {
    var r = results[i];
    if (!r || !r.id) continue;
    var title = r.name || r.title || r.original_name || r.original_title || "";
    var alt = (r.original_name || r.original_title || "");
    var score = 0;
    for (var n = 0; n < names.length; n++) {
      var s2 = Math.max(mgSim(names[n], title), alt ? mgSim(names[n], alt) : 0);
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

var MG_TMDB_SLOT = 8;
var MG_TMDB_BUSY = 0;
var MG_TMDB_QUEUE = [];

function mgAcquire() {
  if (MG_TMDB_BUSY < MG_TMDB_SLOT) { MG_TMDB_BUSY++; return Promise.resolve(); }
  return new Promise(function (res) { MG_TMDB_QUEUE.push(res); });
}
function mgRelease() {
  var next = MG_TMDB_QUEUE.shift();
  if (next) next(); else MG_TMDB_BUSY--;
}
function mgSleep(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

async function mgSearch(kind, query) {
  for (var attempt = 0; attempt < 3; attempt++) {
    await mgAcquire();
    try {
      var r = await Widget.tmdb.get("search/" + kind, { params: { query: query, language: "zh-CN", include_adult: "false" } });
      mgRelease();
      return (r && r.results) || [];
    } catch (e) {
      mgRelease();
      if (attempt === 2) { var failed = []; failed.failed = true; return failed; } // Bolinxxlin：请求失败，不当成查无此片
      await mgSleep(250 * (attempt + 1));
    }
  }
  return [];
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
async function mgSeasonDate(id, year) {
  await mgAcquire();
  try {
    var d = await Widget.tmdb.get("tv/" + id, { params: { language: "zh-CN" } });
    mgRelease();
    var ss = (d && d.seasons) || [], best = "";
    for (var i = 0; i < ss.length; i++) {
      var a = String(ss[i].air_date || "");
      if (Number(ss[i].season_number) > 0 && a.slice(0, 4) === String(year) && a > best) best = a;
    }
    return best;
  } catch (e) {
    mgRelease();
    return "";
  }
}

async function mgMatchOne(card, kind) {
  if (mgJunk(card.title)) return null;
  var ck = "mgpc:tmdb:" + card.cid;
  var cached = await cacheGet(ck);
  if (cached) return cached.id ? cached : null;
  var names = mgVariants(card.title).slice(0, 2);
  var hit = null, anyFailed = false;
  var rs = await Promise.all(names.map(function (n) { return mgSearch(kind, n); }));
  for (var i = 0; i < rs.length && !hit; i++) { if (rs[i].failed) anyFailed = true; hit = mgBest(rs[i], names, card.year, kind); }
  if (!hit) {
    var alt = kind === "tv" ? "movie" : "tv";
    var res2 = await mgSearch(alt, names[0]);
    if (res2.failed) anyFailed = true;
    hit = mgBest(res2, names, card.year, alt);
  }
  if (hit && hit.kind === "tv" && card.year && String(hit.date || "").slice(0, 4) < String(card.year)) {
    hit.date = (await mgSeasonDate(hit.id, card.year)) || hit.date;
  }
  if (hit || !anyFailed) await cacheSet(ck, hit ? hit : { id: 0 });
  return hit;
}

function mgToItem(card, hit) {
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

async function mgResolveAll(cards, kind) {
  // Bolinxxlin：照平台原本的顺序输出（热门排序不被打乱），电影与剧集分开去重
  var hits = new Array(cards.length), next = 0;
  async function worker() {
    while (next < cards.length) {
      var i = next++;
      try { hits[i] = await mgMatchOne(cards[i], kind); } catch (e) { hits[i] = null; }
    }
  }
  await Promise.all(Array.from({ length: 12 }, function () { return worker(); }));
  var out = [], seen = {};
  for (var i = 0; i < cards.length; i++) {
    var hit = hits[i];
    if (!hit || !hit.id || seen[hit.kind + ":" + hit.id]) continue;
    var item = mgToItem(cards[i], hit);
    if (!item) continue;
    seen[hit.kind + ":" + hit.id] = 1;
    out.push(item);
  }
  return out;
}

async function loadMgTv(params) { return await loadMgChannel("tv", params); }
async function loadMgMovie(params) { return await loadMgChannel("movie", params); }
async function loadMgVariety(params) { return await loadMgChannel("variety", params); }
async function loadMgAnime(params) { return await loadMgChannel("anime", params); }
async function loadMgDoc(params) { return await loadMgChannel("doc", params); }
async function loadMgKids(params) { return await loadMgChannel("kids", params); }

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
