WidgetMetadata = {
  "id": "rex.home.unified",
  "title": "Rex首页",
  "version": "2026.10.18.11",
  "requiredVersion": "0.0.1",
  "description": "四大分类七个分支，TMDB精选与豆瓣精选独立展示。TMDB片单使用TMDB ID和评分，豆瓣Top250使用原始豆瓣ID、排名与评分。",
  "site": "https://developer.themoviedb.org/",
  "modules": [
    {
      "id": "movieHome",
      "title": "电影",
      "functionName": "loadMovieHome",
      "requiresWebView": false,
      "cacheDuration": 900,
      "description": "追新片单；子分类通过本入口的分类筛选选择，不另占首页目录。",
      "params": [
        {
          "name": "category",
          "title": "子分类",
          "type": "enumeration",
          "value": "movies",
          "enumOptions": [
            {
              "title": "长片",
              "value": "movies"
            },
            {
              "title": "短片",
              "value": "shortMovies"
            }
          ]
        },
        {
          "name": "region",
          "title": "地区",
          "type": "enumeration",
          "value": "",
          "enumOptions": [
            {
              "title": "全部地区",
              "value": ""
            },
            {
              "title": "国产（中国）",
              "value": "CN"
            },
            {
              "title": "中国香港",
              "value": "HK"
            },
            {
              "title": "中国台湾",
              "value": "TW"
            },
            {
              "title": "美国",
              "value": "US"
            },
            {
              "title": "英国",
              "value": "GB"
            },
            {
              "title": "日本",
              "value": "JP"
            },
            {
              "title": "韩国",
              "value": "KR"
            },
            {
              "title": "泰国",
              "value": "TH"
            },
            {
              "title": "印度",
              "value": "IN"
            },
            {
              "title": "巴西",
              "value": "BR"
            },
            {
              "title": "阿根廷",
              "value": "AR"
            },
            {
              "title": "墨西哥",
              "value": "MX"
            },
            {
              "title": "法国",
              "value": "FR"
            },
            {
              "title": "德国",
              "value": "DE"
            },
            {
              "title": "西班牙",
              "value": "ES"
            },
            {
              "title": "意大利",
              "value": "IT"
            }
          ]
        },
        {
          "name": "genre",
          "title": "题材",
          "type": "enumeration",
          "value": "",
          "enumOptions": [
            {
              "title": "全部",
              "value": ""
            },
            {
              "title": "剧情",
              "value": "18"
            },
            {
              "title": "喜剧",
              "value": "35"
            },
            {
              "title": "动作",
              "value": "28"
            },
            {
              "title": "爱情",
              "value": "10749"
            },
            {
              "title": "悬疑",
              "value": "9648"
            },
            {
              "title": "科幻",
              "value": "878"
            },
            {
              "title": "惊悚",
              "value": "53"
            },
            {
              "title": "恐怖",
              "value": "27"
            },
            {
              "title": "奇幻",
              "value": "14"
            },
            {
              "title": "犯罪",
              "value": "80"
            },
            {
              "title": "音乐",
              "value": "10402"
            },
            {
              "title": "冒险",
              "value": "12"
            },
            {
              "title": "家庭",
              "value": "10751"
            }
          ]
        },
        {
          "name": "platform",
          "title": "平台",
          "type": "enumeration",
          "value": "",
          "description": "剧集按播出平台；电影按观看地区的平台片库。未收录的片库会提示，平台筛选不提供播放资源。",
          "enumOptions": [
            {
              "title": "全部平台",
              "value": ""
            },
            {
              "title": "国内 · 腾讯视频",
              "value": "tencent"
            },
            {
              "title": "国内 · 爱奇艺",
              "value": "iqiyi"
            },
            {
              "title": "国内 · 优酷",
              "value": "youku"
            },
            {
              "title": "国内 · 芒果TV",
              "value": "mango"
            },
            {
              "title": "国内 · 哔哩哔哩",
              "value": "bilibili"
            },
            {
              "title": "国外 · Netflix",
              "value": "netflix"
            },
            {
              "title": "国外 · Disney+",
              "value": "disney"
            },
            {
              "title": "国外 · Apple TV+",
              "value": "apple"
            },
            {
              "title": "国外 · Prime Video",
              "value": "prime"
            },
            {
              "title": "国外 · HBO",
              "value": "hbo"
            },
            {
              "title": "国外 · HBO Max / Max",
              "value": "max"
            },
            {
              "title": "国外 · Hulu",
              "value": "hulu"
            }
          ]
        },
        {
          "name": "watchRegion",
          "title": "电影观看地区",
          "type": "enumeration",
          "value": "auto",
          "description": "选择平台片库所在地区，与作品出品地区分别筛选。自动：国内平台使用中国内地，国外平台使用美国。",
          "enumOptions": [
            {
              "title": "自动选择",
              "value": "auto"
            },
            {
              "title": "中国内地",
              "value": "CN"
            },
            {
              "title": "中国香港",
              "value": "HK"
            },
            {
              "title": "中国台湾",
              "value": "TW"
            },
            {
              "title": "美国",
              "value": "US"
            },
            {
              "title": "英国",
              "value": "GB"
            },
            {
              "title": "日本",
              "value": "JP"
            },
            {
              "title": "韩国",
              "value": "KR"
            },
            {
              "title": "泰国",
              "value": "TH"
            },
            {
              "title": "印度",
              "value": "IN"
            },
            {
              "title": "巴西",
              "value": "BR"
            },
            {
              "title": "阿根廷",
              "value": "AR"
            }
          ]
        },
        {
          "name": "year",
          "title": "上映年份",
          "type": "input",
          "value": "",
          "description": "留空为全部；输入四位年份，例如2026。首播年份不等于最新一集年份。"
        },
        {
          "name": "rating",
          "title": "最低评分",
          "type": "input",
          "value": "0",
          "description": "TMDB评分，0至10，可输入小数。"
        },
        {
          "name": "range",
          "title": "上映范围",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "最近30天",
              "value": "30"
            },
            {
              "title": "最近90天",
              "value": "90"
            },
            {
              "title": "最近180天",
              "value": "180"
            },
            {
              "title": "最近365天",
              "value": "365"
            },
            {
              "title": "不限",
              "value": "all"
            }
          ],
          "description": "默认不限制时间范围，按所选排序展示；仍排除未来首播内容。可选择近期播出范围。"
        },
        {
          "name": "sort",
          "title": "排序",
          "type": "enumeration",
          "value": "recent",
          "enumOptions": [
            {
              "title": "首映／首播倒序",
              "value": "recent"
            },
            {
              "title": "评分优先",
              "value": "score"
            },
            {
              "title": "热度优先",
              "value": "popular"
            }
          ]
        },
        {
          "name": "tags",
          "title": "自定义标签",
          "type": "input",
          "value": "",
          "description": "使用可检索的TMDB关键词名称，多个用英文逗号连接（同时满足）；也可输入数字关键词ID。不是豆瓣标签。"
        },
        {
          "name": "pageSize",
          "title": "每页片量",
          "type": "enumeration",
          "value": "60",
          "description": "读取上限；过滤后实际条数可能较少。20条请求更少，40/60条并行读取多页。更改片量后请回到第一页。",
          "enumOptions": [
            {
              "title": "20条 · 轻量",
              "value": "20"
            },
            {
              "title": "40条",
              "value": "40"
            },
            {
              "title": "60条 · 默认",
              "value": "60"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page",
          "value": "1"
        }
      ]
    },
    {
      "id": "seriesHome",
      "title": "剧集",
      "functionName": "loadSeriesHome",
      "requiresWebView": false,
      "cacheDuration": 900,
      "description": "追新片单；子分类通过本入口的分类筛选选择，不另占首页目录。",
      "params": [
        {
          "name": "loadMode",
          "title": "加载模式",
          "type": "enumeration",
          "value": "fast",
          "description": "快速模式优先读取片单及已有更新缓存；精确模式逐部查询最近已播集。选择更新时间排序也会查询详情。",
          "enumOptions": [
            {
              "title": "快速（默认）",
              "value": "fast"
            },
            {
              "title": "精确更新日期",
              "value": "precise"
            }
          ]
        },
        {
          "name": "region",
          "title": "地区",
          "type": "enumeration",
          "value": "",
          "enumOptions": [
            {
              "title": "全部地区",
              "value": ""
            },
            {
              "title": "国产（中国）",
              "value": "CN"
            },
            {
              "title": "中国香港",
              "value": "HK"
            },
            {
              "title": "中国台湾",
              "value": "TW"
            },
            {
              "title": "美国",
              "value": "US"
            },
            {
              "title": "英国",
              "value": "GB"
            },
            {
              "title": "日本",
              "value": "JP"
            },
            {
              "title": "韩国",
              "value": "KR"
            },
            {
              "title": "泰国",
              "value": "TH"
            },
            {
              "title": "印度",
              "value": "IN"
            },
            {
              "title": "巴西",
              "value": "BR"
            },
            {
              "title": "阿根廷",
              "value": "AR"
            },
            {
              "title": "墨西哥",
              "value": "MX"
            },
            {
              "title": "法国",
              "value": "FR"
            },
            {
              "title": "德国",
              "value": "DE"
            },
            {
              "title": "西班牙",
              "value": "ES"
            },
            {
              "title": "意大利",
              "value": "IT"
            }
          ]
        },
        {
          "name": "genre",
          "title": "题材",
          "type": "enumeration",
          "value": "",
          "enumOptions": [
            {
              "title": "全部",
              "value": ""
            },
            {
              "title": "剧情",
              "value": "18"
            },
            {
              "title": "喜剧",
              "value": "35"
            },
            {
              "title": "动作冒险",
              "value": "10759"
            },
            {
              "title": "悬疑",
              "value": "9648"
            },
            {
              "title": "科幻奇幻",
              "value": "10765"
            },
            {
              "title": "犯罪",
              "value": "80"
            },
            {
              "title": "家庭",
              "value": "10751"
            }
          ]
        },
        {
          "name": "platform",
          "title": "平台",
          "type": "enumeration",
          "value": "",
          "description": "剧集按播出平台；电影按观看地区的平台片库。未收录的片库会提示，平台筛选不提供播放资源。",
          "enumOptions": [
            {
              "title": "全部平台",
              "value": ""
            },
            {
              "title": "国内 · 腾讯视频",
              "value": "tencent"
            },
            {
              "title": "国内 · 爱奇艺",
              "value": "iqiyi"
            },
            {
              "title": "国内 · 优酷",
              "value": "youku"
            },
            {
              "title": "国内 · 芒果TV",
              "value": "mango"
            },
            {
              "title": "国内 · 哔哩哔哩",
              "value": "bilibili"
            },
            {
              "title": "国外 · Netflix",
              "value": "netflix"
            },
            {
              "title": "国外 · Disney+",
              "value": "disney"
            },
            {
              "title": "国外 · Apple TV+",
              "value": "apple"
            },
            {
              "title": "国外 · Prime Video",
              "value": "prime"
            },
            {
              "title": "国外 · HBO",
              "value": "hbo"
            },
            {
              "title": "国外 · HBO Max / Max",
              "value": "max"
            },
            {
              "title": "国外 · Hulu",
              "value": "hulu"
            }
          ]
        },
        {
          "name": "year",
          "title": "首播年份",
          "type": "input",
          "value": "",
          "description": "留空为全部；输入四位年份，例如2026。首播年份不等于最新一集年份。"
        },
        {
          "name": "rating",
          "title": "最低评分",
          "type": "input",
          "value": "0",
          "description": "TMDB评分，0至10，可输入小数。"
        },
        {
          "name": "range",
          "title": "近期播出范围",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "最近30天",
              "value": "30"
            },
            {
              "title": "最近90天",
              "value": "90"
            },
            {
              "title": "最近180天",
              "value": "180"
            },
            {
              "title": "最近365天",
              "value": "365"
            },
            {
              "title": "不限",
              "value": "all"
            }
          ],
          "description": "默认不限制时间范围，按所选排序展示；仍排除未来首播内容。可选择近期播出范围。"
        },
        {
          "name": "sort",
          "title": "排序",
          "type": "enumeration",
          "value": "recent",
          "enumOptions": [
            {
              "title": "首映／首播倒序",
              "value": "recent"
            },
            {
              "title": "评分优先",
              "value": "score"
            },
            {
              "title": "热度优先",
              "value": "popular"
            },
            {
              "title": "按更新时间排序（需额外查询，页内排序）",
              "value": "updated"
            }
          ]
        },
        {
          "name": "tags",
          "title": "自定义标签",
          "type": "input",
          "value": "",
          "description": "使用可检索的TMDB关键词名称，多个用英文逗号连接（同时满足）；也可输入数字关键词ID。不是豆瓣标签。"
        },
        {
          "name": "dateMode",
          "title": "海报日期",
          "type": "enumeration",
          "value": "updated",
          "enumOptions": [
            {
              "title": "最近一集已播日期（需额外查询）",
              "value": "updated"
            },
            {
              "title": "首播日期（更快）",
              "value": "premiere"
            }
          ]
        },
        {
          "name": "pageSize",
          "title": "每页片量",
          "type": "enumeration",
          "value": "60",
          "description": "读取上限；过滤后实际条数可能较少。20条请求更少，40/60条并行读取多页。更改片量后请回到第一页。",
          "enumOptions": [
            {
              "title": "20条 · 轻量",
              "value": "20"
            },
            {
              "title": "40条",
              "value": "40"
            },
            {
              "title": "60条 · 默认",
              "value": "60"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page",
          "value": "1"
        }
      ]
    },
    {
      "id": "varietyHome",
      "title": "综艺",
      "functionName": "loadVarietyHome",
      "requiresWebView": false,
      "cacheDuration": 900,
      "description": "追新片单；子分类通过本入口的分类筛选选择，不另占首页目录。",
      "params": [
        {
          "name": "loadMode",
          "title": "加载模式",
          "type": "enumeration",
          "value": "fast",
          "description": "快速模式优先读取片单及已有更新缓存；精确模式逐部查询最近已播集。选择更新时间排序也会查询详情。",
          "enumOptions": [
            {
              "title": "快速（默认）",
              "value": "fast"
            },
            {
              "title": "精确更新日期",
              "value": "precise"
            }
          ]
        },
        {
          "name": "category",
          "title": "子分类",
          "type": "enumeration",
          "value": "varietyCN",
          "enumOptions": [
            {
              "title": "国内综艺",
              "value": "varietyCN"
            },
            {
              "title": "国外综艺",
              "value": "varietyGlobal"
            }
          ]
        },
        {
          "name": "region",
          "title": "地区",
          "type": "enumeration",
          "value": "",
          "enumOptions": [
            {
              "title": "指定海外国家合并",
              "value": ""
            },
            {
              "title": "美国",
              "value": "US"
            },
            {
              "title": "英国",
              "value": "GB"
            },
            {
              "title": "日本",
              "value": "JP"
            },
            {
              "title": "韩国",
              "value": "KR"
            },
            {
              "title": "泰国",
              "value": "TH"
            },
            {
              "title": "印度",
              "value": "IN"
            },
            {
              "title": "巴西",
              "value": "BR"
            },
            {
              "title": "阿根廷",
              "value": "AR"
            },
            {
              "title": "墨西哥",
              "value": "MX"
            },
            {
              "title": "法国",
              "value": "FR"
            },
            {
              "title": "德国",
              "value": "DE"
            },
            {
              "title": "西班牙",
              "value": "ES"
            },
            {
              "title": "意大利",
              "value": "IT"
            }
          ],
          "belongTo": {
            "paramName": "category",
            "value": [
              "varietyGlobal"
            ]
          }
        },
        {
          "name": "genre",
          "title": "节目类型",
          "type": "enumeration",
          "value": "",
          "enumOptions": [
            {
              "title": "全部",
              "value": ""
            },
            {
              "title": "真人秀",
              "value": "10764"
            },
            {
              "title": "脱口秀",
              "value": "10767"
            }
          ]
        },
        {
          "name": "platform",
          "title": "平台",
          "type": "enumeration",
          "value": "",
          "description": "剧集按播出平台；电影按观看地区的平台片库。未收录的片库会提示，平台筛选不提供播放资源。",
          "enumOptions": [
            {
              "title": "全部平台",
              "value": ""
            },
            {
              "title": "国内 · 腾讯视频",
              "value": "tencent"
            },
            {
              "title": "国内 · 爱奇艺",
              "value": "iqiyi"
            },
            {
              "title": "国内 · 优酷",
              "value": "youku"
            },
            {
              "title": "国内 · 芒果TV",
              "value": "mango"
            },
            {
              "title": "国内 · 哔哩哔哩",
              "value": "bilibili"
            },
            {
              "title": "国外 · Netflix",
              "value": "netflix"
            },
            {
              "title": "国外 · Disney+",
              "value": "disney"
            },
            {
              "title": "国外 · Apple TV+",
              "value": "apple"
            },
            {
              "title": "国外 · Prime Video",
              "value": "prime"
            },
            {
              "title": "国外 · HBO",
              "value": "hbo"
            },
            {
              "title": "国外 · HBO Max / Max",
              "value": "max"
            },
            {
              "title": "国外 · Hulu",
              "value": "hulu"
            }
          ]
        },
        {
          "name": "year",
          "title": "首播年份",
          "type": "input",
          "value": "",
          "description": "留空为全部；输入四位年份，例如2026。首播年份不等于最新一集年份。"
        },
        {
          "name": "rating",
          "title": "最低评分",
          "type": "input",
          "value": "0",
          "description": "TMDB评分，0至10，可输入小数。"
        },
        {
          "name": "range",
          "title": "近期播出范围",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "最近30天",
              "value": "30"
            },
            {
              "title": "最近90天",
              "value": "90"
            },
            {
              "title": "最近180天",
              "value": "180"
            },
            {
              "title": "最近365天",
              "value": "365"
            },
            {
              "title": "不限",
              "value": "all"
            }
          ],
          "description": "默认不限制时间范围，按所选排序展示；仍排除未来首播内容。可选择近期播出范围。"
        },
        {
          "name": "sort",
          "title": "排序",
          "type": "enumeration",
          "value": "recent",
          "enumOptions": [
            {
              "title": "首映／首播倒序",
              "value": "recent"
            },
            {
              "title": "评分优先",
              "value": "score"
            },
            {
              "title": "热度优先",
              "value": "popular"
            },
            {
              "title": "按更新时间排序（需额外查询，页内排序）",
              "value": "updated"
            }
          ]
        },
        {
          "name": "tags",
          "title": "自定义标签",
          "type": "input",
          "value": "",
          "description": "使用可检索的TMDB关键词名称，多个用英文逗号连接（同时满足）；也可输入数字关键词ID。不是豆瓣标签。"
        },
        {
          "name": "dateMode",
          "title": "海报日期",
          "type": "enumeration",
          "value": "updated",
          "enumOptions": [
            {
              "title": "最近一集已播日期（需额外查询）",
              "value": "updated"
            },
            {
              "title": "首播日期（更快）",
              "value": "premiere"
            }
          ]
        },
        {
          "name": "pageSize",
          "title": "每页片量",
          "type": "enumeration",
          "value": "60",
          "description": "读取上限；过滤后实际条数可能较少。20条请求更少，40/60条并行读取多页。更改片量后请回到第一页。",
          "enumOptions": [
            {
              "title": "20条 · 轻量",
              "value": "20"
            },
            {
              "title": "40条",
              "value": "40"
            },
            {
              "title": "60条 · 默认",
              "value": "60"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page",
          "value": "1"
        }
      ]
    },
    {
      "id": "animeHome",
      "title": "动漫",
      "functionName": "loadAnimeHome",
      "requiresWebView": false,
      "cacheDuration": 900,
      "description": "追新片单；子分类通过本入口的分类筛选选择，不另占首页目录。",
      "params": [
        {
          "name": "loadMode",
          "title": "加载模式",
          "type": "enumeration",
          "value": "fast",
          "description": "快速模式优先读取片单及已有更新缓存；精确模式逐部查询最近已播集。选择更新时间排序也会查询详情。",
          "enumOptions": [
            {
              "title": "快速（默认）",
              "value": "fast"
            },
            {
              "title": "精确更新日期",
              "value": "precise"
            }
          ],
          "belongTo": {
            "paramName": "category",
            "value": [
              "animeSeries"
            ]
          }
        },
        {
          "name": "category",
          "title": "子分类",
          "type": "enumeration",
          "value": "animeSeries",
          "enumOptions": [
            {
              "title": "动画剧集",
              "value": "animeSeries"
            },
            {
              "title": "动画电影",
              "value": "animeMovies"
            }
          ]
        },
        {
          "name": "region",
          "title": "地区",
          "type": "enumeration",
          "value": "",
          "enumOptions": [
            {
              "title": "全部地区",
              "value": ""
            },
            {
              "title": "国产（中国）",
              "value": "CN"
            },
            {
              "title": "中国香港",
              "value": "HK"
            },
            {
              "title": "中国台湾",
              "value": "TW"
            },
            {
              "title": "美国",
              "value": "US"
            },
            {
              "title": "英国",
              "value": "GB"
            },
            {
              "title": "日本",
              "value": "JP"
            },
            {
              "title": "韩国",
              "value": "KR"
            },
            {
              "title": "泰国",
              "value": "TH"
            },
            {
              "title": "印度",
              "value": "IN"
            },
            {
              "title": "巴西",
              "value": "BR"
            },
            {
              "title": "阿根廷",
              "value": "AR"
            },
            {
              "title": "墨西哥",
              "value": "MX"
            },
            {
              "title": "法国",
              "value": "FR"
            },
            {
              "title": "德国",
              "value": "DE"
            },
            {
              "title": "西班牙",
              "value": "ES"
            },
            {
              "title": "意大利",
              "value": "IT"
            }
          ]
        },
        {
          "name": "genre",
          "title": "题材",
          "type": "enumeration",
          "value": "",
          "enumOptions": [
            {
              "title": "全部",
              "value": ""
            },
            {
              "title": "剧情",
              "value": "18"
            },
            {
              "title": "喜剧",
              "value": "35"
            },
            {
              "title": "悬疑",
              "value": "9648"
            },
            {
              "title": "犯罪",
              "value": "80"
            },
            {
              "title": "家庭",
              "value": "10751"
            }
          ]
        },
        {
          "name": "platform",
          "title": "平台",
          "type": "enumeration",
          "value": "",
          "description": "剧集按播出平台；电影按观看地区的平台片库。未收录的片库会提示，平台筛选不提供播放资源。",
          "enumOptions": [
            {
              "title": "全部平台",
              "value": ""
            },
            {
              "title": "国内 · 腾讯视频",
              "value": "tencent"
            },
            {
              "title": "国内 · 爱奇艺",
              "value": "iqiyi"
            },
            {
              "title": "国内 · 优酷",
              "value": "youku"
            },
            {
              "title": "国内 · 芒果TV",
              "value": "mango"
            },
            {
              "title": "国内 · 哔哩哔哩",
              "value": "bilibili"
            },
            {
              "title": "国外 · Netflix",
              "value": "netflix"
            },
            {
              "title": "国外 · Disney+",
              "value": "disney"
            },
            {
              "title": "国外 · Apple TV+",
              "value": "apple"
            },
            {
              "title": "国外 · Prime Video",
              "value": "prime"
            },
            {
              "title": "国外 · HBO",
              "value": "hbo"
            },
            {
              "title": "国外 · HBO Max / Max",
              "value": "max"
            },
            {
              "title": "国外 · Hulu",
              "value": "hulu"
            }
          ]
        },
        {
          "name": "watchRegion",
          "title": "电影观看地区",
          "type": "enumeration",
          "value": "auto",
          "description": "选择平台片库所在地区，与作品出品地区分别筛选。自动：国内平台使用中国内地，国外平台使用美国。",
          "enumOptions": [
            {
              "title": "自动选择",
              "value": "auto"
            },
            {
              "title": "中国内地",
              "value": "CN"
            },
            {
              "title": "中国香港",
              "value": "HK"
            },
            {
              "title": "中国台湾",
              "value": "TW"
            },
            {
              "title": "美国",
              "value": "US"
            },
            {
              "title": "英国",
              "value": "GB"
            },
            {
              "title": "日本",
              "value": "JP"
            },
            {
              "title": "韩国",
              "value": "KR"
            },
            {
              "title": "泰国",
              "value": "TH"
            },
            {
              "title": "印度",
              "value": "IN"
            },
            {
              "title": "巴西",
              "value": "BR"
            },
            {
              "title": "阿根廷",
              "value": "AR"
            }
          ],
          "belongTo": {
            "paramName": "category",
            "value": [
              "animeMovies"
            ]
          }
        },
        {
          "name": "year",
          "title": "上映／首播年份",
          "type": "input",
          "value": "",
          "description": "留空为全部；输入四位年份，例如2026。首播年份不等于最新一集年份。"
        },
        {
          "name": "rating",
          "title": "最低评分",
          "type": "input",
          "value": "0",
          "description": "TMDB评分，0至10，可输入小数。"
        },
        {
          "name": "range",
          "title": "近期上映／播出范围",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "最近30天",
              "value": "30"
            },
            {
              "title": "最近90天",
              "value": "90"
            },
            {
              "title": "最近180天",
              "value": "180"
            },
            {
              "title": "最近365天",
              "value": "365"
            },
            {
              "title": "不限",
              "value": "all"
            }
          ],
          "description": "默认不限制时间范围，按所选排序展示；仍排除未来首播内容。可选择近期播出范围。"
        },
        {
          "name": "sort",
          "title": "排序",
          "type": "enumeration",
          "value": "recent",
          "enumOptions": [
            {
              "title": "首映／首播倒序",
              "value": "recent"
            },
            {
              "title": "评分优先",
              "value": "score"
            },
            {
              "title": "热度优先",
              "value": "popular"
            },
            {
              "title": "按更新时间排序（需额外查询，页内排序）",
              "value": "updated"
            }
          ]
        },
        {
          "name": "tags",
          "title": "自定义标签",
          "type": "input",
          "value": "",
          "description": "使用可检索的TMDB关键词名称，多个用英文逗号连接（同时满足）；也可输入数字关键词ID。不是豆瓣标签。"
        },
        {
          "name": "dateMode",
          "title": "海报日期",
          "type": "enumeration",
          "value": "updated",
          "enumOptions": [
            {
              "title": "最近一集已播日期（需额外查询）",
              "value": "updated"
            },
            {
              "title": "首播日期（更快）",
              "value": "premiere"
            }
          ],
          "belongTo": {
            "paramName": "category",
            "value": [
              "animeSeries"
            ]
          }
        },
        {
          "name": "pageSize",
          "title": "每页片量",
          "type": "enumeration",
          "value": "60",
          "description": "读取上限；过滤后实际条数可能较少。20条请求更少，40/60条并行读取多页。更改片量后请回到第一页。",
          "enumOptions": [
            {
              "title": "20条 · 轻量",
              "value": "20"
            },
            {
              "title": "40条",
              "value": "40"
            },
            {
              "title": "60条 · 默认",
              "value": "60"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page",
          "value": "1"
        }
      ]
    },
    {
      "id": "tmdbPicks",
      "title": "TMDB精选",
      "functionName": "loadTmdbPicks",
      "requiresWebView": false,
      "cacheDuration": 900,
      "description": "TMDB趋势、热门、高分和上映片单；趋势统计热度周期，不限定影片上映在最近一周。使用TMDB原始数字ID与评分，过滤纪录片。",
      "params": [
        {
          "name": "feed",
          "title": "TMDB片单",
          "type": "enumeration",
          "value": "weekMovies",
          "enumOptions": [
            {
              "title": "本周电影趋势",
              "value": "weekMovies"
            },
            {
              "title": "本周剧集趋势",
              "value": "weekSeries"
            },
            {
              "title": "热门电影",
              "value": "popularMovies"
            },
            {
              "title": "热门剧集",
              "value": "popularSeries"
            },
            {
              "title": "高分电影",
              "value": "ratedMovies"
            },
            {
              "title": "高分剧集",
              "value": "ratedSeries"
            },
            {
              "title": "正在上映",
              "value": "nowMovies"
            }
          ]
        },
        {
          "name": "pageSize",
          "title": "每页片量",
          "type": "enumeration",
          "value": "60",
          "description": "读取上限；过滤后实际条数可能较少。20条请求更少，40/60条并行读取多页。更改片量后请回到第一页。",
          "enumOptions": [
            {
              "title": "20条 · 轻量",
              "value": "20"
            },
            {
              "title": "40条",
              "value": "40"
            },
            {
              "title": "60条 · 默认",
              "value": "60"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page",
          "value": "1"
        }
      ]
    },
    {
      "id": "doubanTop250",
      "title": "豆瓣精选",
      "functionName": "loadDoubanTop250",
      "requiresWebView": false,
      "cacheDuration": 3600,
      "description": "Top250和四种热门片单，使用原始豆瓣ID与评分；Top250保留原榜排名，不伪造热门片单排名。过滤纪录片，支持分页。",
      "params": [
        {
          "name": "feed",
          "title": "豆瓣片单",
          "type": "enumeration",
          "value": "top250",
          "enumOptions": [
            {
              "title": "电影 Top 250",
              "value": "top250"
            },
            {
              "title": "热门电影",
              "value": "movies"
            },
            {
              "title": "热播剧集",
              "value": "series"
            },
            {
              "title": "热门综艺",
              "value": "variety"
            },
            {
              "title": "热门动漫",
              "value": "anime"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page",
          "value": "1"
        }
      ]
    }
  ],
  "author": ""
};

// Parent/child catalog. The same graph is validated against static metadata.
var RexHomeCatalog = {
  "movieHome": {
    "title": "电影",
    "defaultCategory": "movies",
    "categories": {
      "movies": {
        "title": "长片",
        "media": "movie",
        "exclude": [
          16,
          99
        ],
        "excludeShort": true
      },
      "shortMovies": {
        "title": "短片",
        "media": "movie",
        "exclude": [
          16,
          99
        ],
        "short": true
      }
    }
  },
  "seriesHome": {
    "title": "剧集",
    "defaultCategory": "series",
    "categories": {
      "series": {
        "title": "真人剧集",
        "media": "tv",
        "exclude": [
          16,
          99,
          10763,
          10764,
          10767
        ]
      }
    }
  },
  "varietyHome": {
    "title": "综艺",
    "defaultCategory": "varietyCN",
    "categories": {
      "varietyCN": {
        "title": "国内综艺",
        "media": "tv",
        "genres": [
          10764,
          10767
        ],
        "exclude": [
          16,
          99
        ],
        "domestic": true
      },
      "varietyGlobal": {
        "title": "国外综艺",
        "media": "tv",
        "genres": [
          10764,
          10767
        ],
        "exclude": [
          16,
          99
        ],
        "foreign": true
      }
    }
  },
  "animeHome": {
    "title": "动漫",
    "defaultCategory": "animeSeries",
    "categories": {
      "animeSeries": {
        "title": "动画剧集",
        "media": "tv",
        "genres": [
          16
        ],
        "exclude": [
          99
        ]
      },
      "animeMovies": {
        "title": "动画电影",
        "media": "movie",
        "genres": [
          16
        ],
        "exclude": [
          99
        ]
      }
    }
  }
};

var RexHomeCountries = [
  ['国产（中国）','CN'],['中国香港','HK'],['中国台湾','TW'],['美国','US'],['英国','GB'],['日本','JP'],['韩国','KR'],
  ['泰国','TH'],['印度','IN'],['巴西','BR'],['阿根廷','AR'],['墨西哥','MX'],
  ['法国','FR'],['德国','DE'],['西班牙','ES'],['意大利','IT']
];
var RexHomeDomesticCountries = ['CN','HK','TW','MO'];
var RexHomeForeignCountries = RexHomeCountries.filter(function(x){return RexHomeDomesticCountries.indexOf(x[1])<0;}).map(function(x){return x[1];});
var rexHomeMemory = Object.create(null);
var rexHomePending = Object.create(null);
function rexHomeStable(value) {
  if (Array.isArray(value)) return '['+value.map(rexHomeStable).join(',')+']';
  if (value && typeof value === 'object') return '{'+Object.keys(value).sort().map(function(k){return JSON.stringify(k)+':'+rexHomeStable(value[k]);}).join(',')+'}';
  return JSON.stringify(value);
}
function rexHomeCacheRead(key) {
  var storageKey='rex.home.v2.'+encodeURIComponent(key), entry=rexHomeMemory[key];
  try {
    if (!entry && Widget.storage) {
      var raw=Widget.storage.get(storageKey);
      entry=typeof raw === 'string'?JSON.parse(raw):raw;
    }
  } catch (_) {}
  return entry && entry.until>Date.now()?entry:null;
}
async function rexHomeCached(key, ttl, task) {
  var storageKey='rex.home.v2.'+encodeURIComponent(key), entry=rexHomeCacheRead(key);
  if (entry) return entry.data;
  if (rexHomePending[key]) return rexHomePending[key];
  rexHomePending[key]=(async function(){
    var data=await task();
    // Failed requests throw and are never cached. Successful empty lists expire normally.
    var saved={until:Date.now()+ttl,data:data};
    rexHomeMemory[key]=saved;
    try {
      if (Widget.storage) {
        Widget.storage.set(storageKey,JSON.stringify(saved));
        var indexRaw=Widget.storage.get('rex.home.cache.index');
        var index=typeof indexRaw === 'string'?JSON.parse(indexRaw):(indexRaw || []);
        if (!Array.isArray(index)) index=[];
        index=index.filter(function(k){return k!==storageKey;}); index.push(storageKey);
        while (index.length>256) { var oldest=index.shift(); if (Widget.storage.remove) Widget.storage.remove(oldest); }
        Widget.storage.set('rex.home.cache.index',JSON.stringify(index));
      }
    } catch (_) {}
    return data;
  })();
  try {return await rexHomePending[key];} finally {delete rexHomePending[key];}
}
async function rexHomeApi(path, params, ttl) {
  return rexHomeCached(path+':'+rexHomeStable(params),ttl || 900000,async function(){
    var data=await Widget.tmdb.get(path,{params:params});
    if (!data || typeof data!=='object' || data.success===false) throw new Error('TMDB数据暂不可用');
    return data;
  });
}
function rexHomePeekApi(path, params) {
  var entry=rexHomeCacheRead(path+':'+rexHomeStable(params));
  return entry?entry.data:null;
}
function rexHomeDate(date) {
  var value=typeof date==='string'?date.slice(0,10):'';
  var parsed=Date.parse(value+'T00:00:00Z');
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(parsed) &&
    new Date(parsed).toISOString().slice(0,10)===value?value:'';
}
function rexHomeToday() {
  var now=new Date();
  return new Date(now.getTime()-now.getTimezoneOffset()*60000).toISOString().slice(0,10);
}
function rexHomeBefore(days) {
  var d=new Date(rexHomeToday()+'T12:00:00Z'); d.setUTCDate(d.getUTCDate()-days); return d.toISOString().slice(0,10);
}
function rexHomeIds(item) {
  return Array.isArray(item.genre_ids)?item.genre_ids.map(Number):
    (Array.isArray(item.genres)?item.genres.map(function(g){return Number(g.id);}):[]);
}
function rexHomeAccept(rule,item) {
  if (!item || !Number.isSafeInteger(Number(item.id)) || Number(item.id)<=0 ||
      (item.media_type && item.media_type!==rule.media)) return false;
  var genres=rexHomeIds(item);
  if (!genres.length) return false;
  if (rule.genres && !rule.genres.some(function(g){return genres.indexOf(g)>=0;})) return false;
  if ((rule.exclude || []).some(function(g){return genres.indexOf(g)>=0;})) return false;
  var countries=Array.isArray(item.origin_country)?item.origin_country:[];
  if (rule.domestic && !countries.some(function(c){return RexHomeDomesticCountries.indexOf(c)>=0;})) return false;
  if (rule.foreign && (countries.some(function(c){return RexHomeDomesticCountries.indexOf(c)>=0;}) || !countries.some(function(c){return RexHomeForeignCountries.indexOf(c)>=0;}))) return false;
  return true;
}
async function rexHomeKeywords(text) {
  var names=String(text || '').split(',').map(function(x){return x.trim();}).filter(Boolean);
  if (names.length>5) throw new Error('最多输入5个标签');
  var ids=[];
  for (var name of names) {
    if (/^\d+$/.test(name)) {ids.push(name);continue;}
    var data=await rexHomeApi('/search/keyword',{query:name,page:1},86400000);
    var exact=(data.results || []).find(function(x){return String(x.name || '').trim().toLowerCase()===name.toLowerCase();});
    if (!exact) throw new Error('未找到准确的TMDB标签：'+name+'；请使用关键词ID或更准确名称');
    ids.push(String(exact.id));
  }
  return Array.from(new Set(ids)).join(',');
}

// Platform IDs for TV are checked against the network name before use.
// Movie provider IDs are resolved by exact brand name in the selected region.
var RexHomePlatforms = {
  "tencent": {
    "title": "腾讯视频",
    "domestic": true,
    "network": 2007,
    "aliases": [
      "Tencent Video",
      "腾讯视频"
    ]
  },
  "iqiyi": {
    "title": "爱奇艺",
    "domestic": true,
    "network": 1330,
    "aliases": [
      "iQIYI",
      "爱奇艺"
    ]
  },
  "youku": {
    "title": "优酷",
    "domestic": true,
    "network": 1419,
    "aliases": [
      "Youku",
      "优酷"
    ]
  },
  "mango": {
    "title": "芒果TV",
    "domestic": true,
    "network": 1631,
    "aliases": [
      "Mango TV",
      "芒果TV"
    ]
  },
  "bilibili": {
    "title": "哔哩哔哩",
    "domestic": true,
    "network": 1605,
    "aliases": [
      "bilibili",
      "bilibili.com",
      "哔哩哔哩"
    ]
  },
  "netflix": {
    "title": "Netflix",
    "network": 213,
    "aliases": [
      "Netflix"
    ]
  },
  "disney": {
    "title": "Disney+",
    "network": 2739,
    "aliases": [
      "Disney+",
      "Disney Plus"
    ]
  },
  "apple": {
    "title": "Apple TV+",
    "network": 2552,
    "aliases": [
      "Apple TV+",
      "Apple TV Plus",
      "Apple TV"
    ]
  },
  "prime": {
    "title": "Prime Video",
    "network": 1024,
    "aliases": [
      "Amazon Prime Video",
      "Prime Video",
      "Amazon"
    ]
  },
  "hbo": {
    "title": "HBO",
    "network": 49,
    "aliases": [
      "HBO"
    ]
  },
  "max": {
    "title": "HBO Max / Max",
    "network": 3186,
    "aliases": [
      "HBO Max",
      "Max"
    ]
  },
  "hulu": {
    "title": "Hulu",
    "network": 453,
    "aliases": [
      "Hulu"
    ]
  }
};
function rexHomeBrand(value) {return String(value || '').toLowerCase().replace(/[\s+._-]/g,'');}
function rexHomePlatformMatch(platform,name) {
  var key=rexHomeBrand(name);
  return platform.aliases.some(function(alias){return rexHomeBrand(alias)===key;});
}
async function rexHomeApplyPlatform(rule,params,q) {
  var key=String(params.platform || '');
  if (!key) return;
  if (!Object.prototype.hasOwnProperty.call(RexHomePlatforms,key)) throw new Error('请选择有效的平台');
  var platform=RexHomePlatforms[key];
  if (rule.media==='tv') {
    var network=await rexHomeApi('/network/'+platform.network,{},86400000);
    if (!network || Number(network.id)!==platform.network || !rexHomePlatformMatch(platform,network.name))
      throw new Error('平台信息不一致，请刷新后重试');
    q.with_networks=platform.network;
  } else {
    var region=String(params.watchRegion || 'auto');
    if (region==='auto') region=platform.domestic?'CN':'US';
    if (['CN','HK','TW','US','GB','JP','KR','TH','IN','BR','AR'].indexOf(region)<0) throw new Error('请选择有效的电影观看地区');
    var providers=await rexHomeApi('/watch/providers/movie',{language:'en-US',watch_region:region},86400000);
    if (!providers || !Array.isArray(providers.results)) throw new Error('平台片库信息暂不可用，请稍后重试');
    var ids=providers.results.filter(function(p){return rexHomePlatformMatch(platform,p.provider_name) && Number.isSafeInteger(Number(p.provider_id)) && Number(p.provider_id)>0;}).map(function(p){return Number(p.provider_id);});
    ids=Array.from(new Set(ids));
    if (!ids.length) throw new Error('暂无该观看地区的'+platform.title+'电影片库，请切换平台或观看地区');
    if (ids.length!==1) throw new Error('平台名称对应多个片库，暂未执行筛选，请切换平台');
    q.watch_region=region;q.with_watch_providers=String(ids[0]);
  }
}

async function rexHomeQuery(rule,params) {
  var page=Number(params.page == null || params.page === '' ? 1 : params.page), rating=Number(params.rating || 0);
  if (!Number.isInteger(page) || page<1 || page>500) throw new Error('页码必须为1至500的整数');
  if (!Number.isFinite(rating) || rating<0 || rating>10) throw new Error('最低评分必须为0至10');
  var q={language:'zh-CN',page:page,include_adult:false,'vote_average.gte':rating,'vote_count.gte':1};
  if (rule.genres) q.with_genres=rule.genres.join('|');
  if (rule.exclude) q.without_genres=rule.exclude.join(',');
  var genre=String(params.genre || '');
  if (genre) {
    var allowed=rule.domestic || rule.foreign?[10764,10767]:
      rule.media==='movie'?[18,35,28,10749,9648,878,53,27,14,80,10402,12,10751]:[18,35,10759,9648,10765,80,10751];
    if (allowed.indexOf(Number(genre))<0) throw new Error('请选择当前内容类型支持的题材');
    q.with_genres=rule.domestic || rule.foreign?genre:(rule.genres?rule.genres.join(',')+',':'')+genre;
  }
  var region=String(params.region || '');
  if (rule.domestic) q.with_origin_country=RexHomeDomesticCountries.join('|');
  else if (rule.foreign) {
    if (region && RexHomeForeignCountries.indexOf(region)<0) throw new Error('国外综艺只能选择列出的海外国家');
    q.with_origin_country=region || RexHomeForeignCountries.join('|');
  } else if (region) {
    if (!RexHomeCountries.some(function(x){return x[1]===region;})) throw new Error('请选择支持的地区');
    q.with_origin_country=region;
  }
  var year=String(params.year || '').trim();
  if (year) {
    if (!/^\d{4}$/.test(year) || Number(year)<1800 || Number(year)>new Date().getFullYear()+2) throw new Error('请输入有效的四位年份');
    q[rule.media==='movie'?'primary_release_year':'first_air_date_year']=Number(year);
  }
  var range=String(params.range || 'all');
  if (['30','90','180','365','all'].indexOf(range)<0) throw new Error('请选择有效的时间范围');
  var today=rexHomeToday();
  if (rule.media==='movie') {
    q['primary_release_date.lte']=today;
    if (range!=='all') q['primary_release_date.gte']=rexHomeBefore(Number(range));
  } else {
    q.include_null_first_air_dates=false;
    q['first_air_date.lte']=today;
    if (range!=='all') {q['air_date.gte']=rexHomeBefore(Number(range));q['air_date.lte']=today;}
  }
  var sort=params.sort || 'recent';
  if (['recent','score','popular','updated'].indexOf(sort)<0 || (rule.media==='movie' && sort==='updated')) throw new Error('请选择本分类支持的排序');
  q.sort_by=sort==='score'?'vote_average.desc':sort==='recent'?(rule.media==='movie'?'primary_release_date.desc':'first_air_date.desc'):'popularity.desc';
  var keywords=await rexHomeKeywords(params.tags);
  var keywordIds=keywords?keywords.split(','):[];
  if (rule.short || rule.excludeShort) {
    // A real TMDB keyword is required. Do not equate a short runtime with a
    // short-film classification or substitute an unfiltered movie list.
    var shortId=await rexHomeKeywords('short film');
    if (rule.short) keywordIds.push(shortId);
    else {
      if (keywordIds.indexOf(shortId)>=0) throw new Error('短片标签请在电影目录的短片子分类中使用');
      q.without_keywords=shortId;
    }
  }
  if (keywordIds.length) q.with_keywords=Array.from(new Set(keywordIds)).join(',');
  await rexHomeApplyPlatform(rule,params,q);
  return {params:q,sort:sort};
}
async function rexHomeMapLimited(items,worker) {
  var output=new Array(items.length), cursor=0;
  async function run(){
    while(cursor<items.length){var index=cursor++;output[index]=await worker(items[index]);}
  }
  await Promise.all(Array.from({length:Math.min(4,items.length)},run));
  return output;
}
async function rexHomeFetchPages(path,queryParams,pageSize) {
  pageSize=Number(pageSize == null || pageSize === ''?60:pageSize);
  if ([20,40,60].indexOf(pageSize)<0) throw new Error('请选择20、40或60条每页片量');
  var batch=pageSize/20,first=(queryParams.page-1)*batch+1;
  if (first>500) return [];
  var pages=Array.from({length:Math.min(batch,501-first)},function(_,index){return first+index;});
  var responses=await Promise.all(pages.map(function(page){
    return rexHomeApi(path,Object.assign({},queryParams,{page:page}),900000);
  }));
  var combined=[];
  responses.forEach(function(response){
    if (!response || !Array.isArray(response.results)) throw new Error('TMDB片单格式异常');
    combined=combined.concat(response.results);
  });
  return combined;
}
async function rexHomeLoad(rule,params) {
  params=params || {};
  if (!rule || !rule.media) throw new Error('未知分类');
  var query=await rexHomeQuery(rule,params);
  var combined=await rexHomeFetchPages('/discover/'+rule.media,query.params,params.pageSize);
  return rexHomeBuildItems(rule,params,query,combined);
}
async function rexHomeBuildItems(rule,params,query,combined) {
  var seen=new Set();
  var raw=combined.filter(function(item){
    if (!rexHomeAccept(rule,item) || seen.has(String(item.id))) return false;
    if (params.genre && rexHomeIds(item).indexOf(Number(params.genre))<0) return false;
    var firstDate=rexHomeDate(rule.media==='movie'?item.release_date:item.first_air_date);
    if (!firstDate || firstDate>rexHomeToday()) return false;
    if ((!item.poster_path && !item.backdrop_path) || (!item.title && !item.name)) return false;
    seen.add(String(item.id)); return true;
  });
  var dateMode=rule.media==='tv'?(params.dateMode || 'updated'):'premiere';
  if (['updated','premiere'].indexOf(dateMode)<0) throw new Error('请选择有效的日期模式');
  var needDetails=rule.media==='tv' && (dateMode==='updated' || query.sort==='updated');
  var loadMode=params.loadMode || 'fast';
  if (['fast','precise'].indexOf(loadMode)<0) throw new Error('请选择快速或精确加载模式');
  var fetchDetails=needDetails && (loadMode==='precise' || query.sort==='updated');
  var sortDates=Object.create(null);
  var items=await rexHomeMapLimited(raw,async function(item){
    var detail=null;
    if (needDetails) {
      detail=rexHomePeekApi('/tv/'+item.id,{language:'zh-CN'});
      if (!detail && fetchDetails) {
        try {detail=await rexHomeApi('/tv/'+item.id,{language:'zh-CN'},900000);}
        catch (_) {}
      }
    }
    if (detail && Number(detail.id)!==Number(item.id)) return null;
    var title=item.title || item.name || (detail && detail.name);
    var poster=item.poster_path || (detail && detail.poster_path) || '';
    var backdrop=item.backdrop_path || (detail && detail.backdrop_path) || '';
    if (!title || (!poster && !backdrop)) return null;
    var premiere=rexHomeDate(rule.media==='movie'?item.release_date:item.first_air_date);
    var last=detail && detail.last_episode_to_air;
    var updated=last && rexHomeDate(last.air_date);
    if (updated && updated>rexHomeToday()) updated='';
    var displayDate=dateMode==='updated' && updated?updated:premiere;
    var dateText=rule.media==='movie'?'首映 '+(premiere || '未公布'):
      dateMode==='updated' && updated?'更新 '+updated:
      dateMode==='updated'?(loadMode==='fast' && !fetchDetails?'快速模式未查更新时间；首播 ':'更新时间未获取；首播 ')+(premiere || '未公布'):'首播 '+(premiere || '未公布');
    if (updated && last.season_number!=null && last.episode_number!=null) dateText+=' · S'+last.season_number+'E'+last.episode_number;
    var canonicalId=rule.media+'.'+Number(item.id);
    sortDates[canonicalId]=updated || premiere;
    // Rex uses a numeric TMDB ID plus mediaType for native resource matching.
    return {id:Number(item.id),type:'tmdb',mediaType:rule.media,
      title:title,posterPath:poster,backdropPath:backdrop,releaseDate:displayDate,
      rating:item.vote_average || 0,genreTitle:dateText,
      description:dateText+'\n'+(rule.media==='tv'?'剧集首播：'+(premiere || '未公布')+'\n':'')+(item.overview || (detail && detail.overview) || '')};
  });
  var posterSeen=new Set();
  items=items.filter(function(item){
    if (!item) return false;
    var key=item.posterPath || item.backdropPath;
    if (posterSeen.has(key)) return false;
    posterSeen.add(key);return true;
  });
  if (query.sort==='updated') items.sort(function(a,b){return (sortDates[b.mediaType+'.'+b.id] || '').localeCompare(sortDates[a.mediaType+'.'+a.id] || '');});
  return items;
}

// Four category loaders and one independent ranking are declared in WidgetMetadata.
// All children are internal routes, never additional homepage modules.
function rexHomeSelect(parentId, params) {
  var parent=RexHomeCatalog[parentId];
  if (!parent) throw new Error('未知首页目录');
  var selected=String(params.category || parent.defaultCategory);
  if (!Object.prototype.hasOwnProperty.call(parent.categories, selected)) {
    throw new Error('子分类不属于当前首页目录，请重新选择分类');
  }
  var rule=Object.assign({id:selected},parent.categories[selected]);
  var clean={};
  // Accept only supported common filters. Hidden media/genre values imported
  // from another module cannot enter any query.
  ['pageSize','platform','watchRegion','genre','region','year','rating','range','sort','tags','dateMode','loadMode','page'].forEach(function(key){
    if (params[key] != null) clean[key]=params[key];
  });
  if (rule.media==='movie') {
    clean.dateMode='premiere';
    if (clean.sort==='updated') clean.sort='recent';
  }
  if (rule.domestic) clean.region='CN';
  return {rule:rule,params:clean};
}
async function rexHomeMain(parentId, params) {
  var route=rexHomeSelect(parentId,params || {});
  return rexHomeLoad(route.rule,route.params);
}
async function loadMovieHome(params){return rexHomeMain('movieHome',params);}
async function loadSeriesHome(params){return rexHomeMain('seriesHome',params);}
async function loadVarietyHome(params){return rexHomeMain('varietyHome',params);}
async function loadAnimeHome(params){return rexHomeMain('animeHome',params);}

// Independent movie ranking, not a fifth content category.
var RexHomeDoubanPicks = {
  "top250": {
    "title": "电影 Top 250",
    "collection": "movie_top250",
    "media": "movie",
    "limit": 250
  },
  "movies": {
    "title": "热门电影",
    "collection": "movie_hot_gaia",
    "media": "movie"
  },
  "series": {
    "title": "热播剧集",
    "collection": "tv_hot",
    "media": "tv"
  },
  "variety": {
    "title": "热门综艺",
    "collection": "show_hot",
    "media": "tv"
  },
  "anime": {
    "title": "热门动漫",
    "collection": "tv_animation",
    "media": "tv"
  }
};
async function loadDoubanTop250(params) {
  params=params || {};
  var feed=String(params.feed || 'top250');
  if (!Object.prototype.hasOwnProperty.call(RexHomeDoubanPicks,feed)) throw new Error('请选择有效的豆瓣片单');
  var source=RexHomeDoubanPicks[feed];
  var page=Number(params.page == null || params.page === ''?1:params.page);
  if (!Number.isInteger(page) || page<1 || page>500) throw new Error('页码必须为正整数');
  var start=(page-1)*30;
  if (source.limit && start>=source.limit) return [];
  var count=source.limit?Math.min(30,source.limit-start):30;
  return rexHomeCached('douban.picks.v1.'+source.collection+'.'+page,3600000,async function(){
    if (!Widget.http || !Widget.http.get) throw new Error('当前Rex环境未提供榜单请求接口');
    var response=await Widget.http.get('https://m.douban.com/rexxar/api/v2/subject_collection/'+source.collection+'/items?start='+start+'&count='+count,{
      headers:{Referer:'https://m.douban.com/subject_collection/'+source.collection+'/','User-Agent':'Mozilla/5.0'},
    });
    var data=response && response.data;
    if (typeof data==='string') {try {data=JSON.parse(data);} catch (_) {throw new Error('豆瓣榜单返回了非JSON页面，请稍后重试');}}
    if (!data || !Array.isArray(data.subject_collection_items)) throw new Error('豆瓣榜单暂不可用，未替换成其他来源');
    var ids=new Set(),posters=new Set();
    return data.subject_collection_items.slice().sort(function(a,b){return source.limit?Number(a.rank)-Number(b.rank):0;}).map(function(item){
      var rank=Number(item.rank),id=String(item.id || '');
      var poster=item.cover_url || (item.pic && (item.pic.large || item.pic.normal)) || (item.cover && item.cover.url);
      var type=item.subtype || item.type;
      var tags=(item.tags || []).map(function(t){return t.name || '';}).join(' ');
      var subtitle=String(item.card_subtitle || '');
      if (type!==source.media || !/^\d+$/.test(id) || !item.title || !poster ||
          !/^https:\/\//.test(poster) || (source.limit && (!Number.isInteger(rank) || rank<1 || rank>source.limit || rank<=start || rank>start+count)) || item.is_released===false ||
          /纪录片|纪录电影|纪录短片/.test(subtitle+' '+tags)) return null;
      if (ids.has(id) || posters.has(poster)) return null;
      ids.add(id);posters.add(poster);
      var rating=item.rating && item.rating.value!=null?Number(item.rating.value):NaN;
      if (rating<0 || rating>10 || (item.rating && item.rating.count!=null && Number(item.rating.count)===0)) rating=NaN;
      var label=(source.limit?'豆瓣Top250第'+rank+'名':'豆瓣 · '+source.title)+(Number.isFinite(rating)?' · 豆瓣 '+rating.toFixed(1):'');
      var out={id:id,type:'douban',mediaType:source.media,title:item.title,posterPath:poster,
        genreTitle:label,description:label+'\n'+subtitle+'\n'+(item.description || '')};
      if (Number.isFinite(rating)) out.rating=rating;
      return {rank:source.limit?rank:0,item:out};
    }).filter(Boolean).sort(function(a,b){return a.rank-b.rank;}).map(function(x){return x.item;});
  });
}

var RexHomeTmdbPicks = {
  "weekMovies": {
    "title": "本周电影趋势",
    "path": "/trending/movie/week",
    "media": "movie"
  },
  "weekSeries": {
    "title": "本周剧集趋势",
    "path": "/trending/tv/week",
    "media": "tv"
  },
  "popularMovies": {
    "title": "热门电影",
    "path": "/movie/popular",
    "media": "movie"
  },
  "popularSeries": {
    "title": "热门剧集",
    "path": "/tv/popular",
    "media": "tv"
  },
  "ratedMovies": {
    "title": "高分电影",
    "path": "/movie/top_rated",
    "media": "movie"
  },
  "ratedSeries": {
    "title": "高分剧集",
    "path": "/tv/top_rated",
    "media": "tv"
  },
  "nowMovies": {
    "title": "正在上映",
    "path": "/movie/now_playing",
    "media": "movie"
  }
};
async function loadTmdbPicks(params) {
  params=params || {};
  var feed=String(params.feed || 'weekMovies');
  if (!Object.prototype.hasOwnProperty.call(RexHomeTmdbPicks,feed)) throw new Error('请选择有效的TMDB片单');
  var source=RexHomeTmdbPicks[feed];
  var page=Number(params.page == null || params.page === ''?1:params.page);
  if (!Number.isInteger(page) || page<1 || page>500) throw new Error('页码必须为1至500的整数');
  var data=await rexHomeFetchPages(source.path,{language:'zh-CN',page:page},params.pageSize);
  var items=await rexHomeBuildItems({media:source.media,exclude:source.media==='tv'?[99,10763]:[99]},
    {dateMode:'premiere',loadMode:'fast'},{sort:'source'},data);
  return items.map(function(item){
    item.genreTitle='TMDB · '+source.title+' · '+item.genreTitle;
    item.description='TMDB · '+source.title+'\n'+item.description;
    return item;
  });
}
