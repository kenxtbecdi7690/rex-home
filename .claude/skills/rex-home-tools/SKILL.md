---
name: rex-home-tools
description: 维护 rex-home 的网页工具（docs/builder Rex首页导出工具、docs/fwd2rex Forward转Rex、docs/export 介绍页），或处理 .rex／.fwd 首页包、Rex／Forward 备份、首页导入导出问题时使用。
---

# Rex首页导出工具的维护

详细格式规则在仓库根目录的 `导入导出规则.md`，改工具前先读。本文件只写维护时容易踩错的地方。仓库维护规则见 `CLAUDE.md`。

## 三个网页

| 路径 | 用途 |
|---|---|
| `docs/builder/index.html` | Rex首页导出工具：打开 `.rex`／`.fwd`／备份／zip／`.json`，编辑后导出 `RexHome.rex` |
| `docs/fwd2rex/index.html` | Forward转Rex：只做转换，不编辑 |
| `docs/export/index.html` | 介绍与教学（含示意图、`img/` 里的教学影片与步骤图） |

- 根目录的 `builder/`、`fwd2rex/`、`export/` 只是跳转页（GitHub Pages 用 root 发布时用）。
- `docs/builder/index.html` 里 `<script id="data-modules">` 由发布工作流的 `.github/scripts/update-builder.js` 自动同步，不要手改；`data-layout`（一键重置）、`data-preset`（Rex 预设配置）可以改。
- 标题旁的版本日期（如 `2026.10.24`）在两个工具的 `<h1>` 里，功能有更新就换日期。

## 必须保持

1. **导出照 Mac 版 Rex 的写法**：zip 顺序 manifest → layout → home，紧凑 JSON、`/` 写成 `\/`，`rex-home.json` 栏位顺序 `avatar`、`avatarData`、`isIndependent`、`title`，没有自订头像就不写 `avatarData`，档案属性 `0o100644`。两个工具都用 `macJson()`、`macHome()`、`MACF`。
2. **原样保留**：其他模块的行、没有格子的分组标题行、Forward 资源库页面行（`__forward_server_page_config__` 与 `serverPage`）、「继续观看」行。Rex首页模块（`rex.home.unified` 且 `functionId` 在 data-modules 里）的行只把 `widgetURL` 换成 GitHub 上的加密脚本，样式、高度、编号、参数照原样，使用者改了设置才换参数。
3. **备份只读首页**：Rex 备份只查 `payload/kernel/rex-kernel.db` 的 `home_document`、`environment` 两张表和 `payload/homes/configs/`；Forward 备份只查 `data.sqlite` 的 `home_configuration` 和 `configs/`。`rex-kernel.db` 还有资源库凭证（`catalog`）与观看记录，`payload/modules/store/` 有网盘 Cookie，都不能读、不能写进任何地方。
4. 全部在浏览器本机处理，不上传。外部脚本只有 cdnjs 的 JSZip 3.10.1 与 jsDelivr 的 sql.js 1.10.3（读备份的资料库时才载入）。
5. 简体中文；手机 375 宽、Mac 1440 宽都不能出现横向卷动。

## 改完要测

没有自动测试，用 Playwright（`require('playwright')`，chromium 已装）开 `file://…/docs/builder/index.html`，把 JSZip、sql.js 的网址用 `page.route` 换成本机 npm 套件，再：

- 打开使用者给过的 Mac 导出档，不改任何东西直接导出，三个 JSON 要跟原档**逐字相同**；选「Mac 中尺寸」导出要跟 mac-mid 那份相同。
- 打开整个 `configs` 文件夹的 zip、Rex 备份 zip、Forward 备份 zip、`.fwd`：每个首页都要能列出、能导出，`rex-layout.json` 解析后跟原档相同（只有 Rex首页模块的 `widgetURL` 可以不同）。
- 拖放档案、头像（换头像要得到 333×333 PNG）、一键重置、空白模板、预设配置、撤销。
- `pageerror` 要为零。

测试用的档案都是使用者的个人资料，只放在 scratchpad，**不要提交到仓库**，用完就删。

## 收到使用者的档案时

- 只要 `.rex`、`.fwd`、`payload/homes/`、`manifest.json`。收到 `library-credentials.plist`、`preferences.plist`、完整备份时不要打开，提醒对方别分享，金钥已外流就建议重新产生。
- 只记录格式规则，新规则写进 `导入导出规则.md`。不替成人内容或绕过授权的短剧平台模块做任何事。
- 7z 分卷可以用 `py7zr`（装在 scratchpad）解开，只解需要的部分。
- 网络受限时（Google Drive、forward.inch.red 等），请使用者把网域加进云端环境的「允许的网域」，或改传档案。

## 交付时

分别说明：静态检查／本地测试是否通过、是否在 Rex 里实测过（哪个设备）。Mac 版 Rex 的导入位置、测试版的新行为没实测就写「未确认」。
