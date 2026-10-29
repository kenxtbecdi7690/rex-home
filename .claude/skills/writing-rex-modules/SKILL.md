---
name: "writing-rex-modules"
description: "Use when writing, editing, testing, encrypting or packaging Rex player modules, .rex homepage packages or Rex subscriptions (rex-home repo, js/rex); reading Rex or Forward backups; converting Forward homes to Rex; Mac layouts; and diagnosing Rex import failures or empty rows."
---

# Writing Rex Modules and Homepage Packages

## Overview

A Rex module, like a ForwardWidget, is a single JS file: one global `WidgetMetadata` object describing modules and params, plus the async handler functions it names. Rex calls handlers by `functionName` with one `params` object.

**Core principle:** Rex wires everything by *exact convention*. Module ids, function names, `VideoItem` field names and homepage-package fields are not free-form, and intuition gets them wrong. When unsure, copy the shape from a module that already works or from a `.rex` exported by Mac Rex — don't invent names.

**Sources of truth (most to least reliable):**
1. Behavior on a real device (iPhone / iPad / Mac)
2. `.rex` files exported by Mac Rex and real Rex backups
3. Real scripts in the rex-home repo (draft branch `rex-home-v130`, e.g. v151) and its `导入导出规则.md`
4. `baranwang/rex-widget-libs` type definitions (`packages/libs/src/env/`: `metadata.ts`, `widget.ts`, `video.ts`, `common.ts`; community-maintained)
5. Forward's official docs

Rex has no public developer docs. If something wasn't tested inside Rex, say "not tested in Rex". Passing offline checks does not mean it imports or plays. Mark unverified details as "unconfirmed" — never invent them.

**Shared with Forward** (list / detail / search / danmu / `loadResource` / `loadSubtitle` patterns, `VideoItem` field names, image fields, `loadDetail(link)` taking a string, backtesting): follow `writing-forward-widgets`. This skill only covers what is Rex-specific or different.

**Talking to the user:** requests are often one or two words. State the most reasonable reading and act on it so the user can correct you in one line; don't fire off chains of questions. Even when the user writes in Traditional Chinese, module titles, page text and docs stay in Simplified Chinese.

## Workflow

1. **Check the data source**: only public APIs, official data, or content the user has the right to play (see "Building a module", step 1).
2. **Read references**: rex-home v151 and the examples in `writing-forward-widgets`; copy the closest one as a starting point.
3. **Write the module**: `WidgetMetadata` → list handler → detail / search / playback.
4. **Backtest locally**: mock `Widget`; in rex-home run `check-module.js`.
5. **Package**: module link, subscription, or a `.rex` homepage (via the Rex homepage export tool, or in Mac format by hand).
6. **Run the checklist**, then ask the user to test in Rex. Without that, say "not tested in Rex".

## Differences from Forward

| Item | Rex | Forward |
|---|---|---|
| Metadata | Historically `var WidgetMetadata = {...}` (v151 does this). Keep one style per file; follow the repo's existing version | Bare `WidgetMetadata = {...}`, first statement |
| Icon field | `iconurl`; `i18n` also seen | `icon` |
| Encryption | Starts with `REXENC` (AES-256-GCM), Rex's official encryption service | Starts with `FWENC1` |
| Homepage package | `.rex` (zip: manifest + layout + home) | `.fwd` (zip: `widgets.json` + `home.json`) |
| Subscriptions | URLs often end in `.rex` (e.g. `…/widgets.rex`, `…/collections/xxx.rex`) | `.fwd` index |
| Backup | `video.rex.local-backup` v2 | `forward-data` v3 |

- `Widget.tmdb.get` behaves the same on both (no leading slash, returns the body directly). Don't claim it is Rex-only.
- Rex can run many Forward modules (same shape), but whether Rex can read Forward's `FWENC1`-encrypted modules is unconfirmed. Rex `REXENC` modules don't work in Forward.

## Metadata Skeleton

