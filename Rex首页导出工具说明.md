# Rex首页导出工具 说明

作者：Bolinxxlin

网址：<https://kenxtbecdi7690.github.io/rex-home/builder/>

**用途**：iPhone 的 Rex 不能导出首页，用这个工具把首页导出成 .rex，分享给别人。

**导出**
1. Rex 设置 →「iCloud」→「备份与还原」→「导出本机备份」，存到「ES 文件浏览器」 → 在「ES 文件浏览器」解压
2. payload → homes → configs → 选没有 .sync 的 .json
3. 打开网址 →「打开 .rex／备份」→ 填首页名称 →「导出首页」

**导入**：Rex 长按打开菜单 →「导入配置」→ 选 RexHome.rex

**一键重置**：回到 Rex首页的初始首页（10 行）。**空白模板**：跟 Rex 的空白模板一样，只有官方首页轮播，其他行自己加。按错了都可以点「撤销」。

**预设配置**：换成 Rex 自带的「预设配置」首页（14 行：官方 TMDB、Bangumi、继续观看、网盘等），跟 Mac 版 Rex 导出的一模一样，可以从这里再改。

**Forward 转 Rex**：打开 Forward 的 `.fwd` 或 Forward 备份（会列出备份里的首页让你挑），导出成 `RexHome.rex`；各行用的模块，Rex 里也要先装好。Forward 自己的首页导出请用 [Forward 官方导出工具](https://forward.inch.red/export/)。

Rex 自己也有：长按菜单 →「管理配置」→「从设定范本新增」→「空白模板」或「预设配置」（Rex 自带的首页）。

**注意**：只在手机里读取，不上传；整个备份不要分享。

**Mac**：在 Mac 的 Safari／Chrome 也能用，可以把 `.rex`、`.fwd` 或备份 zip 直接拖进网页；导出的 `RexHome.rex` 写法跟 Mac 版 Rex 导出的一样，存在「下载」文件夹，用 Rex 的「导入配置」选它。
