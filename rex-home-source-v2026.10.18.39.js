WidgetMetadata = {
  "id": "rex.home.unified",
  "title": "Rex首页",
  "version": "2026.10.18.39",
  "requiredVersion": "0.0.1",
  "description": "四大分类、电影出品公司、国内外纪录片、TMDB精选、Bangumi、Netflix周榜与B站影视榜单。",
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
          "title": "类别",
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
          "name": "year",
          "title": "年份",
          "type": "enumeration",
          "value": "",
          "description": "先列最近五年，再按年代分组；年代覆盖对应十年，未来上映内容仍排除。其他单一年份可选自定义。",
          "enumOptions": [
            {
              "title": "全部年份",
              "value": ""
            },
            {
              "title": "2026",
              "value": "2026"
            },
            {
              "title": "2025",
              "value": "2025"
            },
            {
              "title": "2024",
              "value": "2024"
            },
            {
              "title": "2023",
              "value": "2023"
            },
            {
              "title": "2022",
              "value": "2022"
            },
            {
              "title": "2020年代",
              "value": "2020s"
            },
            {
              "title": "2010年代",
              "value": "2010s"
            },
            {
              "title": "2000年代",
              "value": "2000s"
            },
            {
              "title": "90年代",
              "value": "1990s"
            },
            {
              "title": "80年代",
              "value": "1980s"
            },
            {
              "title": "70年代",
              "value": "1970s"
            },
            {
              "title": "60年代",
              "value": "1960s"
            },
            {
              "title": "50年代",
              "value": "1950s"
            },
            {
              "title": "1940年代",
              "value": "1940s"
            },
            {
              "title": "1930年代",
              "value": "1930s"
            },
            {
              "title": "1920年代",
              "value": "1920s"
            },
            {
              "title": "1910年代",
              "value": "1910s"
            },
            {
              "title": "1900年代",
              "value": "1900s"
            },
            {
              "title": "自定义年份",
              "value": "custom"
            }
          ]
        },
        {
          "name": "customYear",
          "title": "自定义年份",
          "type": "input",
          "value": "",
          "description": "输入四位年份，如1994；仅在年份选择自定义时生效。",
          "belongTo": {
            "paramName": "year",
            "value": [
              "custom"
            ]
          }
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
          "name": "rating",
          "title": "最低评分",
          "type": "input",
          "value": "0",
          "description": "TMDB评分，0至10，可输入小数。"
        },
        {
          "name": "range",
          "title": "范围",
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
          "title": "片量",
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
          "name": "year",
          "title": "年份",
          "type": "enumeration",
          "value": "",
          "description": "先列最近五年，再按年代分组；年代覆盖对应十年，未来上映内容仍排除。其他单一年份可选自定义。",
          "enumOptions": [
            {
              "title": "全部年份",
              "value": ""
            },
            {
              "title": "2026",
              "value": "2026"
            },
            {
              "title": "2025",
              "value": "2025"
            },
            {
              "title": "2024",
              "value": "2024"
            },
            {
              "title": "2023",
              "value": "2023"
            },
            {
              "title": "2022",
              "value": "2022"
            },
            {
              "title": "2020年代",
              "value": "2020s"
            },
            {
              "title": "2010年代",
              "value": "2010s"
            },
            {
              "title": "2000年代",
              "value": "2000s"
            },
            {
              "title": "90年代",
              "value": "1990s"
            },
            {
              "title": "80年代",
              "value": "1980s"
            },
            {
              "title": "70年代",
              "value": "1970s"
            },
            {
              "title": "60年代",
              "value": "1960s"
            },
            {
              "title": "50年代",
              "value": "1950s"
            },
            {
              "title": "1940年代",
              "value": "1940s"
            },
            {
              "title": "1930年代",
              "value": "1930s"
            },
            {
              "title": "1920年代",
              "value": "1920s"
            },
            {
              "title": "1910年代",
              "value": "1910s"
            },
            {
              "title": "1900年代",
              "value": "1900s"
            },
            {
              "title": "自定义年份",
              "value": "custom"
            }
          ]
        },
        {
          "name": "customYear",
          "title": "自定义年份",
          "type": "input",
          "value": "",
          "description": "输入四位年份，如1994；仅在年份选择自定义时生效。",
          "belongTo": {
            "paramName": "year",
            "value": [
              "custom"
            ]
          }
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
          "name": "rating",
          "title": "最低评分",
          "type": "input",
          "value": "0",
          "description": "TMDB评分，0至10，可输入小数。"
        },
        {
          "name": "range",
          "title": "范围",
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
          "name": "pageSize",
          "title": "片量",
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
          "name": "category",
          "title": "类别",
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
          "name": "year",
          "title": "年份",
          "type": "enumeration",
          "value": "",
          "description": "先列最近五年，再按年代分组；年代覆盖对应十年，未来上映内容仍排除。其他单一年份可选自定义。",
          "enumOptions": [
            {
              "title": "全部年份",
              "value": ""
            },
            {
              "title": "2026",
              "value": "2026"
            },
            {
              "title": "2025",
              "value": "2025"
            },
            {
              "title": "2024",
              "value": "2024"
            },
            {
              "title": "2023",
              "value": "2023"
            },
            {
              "title": "2022",
              "value": "2022"
            },
            {
              "title": "2020年代",
              "value": "2020s"
            },
            {
              "title": "2010年代",
              "value": "2010s"
            },
            {
              "title": "2000年代",
              "value": "2000s"
            },
            {
              "title": "90年代",
              "value": "1990s"
            },
            {
              "title": "80年代",
              "value": "1980s"
            },
            {
              "title": "70年代",
              "value": "1970s"
            },
            {
              "title": "60年代",
              "value": "1960s"
            },
            {
              "title": "50年代",
              "value": "1950s"
            },
            {
              "title": "1940年代",
              "value": "1940s"
            },
            {
              "title": "1930年代",
              "value": "1930s"
            },
            {
              "title": "1920年代",
              "value": "1920s"
            },
            {
              "title": "1910年代",
              "value": "1910s"
            },
            {
              "title": "1900年代",
              "value": "1900s"
            },
            {
              "title": "自定义年份",
              "value": "custom"
            }
          ]
        },
        {
          "name": "customYear",
          "title": "自定义年份",
          "type": "input",
          "value": "",
          "description": "输入四位年份，如1994；仅在年份选择自定义时生效。",
          "belongTo": {
            "paramName": "year",
            "value": [
              "custom"
            ]
          }
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
          "name": "rating",
          "title": "最低评分",
          "type": "input",
          "value": "0",
          "description": "TMDB评分，0至10，可输入小数。"
        },
        {
          "name": "range",
          "title": "范围",
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
          "name": "pageSize",
          "title": "片量",
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
          "name": "category",
          "title": "类别",
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
          "name": "year",
          "title": "年份",
          "type": "enumeration",
          "value": "",
          "description": "先列最近五年，再按年代分组；年代覆盖对应十年，未来上映内容仍排除。其他单一年份可选自定义。",
          "enumOptions": [
            {
              "title": "全部年份",
              "value": ""
            },
            {
              "title": "2026",
              "value": "2026"
            },
            {
              "title": "2025",
              "value": "2025"
            },
            {
              "title": "2024",
              "value": "2024"
            },
            {
              "title": "2023",
              "value": "2023"
            },
            {
              "title": "2022",
              "value": "2022"
            },
            {
              "title": "2020年代",
              "value": "2020s"
            },
            {
              "title": "2010年代",
              "value": "2010s"
            },
            {
              "title": "2000年代",
              "value": "2000s"
            },
            {
              "title": "90年代",
              "value": "1990s"
            },
            {
              "title": "80年代",
              "value": "1980s"
            },
            {
              "title": "70年代",
              "value": "1970s"
            },
            {
              "title": "60年代",
              "value": "1960s"
            },
            {
              "title": "50年代",
              "value": "1950s"
            },
            {
              "title": "1940年代",
              "value": "1940s"
            },
            {
              "title": "1930年代",
              "value": "1930s"
            },
            {
              "title": "1920年代",
              "value": "1920s"
            },
            {
              "title": "1910年代",
              "value": "1910s"
            },
            {
              "title": "1900年代",
              "value": "1900s"
            },
            {
              "title": "自定义年份",
              "value": "custom"
            }
          ]
        },
        {
          "name": "customYear",
          "title": "自定义年份",
          "type": "input",
          "value": "",
          "description": "输入四位年份，如1994；仅在年份选择自定义时生效。",
          "belongTo": {
            "paramName": "year",
            "value": [
              "custom"
            ]
          }
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
          "name": "rating",
          "title": "最低评分",
          "type": "input",
          "value": "0",
          "description": "TMDB评分，0至10，可输入小数。"
        },
        {
          "name": "range",
          "title": "范围",
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
          "name": "pageSize",
          "title": "片量",
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
      "description": "保留趋势、热门、高分和上映片单；新增系列电影与主题探索，使用原始TMDB影片ID和海报，过滤纪录片。",
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
            },
            {
              "title": "系列电影",
              "value": "collections"
            },
            {
              "title": "主题探索",
              "value": "themes"
            }
          ]
        },
        {
          "name": "series",
          "title": "电影系列",
          "type": "enumeration",
          "value": "lordOfRings",
          "belongTo": {
            "paramName": "feed",
            "value": [
              "collections"
            ]
          },
          "enumOptions": [
            {
              "title": "流浪地球",
              "value": "wanderingEarth"
            },
            {
              "title": "唐人街探案",
              "value": "detectiveChinatown"
            },
            {
              "title": "指环王",
              "value": "lordOfRings"
            },
            {
              "title": "哈利·波特",
              "value": "harryPotter"
            },
            {
              "title": "碟中谍",
              "value": "missionImpossible"
            },
            {
              "title": "黑客帝国",
              "value": "matrix"
            },
            {
              "title": "复仇者联盟",
              "value": "avengers"
            },
            {
              "title": "玩具总动员",
              "value": "toyStory"
            }
          ]
        },
        {
          "name": "seriesSort",
          "title": "系列排序",
          "type": "enumeration",
          "value": "release",
          "belongTo": {
            "paramName": "feed",
            "value": [
              "collections"
            ]
          },
          "enumOptions": [
            {
              "title": "按上映顺序",
              "value": "release"
            },
            {
              "title": "评分优先",
              "value": "score"
            }
          ]
        },
        {
          "name": "theme",
          "title": "电影主题",
          "type": "enumeration",
          "value": "timeLoop",
          "belongTo": {
            "paramName": "feed",
            "value": [
              "themes"
            ]
          },
          "enumOptions": [
            {
              "title": "时空循环",
              "value": "timeLoop"
            },
            {
              "title": "赛博朋克",
              "value": "cyberpunk"
            },
            {
              "title": "密室推理",
              "value": "whodunit"
            },
            {
              "title": "太空歌剧",
              "value": "spaceOpera"
            }
          ]
        },
        {
          "name": "themeSort",
          "title": "主题排序",
          "type": "enumeration",
          "value": "popular",
          "belongTo": {
            "paramName": "feed",
            "value": [
              "themes"
            ]
          },
          "enumOptions": [
            {
              "title": "热度优先",
              "value": "popular"
            },
            {
              "title": "评分优先",
              "value": "score"
            },
            {
              "title": "最近上映",
              "value": "recent"
            }
          ]
        },
        {
          "name": "view",
          "title": "显示范围",
          "type": "enumeration",
          "value": "all",
          "description": "首页预览避开上方默认分类的已展示影片；查看完整榜单请选择完整片单。",
          "enumOptions": [
            {
              "title": "完整片单",
              "value": "all"
            },
            {
              "title": "首页避重复",
              "value": "home"
            }
          ]
        },
        {
          "name": "pageSize",
          "title": "片量",
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
      "id": "netflixWeekly",
      "title": "Netflix周榜",
      "functionName": "loadNetflixWeekly",
      "requiresWebView": false,
      "cacheDuration": 3600,
      "description": "Netflix官方四类全球周榜，每类最多10部。严格匹配TMDB同名同年条目；未唯一匹配的跳过，显示实际榜单周截止日期。",
      "params": [
        {
          "name": "feed",
          "title": "榜单",
          "type": "enumeration",
          "value": "englishMovies",
          "enumOptions": [
            {
              "title": "英语电影",
              "value": "englishMovies"
            },
            {
              "title": "非英语电影",
              "value": "otherMovies"
            },
            {
              "title": "英语剧集",
              "value": "englishSeries"
            },
            {
              "title": "非英语剧集",
              "value": "otherSeries"
            }
          ]
        },
        {
          "name": "view",
          "title": "显示范围",
          "type": "enumeration",
          "value": "all",
          "description": "首页预览避开上方默认分类的已展示影片；查看完整榜单请选择完整片单。",
          "enumOptions": [
            {
              "title": "完整片单",
              "value": "all"
            },
            {
              "title": "首页避重复",
              "value": "home"
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
      "id": "studioHome",
      "title": "电影出品公司",
      "functionName": "loadStudioHome",
      "requiresWebView": false,
      "cacheDuration": 900,
      "description": "按TMDB实际出品公司筛选真人电影；公司不等于播放平台，不保证可播放。",
      "params": [
        {
          "name": "company",
          "title": "电影出品公司",
          "type": "enumeration",
          "value": "warner",
          "enumOptions": [
            {
              "title": "华纳兄弟",
              "value": "warner"
            },
            {
              "title": "环球影业",
              "value": "universal"
            },
            {
              "title": "派拉蒙",
              "value": "paramount"
            },
            {
              "title": "哥伦比亚",
              "value": "columbia"
            },
            {
              "title": "迪士尼",
              "value": "disney"
            },
            {
              "title": "二十世纪影业",
              "value": "century"
            },
            {
              "title": "中国电影集团",
              "value": "chinaFilm"
            },
            {
              "title": "光线影业",
              "value": "enlight"
            }
          ]
        },
        {
          "name": "year",
          "title": "年份",
          "type": "enumeration",
          "value": "",
          "description": "先列最近五年，再按年代分组；年代覆盖对应十年，未来上映内容仍排除。其他单一年份可选自定义。",
          "enumOptions": [
            {
              "title": "全部年份",
              "value": ""
            },
            {
              "title": "2026",
              "value": "2026"
            },
            {
              "title": "2025",
              "value": "2025"
            },
            {
              "title": "2024",
              "value": "2024"
            },
            {
              "title": "2023",
              "value": "2023"
            },
            {
              "title": "2022",
              "value": "2022"
            },
            {
              "title": "2020年代",
              "value": "2020s"
            },
            {
              "title": "2010年代",
              "value": "2010s"
            },
            {
              "title": "2000年代",
              "value": "2000s"
            },
            {
              "title": "90年代",
              "value": "1990s"
            },
            {
              "title": "80年代",
              "value": "1980s"
            },
            {
              "title": "70年代",
              "value": "1970s"
            },
            {
              "title": "60年代",
              "value": "1960s"
            },
            {
              "title": "50年代",
              "value": "1950s"
            },
            {
              "title": "1940年代",
              "value": "1940s"
            },
            {
              "title": "1930年代",
              "value": "1930s"
            },
            {
              "title": "1920年代",
              "value": "1920s"
            },
            {
              "title": "1910年代",
              "value": "1910s"
            },
            {
              "title": "1900年代",
              "value": "1900s"
            },
            {
              "title": "自定义年份",
              "value": "custom"
            }
          ]
        },
        {
          "name": "customYear",
          "title": "自定义年份",
          "type": "input",
          "value": "",
          "description": "输入四位年份，如1994；仅在年份选择自定义时生效。",
          "belongTo": {
            "paramName": "year",
            "value": [
              "custom"
            ]
          }
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
          "name": "rating",
          "title": "最低评分",
          "type": "input",
          "value": "0",
          "description": "TMDB评分，0至10，可输入小数。"
        },
        {
          "name": "range",
          "title": "范围",
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
          "name": "view",
          "title": "首页展示",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "完整片单顺序",
              "value": "all"
            },
            {
              "title": "优先展示未在电影栏出现的影片",
              "value": "home"
            }
          ],
          "description": "仅读取已加载的电影栏缓存调整第一页顺序，保留全部返回项及分页；无缓存时保持原顺序。"
        },
        {
          "name": "pageSize",
          "title": "片量",
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
      "id": "documentaryHome",
      "title": "纪录片",
      "functionName": "loadDocumentaryHome",
      "requiresWebView": false,
      "cacheDuration": 900,
      "description": "国内、国外纪录电影和纪录剧集；国外默认覆盖当前支持的海外国家，按出品地区筛选，不代表播放平台。",
      "params": [
        {
          "name": "scope",
          "title": "地区分类",
          "type": "enumeration",
          "value": "domestic",
          "enumOptions": [
            {
              "title": "国内纪录片",
              "value": "domestic"
            },
            {
              "title": "国外纪录片",
              "value": "foreign"
            }
          ]
        },
        {
          "name": "format",
          "title": "内容形式",
          "type": "enumeration",
          "value": "movie",
          "enumOptions": [
            {
              "title": "纪录电影",
              "value": "movie"
            },
            {
              "title": "纪录剧集",
              "value": "tv"
            }
          ]
        },
        {
          "name": "year",
          "title": "年份",
          "type": "enumeration",
          "value": "",
          "description": "先列最近五年，再按年代分组；年代覆盖对应十年，未来上映内容仍排除。其他单一年份可选自定义。",
          "enumOptions": [
            {
              "title": "全部年份",
              "value": ""
            },
            {
              "title": "2026",
              "value": "2026"
            },
            {
              "title": "2025",
              "value": "2025"
            },
            {
              "title": "2024",
              "value": "2024"
            },
            {
              "title": "2023",
              "value": "2023"
            },
            {
              "title": "2022",
              "value": "2022"
            },
            {
              "title": "2020年代",
              "value": "2020s"
            },
            {
              "title": "2010年代",
              "value": "2010s"
            },
            {
              "title": "2000年代",
              "value": "2000s"
            },
            {
              "title": "90年代",
              "value": "1990s"
            },
            {
              "title": "80年代",
              "value": "1980s"
            },
            {
              "title": "70年代",
              "value": "1970s"
            },
            {
              "title": "60年代",
              "value": "1960s"
            },
            {
              "title": "50年代",
              "value": "1950s"
            },
            {
              "title": "1940年代",
              "value": "1940s"
            },
            {
              "title": "1930年代",
              "value": "1930s"
            },
            {
              "title": "1920年代",
              "value": "1920s"
            },
            {
              "title": "1910年代",
              "value": "1910s"
            },
            {
              "title": "1900年代",
              "value": "1900s"
            },
            {
              "title": "自定义年份",
              "value": "custom"
            }
          ]
        },
        {
          "name": "customYear",
          "title": "自定义年份",
          "type": "input",
          "value": "",
          "description": "输入四位年份，如1994；仅在年份选择自定义时生效。",
          "belongTo": {
            "paramName": "year",
            "value": [
              "custom"
            ]
          }
        },
        {
          "name": "regionDomestic",
          "title": "地区",
          "type": "enumeration",
          "value": "",
          "enumOptions": [
            {
              "title": "全部国内地区",
              "value": ""
            },
            {
              "title": "中国大陆",
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
              "title": "中国澳门",
              "value": "MO"
            }
          ],
          "belongTo": {
            "paramName": "scope",
            "value": [
              "domestic"
            ]
          }
        },
        {
          "name": "regionForeign",
          "title": "地区",
          "type": "enumeration",
          "value": "",
          "enumOptions": [
            {
              "title": "全部支持的海外地区",
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
            "paramName": "scope",
            "value": [
              "foreign"
            ]
          }
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
          "title": "范围",
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
          "name": "pageSize",
          "title": "片量",
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
      "id": "bangumiPicks",
      "title": "Bangumi",
      "functionName": "loadBangumiPicks",
      "requiresWebView": false,
      "cacheDuration": 900,
      "description": "Bangumi累计人气与有效排名；仅展示可唯一核对的同名同年TMDB动画，不是本周播放量。",
      "params": [
        {
          "name": "bgmSort",
          "title": "榜单",
          "type": "enumeration",
          "value": "heat",
          "enumOptions": [
            {
              "title": "Bangumi人气",
              "value": "heat"
            },
            {
              "title": "Bangumi排名",
              "value": "rank"
            }
          ]
        },
        {
          "name": "category",
          "title": "类别",
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
          "name": "year",
          "title": "年份",
          "type": "enumeration",
          "value": "",
          "description": "先列最近五年，再按年代分组；年代覆盖对应十年，未来上映内容仍排除。其他单一年份可选自定义。",
          "enumOptions": [
            {
              "title": "全部年份",
              "value": ""
            },
            {
              "title": "2026",
              "value": "2026"
            },
            {
              "title": "2025",
              "value": "2025"
            },
            {
              "title": "2024",
              "value": "2024"
            },
            {
              "title": "2023",
              "value": "2023"
            },
            {
              "title": "2022",
              "value": "2022"
            },
            {
              "title": "2020年代",
              "value": "2020s"
            },
            {
              "title": "2010年代",
              "value": "2010s"
            },
            {
              "title": "2000年代",
              "value": "2000s"
            },
            {
              "title": "90年代",
              "value": "1990s"
            },
            {
              "title": "80年代",
              "value": "1980s"
            },
            {
              "title": "70年代",
              "value": "1970s"
            },
            {
              "title": "60年代",
              "value": "1960s"
            },
            {
              "title": "50年代",
              "value": "1950s"
            },
            {
              "title": "1940年代",
              "value": "1940s"
            },
            {
              "title": "1930年代",
              "value": "1930s"
            },
            {
              "title": "1920年代",
              "value": "1920s"
            },
            {
              "title": "1910年代",
              "value": "1910s"
            },
            {
              "title": "1900年代",
              "value": "1900s"
            },
            {
              "title": "自定义年份",
              "value": "custom"
            }
          ]
        },
        {
          "name": "customYear",
          "title": "自定义年份",
          "type": "input",
          "value": "",
          "description": "输入四位年份，如1994；仅在年份选择自定义时生效。",
          "belongTo": {
            "paramName": "year",
            "value": [
              "custom"
            ]
          }
        },
        {
          "name": "bgmRegion",
          "title": "地区",
          "type": "enumeration",
          "value": "",
          "description": "仅按Bangumi公共标签筛选中国／日本，不代表平台片库。",
          "enumOptions": [
            {
              "title": "全部",
              "value": ""
            },
            {
              "title": "国漫",
              "value": "CN"
            },
            {
              "title": "日番",
              "value": "JP"
            }
          ]
        },
        {
          "name": "bgmRating",
          "title": "最低评分",
          "type": "input",
          "value": "0",
          "description": "0至10；Bangumi评分，与TMDB评分不同。"
        },
        {
          "name": "bgmPageSize",
          "title": "片量",
          "type": "enumeration",
          "value": "20",
          "description": "每页源条目读取上限，匹配或类型检查后可能更少；20条首次请求较少。",
          "enumOptions": [
            {
              "title": "20条 · 推荐",
              "value": "20"
            },
            {
              "title": "40条",
              "value": "40"
            },
            {
              "title": "60条",
              "value": "60"
            }
          ]
        },
        {
          "name": "view",
          "title": "显示范围",
          "type": "enumeration",
          "value": "all",
          "description": "首页预览避开上方默认分类的已展示影片；查看完整榜单请选择完整片单。",
          "enumOptions": [
            {
              "title": "完整片单",
              "value": "all"
            },
            {
              "title": "首页避重复",
              "value": "home"
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
      "id": "bilibiliPicks",
      "title": "B站",
      "functionName": "loadBilibiliPicks",
      "requiresWebView": false,
      "cacheDuration": 900,
      "description": "B站官方国创、番剧、纪录片榜单；仅展示可唯一核对的TMDB作品，不包含普通投稿。",
      "params": [
        {
          "name": "biliFeed",
          "title": "类别",
          "type": "enumeration",
          "value": "china",
          "enumOptions": [
            {
              "title": "国创榜",
              "value": "china"
            },
            {
              "title": "番剧榜",
              "value": "anime"
            },
            {
              "title": "纪录片榜",
              "value": "docs"
            }
          ]
        },
        {
          "name": "biliPageSize",
          "title": "片量",
          "type": "enumeration",
          "value": "20",
          "enumOptions": [
            {
              "title": "20条 · 推荐",
              "value": "20"
            },
            {
              "title": "40条",
              "value": "40"
            },
            {
              "title": "60条",
              "value": "60"
            }
          ]
        },
        {
          "name": "view",
          "title": "显示范围",
          "type": "enumeration",
          "value": "all",
          "description": "首页预览避开上方默认分类的已展示影片；查看完整榜单请选择完整片单。",
          "enumOptions": [
            {
              "title": "完整片单",
              "value": "all"
            },
            {
              "title": "首页避重复",
              "value": "home"
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
  if(entry&&entry.until>Date.now()){rexHomeMemory[key]=entry;return entry;}
  return null;
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
// Retain only real, successful first-page lists for the exact same route and filters.
async function rexHomeKeepList(key,params,task){
 var page=Number(params&&params.page!=null&&params.page!==''?params.page:1);
 if(page!==1)return task();
 var memoryKey='lastlist.v3.'+key,storageKey='rex.home.lastlist.v3.'+encodeURIComponent(key);
 var saved=rexHomeMemory[memoryKey];
 try{if(!saved&&Widget.storage){var raw=Widget.storage.get(storageKey);saved=typeof raw==='string'?JSON.parse(raw):raw;}}catch(_){}
 var validSaved=saved&&Number.isFinite(saved.at)&&Date.now()>=saved.at&&Date.now()-saved.at<=86400000&&Array.isArray(saved.items)&&saved.items.length>0;
 function fallback(){return saved.items.map(function(item){
  return Object.assign({},item,{genreTitle:'缓存 · '+(item.genreTitle||''),description:'缓存内容，最近成功加载：'+new Date(saved.at).toISOString()+'\n'+(item.description||'')});
 });}
 var items;
 try{items=await task();}catch(error){if(validSaved)return fallback();throw error;}
 if(!Array.isArray(items))throw new Error('片单返回格式异常，请重试');
 if(!items.length){if(validSaved)return fallback();throw new Error('当前筛选暂无可用影片，请调整筛选后重试');}
 saved={at:Date.now(),items:items};rexHomeMemory[memoryKey]=saved;
 try{if(Widget.storage){
  Widget.storage.set(storageKey,JSON.stringify(saved));
  var indexRaw=Widget.storage.get('rex.home.lastlist.v3.index');var index=typeof indexRaw==='string'?JSON.parse(indexRaw):indexRaw;
  if(!Array.isArray(index))index=[];
  index=index.filter(function(k){return k!==storageKey;});index.push(storageKey);
  while(index.length>64){var oldest=index.shift();if(Widget.storage.remove)Widget.storage.remove(oldest);}
  Widget.storage.set('rex.home.lastlist.v3.index',JSON.stringify(index));
 }}catch(_){}
 return items;
}

async function rexHomeApi(path, params, ttl) {
  return rexHomeCached(path+':'+rexHomeStable(params),ttl || 900000,async function(){
    var data;
    try{data=await Widget.tmdb.get(path,{params:params});}
    catch(_){throw new Error('TMDB加载失败，请检查网络后刷新；暂无可用缓存时不会展示替代影片');}
    if (!data || typeof data!=='object' || data.success===false) throw new Error('TMDB数据暂不可用，请稍后刷新');
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
function rexHomeDisplayDate(value){
 var date=rexHomeDate(value);if(!date)return '';
 return Number(date.slice(0,4))+'年'+Number(date.slice(5,7))+'月'+Number(date.slice(8,10))+'日';
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
function rexHomeValidId(value) {
  return (typeof value==='number' || (typeof value==='string' && /^\d+$/.test(value))) &&
    Number.isSafeInteger(Number(value)) && Number(value)>0;
}
function rexHomeImage(value, absoluteOnly) {
  if (typeof value!=='string') return '';
  value=value.trim();
  if (/^https:\/\/[^\s/]+\/[^\s]*$/.test(value)) return value;
  return !absoluteOnly && /^\/[^\s/][^\s]*$/.test(value)?value:'';
}
function rexHomeNativeImage(value){
 var path=rexHomeImage(value,false);if(!path)return '';
 // Native TMDB items accept the original image path, allowing the player
 // to select its own image service and size.
 var match=path.match(/^https:\/\/image\.tmdb\.org\/t\/p\/(?:original|w[0-9]+)(\/[^?#]+)$/);
 return match?match[1]:path;
}
function rexHomeTitle(item, media) {
  var value=media==='movie'?item.title:item.name;
  return typeof value==='string'?value.trim():'';
}
function rexHomeAccept(rule,item) {
  if (!item || !rexHomeValidId(item.id) ||
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
  var ids=await Promise.all(names.map(async function(name){
    if(/^\d+$/.test(name))return name;
    var data=await rexHomeApi('/search/keyword',{query:name,page:1},86400000);
    var exact=(data.results||[]).find(function(x){return String(x.name||'').trim().toLowerCase()===name.toLowerCase();});
    if(!exact)throw new Error('未找到准确的TMDB标签：'+name+'；请使用关键词ID或更准确名称');
    return String(exact.id);
  }));
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

function rexHomeYearRange(value){
 var year=String(value==null?'':value).trim();if(!year)return null;
 var decade=/^(\d{3}0)s$/.exec(year),current=new Date().getFullYear();
 if(decade){var start=Number(decade[1]);if(start<1800||start>current)throw new Error('请选择有效年代');return {start:start,end:start+9,decade:true};}
 if(!/^\d{4}$/.test(year)||Number(year)<1800||Number(year)>current+2)throw new Error('请输入有效的四位年份，或选择年代');
 return {start:Number(year),end:Number(year),decade:false};
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
  var year=rexHomeYearRange(params.year);
  if(year&&!year.decade)q[rule.media==='movie'?'primary_release_year':'first_air_date_year']=year.start;
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
  if(year&&year.decade){
    var dateField=rule.media==='movie'?'primary_release_date':'first_air_date';
    var lower=String(year.start)+'-01-01',upper=String(year.end)+'-12-31';
    if(!q[dateField+'.gte']||q[dateField+'.gte']<lower)q[dateField+'.gte']=lower;
    if(!q[dateField+'.lte']||q[dateField+'.lte']>upper)q[dateField+'.lte']=upper;
    if(q[dateField+'.gte']>q[dateField+'.lte'])throw new Error('年代与时间范围没有交集，请改为不限时间');
  }
  var sort=params.sort || 'recent';
  if (['recent','score','popular','updated'].indexOf(sort)<0 || (rule.media==='movie' && sort==='updated')) throw new Error('请选择本分类支持的排序');
  q.sort_by=sort==='score'?'vote_average.desc':sort==='recent'?(rule.media==='movie'?'primary_release_date.desc':'first_air_date.desc'):'popularity.desc';
  var keywordResults=await Promise.all([rexHomeKeywords(params.tags),(rule.short||rule.excludeShort)?rexHomeKeywords('short film'):Promise.resolve('')]);
  var keywords=keywordResults[0];
  var keywordIds=keywords?keywords.split(','):[];
  if (rule.short || rule.excludeShort) {
    // A real TMDB keyword is required. Do not equate a short runtime with a
    // short-film classification or substitute an unfiltered movie list.
    var shortId=keywordResults[1];
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
async function rexHomeMapLimited(items,worker,limit) {
  limit=Number.isInteger(limit)&&limit>=1?Math.min(limit,8):4;
  var output=new Array(items.length), cursor=0;
  async function run(){
    while(cursor<items.length){var index=cursor++;output[index]=await worker(items[index]);}
  }
  await Promise.all(Array.from({length:Math.min(limit,items.length)},run));
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
function rexHomeFilterRaw(rule,params,combined){
  var seen=new Set(),yearFilter=rexHomeYearRange(params.year);
  return combined.filter(function(item){
    if (!rexHomeAccept(rule,item) || seen.has(String(item.id))) return false;
    if (params.genre && rexHomeIds(item).indexOf(Number(params.genre))<0) return false;
    var firstDate=rexHomeDate(rule.media==='movie'?item.release_date:item.first_air_date);
    if (!firstDate || firstDate>rexHomeToday()) return false;
    if(yearFilter){var firstYear=Number(firstDate.slice(0,4));if(firstYear<yearFilter.start||firstYear>yearFilter.end)return false;}
    var rating=Number(item.vote_average);
    if (Number(params.rating || 0)>0 && (!Number.isFinite(rating) || rating<Number(params.rating) || (item.vote_count!=null && Number(item.vote_count)===0))) return false;
    if (!rexHomeImage(item.poster_path,false) || !rexHomeTitle(item,rule.media)) return false;
    seen.add(String(item.id)); return true;
  });
}
async function rexHomeBuildItems(rule,params,query,combined) {
  var raw=rexHomeFilterRaw(rule,params,combined);
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
    if (detail && (!rexHomeValidId(detail.id) || Number(detail.id)!==Number(item.id))) return null;
    var title=rexHomeTitle(item,rule.media);
    var poster=rexHomeImage(item.poster_path,false);
    var backdrop=rexHomeImage(item.backdrop_path,false) || (detail && rexHomeImage(detail.backdrop_path,false)) || '';
    if (!title || !poster) return null;
    var premiere=rexHomeDate(rule.media==='movie'?item.release_date:item.first_air_date);
    var last=detail && detail.last_episode_to_air;
    var updated=last && rexHomeDate(last.air_date);
    if (updated && updated>rexHomeToday()) updated='';
    var displayDate=dateMode==='updated' && updated?updated:premiere;
    var dateText=rule.media==='movie'?'上映 '+(rexHomeDisplayDate(premiere) || '未公布'):
      dateMode==='updated' && updated?'更新 '+rexHomeDisplayDate(updated):
      '首播 '+(rexHomeDisplayDate(premiere) || '未公布');
    if (updated && last.season_number!=null && last.episode_number!=null) dateText+=' · S'+last.season_number+'E'+last.episode_number;
    var canonicalId=rule.media+'.'+Number(item.id);
    sortDates[canonicalId]=updated || premiere;
    // Rex uses a numeric TMDB ID plus mediaType for native resource matching.
    var output={id:Number(item.id),type:'tmdb',mediaType:rule.media,
      title:title,posterPath:rexHomeNativeImage(poster),backdropPath:rexHomeNativeImage(backdrop),releaseDate:displayDate,
      genreTitle:dateText,
      description:dateText+'\n'+(dateMode==='updated'&&!updated?'更新日期暂缺，以上为首播日期。\n':'')+(rule.media==='tv'?'剧集首播：'+(rexHomeDisplayDate(premiere) || '未公布')+'\n':'')+(item.overview || (detail && detail.overview) || '')};
    var score=item.vote_average==null?NaN:Number(item.vote_average);
    if (Number.isFinite(score) && score>=0 && score<=10 && (item.vote_count==null || Number(item.vote_count)!==0)) output.rating=score;
    return output;
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

// Category loaders and independent selection modules are declared in WidgetMetadata.
// All children are internal routes, never additional homepage modules.
function rexHomeSelectedYear(params){
 var value=String(params.year==null?'':params.year).trim();
 if(value!=='custom')return value;
 var custom=String(params.customYear||'').trim();
 if(!/^\d{4}$/.test(custom))throw new Error('请填写四位自定义年份，或选择不限年份');
 return custom;
}
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
  if(params.year!=null)clean.year=rexHomeSelectedYear(params);
  if (rule.media==='movie') {
    clean.dateMode='premiere';
    if (clean.sort==='updated') clean.sort='recent';
  }
  if (rule.domestic) clean.region='CN';
  return {rule:rule,params:clean};
}
async function rexHomeMain(parentId, params) {
  var route=rexHomeSelect(parentId,params || {});
  return rexHomeKeepList(parentId+':'+route.rule.id+':'+rexHomeStable(route.params),route.params,function(){return rexHomeLoad(route.rule,route.params);});
}
async function loadMovieHome(params){return rexHomeMain('movieHome',params);}
async function loadSeriesHome(params){return rexHomeMain('seriesHome',params);}
async function loadVarietyHome(params){return rexHomeMain('varietyHome',params);}
async function loadAnimeHome(params){return rexHomeMain('animeHome',params);}

var RexHomeNetflixFeeds={
 englishMovies:{path:'',category:'ENGLISH_MOVIES',title:'英语电影',media:'movie'},
 otherMovies:{path:'films-non-english',category:'NONENGLISH_MOVIES',title:'非英语电影',media:'movie'},
 englishSeries:{path:'tv',category:'ENGLISH_SERIES',title:'英语剧集',media:'tv'},
 otherSeries:{path:'tv-non-english',category:'NONENGLISH_SERIES',title:'非英语剧集',media:'tv'}
};
function rexHomeNetflixParse(html,category){
 // Decode the JSON string literal as data; never execute page scripts.
 var match=String(html).match(/netflix\.reactContext\.models\.graphql\s*=\s*JSON\.parse\('((?:\\.|[^'\\])*)'\)/);
 if(!match)throw new Error('Netflix榜单结构已变化，暂未加载');
 var decoded=match[1].replace(/\\(x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|.)/g,function(_,c){
  if(c[0]==='x'||c[0]==='u')return String.fromCharCode(parseInt(c.slice(1),16));
  var escapes={n:'\n',r:'\r',t:'\t',b:'\b',f:'\f',v:'\v','0':'\0'};
  return Object.prototype.hasOwnProperty.call(escapes,c)?escapes[c]:c;
 });
 var data;try{data=JSON.parse(decoded).data;}catch(_){throw new Error('Netflix榜单数据格式异常');}
 if(!data||typeof data!=='object')throw new Error('Netflix榜单为空');
 var rows=Object.keys(data).map(function(k){return data[k];}).filter(function(x){
  return x&&x.__typename==='PulseTop10ItemEntity'&&x.top10&&x.top10.category===category&&x.top10Video;
 });
 var week=rows.map(function(x){return x.top10.weekEndDate;}).filter(function(x){return /^\d{4}-\d{2}-\d{2}$/.test(x);}).sort().pop();
 var seen=new Set();
 return rows.filter(function(x){
  var t=x.top10,id=t.videoId,rank=Number(t.weeklyRank);
  if(t.weekEndDate!==week||!rexHomeValidId(id)||!Number.isInteger(rank)||rank<1||rank>10||seen.has(id))return false;
  seen.add(id);return true;
 }).sort(function(a,b){return a.top10.weeklyRank-b.top10.weeklyRank;});
}
function rexHomeNetflixTitle(value){return String(value||'').trim().toLowerCase().replace(/\s+/g,' ');}
async function rexHomeNetflixMatch(row,source){
 var video=row.top10Video,parent=video.parentShow;
 var title=source.media==='tv'&&parent&&parent.title?parent.title:video.title;
 var year=Number(source.media==='tv'&&parent&&parent.releaseYear?parent.releaseYear:video.releaseYear);
 if(!title||!Number.isInteger(year)||year<1888||year>Number(rexHomeToday().slice(0,4)))return null;
 var result=await rexHomeApi('/search/'+source.media,{query:title,language:'zh-CN',include_adult:false,page:1},86400000);
 // Incomplete first-page searches cannot establish uniqueness.
 if(Number(result.total_pages)>1)return null;
 var expected=rexHomeNetflixTitle(title);
 var season=Number(video.number),seasonLookup=source.media==='tv'&&parent&&parent.title&&!parent.releaseYear&&Number.isInteger(season)&&season>0;
 var candidates=(result.results||[]).filter(function(x){
  if(!x||!rexHomeValidId(x.id)||x.adult===true)return false;
  var names=source.media==='movie'?[x.title,x.original_title]:[x.name,x.original_name];
  return names.some(function(n){return rexHomeNetflixTitle(n)===expected;})&&Array.isArray(x.genre_ids)&&x.genre_ids.indexOf(99)<0&&rexHomeImage(x.poster_path);
 });
 var checked=await rexHomeMapLimited(candidates,async function(x){
  var date=rexHomeDate(source.media==='movie'?x.release_date:x.first_air_date);
  if(!date||date>rexHomeToday())return null;
  if(date.slice(0,4)===String(year))return x;
  if(!seasonLookup)return null;
  try{
   var detail=await rexHomeApi('/tv/'+x.id,{language:'zh-CN'},86400000);
   if(Number(detail.id)!==Number(x.id)||![detail.name,detail.original_name].some(function(n){return rexHomeNetflixTitle(n)===expected;}))return null;
   var seasons=(detail.seasons||[]).filter(function(s){return s&&Number(s.season_number)===season;});
   if(seasons.length!==1)return null;
   var air=rexHomeDate(seasons[0].air_date);return air&&air<=rexHomeToday()&&air.slice(0,4)===String(year)?x:null;
  }catch(_){return null;}
 });
 candidates=checked.filter(Boolean);
 var unique=new Map();candidates.forEach(function(x){unique.set(String(x.id),x);});
 if(unique.size!==1)return null;
 var x=Array.from(unique.values())[0],rank=row.top10.weeklyRank,week=row.top10.weekEndDate;
 var label='Netflix · '+source.title+' · 第'+rank+'名 · 周截止 '+week;
 var out={id:Number(x.id),type:'tmdb',mediaType:source.media,title:rexHomeTitle(x,source.media),
  posterPath:rexHomeNativeImage(x.poster_path),backdropPath:rexHomeNativeImage(x.backdrop_path)||undefined,
  releaseDate:source.media==='movie'?x.release_date:x.first_air_date,
  genreTitle:label,description:label+'\n'+(source.media==='movie'?'上映：':'首播：')+rexHomeDisplayDate(source.media==='movie'?x.release_date:x.first_air_date)+'\n'+(x.overview||video.shortSynopsis||'')};
 if(Number(x.vote_count)>0&&Number.isFinite(Number(x.vote_average))&&Number(x.vote_average)>=0&&Number(x.vote_average)<=10)out.rating=Number(x.vote_average);
 return out;
}
function rexHomeNetflixFeed(params){
 if(params.format==null&&params.language==null)return String(params.feed||'englishMovies');
 var format=String(params.format||'movie'),language=String(params.language||'english');
 if(['movie','tv'].indexOf(format)<0||['english','other'].indexOf(language)<0)throw new Error('请选择有效的周榜类型和语言');
 return (language==='english'?'english':'other')+(format==='movie'?'Movies':'Series');
}
async function loadNetflixWeekly(params){
 params=params||{};var feed=rexHomeNetflixFeed(params);
 if(!Object.prototype.hasOwnProperty.call(RexHomeNetflixFeeds,feed))throw new Error('请选择有效的Netflix榜单');
 var page=Number(params.page==null||params.page===''?1:params.page);
 if(!Number.isInteger(page)||page<1)throw new Error('页码必须为正整数');
 if(page>1)return [];
 var source=RexHomeNetflixFeeds[feed],view=rexHomeView(params);
 var items=await rexHomeKeepList('netflix:v23:'+feed+':'+view,params,function(){return rexHomeCached('netflix.weekly.v7.'+feed+':'+view,3600000,async function(){
  var response;
  try{response=await Widget.http.get('https://www.netflix.com/tudum/top10/'+source.path,{headers:{'User-Agent':'Mozilla/5.0'}});}
  catch(_){throw new Error('Netflix周榜加载失败，请检查网络后刷新');}
  var rows=rexHomeNetflixParse(response&&response.data,source.category);
  if(!rows.length)throw new Error('Netflix暂未返回该周榜单');
  var failures=0;
  var match=async function(row){try{return await rexHomeNetflixMatch(row,source);}catch(_){failures++;return null;}};
  var items=await rexHomeMapLimited(rows,match);
  var seen=new Set(),posters=new Set();items=items.filter(function(x){if(!x||seen.has(x.id)||posters.has(rexHomeNativeImage(x.posterPath)))return false;seen.add(x.id);posters.add(rexHomeNativeImage(x.posterPath));return true;});
  if(!items.length&&failures)throw new Error('Netflix周榜影片身份核对失败，请检查网络后刷新；未替换成其他影片');
  if(!items.length)throw new Error('本周影片未找到唯一的同名同年匹配，未替换成其他影片');
  return items;
 });});
 return view==='home'?rexHomeNetflixPreview(items,source.media):items;
}

function rexHomeView(params){
 var value=String(params.view||'all');if(['all','home'].indexOf(value)<0)throw new Error('请选择有效的显示范围');return value;
}
function rexHomeDefaults(id){
 var module=WidgetMetadata.modules.find(function(m){return m.id===id;});var out={};
 module.params.forEach(function(p){if(p.value!=null)out[p.name]=p.value;});return out;
}
function rexHomeExcludeRows(items,above){
 var ids=new Set(),posters=new Set();above.forEach(function(x){ids.add(x.mediaType+'.'+x.id);if(x.posterPath)posters.add(rexHomeNativeImage(x.posterPath));});
 return items.filter(function(x){return !ids.has(x.mediaType+'.'+x.id)&&!posters.has(rexHomeNativeImage(x.posterPath));});
}
function rexHomeSavedRows(key){
 var saved=rexHomeMemory['lastlist.v3.'+key];
 try{if(!saved&&Widget.storage){var raw=Widget.storage.get('rex.home.lastlist.v3.'+encodeURIComponent(key));saved=typeof raw==='string'?JSON.parse(raw):raw;}}catch(_){}
 return saved&&saved.at<=Date.now()&&Date.now()-saved.at<=86400000&&Array.isArray(saved.items)?saved.items:[];
}
function rexHomePreviewKey(params){
 var merged=Object.assign({},rexHomeDefaults('tmdbPicks'),params||{});merged.view='home';
 Object.keys(merged).forEach(function(k){merged[k]=String(merged[k]);});
 return 'preview.v22.'+rexHomeStable(merged);
}
async function rexHomeSavePreview(params,shown){
 var key=rexHomePreviewKey(params);
 // Replace the displayed preview snapshot on every successful render.
 delete rexHomeMemory[key];
 try{if(Widget.storage)Widget.storage.set('rex.home.v2.'+encodeURIComponent(key),'null');}catch(_){}
 return rexHomeCached(key,900000,function(){return shown;});
}
async function rexHomePrimaryPreview(media){
 var parents=media==='movie'?['movieHome']:['seriesHome','varietyHome','animeHome'];
 var rows=parents.map(function(id){var route=rexHomeSelect(id,rexHomeDefaults(id));
  return rexHomeSavedRows(id+':'+route.rule.id+':'+rexHomeStable(route.params)).slice(0,30);});
 return [].concat.apply([],rows);
}
async function rexHomePicksPreview(items,media){
 var above=await rexHomePrimaryPreview(media);var out=rexHomeExcludeRows(items,above);
 if(!out.length)throw new Error('本栏影片已在上方展示，请切换完整片单查看');return out;
}
async function rexHomeNetflixPreview(items,media){
 var above=await rexHomePrimaryPreview(media);
 var defaults=rexHomeDefaults('tmdbPicks');defaults.view='home';
 var selected=RexHomeTmdbPicks[defaults.feed],saved=rexHomeCacheRead(rexHomePreviewKey(defaults));
 if(selected&&selected.media===media&&saved&&Array.isArray(saved.data))above=above.concat(saved.data.slice(0,6));
 var bgmSaved=rexHomeCacheRead(rexHomeBangumiPreviewKey(rexHomeDefaults('bangumiPicks')));
 if(bgmSaved&&Array.isArray(bgmSaved.data))above=above.concat(bgmSaved.data.slice(0,6));
 var out=rexHomeExcludeRows(items,above);
 if(!out.length)throw new Error('本周榜单影片已在上方展示，请切换完整片单查看');return out;
}

function rexHomeBangumiPreviewKey(params){
 var merged=Object.assign({},rexHomeDefaults('bangumiPicks'),params||{});merged.view='home';merged.page='1';
 Object.keys(merged).forEach(function(k){merged[k]=String(merged[k]);});
 return 'bangumi.preview.v37.'+rexHomeStable(merged);
}
async function rexHomeBangumiPreview(items,params,media){
 var above=await rexHomePrimaryPreview(media),defaults=rexHomeDefaults('tmdbPicks');defaults.view='home';
 var selected=RexHomeTmdbPicks[defaults.feed],saved=rexHomeCacheRead(rexHomePreviewKey(defaults));
 if(selected&&selected.media===media&&saved&&Array.isArray(saved.data))above=above.concat(saved.data.slice(0,6));
 var shown=rexHomeExcludeRows(items,above);
 if(!shown.length)throw new Error('Bangumi影片已在上方展示，请切换完整片单查看');
 var key=rexHomeBangumiPreviewKey(params);delete rexHomeMemory[key];
 try{if(Widget.storage)Widget.storage.set('rex.home.v2.'+encodeURIComponent(key),'null');}catch(_){}
 await rexHomeCached(key,900000,function(){return shown.slice(0,6);});
 return shown;
}

// Feature ideas reviewed in MakkaPakka518/FW (xilie.js). Independent Rex implementation:
// resolve exact TMDB names; never take the first fuzzy search result or relabel a collection.
var RexHomeSeriesOptions={
 wanderingEarth:{title:'流浪地球',query:'The Wandering Earth',name:'The Wandering Earth Collection'},
 detectiveChinatown:{title:'唐人街探案',query:'Detective Chinatown',name:'Detective Chinatown Collection'},
 lordOfRings:{title:'指环王',query:'The Lord of the Rings',name:'The Lord of the Rings Collection'},
 harryPotter:{title:'哈利·波特',query:'Harry Potter',name:'Harry Potter Collection'},
 missionImpossible:{title:'碟中谍',query:'Mission: Impossible',name:'Mission: Impossible Collection'},
 matrix:{title:'黑客帝国',query:'The Matrix',name:'The Matrix Collection'},
 avengers:{title:'复仇者联盟',query:'The Avengers',name:'The Avengers Collection'},
 toyStory:{title:'玩具总动员',query:'Toy Story',name:'Toy Story Collection'}
};
var RexHomeThemeOptions={
 timeLoop:{title:'时空循环',keyword:'time loop'},
 cyberpunk:{title:'赛博朋克',keyword:'cyberpunk'},
 whodunit:{title:'密室推理',keyword:'whodunit'},
 spaceOpera:{title:'太空歌剧',keyword:'space opera'}
};
async function rexHomeLoadSeriesCollection(params,page){
 var key=String(params.series||'lordOfRings');
 if(!Object.prototype.hasOwnProperty.call(RexHomeSeriesOptions,key))throw new Error('请选择有效的电影系列');
 var selected=RexHomeSeriesOptions[key],order=String(params.seriesSort||'release');
 if(['release','score'].indexOf(order)<0)throw new Error('请选择上映顺序或评分排序');
 var size=Number(params.pageSize==null||params.pageSize===''?60:params.pageSize);
 if([20,40,60].indexOf(size)<0)throw new Error('请选择20、40或60条每页片量');
 var all=await rexHomeCached('series.collection.v1.'+key,86400000,async function(){
  var search=await rexHomeApi('/search/collection',{query:selected.query,language:'en-US',page:1},86400000);
  if(!Array.isArray(search.results)||Number(search.total_pages)>1)throw new Error('系列查询结果不完整，请稍后重试');
  var ids=new Set();search.results.forEach(function(x){if(x&&rexHomeValidId(x.id)&&rexHomeNetflixTitle(x.name)===rexHomeNetflixTitle(selected.name))ids.add(Number(x.id));});
  if(ids.size!==1)throw new Error('未找到唯一的官方系列合集：'+selected.title+'；未替换为其他系列');
  var id=Array.from(ids)[0],collection=await rexHomeApi('/collection/'+id,{language:'zh-CN'},86400000);
  if(Number(collection.id)!==id||!Array.isArray(collection.parts))throw new Error('系列合集身份或数据格式不一致');
  // Most collection parts already contain genres. Missing genres are checked with
  // same-ID movie details; failures remove only that part and do not invent a genre.
  var parts=await rexHomeMapLimited(collection.parts,async function(part){
   if(!part||!rexHomeValidId(part.id)||part.adult===true||(part.media_type&&part.media_type!=='movie'))return null;
   if(Array.isArray(part.genre_ids)&&part.genre_ids.length)return part;
   try{
    var detail=await rexHomeApi('/movie/'+part.id,{language:'zh-CN'},86400000);
    if(Number(detail.id)!==Number(part.id)||detail.adult===true||!Array.isArray(detail.genres))return null;
    return Object.assign({},detail,{media_type:'movie',genre_ids:detail.genres.map(function(g){return g.id;})});
   }catch(_){return null;}
  });
  return rexHomeBuildItems({media:'movie',exclude:[99]},{dateMode:'premiere',loadMode:'fast'},{sort:'source'},parts.filter(Boolean));
 });
 // Keep cache ordering immutable so two callers can choose independent sorts.
 var arranged=all.slice().sort(function(a,b){return a.releaseDate.localeCompare(b.releaseDate)||Number(a.id)-Number(b.id);});
 var positions=new Map();arranged.forEach(function(item,i){positions.set(item.id,i+1);});
 if(order==='score')arranged.sort(function(a,b){return (b.rating==null?-1:b.rating)-(a.rating==null?-1:a.rating)||a.releaseDate.localeCompare(b.releaseDate);});
 return arranged.slice((page-1)*size,page*size).map(function(item){
  var label=selected.title+' · 上映顺序第'+positions.get(item.id)+'部';
  return Object.assign({},item,{genreTitle:label+' · '+item.genreTitle,description:label+'\n'+item.description});
 });
}
async function rexHomeLoadTheme(params,page){
 var key=String(params.theme||'timeLoop');
 if(!Object.prototype.hasOwnProperty.call(RexHomeThemeOptions,key))throw new Error('请选择有效的电影主题');
 var selected=RexHomeThemeOptions[key],sort=String(params.themeSort||'popular');
 if(['popular','score','recent'].indexOf(sort)<0)throw new Error('请选择有效的主题排序');
 // The existing exact-keyword resolver is used instead of copied keyword IDs.
 var keywords=await rexHomeApi('/search/keyword',{query:selected.keyword,page:1},86400000);
 if(!Array.isArray(keywords.results)||Number(keywords.total_pages)>1)throw new Error('主题关键词查询结果不完整');
 var ids=new Set();keywords.results.forEach(function(x){if(x&&rexHomeValidId(x.id)&&rexHomeNetflixTitle(x.name)===selected.keyword)ids.add(Number(x.id));});
 if(ids.size!==1)throw new Error('未找到唯一的主题关键词：'+selected.title+'；未改用其他主题');
 var items=await rexHomeLoad({media:'movie',exclude:[99]},
  {page:page,pageSize:params.pageSize,range:'all',sort:sort,tags:String(Array.from(ids)[0]),dateMode:'premiere',loadMode:'fast'});
 return items.map(function(item){return Object.assign({},item,{genreTitle:selected.title+' · '+item.genreTitle,description:'主题：'+selected.title+'\n'+item.description});});
}

var RexHomeTmdbPicks = {
  collections:{title:'系列电影',media:'movie',kind:'collection'},
  themes:{title:'主题探索',media:'movie',kind:'theme'},
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
  var source=RexHomeTmdbPicks[feed],view=rexHomeView(params);
  var page=Number(params.page == null || params.page === ''?1:params.page);
  if (!Number.isInteger(page) || page<1 || page>500) throw new Error('页码必须为1至500的整数');
  var result=await rexHomeKeepList('tmdbPicks:v23:'+rexHomeStable(params),params,async function(){
  var items;
  if(source.kind==='collection')items=await rexHomeLoadSeriesCollection(params,page);
  else if(source.kind==='theme')items=await rexHomeLoadTheme(params,page);
  else {
  var size=Number(params.pageSize==null||params.pageSize===''?60:params.pageSize);
  if([20,40,60].indexOf(size)<0)throw new Error('请选择20、40或60条每页片量');
  var data=await rexHomeFetchPages(source.path,{language:'zh-CN',page:page},size);
  var rule={media:source.media,exclude:source.media==='tv'?[99,10763]:[99]};
  items=await rexHomeBuildItems(rule,{dateMode:'premiere',loadMode:'fast'},{sort:'source'},data);
  }
  return items.map(function(item){
    item.genreTitle='TMDB · '+source.title+' · '+item.genreTitle;
    item.description='TMDB · '+source.title+'\n'+item.description;
    return item;
  });
  });
  if(view!=='home')return result;
  var shown=await rexHomePicksPreview(result,source.media);
  await rexHomeSavePreview(params,shown.slice(0,6));
  return shown;
}

// Studio identity is resolved and checked by exact TMDB company name, never by first search hit.
var RexHomeStudios={
 warner:{title:'华纳兄弟',query:'Warner Bros. Pictures',names:['Warner Bros. Pictures']},
 universal:{title:'环球影业',query:'Universal Pictures',names:['Universal Pictures']},
 paramount:{title:'派拉蒙',query:'Paramount Pictures',names:['Paramount Pictures']},
 columbia:{title:'哥伦比亚',query:'Columbia Pictures',names:['Columbia Pictures']},
 disney:{title:'迪士尼',query:'Walt Disney Pictures',names:['Walt Disney Pictures']},
 century:{title:'二十世纪影业',query:'20th Century Studios',names:['20th Century Studios','20th Century Fox']},
 chinaFilm:{title:'中国电影集团',query:'China Film Group Corporation',names:['China Film Group Corporation']},
 enlight:{title:'光线影业',query:'Beijing Enlight Pictures',names:['Beijing Enlight Pictures']}
};
function rexHomeCompanyName(value){return String(value||'').trim().toLowerCase().replace(/\s+/g,' ');}
async function rexHomeResolveStudio(key){
 if(!Object.prototype.hasOwnProperty.call(RexHomeStudios,key))throw new Error('请选择有效的电影出品公司');
 return rexHomeCached('studio.identity.v24.'+key,86400000,async function(){
  var studio=RexHomeStudios[key],names=studio.names.map(rexHomeCompanyName);
  var data=await rexHomeApi('/search/company',{query:studio.query,page:1},86400000);
  if(!Array.isArray(data.results)||Number(data.total_pages)>1)throw new Error('出品公司搜索不完整，暂不执行筛选');
  var ids=Array.from(new Set(data.results.filter(function(x){return x&&rexHomeValidId(x.id)&&names.indexOf(rexHomeCompanyName(x.name))>=0;}).map(function(x){return Number(x.id);}))); 
  if(ids.length!==1)throw new Error('未找到唯一的同名出品公司，请切换公司');
  var detail=await rexHomeApi('/company/'+ids[0],{},86400000);
  if(Number(detail.id)!==ids[0]||names.indexOf(rexHomeCompanyName(detail.name))<0)throw new Error('出品公司身份不一致，未替换成其他公司');
  return ids[0];
 });
}
function rexHomeExtraParams(params){
 var clean={};['pageSize','region','year','rating','range','sort','page'].forEach(function(key){if(params[key]!=null)clean[key]=params[key];});
 if(params.year!=null)clean.year=rexHomeSelectedYear(params);
 clean.dateMode='premiere';clean.loadMode='fast';return clean;
}
async function loadStudioHome(params){
 params=params||{};var key=String(params.company||'warner');
 var clean=rexHomeExtraParams(params),view=rexHomeView(params);
 var company=await rexHomeResolveStudio(key);
 var result=await rexHomeKeepList('studio.v24:'+key+':'+rexHomeStable(clean),clean,async function(){
  var rule={media:'movie',exclude:[16,99]},query=await rexHomeQuery(rule,clean);query.params.with_companies=String(company);
  var raw=await rexHomeFetchPages('/discover/movie',query.params,clean.pageSize);
  var items=await rexHomeBuildItems(rule,clean,query,raw);
  return items.map(function(item){item.genreTitle=RexHomeStudios[key].title+' · '+item.genreTitle;return item;});
 });
 if(view!=='home'||Number(clean.page||1)!==1)return result;
 var above=await rexHomePrimaryPreview('movie'),fresh=rexHomeExcludeRows(result,above);
 var freshIds=new Set(fresh.map(function(item){return item.id;}));
 return fresh.concat(result.filter(function(item){return !freshIds.has(item.id);}));
}
async function loadDocumentaryHome(params){
 params=params||{};var scope=String(params.scope||'domestic'),format=String(params.format||'movie');
 if(['domestic','foreign'].indexOf(scope)<0||['movie','tv'].indexOf(format)<0)throw new Error('请选择有效的纪录片地区与内容形式');
 var regionKey=scope==='domestic'?'regionDomestic':'regionForeign';
 var region=String(params[regionKey]!=null?params[regionKey]:(params.region||'')),countries=scope==='domestic'?RexHomeDomesticCountries:RexHomeForeignCountries;
 if(region&&countries.indexOf(region)<0)throw new Error('具体地区与国内／国外分类不一致，请重新选择');
 var clean=rexHomeExtraParams(params);delete clean.region;
 var selected=region?[region]:countries;
 return rexHomeKeepList('docs.v24:'+scope+':'+format+':'+selected.join('|')+':'+rexHomeStable(clean),clean,async function(){
  var rule={media:format,genres:[99]},query=await rexHomeQuery(rule,clean);query.params.with_origin_country=selected.join('|');
  var raw=await rexHomeFetchPages('/discover/'+format,query.params,clean.pageSize);
  // TMDB movie discover may omit origin_country. Verify missing country data using the SAME ID.
  var candidates=rexHomeFilterRaw(rule,clean,raw);
  var verified=await rexHomeMapLimited(candidates,async function(item){
   if(!item||!rexHomeValidId(item.id)||!rexHomeAccept(rule,item)||!rexHomeImage(item.poster_path,false)||!rexHomeTitle(item,format))return null;
   var date=rexHomeDate(format==='movie'?item.release_date:item.first_air_date);if(!date||date>rexHomeToday())return null;
   var origins=Array.isArray(item.origin_country)?item.origin_country:[];
   if(!origins.length){
    try{var detail=await rexHomeApi('/'+format+'/'+item.id,{language:'zh-CN'},86400000);
     if(Number(detail.id)!==Number(item.id))return null;
     origins=Array.isArray(detail.origin_country)?detail.origin_country:[];
    }catch(_){return null;}
   }
   if(!origins.some(function(c){return selected.indexOf(c)>=0;}))return null;
   if(scope==='foreign'&&origins.some(function(c){return RexHomeDomesticCountries.indexOf(c)>=0;}))return null;
   return item;
  },8);
  var items=await rexHomeBuildItems(rule,clean,query,verified.filter(Boolean));
  return items.map(function(item){item.genreTitle=(scope==='domestic'?'国内':'国外')+(format==='movie'?'纪录电影':'纪录剧集')+' · '+item.genreTitle;return item;});
 });
}

// Official Bangumi v0 API: https://github.com/bangumi/api/blob/master/open-api/v0.yaml
// Never treat a Bangumi numeric ID as a TMDB ID.
function rexHomeBangumiName(value){return typeof value==='string'?value.trim().toLowerCase().replace(/\s+/g,' '):'';}
function rexHomeBangumiQuery(params,source){
 var category=String(params.category||'animeSeries');if(['animeSeries','animeMovies'].indexOf(category)<0)throw new Error('请选择有效的动画类别');
 var page=Number(params.page==null||params.page===''?1:params.page),size=Number(params.bgmPageSize||20),rating=Number(params.bgmRating||0);
 if(!Number.isInteger(page)||page<1||page>500)throw new Error('页码必须为1至500的整数');
 if([20,40,60].indexOf(size)<0)throw new Error('请选择有效的Bangumi片量');
 if(!Number.isFinite(rating)||rating<0||rating>10)throw new Error('Bangumi最低评分必须为0至10');
 var region=String(params.bgmRegion||'');if(['','CN','JP'].indexOf(region)<0)throw new Error('请选择有效的Bangumi地区');
 var selectedYear=rexHomeSelectedYear(params),year=rexHomeYearRange(selectedYear),end=rexHomeToday();
 var filter={type:[2],air_date:['<='+end],nsfw:false};
 if(year){var last=year.end+'-12-31';filter.air_date=['>='+year.start+'-01-01','<='+(last<end?last:end)];}
 if(rating>0)filter.rating=['>='+rating];
 if(source==='bangumiRank')filter.rank=['>0'];
 if(region)filter.meta_tags=[region==='CN'?'中国':'日本'];
 return {category:category,media:category==='animeMovies'?'movie':'tv',page:page,size:size,rating:rating,region:region,year:year,
  body:{keyword:'',sort:source==='bangumiRank'?'rank':'heat',filter:filter},source:source};
}
async function rexHomeBangumiFetch(query){
 var offset=(query.page-1)*query.size;
 var parts=await Promise.all(Array.from({length:query.size/20},function(_,i){
  var start=offset+i*20,key='bangumi.api.v36.'+start+':'+rexHomeStable(query.body);
  return rexHomeCached(key,900000,async function(){
   if(!Widget.http||typeof Widget.http.post!=='function')throw new Error('当前Rex环境不支持Bangumi所需的POST请求');
   var response;
   try{response=await Widget.http.post('https://api.bgm.tv/v0/search/subjects?limit=20&offset='+start,query.body,
    {headers:{'User-Agent':'rex-home/2026.10.18.39 (https://github.com/kenxtbecdi7690/rex-home)','Content-Type':'application/json','Accept':'application/json'}});}
   catch(_){throw new Error('Bangumi加载失败，请检查网络后刷新');}
   if(response&&Number(response.status)>=400)throw new Error('Bangumi暂时无法读取，请稍后重试');
   var data=response&&response.data;if(typeof data==='string'){try{data=JSON.parse(data);}catch(_){throw new Error('Bangumi数据格式异常');}}
   if(!data||!Array.isArray(data.data))throw new Error('Bangumi榜单格式异常');
   return data;
  });
 }));
 return [].concat.apply([],parts.map(function(x){return x.data;}));
}
function rexHomeBangumiRows(raw,query){
 var seen=new Set();return raw.filter(function(x){
  if(!x||!rexHomeValidId(x.id)||seen.has(Number(x.id))||x.type!==2||x.nsfw===true)return false;
  var formats=query.media==='movie'?['剧场版']:['TV','WEB','OVA','OAD'];if(formats.indexOf(x.platform)<0)return false;
  var date=rexHomeDate(x.date);if(!date||date>rexHomeToday())return false;
  var year=Number(date.slice(0,4));if(query.year&&(year<query.year.start||year>query.year.end))return false;
  if(!rexHomeBangumiName(x.name)&&!rexHomeBangumiName(x.name_cn))return false;
  var tags=Array.isArray(x.meta_tags)?x.meta_tags:[];if(query.region&&tags.indexOf(query.region==='CN'?'中国':'日本')<0)return false;
  var rating=x.rating||{},score=Number(rating.score);if(query.rating>0&&(!Number.isFinite(score)||score<query.rating||Number(rating.total)<=0))return false;
  if(query.source==='bangumiRank'&&(!Number.isInteger(Number(rating.rank))||Number(rating.rank)<1))return false;
  seen.add(Number(x.id));return true;
 });
}
async function rexHomeBangumiMatch(row,media){
 var key='bangumi.match.v36.'+media+':'+row.id+':'+row.date+':'+rexHomeBangumiName(row.name)+':'+rexHomeBangumiName(row.name_cn);
 return rexHomeCached(key,900000,async function(){
  var names=Array.from(new Set([row.name_cn,row.name].filter(function(x){return typeof x==='string'&&x.trim();}).map(function(x){return x.trim();})));
  var expected=names.map(rexHomeBangumiName),year=row.date.slice(0,4),found=new Map();
  // Search both official names to establish uniqueness; no stripped-season or first-result match.
  var responses=await rexHomeMapLimited(names,async function(name){return rexHomeApi('/search/'+media,{query:name,language:'zh-CN',include_adult:false,page:1},86400000);});
  for(var response of responses){
   if(!response||!Array.isArray(response.results)||Number(response.total_pages)>1)return null;
   for(var item of response.results){
    if(!item||!rexHomeValidId(item.id)||item.adult===true||(item.media_type&&item.media_type!==media))continue;
    var genres=rexHomeIds(item);if(genres.indexOf(16)<0||genres.indexOf(99)>=0||!rexHomeNativeImage(item.poster_path))continue;
    var date=rexHomeDate(media==='movie'?item.release_date:item.first_air_date);if(!date||date>rexHomeToday()||date.slice(0,4)!==year)continue;
    var titles=media==='movie'?[item.title,item.original_title]:[item.name,item.original_name];
    if(!titles.some(function(name){return expected.indexOf(rexHomeBangumiName(name))>=0;}))continue;
    if(!rexHomeTitle(item,media))continue;
    found.set(Number(item.id),item);
   }
  }
  return found.size===1?Array.from(found.values())[0]:null;
 });
}
async function rexHomeLoadBangumi(params,source){
 var query=rexHomeBangumiQuery(params,source),cacheParams={page:query.page};
 var listKey='bangumi.list.v36.'+query.category+':'+query.size+':'+rexHomeStable(query.body);
 return rexHomeKeepList(listKey,cacheParams,async function(){
  var rows=rexHomeBangumiRows(await rexHomeBangumiFetch(query),query);
  var failures=0;
  var items=await rexHomeMapLimited(rows,async function(row){
   var item;try{item=await rexHomeBangumiMatch(row,query.media);}catch(_){failures++;return null;}if(!item)return null;
   var date=rexHomeDate(query.media==='movie'?item.release_date:item.first_air_date),rating=row.rating||{},score=Number(rating.score);
   var label='Bangumi · '+(source==='bangumiRank'?'排名 #'+rating.rank:'累计人气');
   if(Number.isFinite(score)&&score>=0&&score<=10&&Number(rating.total)>0)label+=' · BGM '+score.toFixed(1);
   var out={id:Number(item.id),type:'tmdb',mediaType:query.media,title:rexHomeTitle(item,query.media),posterPath:rexHomeNativeImage(item.poster_path),
    backdropPath:rexHomeNativeImage(item.backdrop_path)||undefined,releaseDate:date,genreTitle:label,
    description:label+'\n'+(query.media==='movie'?'上映：':'首播：')+rexHomeDisplayDate(date)+'\nBangumi条目日期：'+rexHomeDisplayDate(row.date)+'\n榜单与BGM分数来自Bangumi，详情资源关联使用已核对的TMDB ID。\nhttps://bgm.tv/subject/'+row.id+'\n'+(item.overview||row.summary||'')};
   // Native TMDB detail ratings remain TMDB ratings; Bangumi score is separately labelled above.
   var tmdbScore=Number(item.vote_average);if(Number(item.vote_count)>0&&Number.isFinite(tmdbScore)&&tmdbScore>=0&&tmdbScore<=10)out.rating=tmdbScore;
   return out;
  });
  var ids=new Set(),posters=new Set();var result=items.filter(function(x){if(!x||ids.has(x.id)||posters.has(x.posterPath))return false;ids.add(x.id);posters.add(x.posterPath);return true;});
  if(!result.length&&failures)throw new Error('Bangumi影片身份核对失败，请检查网络后刷新；未用其他影片替换');
  if(!result.length&&query.page===1)throw new Error('Bangumi当前筛选未找到可唯一核对的同名同年动画；未用其他影片替换');
  return result;
 });
}

async function loadBangumiPicks(params){
 params=params||{};var sort=String(params.bgmSort||'heat');
 if(['heat','rank'].indexOf(sort)<0)throw new Error('请选择有效的Bangumi榜单');
 var view=rexHomeView(params),items=await rexHomeLoadBangumi(params,sort==='rank'?'bangumiRank':'bangumiHeat');
 if(view!=='home'||Number(params.page||1)!==1)return items;
 return rexHomeBangumiPreview(items,params,params.category==='animeMovies'?'movie':'tv');
}

// Bilibili PGC lists only: no user-upload ranking or web page as a playback URL.
var RexHomeBiliFeeds={
 china:{title:'国创榜',type:4,path:'/pgc/season/rank/web/list'},
 anime:{title:'番剧榜',type:1,path:'/pgc/web/rank/list'},
 docs:{title:'纪录片榜',type:3,path:'/pgc/season/rank/web/list'}
};
async function rexHomeBiliGet(path,params,ttl){
 var query=Object.keys(params).sort().map(function(k){return encodeURIComponent(k)+'='+encodeURIComponent(params[k]);}).join('&');
 return rexHomeCached('bilibili.api.v39.'+path+'?'+query,ttl,async function(){
  var response;
  try{response=await Widget.http.get('https://api.bilibili.com'+path+'?'+query,{headers:{'User-Agent':'Mozilla/5.0','Referer':'https://www.bilibili.com/','Accept':'application/json'}});}
  catch(_){throw new Error('B站加载失败，请检查网络后刷新');}
  var status=Number(response&&(response.statusCode||response.status)),data=response&&response.data;
  if(status===412||status===403)throw new Error('B站访问受限，请稍后刷新；未改用其他来源');
  if(status>=400)throw new Error('B站暂时无法读取，请稍后刷新');
  if(typeof data==='string'){try{data=JSON.parse(data);}catch(_){throw new Error('B站数据格式异常，请稍后刷新');}}
  if(!data||data.code!==0)throw new Error('B站接口未返回有效结果，请稍后刷新');
  var root=data.result||data.data;if(!root||typeof root!=='object')throw new Error('B站数据格式异常，请稍后刷新');
  return root;
 });
}
function rexHomeBiliRows(root){
 if(!Array.isArray(root.list))throw new Error('B站榜单格式异常，请稍后刷新');
 var seen=new Set();return root.list.filter(function(x){
  if(!x||!rexHomeValidId(x.season_id)||seen.has(Number(x.season_id))||!rexHomeBangumiName(x.title))return false;
  if(!Number.isInteger(Number(x.rank))||Number(x.rank)<1)return false;
  seen.add(Number(x.season_id));return true;
 });
}
async function rexHomeBiliDetail(row,source){
 var detail=await rexHomeBiliGet('/pgc/view/web/season',{season_id:Number(row.season_id)},86400000);
 if(!rexHomeValidId(detail.season_id)||Number(detail.season_id)!==Number(row.season_id)||detail.type!==source.type)return null;
 var official=[detail.title,detail.season_title].map(rexHomeBangumiName);
 if(official.indexOf(rexHomeBangumiName(row.title))<0)return null;
 var publish=detail.publish||{};
 if(publish.unknow_pub_date===1||publish.unknow_pub_date===true||publish.is_started===0||publish.is_started===false)return null;
 var date=rexHomeDate(publish.pub_time);if(!date||date>rexHomeToday())return null;
 var names=Array.from(new Set([row.title,detail.title,detail.season_title,detail.jp_title].filter(function(x){return typeof x==='string'&&x.trim();}).map(function(x){return x.trim();})));
 return {detail:detail,date:date,names:names};
}
async function rexHomeBiliMatch(verified,source){
 var key='bilibili.match.v39.'+source.type+':'+verified.detail.season_id+':'+verified.date+':'+rexHomeStable(verified.names);
 return rexHomeCached(key,900000,async function(){
  var expected=verified.names.map(rexHomeBangumiName),year=verified.date.slice(0,4),found=new Map();
  var searches=[];verified.names.forEach(function(name){['tv','movie'].forEach(function(media){searches.push({name:name,media:media});});});
  // A season's platform publication date is only a consistency guard, never a renamed TMDB premiere.
  var responses=await rexHomeMapLimited(searches,async function(q){return {media:q.media,data:await rexHomeApi('/search/'+q.media,{query:q.name,language:'zh-CN',include_adult:false,page:1},86400000)};},2);
  for(var response of responses){
   var data=response.data,media=response.media;
   if(!data||!Array.isArray(data.results)||Number(data.total_pages)>1)return null;
   for(var item of data.results){
    if(!item||!rexHomeValidId(item.id)||item.adult===true||(item.media_type&&item.media_type!==media))continue;
    var genres=rexHomeIds(item);
    if(source.type===3?genres.indexOf(99)<0:(genres.indexOf(16)<0||genres.indexOf(99)>=0))continue;
    var date=rexHomeDate(media==='movie'?item.release_date:item.first_air_date);
    if(!date||date>rexHomeToday()||date.slice(0,4)!==year||!rexHomeNativeImage(item.poster_path)||!rexHomeTitle(item,media))continue;
    var titles=media==='movie'?[item.title,item.original_title]:[item.name,item.original_name];
    if(!titles.some(function(x){return expected.indexOf(rexHomeBangumiName(x))>=0;}))continue;
    found.set(media+'.'+Number(item.id),{item:item,media:media});
   }
  }
  return found.size===1?Array.from(found.values())[0]:null;
 });
}
async function rexHomeBiliPreview(items){
 var above=(await rexHomePrimaryPreview('movie')).concat(await rexHomePrimaryPreview('tv'));
 var tmdb=rexHomeDefaults('tmdbPicks');tmdb.view='home';
 var saved=rexHomeCacheRead(rexHomePreviewKey(tmdb));if(saved&&Array.isArray(saved.data))above=above.concat(saved.data.slice(0,6));
 saved=rexHomeCacheRead(rexHomeBangumiPreviewKey(rexHomeDefaults('bangumiPicks')));if(saved&&Array.isArray(saved.data))above=above.concat(saved.data.slice(0,6));
 var netflix=rexHomeDefaults('netflixWeekly'),feed=rexHomeNetflixFeed(netflix);
 saved=rexHomeCacheRead('netflix.weekly.v7.'+feed+':home');
 if(saved&&Array.isArray(saved.data)){
  try{above=above.concat((await rexHomeNetflixPreview(saved.data,RexHomeNetflixFeeds[feed].media)).slice(0,6));}catch(_){}
 }
 var shown=rexHomeExcludeRows(items,above);
 if(!shown.length)throw new Error('B站影片已在上方展示，请切换完整片单查看');
 return shown;
}
async function loadBilibiliPicks(params){
 params=params||{};var feed=String(params.biliFeed||'china');
 if(!Object.prototype.hasOwnProperty.call(RexHomeBiliFeeds,feed))throw new Error('请选择有效的B站类别');
 var source=RexHomeBiliFeeds[feed],view=rexHomeView(params),page=Number(params.page==null||params.page===''?1:params.page),size=Number(params.biliPageSize||20);
 if(!Number.isInteger(page)||page<1||page>500)throw new Error('页码必须为1至500的整数');
 if([20,40,60].indexOf(size)<0)throw new Error('请选择有效的B站片量');
 var result=await rexHomeKeepList('bilibili.list.v39.'+feed+':'+size,{page:page},async function(){
  var root=await rexHomeBiliGet(source.path,{day:7,season_type:source.type},900000);
  var rows=rexHomeBiliRows(root).slice((page-1)*size,page*size),failures=0;
  var items=await rexHomeMapLimited(rows,async function(row){
   var verified,match;
   try{verified=await rexHomeBiliDetail(row,source);if(!verified)return null;match=await rexHomeBiliMatch(verified,source);}catch(_){failures++;return null;}
   if(!match)return null;
   var item=match.item,media=match.media,date=rexHomeDate(media==='movie'?item.release_date:item.first_air_date);
   var label='B站 · '+source.title+' · 第'+Number(row.rank)+'名',rating=verified.detail.rating||{};
   var score=Number(rating.score);if(Number(rating.count)>0&&Number.isFinite(score)&&score>=0&&score<=10)label+=' · B站评分 '+score.toFixed(1);
   var out={id:Number(item.id),type:'tmdb',mediaType:media,title:rexHomeTitle(item,media),posterPath:rexHomeNativeImage(item.poster_path),backdropPath:rexHomeNativeImage(item.backdrop_path)||undefined,
    releaseDate:date,genreTitle:label,description:label+'\n'+(media==='movie'?'上映：':'首播：')+rexHomeDisplayDate(date)+'\nB站上线：'+rexHomeDisplayDate(verified.date)+'\n榜单来自B站，详情使用已唯一核对的TMDB身份。\nhttps://www.bilibili.com/bangumi/play/ss'+Number(row.season_id)+'\n'+(item.overview||verified.detail.evaluate||'')};
   var nativeScore=Number(item.vote_average);if(Number(item.vote_count)>0&&Number.isFinite(nativeScore)&&nativeScore>=0&&nativeScore<=10)out.rating=nativeScore;
   return out;
  },4);
  var ids=new Set(),posters=new Set();items=items.filter(function(x){var key=x&&x.mediaType+'.'+x.id;if(!x||ids.has(key)||posters.has(x.posterPath))return false;ids.add(key);posters.add(x.posterPath);return true;});
  if(!items.length&&failures)throw new Error('B站影片身份核对失败，请检查网络后刷新；未用其他影片替换');
  if(!items.length&&page===1)throw new Error('B站当前榜单没有可唯一核对的同名同年作品，请切换类别；未用其他影片替换');
  return items;
 });
 return view==='home'&&page===1?rexHomeBiliPreview(result):result;
}