```javascript
var WidgetMetadata = {
  id: "rex.example",              // globally unique; changing it makes Rex treat it as a different module
  title: "示例",
  version: "2026.10.24.1",        // Rex only updates when this increases; rex-home uses YYYY.MM.DD.N (Beijing time)
  requiredVersion: "0.0.1",
  description: "...",
  author: "...",
  site: "https://...",
  iconurl: "https://.../icon.png", // optional
  detailCacheDuration: 60,         // default 60 s
  globalParams: [ /* optional: shared by the whole module, merged into every handler's params */ ],
  modules: [ /* required */ ],
  search: { /* optional top-level search */ },
};
```

**Module entry:** `id`, `title`, `functionName` (a top-level `async function`), `type` (omit for lists; `stream` / `subtitle` / `danmu`), `cacheDuration` (default 3600; rex-home uses 600 / 1800 / 3600), `requiresWebView`, `params`.

`moduleTypesJSON` values seen in Rex backups: `["video"]`, `["stream","video"]`, `["stream"]`, `["danmu"]`, `["subtitle"]`, `["list"]`.

## Param Types

Same as Forward: `input`, `constant`, `enumeration` (must have `enumOptions`), `count`, `page`, `offset`, `language`, `userId`. `belongTo: { paramName, value: [...] }` shows a param only for certain values of another.

**Defaults use `value`, never `default`.** Rex drops `default`: a module written with `default:` ends up with no defaults at all (seen in a Rex 1.0.2 backup: `qq.video.pc` stored every param without a default; the same module rewritten with `value:` kept them). Other keys seen on params: `description`, `placeholders` (suggested values for `input`, `[{title,value}]`), `startPage` (on `page`).

**Rex-specific: option-name width.** Chinese characters count as 2, max 24. Longer names squeeze the param label on Rex's settings page down to one character.

## VideoItem

Field names follow `writing-forward-widgets`. Rex notes:

- List item `type`: `url` / `detail` / `douban` / `imdb` / `tmdb` / `forward`.
- For `tmdb` items, posters are raw TMDB paths (`/abc.jpg`).
- Images: `posterPath` portrait, `backdropPath` landscape, `coverUrl` fallback.

## Handler Signatures (from 147 installed modules, 88 readable)

| Module `type` | Handler | Gets | Returns |
|---|---|---|---|
| list (omit `type`, stored as `video`) | `async function fn(params)` | the row's params, `page` | array of VideoItems |
| `search` (top-level) | `async function search(params)` | `keyword`, `page` | array of VideoItems |
| detail | `async function loadDetail(link)` | the item's `link` | one item with `videoUrl` and/or `episodeItems` / `childItems`, `relatedItems` |
| `stream` | `async function loadResource(params)` | Rex passes the item: most modules read `link`, `id`, `title`, `seriesName`, `season`/`seasonNumber`, `episode`/`episodeNumber`, `tmdbId` | array of `{ name, description, url, playerType: "app" \| "system", customHeaders }` |
| `danmu` | `searchDanmu(params)`, `getDetailById`, `getCommentsById`, `getDanmuWithSegmentTime` | title / episode info | danmu lists |
| `subtitle` | `loadSubtitle(params)` | item info | subtitle list |

