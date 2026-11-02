---
name: "rex-module-syntax"
description: "Quick syntax reference for Rex player module code: WidgetMetadata fields, param types, handler signatures (list, search, loadDetail, loadResource, danmu, subtitle), return item fields and Widget runtime APIs, plus bundling one or more modules into a .rex homepage package. Use when writing or fixing the JavaScript of a Rex module, or packing modules into a homepage."
---

# Rex Module Syntax

A compact reference distilled from modules installed in real Rex backups: beta 1.0.2 (147 then 164 modules) and Rex 1.1 (2026-11-02, 191 modules, 113 readable, the rest `REXENC`-encrypted). Param types, `WidgetMetadata` fields and handler shapes did not change in 1.1; the new `Widget` APIs seen are listed under Runtime APIs. For workflow, testing, Forward differences and the rex-home repo, load `writing-rex-modules`; this skill is only the syntax.

Only build modules over public APIs, official data, or content the user is entitled to play. Don't write or repair modules that pull streams from third-party "parse" sites (解析站), bypass paid or DRM-protected platforms, or serve adult content — offer a catalog-only version (lists that match TMDB) instead.

## WidgetMetadata

```javascript
var WidgetMetadata = {
  id: "author.topic.catalog",     // unique; changing it = a new module for Rex
  title: "示例片单",
  version: "1.0.0",               // bump to make Rex update
  requiredVersion: "0.0.1",       // 0.0.1 in most modules; 0.0.2 (official danmu); 0.0.5 seen on Rex 1.1
  description: "…",
  author: "…",
  site: "https://…",              // optional
  iconurl: "https://…/icon.png",  // optional
  detailCacheDuration: 60,        // optional; Rex fills 60
  globalParams: [ /* optional, merged into every handler's params */ ],
  modules: [ /* required */ ],
  search: { /* optional */ },
};
```

Module entry: `{ id, title, functionName, type?, cacheDuration?, params }`.
- `type`: omit for lists (Rex stores it as `video`); `stream`, `danmu`, `subtitle`; `list` is rare.
- `cacheDuration` seconds: 600, 300, 86400, 1800, 3600 are common; 0 disables.
- `search`: same shape as a module entry (`id`, `title`, `functionName`, `params`, `cacheDuration`).
- `i18n` (optional, used by every official module): `{ "en": { "中文原文": "English" }, "ko": {…}, "es": {…}, "pt-BR": {…} }` — keys are the exact Chinese strings used in `title`, `description`, param titles and option titles. Rex stores the module title's translations in `script_module.titleTranslationsJSON`.

## Params

```javascript
{ name: "sort", title: "排序", type: "enumeration", value: "hot",
  enumOptions: [ { title: "最热", value: "hot" }, { title: "最新", value: "new" } ] }
```

- **Default = `value`. Never `default`** — Rex drops it and the menu has no default (confirmed with a real module).
- `value` must be one of the `enumOptions` values, as a string.
- Types: `enumeration`, `page` (optional `startPage: 1`), `input` (optional `placeholders: [{title,value}]`), `constant` (hidden fixed value), `language`, `count`, `offset`, `userId`. `globalParams` are usually `input` (keys, tokens) or `enumeration`.
- `belongTo: [{ paramName: "type", value: ["tv"] }]` shows a param only when another param has one of those values.
- Option title width: Chinese = 2, keep ≤ 24, or Rex's settings label collapses.

## Handlers

| Kind | Signature | Input | Return |
|---|---|---|---|
| list | `async function loadX(params)` | row params + `page` | `VideoItem[]` |
| search | `async function search(params)` | `keyword`, `page` | `VideoItem[]` |
| detail | `async function loadDetail(link)` | the item's `link` | one item: `videoUrl` and/or `episodeItems` / `childItems`, `relatedItems` |
| stream | `async function loadResource(params)` | the item Rex is playing: `link`, `id`, `title`, `seriesName`, `season`/`seasonNumber`, `episode`/`episodeNumber`, `tmdbId` | `[{ name, description, url, playerType, customHeaders }]` |
| danmu | `searchDanmu(params)`, `getDetailById(params)`, `getCommentsById(params)`, `getDanmuWithSegmentTime(params)` | title / episode info | danmu data |
| subtitle | `loadSubtitle(params)` | item info | subtitle list |

All handlers are top-level `async function`s named in `functionName`.

## VideoItem

