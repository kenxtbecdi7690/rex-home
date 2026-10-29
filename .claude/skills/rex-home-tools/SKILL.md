---
name: rex-home-tools
description: Use when maintaining rex-home's web tools (docs/builder Rex homepage export tool, docs/fwd2rex Forward-to-Rex converter, docs/export intro page), or when handling .rex / .fwd homepage packages, Rex / Forward backups, or homepage import/export problems.
---

# Maintaining the Rex Homepage Export Tools

Detailed format rules live in `导入导出规则.md` at the repo root — read it before changing the tools. This file only covers the places where maintenance tends to go wrong. Repo-wide rules are in `CLAUDE.md`. For module-writing rules, load `writing-rex-modules`; for module code syntax and packing modules into a `.rex`, load `rex-module-syntax`. Both live in `.claude/skills/`.

## The three pages

| Path | Purpose |
|---|---|
| `docs/builder/index.html` | Rex首页导出工具: opens `.rex` / `.fwd` / backups / zips / `.json`, edits, exports `RexHome.rex` |
| `docs/fwd2rex/index.html` | Forward转Rex: convert only, no editing |
| `docs/export/index.html` | Intro and tutorial (mock-up figures, tutorial videos and step images in `img/`) |

- `builder/`, `fwd2rex/`, `export/` at the repo root are only redirect pages (used when GitHub Pages publishes from root).
- In `docs/builder/index.html`, `<script id="data-modules">` is synced by the release workflow's `.github/scripts/update-builder.js` — never edit it by hand. `data-layout` (one-click reset) and `data-preset` (Rex preset) may be edited.
- The version date next to each tool's `<h1>` (e.g. `2026.10.24`) must be bumped whenever a tool's features change.
- All user-facing text is Simplified Chinese.

## Must keep

1. **Export in Mac Rex format:** zip order manifest → layout → home, compact JSON with `/` written as `\/`, `rex-home.json` field order `avatar`, `avatarData`, `isIndependent`, `title`, no `avatarData` without a custom avatar, file mode `0o100644`. Both tools use `macJson()`, `macHome()`, `MACF`.
2. **Keep rows as they are:** other modules' rows, section-header rows with no items, Forward media-library page rows (`__forward_server_page_config__` with `serverPage`), and continue-watching rows. For rows of the Rex homepage module (`rex.home.unified` with a `functionId` present in data-modules), only replace `widgetURL` with the encrypted script on GitHub; keep style, size, ids and params as they are, and only rebuild params if the user changed settings.
3. **Backups: read homepages only.** For Rex backups, only query the `home_document` and `environment` tables of `payload/kernel/rex-kernel.db` plus `payload/homes/configs/`. For Forward backups, only `data.sqlite`'s `home_configuration` plus `configs/`. `rex-kernel.db` also holds media-server credentials (`catalog`) and watch history, and `payload/modules/store/` holds cloud-drive cookies — never read them or write them anywhere.
4. Everything runs locally in the browser; nothing is uploaded. The only external scripts are JSZip 3.10.1 from cdnjs and sql.js 1.10.3 from jsDelivr (loaded only when a backup database must be read).
5. No horizontal scrolling at phone width (375) or Mac width (1440).

## Testing after changes

There is no automated test. Use Playwright (`require('playwright')`; Chromium is preinstalled): open `file://…/docs/builder/index.html`, route the JSZip and sql.js URLs to local npm copies with `page.route`, then:

- Open a Mac-exported `.rex` the user provided and export it untouched: all three JSON files must be **byte-identical** to the original. Exporting with 「Mac 中尺寸」 must match the user's mac-mid file.
- Open a zip of a whole `configs` folder, a Rex backup zip, a Forward backup zip and a `.fwd`: every homepage must be listed and exportable, and the parsed `rex-layout.json` must equal the original (only the Rex homepage module's `widgetURL` may differ).
- Drag and drop, avatars (changing the avatar must give a 333×333 PNG), one-click reset, blank template, preset, undo.
- Zero `pageerror` events.

Test files are the user's personal data: keep them in the scratchpad only, **never commit them**, and delete them when done.

## When the user sends files

- Only `.rex`, `.fwd`, `payload/homes/` and `manifest.json` are needed. If you receive `library-credentials.plist`, `preferences.plist` or a full backup, don't open the sensitive parts; remind the user not to share them, and suggest regenerating keys that have leaked.
- Record format rules only; put new rules in `导入导出规则.md`. Do nothing for adult-content modules or modules that bypass short-drama platforms' authorization.
- Split 7z archives can be extracted with `py7zr` (installed in the scratchpad); extract only the parts you need.
- If the network blocks a host (Google Drive, forward.inch.red, etc.), ask the user to add the domain to the cloud environment's allowed domains, or to send the file directly.

## When delivering

Report separately: static checks / local tests passed or not, and whether it was tested inside Rex (which device). Anything not tested — where Mac Rex's 「导入配置」 lives, new beta behavior — is "unconfirmed".
