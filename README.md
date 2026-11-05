# 爱奇艺＋腾讯＋芒果＋优酷 首页

作者：Bolinxxlin · 模块原作者：Minis（爱奇艺、腾讯）、MakkaPakka（芒果、优酷）

四个平台各 6 行（电视剧、电影、综艺、动漫、纪录片、少儿），共 24 行。每页最多 200 部，按首映／首播时间从新到旧；海报来自 TMDB。**只有片单**，播放要靠自己的片源模块或媒体库。

## 导入

在 Rex「导入配置」贴上链接（手机长按打开「切换配置」；Mac 在左侧栏）：

| 装置 | 链接 |
|---|---|
| iPhone、iPad | `https://raw.githubusercontent.com/kenxtbecdi7690/rex-home/platform-home/PlatformHome.rex` |
| Mac | `https://raw.githubusercontent.com/kenxtbecdi7690/rex-home/platform-home/PlatformHome-Mac.rex` |

首页的每一行都指向 GitHub 上的模块链接，模块会自动更新，不用另外导入 `.js`。导入前先删旧首页，以及模块列表里旧的本机版「爱奇艺片单」「腾讯视频片单」「芒果TV片单」「优酷片单」。

## 合集（一次装好全部模块）

在 Rex 的模块页用链接新增订阅（合集），贴上：

```
https://raw.githubusercontent.com/kenxtbecdi7690/rex-home/platform-home/RexCollection.rex
```

内含 6 个模块：Rex首页、爱奇艺片单、腾讯视频片单、芒果TV片单、优酷片单、B站排行，全部用 GitHub 链接安装，会自动更新。

- 模块列表里如果已经有同名模块（例如从首页包装的本机版），先删掉再加合集；同一个模块编号只能有一个。
- 合集和首页包都用 GitHub 链接，装进来的都是链接版，会自动更新；两个一起用也不会冲突。
- 优酷片单要在模块设置里填自己的 Worker 网址。
- 合集只装模块，不会建首页；首页还是用上面的链接导入。


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
- 模块用 GitHub 链接，会自动更新，首页不用重新导入。

---

# 豆瓣＋B站 首页

18 行榜单：豆瓣 12 个榜单（实时热门剧集、热门国产剧、美剧、韩剧、日剧、动画、综艺、实时热门电影、院线热映、一周口碑电影榜、华语口碑剧集榜、Top 250）＋ B站 番剧、国创、纪录片、电影、电视剧、综艺排行。**只有片单**，播放靠自己的片源模块或媒体库。

| 装置 | 链接 |
|---|---|
| iPhone、iPad | `https://raw.githubusercontent.com/kenxtbecdi7690/rex-home/platform-home/DoubanBilibili.rex` |
| Mac | `https://raw.githubusercontent.com/kenxtbecdi7690/rex-home/platform-home/DoubanBilibili-Mac.rex` |

- 豆瓣用 Rex首页模块（会自动更新），不填密钥也能用。
- B站排行：[bilibili-rank.js](modules/bilibili-rank.js)（读 B站公开排行，配对 TMDB 海报，照排名显示；首页用 GitHub 链接，会自动更新）。
- 榜单照原榜排名，不做去重。

---

# MakkaPakka 快速版 首页

照 MakkaPakka 排法、全部用 Rex首页模块（v151，读 GitHub 上的加密版，会自动更新）的 27 行 48 格首页。小方块、封面、列表每格读 20 部，全宽行读 40 部，翻页再继续读；打开首页要查的 TMDB 次数约为原本的五分之一。

| 装置 | 链接 |
|---|---|
| iPhone、iPad | `https://raw.githubusercontent.com/kenxtbecdi7690/rex-home/platform-home/MakkaFast.rex` |
| Mac | `https://raw.githubusercontent.com/kenxtbecdi7690/rex-home/platform-home/MakkaFast-Mac.rex` |
