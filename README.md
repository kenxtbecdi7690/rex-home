# 爱奇艺＋腾讯＋芒果＋优酷 首页

作者：Bolinxxlin · 模块原作者：Minis（爱奇艺、腾讯）、MakkaPakka（芒果、优酷）

四个平台各 6 行（电视剧、电影、综艺、动漫、纪录片、少儿），共 24 行。每页最多 200 部，按首映／首播时间从新到旧；海报来自 TMDB。**只有片单**，播放要靠自己的片源模块或媒体库。

## 导入

在 Rex「导入配置」贴上链接（手机长按打开「切换配置」；Mac 在左侧栏）：

| 装置 | 链接 |
|---|---|
| iPhone、iPad | `https://raw.githubusercontent.com/kenxtbecdi7690/rex-home/platform-home/PlatformHome.rex` |
| Mac | `https://raw.githubusercontent.com/kenxtbecdi7690/rex-home/platform-home/PlatformHome-Mac.rex` |

四个模块已装在首页里，不用另外导入 `.js`。更新前先删旧首页，以及模块列表里旧的「爱奇艺片单」「腾讯视频片单」「芒果TV片单」「优酷片单」。

## 模块

| 模块 | 版本 | 片单来源 |
|---|---|---|
| [爱奇艺片单](modules/iqiyi-catalog.js) | 1.7.0 | 爱奇艺网页版片库 |
| [腾讯视频片单](modules/qq-catalog.js) | 1.7.0 | 腾讯视频网页版片库（只读前 30 页） |
| [芒果TV片单](modules/mgtv-catalog.js) | 1.7.0 | 芒果TV网页版片库 |
| [优酷片单](modules/youku-catalog.js) | 1.10.0 | 经自建 Cloudflare Worker 中转 |

优酷 Worker：[youku-worker-v2.js](modules/youku-worker-v2.js)（只读片库清单，不抓视频）。贴到 Cloudflare → Compute (Workers) → Edit code → Deploy。

## 注意

- 平台接口是网页版自己用的，平台改版时那个平台的行可能变空。
- 第一次打开每行较慢（最久约 25 秒），之后有缓存。
- 模块装在首页包里，不会自动更新；有新版要重新导入。