```javascript
{
  id: 12345,                 // TMDB id for type "tmdb"
  type: "tmdb",              // "tmdb" | "url" | "detail" | "douban" | "imdb" | "link"
  mediaType: "tv",           // "movie" | "tv"; "info" / "error" for message cards (rendering unconfirmed)
  title: "…",
  posterPath: "https://image.tmdb.org/t/p/w500/x.jpg",
  backdropPath: "https://…",
  coverUrl: "https://…",
  releaseDate: "2026-10-16",
  rating: 7.6,
  genreTitle: "剧情",
  description: "…",
  durationText: "45:00",
  link: "…",                 // passed to loadDetail; omit for pure TMDB items
  videoUrl: "…",             // direct play URL (detail / url items)
  episodeItems: [ /* VideoItem */ ],
  childItems: [ /* VideoItem */ ],
  relatedItems: [ /* VideoItem */ ],
  customHeaders: { Referer: "…" }
}
```

- **Poster paths:** Rex's official `rex.tmdb` (1.2.4) returns raw TMDB paths (`posterPath: item.poster_path`, e.g. `/abc.jpg`); full `https://image.tmdb.org/t/p/w500/...` URLs also work (rex-home uses them). Official item shape: `{ id, type: "tmdb", title, description, releaseDate, backdropPath, posterPath, rating, mediaType, genreTitle }`; official `rex.bangumi` (1.0.1) also sets `originalTitle`, `popularity`, `voteCount`.
- **More fields seen in installed modules (Rex 1.0.2 backup, 164 modules; rendering unconfirmed):** `genreItems: [{ id, title }]` shows tappable genre chips on the detail page — tapping reopens the list module with `params.genreId` (person chips use `params.peopleId`); `duration` (seconds) and `episodeName` on episode items; `seasonNumber` / `episodeNumber`, `tmdbId` / `imdbId` / `doubanId` on items so stream and danmu modules can match; `tags`, `badge`.
- **Detail playback start:** on a `loadDetail` result, `episode` is where the play button starts. One module's comment notes Rex points the play button at the highest-numbered episode when episode items carry an `episode` field, so it sets `episode` on the parent and `episodeName` on the children instead (unconfirmed).
- `type: "tmdb"` items open Rex's own TMDB detail page; playback then comes from the user's stream modules or media libraries ("缺少资源" means none matched).
- Stream results: `playerType: "app"` (Rex player, most common) or `"system"`.

## Runtime APIs

```javascript
const r = await Widget.http.get(url, { headers: {…}, params: {…}, timeout: 15 }); // body in r.data
const p = await Widget.http.post(url, bodyString, { headers: {…} }); // official nlsearch passes an object body with Content-Type: application/json
const q = await Widget.http.request({ url, method: "POST", data: {…}, headers: {…}, timeout: 25 }); // q.statusCode, q.data
const t = await Widget.tmdb.get("search/tv", { params: { query, language: "zh-CN" } }); // no leading slash; returns the body
const $ = Widget.html.load(html);           // cheerio-style
await Widget.storage.get(k); await Widget.storage.set(k, v); await Widget.storage.remove(k); // also clear
```

- Frequency (Rex 1.1 backup, 113 readable): `http.get` 95, `storage.get/set` ~40, `tmdb.get` 27, `http.post` 24, `html.load` 14, `http.request` 8. `Widget.dom.*` and `storage.getItem/setItem` appear once or twice — avoid.
- `Widget.http.request(options)` (new in our notes, used by the official `rex.danmu` 1.0.3): generic request with `url`, `method`, `data` or `body`, `headers`, `timeout`; returns `{ statusCode, data }`. Check `statusCode` yourself (2xx). Guard it when supporting older Rex: `Widget.http && typeof Widget.http.request === "function"`.
- `Widget.callAsync("request", options)`: the lower-level bridge behind it. The official danmu module notes its errors arrive as plain `Error`s whose message starts with `HTTP 404`; parse the status from the message. Prefer `http.request`.
- Seen once each, unconfirmed: `Widget.http.head(url, opts)` (check an image exists), `Widget.sharedCache.get(…)` (data shared between modules). Don't rely on them.
- `r.data` may be a string: `if (typeof body === "string") body = JSON.parse(body)` in try/catch.
- No `fetch`, `URLSearchParams` or Node APIs.
- `Widget.storage` is copied into backups (`payload/modules/store/`): no cookies, keys or passwords there.
- Throw on failure instead of caching an empty result.

## Official Rex Modules (Rex 1.1)