- `mediaType` values seen: `movie`, `tv`, and placeholder cards `info` / `error` (a module returns one card with a message instead of throwing). The exact rendering of `info` / `error` is unconfirmed.
- `playerType: "app"` (Rex's player) is used far more than `"system"`.

## Runtime APIs

```javascript
const res  = await Widget.http.get(url, { headers, params });   // body wrapped in .data
const res2 = await Widget.http.post(url, body, { headers });
// options seen: headers, params, timeout. Widget.http.request also exists
const body = await Widget.tmdb.get("movie/popular", { params }); // no leading slash; returns the body (body.results)
const $ = Widget.html.load(html);                                 // cheerio
await Widget.storage.get(k); await Widget.storage.set(k, v); await Widget.storage.remove(k); // also keys, clear
// Widget.sharedCache.get(namespace, key) / set / remove: namespace required; check it exists first
```

- Don't assume `fetch`, `URLSearchParams` or Node APIs exist.
- **`Widget.storage` ends up in backups.** A Rex backup's `payload/modules/store/` (`widget-v2-*`, `module-v1-*`, `shared-v2.json`) is exactly what modules stored. Don't put users' cookies, keys or passwords there; if you must, tell the user it travels with their backups.
- rex-home only uses `http`, `storage` and `tmdb`.
- Usage across installed modules: `http.get` (74), `storage` (24), `tmdb.get` (23), `http.post` (16), `html.load` (11). `Widget.dom.parse/select/text/attr` and `storage.getItem/setItem` appear once or twice; prefer the common ones.

## Code Style (rex-home v151)

- Every function and global is prefixed `rexHome` to avoid clashing with other scripts. Each module's `functionName` maps to a thin top-level wrapper (e.g. `rowSeries` → `rexHomeRowSeries`) that calls shared row logic.
- All network calls go through wrappers: `rexHomeApi` (TMDB), `rexHomeHttpJson`, `rexHomeDoubanGet` — never call `Widget.http` directly inside a row. Requests are limited per named "lane" (`rexHomeRequestSlot`); batch matching uses `rexHomeMapLimited(items, worker, limit)`; timeouts use `rexHomeTimedRequest`; transport errors retry via `rexHomeRetryTransport`.
- All caching goes through `rexHomeCached(key, ttl, task, options)`:
  - failed requests throw and are **never cached**;
  - successful but empty lists expire on the normal TTL;
  - a transport failure must never be cached as "no match", or that row stays empty forever;
  - memory layer + `Widget.storage` layer, with a capped index (e.g. 256 entries).
- Commit a batch of matches only when every item in it resolved.
- Every module paginates: `rexHomeSeqList` tracks how far it has read; page N first fills the dedupe placeholders of earlier pages, then slices out page N.

## Local Backtesting

- **rex-home:** `node .github/scripts/check-module.js vN-draft/rex-home-vN.js` must print 「检查通过」. It runs the module in a Node `vm` with a mocked `Widget` (no network) and checks:
  - every dropdown option of every module: TMDB library mode returns exactly 200 items on pages 1 and 2 (20 for the banner); Douban mode reporting 「格式异常」 offline is expected;
  - loading all homepage rows together gives 0 duplicates between rows (except the Douban charts row);
  - after a simulated app restart (memory cleared, local storage kept), titles taken by earlier rows don't reappear in later rows;
  - option names are at most 24 width units.
- Also run `node --check` and confirm the first-line version matches the file name. The release workflow re-runs the check and refuses to encrypt or publish if it fails.
- **Other modules:** use the backtest template from `writing-forward-widgets`: stub `Widget.http`, `Widget.storage`, `Widget.tmdb` in a `vm` context, load `WidgetMetadata`, check required fields, call every module with default and global params, and assert arrays with correct field names. Mocks should return well-formed but wrong data, not `undefined`. Assert the requests you *sent*, and do one mutation self-check.

## Encryption

- Modules may be plaintext or `REXENC`-encrypted; Rex reads both.
- rex-home: `main` only holds the encrypted build, produced by the GitHub Actions workflow 「加密并发布 Rex 首页」 calling Rex's official encryption service. **Never call the encryption service yourself**, and never hand-edit `rex-home.js`, `RexHome.rex` or `.github/release-version`.

## Install, Subscriptions and Updates

- **Installed by link** (`location: remote`): Rex compares `version` and updates automatically. When it checks is up to Rex (interval unconfirmed); to update now, refresh the module list or restart the app. GitHub raw caches for about 5 minutes.
- **Installed locally** (`location: local`): the script lives at `payload/modules/managed/{id}.js` and homepages reference it as `file://{id}.js`. It **does not auto-update**, and other people importing the homepage can't get it. For auto-updates, have the user reinstall by link (rex-home: `https://raw.githubusercontent.com/kenxtbecdi7690/rex-home/main/rex-home.js`).
- **Subscriptions (collections):** the subscription files in backups look like `{ title, description, icon, widgets: [{ id, title, description, requiredVersion, version, author, url }] }` — the same shape as Forward's `.fwd` index. Subscription URLs often end in `.rex`. Whether the file served at the URL is exactly the same format is unconfirmed.
- **Id collisions:** only one module per `widgetId` can be installed. Observed: a third-party module also used `rex.home.unified` (functions `movieHome`, `seriesHome`); once the Rex homepage module replaced it, that homepage's rows went empty. New modules must use their own unique id; check for collisions first when rows are empty.

## `.rex` Homepage Packages

Full rules live in rex-home's `导入导出规则.md` (the repo also has `.claude/skills/rex-home-tools` for maintaining the export tools). Key points:

- A `.rex` is a zip with three files **at the top level**: `rex-manifest.json` (`{"format":"video.fika.rex.home-package","version":1}`), `rex-layout.json` (rows), `rex-home.json` (name, avatar); optionally `rex-scripts/`. The extension must be `.rex`.
- **Mac Rex format** (what the export tools write): order manifest → layout → home, Unix mode 0644, compact one-line JSON with `/` written as `\/`.
- `rex-home.json` field order: `avatar`, `avatarData`, `isIndependent`, `title`. Built-in avatar: only `avatar` (e.g. `avatar-8`), no `avatarData`. Custom avatar: `avatar` = `avatar-22`, `avatarData` = base64 PNG (Mac exports 333×333).
- Each row has `id`, `title`, `isActive`, `items`. **A row with no items (`items: []`) is a section header — keep it.** Multiple items per row are common.
- Every item needs all 13 fields, empty strings included: `style`, `count`, `gridSize`, `id`, `title`, `subtitle`, `iconUrl`, `functionId`, `params` (array of `{key,value}`), `widgetBundleId`, `widgetId`, `widgetURL`, `name`. This has happened: one item missing `subtitle` made the whole package fail to import.
- **Bundled scripts:** put modules in `rex-scripts/{name}.js` and set the row's `widgetURL` to `file:///{name}.js` (three slashes). On import Rex installs each as a local module (new UUID, `location: local`, no auto-update) and rewrites rows to `file://{UUID}.js`. Several scripts in one package work (confirmed on Rex 1.0.2).
- Styles: `banner`, `fullWidthWatchProgress`, `fullWidthPoster`, `fullWidthBackdrop`, `backdropFeature`, `stack`, `stackEditorial`, `cover`, `list`, `listCompact`, `posterWall`, `posterCollage`, `personRail`. `gridSize` is `[width, height]`; `-1` means full width. Typical sizes (2,871 items): full-width rows `banner` 3, `fullWidthPoster` 2.3, `fullWidthBackdrop` 1.5, `fullWidthWatchProgress` / `backdropFeature` 2, `posterWall` 3, `personRail` 1.609375; tiles `stack` `[2,1]` / `[3,1.5]` / `[2,2]` (3–7 per row), `cover` `[2,1]` / `[3,1.6875]`, `list` / `posterCollage` / `stackEditorial` `[3,3]` / `[4,4]`. `count` 0 = module default, otherwise max items shown (6, 8, 12, 20 common).
- Built-ins: `app` (continue watching, etc.), `app.watchCalendar` (episode calendar), `rex.tmdb`, `rex.bangumi` (official modules on `assets.rexnow.tv`). Rex's blank template is one `rex.tmdb` banner row (`trending`, `time_window: day`); its preset is 14 rows, named 「首页」 with avatar `avatar-8`.
- The rex-home module's `widgetURL` must point at `rex-home.js` on GitHub, never `file://`. In some regions `raw.githubusercontent.com` needs a proxy.
- Valid `functionId` / `params` for the rex-home module are defined in `<script id="data-modules">` inside `docs/builder/index.html`.

## Rex Backups

- Backups come as split 7z (`.7z.001`, `.7z.002`; files inside a `rex-backup-…/` folder) or as a zip with files at the top level; handle both, and paths may contain spaces (e.g. `rex-backup-iPad Pro 1030/`).
- With iCloud sync on, homepages and modules sync across devices: iPhone and iPad Pro backups had the same `script_module.id`, version and `file://{id}.js`. Importing or deleting on one device changes the other; a locally installed module stays local on every device.

- Beta 1.0.2: `manifest.json` has `format` `video.rex.local-backup`, `version` 2, and `files` with each file's size and sha256. Users may re-pack it as split 7z (`.7z.001`, `.7z.002`); `py7zr` can extract only the parts you need.
- Homepage rows: `payload/homes/configs/{id}.json` (empty homepage = `[]`). File names: lowercase UUID = homepages you made or imported from `.rex`; `import-{hash}` = auto-created media-library homepages (Emby etc., rows `[]`, `libraryAvatar`); uppercase UUID = the 「Rex 预设发现页」 each new environment gets; `default` = the default environment's 「首页」; `.sync.json` files are just sync markers; custom avatars are `home-avatar-*.png` (512×512). Deleted homepages leave stale files behind.
- **Homepage names, avatars, order and environments** are in `payload/kernel/rex-kernel.db`: `home_document` (`id` = the config file name, `title`, `avatarName`, `avatarFileName`, `sort`, `environmentID`, `rowsJSON`, `deletedAt` set = deleted) and `environment` (Rex "environments"; the default one has `id` `default`). `payload/data/rex.db` has no homepages.
- Modules: `script_module` (`id`, `widgetID`, `url`, `version`, `author`, `location`, `moduleTypesJSON`) + `payload/modules/managed/{id}.js` and `.metadata.json` (the module's `WidgetMetadata`). Subscriptions: `script_source` and `payload/modules/sources/` (`*.delete.json` = removed subscriptions).
- **Sensitive — never ask users to send these; if received, don't open them or copy them anywhere:**
  - `library-credentials.plist` (TMDB and other keys), `preferences.plist`
  - `rex-kernel.db`'s `catalog` table (media-server URLs, usernames, credentials) and its watch-history tables
  - `payload/modules/store/` (module storage, including cloud-drive cookies)
  - From a backup, only look at `manifest.json`, `payload/homes/`, and the `home_document` and `environment` tables. If keys or cookies have leaked, tell the user to regenerate them and sign out other devices.

## Forward Homepages to Rex

- `.fwd` is a zip: `widgets.json` (rows, same format as `rex-layout.json`) + `home.json` (`title`, `avatar`, `avatarData`). Forward's own homepages are exported with its official tool at `forward.inch.red/export`.
- Forward backups (`forward-data` v3): names in `data.sqlite` table `home_configuration`, rows in `configs/{library_id}-{id}.json`, custom avatars in `configs/{library_id}-{id}-avatar.jpg`. Marked `containsCredentials: true`; don't open `preferences.json` or `sources/`.
- rex-home's `docs/fwd2rex` (convert only) and `docs/builder` (editable) already convert: **rows are carried over unchanged** (Rex supports Forward's layout styles); only the avatar is converted to Rex's form (`custom.url` / JPG → `avatar-22` / PNG).
- Tell the user plainly: the modules used must also be installed in Rex for rows to show; Forward media-library rows (`type: service`, `libraryId`) stay empty in Rex without a matching library; whether Forward `FWENC1` modules run in Rex is unconfirmed. Never call it fully equivalent. Always add "not tested in Rex" after a conversion.

## Mac and Apple TV

- iPhone, iPad and Mac Rex use the same `.rex` and the same modules; there's no platform-specific code.
- Mac Rex exports homepages directly. iPhone / iPad can't; export from a backup instead (Rex settings → 「iCloud」 → 「备份与还原」 → 「导出本机备份」). Where Mac Rex's 「导入配置」 lives is unconfirmed — ask the user.
- Typical phone `gridSize`: banner `[-1,3]`, poster row `[-1,2.3]`, continue watching `[-1,2]`, backdrop row `[-1,1.5]`. **Mac medium size** (from the user's mac-mid file) only enlarges full-width rows: 3→3.8, 2.3→3.2, 1.5→2.2, `backdropFeature` and continue watching 2→2.8; multi-item rows unchanged.
- Apple TV: whether Rex has an Apple TV app is unconfirmed; tvOS has no browser, so the web tools can't run there.

## Import Failures and Empty Rows

1. Get Rex's exact error text or a screenshot, and ask: does it fail when opening the `.rex`, or does it import with empty rows? Which device and version (beta?)?
2. Zip integrity (`testzip()`); the three files at the top level (not inside a folder, no `__MACOSX` or `.DS_Store`); the manifest; the avatar PNG.
3. Duplicate row or item `id`s; all 13 item fields present.
4. For the rex-home module: `functionId` and `params` exist in data-modules.
5. Compare field by field against a Mac Rex export and the official `RexHome.rex` baseline.
6. **Empty rows:** is `widgetURL` a `file://` path others can't install? Is there an id collision? Can the third-party module's site be reached? Is it a Forward media-library row with no matching library in Rex?
7. Load `docs/builder/index.html` in a headless browser and open the package for corroborating messages; or **split the homepage into small per-module `.rex` files** and have the user import them one by one to find the broken module.
8. Only when every static check passes, suspect the network, a proxy, or Rex rejecting some kind of id — and say plainly that it can't be verified here.

## rex-home Repo Rules (from its CLAUDE.md)

- Plaintext only lives on the draft branch `rex-home-v130` under `vN-draft/`: `rex-home-vN.js` (plaintext script) and `RexHome-vN.rex` (layout with the plaintext script, for testing only) — both are required. To read plaintext, `git fetch --depth=1 origin rex-home-v130`. **Never commit plaintext to `main`.**
- A new version copies the previous one, bumps N, and changes three places together: the first line `// Rex首页 vN · 作者：Bolinxxlin`, `WidgetMetadata.version` (`YYYY.MM.DD.N`, Beijing date), and `RexHomeVer='vN'`.
- The module id is fixed at `rex.home.unified` (`WidgetMetadata.id` and the layout's `widgetId` / `widgetBundleId`). Don't change it.
- Each category defaults to 200 items per page (banner max 20), keeps the `page` param, and stops only at the end of the source. Default: all years, newest premiere first; year menus newest first.
- Homepage dedupe is on by default for every row; the series row is mainland-only, foreign series go to the regional row; after dedupe, never refill with duplicates. The only exception is the Douban charts row (original ranking, no dedupe). Series, movies, anime, variety, documentaries and concerts are mutually exclusive by type.
- Titles and options are in Simplified Chinese. Draft commit messages read `新增 Rex 首页 vN 草稿：要点`; the part after the colon becomes the release commit message. Commit author follows the repo convention (never the AI agent's name); keep the trailing co-author lines.
- Douban key (global param `sk`, a Douban Bridge key, not a Douban password): never ask the user for it, never write it into code, layouts, templates or commits. Everything must work without it (Douban charts default to matching TMDB identities).
- After changes, sync: `README.md` 「分类与更新」 (add a line to the update notes; update the 「共 11 个模块」 table if the module count changes), today's note under `版本/`; new URLs go into `代理规则.md` and `proxy/rex-home.list`. data-modules in `docs/builder/index.html` is synced by the workflow — don't edit it by hand.
- Release: push the draft to `rex-home-v130`, then run 「加密并发布 Rex 首页」 in GitHub Actions; leaving both inputs empty picks the latest draft. If the environment only has read access, say clearly that nothing was pushed.

## Building a Module from Scratch

1. **Assess the source:** same as step 1 in `writing-forward-widgets` (give up on Cloudflare 403s or empty SPA shells). **Only public APIs, official data or content the user may play. No scraping that bypasses platform authorization (private APIs of short-video or short-drama platforms), and no features for pirated or adult-content source modules.**
2. **Decide features:** list (required), detail, search, playback, subtitles, danmu.
3. **Create the file:** copy an existing module; use your own unique id (not `rex.home.unified` or anyone else's).
4. **Write `WidgetMetadata`:** `id`, `title`, `version`, `requiredVersion`, `modules`; option names ≤ 24 width units.
5. **Write handlers:** list first, then detail → search → playback. Every handler gets try-catch, logs with a module-name prefix, and rethrows; never cache failures.
6. **Backtest locally** (above).
7. **Test in Rex:** have the user install by link, add a homepage row, and check list, paging, detail, search and playback. Without that, say "not tested in Rex".
8. **Publish:** share the module link or a subscription; share homepages as `.rex`. rex-home follows its repo workflow.

Module types built before: link-list sources, YouTube channel RSS aggregation, TMDB-based trending (adapted from Forward's official example) — all use only `Widget.http` and `Widget.tmdb`. Self-hosted short-drama catalog: one Rex shell and one Forward shell (`rex-shortdrama.js` / `forward-shortdrama.js`) reading the same JSON catalog; only videos the user has the right to host.

## Common Mistakes

| Mistake | Fix |
|---|---|
| New module reuses `rex.home.unified` or someone else's id | Use a unique id; collisions overwrite each other and empty the rows |
| Changing a module's id | Rex treats it as new; users must reinstall and re-import homepages |
| `version` not increased | Rex won't pick up the new build |
| Sharing a homepage with `file://…js` | Point to the module's URL (GitHub raw, etc.) |
| Item missing `subtitle` or another field | Write all 13 fields, empty strings included |
| Deleting rows with `items: []` | They are section headers; keep them |
| Zipping a folder instead of the three files | Files at the zip's top level, or use the export tool |
| Custom avatar as `custom.url` / JPG in `rex-home.json` | `avatar-22` + PNG; built-in avatars have no `avatarData` |
| `res.data.results` / leading slash on `Widget.tmdb.get` | `res.results`; `"movie/popular"` |
| Caching failed requests | Throw and don't cache, or the row stays empty forever |
| Writing `default:` for a param's default | Use `value:`; Rex drops `default` |
| Option names too long | Chinese counts 2, max 24 |
| Storing cookies or keys in `Widget.storage` | They end up in backups; avoid, or tell the user |
| Asking for a full backup, opening `rex-kernel.db`'s `catalog` | Only `manifest.json`, `payload/homes/`, the `home_document` table |
| Calling the encryption service, editing `main` release files | rex-home only releases through its workflow |
| Saying "works" without testing in Rex | Say "not tested in Rex" |

## Pre-release Checklist

**Module**
- [ ] `WidgetMetadata` style matches the repo; `id` is unique (no collision); `version` increased; `requiredVersion` set
- [ ] Every module has `id`, `title`, `functionName`; every enumeration has `enumOptions`; option names ≤ 24 units
- [ ] `VideoItem` field names follow `writing-forward-widgets`; `tmdb` posters are raw paths
- [ ] No `fetch` / `URLSearchParams`; no `.data` on `tmdb.get`, `.data` on `http.get`
- [ ] Every handler has try-catch; failures are never cached
- [ ] No cookies or keys in `Widget.storage` (or the user was told)
- [ ] Local backtest passes with one mutation self-check; rex-home also passes `check-module.js` (「检查通过」) and `node --check`

**Homepage package**
- [ ] Three files at the zip's top level, `.rex` extension, Mac format
- [ ] All 13 fields on every item; no duplicate `id`s; section-header rows kept
- [ ] No shared module URL is `file://`
- [ ] Avatar: built-in = `avatar` only; custom = `avatar-22` + PNG

**When delivering, report separately**
- [ ] Static checks passed? Local simulation passed? Tested inside Rex (which device, which version)? — none of these substitutes for another
