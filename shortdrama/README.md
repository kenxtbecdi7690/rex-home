# 短剧聚合・柏霖

主模块 0.4.1，弹幕客户端 0.2.1。按使用者要求发布未加密 JavaScript。

## 导入

下载 [iphone.rex](https://raw.githubusercontent.com/kenxtbecdi7690/rex-home/main/shortdrama/iphone.rex)，保存到 iPhone「文件」，点开选择 Rex；或用 Rex 的「导入配置」。这是独立的短剧首页，包含红果、七猫、河马、星芽、好看五行，自动引用本目录的 ShortDrama.js。

在截图中的「模块」页添加合集时，填写以下地址，然后进入合集安装「短剧聚合・柏霖」：

```
https://raw.githubusercontent.com/kenxtbecdi7690/rex-home/main/shortdrama/manifest.json
```

这个入口读取合集 JSON；直接传 JS、普通 ZIP 或 test.mjs 会用错格式。`.rex` 是首页配置包，使用「导入配置」，不从模块合集入口添加。

## 功能范围

- 红果、七猫、河马、星芽、好看：本次重新抽查一部剧的列表、分集与一条媒体地址，均取得 HTTP 206 和 MP4／HLS 内容。首页默认使用这五个来源。红果此前发生过逾时，本次重测成功，列表 24 部，测试剧提供 5 集网页公开分集。
- 围观、柚漫剧：可从首页编辑器选择对应功能。围观最近媒体请求返回 503；柚漫剧只含搜索返回的部分公开分集。
- 抖音：输入完整 playlet/detail 链接或剧集 ID，仅列明确免费的分集，没有全站搜索。
- 喜番：输入自己的官方分享链接，仅取得接口提供的免费分享单集，不是全集。
- 火龙：尚未接入；测试环境收到地区版权限制，未提供空白入口。
- 弹幕：可选安装「短剧弹幕・自订 API」，必须先在 Rex 中填写可用的兼容服务地址；没有附送已部署的服务。

## 验证与错误修正

修正了原交付缺少合集 manifest、可下载 JS 地址与 `.rex` 首页的问题；补上 requiredVersion，保留原模块 ID，避免产生重复模块。集合条目与 JS 的 ID／版本一致。首页使用实际函数名、完整的 13 个格子字段和参数默认值。

已通过 JS 语法、离线接口与解析检查、合集结构、首页 ZIP 与函数引用检查。网络抽查结果见 verification.json。尚未连接用户的 iPhone，不能视为 Rex 真机播放验收。媒体地址会过期，模块在打开分集时重新获取；具体地区、剧集与公开集数以来源为准。

主模块访问的服务域名：hongguoduanju.com、kuaikaw.cn、qmplaylet.com、whjzjx.cn、baidu.com、9ddm.com、iesdouyin.com、snssdk.com、kuaishou.com；视频／图片 CDN 以来源实际返回为准。下载本目录的文件使用 raw.githubusercontent.com。没有为大陆服务强制指定代理地区。