| Module | id / version | Notes |
|---|---|---|
| Rex TMDB | `rex.tmdb` 1.2.4 | 12 list modules; `Widget.tmdb.get`, `http.get`, `html.load`; raw poster paths |
| 动漫数据 | `rex.bangumi` 1.0.1 | 5 list modules, `http.get` only |
| AI 搜索 | `rex.nlsearch` 1.0.1 | one list `nlSearch` with params `input` (keyword), `language`, `userId`, plus `search`; posts `{query, userId, language}` and returns the service's items as-is; throws a Chinese error on failure |
| 自定义弹幕 | `rex.danmu` 1.0.3, requiredVersion 0.0.2 | global param `server` (input); handlers `searchDanmu`, `getDetailById`, `getCommentsById`, `getCommentsWithSegmentTime`; uses `http.request` |
| 豆瓣榜单 | `douban.bridge` 0.6.1 (unpkg `@rexnow/douban`) | global params `sk` (input) and `userId` (type `userId`) |

All official modules ship `i18n` and set `type` on every module entry.

## How Real Modules Are Structured (94 readable modules, Rex 1.0.2 backup)

Typical file, top to bottom (median ~470 lines):

1. `WidgetMetadata`
2. Constants: API base, `User-Agent` (71/94 set one), `Referer` (65/94)
3. HTTP helpers: `fetchHtml`, `headers()`, `playHeaders()`; wrap `JSON.parse` in `try` (55/94) because `r.data` may be a string
4. Parsers: `parseList` / `parseCards` with regex (50/94) or `Widget.html.load` (11/94); helpers `absUrl`, `decodeHtml`, `fillCover`, `getGenreText`
5. Item builders: `buildItem`, `parseLink` (pack ids into `link`, unpack in `loadDetail`)
6. Handlers: `loadHome`, `loadList`, `loadCategory`, `loadHot`, `loadNew`, `loadLatest`, then `search`, `loadDetail` (58/94), `loadResource` (56/94)
7. Cache and concurrency: `cacheGet` / `cacheSet` over `Widget.storage` with a timestamp TTL (16/94), `Promise.all` (41/94) or a `worker()` pool / slot limiter (24/94)

Style seen: `async`/`await` everywhere (93/94); `var` (66/94) and `const`/`let` (37/94) both fine; arrow functions OK (34/94); `encodeURIComponent` for every query value (67/94). Almost nobody uses `fetch`, `URLSearchParams`, `module.exports` or CryptoJS (1 each) — don't rely on them. `atob`/`btoa` appear in 7 modules.

Errors: most modules `return []` on failure (83/94), which shows an empty row with no reason. Prefer `throw new Error("中文原因")` (47/94 do) so Rex shows the message, and never cache a failed result. Retries (6/94) and timeouts (13/94) are rare; add them for flaky sources (`timeout` in `Widget.http` options, one retry with a short `setTimeout` delay).

## Bundling Modules into a `.rex`

- Package = zip with `rex-manifest.json`, `rex-layout.json`, `rex-home.json` at the top level, plus `rex-scripts/{name}.js` for bundled modules.
- A row using a bundled module: `widgetURL: "file:///{name}.js"` (three slashes), `widgetId` and `widgetBundleId` = the module's `id`, `functionId` = the handler name, `params` = `[{key,value}]` for every param (page → `"1"`).
- On import Rex installs each bundled script as a **local** module (new UUID, no auto-update) and rewrites rows to `file://{UUID}.js`. Several scripts per package work.
- For auto-update, host the module (e.g. GitHub raw) and use that URL instead of `rex-scripts/`.
- Every item needs all 13 fields: `style, count, gridSize, id, title, subtitle, iconUrl, functionId, params, widgetBundleId, widgetId, widgetURL, name`.
- Typical sizes: `fullWidthPoster [-1,2.3]` (Mac 3.2), `banner [-1,3]` (Mac 3.8), `fullWidthBackdrop [-1,1.5]`, `fullWidthWatchProgress [-1,2]` (Mac 2.8). `count: 0` = module default.
- `scripts/build_rex.py` builds phone and Mac packages from module files; `templates/catalog-module.js` is a catalog-only starting point.

```bash
python3 scripts/build_rex.py "我的首页" out/ path/to/a.js path/to/b.js
```

## Checklist

- [ ] `node --check` passes; `WidgetMetadata` evaluates.
- [ ] Every default uses `value`, and it is one of the options.
- [ ] Every `functionName` exists as a top-level async function.
- [ ] Unique `id`; `version` bumped on changes.
- [ ] Mock `Widget.http` / `Widget.tmdb` and run every option once.
- [ ] Say "not tested in Rex" until it has been.
