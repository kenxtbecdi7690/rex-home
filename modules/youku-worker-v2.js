// 优酷片库中转 Worker（原作者 MakkaPakka；Bolinxxlin v2：片单收得更全、翻页记住进度、回传年份、加 debug）
// 只读片库清单（片名、标签、海报、年份），不抓视频。
// 部署：Cloudflare Dashboard → Workers → 新建 → 粘贴本文件 → 保存部署
const APP = "24679788";
const API = "mtop.youku.columbus.home.query";
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";
const CATS = { "电视剧": 1, "电影": 1, "综艺": 1, "动漫": 1, "少儿": 1, "纪录片": 1 };

let TOK = { tk: "", ck: "", ts: 0 };
const SESS = new Map(); // 筛选条件:页码 → 读下一页用的 session（30 分钟）

function ykMd5(str) {
  var s = unescape(encodeURIComponent(String(str)));
  var n = s.length, w = [];
  for (var i = 0; i < n; i++) w[i >> 2] = (w[i >> 2] || 0) | (s.charCodeAt(i) << ((i % 4) * 8));
  w[n >> 2] = (w[n >> 2] || 0) | (0x80 << ((n % 4) * 8));
  var bits = n * 8;
  var total = (((n + 8) >> 6) + 1) * 16;
  while (w.length < total) w.push(0);
  w[total - 2] = bits & 0xFFFFFFFF;
  w[total - 1] = Math.floor(bits / 4294967296);
  var K = [], S = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21];
  for (var q = 0; q < 64; q++) K[q] = Math.floor(Math.abs(Math.sin(q + 1)) * 4294967296);
  var a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
  function add(x, y) { return (x + y) & 0xFFFFFFFF; }
  function rol(x, k) { return (x << k) | (x >>> (32 - k)); }
  for (var off = 0; off < total; off += 16) {
    var oa = a, ob = b, oc = c, od = d;
    for (var i2 = 0; i2 < 64; i2++) {
      var f, g;
      if (i2 < 16) { f = (b & c) | (~b & d); g = i2; }
      else if (i2 < 32) { f = (d & b) | (~d & c); g = (5 * i2 + 1) % 16; }
      else if (i2 < 48) { f = b ^ c ^ d; g = (3 * i2 + 5) % 16; }
      else { f = c ^ (b | ~d); g = (7 * i2) % 16; }
      var tmp = d; d = c; c = b;
      b = add(b, rol(add(add(a, f), add(K[i2], w[off + g] | 0)), S[(i2 >> 4) * 4 + (i2 % 4)]));
      a = tmp;
    }
    a = add(a, oa); b = add(b, ob); c = add(c, oc); d = add(d, od);
  }
  function hex(x) {
    var o = "";
    for (var k = 0; k < 4; k++) o += ("0" + ((x >>> (k * 8)) & 0xFF).toString(16)).slice(-2);
    return o;
  }
  return hex(a) + hex(b) + hex(c) + hex(d);
}

function sysInfo() {
  return JSON.stringify({
    device: "pcweb", os: "pcweb", ver: "1.0.0.0", userAgent: UA,
    guid: "1590141704165YXe", appPackageKey: "com.youku.pcweb", young: 0,
    brand: "", network: "", ouid: "", idfa: "", scale: "", operator: "",
    resolution: "", pid: "36370125020498", appkey: APP, childGender: 0, disableUserRec: "0"
  });
}

async function raw(data) {
  const t = String(Date.now());
  const sign = ykMd5(TOK.tk + "&" + t + "&" + APP + "&" + data);
  const url = "https://acs.youku.com/h5/" + API + "/1.0/?jsv=2.6.1&appKey=" + APP +
    "&t=" + t + "&sign=" + sign + "&api=" + API + "&v=1.0&dataType=json&type=originaljson&data=" +
    encodeURIComponent(data);
  const res = await fetch(url, {
    headers: { "User-Agent": UA, Referer: "https://www.youku.com/ku/webtv", Cookie: TOK.ck }
  });
  let sc = "";
  try {
    const arr = res.headers.getSetCookie ? res.headers.getSetCookie() : [];
    sc = arr.length ? arr.join("|") : (res.headers.get("set-cookie") || "");
  } catch (e) { sc = res.headers.get("set-cookie") || ""; }
  const m1 = sc.match(/_m_h5_tk=([^;|,]+)/);
  const m2 = sc.match(/_m_h5_tk_enc=([^;|,]+)/);
  if (m1) {
    TOK.tk = m1[1].split("_")[0];
    TOK.ck = "_m_h5_tk=" + m1[1] + "; _m_h5_tk_enc=" + (m2 ? m2[1] : "");
    TOK.ts = Date.now();
  }
  const txt = await res.text();
  try { return JSON.parse(txt); } catch (e) { return null; }
}

async function call(data) {
  if (!TOK.tk || Date.now() - TOK.ts > 43200000) { try { await raw(data); } catch (e) {} }
  let j = await raw(data);
  if (j && j.ret && j.ret[0] && String(j.ret[0]).indexOf("TOKEN") >= 0) {
    try { await raw(data); } catch (e) {}
    j = await raw(data);
  }
  return j;
}

