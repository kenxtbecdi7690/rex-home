// Catalog-only Rex module template: list a public catalog, match each title to TMDB, return tmdb items.
var WidgetMetadata = {
  id: "author.example.catalog",
  title: "示例片单",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  description: "公开片库的分类与筛选，匹配 TMDB 显示海报；只有片单，不含播放。",
  author: "author",
  modules: [
    {
      id: "tv",
      title: "电视剧",
      functionName: "loadTv",
      cacheDuration: 600,
      params: [
        { name: "sort", title: "排序", type: "enumeration", value: "hot",
          enumOptions: [ { title: "最热", value: "hot" }, { title: "最新", value: "new" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    }
  ]
};

var API = "https://example.com/api/list"; // a public catalog endpoint

async function fetchCards(channel, params) {
  var res = await Widget.http.get(API, { headers: { Accept: "application/json" }, params: { channel: channel, sort: params.sort, page: params.page || 1 } });
  var body = res && res.data !== undefined ? res.data : res;
  if (typeof body === "string") body = JSON.parse(body);
  if (!body || !Array.isArray(body.items)) throw new Error("片库返回格式异常");
  return body.items.map(function (x) { return { title: String(x.title || ""), year: parseInt(x.year, 10) || 0 }; });
}

async function matchTmdb(card, kind) {
  var key = "tmdb:" + kind + ":" + card.title + ":" + card.year;
  var cached = await Widget.storage.get(key);
  if (cached) return cached === "none" ? null : JSON.parse(cached);
  var r = await Widget.tmdb.get("search/" + kind, { params: { query: card.title, language: "zh-CN" } });
  var hit = (r && r.results || []).filter(function (x) {
    var d = String(x.first_air_date || x.release_date || "");
    return x.poster_path && (!card.year || d.slice(0, 4) === String(card.year));
  })[0] || null;
  await Widget.storage.set(key, hit ? JSON.stringify(hit) : "none");
  return hit;
}

async function loadTv(params) {
  var cards = await fetchCards("tv", params || {});
  var out = [], seen = {};
  for (var i = 0; i < cards.length; i++) {
    var hit = await matchTmdb(cards[i], "tv");
    if (!hit || seen[hit.id]) continue;
    seen[hit.id] = 1;
    out.push({
      id: hit.id, type: "tmdb", mediaType: "tv", title: cards[i].title,
      posterPath: "https://image.tmdb.org/t/p/w500" + hit.poster_path,
      backdropPath: hit.backdrop_path ? "https://image.tmdb.org/t/p/w780" + hit.backdrop_path : "",
      releaseDate: hit.first_air_date || "", rating: hit.vote_average || undefined
    });
  }
  return out;
}
