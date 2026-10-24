# Rex／Forward首页导出工具 说明

作者：Bolinxxlin

网址：<https://kenxtbecdi7690.github.io/rex-home/builder/>

**用途**：iPhone 的 Rex 不能导出首页，用这个工具把首页导出成 .rex，分享给别人。

**导出**
1. Rex 设置 →「iCloud」→「备份与还原」→「导出本机备份」，存到「ES 文件浏览器」 → 在「ES 文件浏览器」解压
2. payload → homes → configs → 选没有 .sync 的 .json
3. 打开网址 →「打开 .rex／备份」→ 填首页名称 →「导出首页」

**导入**：Rex 长按打开菜单 →「导入配置」→ 选 RexHome.rex

**一键重置**：回到 Rex首页的初始首页（10 行）。**空白模板**：跟 Rex 的空白模板一样，只有官方首页轮播，其他行自己加。按错了都可以点「撤销」。

**Forward**：也能打开 Forward 导出的 `.fwd`；「导出格式」选 Forward 就导出 `ForwardHome.fwd`，用 Forward 导入。Rex首页、Rex 官方 TMDB 这类 Rex 专用的行在 Forward 里不能用，导出时会提醒。（Forward 部分尚未实机导入测试）

Rex 自己也有：长按菜单 →「管理配置」→「从设定范本新增」→「空白模板」或「预设配置」（Rex 自带的首页）。

**注意**：只在手机里读取，不上传；整个备份不要分享。