function collect(o, out) {
  if (!o || typeof o !== "object") return;
  if (Array.isArray(o)) { for (const x of o) collect(x, out); return; }
  const d = o.data;
  const img = d && (d.img || d.hImg || d.vImg || d.thumbUrl || d.imgUrl || "");
  if (d && typeof d.title === "string" && d.title.trim() && img) {
    const tags = (d.tags || []).map(x => x && (x.text && x.text.title || x.title)).filter(Boolean);
    out.push({ title: String(d.title).trim(), tags: tags, img: img, year: pickYear(d, tags) });
  }
  for (const k in o) {
    if (k === "action" || k === "trackShow" || k === "report") continue;
    collect(o[k], out);
  }
}

// 从各种可能的栏位找年份（找不到就是 0）
function pickYear(d, tags) {
  const cands = [d.year, d.releaseYear, d.showReleaseYear, d.publishYear, d.subtitle, d.subTitle, d.summary, d.desc].concat(tags || []);
  for (const c of cands) {
    const m = String(c == null ? "" : c).match(/(?:^|[^0-9])((?:19|20)[0-9]{2})(?:[^0-9]|$)/);
    if (m) return parseInt(m[1], 10);
  }
  return 0;
}

function findSession(o) {
  let res = null;
  (function w(x) {
    if (res || !x || typeof x !== "object") return;
    if (x.session && typeof x.session === "object" && x.session.subIndex !== undefined && x.session.id) { res = x.session; return; }
    for (const k in x) w(x[k]);
  })(o);
  return res;
}

async function youku(category, area, year, page) {
  page = parseInt(page, 10) || 1;
  let fp = "type:" + category;
  if (area) fp += "|mainArea:" + area;
  if (year) fp += "|year:" + year;
  const inner = {
    utdid: "FE1oI9Z/92QCAWeOjJcxfUHN", gray: "0", pageNo: 1, debug: 0,
    bizKey: "kuflix_pc_home", appPackageKey: "com.youku.pcweb",
    showNodeList: 1, reqSubNode: 1, nodeKey: "ALL", ip: "127.0.0.1",
    bizContext: JSON.stringify({ filterParam: fp, category: category, optionRefresh: 1 })
  };
  const pack = obj => JSON.stringify({ ms_codes: "2019061000", params: JSON.stringify(obj), system_info: sysInfo() });
  const j = await call(pack(inner));
  let out = [];
  collect(j, out);
  const now = Date.now();
  const remember = (p, s) => { if (s) SESS.set(fp + ":" + p, { s: s, ts: now }); };
  remember(1, findSession(j));
  if (page > 1) {
    out = [];
    // 从记得的最近一页开始接着读
    let p0 = 1;
    for (let p = page - 1; p >= 1; p--) {
      const hit = SESS.get(fp + ":" + p);
      if (hit && now - hit.ts < 1800000) { p0 = p; break; }
    }
    let sess = (SESS.get(fp + ":" + p0) || {}).s;
    for (let p = p0 + 1; p <= page && sess; p++) {
      const inner2 = Object.assign({}, inner, { pageNo: p, reqSubNode: 0, showNodeList: 0, session: JSON.stringify(sess) });
      const j2 = await call(pack(inner2));
      const o2 = [];
      collect(j2, o2);
      if (!o2.length) { out = []; break; }
      out = o2;
      sess = findSession(j2);
      remember(p, sess);
    }
  }
  const seen = {};
  const items = [];
  for (const it of out) {
    if (!it.title || seen[it.title]) continue;
    seen[it.title] = 1;
    items.push(it);
  }
  return items;
}

export default {
  async fetch(request) {
    const cors = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json; charset=utf-8"
    };
    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    const u = new URL(request.url);
    const category = u.searchParams.get("category") || "电视剧";
    if (!CATS[category]) return new Response(JSON.stringify({ error: "bad category" }), { headers: cors });
    const area = u.searchParams.get("area") || "";
    const year = u.searchParams.get("year") || "";
    const page = u.searchParams.get("page") || "1";
    if (u.searchParams.get("debug")) {
      // 列出回传里所有带 title 的区块与它们的栏位名，方便查为什么片少
      const inner = { utdid: "FE1oI9Z/92QCAWeOjJcxfUHN", gray: "0", pageNo: 1, debug: 0, bizKey: "kuflix_pc_home", appPackageKey: "com.youku.pcweb",
        showNodeList: 1, reqSubNode: 1, nodeKey: "ALL", ip: "127.0.0.1", bizContext: JSON.stringify({ filterParam: "type:" + category, category: category, optionRefresh: 1 }) };
      const j = await call(JSON.stringify({ ms_codes: "2019061000", params: JSON.stringify(inner), system_info: sysInfo() }));
      const found = [];
      (function w(x, path) {
        if (!x || typeof x !== "object" || found.length >= 60) return;
        if (x.data && typeof x.data === "object" && x.data.title) found.push({ path: path, title: String(x.data.title).slice(0, 20), keys: Object.keys(x.data).slice(0, 25) });
        for (const k in x) if (k !== "action" && k !== "trackShow" && k !== "report") w(x[k], path + "." + k);
      })(j, "");
      return new Response(JSON.stringify({ ret: j && j.ret, blocks: found.length, sample: found }, null, 1), { headers: cors });
    }
    try {
      const items = await youku(category, area, year, page);
      return new Response(JSON.stringify({ ok: true, count: items.length, items: items }), { headers: cors });
    } catch (e) {
      return new Response(JSON.stringify({ ok: false, error: String(e && e.message || e) }), { status: 500, headers: cors });
    }
  }
};
