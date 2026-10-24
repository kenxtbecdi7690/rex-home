// Rex首页 v151 · 作者：Bolinxxlin
var WidgetMetadata = {
  "id": "rex.home.unified",
  "title": "Rex首页",
  "version": "2026.10.24.151",
  "requiredVersion": "0.0.1",
  "description": "7大分类＋豆瓣榜单：最新在前，每行200部可翻页，各行不重复。",
  "site": "https://github.com/baranwang/rex-widget-libs",
  "author": "Bolinxxlin",
  "globalParams": [
    {
      "name": "sk",
      "title": "豆瓣密钥（可选）",
      "description": "不是豆瓣密码。到 douban-bridge.baran.wang/rex 用 GitHub 登录并 Star 项目后生成，复制贴到这里；只保存在本机，不要发给别人。填了以后，长按首页「豆瓣榜单」→ 配置数据来源 →「片单模式」选「豆瓣原榜」即用完整服务；不填也能正常使用。",
      "type": "input",
      "value": ""
    }
  ],
  "modules": [
    {
      "id": "rowBanner",
      "title": "🎞 精选轮播",
      "functionName": "rowBanner",
      "description": "近一年热门剧集与电影，国产优先，最多20张。",
      "params": [
        {
          "name": "priority",
          "title": "展示偏好",
          "type": "enumeration",
          "value": "domestic",
          "enumOptions": [
            {
              "title": "国产优先",
              "value": "domestic"
            },
            {
              "title": "全地区",
              "value": "off"
            }
          ]
        },
        {
          "name": "catalog",
          "title": "片单来源",
          "type": "enumeration",
          "value": "library",
          "enumOptions": [
            {
              "title": "TMDB分类片库",
              "value": "library"
            },
            {
              "title": "豆瓣标准模式",
              "value": "auto"
            }
          ]
        },
        {
          "name": "cat",
          "title": "来源",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "电影＋剧集",
              "value": "all"
            },
            {
              "title": "剧集",
              "value": "tv"
            },
            {
              "title": "电影",
              "value": "movie"
            }
          ]
        },
        {
          "name": "sort",
          "title": "排序",
          "type": "enumeration",
          "value": "U",
          "enumOptions": [
            {
              "title": "原排序",
              "value": "T"
            },
            {
              "title": "近期热度",
              "value": "U"
            },
            {
              "title": "首映／首播时间",
              "value": "R"
            },
            {
              "title": "高分优先",
              "value": "S"
            }
          ]
        },
        {
          "name": "size",
          "title": "张数",
          "type": "enumeration",
          "value": "20",
          "enumOptions": [
            {
              "title": "10",
              "value": "10"
            },
            {
              "title": "15",
              "value": "15"
            },
            {
              "title": "20",
              "value": "20"
            }
          ]
        },
        {
          "name": "year",
          "title": "年份",
          "type": "enumeration",
          "value": "recent",
          "enumOptions": [
            {
              "title": "全部年份",
              "value": "all"
            },
            {
              "title": "近一年（追新）",
              "value": "recent"
            }
          ]
        },
        {
          "name": "dedupe",
          "title": "首页去重",
          "type": "enumeration",
          "value": "on",
          "enumOptions": [
            {
              "title": "开启（不重复）",
              "value": "on"
            },
            {
              "title": "关闭",
              "value": "off"
            }
          ]
        }
      ],
      "requiresWebView": false,
      "cacheDuration": 600
    },
    {
      "id": "rowSeries",
      "title": "📺 剧集",
      "functionName": "rowSeries",
      "description": "大陆剧集，默认全部年份、最新在前；每页200部，可翻页。",
      "params": [
        {
          "name": "priority",
          "title": "展示偏好",
          "type": "enumeration",
          "value": "domestic",
          "enumOptions": [
            {
              "title": "国产优先",
              "value": "domestic"
            },
            {
              "title": "来源原排序",
              "value": "off"
            }
          ]
        },
        {
          "name": "catalog",
          "title": "片单模式",
          "type": "enumeration",
          "value": "library",
          "enumOptions": [
            {
              "title": "TMDB片库（默认）",
              "value": "library"
            },
            {
              "title": "豆瓣原榜（需密钥）",
              "value": "auto"
            },
            {
              "title": "豆瓣片单＋TMDB",
              "value": "tmdb"
            },
            {
              "title": "原始条目（直连海报）",
              "value": "douban"
            }
          ]
        },
        {
          "name": "genre",
          "title": "类型",
          "type": "enumeration",
          "value": "",
          "enumOptions": [
            {
              "title": "全部",
              "value": ""
            },
            {
              "title": "喜剧",
              "value": "喜剧"
            },
            {
              "title": "爱情",
              "value": "爱情"
            },
            {
              "title": "悬疑",
              "value": "悬疑"
            },
            {
              "title": "动画",
              "value": "动画"
            },
            {
              "title": "武侠",
              "value": "武侠"
            },
            {
              "title": "古装",
              "value": "古装"
            },
            {
              "title": "家庭",
              "value": "家庭"
            },
            {
              "title": "犯罪",
              "value": "犯罪"
            },
            {
              "title": "科幻",
              "value": "科幻"
            },
            {
              "title": "恐怖",
              "value": "恐怖"
            },
            {
              "title": "历史",
              "value": "历史"
            },
            {
              "title": "战争",
              "value": "战争"
            },
            {
              "title": "动作",
              "value": "动作"
            },
            {
              "title": "冒险",
              "value": "冒险"
            },
            {
              "title": "传记",
              "value": "传记"
            },
            {
              "title": "剧情",
              "value": "剧情"
            },
            {
              "title": "奇幻",
              "value": "奇幻"
            },
            {
              "title": "惊悚",
              "value": "惊悚"
            },
            {
              "title": "灾难",
              "value": "灾难"
            },
            {
              "title": "歌舞",
              "value": "歌舞"
            },
            {
              "title": "音乐",
              "value": "音乐"
            },
            {
              "title": "都市",
              "value": "都市"
            },
            {
              "title": "青春",
              "value": "青春"
            },
            {
              "title": "谍战",
              "value": "谍战"
            },
            {
              "title": "刑侦",
              "value": "刑侦"
            },
            {
              "title": "宫斗",
              "value": "宫斗"
            },
            {
              "title": "职场",
              "value": "职场"
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
              "title": "全部",
              "value": ""
            },
            {
              "title": "华语",
              "value": "华语"
            },
            {
              "title": "大陆",
              "value": "大陆"
            },
            {
              "title": "香港",
              "value": "香港"
            },
            {
              "title": "台湾",
              "value": "台湾"
            },
            {
              "title": "欧美",
              "value": "欧美"
            },
            {
              "title": "国外",
              "value": "国外"
            },
            {
              "title": "日本",
              "value": "日本"
            },
            {
              "title": "韩国",
              "value": "韩国"
            },
            {
              "title": "美国",
              "value": "美国"
            },
            {
              "title": "英国",
              "value": "英国"
            },
            {
              "title": "泰国",
              "value": "泰国"
            },
            {
              "title": "印度",
              "value": "印度"
            },
            {
              "title": "法国",
              "value": "法国"
            },
            {
              "title": "德国",
              "value": "德国"
            },
            {
              "title": "加拿大",
              "value": "加拿大"
            },
            {
              "title": "澳大利亚",
              "value": "澳大利亚"
            }
          ]
        },
        {
          "name": "sort",
          "title": "排序",
          "type": "enumeration",
          "value": "R",
          "enumOptions": [
            {
              "title": "原排序",
              "value": "T"
            },
            {
              "title": "近期热度",
              "value": "U"
            },
            {
              "title": "首映／首播时间",
              "value": "R"
            },
            {
              "title": "高分优先",
              "value": "S"
            }
          ]
        },
        {
          "name": "year",
          "title": "年份",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "全部年份",
              "value": "all"
            },
            {
              "title": "近一年（追新）",
              "value": "recent"
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
              "title": "2021",
              "value": "2021"
            },
            {
              "title": "2020",
              "value": "2020"
            },
            {
              "title": "2019",
              "value": "2019"
            },
            {
              "title": "2018",
              "value": "2018"
            },
            {
              "title": "2017",
              "value": "2017"
            },
            {
              "title": "2016",
              "value": "2016"
            },
            {
              "title": "2015",
              "value": "2015"
            },
            {
              "title": "2014",
              "value": "2014"
            },
            {
              "title": "2013",
              "value": "2013"
            },
            {
              "title": "2012",
              "value": "2012"
            },
            {
              "title": "2011",
              "value": "2011"
            },
            {
              "title": "2010",
              "value": "2010"
            },
            {
              "title": "2009",
              "value": "2009"
            },
            {
              "title": "2008",
              "value": "2008"
            },
            {
              "title": "2007",
              "value": "2007"
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
              "title": "更早（1959年以前）",
              "value": "older"
            }
          ]
        },
        {
          "name": "dedupe",
          "title": "首页去重",
          "type": "enumeration",
          "value": "on",
          "enumOptions": [
            {
              "title": "开启（不重复）",
              "value": "on"
            },
            {
              "title": "关闭",
              "value": "off"
            }
          ]
        },
        {
          "name": "pageSize",
          "title": "每页有效影片",
          "type": "enumeration",
          "value": "200",
          "enumOptions": [
            {
              "title": "20",
              "value": "20"
            },
            {
              "title": "40",
              "value": "40"
            },
            {
              "title": "60",
              "value": "60"
            },
            {
              "title": "100",
              "value": "100"
            },
            {
              "title": "200",
              "value": "200"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page",
          "value": "1"
        }
      ],
      "requiresWebView": false,
      "cacheDuration": 1800
    },
    {
      "id": "rowDramaRegion",
      "title": "🌏 地区剧",
      "functionName": "rowDramaRegion",
      "description": "港台、韩、日、美、英、泰、新马、西班牙、土耳其、印度剧集；每页200部，可翻页。",
      "params": [
        {
          "name": "region",
          "title": "地区",
          "type": "enumeration",
          "value": "港台",
          "enumOptions": [
            {
              "title": "港台（香港、台湾、澳门）",
              "value": "港台"
            },
            {
              "title": "韩国",
              "value": "韩国"
            },
            {
              "title": "日本",
              "value": "日本"
            },
            {
              "title": "美国",
              "value": "美国"
            },
            {
              "title": "英国",
              "value": "英国"
            },
            {
              "title": "泰国",
              "value": "泰国"
            },
            {
              "title": "新加坡、马来西亚",
              "value": "新马"
            },
            {
              "title": "西班牙",
              "value": "西班牙"
            },
            {
              "title": "土耳其",
              "value": "土耳其"
            },
            {
              "title": "印度",
              "value": "印度"
            }
          ]
        },
        {
          "name": "genre",
          "title": "类型",
          "type": "enumeration",
          "value": "",
          "enumOptions": [
            {
              "title": "全部",
              "value": ""
            },
            {
              "title": "喜剧",
              "value": "喜剧"
            },
            {
              "title": "爱情",
              "value": "爱情"
            },
            {
              "title": "悬疑",
              "value": "悬疑"
            },
            {
              "title": "动画",
              "value": "动画"
            },
            {
              "title": "武侠",
              "value": "武侠"
            },
            {
              "title": "古装",
              "value": "古装"
            },
            {
              "title": "家庭",
              "value": "家庭"
            },
            {
              "title": "犯罪",
              "value": "犯罪"
            },
            {
              "title": "科幻",
              "value": "科幻"
            },
            {
              "title": "恐怖",
              "value": "恐怖"
            },
            {
              "title": "历史",
              "value": "历史"
            },
            {
              "title": "战争",
              "value": "战争"
            },
            {
              "title": "动作",
              "value": "动作"
            },
            {
              "title": "冒险",
              "value": "冒险"
            },
            {
              "title": "传记",
              "value": "传记"
            },
            {
              "title": "剧情",
              "value": "剧情"
            },
            {
              "title": "奇幻",
              "value": "奇幻"
            },
            {
              "title": "惊悚",
              "value": "惊悚"
            },
            {
              "title": "灾难",
              "value": "灾难"
            },
            {
              "title": "歌舞",
              "value": "歌舞"
            },
            {
              "title": "音乐",
              "value": "音乐"
            },
            {
              "title": "都市",
              "value": "都市"
            },
            {
              "title": "青春",
              "value": "青春"
            },
            {
              "title": "谍战",
              "value": "谍战"
            },
            {
              "title": "刑侦",
              "value": "刑侦"
            },
            {
              "title": "宫斗",
              "value": "宫斗"
            },
            {
              "title": "职场",
              "value": "职场"
            }
          ]
        },
        {
          "name": "sort",
          "title": "排序",
          "type": "enumeration",
          "value": "R",
          "enumOptions": [
            {
              "title": "原排序",
              "value": "T"
            },
            {
              "title": "近期热度",
              "value": "U"
            },
            {
              "title": "首映／首播时间",
              "value": "R"
            },
            {
              "title": "高分优先",
              "value": "S"
            }
          ]
        },
        {
          "name": "year",
          "title": "年份",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "全部年份",
              "value": "all"
            },
            {
              "title": "近一年（追新）",
              "value": "recent"
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
              "title": "2021",
              "value": "2021"
            },
            {
              "title": "2020",
              "value": "2020"
            },
            {
              "title": "2019",
              "value": "2019"
            },
            {
              "title": "2018",
              "value": "2018"
            },
            {
              "title": "2017",
              "value": "2017"
            },
            {
              "title": "2016",
              "value": "2016"
            },
            {
              "title": "2015",
              "value": "2015"
            },
            {
              "title": "2014",
              "value": "2014"
            },
            {
              "title": "2013",
              "value": "2013"
            },
            {
              "title": "2012",
              "value": "2012"
            },
            {
              "title": "2011",
              "value": "2011"
            },
            {
              "title": "2010",
              "value": "2010"
            },
            {
              "title": "2009",
              "value": "2009"
            },
            {
              "title": "2008",
              "value": "2008"
            },
            {
              "title": "2007",
              "value": "2007"
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
              "title": "更早（1959年以前）",
              "value": "older"
            }
          ]
        },
        {
          "name": "dedupe",
          "title": "首页去重",
          "type": "enumeration",
          "value": "on",
          "enumOptions": [
            {
              "title": "开启（不重复）",
              "value": "on"
            },
            {
              "title": "关闭",
              "value": "off"
            }
          ]
        },
        {
          "name": "pageSize",
          "title": "每页有效影片",
          "type": "enumeration",
          "value": "200",
          "enumOptions": [
            {
              "title": "20",
              "value": "20"
            },
            {
              "title": "40",
              "value": "40"
            },
            {
              "title": "60",
              "value": "60"
            },
            {
              "title": "100",
              "value": "100"
            },
            {
              "title": "200",
              "value": "200"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page",
          "value": "1"
        }
      ],
      "requiresWebView": false,
      "cacheDuration": 1800
    },
    {
      "id": "rowMovie",
      "title": "🎬 电影",
      "functionName": "rowMovie",
      "description": "电影，国产优先、最新在前；每页200部，可翻页。",
      "params": [
        {
          "name": "priority",
          "title": "展示偏好",
          "type": "enumeration",
          "value": "domestic",
          "enumOptions": [
            {
              "title": "国产优先",
              "value": "domestic"
            },
            {
              "title": "来源原排序",
              "value": "off"
            }
          ]
        },
        {
          "name": "catalog",
          "title": "片单模式",
          "type": "enumeration",
          "value": "library",
          "enumOptions": [
            {
              "title": "TMDB片库（默认）",
              "value": "library"
            },
            {
              "title": "豆瓣原榜（需密钥）",
              "value": "auto"
            },
            {
              "title": "豆瓣片单＋TMDB",
              "value": "tmdb"
            },
            {
              "title": "原始条目（直连海报）",
              "value": "douban"
            }
          ]
        },
        {
          "name": "genre",
          "title": "类型",
          "type": "enumeration",
          "value": "",
          "enumOptions": [
            {
              "title": "全部",
              "value": ""
            },
            {
              "title": "喜剧",
              "value": "喜剧"
            },
            {
              "title": "爱情",
              "value": "爱情"
            },
            {
              "title": "动作",
              "value": "动作"
            },
            {
              "title": "科幻",
              "value": "科幻"
            },
            {
              "title": "动画",
              "value": "动画"
            },
            {
              "title": "悬疑",
              "value": "悬疑"
            },
            {
              "title": "犯罪",
              "value": "犯罪"
            },
            {
              "title": "惊悚",
              "value": "惊悚"
            },
            {
              "title": "冒险",
              "value": "冒险"
            },
            {
              "title": "音乐",
              "value": "音乐"
            },
            {
              "title": "历史",
              "value": "历史"
            },
            {
              "title": "奇幻",
              "value": "奇幻"
            },
            {
              "title": "恐怖",
              "value": "恐怖"
            },
            {
              "title": "战争",
              "value": "战争"
            },
            {
              "title": "传记",
              "value": "传记"
            },
            {
              "title": "歌舞",
              "value": "歌舞"
            },
            {
              "title": "武侠",
              "value": "武侠"
            },
            {
              "title": "灾难",
              "value": "灾难"
            },
            {
              "title": "西部",
              "value": "西部"
            },
            {
              "title": "纪录片",
              "value": "纪录片"
            },
            {
              "title": "短片",
              "value": "短片"
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
              "title": "全部",
              "value": ""
            },
            {
              "title": "华语",
              "value": "华语"
            },
            {
              "title": "大陆",
              "value": "大陆"
            },
            {
              "title": "香港",
              "value": "香港"
            },
            {
              "title": "台湾",
              "value": "台湾"
            },
            {
              "title": "欧美",
              "value": "欧美"
            },
            {
              "title": "国外",
              "value": "国外"
            },
            {
              "title": "日本",
              "value": "日本"
            },
            {
              "title": "韩国",
              "value": "韩国"
            },
            {
              "title": "美国",
              "value": "美国"
            },
            {
              "title": "英国",
              "value": "英国"
            },
            {
              "title": "泰国",
              "value": "泰国"
            },
            {
              "title": "印度",
              "value": "印度"
            },
            {
              "title": "法国",
              "value": "法国"
            },
            {
              "title": "德国",
              "value": "德国"
            },
            {
              "title": "加拿大",
              "value": "加拿大"
            },
            {
              "title": "澳大利亚",
              "value": "澳大利亚"
            }
          ]
        },
        {
          "name": "sort",
          "title": "排序",
          "type": "enumeration",
          "value": "R",
          "enumOptions": [
            {
              "title": "原排序",
              "value": "T"
            },
            {
              "title": "近期热度",
              "value": "U"
            },
            {
              "title": "首映／首播时间",
              "value": "R"
            },
            {
              "title": "高分优先",
              "value": "S"
            }
          ]
        },
        {
          "name": "year",
          "title": "年份",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "全部年份",
              "value": "all"
            },
            {
              "title": "近一年（追新）",
              "value": "recent"
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
              "title": "2021",
              "value": "2021"
            },
            {
              "title": "2020",
              "value": "2020"
            },
            {
              "title": "2019",
              "value": "2019"
            },
            {
              "title": "2018",
              "value": "2018"
            },
            {
              "title": "2017",
              "value": "2017"
            },
            {
              "title": "2016",
              "value": "2016"
            },
            {
              "title": "2015",
              "value": "2015"
            },
            {
              "title": "2014",
              "value": "2014"
            },
            {
              "title": "2013",
              "value": "2013"
            },
            {
              "title": "2012",
              "value": "2012"
            },
            {
              "title": "2011",
              "value": "2011"
            },
            {
              "title": "2010",
              "value": "2010"
            },
            {
              "title": "2009",
              "value": "2009"
            },
            {
              "title": "2008",
              "value": "2008"
            },
            {
              "title": "2007",
              "value": "2007"
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
              "title": "更早（1959年以前）",
              "value": "older"
            }
          ]
        },
        {
          "name": "dedupe",
          "title": "首页去重",
          "type": "enumeration",
          "value": "on",
          "enumOptions": [
            {
              "title": "开启（不重复）",
              "value": "on"
            },
            {
              "title": "关闭",
              "value": "off"
            }
          ]
        },
        {
          "name": "pageSize",
          "title": "每页有效影片",
          "type": "enumeration",
          "value": "200",
          "enumOptions": [
            {
              "title": "20",
              "value": "20"
            },
            {
              "title": "40",
              "value": "40"
            },
            {
              "title": "60",
              "value": "60"
            },
            {
              "title": "100",
              "value": "100"
            },
            {
              "title": "200",
              "value": "200"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page",
          "value": "1"
        }
      ],
      "requiresWebView": false,
      "cacheDuration": 1800
    },
    {
      "id": "rowAnime",
      "title": "🌸 动漫",
      "functionName": "rowAnime",
      "description": "动画剧集与剧场版，国产优先、最新在前；每页200部，可翻页。",
      "params": [
        {
          "name": "priority",
          "title": "展示偏好",
          "type": "enumeration",
          "value": "domestic",
          "enumOptions": [
            {
              "title": "国产优先",
              "value": "domestic"
            },
            {
              "title": "来源原排序",
              "value": "off"
            }
          ]
        },
        {
          "name": "media",
          "title": "形式",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "剧集＋电影",
              "value": "all"
            },
            {
              "title": "剧集",
              "value": "tv"
            },
            {
              "title": "电影",
              "value": "movie"
            }
          ]
        },
        {
          "name": "catalog",
          "title": "片单模式",
          "type": "enumeration",
          "value": "library",
          "enumOptions": [
            {
              "title": "TMDB片库（默认）",
              "value": "library"
            },
            {
              "title": "豆瓣原榜（需密钥）",
              "value": "auto"
            },
            {
              "title": "豆瓣片单＋TMDB",
              "value": "tmdb"
            },
            {
              "title": "原始条目（直连海报）",
              "value": "douban"
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
              "title": "全部",
              "value": ""
            },
            {
              "title": "华语",
              "value": "华语"
            },
            {
              "title": "大陆",
              "value": "大陆"
            },
            {
              "title": "香港",
              "value": "香港"
            },
            {
              "title": "台湾",
              "value": "台湾"
            },
            {
              "title": "欧美",
              "value": "欧美"
            },
            {
              "title": "国外",
              "value": "国外"
            },
            {
              "title": "日本",
              "value": "日本"
            },
            {
              "title": "韩国",
              "value": "韩国"
            },
            {
              "title": "美国",
              "value": "美国"
            },
            {
              "title": "英国",
              "value": "英国"
            },
            {
              "title": "泰国",
              "value": "泰国"
            },
            {
              "title": "印度",
              "value": "印度"
            },
            {
              "title": "法国",
              "value": "法国"
            },
            {
              "title": "德国",
              "value": "德国"
            },
            {
              "title": "加拿大",
              "value": "加拿大"
            },
            {
              "title": "澳大利亚",
              "value": "澳大利亚"
            }
          ]
        },
        {
          "name": "sort",
          "title": "排序",
          "type": "enumeration",
          "value": "R",
          "enumOptions": [
            {
              "title": "原排序",
              "value": "T"
            },
            {
              "title": "近期热度",
              "value": "U"
            },
            {
              "title": "首映／首播时间",
              "value": "R"
            },
            {
              "title": "高分优先",
              "value": "S"
            }
          ]
        },
        {
          "name": "year",
          "title": "年份",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "全部年份",
              "value": "all"
            },
            {
              "title": "近一年（追新）",
              "value": "recent"
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
              "title": "2021",
              "value": "2021"
            },
            {
              "title": "2020",
              "value": "2020"
            },
            {
              "title": "2019",
              "value": "2019"
            },
            {
              "title": "2018",
              "value": "2018"
            },
            {
              "title": "2017",
              "value": "2017"
            },
            {
              "title": "2016",
              "value": "2016"
            },
            {
              "title": "2015",
              "value": "2015"
            },
            {
              "title": "2014",
              "value": "2014"
            },
            {
              "title": "2013",
              "value": "2013"
            },
            {
              "title": "2012",
              "value": "2012"
            },
            {
              "title": "2011",
              "value": "2011"
            },
            {
              "title": "2010",
              "value": "2010"
            },
            {
              "title": "2009",
              "value": "2009"
            },
            {
              "title": "2008",
              "value": "2008"
            },
            {
              "title": "2007",
              "value": "2007"
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
              "title": "更早（1959年以前）",
              "value": "older"
            }
          ]
        },
        {
          "name": "dedupe",
          "title": "首页去重",
          "type": "enumeration",
          "value": "on",
          "enumOptions": [
            {
              "title": "开启（不重复）",
              "value": "on"
            },
            {
              "title": "关闭",
              "value": "off"
            }
          ]
        },
        {
          "name": "pageSize",
          "title": "每页有效影片",
          "type": "enumeration",
          "value": "200",
          "enumOptions": [
            {
              "title": "20",
              "value": "20"
            },
            {
              "title": "40",
              "value": "40"
            },
            {
              "title": "60",
              "value": "60"
            },
            {
              "title": "100",
              "value": "100"
            },
            {
              "title": "200",
              "value": "200"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page",
          "value": "1"
        }
      ],
      "requiresWebView": false,
      "cacheDuration": 1800
    },
    {
      "id": "rowVariety",
      "title": "🎤 综艺",
      "functionName": "rowVariety",
      "description": "真人秀、脱口秀等综艺，国产优先、最新在前；每页200部，可翻页。",
      "params": [
        {
          "name": "priority",
          "title": "展示偏好",
          "type": "enumeration",
          "value": "domestic",
          "enumOptions": [
            {
              "title": "国产优先",
              "value": "domestic"
            },
            {
              "title": "来源原排序",
              "value": "off"
            }
          ]
        },
        {
          "name": "catalog",
          "title": "片单模式",
          "type": "enumeration",
          "value": "library",
          "enumOptions": [
            {
              "title": "TMDB片库（默认）",
              "value": "library"
            },
            {
              "title": "豆瓣原榜（需密钥）",
              "value": "auto"
            },
            {
              "title": "豆瓣片单＋TMDB",
              "value": "tmdb"
            },
            {
              "title": "原始条目（直连海报）",
              "value": "douban"
            }
          ]
        },
        {
          "name": "genre",
          "title": "类型",
          "type": "enumeration",
          "value": "",
          "enumOptions": [
            {
              "title": "全部",
              "value": ""
            },
            {
              "title": "真人秀",
              "value": "真人秀"
            },
            {
              "title": "脱口秀",
              "value": "脱口秀"
            },
            {
              "title": "音乐",
              "value": "音乐"
            },
            {
              "title": "歌舞",
              "value": "歌舞"
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
              "title": "全部",
              "value": ""
            },
            {
              "title": "华语",
              "value": "华语"
            },
            {
              "title": "大陆",
              "value": "大陆"
            },
            {
              "title": "香港",
              "value": "香港"
            },
            {
              "title": "台湾",
              "value": "台湾"
            },
            {
              "title": "欧美",
              "value": "欧美"
            },
            {
              "title": "国外",
              "value": "国外"
            },
            {
              "title": "日本",
              "value": "日本"
            },
            {
              "title": "韩国",
              "value": "韩国"
            },
            {
              "title": "美国",
              "value": "美国"
            },
            {
              "title": "英国",
              "value": "英国"
            },
            {
              "title": "泰国",
              "value": "泰国"
            },
            {
              "title": "印度",
              "value": "印度"
            },
            {
              "title": "法国",
              "value": "法国"
            },
            {
              "title": "德国",
              "value": "德国"
            },
            {
              "title": "加拿大",
              "value": "加拿大"
            },
            {
              "title": "澳大利亚",
              "value": "澳大利亚"
            }
          ]
        },
        {
          "name": "sort",
          "title": "排序",
          "type": "enumeration",
          "value": "R",
          "enumOptions": [
            {
              "title": "原排序",
              "value": "T"
            },
            {
              "title": "近期热度",
              "value": "U"
            },
            {
              "title": "首映／首播时间",
              "value": "R"
            },
            {
              "title": "高分优先",
              "value": "S"
            }
          ]
        },
        {
          "name": "year",
          "title": "年份",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "全部年份",
              "value": "all"
            },
            {
              "title": "近一年（追新）",
              "value": "recent"
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
              "title": "2021",
              "value": "2021"
            },
            {
              "title": "2020",
              "value": "2020"
            },
            {
              "title": "2019",
              "value": "2019"
            },
            {
              "title": "2018",
              "value": "2018"
            },
            {
              "title": "2017",
              "value": "2017"
            },
            {
              "title": "2016",
              "value": "2016"
            },
            {
              "title": "2015",
              "value": "2015"
            },
            {
              "title": "2014",
              "value": "2014"
            },
            {
              "title": "2013",
              "value": "2013"
            },
            {
              "title": "2012",
              "value": "2012"
            },
            {
              "title": "2011",
              "value": "2011"
            },
            {
              "title": "2010",
              "value": "2010"
            },
            {
              "title": "2009",
              "value": "2009"
            },
            {
              "title": "2008",
              "value": "2008"
            },
            {
              "title": "2007",
              "value": "2007"
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
              "title": "更早（1959年以前）",
              "value": "older"
            }
          ]
        },
        {
          "name": "dedupe",
          "title": "首页去重",
          "type": "enumeration",
          "value": "on",
          "enumOptions": [
            {
              "title": "开启（不重复）",
              "value": "on"
            },
            {
              "title": "关闭",
              "value": "off"
            }
          ]
        },
        {
          "name": "pageSize",
          "title": "每页有效影片",
          "type": "enumeration",
          "value": "200",
          "enumOptions": [
            {
              "title": "20",
              "value": "20"
            },
            {
              "title": "40",
              "value": "40"
            },
            {
              "title": "60",
              "value": "60"
            },
            {
              "title": "100",
              "value": "100"
            },
            {
              "title": "200",
              "value": "200"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page",
          "value": "1"
        }
      ],
      "requiresWebView": false,
      "cacheDuration": 1800
    },
    {
      "id": "rowDocumentary",
      "title": "🌿 纪录片",
      "functionName": "rowDocumentary",
      "description": "纪录片剧集与电影，国产优先、最新在前；每页200部，可翻页。",
      "params": [
        {
          "name": "priority",
          "title": "展示偏好",
          "type": "enumeration",
          "value": "domestic",
          "enumOptions": [
            {
              "title": "国产优先",
              "value": "domestic"
            },
            {
              "title": "来源原排序",
              "value": "off"
            }
          ]
        },
        {
          "name": "media",
          "title": "形式",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "剧集＋电影",
              "value": "all"
            },
            {
              "title": "剧集",
              "value": "tv"
            },
            {
              "title": "电影",
              "value": "movie"
            }
          ]
        },
        {
          "name": "catalog",
          "title": "片单模式",
          "type": "enumeration",
          "value": "library",
          "enumOptions": [
            {
              "title": "TMDB片库（默认）",
              "value": "library"
            },
            {
              "title": "豆瓣原榜（需密钥）",
              "value": "auto"
            },
            {
              "title": "豆瓣片单＋TMDB",
              "value": "tmdb"
            },
            {
              "title": "原始条目（直连海报）",
              "value": "douban"
            }
          ]
        },
        {
          "name": "genre",
          "title": "类型",
          "type": "enumeration",
          "value": "",
          "enumOptions": [
            {
              "title": "全部",
              "value": ""
            },
            {
              "title": "自然",
              "value": "自然"
            },
            {
              "title": "历史",
              "value": "历史"
            },
            {
              "title": "美食",
              "value": "美食"
            },
            {
              "title": "科技",
              "value": "科技"
            },
            {
              "title": "太空",
              "value": "太空"
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
              "title": "全部",
              "value": ""
            },
            {
              "title": "华语",
              "value": "华语"
            },
            {
              "title": "大陆",
              "value": "大陆"
            },
            {
              "title": "香港",
              "value": "香港"
            },
            {
              "title": "台湾",
              "value": "台湾"
            },
            {
              "title": "欧美",
              "value": "欧美"
            },
            {
              "title": "国外",
              "value": "国外"
            },
            {
              "title": "日本",
              "value": "日本"
            },
            {
              "title": "韩国",
              "value": "韩国"
            },
            {
              "title": "美国",
              "value": "美国"
            },
            {
              "title": "英国",
              "value": "英国"
            },
            {
              "title": "泰国",
              "value": "泰国"
            },
            {
              "title": "印度",
              "value": "印度"
            },
            {
              "title": "法国",
              "value": "法国"
            },
            {
              "title": "德国",
              "value": "德国"
            },
            {
              "title": "加拿大",
              "value": "加拿大"
            },
            {
              "title": "澳大利亚",
              "value": "澳大利亚"
            }
          ]
        },
        {
          "name": "sort",
          "title": "排序",
          "type": "enumeration",
          "value": "R",
          "enumOptions": [
            {
              "title": "原排序",
              "value": "T"
            },
            {
              "title": "近期热度",
              "value": "U"
            },
            {
              "title": "首映／首播时间",
              "value": "R"
            },
            {
              "title": "高分优先",
              "value": "S"
            }
          ]
        },
        {
          "name": "year",
          "title": "年份",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "全部年份",
              "value": "all"
            },
            {
              "title": "近一年（追新）",
              "value": "recent"
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
              "title": "2021",
              "value": "2021"
            },
            {
              "title": "2020",
              "value": "2020"
            },
            {
              "title": "2019",
              "value": "2019"
            },
            {
              "title": "2018",
              "value": "2018"
            },
            {
              "title": "2017",
              "value": "2017"
            },
            {
              "title": "2016",
              "value": "2016"
            },
            {
              "title": "2015",
              "value": "2015"
            },
            {
              "title": "2014",
              "value": "2014"
            },
            {
              "title": "2013",
              "value": "2013"
            },
            {
              "title": "2012",
              "value": "2012"
            },
            {
              "title": "2011",
              "value": "2011"
            },
            {
              "title": "2010",
              "value": "2010"
            },
            {
              "title": "2009",
              "value": "2009"
            },
            {
              "title": "2008",
              "value": "2008"
            },
            {
              "title": "2007",
              "value": "2007"
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
              "title": "更早（1959年以前）",
              "value": "older"
            }
          ]
        },
        {
          "name": "dedupe",
          "title": "首页去重",
          "type": "enumeration",
          "value": "on",
          "enumOptions": [
            {
              "title": "开启（不重复）",
              "value": "on"
            },
            {
              "title": "关闭",
              "value": "off"
            }
          ]
        },
        {
          "name": "pageSize",
          "title": "每页有效影片",
          "type": "enumeration",
          "value": "200",
          "enumOptions": [
            {
              "title": "20",
              "value": "20"
            },
            {
              "title": "40",
              "value": "40"
            },
            {
              "title": "60",
              "value": "60"
            },
            {
              "title": "100",
              "value": "100"
            },
            {
              "title": "200",
              "value": "200"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page",
          "value": "1"
        }
      ],
      "requiresWebView": false,
      "cacheDuration": 1800
    },
    {
      "id": "rowConcert",
      "title": "🎵 演唱会／音乐现场",
      "functionName": "rowConcert",
      "description": "演唱会与音乐现场，国产优先、最新在前；每页200部，可翻页。",
      "params": [
        {
          "name": "priority",
          "title": "展示偏好",
          "type": "enumeration",
          "value": "domestic",
          "enumOptions": [
            {
              "title": "国产优先",
              "value": "domestic"
            },
            {
              "title": "来源原排序",
              "value": "off"
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
              "title": "全部",
              "value": ""
            },
            {
              "title": "华语",
              "value": "华语"
            },
            {
              "title": "大陆",
              "value": "大陆"
            },
            {
              "title": "香港",
              "value": "香港"
            },
            {
              "title": "台湾",
              "value": "台湾"
            },
            {
              "title": "欧美",
              "value": "欧美"
            },
            {
              "title": "国外",
              "value": "国外"
            },
            {
              "title": "日本",
              "value": "日本"
            },
            {
              "title": "韩国",
              "value": "韩国"
            },
            {
              "title": "美国",
              "value": "美国"
            },
            {
              "title": "英国",
              "value": "英国"
            },
            {
              "title": "泰国",
              "value": "泰国"
            },
            {
              "title": "印度",
              "value": "印度"
            },
            {
              "title": "法国",
              "value": "法国"
            },
            {
              "title": "德国",
              "value": "德国"
            },
            {
              "title": "加拿大",
              "value": "加拿大"
            },
            {
              "title": "澳大利亚",
              "value": "澳大利亚"
            }
          ]
        },
        {
          "name": "sort",
          "title": "排序",
          "type": "enumeration",
          "value": "R",
          "enumOptions": [
            {
              "title": "原排序",
              "value": "T"
            },
            {
              "title": "近期热度",
              "value": "U"
            },
            {
              "title": "首映／首播时间",
              "value": "R"
            },
            {
              "title": "高分优先",
              "value": "S"
            }
          ]
        },
        {
          "name": "year",
          "title": "年份",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "全部年份",
              "value": "all"
            },
            {
              "title": "近一年（追新）",
              "value": "recent"
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
              "title": "2021",
              "value": "2021"
            },
            {
              "title": "2020",
              "value": "2020"
            },
            {
              "title": "2019",
              "value": "2019"
            },
            {
              "title": "2018",
              "value": "2018"
            },
            {
              "title": "2017",
              "value": "2017"
            },
            {
              "title": "2016",
              "value": "2016"
            },
            {
              "title": "2015",
              "value": "2015"
            },
            {
              "title": "2014",
              "value": "2014"
            },
            {
              "title": "2013",
              "value": "2013"
            },
            {
              "title": "2012",
              "value": "2012"
            },
            {
              "title": "2011",
              "value": "2011"
            },
            {
              "title": "2010",
              "value": "2010"
            },
            {
              "title": "2009",
              "value": "2009"
            },
            {
              "title": "2008",
              "value": "2008"
            },
            {
              "title": "2007",
              "value": "2007"
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
              "title": "更早（1959年以前）",
              "value": "older"
            }
          ]
        },
        {
          "name": "dedupe",
          "title": "首页去重",
          "type": "enumeration",
          "value": "on",
          "enumOptions": [
            {
              "title": "开启（不重复）",
              "value": "on"
            },
            {
              "title": "关闭",
              "value": "off"
            }
          ]
        },
        {
          "name": "pageSize",
          "title": "每页有效影片",
          "type": "enumeration",
          "value": "200",
          "enumOptions": [
            {
              "title": "20",
              "value": "20"
            },
            {
              "title": "40",
              "value": "40"
            },
            {
              "title": "60",
              "value": "60"
            },
            {
              "title": "100",
              "value": "100"
            },
            {
              "title": "200",
              "value": "200"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page",
          "value": "1"
        }
      ],
      "requiresWebView": false,
      "cacheDuration": 1800
    },
    {
      "id": "rowPlatform",
      "title": "📡 国内平台",
      "functionName": "rowPlatform",
      "description": "腾讯视频、爱奇艺、优酷、芒果TV 片单；每页200部，可翻页。",
      "params": [
        {
          "name": "platform",
          "title": "平台",
          "type": "enumeration",
          "value": "tencent",
          "enumOptions": [
            {
              "title": "腾讯视频",
              "value": "tencent"
            },
            {
              "title": "爱奇艺",
              "value": "iqiyi"
            },
            {
              "title": "优酷",
              "value": "youku"
            },
            {
              "title": "芒果TV",
              "value": "mango"
            }
          ]
        },
        {
          "name": "source",
          "title": "片单来源",
          "type": "enumeration",
          "value": "tmdb",
          "enumOptions": [
            {
              "title": "TMDB平台片库",
              "value": "tmdb"
            },
            {
              "title": "豆瓣平台热度",
              "value": "douban"
            },
            {
              "title": "猫眼平台热度",
              "value": "maoyan"
            }
          ]
        },
        {
          "name": "cat",
          "title": "片库排序",
          "type": "enumeration",
          "value": "hot",
          "enumOptions": [
            {
              "title": "热门",
              "value": "hot"
            },
            {
              "title": "最新",
              "value": "new"
            },
            {
              "title": "高分",
              "value": "top"
            }
          ],
          "belongTo": {
            "paramName": "source",
            "value": [
              "tmdb"
            ]
          }
        },
        {
          "name": "year",
          "title": "年份",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "全部年份",
              "value": "all"
            },
            {
              "title": "近一年（追新）",
              "value": "recent"
            }
          ],
          "belongTo": {
            "paramName": "source",
            "value": [
              "tmdb"
            ]
          }
        },
        {
          "name": "kind",
          "title": "形式",
          "type": "enumeration",
          "value": "tv",
          "enumOptions": [
            {
              "title": "剧集",
              "value": "tv"
            },
            {
              "title": "综艺",
              "value": "show"
            }
          ],
          "belongTo": {
            "paramName": "source",
            "value": [
              "douban",
              "maoyan"
            ]
          }
        },
        {
          "name": "sort",
          "title": "豆瓣排序",
          "type": "enumeration",
          "value": "U",
          "enumOptions": [
            {
              "title": "近期热度",
              "value": "U"
            },
            {
              "title": "原排序",
              "value": "T"
            },
            {
              "title": "首映／首播时间",
              "value": "R"
            },
            {
              "title": "高分优先",
              "value": "S"
            }
          ],
          "belongTo": {
            "paramName": "source",
            "value": [
              "douban"
            ]
          }
        },
        {
          "name": "dedupe",
          "title": "首页去重",
          "type": "enumeration",
          "value": "on",
          "enumOptions": [
            {
              "title": "开启（不重复）",
              "value": "on"
            },
            {
              "title": "关闭",
              "value": "off"
            }
          ]
        },
        {
          "name": "pageSize",
          "title": "每页有效影片",
          "type": "enumeration",
          "value": "200",
          "enumOptions": [
            {
              "title": "20",
              "value": "20"
            },
            {
              "title": "40",
              "value": "40"
            },
            {
              "title": "60",
              "value": "60"
            },
            {
              "title": "100",
              "value": "100"
            },
            {
              "title": "200",
              "value": "200"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page",
          "value": "1"
        }
      ],
      "requiresWebView": false,
      "cacheDuration": 1800
    },
    {
      "id": "rowBrowse",
      "title": "🔎 片库筛选",
      "functionName": "rowBrowse",
      "description": "自选频道、类型、地区、年份与播出平台；每页200部，可翻页。",
      "params": [
        {
          "name": "channel",
          "title": "频道",
          "type": "enumeration",
          "value": "tv",
          "enumOptions": [
            {
              "title": "电视剧",
              "value": "tv"
            },
            {
              "title": "电影",
              "value": "movie"
            },
            {
              "title": "综艺",
              "value": "variety"
            },
            {
              "title": "动漫",
              "value": "anime"
            },
            {
              "title": "纪录片",
              "value": "doc"
            }
          ]
        },
        {
          "name": "tvGenre",
          "title": "类型",
          "type": "enumeration",
          "value": "",
          "enumOptions": [
            {
              "title": "全部",
              "value": ""
            },
            {
              "title": "喜剧",
              "value": "喜剧"
            },
            {
              "title": "爱情",
              "value": "爱情"
            },
            {
              "title": "悬疑",
              "value": "悬疑"
            },
            {
              "title": "动画",
              "value": "动画"
            },
            {
              "title": "武侠",
              "value": "武侠"
            },
            {
              "title": "古装",
              "value": "古装"
            },
            {
              "title": "家庭",
              "value": "家庭"
            },
            {
              "title": "犯罪",
              "value": "犯罪"
            },
            {
              "title": "科幻",
              "value": "科幻"
            },
            {
              "title": "恐怖",
              "value": "恐怖"
            },
            {
              "title": "历史",
              "value": "历史"
            },
            {
              "title": "战争",
              "value": "战争"
            },
            {
              "title": "动作",
              "value": "动作"
            },
            {
              "title": "冒险",
              "value": "冒险"
            },
            {
              "title": "传记",
              "value": "传记"
            },
            {
              "title": "剧情",
              "value": "剧情"
            },
            {
              "title": "奇幻",
              "value": "奇幻"
            },
            {
              "title": "惊悚",
              "value": "惊悚"
            },
            {
              "title": "灾难",
              "value": "灾难"
            },
            {
              "title": "歌舞",
              "value": "歌舞"
            },
            {
              "title": "音乐",
              "value": "音乐"
            },
            {
              "title": "都市",
              "value": "都市"
            },
            {
              "title": "青春",
              "value": "青春"
            },
            {
              "title": "谍战",
              "value": "谍战"
            },
            {
              "title": "刑侦",
              "value": "刑侦"
            },
            {
              "title": "宫斗",
              "value": "宫斗"
            },
            {
              "title": "职场",
              "value": "职场"
            }
          ],
          "belongTo": {
            "paramName": "channel",
            "value": [
              "tv"
            ]
          }
        },
        {
          "name": "movieGenre",
          "title": "类型",
          "type": "enumeration",
          "value": "",
          "enumOptions": [
            {
              "title": "全部",
              "value": ""
            },
            {
              "title": "喜剧",
              "value": "喜剧"
            },
            {
              "title": "爱情",
              "value": "爱情"
            },
            {
              "title": "动作",
              "value": "动作"
            },
            {
              "title": "科幻",
              "value": "科幻"
            },
            {
              "title": "动画",
              "value": "动画"
            },
            {
              "title": "悬疑",
              "value": "悬疑"
            },
            {
              "title": "犯罪",
              "value": "犯罪"
            },
            {
              "title": "惊悚",
              "value": "惊悚"
            },
            {
              "title": "冒险",
              "value": "冒险"
            },
            {
              "title": "音乐",
              "value": "音乐"
            },
            {
              "title": "历史",
              "value": "历史"
            },
            {
              "title": "奇幻",
              "value": "奇幻"
            },
            {
              "title": "恐怖",
              "value": "恐怖"
            },
            {
              "title": "战争",
              "value": "战争"
            },
            {
              "title": "传记",
              "value": "传记"
            },
            {
              "title": "歌舞",
              "value": "歌舞"
            },
            {
              "title": "武侠",
              "value": "武侠"
            },
            {
              "title": "灾难",
              "value": "灾难"
            },
            {
              "title": "西部",
              "value": "西部"
            },
            {
              "title": "纪录片",
              "value": "纪录片"
            },
            {
              "title": "短片",
              "value": "短片"
            }
          ],
          "belongTo": {
            "paramName": "channel",
            "value": [
              "movie"
            ]
          }
        },
        {
          "name": "varietyGenre",
          "title": "类型",
          "type": "enumeration",
          "value": "",
          "enumOptions": [
            {
              "title": "全部",
              "value": ""
            },
            {
              "title": "真人秀",
              "value": "真人秀"
            },
            {
              "title": "脱口秀",
              "value": "脱口秀"
            },
            {
              "title": "音乐",
              "value": "音乐"
            },
            {
              "title": "歌舞",
              "value": "歌舞"
            }
          ],
          "belongTo": {
            "paramName": "channel",
            "value": [
              "variety"
            ]
          }
        },
        {
          "name": "docGenre",
          "title": "类型",
          "type": "enumeration",
          "value": "",
          "enumOptions": [
            {
              "title": "全部",
              "value": ""
            },
            {
              "title": "自然",
              "value": "自然"
            },
            {
              "title": "历史",
              "value": "历史"
            },
            {
              "title": "美食",
              "value": "美食"
            },
            {
              "title": "科技",
              "value": "科技"
            },
            {
              "title": "太空",
              "value": "太空"
            }
          ],
          "belongTo": {
            "paramName": "channel",
            "value": [
              "doc"
            ]
          }
        },
        {
          "name": "form",
          "title": "形式",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "剧集＋电影",
              "value": "all"
            },
            {
              "title": "剧集",
              "value": "tv"
            },
            {
              "title": "电影",
              "value": "movie"
            }
          ],
          "belongTo": {
            "paramName": "channel",
            "value": [
              "anime",
              "doc"
            ]
          }
        },
        {
          "name": "region",
          "title": "地区",
          "type": "enumeration",
          "value": "大陆",
          "enumOptions": [
            {
              "title": "全部",
              "value": ""
            },
            {
              "title": "华语",
              "value": "华语"
            },
            {
              "title": "大陆",
              "value": "大陆"
            },
            {
              "title": "香港",
              "value": "香港"
            },
            {
              "title": "台湾",
              "value": "台湾"
            },
            {
              "title": "欧美",
              "value": "欧美"
            },
            {
              "title": "国外",
              "value": "国外"
            },
            {
              "title": "日本",
              "value": "日本"
            },
            {
              "title": "韩国",
              "value": "韩国"
            },
            {
              "title": "美国",
              "value": "美国"
            },
            {
              "title": "英国",
              "value": "英国"
            },
            {
              "title": "泰国",
              "value": "泰国"
            },
            {
              "title": "印度",
              "value": "印度"
            },
            {
              "title": "法国",
              "value": "法国"
            },
            {
              "title": "德国",
              "value": "德国"
            },
            {
              "title": "加拿大",
              "value": "加拿大"
            },
            {
              "title": "澳大利亚",
              "value": "澳大利亚"
            }
          ]
        },
        {
          "name": "platform",
          "title": "平台",
          "type": "enumeration",
          "value": "",
          "enumOptions": [
            {
              "title": "全部平台",
              "value": ""
            },
            {
              "title": "腾讯视频",
              "value": "2007"
            },
            {
              "title": "爱奇艺",
              "value": "1330"
            },
            {
              "title": "优酷",
              "value": "1419"
            },
            {
              "title": "芒果TV",
              "value": "1631"
            },
            {
              "title": "哔哩哔哩",
              "value": "1605"
            },
            {
              "title": "Netflix",
              "value": "213"
            },
            {
              "title": "Disney+",
              "value": "2739"
            },
            {
              "title": "HBO",
              "value": "49|3186"
            },
            {
              "title": "Apple TV+",
              "value": "2552"
            },
            {
              "title": "Prime Video",
              "value": "1024"
            }
          ],
          "belongTo": {
            "paramName": "channel",
            "value": [
              "tv",
              "variety",
              "anime",
              "doc"
            ]
          }
        },
        {
          "name": "year",
          "title": "年份",
          "type": "enumeration",
          "value": "all",
          "enumOptions": [
            {
              "title": "全部年份",
              "value": "all"
            },
            {
              "title": "近一年（追新）",
              "value": "recent"
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
              "title": "2021",
              "value": "2021"
            },
            {
              "title": "2020",
              "value": "2020"
            },
            {
              "title": "2019",
              "value": "2019"
            },
            {
              "title": "2018",
              "value": "2018"
            },
            {
              "title": "2017",
              "value": "2017"
            },
            {
              "title": "2016",
              "value": "2016"
            },
            {
              "title": "2015",
              "value": "2015"
            },
            {
              "title": "2014",
              "value": "2014"
            },
            {
              "title": "2013",
              "value": "2013"
            },
            {
              "title": "2012",
              "value": "2012"
            },
            {
              "title": "2011",
              "value": "2011"
            },
            {
              "title": "2010",
              "value": "2010"
            },
            {
              "title": "2009",
              "value": "2009"
            },
            {
              "title": "2008",
              "value": "2008"
            },
            {
              "title": "2007",
              "value": "2007"
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
              "title": "更早（1959年以前）",
              "value": "older"
            }
          ]
        },
        {
          "name": "sort",
          "title": "排序",
          "type": "enumeration",
          "value": "R",
          "enumOptions": [
            {
              "title": "最热",
              "value": "U"
            },
            {
              "title": "最新",
              "value": "R"
            },
            {
              "title": "高分",
              "value": "S"
            },
            {
              "title": "评价最多",
              "value": "V"
            }
          ]
        },
        {
          "name": "pageSize",
          "title": "每页有效影片",
          "type": "enumeration",
          "value": "200",
          "enumOptions": [
            {
              "title": "20",
              "value": "20"
            },
            {
              "title": "40",
              "value": "40"
            },
            {
              "title": "60",
              "value": "60"
            },
            {
              "title": "100",
              "value": "100"
            },
            {
              "title": "200",
              "value": "200"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page",
          "value": "1"
        }
      ],
      "requiresWebView": false,
      "cacheDuration": 1800
    },
    {
      "id": "rowCharts",
      "title": "🔥 豆瓣榜单",
      "functionName": "rowCharts",
      "description": "21个豆瓣与IMDb榜单，原榜排名、完整显示，不参与首页去重；默认匹配TMDB身份，海报与资源都能载入。",
      "params": [
        {
          "name": "priority",
          "title": "展示偏好",
          "type": "enumeration",
          "value": "off",
          "enumOptions": [
            {
              "title": "国产优先",
              "value": "domestic"
            },
            {
              "title": "来源原排序",
              "value": "off"
            }
          ]
        },
        {
          "name": "sub",
          "title": "榜单",
          "type": "enumeration",
          "value": "db_hot_tv",
          "enumOptions": [
            {
              "title": "近期热门剧集",
              "value": "db_hot_tv"
            },
            {
              "title": "热门电影",
              "value": "db_hot_movie"
            },
            {
              "title": "华语口碑剧集榜",
              "value": "db_weekly"
            },
            {
              "title": "全球口碑剧集榜",
              "value": "db_global_weekly"
            },
            {
              "title": "国内口碑综艺榜",
              "value": "db_show_domestic"
            },
            {
              "title": "国外口碑综艺榜",
              "value": "db_show_foreign"
            },
            {
              "title": "豆瓣 Top 250",
              "value": "db_classics"
            },
            {
              "title": "实时热门剧集",
              "value": "db_tv_realtime"
            },
            {
              "title": "热门国产剧",
              "value": "db_tv_domestic"
            },
            {
              "title": "热门美剧",
              "value": "db_tv_american"
            },
            {
              "title": "热门韩剧",
              "value": "db_tv_korean"
            },
            {
              "title": "热门日剧",
              "value": "db_tv_japanese"
            },
            {
              "title": "热门动画",
              "value": "db_tv_animation"
            },
            {
              "title": "热门综艺",
              "value": "db_show_hot"
            },
            {
              "title": "实时热门电影",
              "value": "db_movie_realtime"
            },
            {
              "title": "院线热映",
              "value": "db_movie_showing"
            },
            {
              "title": "一周口碑电影榜",
              "value": "db_movie_weekly"
            },
            {
              "title": "第97届奥斯卡",
              "value": "db_oscar"
            },
            {
              "title": "IMDb 电影 Top 250",
              "value": "db_imdb_movie"
            },
            {
              "title": "IMDb 剧集 Top 250",
              "value": "db_imdb_tv"
            },
            {
              "title": "意外结局电影",
              "value": "db_twist"
            }
          ]
        },
        {
          "name": "catalog",
          "title": "片单模式",
          "type": "enumeration",
          "value": "tmdb",
          "enumOptions": [
            {
              "title": "豆瓣原榜（需密钥）",
              "value": "auto"
            },
            {
              "title": "原始豆瓣身份",
              "value": "douban"
            },
            {
              "title": "TMDB身份（默认）",
              "value": "tmdb"
            }
          ]
        },
        {
          "name": "dedupe",
          "title": "首页去重",
          "type": "enumeration",
          "value": "off",
          "enumOptions": [
            {
              "title": "开启（不重复）",
              "value": "on"
            },
            {
              "title": "关闭",
              "value": "off"
            }
          ]
        },
        {
          "name": "pageSize",
          "title": "每页有效影片",
          "type": "enumeration",
          "value": "200",
          "enumOptions": [
            {
              "title": "20",
              "value": "20"
            },
            {
              "title": "40",
              "value": "40"
            },
            {
              "title": "60",
              "value": "60"
            },
            {
              "title": "100",
              "value": "100"
            },
            {
              "title": "200",
              "value": "200"
            }
          ]
        },
        {
          "name": "page",
          "title": "页码",
          "type": "page",
          "value": "1"
        }
      ],
      "requiresWebView": false,
      "cacheDuration": 3600
    }
  ]
};

var RexHomeDefaultPriority='domestic';

function rexHomeDomesticChartSubject(row){
 var parts=String(row.card_subtitle||'').split('/').map(function(x){return x.trim();});
 var country=parts[/^\d{4}$/.test(parts[0])?1:0]||'';
 // 只读结构化副标题的出品地区段，不从片名、剧情或演员判断国别。
 return /(?:^|[\s,，、])(?:中国大陆|中國大陸|大陆|大陸)(?:$|[\s,，、])/.test(country);
}

function rexHomeDomesticChartMapper(mapper){
 var base=mapper||rexHomeSimpleMatchRows;
 var run=async function(rows,media,label,audit,range){
  var domestic=rows.filter(rexHomeDomesticChartSubject);
  audit.priorityCountryExcludedSubjects=(audit.priorityCountryExcludedSubjects||0)+rows.length-domestic.length;
  return base(domestic,media,label,audit,range);
 };
 run.rexHomeIdentity=(mapper&&mapper.rexHomeIdentity||'douban.strict')+'.domestic';
 run.rexHomeMode=mapper&&mapper.rexHomeMode||(!mapper?'tmdb':undefined);
 run.rexHomeBatchSize=mapper&&mapper.rexHomeBatchSize||(!mapper?RexHomeSimpleReadPolicy.matchBatchSize:20);
 return run;
}

function rexHomeSeqObserve(data,ps,observer,cacheHit){
 var items=rexHomeSeqPageItems(data,ps);
 if(typeof observer==='function')observer({done:data.done===true,knownItems:data.items.length,scanCapped:data.scanCapped===true,
  scanLimited:data.scanLimited===true,readError:data.readError||null,stats:data.stats?Object.assign({},data.stats):{},
  requests:cacheHit?0:Number(data.stats&&data.stats.pagesReadInCall)||0});
 return items;
}

async function rexHomePriorityRow(key,params){
 params=rexHomePublicPageParams(params);var mode=String(params.priority||RexHomeDefaultPriority);
 if(['domestic','off'].indexOf(mode)<0)throw new Error('请选择有效的国产优先设置');
 var loaders={rowSeries:rexHomeRowSeries,rowMovie:rexHomeRowMovie,rowAnime:rexHomeRowAnime,rowVariety:rexHomeRowVariety,
  rowDocumentary:rexHomeRowDocumentary,rowConcert:rexHomeRowConcert,rowCharts:rexHomeRowCharts};
 var load=loaders[key];if(!load)throw new Error('请选择有效的分类');
 // 明确指定地区或历史音乐名单时，保留用户的筛选，不改成其他地区。
 if(mode==='off'||params.region||key==='rowConcert'&&(params.catalog==='found'||params.category==='gala'))return load(params);
 var ps=rexHomeSimplePage(params),scope={};
 Object.keys(params).sort().forEach(function(k){if(['sk','page','pageSize','priority','rexHomeSequenceObserver','rexHomeDomesticTier'].indexOf(k)<0)scope[k]=params[k];});
 var secret=String(params.sk||'').trim();if(secret)scope.bridgeScope=rexHomeBridgeCacheScope(secret);
 return rexHomeSeqList(RexHomeVer+':priority.domestic.'+key+':'+rexHomeStable(scope),300000,
  {page:ps.page,pageSize:ps.size},async function(prev){
  var items=prev?prev.items.slice():[],tier=prev?prev.tier:0,sourcePage=prev?prev.sourcePage:1,consumed=prev?prev.consumed:0;
  var seen=Object.create(null);items.forEach(function(item){seen[rexHomeBridgeIdentity(item)]=true;});
  var stats=Object.assign({validUniqueMovies:0,domesticAccepted:0,supplementalAccepted:0,scannedRecords:0,
   sourceReportedTotal:null,domesticScannedRecords:0,supplementalScannedRecords:0,priorityCountry:'CN',countUnit:'国产优先后按完整媒体身份去重的影片'},prev&&prev.stats||{});
  var started=Date.now(),requests=0,steps=0,readError=null,stop='',capped=false;
  var minimumNeed=(ps.page-1)*ps.size+Math.min(ps.size,RexHomeMinimumReadPolicy.items);
  // v138：剧集只出大陆剧，不用全地区补充，避免与地区专行重复。
  var maxTier=key==='rowSeries'?1:2;
  while(tier<maxTier&&items.length<ps.page*ps.size){
   var filling=items.length<minimumNeed;
   if(Date.now()-started>=(filling?RexHomeMinimumReadPolicy.scanTimeMs:RexHomeSimpleReadPolicy.scanTimeMs)){stop='time-budget';break;}
   if(steps>=60||requests>=(filling?RexHomeMinimumReadPolicy.sourceRequests:RexHomeSimpleScanPageBudget)){stop='page-budget';break;}
   var snapshot=null,next=Object.assign({},params,{priority:'off',page:sourcePage,pageSize:20,
    region:tier===0&&key!=='rowCharts'?'大陆':'',rexHomeDomesticTier:tier===0&&key==='rowCharts',
    rexHomeSequenceObserver:function(value){snapshot=value;}});
   try{
    var batch=await load(next);steps++;
    if(!snapshot)throw new Error('国产优先的分页状态缺失，请刷新重试');
    requests+=snapshot.requests;
    var scannedKey=tier===0?'domesticScannedRecords':'supplementalScannedRecords';
    stats[scannedKey]=snapshot.stats.scannedRecords||0;
    for(var i=consumed;i<batch.length;i++){
     var item=batch[i],identity=rexHomeBridgeIdentity(item);if(seen[identity])continue;
     seen[identity]=true;items.push(item);stats[tier===0?'domesticAccepted':'supplementalAccepted']++;
    }
    consumed=batch.length;
    var completed=snapshot.done&&sourcePage*20>=snapshot.knownItems;
    if(completed){tier++;sourcePage=1;consumed=0;}
    else if(batch.length===20){sourcePage++;consumed=0;}
    else{
     readError=snapshot.readError;capped=snapshot.scanCapped;stop=readError?'request-failed':capped?'source-cap':'source-pending';break;
    }
   }catch(error){readError={message:String(error&&error.message||error),code:error&&error.code||'REXHOME_PRIORITY_SOURCE'};stop='request-failed';break;}
  }
  var done=tier>=maxTier;stats.validUniqueMovies=items.length;stats.scannedRecords=stats.domesticScannedRecords+stats.supplementalScannedRecords;
  stats.sourceExhausted=done;stats.scanLimited=!done&&items.length<ps.page*ps.size;stats.minimumPageTarget=Math.min(ps.size,RexHomeMinimumReadPolicy.items);
  stats.pagesReadInCall=requests;stats.scanStopReason=stop;stats.scanElapsedMs=Date.now()-started;stats.lastReadError=readError;
  stats.priorityPhase=done?'读取完成':tier===0?'国产优先':'同类全地区补充';
  var label=key==='rowConcert'?'演唱会／音乐现场':key==='rowCharts'?'豆瓣榜单':RexHomeSimpleKinds[key].title.replace(/^\S+\s*/,'');
  if(typeof console!=='undefined'&&typeof console.log==='function')console.log('[国产优先 '+RexHomeVer+'] '+label+' · 国产'+stats.domesticAccepted+'条 · 同类补充'+stats.supplementalAccepted+'条');
  return {items:items,tier:tier,sourcePage:sourcePage,consumed:consumed,done:done,scanLimited:stats.scanLimited,
   scanCapped:capped,readError:readError,stats:stats,label:label+' · 国产优先',mediaType:key==='rowConcert'?'movie':key==='rowCharts'?(RexHomeSimpleCharts[params.sub||'db_hot_tv']||{media:'all'}).media:String(params.media||RexHomeSimpleKinds[key].media)};
 },null);
}


// Rex首页 v151 — Rex / Forward 共用原始JS。
// 默认分类来自TMDB片库；豆瓣榜单保留原榜来源，旧平台与剧场入口仅用于兼容。
// Pagination counts valid unique videos and never broadens classification to fill a page.
// UI/API references: InchStudio/ForwardWidgets, huangxd-/ForwardWidgets,
// baranwang/rex-widget-libs, baranwang/douban-bridge.
// Brand URL identity and category-to-list navigation follow rex-widget-libs/env/video.ts.
// Curated-list sorting/pagination reviewed against MakkaPakka518/FW/Automated-List.js.
// Theater membership data: 2kuai/ForwardWidgets, Douban lists 128396349 / 158539495 / 155026800.
// Rex 官方接口核对：rex-widget-libs @ 2b7430712e294a173c7f29bef9730ba4ca03ce46。
// 首页模块返回 VideoItem[]；播放解析须另注册 type:'stream'、id:'loadResource' 并返回 StreamSourceItem[]。
// 本脚本只导出首页片单；TMDB资料不当作播放地址，保留用户已验证的纯数字编号与 mediaType。
// enumOptions 依照官方参数声明、示例及类型生成器保留。

var RexHomeVer='v151';

var RexHomeTopVotes={west:300,jk:300,all:300,base:30};

var RexHomeYearNow=new Date().getFullYear(),RexHomeDecade=Math.floor(RexHomeYearNow/10)*10;



var RexHomeBrands=[
 {k:'tencent',title:'腾讯视频',network:2007,logo:'/6Lfll43wYG2eyereOBjpYFRSGs4.png'},
 {k:'iqiyi',title:'爱奇艺',network:1330,logo:'/fNxBFqWr7eWEgNeBDvvCxsSItXx.png'},
 {k:'mango',title:'芒果TV',network:1631,logo:'/iE3rtBcUfWGiJosaZv2TroBxEZz.png'},
 {k:'bilibili',title:'哔哩哔哩',network:1605,logo:'/cdRh1NZIUaqDUhwjgqWbp6zhWHK.png'},
 {k:'youku',title:'优酷',network:1419,logo:''},
 {k:'miwu',title:'迷雾剧场',theater:{network:1330,genres:'9648|80'},logo:'/fNxBFqWr7eWEgNeBDvvCxsSItXx.png'},
 {k:'baiye',title:'白夜剧场',theater:{network:1419,genres:'9648|80'},logo:'/w2TeR3fvPZ9a617tNIF1oOfyPtk.png'},
 {k:'xjuchang',title:'X剧场',theater:{network:2007,genres:'9648|80'},logo:'/6Lfll43wYG2eyereOBjpYFRSGs4.png'},
 {k:'zhengwu',title:'正午阳光',theater:{company:148869},logo:''},
 {k:'netflix',title:'Netflix',network:213,logo:'/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'},
 {k:'prime',title:'Prime Video',network:1024,logo:'/w7HfLNm9CWwRmAMU58udl2L7We7.png'},
 {k:'disneyplus',title:'Disney+',network:2739,logo:'/1edZOYAfoyZyZ3rklNSiUpXX30Q.png'},
 {k:'apple',title:'Apple TV+',network:2552,logo:'/bngHRFi794mnMq34gfVcm9nDxN1.png'},
 {k:'max',title:'HBO',network:'49|3186',logo:'/tuomPhY2UtuPTqqFnKMVHvSb724.png'},
 {k:'hulu',title:'Hulu',network:453,logo:'/pqUTCleNUiTLAVlelGxUgWn1ELh.png'},
 {k:'paramountplus',title:'Paramount+',network:4330,logo:'/fi83B1oztoS47xxcemFdPMhIzK.png'},
 {k:'disney',title:'迪士尼',company:2,logo:'/wdrCwmRnLFJhEoH8GSfymY85KHT.png'},
 {k:'pixar',title:'皮克斯',company:3,logo:'/1TjvGVDMYsj6JBxOAkUHpPEwLf7.png'},
 {k:'warner',title:'华纳兄弟',company:174,logo:'/zhD3hhtKB5qyv7ZeL4uLpNxgMVU.png'},
 {k:'universal',title:'环球影业',company:33,logo:'/8lvHyhjr8oUKOOy2dKXoALWKdp0.png'},
 {k:'paramount',title:'派拉蒙',company:4,logo:'/jay6WcMgagAklUt7i9Euwj1pzTF.png'},
 {k:'columbia',title:'哥伦比亚',company:5,logo:'/71BqEFAF4V3qjjMPCpLuyJFB9A.png'},
 {k:'century',title:'二十世纪影业',company:'127928|25',logo:'/h0rjX5vjW5r8yEnUBStFarjcLT4.png'}
];

var RexHomeBrandGroups={
 domestic:{title:'国内平台 · 剧集',param:'domesticPlatform',keys:['tencent','iqiyi','youku','mango','bilibili']},
 overseas:{title:'海外平台 · 剧集',param:'overseasPlatform',keys:['netflix','prime','disneyplus','apple','max','hulu','paramountplus']},
 theaters:{title:'品牌剧场',param:'theater',keys:['miwu','baiye','xjuchang']},
 studios:{title:'出品公司',param:'studio',keys:['zhengwu','disney','pixar','warner','universal','paramount','columbia','century']}
};

function rexHomeBrandGroup(key){
 var names=Object.keys(RexHomeBrandGroups);
 for(var i=0;i<names.length;i++)if(RexHomeBrandGroups[names[i]].keys.indexOf(key)>=0)return names[i];
 return null;
}


function rexHomeHomepageYear(value){
 var v=String(value==null||value===''?'all':value).trim();
 // 兼容旧首页保存的参数；旧的固定年份下限不再限制本版内容。
 if(v==='all'||v==='from2026')return {gte:'',lte:'',label:'全部年份'};
 // v132：近一年滚动窗口；剧集按播出日期（含老剧新季）判断。
 if(v==='recent'){var now=new Date(),past=new Date(now.getTime()-now.getTimezoneOffset()*60000-365*86400000);return {gte:past.toISOString().slice(0,10),lte:'',label:'近一年',recent:true};}
 // v131：年代与“更早”，与豆瓣的年代标签一致。
 if(/^\d{3}0s$/.test(v)){var d=Number(v.slice(0,4));if(d<1900)throw new Error('请选择有效的年代');return {gte:d+'-01-01',lte:(d+9)+'-12-31',label:(d>=2000?d:d%100)+'年代'};}
 if(v==='older')return {gte:'',lte:'1959-12-31',label:'更早'};
 if(!/^\d{4}$/.test(v)||Number(v)<1)throw new Error('请选择四位有效年份、年代，或选择全部年份');
 return {gte:v+'-01-01',lte:v+'-12-31',label:v+'年'};
}
function rexHomeHomepageDateAllowed(value,range){
 var date=rexHomeDate(value);range=range||rexHomeHomepageYear();
 return !!date&&date>=range.gte&&(!range.lte||date<=range.lte);
}
async function rexHomeHomepageTmdbRows(spec,rows){
 var media=spec.media==='movie'?'movie':'tv';
 return (await rexHomeMapLimited(rows,async function(x){
  if(!x||!rexHomeValidId(x.id)||!rexHomeImage(x.poster_path))return null;
  var date=rexHomeDate(media==='movie'?x.release_date:x.first_air_date);
  var range=spec.yearSpan?{gte:spec.yearSpan.gte||'',lte:spec.yearSpan.lte||''}:rexHomeHomepageYear();
  if(rexHomeHomepageDateAllowed(date,range))return x;
  if(media==='movie')return null;
  var detail=await rexHomeApi('/tv/'+x.id,{language:'zh-CN'},86400000),today=rexHomeToday();
  
  var seasons=(Array.isArray(detail.seasons)?detail.seasons:[]).filter(function(s){return s&&Number(s.season_number)>0&&rexHomeHomepageDateAllowed(s.air_date,range)&&s.air_date<=today;});
  seasons.sort(function(a,b){return String(b.air_date).localeCompare(String(a.air_date));});
  if(!seasons.length)return null;
  var season=seasons[0];
  return Object.assign({},x,{first_air_date:season.air_date,overview:'第'+season.season_number+'季首播：'+season.air_date+'\n'+(x.overview||'')});
 },4)).filter(Boolean);
}


var RexHomeSimpleKinds={
 rowSeries:{title:'📺 剧集',media:'tv',form:'电视剧',genres:['喜剧','爱情','悬疑','动画','武侠','古装','家庭','犯罪','科幻','恐怖','历史','战争','动作','冒险','传记','剧情','奇幻','惊悚','灾难','歌舞','音乐','都市','青春','谍战','刑侦','宫斗','职场']},
 rowMovie:{title:'🎬 电影',media:'movie',form:'',genres:['喜剧','爱情','动作','科幻','动画','悬疑','犯罪','惊悚','冒险','音乐','历史','奇幻','恐怖','战争','传记','歌舞','武侠','灾难','西部','纪录片','短片']},
 rowAnime:{title:'🌸 动漫',media:'all',genre:'动画',selectMedia:true,genres:[]},
 rowVariety:{title:'🎤 综艺',media:'tv',form:'综艺',genres:['真人秀','脱口秀','音乐','歌舞']},
 rowDocumentary:{title:'🎞️ 纪录片',media:'all',genre:'纪录片',selectMedia:true,genres:['自然','历史','美食','科技','太空']}
};

var RexHomeSimpleRegions=['','华语','大陆','香港','台湾','欧美','国外','日本','韩国','美国','英国','泰国','印度','法国','德国','加拿大','澳大利亚','港台','新马','西班牙','土耳其'];

var RexHomeSimpleSorts=[{title:'原排序',value:'T'},{title:'近期热度',value:'U'},{title:'首映／首播时间',value:'R'},{title:'高分优先',value:'S'}];



var RexHomeSimpleCharts={
 db_hot_tv:{id:'tv_hot',media:'tv',title:'近期热门剧集'},
 db_hot_movie:{id:'movie_hot_gaia',media:'movie',title:'热门电影'},
 db_weekly:{id:'tv_chinese_best_weekly',media:'tv',title:'华语口碑剧集榜'},
 db_global_weekly:{id:'tv_global_best_weekly',media:'tv',title:'全球口碑剧集榜'},
 db_show_domestic:{id:'show_chinese_best_weekly',media:'tv',title:'国内口碑综艺榜'},
 db_show_foreign:{id:'show_global_best_weekly',media:'tv',title:'国外口碑综艺榜'},
 db_classics:{id:'movie_top250',media:'movie',title:'豆瓣 Top 250'},
 db_tv_realtime:{id:'tv_real_time_hotest',media:'tv',title:'实时热门剧集'},
 db_tv_domestic:{id:'tv_domestic',media:'tv',title:'热门国产剧'},
 db_tv_american:{id:'tv_american',media:'tv',title:'热门美剧'},
 db_tv_korean:{id:'tv_korean',media:'tv',title:'热门韩剧'},
 db_tv_japanese:{id:'tv_japanese',media:'tv',title:'热门日剧'},
 db_tv_animation:{id:'tv_animation',media:'tv',title:'热门动画'},
 db_show_hot:{id:'show_hot',media:'tv',title:'热门综艺'},
 db_movie_realtime:{id:'movie_real_time_hotest',media:'movie',title:'实时热门电影'},
 db_movie_showing:{id:'movie_showing',media:'movie',title:'院线热映'},
 db_movie_weekly:{id:'movie_weekly_best',media:'movie',title:'一周口碑电影榜'},
 db_oscar:{id:'EC7I7ZDRA',media:'movie',title:'第97届奥斯卡'},
 db_imdb_movie:{id:'doulist.1518184',doulist:'1518184',media:'movie',title:'IMDb 电影 Top 250'},
 db_imdb_tv:{id:'doulist.41573512',doulist:'41573512',media:'tv',title:'IMDb 剧集 Top 250'},
 db_twist:{id:'doulist.11324',doulist:'11324',media:'movie',title:'意外结局电影'}
};


function rexHomeSimplePage(params){
 var page=Number(params.page==null||params.page===''?1:params.page),size=Number(params.pageSize==null||params.pageSize===''?20:params.pageSize);
 if(!Number.isSafeInteger(page)||page<1||page>10000)throw new Error('页码必须为 1 至 10000 的整数');
 if([20,40,60,100,200].indexOf(size)<0)throw new Error('请选择有效的片量');
 return {page:page,size:size};
}

function rexHomeSimpleRows(data){
 var rows=data&&(data.subject_collection_items||data.items);
 if(!Array.isArray(rows))throw new Error('豆瓣片单格式异常，请稍后重试');
 return rows.filter(function(x){return x&&typeof x==='object'&&rexHomeValidId(x.id)&&typeof x.title==='string'&&x.title.trim();});
}

async function rexHomeDoubanListGet(url){
 var data=await rexHomeDoubanGet(url);rexHomeSimpleRows(data);return data;
}

async function rexHomeSimpleMatchRows(rows,media,label,audit,range){
 range=range||rexHomeHomepageYear();var excluded=0;
 var cards=await rexHomeMapLimited(rows,async function(row){
  if(row.type&&(row.type==='movie'||row.type==='tv')&&row.type!==media)return null;
  var year=row.year||(String(row.card_subtitle||'').match(/(?:^|\s)(\d{4})(?:\s|\/|$)/)||[])[1]||'';
  if(/^\d{4}$/.test(String(year))&&(String(year)<range.gte.slice(0,4)||(range.lte&&String(year)>range.lte.slice(0,4)))){excluded++;return null;}
  var match=await rexHomeDoubanAnyMatch({id:String(row.id),title:row.title,original_title:row.original_title||'',year:year},media);
  var card=rexHomeMatchedCard(match,media,row.title,'豆瓣 · '+label);
  if(card){
   if(match.effectiveDate)card.releaseDate=match.effectiveDate;
   if(!rexHomeHomepageDateAllowed(card.releaseDate,range)){excluded++;return null;}
   var isSeason=media==='tv'&&(match.seasonExplicit||match.season>1),ratingSource=row.rating||{};
   if(isSeason){
    var parentRating=card.rating,seasonRating=rexHomeCountedRating(ratingSource.value,ratingSource.count,ratingSource.max);
    delete card.rating;
    card.description=(seasonRating!=null?'豆瓣本季评分：'+seasonRating+'\n':'')+(parentRating!=null?'TMDB整剧评分：'+parentRating+'（不是本季评分）\n':'')+(card.description||'');
   }
   card.title=row.title;card.description='豆瓣片名：'+row.title+'\n'+(isSeason?'第'+match.season+'季首播：'+card.releaseDate+'\n':'')+(card.description||'');
  }
  return card;
 },8);
 var valid=cards.filter(Boolean);
 if(audit){audit.matchedSubjects+=valid.length;audit.unmatchedSubjects+=rows.length-valid.length-excluded;audit.yearExcludedSubjects=(audit.yearExcludedSubjects||0)+excluded;}
 return rexHomeUnique(valid,[rexHomeKeyId]);
}

// R排序由豆瓣来源提供；逐页续读同一查询，不混入其他类别，也不重排已经展示的页。
var RexHomeSimpleScanPageBudget=6,RexHomeSimpleSourceLimit=10000;
// v145：豆瓣片单逐部匹配 TMDB，一批 8 部同时进行（原本 2 部，网络慢时一页排不满）。
var RexHomeSimpleReadPolicy={scanTimeMs:2500,matchBatchSize:8};
// 普通预算到期但当前页不足20条时，继续有限补页；来源不足或连接失败不凑数。
// v131：补页目标改为整页（最多200条），来源读完、失败或预算到期才停；刷新会从游标续读。
var RexHomeMinimumReadPolicy={items:200,scanTimeMs:15000,sourceRequests:60};

async function rexHomeSimpleSourceSequence(key,params,fetchPage,media,label,rowMapper,yearRange){
 var ps=rexHomeSimplePage(params),range=yearRange||rexHomeHomepageYear(params.year);
 key+=':years.'+range.gte+'.'+range.lte;
 var bridgeIdentity=rowMapper&&String(rowMapper.rexHomeIdentity||'').indexOf('bridge.')===0;
 if(rowMapper)key+=':identity.'+(rowMapper.rexHomeIdentity||'douban');
 var identityKey=bridgeIdentity||media==='all'?rexHomeBridgeIdentity:rexHomeKeyId;
 return rexHomeSeqList(RexHomeVer+':douban.sequence.'+key,bridgeIdentity?300000:3600000,{page:ps.page,pageSize:ps.size,observer:params.rexHomeSequenceObserver},async function(prev){
  var items=prev?prev.items.slice():[],offset=prev?prev.offset:0,seen=Object.assign({},prev&&prev.sourceSeen||{}),done=prev?prev.done:false;
  var stats=prev?Object.assign({},prev.stats):{sourceReportedTotal:null,scannedRecords:0,invalidSubjects:0,duplicateSourceSubjects:0,matchedSubjects:0,unmatchedSubjects:0,uniqueSourceSubjects:0,validUniqueMovies:0,duplicateMovies:0,sourceExhausted:false,scanLimited:false};
  if(fetchPage.rexHomePairedMedia&&prev&&prev.mediaProgress){['tv','movie'].forEach(function(m){var old=prev.mediaProgress[m];if(old)fetchPage.rexHomeState[m]={done:old.done===true,total:typeof old.total==='number'&&Number.isSafeInteger(old.total)&&old.total>=0?old.total:null,next:Number.isSafeInteger(old.next)&&old.next>0?old.next:undefined,buf:Array.isArray(old.buf)?old.buf.slice():undefined};});}
  var pages=0,started=Date.now(),stopReason='',readError=null;
  var minimumNeed=(ps.page-1)*ps.size+Math.min(ps.size,RexHomeMinimumReadPolicy.items);
  // Keep a partially matched source page, so refresh resumes without skipping or reordering subjects.
  var pending=prev&&prev.pendingSourcePage?Object.assign({},prev.pendingSourcePage):null;
  while(!done&&items.length<ps.page*ps.size&&offset<RexHomeSimpleSourceLimit){
   var fillingMinimum=items.length<minimumNeed;
   if(Date.now()-started>=(fillingMinimum?RexHomeMinimumReadPolicy.scanTimeMs:RexHomeSimpleReadPolicy.scanTimeMs)){stopReason='time-budget';break;}
   if(!pending&&pages>=(fillingMinimum?RexHomeMinimumReadPolicy.sourceRequests:RexHomeSimpleScanPageBudget)){stopReason='page-budget';break;}
   try{
    if(!pending){
     var data=await fetchPage(offset),original=data&&(data.subject_collection_items||data.items),rows=rexHomeSimpleRows(data);
     var total=data.total!=null?data.total:data.total_count;
     if(total!==''&&total!=null&&Number.isSafeInteger(Number(total))&&Number(total)>=0){
      if(Number(total)>=(fetchPage.rexHomePairedMedia?stats.scannedRecords:offset)+original.length)stats.sourceReportedTotal=Number(total);
      else{stats.sourceReportedTotal=null;stats.sourceTotalInconsistent=true;}
     }
     stats.scannedRecords+=original.length;stats.invalidSubjects+=original.length-rows.length;pages+=fetchPage.rexHomePairedMedia||fetchPage.rexHomeExplicitMore?data.rexHomeRequestCount:1;
     pending={rows:rows,cursor:0,sourceLength:original.length};
     if(fetchPage.rexHomePairedMedia||fetchPage.rexHomeExplicitMore){if(typeof data.rexHomeHasMore!=='boolean')throw new Error('混合分类续读状态异常');pending.hasMore=data.rexHomeHasMore;}
    }
    var end=Math.min(pending.rows.length,pending.cursor+(rowMapper?(rowMapper.rexHomeBatchSize||pending.rows.length):RexHomeSimpleReadPolicy.matchBatchSize));
    var chunk=pending.rows.slice(pending.cursor,end),chunkSeen=Object.create(null),duplicateSubjects=0;
    chunk=chunk.filter(function(row){var id=(media==='all'?String(row.rexHomeSourceMedia)+':':'')+String(row.id);if(seen[id]||chunkSeen[id]){duplicateSubjects++;return false;}chunkSeen[id]=true;return true;});
    // Commit a batch only when every match resolves. Transport failures remain retryable, never cached as no-match.
    var batchStats=Object.assign({},stats),matched=await (rowMapper||rexHomeSimpleMatchRows)(chunk,media,label,batchStats,range);
    stats=batchStats;stats.duplicateSourceSubjects+=duplicateSubjects;
    Object.keys(chunkSeen).forEach(function(id){seen[id]=true;});
    items=rexHomeUnique(items.concat(matched),[identityKey]);pending.cursor=end;
    if(pending.cursor>=pending.rows.length){
     var length=pending.sourceLength,hasMore=pending.hasMore;pending=null;offset+=20;
     done=fetchPage.rexHomePairedMedia||fetchPage.rexHomeExplicitMore?!hasMore:stats.sourceReportedTotal!=null?offset>=stats.sourceReportedTotal:length<20;
    }
   }catch(error){readError={message:String(error&&error.message||error),code:error&&error.code||'REXHOME_SOURCE_READ_FAILED'};stopReason='request-failed';break;}
  }
  if(bridgeIdentity){stats.identityType='douban-bridge';stats.bridgeAcceptedSubjects=stats.matchedSubjects;stats.countUnit='完整模式返回并按身份去重的影片条目';}
  if(rowMapper&&!bridgeIdentity&&rowMapper.rexHomeMode!=='tmdb'){stats.identityType='douban';stats.countUnit='豆瓣分类条目（季度独立）';stats.nativeAcceptedSubjects=stats.matchedSubjects;stats.tmdbMatchedSubjects=0;}
  if(rowMapper&&rowMapper.rexHomeIdentity==='library'){stats.identityType='tmdb-library';stats.sourceName='TMDB分类片库';}
  if(media==='all'){stats.mediaScope='剧集＋电影';stats.orderScope='剧集与电影按排序方式交错合并';stats.countUnit='按身份类型、媒体形式与编号去重的分类条目';}
  stats.yearStart=range.gte;stats.yearEnd=range.lte;stats.yearExcludedSubjects=stats.yearExcludedSubjects||0;stats.uniqueSourceSubjects=Object.keys(seen).length;stats.validUniqueMovies=items.length;stats.duplicateMovies=stats.matchedSubjects-items.length;
  stats.sourceExhausted=done;stats.scanLimited=!done&&items.length<ps.page*ps.size;
  stats.pagesReadInCall=pages;stats.scanElapsedMs=Date.now()-started;stats.scanStopReason=stopReason;stats.lastReadError=readError;
  stats.pendingSourceSubjects=pending?pending.rows.length-pending.cursor:0;
  stats.minimumPageTarget=Math.min(ps.size,RexHomeMinimumReadPolicy.items);
  stats.validItemsOnRequestedPage=Math.max(0,Math.min(ps.size,items.length-(ps.page-1)*ps.size));
  stats.minimumPageTargetReached=stats.validItemsOnRequestedPage>=stats.minimumPageTarget;
  if(typeof console!=='undefined'&&typeof console.log==='function')console.log('[片单 '+RexHomeVer+'] '+label+' · 已确认'+items.length+'条 · 来源已读'+stats.scannedRecords+'条 · '+(readError?'请求失败，可刷新续读':done?'本次来源读取完成':items.length>=ps.page*ps.size?'本页已满，可翻下一页':'可刷新当前页续读'));
  return {items:items,offset:offset,pendingSourcePage:pending,sourceSeen:seen,done:done,stats:stats,label:label,mediaType:media,rawPages:fetchPage.rexHomePairedMedia?(prev&&prev.rawPages||0)+pages:offset/20,mediaProgress:fetchPage.rexHomePairedMedia?fetchPage.rexHomeState:undefined,scanLimited:stats.scanLimited,scanCapped:!done&&offset>=RexHomeSimpleSourceLimit,readError:readError};
 },null);
}


// 分类片库直接使用 TMDB 的发现接口；不把豆瓣片单逐部搜索成 TMDB 条目。
var RexHomeDefaultCatalog='library';
var RexHomeLibraryRegions={
 '华语':{include:['CN','HK','TW','MO']},'大陆':{include:['CN']},'香港':{include:['HK']},'台湾':{include:['TW']},
 '欧美':{include:['US','GB','CA','AU','IE','NZ','FR','DE','ES','IT','NL','BE','SE','DK','NO','FI','PL']},
 '国外':{exclude:['CN','HK','TW','MO']},'日本':{include:['JP']},'韩国':{include:['KR']},'美国':{include:['US']},
 '英国':{include:['GB']},'泰国':{include:['TH']},'印度':{include:['IN']},'法国':{include:['FR']},'德国':{include:['DE']},
 '加拿大':{include:['CA']},'澳大利亚':{include:['AU']},'港台':{include:['HK','TW','MO']},
 '新马':{include:['SG','MY']},'西班牙':{include:['ES']},'土耳其':{include:['TR']}
};
var RexHomeLibraryGenreIds={
 movie:{'喜剧':35,'爱情':10749,'动作':28,'科幻':878,'动画':16,'悬疑':9648,'犯罪':80,'惊悚':53,'冒险':12,'音乐':10402,'历史':36,'奇幻':14,'恐怖':27,'战争':10752,'西部':37,'纪录片':99},
 tv:{'喜剧':35,'爱情':18,'悬疑':9648,'动画':16,'家庭':10751,'犯罪':80,'剧情':18,'动作':10759,'冒险':10759}
};
var RexHomeLibraryKeywordNames={
 '演唱会':'concert','自然':'nature','历史':'history','美食':'food','科技':'technology','太空':'space','武侠':'wuxia','古装':'historical fiction',
 '传记':'biography','灾难':'disaster','歌舞':'musical','音乐':'music','短片':'short film','恐怖':'horror',
 '科幻':'science fiction','奇幻':'fantasy','惊悚':'thriller','战争':'war','爱情':'romance','真人秀':'reality show','脱口秀':'talk show',
 // v137：剧集新增类型，TMDB 没有对应类型，用多个关键词任一命中
 '都市':['urban life','city life','big city','metropolis'],'青春':['coming of age','youth','high school','campus'],
 '谍战':['spy','espionage','secret agent'],'刑侦':['detective','police procedural','criminal investigation','police'],
 '宫斗':['imperial court','palace intrigue','concubine','imperial harem'],'职场':['workplace','office','office life','career']
};

async function rexHomeLibraryKeyword(genre){
 var name=RexHomeLibraryKeywordNames[genre];if(!name)throw new Error('此类型暂不支持TMDB片库筛选，请选择全部类型');
 if(Array.isArray(name)){
  // v137：多个关键词，命中的用“或”合并；一个都没有才报错。
  var ids=[];
  for(var i=0;i<name.length;i++){try{ids.push(await rexHomeLibraryKeyword1(name[i]));}catch(e){}}
  if(!ids.length)throw new Error('TMDB暂无此类型的筛选，请选择全部类型');
  return ids.join('|');
 }
 return rexHomeLibraryKeyword1(name);
}
async function rexHomeLibraryKeyword1(name){
 var result=await rexHomeApi('/search/keyword',{query:name,page:1},86400000);
 if(!Array.isArray(result.results))throw new Error('TMDB类型筛选返回格式异常，请刷新重试');
 var matches=rexHomeUnique(result.results.filter(function(x){return x&&rexHomeValidId(x.id)&&typeof x.name==='string'&&x.name.trim().toLowerCase()===name;}),[rexHomeKeyId]);
 if(matches.length!==1)throw new Error('TMDB暂无此类型的唯一筛选，请选择全部类型');
 return String(matches[0].id);
}

async function rexHomeLibraryPlan(key,media,params){
 var kind=RexHomeSimpleKinds[key],genre=String(params.genre||''),region=String(params.region||''),sort=String(params.sort||'U');
 if(!kind||!['tv','movie'].includes(media)||!kind.selectMedia&&kind.media!==media)throw new Error('请选择有效的影片形式');
 if(genre&&kind.genres.indexOf(genre)<0)throw new Error('请选择有效的类型');
 if(RexHomeSimpleRegions.indexOf(region)<0)throw new Error('请选择有效的地区');
 if(!RexHomeSimpleSorts.some(function(x){return x.value===sort;})&&!(sort==='V'&&params.rexHomeBrowse))throw new Error('请选择有效的排序');
 var range=rexHomeHomepageYear(params.year),query={language:'zh-CN',include_adult:false},dateKey=media==='movie'?'primary_release_date':'first_air_date';
 if(media==='tv')query.include_null_first_air_dates=false;
 query[dateKey+'.lte']=range.lte&&range.lte<rexHomeToday()?range.lte:rexHomeToday();
 if(range.gte){if(range.recent&&media==='tv'){query['air_date.gte']=range.gte;query['air_date.lte']=rexHomeToday();}else query[dateKey+'.gte']=range.gte;}
 query.sort_by=sort==='R'?dateKey+'.desc':sort==='S'?'vote_average.desc':sort==='V'?'vote_count.desc':'popularity.desc';
 if(params.rexHomeNetwork&&media==='tv')query.with_networks=params.rexHomeNetwork;
 // 热度与最新不要求最低评价人数；高分排序保留评价人数门槛，避免单次评价占据榜首。
 query['vote_count.gte']=sort==='S'?10:0;
 // v132：各类互斥，避免同一部影片同时出现在剧集、电影、动漫、综艺与纪录片。
 var required=[],excluded=({rowSeries:[99,10764,10767,10763,16,10762,10766],rowMovie:[16,99],rowVariety:[16,99],rowDocumentary:[16],rowAnime:[99]})[key]||[];
 if(key==='rowAnime')required.push([16]);
 if(key==='rowDocumentary')required.push([99]);
 if(key==='rowVariety')required.push([10764,10767]);
 if(genre){
  var direct=RexHomeLibraryGenreIds[media][genre];
  if(key==='rowVariety'&&(genre==='真人秀'||genre==='脱口秀'))required.push([genre==='真人秀'?10764:10767]);
  else if(key==='rowDocumentary'||key==='rowVariety'||!direct||media==='tv'&&genre==='爱情')query.with_keywords=await rexHomeLibraryKeyword(genre);
  else required.push([direct]);
 }
 excluded=excluded.filter(function(id){return !required.some(function(ids){return ids.indexOf(id)>=0;});});
 if((key==='rowMovie'||key==='rowDocumentary')&&genre!=='音乐'&&genre!=='歌舞')query.without_keywords=RexHomeConcertKeywords;
 if(required.length)query.with_genres=required.map(function(ids){return ids.join('|');}).join(',');
 if(excluded.length)query.without_genres=excluded.join(',');
 var countries=region?RexHomeLibraryRegions[region]:null;
 if(countries&&countries.include)query.with_origin_country=countries.include.join('|');
 // 官方发现接口没有声明排除出品国参数；“国外”通过实际国家资料排除华语出品。
 return {key:key,media:media,query:query,range:range,required:required,excluded:excluded,countries:countries,label:kind.title.replace(/^\S+\s*/,'')};
}

function rexHomeLibraryOrigins(value){
 return Array.isArray(value)?value.filter(function(x){return typeof x==='string'&&/^[A-Z]{2}$/.test(x);}):[];
}

async function rexHomeLibraryCards(rows,plans,label,audit,range){
 var cards=await rexHomeMapLimited(rows,async function(row){
  var media=row.rexHomeSourceMedia,plan=plans[media];
  if(!plan||row.media_type&&row.media_type!==media){audit.wrongMediaSubjects=(audit.wrongMediaSubjects||0)+1;return null;}
  var genres=Array.isArray(row.genre_ids)?row.genre_ids.map(Number):[];
  if(!plan.required.every(function(ids){return ids.some(function(id){return genres.indexOf(id)>=0;});})||plan.excluded.some(function(id){return genres.indexOf(id)>=0;})){
   audit.wrongGenreSubjects=(audit.wrongGenreSubjects||0)+1;return null;
  }
  var date=rexHomeDate(media==='movie'?row.release_date:row.first_air_date);
  if(!date||date>rexHomeToday()||!(range.recent&&media==='tv')&&!rexHomeHomepageDateAllowed(date,range)){audit.yearExcludedSubjects=(audit.yearExcludedSubjects||0)+1;return null;}
  if(!rexHomeImage(row.poster_path)){audit.missingPosterSubjects=(audit.missingPosterSubjects||0)+1;return null;}
  if(plan.countries){
   var origins=rexHomeLibraryOrigins(row.origin_country);
   if(!origins.length){
    var detail=await rexHomeApi('/'+media+'/'+row.id,{language:'zh-CN'},86400000);
    if(!detail||Number(detail.id)!==Number(row.id))throw new Error('TMDB地区校验身份不一致，请刷新重试');
    origins=rexHomeLibraryOrigins(detail.origin_country);
    if(!origins.length)origins=rexHomeLibraryOrigins(Array.isArray(detail.production_countries)?detail.production_countries.map(function(x){return x&&x.iso_3166_1;}):[]);
   }
   if(!origins.length||plan.countries.include&&!origins.some(function(x){return plan.countries.include.indexOf(x)>=0;})||plan.countries.exclude&&origins.some(function(x){return plan.countries.exclude.indexOf(x)>=0;})){
    audit.regionExcludedSubjects=(audit.regionExcludedSubjects||0)+1;return null;
   }
  }
  var card=rexHomeMatchedCard({x:row},media,row.title,label);
  if(card)card.description='来源：TMDB分类片库\n'+(card.description||'');
  return card;
 },4);
 cards=cards.filter(Boolean);audit.matchedSubjects+=cards.length;return cards;
}

async function rexHomeLibraryList(key,params){
 params=rexHomePublicPageParams(params);var kind=RexHomeSimpleKinds[key],media=String(params.media||kind.media);
 rexHomeSimplePage(params);
 if(!['all','tv','movie'].includes(media)||!kind.selectMedia&&kind.media!==media)throw new Error('请选择有效的影片形式');
 var forms=media==='all'?['tv','movie']:[media],plans={};
 // 筛选计划先验证成功，才开始读取片库。
 for(var m of forms)plans[m]=await rexHomeLibraryPlan(key,m,params);
 var range=plans[forms[0]].range,label=plans[forms[0]].label,scope=rexHomeStable(forms.map(function(m){return [m,plans[m].query];}));
 var mapper=async function(rows,_media,name,audit,yearRange){return rexHomeLibraryCards(rows,plans,name,audit,yearRange);};
 mapper.rexHomeIdentity='library';mapper.rexHomeMode='tmdb';
 var read=async function(m,start){
  var page=start/20+1,data=await rexHomeApi('/discover/'+m,Object.assign({},plans[m].query,{page:page}),3600000);
  // v147：预读后面 3 页，一行 200 部不用一页一页等。
  var lastPage=typeof data.total_pages==='number'&&data.total_pages>0?Math.min(data.total_pages,500):page;
  for(var ahead=page+1;ahead<=Math.min(page+3,lastPage);ahead++)rexHomeApi('/discover/'+m,Object.assign({},plans[m].query,{page:ahead}),3600000).catch(function(){});
  var raw=data.results,total=typeof data.total_results==='number'&&Number.isSafeInteger(data.total_results)&&data.total_results>=0?data.total_results:null;
  var pages=typeof data.total_pages==='number'&&Number.isSafeInteger(data.total_pages)&&data.total_pages>=0?data.total_pages:null;
  var rows=raw.map(function(row){return row&&typeof row==='object'?Object.assign({},row,{title:rexHomeTitle(row,m),rexHomeSourceMedia:m}):row;});
  return {rows:rows,total:total,more:pages!=null?page<Math.min(pages,500):raw.length>=20&&page<500,requests:1};
 };
  var fetchPage=async function(start){
  if(forms.length===1){
   var only=fetchPage.rexHomeState[forms[0]],one=only.done?{rows:[],total:only.total,more:false,requests:0}:await read(forms[0],start);
   fetchPage.rexHomeState[forms[0]]={done:!one.more,total:one.total};
   var single={items:one.rows,rexHomeHasMore:one.more,rexHomeRequestCount:one.requests};if(one.total!=null)single.total=one.total;return single;
  }
  // v147：剧集与电影各自一条片单，按排序方式交错合并，整行保持「最新在前」等排序。
  var sort=String(params.sort||'U'),requests=0,items=[];
  var rank=function(row){
   if(sort==='R')return String(row.rexHomeSourceMedia==='movie'?row.release_date||'':row.first_air_date||'');
   var v=sort==='S'?row.vote_average:sort==='V'?row.vote_count:row.popularity;return Number(v)||0;
  };
  var better=function(x,y){var p=rank(x),q=rank(y);return typeof p==='string'?p>=q:p>=q;};
  var fill=async function(m){
   var st=fetchPage.rexHomeState[m];if(!Array.isArray(st.buf))st.buf=[];if(!st.next)st.next=1;
   if(st.buf.length||st.done)return;
   var got=await read(m,(st.next-1)*20);requests+=got.requests;st.next++;st.buf=got.rows.slice();st.total=got.total;st.done=!got.more;
  };
  while(items.length<20){
   await Promise.all(forms.map(fill));
   var ready=forms.filter(function(m){return fetchPage.rexHomeState[m].buf.length;});
   if(!ready.length)break;
   var pick=ready.reduce(function(best,m){return better(fetchPage.rexHomeState[m].buf[0],fetchPage.rexHomeState[best].buf[0])?m:best;});
   items.push(fetchPage.rexHomeState[pick].buf.shift());
   if(ready.length<forms.length&&forms.some(function(m){var st=fetchPage.rexHomeState[m];return !st.done&&!st.buf.length;}))continue;
  }
  var hasMore=forms.some(function(m){var st=fetchPage.rexHomeState[m];return st.buf.length>0||!st.done;});
  var result={items:items,rexHomeHasMore:hasMore,rexHomeRequestCount:requests};
  if(forms.every(function(m){return fetchPage.rexHomeState[m].total!=null;}))result.total=forms.reduce(function(n,m){return n+fetchPage.rexHomeState[m].total;},0);
  return result;
 };
 fetchPage.rexHomeExplicitMore=true;fetchPage.rexHomePairedMedia=media==='all';fetchPage.rexHomeState={tv:{done:false,total:null},movie:{done:false,total:null}};
 return rexHomeSimpleSourceSequence('library.'+key+':'+scope,params,fetchPage,media,label,mapper,range);
}


async function rexHomeSimpleRecommend(key,params,rowMapper){
 params=params||{};var kind=RexHomeSimpleKinds[key];if(!kind)throw new Error('请选择有效的分类');
 if(String(params.catalog||RexHomeDefaultCatalog)==='library')return rexHomeLibraryList(key,params);
 var ps=rexHomeSimplePage(params),media=String(params.media||kind.media),sort=String(params.sort||'U'),region=String(params.region==null?'':params.region),genre=String(params.genre||''),year=String(params.year||'all');
 if(year==='from2026')year='all';
 var catalog=String(params.catalog||RexHomeDefaultCatalog);
 if(['auto','tmdb','douban'].indexOf(catalog)<0)throw new Error('请选择有效的片单模式');
 if(rowMapper===undefined)rowMapper=catalog==='douban'?rexHomeDoubanNativeRows:catalog==='auto'&&String(params.sk||'').trim()?rexHomeBridgeMapper(String(params.sk).trim(),kind.title.replace(/^\S+\s*/,'')):null;
 if(['movie','tv','all'].indexOf(media)<0||(!kind.selectMedia&&media!==kind.media))throw new Error('请选择有效的影片形式');
 if(!RexHomeSimpleSorts.some(function(x){return x.value===sort;}))throw new Error('请选择有效的豆瓣排序');
 if(RexHomeSimpleRegions.indexOf(region)<0)throw new Error('请选择有效的豆瓣地区');
 if(genre&&kind.genres.indexOf(genre)<0)throw new Error('请选择有效的豆瓣类型');
 var yearRange=year==='all'?{gte:'',lte:'',label:'不限年份'}:rexHomeHomepageYear(year);
 var baseGenre=kind.genre||genre,tags=[];
 [kind.form,baseGenre,kind.genre?genre:'',region,year==='from2026'||year==='all'?'':/^\d{4}$/.test(year)?year:yearRange.recent?'':yearRange.label].forEach(function(x){if(x&&tags.indexOf(x)<0)tags.push(x);});
 var cats={'类型':baseGenre||'','地区':region,'形式':kind.form||''};
 var query='selected_categories='+encodeURIComponent(JSON.stringify(cats))+'&tags='+encodeURIComponent(tags.join(','))+'&sort='+sort+'&uncollect=false&score_range=0,10';
 if(media==='all')return rexHomeSimpleMixedRecommend(key,params,query,rowMapper,yearRange,[kind.title.replace(/^\S+\s*/,''),genre,region,yearRange.label].filter(Boolean).join(' · '));
 return rexHomeSimpleSourceSequence('recommend.'+key+':'+media+':'+query,params,function(start){
  return rexHomeCached(RexHomeVer+':douban.raw.'+key+':'+media+':'+query+':'+start,3600000,function(){return rexHomeDoubanListGet('https://m.douban.com/rexxar/api/v2/'+media+'/recommend?refresh=0&start='+start+'&count=20&'+query);},{memoryOnly:true});
 },media,[kind.title.replace(/^\S+\s*/,''),genre,region,yearRange.label].filter(Boolean).join(' · '),rowMapper,yearRange);
}

// 同一类别分别读取剧集和电影，每次各20条；不把电影改成剧集，也不伪造跨来源热度排名。
async function rexHomeSimpleMixedRecommend(key,params,query,rowMapper,range,label){
 var bridge=!!(rowMapper&&String(rowMapper.rexHomeIdentity||'').indexOf('bridge.')===0);
 var mode=bridge?'bridge':rowMapper?'douban':'tmdb';
 var mapper=async function(rows,media,name,audit,yearRange){
  var cards=[];
  for(var m of ['tv','movie']){
   var group=rows.filter(function(row){return row.rexHomeSourceMedia===m;});
   if(group.length)cards=cards.concat(await (rowMapper||rexHomeSimpleMatchRows)(group,m,name,audit,yearRange));
  }
  return cards;
 };
 mapper.rexHomeIdentity=bridge?rowMapper.rexHomeIdentity+'.mixed':'mixed.'+mode;
 mapper.rexHomeMode=mode;
 mapper.rexHomeBatchSize=mode==='tmdb'?RexHomeSimpleReadPolicy.matchBatchSize:40;
 var fetchPage=async function(start){
  var pages=await Promise.all(['tv','movie'].map(async function(media){
   var previous=fetchPage.rexHomeState[media];
   if(previous.done)return {rows:[],total:previous.total,more:false,requests:0};
   var data=await rexHomeCached(RexHomeVer+':douban.raw.'+key+':'+media+':'+query+':'+start,3600000,function(){
    return rexHomeDoubanListGet('https://m.douban.com/rexxar/api/v2/'+media+'/recommend?refresh=0&start='+start+'&count=20&'+query);
   },{memoryOnly:true});
   var raw=data.subject_collection_items||data.items,total=data.total!=null?data.total:data.total_count;
   var known=total!==''&&total!=null&&Number.isSafeInteger(Number(total))&&Number(total)>=0&&(Number(total)>=start+raw.length||raw.length===0&&Number(total)<=start);
   return {rows:raw.map(function(row){return row&&typeof row==='object'?Object.assign({},row,{rexHomeSourceMedia:media}):row;}),total:known?Number(total):null,more:known?start+20<Number(total):raw.length>=20,requests:1};
  }));
  // Commit both end states together: a failed half-pair must not discard the successful half on retry.
  ['tv','movie'].forEach(function(media,i){fetchPage.rexHomeState[media]={done:!pages[i].more,total:pages[i].total};});
  var result={items:pages[0].rows.concat(pages[1].rows),rexHomeHasMore:pages.some(function(page){return page.more;}),rexHomeRequestCount:pages[0].requests+pages[1].requests};
  if(pages.every(function(page){return page.total!=null;}))result.total=pages[0].total+pages[1].total;
  return result;
 };
 fetchPage.rexHomePairedMedia=true;
 fetchPage.rexHomeState={tv:{done:false,total:null},movie:{done:false,total:null}};
 return rexHomeSimpleSourceSequence('recommend.mixed.'+key+':'+query,params,fetchPage,'all',label,mapper,range);
}

async function rexHomeSimpleCollection(config,params){
 params=Object.assign({pageSize:100},params||{});rexHomeSimplePage(params);
 var catalog=String(params.catalog||'tmdb'),secret=String(params.sk||'').trim();
 if(['auto','douban','tmdb'].indexOf(catalog)<0)throw new Error('请选择有效的豆瓣榜单模式');
 // v143：没填豆瓣密钥的「豆瓣原榜」也匹配 TMDB 身份；豆瓣图片有防盗链，Rex 载不出海报，资源也对不上。只有选「原始豆瓣身份」才用豆瓣条目。
 var chartMapper=catalog==='auto'&&secret?rexHomeBridgeMapper(secret,config.title):catalog==='douban'&&!config.doulist?rexHomeDoubanNativeRows:null;
 if(params.rexHomeDomesticTier)chartMapper=rexHomeDomesticChartMapper(chartMapper);
 return rexHomeSimpleSourceSequence('collection.'+config.id,params,function(start){
  return rexHomeCached(RexHomeVer+':douban.collection.raw.'+config.id+':'+start,3600000,function(){return config.doulist?rexHomeDoulistGet(config.doulist,start):rexHomeDoubanListGet('https://m.douban.com/rexxar/api/v2/subject_collection/'+config.id+'/items?start='+start+'&count=20');},{memoryOnly:true});
 },config.media,config.title,chartMapper,{gte:'',lte:'',label:'原榜全部年份'});
}

function rexHomeNumericValue(value){
 if(typeof value==='number')return Number.isFinite(value)?value:null;
 if(typeof value!=='string'||!/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(value.trim()))return null;
 var number=Number(value);return Number.isFinite(number)?number:null;
}
function rexHomeCountedRating(value,count,max){
 var rating=rexHomeNumericValue(value),votes=rexHomeNumericValue(count);
 if(rating==null||rating<0||rating>10||!Number.isSafeInteger(votes)||votes<=0)return null;
 if(max!=null&&rexHomeNumericValue(max)!==10)return null;
 return rating;
}

function rexHomeSimpleSeason(title){
 var m=title.match(/^(.*?)\s*第([一二三四五六七八九十\d]+)季$/);if(!m)return {base:title,number:1,explicit:false};
 var s=m[2],n=Number(s),digits={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9};
 if(!/^\d+$/.test(s)){var p=s.split('十');n=p.length===2?(p[0]?digits[p[0]]:1)*10+(p[1]?digits[p[1]]:0):digits[s];}
 return {base:m[1].trim(),number:Number.isSafeInteger(n)&&n>0?n:0,explicit:true};
}

async function rexHomeSimpleMatch(row,media){
 var raw=String(row.title||'').trim(),year=String(row.year==null?'':row.year).trim(),season=media==='tv'?rexHomeSimpleSeason(raw):{base:raw,number:1};
 if(!raw||!season.number||!season.base)return {none:true};
 if(year&&!/^\d{4}$/.test(year))return {none:true};
 return rexHomeCached('douban.strict.'+RexHomeVer+':'+media+':'+rexHomeStable([row.id,raw,row.original_title||'',year]),21600000,async function(){
  var names=[rexHomeDoubanName(rexHomeT2S(season.base)),rexHomeDoubanName(rexHomeT2S(row.original_title||''))].filter(Boolean);
  var r=await rexHomeApi('/search/'+media,{query:season.base,language:'zh-CN',include_adult:false,page:1},86400000);
  if(!Array.isArray(r.results))throw new Error('影片匹配结果格式异常，请稍后重试');
  var seen={},candidates=r.results.filter(function(x){
   if(!x||!rexHomeValidId(x.id)||x.media_type&&x.media_type!==media||!rexHomeImage(x.poster_path)||seen[x.id])return false;
   if(![x.name,x.title,x.original_name,x.original_title].some(function(s){return names.indexOf(rexHomeDoubanName(rexHomeT2S(s||'')))>=0;}))return false;
   seen[x.id]=1;return true;
  }),valid=[],effectiveDates={};
  for(var i=0;i<candidates.length;i++){
   var x=candidates[i],date=String(media==='movie'?x.release_date:x.first_air_date);
   if(season.explicit){
    var detail=await rexHomeApi('/tv/'+x.id,{language:'zh-CN'},86400000);
    if(detail.id!=null&&Number(detail.id)!==Number(x.id))continue;
    var seasons=Array.isArray(detail.seasons)?detail.seasons:[];
    var hit=seasons.filter(function(s){return s&&Number(s.season_number)===season.number;})[0];
    if(!hit||!year||String(hit.air_date||'').slice(0,4)!==year)continue;date=hit.air_date;
   }else if(year&&Math.abs(Number(date.slice(0,4))-Number(year))>1)continue;
   var confirmedDate=rexHomeDate(date);if(!confirmedDate)continue;
   effectiveDates[x.id]=confirmedDate;valid.push(x);
  }
  // v145：豆瓣年份与 TMDB 首播年份常差一年；同名多部时选年份最接近、热度最高的一部。
  if(valid.length>1&&year){var gap=function(x){return Math.abs(Number(String(effectiveDates[x.id]).slice(0,4))-Number(year));};
   valid.sort(function(p,q){return gap(p)-gap(q)||(Number(q.popularity)||0)-(Number(p.popularity)||0);});
   if(gap(valid[0])<gap(valid[1])||(Number(valid[0].popularity)||0)>(Number(valid[1].popularity)||0)*2)valid=[valid[0]];}
  return valid.length===1?{x:valid[0],season:season.number,seasonExplicit:!!season.explicit,effectiveDate:effectiveDates[valid[0].id]}:{none:true};
 },{memoryOnly:true});
}

async function rexHomeSimpleBanner(params){
 params=params||{};var cat=String(params.cat||'all'),sort=String(params.sort||'U'),size=params.size==null?20:Number(params.size);
 if(['all','tv','movie'].indexOf(cat)<0||[10,15,20].indexOf(size)<0)throw new Error('请选择有效的轮播设置');
 var tv=[],movie=[],failure=null,p={region:String(params.rexHomeBannerRegion||''),year:String(params.year||'recent'),sort:sort,pageSize:20,page:1,sk:params.sk,catalog:params.catalog||RexHomeDefaultCatalog};
 var results=await Promise.all(['rowSeries','rowMovie'].map(async function(kind){
  if(cat==='movie'&&kind==='rowSeries'||cat==='tv'&&kind==='rowMovie')return {items:[]};
  try{return {items:await rexHomeSimpleRecommend(kind,p)};}catch(error){return {items:[],error:error};}
 }));
 tv=results[0].items;movie=results[1].items;failure=results[0].error||results[1].error||null;
 if(!tv.length&&!movie.length&&failure)throw failure;
 var cards=[];
 for(var i=0;i<Math.max(tv.length,movie.length);i++){if(tv[i])cards.push(tv[i]);if(movie[i])cards.push(movie[i]);}
 if(sort==='R')cards.sort(function(a,b){return String(b.releaseDate||'').localeCompare(String(a.releaseDate||''));});
 return cards.filter(function(c){return !!c.backdropPath;}).slice(0,params.rexHomeBannerAll?undefined:size);
}

function rexHomeSimpleTheaterRows(data,name,state){
 var group=data&&data[name];if(!group||!Array.isArray(group.aired)||!Array.isArray(group.upcoming))throw new Error('剧场名单格式异常');
 var today=rexHomeToday(),seen={};
 var pendingIds={};group.upcoming.forEach(function(x){if(x&&rexHomeValidId(x.id))pendingIds[x.id]=true;});
 return group.aired.concat(group.upcoming).filter(function(x){
  if(!x||!rexHomeValidId(x.id)||x.mediaType!=='tv'||!x.title||!rexHomeImage(x.posterPath)||seen[x.id])return false;
  var date=rexHomeDate(x.releaseDate);if(!rexHomeHomepageDateAllowed(date))return false;
  if(date?(state==='aired'?date>today:date<=today):!(state==='upcoming'&&pendingIds[x.id]))return false;
  seen[x.id]=1;return true;
 });
}

async function rexHomeSimpleTheater(brand,params){
 params=params||{};var ps=rexHomeSimplePage(params),state=String(params.state||'aired'),sort=String(params.cat||params.sort||'new');
 if(['aired','upcoming'].indexOf(state)<0||['hot','new','top'].indexOf(sort)<0)throw new Error('请选择有效的剧场设置');
 // Source: curated Douban lists maintained by 2kuai, not an official platform membership API.
 var source='https://raw.githubusercontent.com/2kuai/ForwardWidgets/main/data/theater-data.json',data,note='第三方豆列整理';
 try{data=await rexHomeCached(RexHomeVer+':theater.source',3600000,async function(){
  var d=await rexHomeHttpJson(source);
  ['迷雾剧场','白夜剧场','X剧场'].forEach(function(name){rexHomeSimpleTheaterRows(d,name,'aired');});
  return d;
 });}catch(_){data=RexHomeTheaterSnapshot;note='来源暂不可用 · 内附豆列名单';}
 var list=rexHomeSimpleTheaterRows(data,brand.title,state).slice();
 var verification={affiliationVerified:0,affiliationExcluded:0,affiliationUnknown:0,identityExcluded:0};
 var candidates=list.map(function(x){return Object.assign({},x,{name:x.title,poster_path:x.posterPath,first_air_date:x.releaseDate});});
 var checked=await rexHomeVerifyBrandRows({media:'tv',network:brand.theater.network},candidates,verification);
 list=checked.filter(function(x){
  var expected=rexHomeDoubanName(rexHomeT2S(x.title));
  var names=[x.name,x.original_name].filter(Boolean).map(function(name){return rexHomeDoubanName(rexHomeT2S(name));});
  var dates=[x.first_air_date].concat((Array.isArray(x.seasons)?x.seasons:[]).filter(function(s){return s&&Number(s.season_number)>0;}).map(function(s){return s.air_date;}));
  if(names.indexOf(expected)<0||dates.indexOf(x.releaseDate)<0){verification.identityExcluded++;return false;}
  return true;
 });
 var group=data[brand.title],all=group.aired.concat(group.upcoming);
 rexHomeMemoryPut(RexHomeVer+':theater.statistics.'+brand.k+':'+state,{until:Date.now()+3600000,data:{label:brand.title+' · '+(state==='aired'?'已开播':'即将开播'),mediaType:'tv',stats:Object.assign({sourceReportedTotal:all.length,scannedRecords:all.length,validUniqueMovies:list.length,sourceExhausted:true,identityVerification:'名单内条目已核对 TMDB 平台、片名及日期；剧场名单仍属第三方整理'},verification)}});
 list.sort(function(a,b){var d=sort==='new'?String(b.releaseDate||'').localeCompare(String(a.releaseDate||'')):Number(sort==='top'?b.rating:b.popularity)-Number(sort==='top'?a.rating:a.popularity);return d||Number(a.id)-Number(b.id);});
 return list.slice((ps.page-1)*ps.size,ps.page*ps.size).map(function(x){return Object.assign({},x,{genreTitle:brand.title,description:note+' · 名单日期：'+String(data.last_updated||'未知').slice(0,10)+'\n'+(x.description||'')});});
}

var RexHomeTheaterSnapshot={"last_updated":"2026-10-22T17:08:32.458+08:00","迷雾剧场":{"aired":[{"id":301494,"type":"tmdb","title":"余红旧事","rating":7.2,"popularity":5.0026,"releaseDate":"2026-09-29","posterPath":"/gQuFRZI5AhEpyuX93SvfY5sgGfP.jpg","backdropPath":"/6RKO6EX15uF0locEPHzvm4Za43n.jpg","mediaType":"tv","genreTitle":"犯罪"},{"id":301489,"type":"tmdb","title":"深渊无间","rating":8.7,"popularity":3.9772,"releaseDate":"2026-09-09","posterPath":"/b9ngtGNgaHBbLihRrT0MsPRY0GW.jpg","backdropPath":"/s9YSQAJtXjimsjBVsqLtJNnIjEs.jpg","mediaType":"tv","genreTitle":"悬疑,剧情,犯罪"},{"id":291947,"type":"tmdb","title":"昨夜将至","rating":8,"popularity":4.2442,"releaseDate":"2026-06-24","posterPath":"/AqgGEVlAjWviqqFObM4bDKuDsR4.jpg","backdropPath":"/dzmpvGoJQ6yBShrpx0c7BdhwEic.jpg","mediaType":"tv","genreTitle":"悬疑,剧情"},{"id":281495,"type":"tmdb","title":"除恶","rating":7.8,"popularity":6.4237,"releaseDate":"2026-02-23","posterPath":"/zLm6n7JlMkRB3Z54ZIlCtrjiCWT.jpg","backdropPath":"/gc9ySDlKwKnwlEw6km6KUXM44Yq.jpg","mediaType":"tv","genreTitle":"犯罪,悬疑"},{"id":289723,"type":"tmdb","title":"有罪之身","rating":8,"popularity":3.7623,"releaseDate":"2026-01-27","posterPath":"/2XVSrurMxtdPWHLxYuoZsfuftVi.jpg","backdropPath":"/6Vr1InH5TksuRSvEGjP2e1oV5ea.jpg","mediaType":"tv","genreTitle":"剧情,犯罪"},{"id":263151,"type":"tmdb","title":"树影迷宫","rating":7.3,"popularity":4.4056,"releaseDate":"2025-11-01","posterPath":"/2ilIbodMYijMA0XnyfH852mth10.jpg","backdropPath":"/cunN5mAX79YuJbvlckRftcoIe62.jpg","mediaType":"tv","genreTitle":"悬疑,剧情"},{"id":277618,"type":"tmdb","title":"命悬一生","rating":8.133,"popularity":5.5935,"releaseDate":"2025-10-11","posterPath":"/rDlV8qvLuN27ZqUdqNYj6YFK1Yi.jpg","backdropPath":"/lM5xhjqe1tqKoj7zJVtKto1Npg4.jpg","mediaType":"tv","genreTitle":"悬疑,剧情"},{"id":280063,"type":"tmdb","title":"目之所及","rating":7.5,"popularity":4.1068,"releaseDate":"2025-08-28","posterPath":"/qeSXTwzaqxc53Fvn6D5aLx9lxWj.jpg","backdropPath":"/rOBGCV4TR1QBl60Fz5nrW0sCUR5.jpg","mediaType":"tv","genreTitle":"悬疑"},{"id":252568,"type":"tmdb","title":"暗潮缉凶","rating":6,"popularity":5.6925,"releaseDate":"2025-07-31","posterPath":"/8rWLq4ri7j0Z86ALmlZz74XgEmo.jpg","backdropPath":"/aFBgDwXLxdbkb1ULUG2FZiuqtj1.jpg","mediaType":"tv","genreTitle":"剧情,犯罪"},{"id":252579,"type":"tmdb","title":"正当防卫","rating":6.8,"popularity":4.1812,"releaseDate":"2025-07-09","posterPath":"/aN5zvCICkWb8YaC8Se4db3ULN4n.jpg","backdropPath":"/8gs6DdpOVVs8v4zWUdnI6mGJERQ.jpg","mediaType":"tv","genreTitle":"悬疑,剧情"},{"id":261592,"type":"tmdb","title":"借命而生","rating":7.1,"popularity":4.4034,"releaseDate":"2025-04-18","posterPath":"/2UDUw8YRqVJZD2U55rRDLDpYoer.jpg","backdropPath":"/wamVXjQotdYo6K9EP3W95fdOEW2.jpg","mediaType":"tv","genreTitle":"犯罪,剧情"},{"id":252572,"type":"tmdb","title":"乌云之上","rating":7.6,"popularity":5.3021,"releaseDate":"2025-04-03","posterPath":"/gnaDUFZYlScmjU8vQqfdn4KcFVe.jpg","backdropPath":"/gId0qV04Np9d4zfZ6GdPS92H68o.jpg","mediaType":"tv","genreTitle":"悬疑,剧情,犯罪"},{"id":259188,"type":"tmdb","title":"漂白","rating":6.9,"popularity":5.7951,"releaseDate":"2025-01-17","posterPath":"/bEcFBnDwUXXDizdaR5EiC0qRhS3.jpg","backdropPath":"/olPRzbxWeTgjOW4g1ofc3indM7G.jpg","mediaType":"tv","genreTitle":"悬疑,犯罪"},{"id":261360,"type":"tmdb","title":"风中的火焰","rating":7.7,"popularity":3.9176,"releaseDate":"2024-12-26","posterPath":"/hCdH8yrqOMtJEZpf7otd885N9UZ.jpg","backdropPath":"/v9U7EW0ql5A7n1mRZt6fCXj1B6h.jpg","mediaType":"tv","genreTitle":"剧情,悬疑"},{"id":258924,"type":"tmdb","title":"错位","rating":7.4,"popularity":4.7543,"releaseDate":"2024-07-11","posterPath":"/7gazZhvjdzJKRuA4bF6YOoYdRDW.jpg","backdropPath":"/xji1QKejfyjUF4dDtGJSO6iRx6B.jpg","mediaType":"tv","genreTitle":"犯罪,悬疑,剧情"},{"id":249188,"type":"tmdb","title":"看不见影子的少年","rating":6.7,"popularity":4.6946,"releaseDate":"2024-06-06","posterPath":"/r7gmpuzIk0nGxEiKmlFPHpCtjAp.jpg","backdropPath":"/1683FDdHligj7SOvncMxnxvhjLn.jpg","mediaType":"tv","genreTitle":"剧情,悬疑,犯罪"},{"id":241208,"type":"tmdb","title":"不可告人","rating":5.4,"popularity":4.5361,"releaseDate":"2024-05-08","posterPath":"/uSJjTZJPImABs7vKOZrvRfwwvUR.jpg","backdropPath":"/ixX9nDofrQ8LYWmUZcsmfjKqnQI.jpg","mediaType":"tv","genreTitle":"悬疑,犯罪"},{"id":241206,"type":"tmdb","title":"三大队","rating":7.917,"popularity":5.8024,"releaseDate":"2023-12-21","posterPath":"/55akiT10951gxxaRuCEzgXNzznF.jpg","backdropPath":"/8PkKQcA53Zb9fEojItVfpeDLxsX.jpg","mediaType":"tv","genreTitle":"剧情,悬疑,犯罪,动作冒险"},{"id":211927,"type":"tmdb","title":"尘封十三载","rating":7.8,"popularity":7.1088,"releaseDate":"2023-04-06","posterPath":"/uPGPeWo7v65HePODxE9vQQd1Z94.jpg","backdropPath":"/n7F79xjSkhJJp7IIXGEtmqBFdcS.jpg","mediaType":"tv","genreTitle":"剧情,悬疑,犯罪"},{"id":222186,"type":"tmdb","title":"回响","rating":7.5,"popularity":4.8884,"releaseDate":"2023-03-16","posterPath":"/eECDfNRvwMO45622KFmTvcqDRKz.jpg","backdropPath":"/5WUc245D9APDn06UNWeQCRtmCsB.jpg","mediaType":"tv","genreTitle":"剧情,悬疑"},{"id":136440,"type":"tmdb","title":"平原上的摩西","rating":7.5,"popularity":4.0571,"releaseDate":"2023-01-16","posterPath":"/aRByCc2xes5JvojMrPcrZRLVW77.jpg","backdropPath":"/iXeioJrnO7XNC0h12Piw3kAWTgC.jpg","mediaType":"tv","genreTitle":"剧情,犯罪,悬疑"},{"id":136444,"type":"tmdb","title":"回来的女儿","rating":6.9,"popularity":3.8317,"releaseDate":"2022-12-21","posterPath":"/vWWVuT4gRR7YkGqba48WdIXb71v.jpg","backdropPath":"/9gVecVKf8a725118d5hJx7bkX9T.jpg","mediaType":"tv","genreTitle":"剧情,犯罪,悬疑,家庭"},{"id":132281,"type":"tmdb","title":"淘金","rating":8,"popularity":4.0009,"releaseDate":"2022-01-18","posterPath":"/8aNMRIoYUorGEMmQF5kstZZKsVg.jpg","backdropPath":"/zwVk6EQe3eMu1oLM467kT3MF84I.jpg","mediaType":"tv","genreTitle":"犯罪,剧情,悬疑"},{"id":131552,"type":"tmdb","title":"谁是凶手","rating":7.3,"popularity":5.4141,"releaseDate":"2021-12-05","posterPath":"/aIxgcsNoB3bkLs9AGKgD0ESzzXE.jpg","backdropPath":"/258xf6i7Va9m7pPXJ1xJwNjCFfD.jpg","mediaType":"tv","genreTitle":"犯罪,剧情,悬疑"},{"id":136003,"type":"tmdb","title":"致命愿望","rating":5,"popularity":4.4962,"releaseDate":"2021-11-03","posterPath":"/t40FN63MAAEAFQugZPxPRH8whrO.jpg","backdropPath":"/pdsDLgr4Qwtf7YOo3pbVafmBxkJ.jpg","mediaType":"tv","genreTitle":"剧情,悬疑,科幻奇幻"},{"id":125460,"type":"tmdb","title":"八角亭谜雾","rating":5.6,"popularity":5.1433,"releaseDate":"2021-10-13","posterPath":"/oZZT377nQBkyJj7a963PrAlVUoX.jpg","backdropPath":"/8rpZkWvBPaX9anEqQh2nYk9okJl.jpg","mediaType":"tv","genreTitle":"犯罪,家庭,悬疑"},{"id":133988,"type":"tmdb","title":"再见那一天","rating":0,"popularity":2.6251,"releaseDate":"2021-09-21","posterPath":"/9Gsblc2vL07fEzqTVLHkC8El13g.jpg","backdropPath":"/9Skh84vXgOIm3BomtEsVhOaL0R.jpg","mediaType":"tv","genreTitle":"剧情,犯罪"},{"id":105053,"type":"tmdb","title":"沉默的真相","rating":8.523,"popularity":6.3185,"releaseDate":"2020-09-16","posterPath":"/wU5L7mZA0Yy764D1WPP2403d0MG.jpg","backdropPath":"/kZwfEXUD3OoxSf2wcUzsnltg06L.jpg","mediaType":"tv","genreTitle":"剧情,悬疑,犯罪"},{"id":105054,"type":"tmdb","title":"在劫难逃","rating":5.8,"popularity":3.8139,"releaseDate":"2020-09-02","posterPath":"/b1DNvoML4aBrE0MyM1buWwvOnbS.jpg","backdropPath":"/tjhlLwvsl80OPC5M3xbxEkcZm31.jpg","mediaType":"tv","genreTitle":"悬疑,科幻奇幻,犯罪"},{"id":107650,"type":"tmdb","title":"非常目击","rating":7,"popularity":2.8498,"releaseDate":"2020-08-18","posterPath":"/npELOGNBKZVbSt8kMiBWuFYQnBD.jpg","backdropPath":"/44iXFa25gH81YaeweRUr8H1rPwg.jpg","mediaType":"tv","genreTitle":"剧情,犯罪,悬疑"},{"id":104960,"type":"tmdb","title":"隐秘的角落","rating":8.4,"popularity":6.8945,"releaseDate":"2020-06-16","posterPath":"/zlaml7IKAIPa3NJE9LhRveELD0v.jpg","backdropPath":"/22DU3JT5EJ6fCkCUB8iYgwI8stO.jpg","mediaType":"tv","genreTitle":"犯罪,悬疑,剧情"},{"id":104329,"type":"tmdb","title":"十日游戏","rating":8.4,"popularity":3.8587,"releaseDate":"2020-06-02","posterPath":"/1O5y0XC2ziRWAqkBpLx3E7o0FVC.jpg","backdropPath":"/qDC47NO31WMKhwZqhda8wSUXBFw.jpg","mediaType":"tv","genreTitle":"悬疑,剧情"}],"upcoming":[],"totalItems":32,"totalPages":2},"白夜剧场":{"aired":[{"id":273114,"type":"tmdb","title":"悬案","rating":7.7,"popularity":4.0746,"releaseDate":"2026-07-03","posterPath":"/IgAmsxI2xFxUcHZRvEyEpl1myv.jpg","backdropPath":"/hMAew4hKxZJeqqvYljhLpvS4OZA.jpg","mediaType":"tv","genreTitle":"悬疑"},{"id":254498,"type":"tmdb","title":"黑夜告白","rating":7.667,"popularity":7.2565,"releaseDate":"2026-04-26","posterPath":"/qUhPr2XpczJpnQnXIqJjYaCxOli.jpg","backdropPath":"/x31KOFBrL65fnVfohGrKJCbPynk.jpg","mediaType":"tv","genreTitle":"犯罪,悬疑"},{"id":262957,"type":"tmdb","title":"暗恋者的救赎","rating":8,"popularity":5.9371,"releaseDate":"2026-01-23","posterPath":"/8wSEvsH1UWUIqacz9ZBCbU7i5LH.jpg","backdropPath":"/woDnNURIjfoc1dssH3zph0DP5m9.jpg","mediaType":"tv","genreTitle":"剧情,悬疑"},{"id":273112,"type":"tmdb","title":"剥茧","rating":8,"popularity":4.4451,"releaseDate":"2025-12-29","posterPath":"/yeKMKaSvkZjAzUhrInVCTASqQIs.jpg","backdropPath":"/x6QjTRPtCu0FMtf8FFts7yZSldO.jpg","mediaType":"tv","genreTitle":"剧情,悬疑,犯罪"},{"id":281705,"type":"tmdb","title":"绝命法官","rating":8.3,"popularity":7.3086,"releaseDate":"2025-09-28","posterPath":"/sp9yddjWtZAKlGm06vn2hExxkst.jpg","backdropPath":"/bALBQNgpxBBeFENsA0UwE8GeFDG.jpg","mediaType":"tv","genreTitle":"犯罪"},{"id":290886,"type":"tmdb","title":"黑白局","rating":8,"popularity":3.4226,"releaseDate":"2025-09-05","posterPath":"/xS9zZtYREbrPw2A5vN9Nfbe8qlD.jpg","backdropPath":"/yXWsnju6tPVTHCwDYNHqanSKpfl.jpg","mediaType":"tv","genreTitle":"犯罪"},{"id":272937,"type":"tmdb","title":"以法之名","rating":7.6,"popularity":5.0931,"releaseDate":"2025-06-24","posterPath":"/yXf1VPIHJFxuR4dvovjz3oaFwNm.jpg","backdropPath":"/aPh1sDbWRq7WiZM78rPsCe9HvSe.jpg","mediaType":"tv","genreTitle":"悬疑,剧情,犯罪"},{"id":272100,"type":"tmdb","title":"沙尘暴","rating":7.8,"popularity":3.2507,"releaseDate":"2025-03-28","posterPath":"/yUJFYkvFgciAMSE4nHqyttenIwc.jpg","backdropPath":"/sS23FKZ49JSPAqlYwlyPYvfoDU0.jpg","mediaType":"tv","genreTitle":"悬疑,犯罪"},{"id":337458,"type":"tmdb","title":"白夜破晓","rating":0,"popularity":0.5573,"releaseDate":"2024-11-20","posterPath":"/6TTbLmRzhb7ptpBS1KAlK00Wkcb.jpg","backdropPath":"","mediaType":"tv","genreTitle":""},{"id":252625,"type":"tmdb","title":"黑白诀","rating":8.8,"popularity":4.7998,"releaseDate":"2024-10-23","posterPath":"/z4wc0sIbDSgB1Bry7EOsrzqF60o.jpg","backdropPath":"/qs0uTKTx9GBXMiXNXG0x56igQ0H.jpg","mediaType":"tv","genreTitle":"剧情,犯罪"},{"id":253649,"type":"tmdb","title":"雪迷宫","rating":8.1,"popularity":7.4317,"releaseDate":"2024-09-03","posterPath":"/pcJQmbSk5xwXYTj4M9A8xa5vm9p.jpg","backdropPath":"/w63L1IOedvSv19Oq61ohJlrPDTJ.jpg","mediaType":"tv","genreTitle":"悬疑,犯罪,剧情"},{"id":252636,"type":"tmdb","title":"边水往事","rating":7.3,"popularity":8.1836,"releaseDate":"2024-08-16","posterPath":"/fhlimtLNQKYdvgArV3aXCiB49RI.jpg","backdropPath":"/zWZJV304xSYKa2KRs73jyhnlz1c.jpg","mediaType":"tv","genreTitle":"剧情,犯罪"},{"id":257193,"type":"tmdb","title":"破茧2","rating":0,"popularity":0.5294,"releaseDate":"2024-05-21","posterPath":"/rDjVLuUV9y5q0l4Q3l9gvwJI1Hf.jpg","backdropPath":"/kDv68h6KuQaKRQ3OiudEhh5f6a3.jpg","mediaType":"tv","genreTitle":""},{"id":236617,"type":"tmdb","title":"新生","rating":7.1,"popularity":6.0367,"releaseDate":"2024-05-06","posterPath":"/vX20LuZ93JZDJ9Ar5TXCERrNGCH.jpg","backdropPath":"/j6gt6QS32CqoRpJRVydPVgnN27P.jpg","mediaType":"tv","genreTitle":"剧情,悬疑"},{"id":252374,"type":"tmdb","title":"微暗之火","rating":8,"popularity":3.5446,"releaseDate":"2024-04-27","posterPath":"/hDueeoay7lumP5ApxJjjE3Z6vzx.jpg","backdropPath":"/9h8H5KJw3thVseDncppTianstOK.jpg","mediaType":"tv","genreTitle":"剧情,悬疑"}],"upcoming":[{"id":265211,"type":"tmdb","title":"旷野之境","rating":0,"popularity":1.0681,"releaseDate":"","posterPath":"/uJPubslQ1x7TSwhh4Vcuegawy82.jpg","backdropPath":"","mediaType":"tv","genreTitle":"剧情"},{"id":270844,"type":"tmdb","title":"势在必行","rating":0,"popularity":1.7662,"releaseDate":"","posterPath":"/kTnDQGqjDU4WTQ5Aax01FkR6xjw.jpg","backdropPath":"","mediaType":"tv","genreTitle":"剧情,悬疑,犯罪"}],"totalItems":17,"totalPages":1},"X剧场":{"aired":[{"id":279923,"type":"tmdb","title":"醉梦","rating":6,"popularity":9.8134,"releaseDate":"2026-10-16","posterPath":"/xvUOJChljBOY9e4vDc36p2yOIOM.jpg","backdropPath":"/trLfT9JbejqH6eQYbDwzcIVYUFG.jpg","mediaType":"tv","genreTitle":"悬疑,犯罪"},{"id":294487,"type":"tmdb","title":"金色","rating":7.667,"popularity":3.5858,"releaseDate":"2026-08-25","posterPath":"/k5Gc9qZfx4ofYCUjS55r6120H2l.jpg","backdropPath":"/xirWeEiatY915u837oq1l2t4oPP.jpg","mediaType":"tv","genreTitle":"剧情"},{"id":273119,"type":"tmdb","title":"人鱼","rating":9,"popularity":3.7813,"releaseDate":"2026-08-04","posterPath":"/7OEUa475TU6ECokYdVCrSjvaBSg.jpg","backdropPath":"/5sRWeNwujN5d7Zm6pv8PShcwoND.jpg","mediaType":"tv","genreTitle":"悬疑,剧情"},{"id":278868,"type":"tmdb","title":"方圆八百米","rating":7.1,"popularity":5.2046,"releaseDate":"2026-04-17","posterPath":"/oj688ZRAnYQrcqk59euex7laL10.jpg","backdropPath":"/cA8pX6GhKBvgdo1tAiyetEMDMCk.jpg","mediaType":"tv","genreTitle":"剧情"},{"id":258492,"type":"tmdb","title":"人之初","rating":7.2,"popularity":5.4352,"releaseDate":"2025-12-27","posterPath":"/vIf5ueGBbNBjUBlK2zMjQFLoAK3.jpg","backdropPath":"/rcKobqXN4yFaBzRqDQk3zBbssEJ.jpg","mediaType":"tv","genreTitle":"悬疑,剧情"},{"id":282905,"type":"tmdb","title":"重影","rating":7.1,"popularity":3.0043,"releaseDate":"2025-10-26","posterPath":"/rut87Fztzg68R8h7KcD89O6wGe8.jpg","backdropPath":"/dY9YBWsskH9vMQRvtSTxfeemXsR.jpg","mediaType":"tv","genreTitle":"剧情,悬疑"},{"id":258490,"type":"tmdb","title":"棋士","rating":7.2,"popularity":6.0051,"releaseDate":"2025-03-25","posterPath":"/1Q16z9yXH9tlCq6yz5Td65wsfob.jpg","backdropPath":"/zTfV8rTIeZmtEciQI7HJxOyKYoB.jpg","mediaType":"tv","genreTitle":"悬疑,犯罪"},{"id":236616,"type":"tmdb","title":"黑土无言","rating":7.2,"popularity":4.2862,"releaseDate":"2024-01-10","posterPath":"/rE1pPrUop9zdGTnaK72DX1lJlxW.jpg","backdropPath":"/tUCHEWuO8QtJ26tgnIOnHBinVwl.jpg","mediaType":"tv","genreTitle":"悬疑,犯罪"},{"id":233959,"type":"tmdb","title":"繁城之下","rating":7.9,"popularity":4.6877,"releaseDate":"2023-10-12","posterPath":"/jFVJw7uh9e6z2q0dH6TMxtvJMI0.jpg","backdropPath":"/mi8CaRRcsibJ0cdbryO5ZH2Wtok.jpg","mediaType":"tv","genreTitle":"剧情,悬疑,犯罪"},{"id":230637,"type":"tmdb","title":"欢颜","rating":6.4,"popularity":5.6447,"releaseDate":"2023-07-15","posterPath":"/tqfA0EdvQfUl8038JRrFjTzryiN.jpg","backdropPath":"/eYpOUSquNp49SWsHKv8bCSJpp37.jpg","mediaType":"tv","genreTitle":"剧情"},{"id":225008,"type":"tmdb","title":"漫长的季节","rating":8.861,"popularity":8.1652,"releaseDate":"2023-04-22","posterPath":"/tJLiKDYdfMskFkJXV1HnaQAdpGf.jpg","backdropPath":"/rCm6BJkkPukfHYWNNx7WkGpCdZH.jpg","mediaType":"tv","genreTitle":"犯罪,剧情,悬疑"}],"upcoming":[{"id":284375,"type":"tmdb","title":"疯狂的黑鱼","rating":0,"popularity":2.4275,"releaseDate":"","posterPath":"/ell0lL2X55GC0AxpovitgnoZPBY.jpg","backdropPath":"","mediaType":"tv","genreTitle":"犯罪,喜剧,悬疑"},{"id":280734,"type":"tmdb","title":"五个失踪的少年","rating":0,"popularity":2.0427,"releaseDate":"","posterPath":"/1CzS5fLH1SQ3FjITMu3Z5gg1S0U.jpg","backdropPath":"","mediaType":"tv","genreTitle":"家庭,悬疑"}],"totalItems":13,"totalPages":1}};

// 模块声明位于脚本开头，供客户端直接读取。

var rexHomeMemory = Object.create(null);

var rexHomePending = Object.create(null);

function rexHomeStable(value) {
 var visiting=new Set();
 function encode(v,depth){
  if(depth>64)throw new Error("快取参数巢状层数过深");
  if(typeof v==='bigint')throw new Error("快取参数不支援 BigInt，请使用字串");
  if(v&&typeof v==='object'){
   if(visiting.has(v))throw new Error("快取参数不可包含循环参照");
   visiting.add(v);
   try{
    if(Array.isArray(v))return '['+v.map(function(x){return encode(x,depth+1);}).join(',')+']';
    return '{'+Object.keys(v).sort().map(function(k){return JSON.stringify(k)+':'+encode(v[k],depth+1);}).join(',')+'}';
   }finally{visiting.delete(v);}
  }
  return JSON.stringify(v);
 }
 return encode(value,0);
}

function rexHomeEncodeKey(value){
 var text=String(value),safe='';
 for(var i=0;i<text.length;i++){
  var code=text.charCodeAt(i);
  if(code>=55296&&code<=56319){var next=text.charCodeAt(i+1);if(next>=56320&&next<=57343){safe+=text[i]+text[++i];}else safe+='\uFFFD';}
  else if(code>=56320&&code<=57343)safe+='\uFFFD';else safe+=text[i];
 }
 return encodeURIComponent(safe);
}

function rexHomeMemoryPut(key,entry){
 var now=Date.now();
 Object.keys(rexHomeMemory).forEach(function(k){var e=rexHomeMemory[k];if(!e||(e.until!=null?e.until<=now:e.at!=null&&now-e.at>86400000))delete rexHomeMemory[k];});
 delete rexHomeMemory[key];rexHomeMemory[key]=entry;
 var keys=Object.keys(rexHomeMemory);while(keys.length>512)delete rexHomeMemory[keys.shift()];
}

var RexHomeStorageTimeoutMs=1500;

async function rexHomeStorageCall(method,args){
 if(!Widget.storage||typeof Widget.storage[method]!=='function')return null;
 var pending=Promise.resolve().then(function(){return Widget.storage[method].apply(Widget.storage,args);});
 if(typeof setTimeout!=='function')return pending;
 var timer;
 try{return await Promise.race([pending,new Promise(function(_,reject){timer=setTimeout(function(){reject(new Error("储存读写逾时"));},RexHomeStorageTimeoutMs);})]);}
 finally{if(timer!=null&&typeof clearTimeout==='function')clearTimeout(timer);}
}

async function rexHomeWaitStorage(pending){
 if(typeof setTimeout!=='function'){pending.catch(function(){});return;}
 return pending;
}

async function rexHomeCacheRead(key) {

  var storageKey='rex.home.v2.'+rexHomeEncodeKey(key), entry=rexHomeMemory[key];
  try {
    if (!entry && Widget.storage) {
      if(typeof setTimeout!=='function'){
       rexHomeStorageCall('get',[storageKey]).then(function(raw){try{var v=typeof raw==='string'?JSON.parse(raw):raw;if(v&&v.until>Date.now()&&!rexHomeMemory[key])rexHomeMemoryPut(key,v);}catch(_){}},function(){});
       return null;
      }
      var raw=await rexHomeStorageCall('get',[storageKey]);
      entry=typeof raw === 'string'?JSON.parse(raw):raw;
    }
  } catch (_) {}
  if(entry&&entry.until>Date.now()){rexHomeMemoryPut(key,entry);return entry;}
  delete rexHomeMemory[key];return null;
}

var rexHomeStorageTail=Promise.resolve();

function rexHomeStorageWrite(task){
 var pending=rexHomeStorageTail.then(task);rexHomeStorageTail=pending.catch(function(){});return pending;
}

function rexHomeStoreIndexed(storageKey,saved,indexKey,max){
 return rexHomeStorageWrite(async function(){
  if(!Widget.storage)return;
  await rexHomeStorageCall('set',[storageKey,JSON.stringify(saved)]);
  var raw=await rexHomeStorageCall('get',[indexKey]),index=typeof raw==='string'?JSON.parse(raw):raw;
  if(!Array.isArray(index))index=[];
  index=index.filter(function(k){return k!==storageKey;});index.push(storageKey);
  while(index.length>max){var oldest=index.shift();if(Widget.storage.remove)await rexHomeStorageCall('remove',[oldest]);}
  await rexHomeStorageCall('set',[indexKey,JSON.stringify(index)]);
 });
}

async function rexHomeCached(key, ttl, task, options) {

  var memoryOnly=options&&options.memoryOnly,storageKey='rex.home.v2.'+rexHomeEncodeKey(key), entry=memoryOnly?rexHomeMemory[key]:await rexHomeCacheRead(key);
  if (entry&&entry.until>Date.now()) return entry.data;
  if(memoryOnly)delete rexHomeMemory[key];
  if (rexHomePending[key]) return rexHomePending[key];
  rexHomePending[key]=(async function(){
    var data=await task();
    // Failed requests throw and are never cached. Successful empty lists expire normally.
    var saved={until:Date.now()+ttl,data:data};
    rexHomeMemoryPut(key,saved);
    if(!memoryOnly)try {await rexHomeWaitStorage(rexHomeStoreIndexed(storageKey,saved,key.indexOf('random.snapshot.')===0?'rex.home.random.cache.index':'rex.home.cache.index',key.indexOf('random.snapshot.')===0?24:256));} catch (_) {}
    return data;
  })();
  try {return await rexHomePending[key];} finally {delete rexHomePending[key];}
}

var rexHomeSeqPending=Object.create(null);

function rexHomeSeqPageItems(data,ps){
 var pageItems=data.items.slice((ps.page-1)*ps.size,ps.page*ps.size);
 if(data.stats&&typeof data.stats.minimumPageTarget==='number'){
  var minimum=Math.min(ps.size,RexHomeMinimumReadPolicy.items);
  data.stats=Object.assign({},data.stats,{requestedPage:ps.page,requestedPageSize:ps.size,minimumPageTarget:minimum,
   validItemsOnRequestedPage:pageItems.length,minimumPageTargetReached:pageItems.length>=minimum});
 }
 return pageItems;
}

async function rexHomeSeqList(key,ttl,params,task,owner){
 params=params||{};var ps=rexHomeSimplePage(params),need=ps.page*ps.size;
 var entry=await rexHomeCacheRead(key),data=entry&&entry.data;
 if(data&&Array.isArray(data.items)&&(data.done||data.items.length>=need))return rexHomeSeqObserve(data,ps,params.observer,true);
 if(data&&data.scanCapped)return rexHomeSeqObserve(data,ps,params.observer,true);
 if(rexHomeSeqPending[key]){await rexHomeSeqPending[key];return rexHomeSeqList(key,ttl,params,task,null);}
 rexHomeSeqPending[key]=(async function(){
  var out=await task(data&&Array.isArray(data.items)?data:null);
  if(!out||!Array.isArray(out.items))throw new Error('分类片单格式异常');
  var saved={until:Date.now()+ttl,data:out};rexHomeMemoryPut(key,saved);
  try{await rexHomeWaitStorage(rexHomeStoreIndexed('rex.home.v2.'+rexHomeEncodeKey(key),saved,'rex.home.cache.index',256));}catch(_){}
  return out;
 })();
 var out;try{out=await rexHomeSeqPending[key];}finally{delete rexHomeSeqPending[key];}
 if(!out.done&&out.items.length<need){
  if(!out.scanCapped&&!out.scanLimited)throw new Error('本分类分页尚未完成，请刷新重试');
 }
 var pageItems=rexHomeSeqObserve(out,ps,params.observer,false);
 if(out.readError&&!pageItems.length){var error=new Error(out.readError.message);error.code=out.readError.code;throw error;}
 return pageItems;
}

async function rexHomeTimedRequest(pending,timeoutMs,message,code){
 if(!timeoutMs||typeof setTimeout!=='function')return pending;
 var timer;
 try{return await Promise.race([pending,new Promise(function(_,reject){timer=setTimeout(function(){var error=new Error(message||'TMDB片库请求超时，请刷新重试');error.code=code||'REXHOME_TMDB_TIMEOUT';reject(error);},timeoutMs);})]);}
 finally{if(timer!=null&&typeof clearTimeout==='function')clearTimeout(timer);}
}

// v145／v146：首页 10 行同时加载，TMDB 原本只有 2 个并发、排队 5 秒就失败，豆瓣榜单常排不满；改为 12 个并发、排队上限 20 秒。
var RexHomeRequestPolicy={timeoutMs:5000,retries:1,retryDelayMs:200,queueTimeoutMs:20000};
var rexHomeRequestLanes={douban:{active:0,limit:1,queue:[]},tmdb:{active:0,limit:12,queue:[]},bridge:{active:0,limit:2,queue:[]}};

function rexHomeRequestSlot(name,task){
 var lane=rexHomeRequestLanes[name];
 return new Promise(function(resolve,reject){
  var job={timer:null,run:function(){
   if(job.timer!=null&&typeof clearTimeout==='function')clearTimeout(job.timer);
   lane.active++;
   Promise.resolve().then(task).then(resolve,reject).then(function(){lane.active--;pump();});
  }};
  function pump(){while(lane.active<lane.limit&&lane.queue.length)lane.queue.shift().run();}
  lane.queue.push(job);
  if(typeof setTimeout==='function')job.timer=setTimeout(function(){
   var index=lane.queue.indexOf(job);if(index<0)return;lane.queue.splice(index,1);
   var error=new Error((name==='douban'?'豆瓣':name==='bridge'?'豆瓣完整模式':'TMDB')+'请求排队超时，请刷新继续加载');error.code='REXHOME_REQUEST_QUEUE_TIMEOUT';reject(error);
  },RexHomeRequestPolicy.queueTimeoutMs);
  pump();
 });
}

async function rexHomeRetryTransport(task){
 for(var attempt=0;;attempt++)try{return await task();}catch(error){
  if(!error||!error.retryable||attempt>=RexHomeRequestPolicy.retries)throw error;
  if(typeof setTimeout==='function')await new Promise(function(resolve){setTimeout(resolve,RexHomeRequestPolicy.retryDelayMs);});
 }
}

async function rexHomeApi(path, params, ttl, options) {
  return rexHomeCached(path+':'+rexHomeStable(params),ttl || 900000,async function(){
    var data=await rexHomeRetryTransport(function(){return rexHomeRequestSlot('tmdb',async function(){
     try{return await rexHomeTimedRequest(Promise.resolve().then(function(){return Widget.tmdb.get(String(path).replace(/^\/+/,'') ,{params:params});}),options&&options.timeoutMs||RexHomeRequestPolicy.timeoutMs);}
     catch(error){if(error&&error.code==='REXHOME_TMDB_TIMEOUT')throw error;var failed=new Error('TMDB影片匹配／片库请求失败，请稍后刷新');failed.code='REXHOME_TMDB_NETWORK';failed.retryable=true;throw failed;}
    });});
    if (!data || typeof data!=='object' || data.success===false) throw new Error('片库数据暂不可用，请稍后刷新');
    // Rex 适配器直接返回 TMDB 正文，先验证片单结构再放入缓存。
    if(/^\/?(?:search|discover)\//.test(String(path))&&!Array.isArray(data.results)){
     var invalid=new Error('TMDB片单格式异常，请刷新重试');invalid.code='REXHOME_TMDB_FORMAT';throw invalid;
    }
    return data;
  },{memoryOnly:true});
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

function rexHomeNativeImage(value,size){
 var path=rexHomeImage(value,false);if(!path)return '';
 var sz=size||'w500';
 if(path.startsWith('/')) return 'https://image.tmdb.org/t/p/'+sz+path;
 var match=path.match(/^https:\/\/image\.tmdb\.org\/t\/p\/(?:original|w[0-9]+)(\/[^?#]+)$/);
 return match?'https://image.tmdb.org/t/p/'+sz+match[1]:path;
}

var RexHomeT2SPairs="㑯㑔㑳㑇㑶㐹㓨刾㘚㘎㜄㚯㜏㛣㠏㟆㥮㤘㩜㨫㩳㧐㩵擜䁻䀥䃮鿎䊷䌶䋙䌺䋚䌻䋹䌿䋻䌾䍦䍠䎱䎬䙡䙌䜀䜧䝼䞍䥇䦂䥑鿏䥱䥾䦛䦶䦟䦷䯀䯅䰾鲃䱷䲣䱽䲝䲁鳚䲘鳤䴉鹮丟丢並并么幺乾干亂乱亙亘亞亚佇伫佈布佔占併并來来侖仑侶侣侷局俁俣係系俔伣俠侠俥伡俬私倀伥倆俩倈俫倉仓個个們们倖幸倫伦倲㑈偉伟偑㐽側侧偵侦偽伪傌㐷傑杰傖伧傘伞備备傢家傭佣傯偬傳传傴伛債债傷伤傾倾僂偻僅仅僉佥僑侨僕仆僞伪僥侥僨偾僱雇價价儀仪儁俊儂侬億亿儈侩儉俭儎傤儐傧儔俦儕侪儘尽償偿優优儲储儷俪儸㑩儺傩儻傥儼俨兇凶兌兑兒儿兗兖內内兩两冊册冑胄冪幂凈净凍冻凜凛凱凯別别刪删剄刭則则剋克剎刹剗刬剛刚剝剥剮剐剴剀創创剷铲劃划劄札劇剧劉刘劊刽劌刿劍剑劏㓥劑剂劚㔉勁劲動动務务勛勋勝胜勞劳勢势勩勚勱劢勳勋勵励勸劝勻匀匭匦匯汇匱匮區区協协卹恤卻却卽即厙厍厠厕厤历厭厌厲厉厴厣參参叄叁叢丛吒咤吳吴吶呐呂吕咼呙員员唄呗唸念問问啓启啞哑啟启啢唡喎㖞喚唤喪丧喫吃喬乔單单喲哟嗆呛嗇啬嗊唝嗎吗嗚呜嗩唢嗶哔嘆叹嘍喽嘓啯嘔呕嘖啧嘗尝嘜唛嘩哗嘮唠嘯啸嘰叽嘵哓嘸呒嘽啴噁恶噓嘘噚㖊噝咝噠哒噥哝噦哕噯嗳噲哙噴喷噸吨噹当嚀咛嚇吓嚌哜嚐尝嚕噜嚙啮嚥咽嚦呖嚨咙嚮向嚲亸嚳喾嚴严嚶嘤囀啭囁嗫囂嚣囅冁囈呓囉啰囌苏囑嘱囪囱圇囵國国圍围園园圓圆圖图團团垻坝埡垭埰采執执堅坚堊垩堖垴堝埚堯尧報报場场塊块塋茔塏垲塒埘塗涂塚冢塢坞塤埙塵尘塹堑墊垫墜坠墮堕墰坛墳坟墶垯墻墙墾垦壇坛壋垱壎埙壓压壘垒壙圹壚垆壜坛壞坏壟垄壠垅壢坜壩坝壪塆壯壮壺壶壼壸壽寿夠够夢梦夥伙夾夹奐奂奧奥奩奁奪夺奬奖奮奋奼姹妝妆姍姗姦奸娛娱婁娄婦妇婭娅媧娲媯妫媰㛀媼媪媽妈嫋袅嫗妪嫵妩嫺娴嫻娴嫿婳嬀妫嬃媭嬈娆嬋婵嬌娇嬙嫱嬡嫒嬤嬷嬪嫔嬰婴嬸婶孃娘孋㛤孌娈孫孙學学孿孪宮宫寀采寢寝實实寧宁審审寫写寬宽寵宠寶宝將将專专尋寻對对導导尷尴屆届屍尸屓屃屜屉屢屡層层屨屦屬属岡冈峯峰峴岘島岛峽峡崍崃崑昆崗岗崙仑崢峥崬岽嵐岚嵗岁嵾㟥嶁嵝嶄崭嶇岖嶔嵚嶗崂嶠峤嶢峣嶧峄嶨峃嶮崄嶸嵘嶺岭嶼屿嶽岳巋岿巒峦巔巅巖岩巰巯巹卺帥帅師师帳帐帶带幀帧幃帏幓㡎幗帼幘帻幟帜幣币幫帮幬帱幷并幹干幾几庫库廁厕廂厢廄厩廈厦廎庼廕荫廚厨廝厮廟庙廠厂廡庑廢废廣广廩廪廬庐廳厅弒弑弔吊弳弪張张強强彆别彈弹彌弥彎弯彔录彙汇彠彟彥彦彫雕彲彨彿佛後后徑径從从徠徕復复徵征徹彻恆恒恥耻悅悦悞悮悵怅悶闷悽凄惡恶惱恼惲恽惻恻愛爱愜惬愨悫愴怆愷恺愾忾慄栗態态慍愠慘惨慚惭慟恸慣惯慤悫慪怄慫怂慮虑慳悭慶庆慺㥪慼戚慾欲憂忧憊惫憐怜憑凭憒愦憖慭憚惮憤愤憫悯憮怃憲宪憶忆懇恳應应懌怿懍懔懞蒙懟怼懣懑懤㤽懨恹懲惩懶懒懷怀懸悬懺忏懼惧懾慑戀恋戇戆戔戋戧戗戩戬戰战戱戯戲戏戶户扞捍拋抛拚拼挩捝挱挲挾挟捨舍捫扪捱挨捲卷掃扫掄抡掆㧏掗挜掙挣掛挂採采揀拣揚扬換换揮挥揯搄損损搖摇搗捣搧扇搵揾搶抢摑掴摜掼摟搂摯挚摳抠摶抟摺折摻掺撈捞撏挦撐撑撓挠撝㧑撟挢撣掸撥拨撫抚撲扑撳揿撻挞撾挝撿捡擁拥擄掳擇择擊击擋挡擓㧟擔担據据擠挤擡抬擣捣擬拟擯摈擰拧擱搁擲掷擴扩擷撷擺摆擻擞擼撸擽㧰擾扰攄摅攆撵攏拢攔拦攖撄攙搀攛撺攜携攝摄攢攒攣挛攤摊攪搅攬揽敍叙敎教敓敚敗败敘叙敵敌數数斂敛斃毙斆敩斕斓斬斩斷断於于旂旗旣既昇升時时晉晋晝昼暈晕暉晖暘旸暢畅暫暂曄晔曆历曇昙曉晓曏向曖暧曠旷曨昽曬晒書书會会朧胧朮术東东枱台枴拐柵栅柺拐査查桿杆梔栀梘枧條条梟枭梲棁棄弃棊棋棖枨棗枣棟栋棡㭎棧栈棲栖棶梾椏桠椲㭏楊杨楓枫楨桢業业極极榘矩榦干榪杩榮荣榲榅榿桤構构槍枪槓杠槤梿槧椠槨椁槮椮槳桨槶椢槼椝樁桩樂乐樅枞樑梁樓楼標标樞枢樢㭤樣样樧榝樫㭴樳桪樸朴樹树樺桦樿椫橈桡橋桥機机橢椭橫横檁檩檉柽檔档檜桧檟槚檢检檣樯檮梼檯台檳槟檸柠檻槛櫃柜櫓橹櫚榈櫛栉櫝椟櫞橼櫟栎櫥橱櫧槠櫨栌櫪枥櫫橥櫬榇櫱蘖櫳栊櫸榉櫻樱欄栏欅榉權权欏椤欒栾欖榄欞棂欽钦歎叹歐欧歟欤歡欢歲岁歷历歸归歿殁殘残殞殒殤殇殨㱮殫殚殭僵殮殓殯殡殰㱩殲歼殺杀殻壳殼壳毀毁毆殴毿毵氂牦氈毡氌氇氣气氫氢氬氩氳氲氾泛汎泛汙污決决沒没沖冲況况泝溯洩泄洶汹浹浃涇泾涗涚涼凉淒凄淚泪淥渌淨净淩凌淪沦淵渊淶涞淺浅渙涣減减渢沨渦涡測测渾浑湊凑湞浈湧涌湯汤溈沩準准溝沟溫温溮浉溳涢溼湿滄沧滅灭滌涤滎荥滙汇滬沪滯滞滲渗滷卤滸浒滻浐滾滚滿满漁渔漊溇漚沤漢汉漣涟漬渍漲涨漵溆漸渐漿浆潀潨潁颍潑泼潔洁潙沩潚㴋潛潜潤润潯浔潰溃潷滗潿涠澀涩澆浇澇涝澐沄澗涧澠渑澤泽澦滪澩泶澮浍澱淀澾㳠濁浊濃浓濄㳡濕湿濘泞濚溁濛蒙濜浕濟济濤涛濧㳔濫滥濰潍濱滨濺溅濼泺濾滤瀂澛瀅滢瀆渎瀇㲿瀉泻瀋沈瀏浏瀕濒瀘泸瀝沥瀟潇瀠潆瀦潴瀧泷瀨濑瀰弥瀲潋瀾澜灃沣灄滠灑洒灕漓灘滩灝灏灡㳕灣湾灤滦灧滟灩滟災灾為为烏乌烴烃無无煉炼煒炜煙烟煢茕煥焕煩烦煬炀煱㶽熅煴熒荧熗炝熱热熲颎熾炽燁烨燈灯燉炖燒烧燙烫燜焖營营燦灿燬毁燭烛燴烩燶㶶燻熏燼烬燾焘爍烁爐炉爛烂爭争爲为爺爷爾尔牀床牆墙牘牍牴抵牽牵犖荦犛牦犢犊犧牺狀状狹狭狽狈猙狰猶犹猻狲獁犸獃呆獄狱獅狮獎奖獨独獪狯獫猃獮狝獰狞獱㺍獲获獵猎獷犷獸兽獺獭獻献獼猕玀猡現现琱雕琺珐琿珲瑋玮瑒玚瑣琐瑤瑶瑩莹瑪玛瑲玱璉琏璡琎璣玑璦瑷璫珰璯㻅環环璵玙璸瑸璽玺璿璇瓊琼瓏珑瓔璎瓚瓒甌瓯甕瓮產产産产畝亩畢毕畫画異异畵画當当疇畴疊叠痙痉痠酸痺痹痾疴瘂痖瘋疯瘍疡瘓痪瘞瘗瘡疮瘧疟瘮瘆瘲疭瘺瘘瘻瘘療疗癆痨癇痫癉瘅癒愈癘疠癟瘪癡痴癢痒癤疖癥症癧疬癩癞癬癣癭瘿癮瘾癰痈癱瘫癲癫發发皁皂皚皑皰疱皸皲皺皱盃杯盜盗盞盏盡尽監监盤盘盧卢盪荡眞真眥眦眾众睏困睜睁睞睐睪睾瞘眍瞜䁖瞞瞒瞶瞆瞼睑矇蒙矓眬矚瞩矯矫硃朱硜硁硤硖硨砗硯砚碕埼碩硕碭砀碸砜確确碼码碽䂵磑硙磚砖磠硵磣碜磧碛磯矶磽硗磾䃅礄硚礎础礙碍礦矿礪砺礫砾礬矾礱砻祕秘祿禄禍祸禎祯禕祎禡祃禦御禪禅禮礼禰祢禱祷禿秃秈籼稅税稈秆稏䅉稜棱稟禀種种稱称穀谷穇䅟穌稣積积穎颖穠秾穡穑穢秽穩稳穫获穭穞窩窝窪洼窮穷窯窑窵窎窶窭窺窥竄窜竅窍竇窦竈灶竊窃竪竖競竞筆笔筍笋筧笕筴䇲箇个箋笺箏筝箚札節节範范築筑篋箧篔筼篠筿篤笃篩筛篳筚簀箦簍篓簑蓑簞箪簡简簣篑簫箫簷檐簹筜簽签簾帘籃篮籌筹籔䉤籙箓籛篯籜箨籟籁籠笼籤签籩笾籪簖籬篱籮箩籲吁粧妆粵粤糉粽糝糁糞粪糧粮糭粽糰团糲粝糴籴糶粜糹纟糾纠紀纪紂纣約约紅红紆纡紇纥紈纨紉纫紋纹納纳紐纽紓纾純纯紕纰紖纼紗纱紘纮紙纸級级紛纷紜纭紝纴紡纺紬䌷紮扎細细紱绂紲绁紳绅紵纻紹绍紺绀紼绋紿绐絀绌終终絃弦組组絅䌹絆绊絎绗結结絕绝絛绦絝绔絞绞絡络絢绚給给絨绒絰绖統统絲丝絳绛絶绝絹绢綁绑綃绡綆绠綈绨綉绣綌绤綏绥綐䌼綑捆經经綜综綞缍綠绿綢绸綣绻綫线綬绶維维綯绹綰绾綱纲網网綳绷綴缀綵彩綸纶綹绺綺绮綻绽綽绰綾绫綿绵緄绲緇缁緊紧緋绯緑绿緒绪緓绬緔绱緗缃緘缄緙缂線线緝缉緞缎締缔緡缗緣缘緦缌編编緩缓緬缅緯纬緱缑緲缈練练緶缏緹缇緻致緼缊縈萦縉缙縊缢縋缒縐绉縑缣縕缊縗缞縛缚縝缜縞缟縟缛縣县縧绦縫缝縭缡縮缩縱纵縲缧縳䌸縴纤縵缦縶絷縷缕縹缥總总績绩繃绷繅缫繆缪繒缯織织繕缮繚缭繞绕繡绣繢缋繩绳繪绘繫系繭茧繮缰繯缳繰缲繳缴繸䍁繹绎繼继繽缤繾缱繿䍀纇颣纈缬纊纩續续纍累纏缠纓缨纔才纖纤纘缵纜缆缽钵罃䓨罈坛罌罂罎坛罰罚罵骂罷罢羅罗羆罴羈羁羋芈羣群羥羟羨羡義义羶膻習习翫玩翬翚翹翘翽翙耬耧耮耢聖圣聞闻聯联聰聪聲声聳耸聵聩聶聂職职聹聍聽听聾聋肅肃脅胁脈脉脛胫脣唇脩修脫脱脹胀腎肾腖胨腡脶腦脑腫肿腳脚腸肠膃腽膕腘膚肤膞䏝膠胶膩腻膽胆膾脍膿脓臉脸臍脐臏膑臘腊臚胪臟脏臠脔臢臜臥卧臨临臺台與与興兴舉举舊旧舖铺舘馆艙舱艤舣艦舰艫舻艱艰艷艳芻刍苧苎茲兹荊荆莊庄莖茎莢荚莧苋華华菴庵菸烟萇苌萊莱萬万萴荝萵莴葉叶葒荭著着葤荮葦苇葯药葷荤蒐搜蒓莼蒔莳蒕蒀蒞莅蒼苍蓀荪蓆席蓋盖蓮莲蓯苁蓴莼蓽荜蔔卜蔘参蔞蒌蔣蒋蔥葱蔦茑蔭荫蕁荨蕆蒇蕎荞蕒荬蕓芸蕕莸蕘荛蕢蒉蕩荡蕪芜蕭萧蕷蓣薀蕰薈荟薊蓟薌芗薑姜薔蔷薘荙薟莶薦荐薩萨薳䓕薴苧薵䓓薹苔薺荠藍蓝藎荩藝艺藥药藪薮藭䓖藴蕴藶苈藹蔼藺蔺蘀萚蘄蕲蘆芦蘇苏蘊蕴蘋苹蘚藓蘞蔹蘢茏蘭兰蘺蓠蘿萝虆蔂處处虛虚虜虏號号虧亏虯虬蛺蛱蛻蜕蜆蚬蝕蚀蝟猬蝦虾蝨虱蝸蜗螄蛳螞蚂螢萤螮䗖螻蝼螿螀蟄蛰蟈蝈蟎螨蟣虮蟬蝉蟯蛲蟲虫蟶蛏蟻蚁蠁蚃蠅蝇蠆虿蠍蝎蠐蛴蠑蝾蠔蚝蠟蜡蠣蛎蠨蟏蠱蛊蠶蚕蠻蛮衆众衊蔑術术衕同衚胡衛卫衝冲衞卫衹只袞衮袷夹裊袅裏里補补裝装裡里製制複复褌裈褘袆褲裤褳裢褸褛褻亵襇裥襉裥襏袯襖袄襝裣襠裆襤褴襪袜襬摆襯衬襲袭襴襕覈核見见覎觃規规覓觅視视覘觇覡觋覥觍覦觎親亲覬觊覯觏覲觐覷觑覺觉覽览覿觌觀观觴觞觶觯觸触訁讠訂订訃讣計计訊讯訌讧討讨訐讦訒讱訓训訕讪訖讫託托記记訛讹訝讶訟讼訢䜣訣诀訥讷訩讻訪访設设許许訴诉訶诃診诊註注証证詁诂詆诋詎讵詐诈詒诒詔诏評评詖诐詗诇詘诎詛诅詞词詠咏詡诩詢询詣诣試试詩诗詫诧詬诟詭诡詮诠詰诘話话該该詳详詵诜詼诙詿诖誄诔誅诛誆诓誇夸誌志認认誑诳誒诶誕诞誘诱誚诮語语誠诚誡诫誣诬誤误誥诰誦诵誨诲說说説说誰谁課课誶谇誹诽誼谊誾訚調调諂谄諄谆談谈諉诿請请諍诤諏诹諑诼諒谅論论諗谂諛谀諜谍諝谞諞谝諡谥諢诨諤谔諦谛諧谐諫谏諭谕諮咨諱讳諳谙諶谌諷讽諸诸諺谚諼谖諾诺謀谋謁谒謂谓謄誊謅诌謊谎謎谜謐谧謔谑謖谡謗谤謙谦謚谥講讲謝谢謠谣謡谣謨谟謫谪謬谬謭谫謳讴謹谨謾谩譁哗證证譎谲譏讥譖谮識识譙谯譚谭譜谱譟噪譫谵譭毁譯译議议譴谴護护譸诪譽誉譾谫讀读讅谉變变讋詟讌䜩讎雠讒谗讓让讕谰讖谶讚赞讜谠讞谳谿溪豈岂豎竖豐丰豔艳豬猪豶豮貍狸貓猫貙䝙貝贝貞贞貟贠負负財财貢贡貧贫貨货販贩貪贪貫贯責责貯贮貰贳貲赀貳贰貴贵貶贬買买貸贷貺贶費费貼贴貽贻貿贸賀贺賁贲賂赂賃赁賄贿賅赅資资賈贾賊贼賑赈賒赊賓宾賕赇賙赒賚赉賜赐賞赏賠赔賡赓賢贤賣卖賤贱賦赋賧赕質质賫赍賬账賭赌賰䞐賴赖賵赗賺赚賻赙購购賽赛賾赜贄贽贅赘贇赟贈赠贊赞贋赝贍赡贏赢贐赆贓赃贔赑贖赎贗赝贛赣贜赃赬赪趕赶趙赵趨趋趲趱跡迹踐践踰逾踴踊蹌跄蹕跸蹟迹蹠跖蹣蹒蹤踪蹺跷躂跶躉趸躊踌躋跻躍跃躎䟢躑踯躒跞躓踬躕蹰躚跹躡蹑躥蹿躦躜躪躏軀躯車车軋轧軌轨軍军軑轪軒轩軔轫軛轭軟软軤轷軫轸軲轱軸轴軹轵軺轺軻轲軼轶軾轼較较輅辂輇辁輈辀載载輊轾輒辄輓挽輔辅輕轻輛辆輜辎輝辉輞辋輟辍輥辊輦辇輩辈輪轮輬辌輯辑輳辏輸输輻辐輼辒輾辗輿舆轀辒轂毂轄辖轅辕轆辘轉转轍辙轎轿轔辚轟轰轡辔轢轹轤轳辦办辭辞辮辫辯辩農农迴回逕径這这連连週周進进遊游運运過过達达違违遙遥遜逊遞递遠远遡溯適适遲迟遶绕遷迁選选遺遗遼辽邁迈還还邇迩邊边邏逻邐逦郟郏郵邮鄆郓鄉乡鄒邹鄔邬鄖郧鄧邓鄭郑鄰邻鄲郸鄴邺鄶郐鄺邝酇酂酈郦醃腌醖酝醜丑醞酝醟蒏醣糖醫医醬酱醱酦釀酿釁衅釃酾釅酽釋释釐厘釒钅釓钆釔钇釕钌釗钊釘钉釙钋針针釣钓釤钐釦扣釧钏釩钒釵钗釷钍釹钕釺钎釾䥺鈀钯鈁钫鈃钘鈄钭鈅钥鈈钚鈉钠鈍钝鈎钩鈐钤鈑钣鈒钑鈔钞鈕钮鈞钧鈡钟鈣钙鈥钬鈦钛鈧钪鈮铌鈰铈鈳钶鈴铃鈷钴鈸钹鈹铍鈺钰鈽钸鈾铀鈿钿鉀钾鉅巨鉆钻鉈铊鉉铉鉋铇鉍铋鉑铂鉕钷鉗钳鉚铆鉛铅鉞钺鉢钵鉤钩鉦钲鉬钼鉭钽鉳锫鉶铏鉸铰鉺铒鉻铬鉿铪銀银銃铳銅铜銍铚銑铣銓铨銖铢銘铭銚铫銛铦銜衔銠铑銣铷銥铱銦铟銨铵銩铥銪铕銫铯銬铐銱铞銳锐銷销銹锈銻锑銼锉鋁铝鋃锒鋅锌鋇钡鋌铤鋏铗鋒锋鋙铻鋝锊鋟锓鋣铘鋤锄鋥锃鋦锔鋨锇鋩铓鋪铺鋭锐鋮铖鋯锆鋰锂鋱铽鋶锍鋸锯鋼钢錁锞錄录錆锖錇锫錈锩錏铔錐锥錒锕錕锟錘锤錙锱錚铮錛锛錟锬錠锭錡锜錢钱錦锦錨锚錩锠錫锡錮锢錯错録录錳锰錶表錸铼錼镎鍀锝鍁锨鍃锪鍅钫鍆钔鍇锴鍈锳鍊炼鍋锅鍍镀鍔锷鍘铡鍚钖鍛锻鍠锽鍤锸鍥锲鍩锘鍬锹鍰锾鍵键鍶锶鍺锗鍼针鍾钟鎂镁鎄锿鎇镅鎊镑鎌镰鎔镕鎖锁鎘镉鎚锤鎛镈鎡镃鎢钨鎣蓥鎦镏鎧铠鎩铩鎪锼鎬镐鎭镇鎮镇鎰镒鎲镋鎳镍鎵镓鎶鿔鎸镌鎿镎鏃镞鏇旋鏈链鏌镆鏍镙鏐镠鏑镝鏗铿鏘锵鏜镗鏝镘鏞镛鏟铲鏡镜鏢镖鏤镂鏨錾鏰镚鏵铧鏷镤鏹镪鏺䥽鏽锈鐃铙鐋铴鐐镣鐒铹鐓镦鐔镡鐘钟鐙镫鐝镢鐠镨鐥䦅鐦锎鐧锏鐨镄鐫镌鐮镰鐯䦃鐲镯鐳镭鐵铁鐶镮鐸铎鐺铛鐿镱鑄铸鑊镬鑌镔鑑鉴鑒鉴鑔镲鑕锧鑞镴鑠铄鑣镳鑥镥鑭镧鑰钥鑱镵鑲镶鑷镊鑹镩鑼锣鑽钻鑾銮鑿凿钁镢钂镋長长門门閂闩閃闪閆闫閈闬閉闭開开閌闶閎闳閏闰閑闲閒闲間间閔闵閘闸閡阂閣阁閤合閥阀閨闺閩闽閫阃閬阆閭闾閱阅閲阅閶阊閹阉閻阎閼阏閽阍閾阈閿阌闃阒闆板闇暗闈闱闊阔闋阕闌阑闍阇闐阗闒阘闓闿闔阖闕阙闖闯關关闞阚闠阓闡阐闢辟闤阛闥闼陘陉陝陕陞升陣阵陰阴陳陈陸陆陽阳隉陧隊队階阶隕陨際际隨随險险隯陦隱隐隴陇隸隶隻只雋隽雖虽雙双雛雏雜杂雞鸡離离難难雲云電电霑沾霢霡霧雾霽霁靂雳靄霭靆叇靈灵靉叆靚靓靜静靝靔靦腼靨靥鞏巩鞝绱鞦秋鞽鞒韁缰韃鞑韆千韉鞯韋韦韌韧韍韨韓韩韙韪韜韬韝鞲韞韫韻韵響响頁页頂顶頃顷項项順顺頇顸須须頊顼頌颂頎颀頏颃預预頑顽頒颁頓顿頗颇領领頜颌頡颉頤颐頦颏頭头頮颒頰颊頲颋頴颕頷颔頸颈頹颓頻频頽颓顆颗題题額额顎腭顏颜顒颙顓颛顔颜願愿顙颡顛颠類类顢颟顥颢顧顾顫颤顬颥顯显顰颦顱颅顳颞顴颧風风颭飐颮飑颯飒颱台颳刮颶飓颸飔颺飏颻飖颼飕飀飗飄飘飆飙飈飚飛飞飠饣飢饥飣饤飥饦飩饨飪饪飫饫飭饬飯饭飱飧飲饮飴饴飼饲飽饱飾饰飿饳餃饺餄饸餅饼餈糍餉饷養养餌饵餎饹餏饻餑饽餒馁餓饿餕馂餖饾餘余餚肴餛馄餜馃餞饯餡馅館馆餬糊餱糇餳饧餵喂餶馉餷馇餺馎餼饩餾馏餿馊饁馌饃馍饅馒饈馐饉馑饊馓饋馈饌馔饑饥饒饶饗飨饜餍饞馋饢馕馬马馭驭馮冯馱驮馳驰馴驯馹驲駁驳駐驻駑驽駒驹駔驵駕驾駘骀駙驸駛驶駝驼駟驷駡骂駢骈駭骇駰骃駱骆駸骎駿骏騁骋騂骍騅骓騌骔騍骒騎骑騏骐騖骛騙骗騤骙騧䯄騫骞騭骘騮骝騰腾騶驺騷骚騸骟騾骡驀蓦驁骜驂骖驃骠驄骢驅驱驊骅驌骕驍骁驏骣驕骄驗验驚惊驛驿驟骤驢驴驤骧驥骥驦骦驪骊驫骉骯肮髏髅髒脏體体髕髌髖髋髮发鬆松鬍胡鬚须鬢鬓鬥斗鬧闹鬨哄鬩阋鬮阄鬱郁鬹鬶魎魉魘魇魚鱼魛鱽魢鱾魨鲀魯鲁魴鲂魷鱿魺鲄鮁鲅鮃鲆鮊鲌鮋鲉鮍鲏鮎鲇鮐鲐鮑鲍鮒鲋鮓鲊鮚鲒鮜鲘鮝鲞鮞鲕鮣䲟鮦鲖鮪鲔鮫鲛鮭鲑鮮鲜鮳鲓鮶鲪鮺鲝鯀鲧鯁鲠鯇鲩鯉鲤鯊鲨鯒鲬鯔鲻鯕鲯鯖鲭鯗鲞鯛鲷鯝鲴鯡鲱鯢鲵鯤鲲鯧鲳鯨鲸鯪鲮鯫鲰鯰鲇鯴鲺鯷鳀鯽鲫鯿鳊鰁鳈鰂鲗鰃鳂鰆䲠鰈鲽鰉鳇鰌䲡鰍鳅鰏鲾鰐鳄鰒鳆鰓鳃鰛鳁鰜鳒鰟鳑鰠鳋鰣鲥鰥鳏鰧䲢鰨鳎鰩鳐鰭鳍鰮鳁鰱鲢鰲鳌鰳鳓鰵鳘鰷鲦鰹鲣鰺鲹鰻鳗鰼鳛鰾鳔鱂鳉鱅鳙鱈鳕鱉鳖鱒鳟鱔鳝鱖鳜鱗鳞鱘鲟鱝鲼鱟鲎鱠鲙鱣鳣鱤鳡鱧鳢鱨鲿鱭鲚鱯鳠鱷鳄鱸鲈鱺鲡鳥鸟鳧凫鳩鸠鳬凫鳲鸤鳳凤鳴鸣鳶鸢鳾䴓鴆鸩鴇鸨鴉鸦鴒鸰鴕鸵鴛鸳鴝鸲鴞鸮鴟鸱鴣鸪鴦鸯鴨鸭鴯鸸鴰鸹鴴鸻鴷䴕鴻鸿鴿鸽鵁䴔鵂鸺鵃鸼鵐鹀鵑鹃鵒鹆鵓鹁鵜鹈鵝鹅鵠鹄鵡鹉鵪鹌鵬鹏鵮鹐鵯鹎鵰雕鵲鹊鵷鹓鵾鹍鶄䴖鶇鸫鶉鹑鶊鹒鶓鹋鶖鹙鶘鹕鶚鹗鶡鹖鶥鹛鶩鹜鶪䴗鶬鸧鶯莺鶲鹟鶴鹤鶹鹠鶺鹡鶻鹘鶼鹣鶿鹚鷀鹚鷁鹢鷂鹞鷄鸡鷉䴘鷊鹝鷓鹧鷖鹥鷗鸥鷙鸷鷚鹨鷥鸶鷦鹪鷫鹔鷯鹩鷲鹫鷳鹇鷴鹇鷸鹬鷹鹰鷺鹭鷽鸴鸂㶉鸇鹯鸊䴙鸌鹱鸏鹲鸕鸬鸘鹴鸚鹦鸛鹳鸝鹂鸞鸾鹵卤鹹咸鹺鹾鹼碱鹽盐麗丽麥麦麩麸麪面麫面麯曲麴曲麵面麼么麽么黃黄黌黉點点黨党黲黪黴霉黶黡黷黩黽黾黿鼋鼂鼌鼉鼍鼕冬鼴鼹齊齐齋斋齎赍齏齑齒齿齔龀齕龁齗龂齙龅齜龇齟龃齠龆齡龄齣出齦龈齧啮齪龊齬龉齲龋齶腭齷龌龍龙龎厐龐庞龑䶮龔龚龕龛龜龟鿁䜤鿓鿒",RexHomeT2SMap=null;

function rexHomeT2S(v){
 if(typeof v!=='string'||!v)return v;
 if(!RexHomeT2SMap){RexHomeT2SMap={};for(var i=0;i<RexHomeT2SPairs.length;i+=2)RexHomeT2SMap[RexHomeT2SPairs[i]]=RexHomeT2SPairs[i+1];}
 var out='';for(var j=0;j<v.length;j++){var c=v[j];out+=RexHomeT2SMap[c]||c;}return out;
}

function rexHomeUnique(items,keyFns){
 var seen=keyFns.map(function(){return new Set();});
 return (items||[]).filter(function(x){
  if(!x)return false;var keys=keyFns.map(function(f){return f(x);});
  for(var i=0;i<keys.length;i++)if(keys[i]!==''&&seen[i].has(keys[i]))return false;
  keys.forEach(function(k,i){if(k!=='')seen[i].add(k);});return true;
 });
}

function rexHomeKeyId(x){return x.id;}

async function rexHomeCnPosters(items){
 // v64：不再逐部查询海报。列表请求已带 language=zh-CN，片库会直接返回简体中文海报（没有时用原版海报）。
 // 海报整理阶段不再额外请求图片；片单补页和按需校验使用各自预算。
 if(!Array.isArray(items))return items;
 return items.map(rexHomeFinishItem);
}

function rexHomeFinishItem(item){
 if(!item||typeof item!=='object')return item;
 // 只整理回传副本；按同作者现行 Rex 插件使用纯数字 ID 字符串与 mediaType。
 // 编号兼容性仍需手机验证，缓存和去重继续使用内部原始数据。
 var out=Object.assign({},item);
 ['title','description','genreTitle'].forEach(function(k){if(typeof out[k]==='string')out[k]=rexHomeT2S(out[k]);});
 if(out.type==='tmdb'&&(out.mediaType==='movie'||out.mediaType==='tv')){
  var raw=String(out.id==null?'':out.id),match=raw.match(/^(?:movie|tv)\.(\d+)$/),num=match?match[1]:raw;
  if(rexHomeValidId(num))out.id=String(Number(num));
 }
 if(out.rating!=null)out.rating=String(out.rating);
 var imgSizes={posterPath:'w500',backdropPath:'w780',coverUrl:'w780'};
 Object.keys(imgSizes).forEach(function(k){if(out[k]){var v=rexHomeNativeImage(out[k],imgSizes[k]);if(/^https:\/\//.test(v))out[k]=v;else delete out[k];}});
 return out;
}

function rexHomeTitle(item, media) {
  var value=media==='movie'?item.title:item.name;
  return typeof value==='string'?value.trim():'';
}

async function rexHomeMapLimited(items,worker,limit) {
  limit=Number.isInteger(limit)&&limit>=1?Math.min(limit,8):4;
  var output=new Array(items.length), cursor=0,stopped=false;
  async function run(){
    while(!stopped&&cursor<items.length){
     var index=cursor++;
     try{output[index]=await worker(items[index]);}
     catch(error){stopped=true;throw error;}
    }
  }
  await Promise.all(Array.from({length:Math.min(limit,items.length)},run));
  return output;
}

var rexHomeDoubanLimitedUntil=0;

async function rexHomeDoubanGet(url){
 return rexHomeRetryTransport(function(){return rexHomeRequestSlot('douban',async function(){
  if(rexHomeDoubanLimitedUntil>Date.now()){var limited=new Error('豆瓣来源暂时限流，请稍后重试');limited.code='REXHOME_DOUBAN_LIMITED';throw limited;}
  var r;
  try{r=await rexHomeTimedRequest(Promise.resolve().then(function(){return Widget.http.get(url,{headers:{'Referer':'https://m.douban.com/','User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148'}});}),RexHomeRequestPolicy.timeoutMs,'豆瓣分类／榜单请求超时，请刷新重试','REXHOME_DOUBAN_TIMEOUT');}
  catch(error){if(error&&error.code==='REXHOME_DOUBAN_TIMEOUT')throw error;var failed=new Error('豆瓣分类／榜单请求失败，请稍后刷新');failed.code='REXHOME_DOUBAN_NETWORK';failed.retryable=true;throw failed;}
  var status=Number(r&&(r.statusCode||r.status));
  if(status===403||status===418||status===429){rexHomeDoubanLimitedUntil=Date.now()+1800000;var error=new Error('豆瓣来源拒绝访问或限流（HTTP '+status+'），暂停请求30分钟');error.code='REXHOME_DOUBAN_LIMITED';throw error;}
  if(status>=400){var httpError=new Error('豆瓣分类／榜单返回 HTTP '+status+'，请稍后重试');httpError.code='REXHOME_DOUBAN_HTTP';httpError.retryable=status>=500;throw httpError;}
  var d=r&&r.data;if(typeof d==='string'){try{d=JSON.parse(d);}catch(_){d=null;}}
  if(!d||typeof d!=='object')throw new Error('豆瓣分类／榜单回应格式异常，请稍后重试');return d;
 });});
}

function rexHomeDoubanName(v){return String(v||'').trim().toLowerCase().replace(/[\s·:：,，!！?？'"“”‧・()（）\[\]【】.。\-—]/g,'');}

async function rexHomeRowSeries(params){return rexHomeSimpleRecommend('rowSeries',params);}

async function rexHomeRowMovie(params){return rexHomeSimpleRecommend('rowMovie',params);}

async function rexHomeRowAnime(params){return rexHomeSimpleRecommend('rowAnime',params);}

async function rexHomeRowVariety(params){return rexHomeSimpleRecommend('rowVariety',params);}

// 沿用 @rexnow/douban 的完整模式协议：POST /v1/items，密钥只放 Authorization。
// 来源：https://github.com/baranwang/douban-bridge/blob/025a4d5fda34f4b353bfd6bf204e4b769a161993/apps/rex-widget/src/cloud.ts
function rexHomeDoubanPlaceholder(value){
 var url=typeof value==='string'?value.trim():'';
 if(/^https:\/\/douban-bridge\.baran\.wang\/image-proxy\//i.test(url)){
  var embedded=url.match(/[?&]url=([^&]+)/);if(embedded)try{url=decodeURIComponent(embedded[1]);}catch(_){return false;}
 }
 if(!/^https:\/\/(?:[a-z0-9-]+\.)*doubanio\.com\//i.test(url))return false;
 var path=url.split(/[?#]/)[0];
 return /\/pics\/subject\/(?:tv|movie)_(?:large|normal|small)\.(?:png|jpe?g|gif)$/i.test(path)||/\/pics\/(?:movie|tv)-default-(?:large|small|medium|lpic|mpic|spic)\.(?:png|jpe?g|gif)$/i.test(path);
}
function rexHomeDoubanPoster(values){
 for(var i=0;i<values.length;i++){var url=rexHomeImage(values[i],true);if(url&&!rexHomeDoubanPlaceholder(url))return url;}
 return '';
}
function rexHomeBridgeCacheScope(secret){
 // 仅区分本机公开片单缓存；不把密钥原文写进缓存键、日志或请求网址。
 var first=2166136261,second=2246822507;
 for(var i=0;i<secret.length;i++){var n=secret.charCodeAt(i);first=Math.imul(first^n,16777619);second=Math.imul(second^n,3266489909);}
 return (first>>>0).toString(16)+'.'+(second>>>0).toString(16)+'.'+secret.length;
}
async function rexHomeBridgeItems(ids,secret){
 if(!Widget.http||typeof Widget.http.post!=='function')throw new Error('当前环境不支持豆瓣完整模式，请更新Rex或选择基础匹配模式');
 return rexHomeRetryTransport(function(){return rexHomeRequestSlot('bridge',async function(){
  var response;
  try{response=await rexHomeTimedRequest(Promise.resolve().then(function(){return Widget.http.post('https://douban-bridge.baran.wang/v1/items',{ids:ids},{headers:{Authorization:'Bearer '+secret,'Content-Type':'application/json'}});}),RexHomeRequestPolicy.timeoutMs,'豆瓣完整模式请求超时，请刷新重试','REXHOME_BRIDGE_TIMEOUT');}
  catch(error){if(error&&error.code==='REXHOME_BRIDGE_TIMEOUT')throw error;var network=new Error('豆瓣完整模式连接失败，请刷新重试');network.code='REXHOME_BRIDGE_NETWORK';network.retryable=true;throw network;}
  var status=Number(response&&(response.statusCode||response.status));
  if(status!==200){var failure=new Error(status===401||status===403?'豆瓣密钥未授权，请在Rex本机检查密钥与原豆瓣模块的完整模式状态':status===429?'豆瓣完整模式暂时限流，请稍后重试':'豆瓣完整模式返回 HTTP '+status);failure.code='REXHOME_BRIDGE_HTTP';failure.retryable=status>=500;throw failure;}
  var data=response.data;if(typeof data==='string')try{data=JSON.parse(data);}catch(_){data=null;}
  if(!data||!Array.isArray(data.items)){var malformed=new Error('豆瓣完整模式返回格式异常，请刷新重试');malformed.code='REXHOME_BRIDGE_FORMAT';throw malformed;}
  return data.items;
 });});
}
function rexHomeBridgeMapper(secret,categoryTitle){
 var mapper=async function(rows,media,label,audit,range){
  var eligible=[],byId=Object.create(null),excluded=0;
  rows.forEach(function(row){
   if(row.type&&(row.type==='movie'||row.type==='tv')&&row.type!==media){audit.wrongMediaSubjects=(audit.wrongMediaSubjects||0)+1;return;}
   var year=String(row.year||'');
   if(/^\d{4}$/.test(year)&&(year<range.gte.slice(0,4)||range.lte&&year>range.lte.slice(0,4))){excluded++;return;}
   eligible.push(Number(row.id));byId[String(Number(row.id))]=row;
  });
  audit.yearExcludedSubjects=(audit.yearExcludedSubjects||0)+excluded;
  if(!eligible.length)return [];
  var result=await rexHomeBridgeItems(eligible,secret),seen=Object.create(null),cards=[];
  eligible.forEach(function(requestedId){
   var item=result.find(function(value){return value&&rexHomeValidId(value.doubanId)&&Number(value.doubanId)===requestedId;});
   if(!item||!rexHomeValidId(item.doubanId))return;
   var id=String(Number(item.doubanId)),row=byId[id];
   if(!row||seen[id])return;seen[id]=true;
   if(item.mediaType!==media||typeof item.title!=='string'||!item.title.trim()){audit.bridgeInvalidSubjects=(audit.bridgeInvalidSubjects||0)+1;return;}
   var year=item.year==null||item.year===''?String(row.year||''):String(item.year);
   if(!/^\d{4}$/.test(year)){audit.unknownYearSubjects=(audit.unknownYearSubjects||0)+1;return;}
   if(year<range.gte.slice(0,4)||range.lte&&year>range.lte.slice(0,4)){audit.yearExcludedSubjects++;return;}
   var images=item.images||{},poster=rexHomeImage(images.poster,false);
   if(!poster||rexHomeDoubanPlaceholder(poster)){audit.missingPosterSubjects=(audit.missingPosterSubjects||0)+1;return;}
   var type='douban',targetId=id;
   if(rexHomeValidId(item.tmdbId)){type='tmdb';targetId=String(Number(item.tmdbId));}
   else if(typeof item.imdbId==='string'&&/^tt\d+$/.test(item.imdbId)){type='imdb';targetId=item.imdbId;}
   var card={id:targetId,type:type,mediaType:media,title:item.title,releaseDate:year,posterPath:poster,coverUrl:poster,genreTitle:String(categoryTitle||label||'影片').split(' · ')[0],description:'豆瓣片名：'+row.title+'\n豆瓣分类：'+String(categoryTitle||label||'影片')+'\n豆瓣完整模式\n'+String(item.description||'')};
   var background=rexHomeImage(images.background,false);if(background&&!rexHomeDoubanPlaceholder(background))card.backdropPath=background;
   if(typeof item.rating==='number'&&Number.isFinite(item.rating)&&item.rating>=0&&item.rating<=10){card.rating=String(item.rating);card.description='豆瓣评分：'+card.rating+'\n'+card.description;}
   cards.push(card);
  });
  audit.bridgeMissingSubjects=(audit.bridgeMissingSubjects||0)+eligible.filter(function(id){return !seen[String(id)];}).length;
  audit.matchedSubjects+=cards.length;
  // 同一列表可能同时出现TMDB、IMDb与豆瓣身份，按类型＋形式＋编号去重。
  return rexHomeUnique(cards,[rexHomeBridgeIdentity]);
 };
 mapper.rexHomeIdentity='bridge.'+rexHomeBridgeCacheScope(secret);
 return mapper;
}
function rexHomeBridgeIdentity(item){return item.type+':'+item.mediaType+':'+item.id;}

// 原始模式仍可手动选择，但默认改回标准豆瓣资料路径。
function rexHomeDocumentaryNativeRows(rows,media,label,audit,range){
 range=range||rexHomeHomepageYear();var cards=[];
 rows.forEach(function(row){
  if(row.type&&(row.type==='movie'||row.type==='tv')&&row.type!==media){audit.wrongMediaSubjects=(audit.wrongMediaSubjects||0)+1;return;}
  var year=String(row.year||'');
  if(!/^\d{4}$/.test(year))year=(String(row.card_subtitle||'').match(/(?:^|\s)(\d{4})(?:\s|\/|$)/)||[])[1]||'';
  if(!year){audit.unknownYearSubjects=(audit.unknownYearSubjects||0)+1;return;}
  if(year<range.gte.slice(0,4)||(range.lte&&year>range.lte.slice(0,4))){audit.yearExcludedSubjects=(audit.yearExcludedSubjects||0)+1;return;}
  var pic=row.pic||{},poster=rexHomeDoubanPoster([pic.large,pic.normal,typeof row.cover==='string'?row.cover:row.cover&&row.cover.url,row.cover_url]);
  if(!poster){audit.missingPosterSubjects=(audit.missingPosterSubjects||0)+1;return;}
  var item={id:String(Number(row.id)),type:'douban',mediaType:media,title:row.title,posterPath:poster,coverUrl:poster,releaseDate:year,
   genreTitle:String(label||'纪录片').split(' · ')[0],description:'豆瓣'+String(label||'纪录片').split(' · ')[0]+' · '+year+'\n'+String(row.card_subtitle||'')};
  var rating=row.rating,value=rating?rexHomeCountedRating(rating.value,rating.count,rating.max):null;if(value!=null)item.rating=String(value);
  cards.push(item);
 });
 audit.matchedSubjects+=cards.length;
 return rexHomeUnique(cards,[rexHomeKeyId]);
}

function rexHomeDoubanNativeRows(rows,media,label,audit,range){return rexHomeDocumentaryNativeRows(rows,media,label,audit,range);}

async function rexHomeRowDocumentary(params){
 params=params||{};var catalog=String(params.catalog||RexHomeDefaultCatalog),secret=String(params.sk||'').trim();
 if(['library','auto','douban','tmdb'].indexOf(catalog)<0)throw new Error('请选择有效的纪录片片单模式');
 var useBridge=catalog==='auto'&&!!secret,mapper=useBridge?rexHomeBridgeMapper(secret):catalog==='douban'?rexHomeDocumentaryNativeRows:null;
 var items=await rexHomeSimpleRecommend('rowDocumentary',params,mapper);
 if(typeof console!=='undefined'&&typeof console.log==='function')console.log('[纪录片 '+RexHomeVer+'] '+(catalog==='library'?'TMDB分类片库':useBridge?'豆瓣完整模式':catalog==='douban'?'豆瓣原始条目':'基础匹配模式')+' · '+String(params.media||RexHomeSimpleKinds.rowDocumentary.media)+' · 年份'+String(params.year||'all')+' · 本页'+items.length+'条');
 return items;
}

function rexHomeConcertTourKey(item){
 if(!item||!/^\d{4}/.test(String(item.releaseDate||'')))return '';
 var title=rexHomeT2S(String(item.title||'')).trim(),base=title;
 base=base.replace(/\s*[（(][^()（）]{1,40}站(?:[\s\d年月日./:\-]*)[）)]\s*$/,'');
 base=base.replace(/\s*[：:·•|｜\-—]\s*[^：:·•|｜()（）]{1,30}站(?:[\s\d年月日./:\-]*)$/,'');
 if(base===title||!/演唱会|音乐会|巡演|\btour\b|\blive\b|\bconcert\b/i.test(base))base=title.replace(/^(.*(?:演唱会|音乐会|巡演|\btour\b|\blive\b|\bconcert\b))\s*[^：:()（）]{1,20}站(?:[\s\d年月日./:\-]*)$/i,'$1');
 base=base.trim();
 if(base===title||!base||!/演唱会|音乐会|巡演|\btour\b|\blive\b|\bconcert\b/i.test(base))return '';
 var normalized=rexHomeDoubanName(base).replace(/[「」『』《》|｜]/g,'');
 return normalized?'concert:'+String(item.releaseDate).slice(0,4)+':'+normalized:'';
}

// 资源记录来自用户截图；不扫描或调用其他模块，也不存储短期播放链接。
// 以下是“已出现资源”，并不等于实机已成功起播或当前仍然可用。
var RexHomeConcertFoundCatalog=[
 {key:'dear-jane-dearest-2025-movie',title:'Dear Jane - Dearest Dear Jane Live 2025',releaseDate:'2026-01-13',category:'concert',
  evidence:{kind:'resource-list-screenshot',status:'resources-found',checkedAt:'2026-10-23',quality:'1080P',playbackVerified:false}},
 {key:'greater-bay-mid-autumn-2021',title:'“湾区升明月”2021大湾区中秋电影音乐晚会',releaseDate:'2021-09-21',category:'gala',
  evidence:{kind:'resource-list-screenshot',status:'resources-found',checkedAt:'2026-10-23',quality:'4K',playbackVerified:false}}
];
var RexHomeFoundConcertPolicy={scanEntries:8,scanTimeMs:2500,requestTimeoutMs:5000};

function rexHomeFoundConcertRecords(params){
 params=params||{};var category=String(params.category||'all'),year=String(params.year||'all');
 if(['all','concert','gala'].indexOf(category)<0)throw new Error('请选择有效的音乐现场类型');
 var yearRange;try{yearRange=rexHomeHomepageYear(year);}catch(_){throw new Error('请选择有效的音乐现场年份');}
 var today=rexHomeToday(),seen=Object.create(null);
 return RexHomeConcertFoundCatalog.filter(function(record){
  if(!record||typeof record.key!=='string'||!record.key||typeof record.title!=='string'||!record.title.trim())return false;
  if(['concert','gala'].indexOf(record.category)<0||category!=='all'&&category!==record.category)return false;
  var date=rexHomeDate(record.releaseDate),e=record.evidence;
  if(!date||date>today||date<yearRange.gte||yearRange.lte&&date>yearRange.lte)return false;
  if(!e||e.kind!=='resource-list-screenshot'||e.status!=='resources-found'||!rexHomeDate(e.checkedAt))return false;
  if(seen[record.key])return false;seen[record.key]=true;return true;
 }).slice().sort(function(a,b){return b.releaseDate.localeCompare(a.releaseDate)||a.key.localeCompare(b.key);});
}

async function rexHomeResolveFoundConcert(record){
 var names=[record.title].concat(Array.isArray(record.aliases)?record.aliases:[]).map(function(x){return rexHomeDoubanName(rexHomeT2S(String(x)));});
 var response=await rexHomeApi('/search/movie',{query:record.title,year:record.releaseDate.slice(0,4),language:'zh-CN',include_adult:false,page:1},300000,{timeoutMs:RexHomeFoundConcertPolicy.requestTimeoutMs});
 var candidates=response.results.filter(function(movie){
  if(!movie||!rexHomeValidId(movie.id)||movie.media_type&&movie.media_type!=='movie'||!rexHomeImage(movie.poster_path))return false;
  if(rexHomeDate(movie.release_date)!==record.releaseDate)return false;
  return [movie.title,movie.original_title].some(function(title){return names.indexOf(rexHomeDoubanName(rexHomeT2S(title||'')))>=0;});
 });
 var byId=Object.create(null);candidates=candidates.filter(function(movie){var id=String(Number(movie.id));if(byId[id])return false;byId[id]=true;return true;});
 if(candidates.length!==1)return {item:null,reason:candidates.length?'ambiguous':'identity-unresolved'};
 var item=rexHomeMatchedCard({x:candidates[0]},'movie',record.title,record.category==='gala'?'音乐晚会':'演唱会');
 item.title=record.title;
 return {item:item,reason:null};
}

async function rexHomeFoundConcertList(params){
 params=params||{};var ps=rexHomeSimplePage(params),records=rexHomeFoundConcertRecords(params);
 var fingerprint=rexHomeStable(records.map(function(r){return [r.key,r.title,r.releaseDate,r.category,r.aliases||[],r.evidence.checkedAt];}));
 var key=RexHomeVer+':found.concert.'+String(params.category||'all')+'.'+String(params.year||'all')+':'+fingerprint;
 return rexHomeSeqList(key,300000,{page:ps.page,pageSize:ps.size},async function(prev){
  var items=prev?prev.items.slice():[],cursor=prev?prev.cursor:0,started=Date.now(),read=0,readError=null;
  var stats=Object.assign({sourceReportedTotal:records.length,scannedRecords:0,eligibleRecords:0,validUniqueMovies:0,duplicateMovies:0,identityUnresolved:0,identityAmbiguous:0,
   countUnit:'截图确认资源的影片条目',resourceEvidence:'user-screenshot',automaticResourceProbe:false,playbackVerified:false},prev&&prev.stats||{});
  while(cursor<records.length&&items.length<ps.page*ps.size&&read<RexHomeFoundConcertPolicy.scanEntries&&Date.now()-started<RexHomeFoundConcertPolicy.scanTimeMs){
   try{
    var resolved=await rexHomeResolveFoundConcert(records[cursor]);
    if(resolved.item){stats.eligibleRecords++;items=rexHomeUnique(items.concat([resolved.item]),[rexHomeKeyId]);}
    else if(resolved.reason==='ambiguous')stats.identityAmbiguous++;else stats.identityUnresolved++;
    cursor++;read++;stats.scannedRecords++;
   }catch(error){readError={code:error&&error.code||'REXHOME_FOUND_CONCERT_LOOKUP',message:String(error&&error.message||error)};break;}
  }
  var done=cursor>=records.length;
  stats.validUniqueMovies=items.length;stats.duplicateMovies=stats.eligibleRecords-items.length;stats.sourceExhausted=done;
  stats.scanLimited=!done&&items.length<ps.page*ps.size;stats.scanStopReason=readError?'request-failed':done?'exhausted':items.length>=ps.page*ps.size?'page-filled':read>=RexHomeFoundConcertPolicy.scanEntries?'entry-budget':'time-budget';stats.lastReadError=readError;
  stats.remainingConfirmedEntries=records.length-cursor;
  return {items:items,cursor:cursor,done:done,scanLimited:stats.scanLimited,readError:readError,stats:stats,label:'已找到资源的演唱会／音乐现场',mediaType:'movie'};
 },null);
}


async function rexHomeConcertLibraryList(params){
 params=rexHomePublicPageParams(params);rexHomeSimplePage(params);
 var category=String(params.category||'all'),sort=String(params.sort||'U'),region=String(params.region||'');
 if(RexHomeSimpleRegions.indexOf(region)<0)throw new Error('请选择有效的地区');
 if(['all','concert','gala'].indexOf(category)<0)throw new Error('请选择有效的音乐现场类型');
 // 晚会只有历史确认名单；不把普通电影或其他综艺补到这个子分类。
 if(category==='gala')return rexHomeFoundConcertList(params);
 if(!RexHomeSimpleSorts.some(function(x){return x.value===sort;}))throw new Error('请选择有效的排序');
 var range=rexHomeHomepageYear(params.year),keyword=await rexHomeLibraryKeyword('演唱会');
 var query={language:'zh-CN',include_adult:false,with_genres:'10402',with_keywords:keyword,without_genres:'16,18,35,10749',
  sort_by:sort==='R'?'primary_release_date.desc':sort==='S'?'vote_average.desc':'popularity.desc',
  'primary_release_date.lte':range.lte&&range.lte<rexHomeToday()?range.lte:rexHomeToday(),'vote_count.gte':sort==='S'?30:0};
 if(range.gte)query['primary_release_date.gte']=range.gte;
 var countries=region?RexHomeLibraryRegions[region]:null;
 if(countries&&countries.include)query.with_origin_country=countries.include.join('|');
 var plan={media:'movie',required:[[10402]],excluded:[16,18,35,10749],countries:countries};
 var mapper=async function(rows,media,label,audit,yearRange){
  var items=await rexHomeLibraryCards(rows,{movie:plan},label,audit,yearRange);
  items.forEach(function(item){item.description='演唱会关键词分类；播放资源由已安装的资源模块另行查找。\n'+item.description;});
  return items;
 };
 mapper.rexHomeIdentity='library';mapper.rexHomeMode='tmdb';
 var fetchPage=async function(start){
  var page=start/20+1,data=await rexHomeApi('/discover/movie',Object.assign({},query,{page:page}),3600000);
  var pages=typeof data.total_pages==='number'&&Number.isSafeInteger(data.total_pages)&&data.total_pages>=0?data.total_pages:null;
  for(var ahead=page+1;ahead<=Math.min(page+3,pages==null?page:Math.min(pages,500));ahead++)rexHomeApi('/discover/movie',Object.assign({},query,{page:ahead}),3600000).catch(function(){});
  var out={items:data.results.map(function(row){return row&&typeof row==='object'?Object.assign({},row,{title:rexHomeTitle(row,'movie'),rexHomeSourceMedia:'movie'}):row;}),
   rexHomeHasMore:pages!=null?page<pages:data.results.length>=20,rexHomeRequestCount:1};
  if(typeof data.total_results==='number'&&Number.isSafeInteger(data.total_results)&&data.total_results>=0)out.total=data.total_results;
  return out;
 };
 fetchPage.rexHomeExplicitMore=true;
 return rexHomeSimpleSourceSequence('library.concert:'+rexHomeStable(query),params,fetchPage,'movie','演唱会／音乐现场',mapper,range);
}

async function rexHomeRowConcert(params){
 params=params||{};var catalog=String(params.catalog||'library');
 if(catalog==='found')return rexHomeFoundConcertList(params);
 if(catalog!=='library')throw new Error('请选择有效的音乐现场来源');
 return rexHomeConcertLibraryList(params);
}


async function rexHomeRowCharts(params){params=params||{};var key=String(params.sub||'db_hot_tv');if(key==='db_top250')key='db_classics';var config=RexHomeSimpleCharts[key];if(!config)throw new Error('请选择有效的豆瓣榜单');return rexHomeSimpleCollection(config,params);}

var RexHomeGroups={
 zh:{origin:['CN','HK','TW','MO'],lang:['zh','cn']},
 west:{origin:['US','GB','CA','AU','IE','NZ','FR','DE','ES','IT','NL','BE','SE','DK','NO','FI','PL'],lang:['en','fr','de','es','it','nl','sv','da','no','fi','pl','ga']},
 jk:{origin:['JP','KR'],lang:['ja','ko']},
 other:{origin:['TH','IN','BR','AR','MX','CO','CL','PE','TR','PH','ID','VN','MY','EG','NG','ZA','RU','UA','IR','IL','SA'],notLang:['zh','cn','ja','ko','en']},
 cn:{origin:['CN'],lang:['zh']},tw:{origin:['TW'],lang:['zh']},hk:{origin:['HK'],lang:['zh']},
 jp:{origin:['JP'],lang:['ja']},
 notAsia:{notOrigin:['CN','HK','TW','MO','JP'],notLang:['zh','cn','ja']},
 notCn:{notOrigin:['CN','HK','TW','MO'],notLang:['zh','cn']},
 all:{}
};

var RexHomeConcertKeywords='156205|318730|304615';

function rexHomeV62Query(spec,sort,page){
 var g=RexHomeGroups[spec.group||'all'],m=spec.media==='movie',dk=m?'primary_release_date':'first_air_date',q={language:'zh-CN',include_adult:false,page:page};
 if(g.origin)q.with_origin_country=g.origin.join('|');
 if(g.notOrigin)q.without_origin_country=g.notOrigin.join('|');
 if(g.lang&&g.lang.length===1)q.with_original_language=g.lang[0];
 if(spec.genres)q.with_genres=spec.genres;
 var ex=(spec.exclude||[]).slice();if(ex.length)q.without_genres=ex.join(',');
 if(spec.keywords)q.with_keywords=spec.keywords;
 if(spec.withoutKeywords)q.without_keywords=spec.withoutKeywords;
 if(spec.network)q.with_networks=String(spec.network);
 if(spec.company)q.with_companies=String(spec.company);
 if(spec.people)q.with_people=String(spec.people);
 if(spec.minRuntime)q['with_runtime.gte']=spec.minRuntime;
 q[dk+'.lte']=rexHomeToday();
 
 if(!m)q['air_date.lte']=rexHomeToday();
 if(spec.yearSpan){if(spec.yearSpan.gte){if(!m&&spec.yearSpan.recent)q['air_date.gte']=spec.yearSpan.gte;else q[dk+'.gte']=spec.yearSpan.gte;}if(spec.yearSpan.lte&&spec.yearSpan.lte<q[dk+'.lte'])q[dk+'.lte']=spec.yearSpan.lte;}
 var minVotes=spec.minVotes!=null?spec.minVotes:(spec.group==='west'||spec.group==='jk'?20:3);
 if(spec.status!=null)q.with_status=String(spec.status);
 if(sort==='new'){q.sort_by=dk+'.desc';q['vote_count.gte']=0;}
 else if(sort==='top'){q.sort_by='vote_average.desc';q['vote_count.gte']=spec.topVotes||(RexHomeTopVotes[spec.group||'']||RexHomeTopVotes.base);}
 else {q.sort_by='popularity.desc';q['vote_count.gte']=0;}
 return q;
}

function rexHomeV62Fits(spec,x){
 if(!x||typeof x!=='object'||(x.genre_ids!=null&&!Array.isArray(x.genre_ids)))return false;
 var g=RexHomeGroups[spec.group||'all'],lang=String(x.original_language||''),oc=Array.isArray(x.origin_country)?x.origin_country:[];
 if(!g||!rexHomeValidId(x.id)||!x.poster_path)return false;
 if(g.lang&&g.lang.indexOf(lang)<0)return false;
 if(g.notLang&&g.notLang.indexOf(lang)>=0)return false;
 // v65：出品国改 any-match——origin 任一命中即收、notOrigin 任一命中即排除，合拍片不再被 oc[0] 误杀。
 if(oc.length&&g.notOrigin&&oc.some(function(c){return g.notOrigin.indexOf(c)>=0;}))return false;
 if(oc.length&&g.origin&&!oc.some(function(c){return g.origin.indexOf(c)>=0;}))return false;
 if(!rexHomeHomepageDateAllowed(spec.media==='movie'?x.release_date:x.first_air_date))return false;
 var ids=(x.genre_ids||[]).map(Number);
 if(spec.genres&&!String(spec.genres).split(',').every(function(part){return part.split('|').some(function(id){return ids.indexOf(Number(id))>=0;});}))return false;
 if(spec.yearSpan){var date=rexHomeDate(spec.media==='movie'?x.release_date:x.first_air_date);if(!date||(spec.yearSpan.gte&&date<spec.yearSpan.gte)||(spec.yearSpan.lte&&date>spec.yearSpan.lte))return false;}
 if((spec.exclude||[]).some(function(e){return ids.indexOf(e)>=0;}))return false;
 if(spec.requireGenre&&ids.indexOf(spec.requireGenre)<0)return false;
 if(spec.requireGenre2&&ids.indexOf(spec.requireGenre2)<0)return false;
 if(spec.titleRe&&!spec.titleRe.test(String(x.title||x.name||'')+' '+String(x.original_title||x.original_name||'')))return false;
 return true;
}

async function rexHomeVerifyBrandRows(spec,rows,stats){
 if(!spec.network&&!spec.company)return rows;
 // v142：TMDB 发现接口已按播出平台（with_networks）／出品公司（with_companies）筛选，不再逐部查详情，读一页的请求约少四分之三。
 var media0=spec.media==='movie'?'movie':'tv';
 return rows.filter(function(x){var name=media0==='movie'?x&&x.title:x&&x.name;
  var ok=x&&rexHomeValidId(x.id)&&typeof name==='string'&&!!name.trim();stats[ok?'affiliationVerified':'affiliationUnknown']=(stats[ok?'affiliationVerified':'affiliationUnknown']||0)+1;return ok;});
}

async function rexHomeV62List(spec,params){
 params=params||{};var ps=rexHomeSimplePage(params),sort=String(params.sort||'new');
 if(['hot','new','top'].indexOf(sort)<0)throw new Error('请选择有效的片库排序');
 var media=spec.media==='movie'?'movie':'tv',normalized=Object.assign({},params,{page:ps.page,pageSize:ps.size});
 // 来源身份与页量分开：改变每页20／100条只改变切片，复用同一排序的片单与来源游标。
 return rexHomeSeqList(RexHomeVer+':strict.'+spec.key+':'+sort,3600000,normalized,async function(prev){
  var items=prev?prev.items.slice():[],raw=prev?prev.rawPages:0,total=prev&&prev.total?prev.total:Infinity,done=prev?prev.done:false;
  var stats=Object.assign({sourceReportedTotal:null,scannedRecords:0,eligibleRecords:0,validUniqueMovies:0,duplicateMovies:0,sourceExhausted:false},prev&&prev.stats||{});
  var performanceIds=Object.assign(Object.create(null),prev&&prev.concertPerformanceIds||{}),tourKeys=Object.assign(Object.create(null),prev&&prev.concertTourKeys||{});
  var callStarted=Date.now(),pagesRead=0,pageBudget=Number.isSafeInteger(spec.scanPageBudget)&&spec.scanPageBudget>0?spec.scanPageBudget:500;
  var timeBudget=Number(spec.scanTimeBudgetMs)||0,readError=null,lastEmpty=false;
  while(!done&&items.length<ps.page*ps.size&&pagesRead<pageBudget&&(!timeBudget||Date.now()-callStarted<timeBudget)){
   // v147：v142 起平台片单不再逐部查详情，可与其他片库一样一次读 4 页。
   var width=spec.batchSize||4;
   if(raw===0&&spec.firstBatchSize)width=spec.firstBatchSize;
   width=Math.min(width,pageBudget-pagesRead);
   var pages=[];for(var n=0;n<width&&raw+n<Math.min(total,500);n++)pages.push(raw+n+1);
   if(!pages.length){done=true;break;}
   try{
   var batchStats=Object.assign({},stats),nextTotal=total;
   var batches=await rexHomeMapLimited(pages,async function(page){
    var r=await rexHomeApi('/discover/'+media,rexHomeV62Query(spec,sort,page),3600000,{timeoutMs:spec.requestTimeoutMs});
    if(!Array.isArray(r.results))throw new Error('片库数据格式异常，请刷新重试');
    return r;
   },4);
   batches.forEach(function(r){if(Number.isFinite(Number(r.total_pages))&&Number(r.total_pages)>=0)nextTotal=Math.min(nextTotal,Number(r.total_pages));if(Number.isSafeInteger(Number(r.total_results))&&Number(r.total_results)>=0)batchStats.sourceReportedTotal=Number(r.total_results);batchStats.scannedRecords+=r.results.length;});
   var candidates=[];batches.forEach(function(r){candidates=candidates.concat(r.results);});
   var verified=await rexHomeVerifyBrandRows(spec,candidates,batchStats);
   var eligible=await rexHomeHomepageTmdbRows(spec,verified);
   var cards=[];
   [{results:eligible}].forEach(function(r){r.results.filter(function(x){return rexHomeV62Fits(spec,x);}).forEach(function(x){batchStats.eligibleRecords++;cards.push(rexHomeMatchedCard({x:x},media,rexHomeTitle(x,media),spec.label));});});
   if(spec.groupConcertTours){
    cards.filter(Boolean).forEach(function(card){
     var id=String(card.id);if(performanceIds[id])return;performanceIds[id]=true;
     var tour=rexHomeConcertTourKey(card);if(tour&&tourKeys[tour])return;
     if(tour)tourKeys[tour]=true;items.push(card);
    });
   }else items=rexHomeUnique(items.concat(cards.filter(Boolean)),[rexHomeKeyId]);
   // 本批资料全部验证成功后才推进游标；后续失败仍保留此前已确认的片单。
   stats=batchStats;total=nextTotal;raw+=pages.length;pagesRead+=pages.length;
   lastEmpty=batches.some(function(r){return !r.results.length;});
   done=raw>=Math.min(total,500)||lastEmpty;
   }catch(error){readError={message:String(error&&error.message||error),code:error&&error.code||'REXHOME_TMDB_READ_FAILED'};break;}
  }
  stats.validUniqueMovies=items.length;
  if(spec.groupConcertTours){
   stats.validUniquePerformances=Object.keys(performanceIds).length;
   stats.mergedConcertPerformances=stats.validUniquePerformances-items.length;
   stats.duplicateMovies=stats.eligibleRecords-stats.validUniquePerformances;stats.countUnit='合并同巡演后的展示条目';
  }else stats.duplicateMovies=stats.eligibleRecords-items.length;
  stats.sourceExhausted=raw>=total||lastEmpty;stats.scanCapped=!stats.sourceExhausted&&raw>=500;
  stats.pagesReadInCall=pagesRead;stats.scanElapsedMs=Date.now()-callStarted;
  stats.scanLimited=!stats.sourceExhausted&&!stats.scanCapped&&items.length<ps.page*ps.size&&(!!readError||pagesRead>=pageBudget||!!timeBudget&&stats.scanElapsedMs>=timeBudget);
  stats.scanStopReason=readError?'request-failed':stats.sourceExhausted?'exhausted':stats.scanCapped?'source-limit':items.length>=ps.page*ps.size?'page-filled':pagesRead>=pageBudget?'page-budget':'time-budget';stats.lastReadError=readError;
  return {items:items,done:stats.sourceExhausted,scanCapped:stats.scanCapped,scanLimited:stats.scanLimited,readError:readError,concertPerformanceIds:spec.groupConcertTours?performanceIds:undefined,concertTourKeys:spec.groupConcertTours?tourKeys:undefined,rawPages:raw,total:total===Infinity?0:total,stats:stats,label:spec.label,mediaType:media};
 },null);
}



function rexHomeMatchedCard(m,media,fallbackTitle,label){
 if(!m||!m.x)return null;var x=m.x,date=rexHomeDate(media==='movie'?x.release_date:x.first_air_date);
 var out={id:Number(x.id),type:'tmdb',mediaType:media,title:rexHomeTitle(x,media)||fallbackTitle,posterPath:x.poster_path,backdropPath:x.backdrop_path||undefined,releaseDate:date||undefined,genreTitle:label,description:(x.overview||'')};
 var rating=rexHomeCountedRating(x.vote_average,x.vote_count);if(rating!=null)out.rating=Math.round(rating*10)/10;
 return out;
}

async function rexHomeHttpJson(url){
 var resp=await Widget.http.get(url,{headers:{'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1','Accept':'application/json'}});
 var status=Number(resp&&(resp.statusCode||resp.status));if(status>=400)throw new Error('来源返回 HTTP '+status);
 var d=resp&&resp.data;if(typeof d==='string'){try{d=JSON.parse(d);}catch(_){d=null;}}
 if(!d||typeof d!=='object')throw new Error('平台片单暂不可用，请稍后刷新');
 return d;
}


var RexHomeLogos={'miwu-p':'https://module-host.xtbecdi7690.workers.dev/f/logoxo0vxsX62Wff/miwu-poster.jpg','miwu-l':'https://module-host.xtbecdi7690.workers.dev/f/logoN7de5LXTDFzN/miwu-landscape.jpg','baiye-p':'https://module-host.xtbecdi7690.workers.dev/f/logoxOyZ3DDSowYf/baiye-poster.jpg','baiye-l':'https://module-host.xtbecdi7690.workers.dev/f/logoWy1UHxMIAOwf/baiye-landscape.jpg','xjuchang-p':'https://module-host.xtbecdi7690.workers.dev/f/logo4dLoR68IRnby/xjuchang-poster.jpg','xjuchang-l':'https://module-host.xtbecdi7690.workers.dev/f/logoeSZuXsznRHEU/xjuchang-landscape.jpg','zhengwu-p':'https://module-host.xtbecdi7690.workers.dev/f/logoaYt0kpzCjEqk/zhengwu-poster.jpg','zhengwu-l':'https://module-host.xtbecdi7690.workers.dev/f/logo7lZcZAG7UgkT/zhengwu-landscape.jpg','apple-l':'https://module-host.xtbecdi7690.workers.dev/f/logo6LCfYOcCPm/apple-landscape.jpg','apple-p':'https://module-host.xtbecdi7690.workers.dev/f/logon601oB4V8L/apple-poster.jpg','bilibili-l':'https://module-host.xtbecdi7690.workers.dev/f/logokqJObNwM5x/bilibili-landscape.jpg','bilibili-p':'https://module-host.xtbecdi7690.workers.dev/f/logoilX5eaBFx8/bilibili-poster.jpg','century-l':'https://module-host.xtbecdi7690.workers.dev/f/logoRFgZKXAssm/century-landscape.jpg','century-p':'https://module-host.xtbecdi7690.workers.dev/f/logoPKEgTJdgqK/century-poster.jpg','columbia-l':'https://module-host.xtbecdi7690.workers.dev/f/logo3eRn7zDbv0/columbia-landscape.jpg','columbia-p':'https://module-host.xtbecdi7690.workers.dev/f/logoTRmf5dgN1k/columbia-poster.jpg','disney-l':'https://module-host.xtbecdi7690.workers.dev/f/logoIiRd0ZjsAF/disney-landscape.jpg','disney-p':'https://module-host.xtbecdi7690.workers.dev/f/logo0QKRfDON9j/disney-poster.jpg','disneyplus-l':'https://module-host.xtbecdi7690.workers.dev/f/logozQ2O3SKC17/disneyplus-landscape.jpg','disneyplus-p':'https://module-host.xtbecdi7690.workers.dev/f/logohR2Y7sJmL7/disneyplus-poster.jpg','hulu-l':'https://module-host.xtbecdi7690.workers.dev/f/logoDKhJUSLksu/hulu-landscape.jpg','hulu-p':'https://module-host.xtbecdi7690.workers.dev/f/logooGuEY8Hw6j/hulu-poster.jpg','iqiyi-l':'https://module-host.xtbecdi7690.workers.dev/f/logomI4enbXPDG/iqiyi-landscape.jpg','iqiyi-p':'https://module-host.xtbecdi7690.workers.dev/f/logoXL3DSAej59/iqiyi-poster.jpg','mango-l':'https://module-host.xtbecdi7690.workers.dev/f/logowEJJgVSfal/mango-landscape.jpg','mango-p':'https://module-host.xtbecdi7690.workers.dev/f/logo8kriUiJ7QO/mango-poster.jpg','max-l':'https://module-host.xtbecdi7690.workers.dev/f/logoZyIS8AzhBk/max-landscape.jpg','max-p':'https://module-host.xtbecdi7690.workers.dev/f/logofkAN5iyAQo/max-poster.jpg','netflix-l':'https://module-host.xtbecdi7690.workers.dev/f/logou8jlbQUG5z/netflix-landscape.jpg','netflix-p':'https://module-host.xtbecdi7690.workers.dev/f/logowsyOOwAK92/netflix-poster.jpg','paramount-l':'https://module-host.xtbecdi7690.workers.dev/f/logoF04gKP8qDR/paramount-landscape.jpg','paramount-p':'https://module-host.xtbecdi7690.workers.dev/f/logopOuEUny1hP/paramount-poster.jpg','paramountplus-l':'https://module-host.xtbecdi7690.workers.dev/f/logoHOTDYglrx9/paramountplus-landscape.jpg','paramountplus-p':'https://module-host.xtbecdi7690.workers.dev/f/logo6QgCfLKszz/paramountplus-poster.jpg','pixar-l':'https://module-host.xtbecdi7690.workers.dev/f/logo6aHSgqD0wm/pixar-landscape.jpg','pixar-p':'https://module-host.xtbecdi7690.workers.dev/f/logoM20ObMIzig/pixar-poster.jpg','prime-l':'https://module-host.xtbecdi7690.workers.dev/f/logoWZfv1f0M26/prime-landscape.jpg','prime-p':'https://module-host.xtbecdi7690.workers.dev/f/logon77Xdz0WSR/prime-poster.jpg','tencent-l':'https://module-host.xtbecdi7690.workers.dev/f/logoKENnSAN6UY/tencent-landscape.jpg','tencent-p':'https://module-host.xtbecdi7690.workers.dev/f/logoZvbwrTs8eR/tencent-poster.jpg','universal-l':'https://module-host.xtbecdi7690.workers.dev/f/logo2lZJvjXSbY/universal-landscape.jpg','universal-p':'https://module-host.xtbecdi7690.workers.dev/f/logo7tRgSbZEVs/universal-poster.jpg','warner-l':'https://module-host.xtbecdi7690.workers.dev/f/logod1t3Y3Kiy9/warner-landscape.jpg','warner-p':'https://module-host.xtbecdi7690.workers.dev/f/logoCEpbVa2iZ6/warner-poster.jpg'};

function rexHomeLogoCard(k,shape){
 var hosted=RexHomeLogos[k+'-'+shape];if(hosted)return hosted;
 var b=rexHomeBrand(k);
 if(b&&!b.theater&&b.logo)return 'https://image.tmdb.org/t/p/w500'+b.logo;
 return 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/1f3ac.png';
}

function rexHomeBrand(k){for(var i=0;i<RexHomeBrands.length;i++)if(RexHomeBrands[i].k===k)return RexHomeBrands[i];return null;}

function rexHomeBrandSpec(b){
 var cn=['tencent','iqiyi','youku','mango','bilibili'].indexOf(b.k)>=0;
 if(b.k==='zhengwu')return {key:'brand.zhengwu',media:'tv',group:'zh',company:148869,newAll:true,noClaim:true,label:b.title};
 if(b.theater)throw new Error('剧场必须使用指定名单');
 return b.company?{key:'brand.'+b.k,media:'movie',group:'all',company:b.company,minVotes:20,topVotes:500,minRuntime:60,newAll:true,noClaim:true,label:b.title}:{key:'brand.'+b.k,media:'tv',group:'all',network:b.network,exclude:cn?[10763,10762,16]:[10763,10762],minVotes:cn?1:3,topVotes:cn?3:100,newAll:true,noClaim:true,label:b.title};
}

function rexHomeBrandOptions(params,group){
 params=params||{};var sort=String(params.cat||params.sort||'new'),state=group==='theaters'?String(params.state||'aired'):'aired';
 if(['hot','new','top'].indexOf(sort)<0)throw new Error('请选择有效的片库排序');
 if(['aired','upcoming'].indexOf(state)<0)throw new Error('请选择有效的剧场设置');
 return {cat:sort,state:state};
}

function rexHomeBrandCard(b,params){
 var group=rexHomeBrandGroup(b.k);
 var options=rexHomeBrandOptions(params,group),link='rexhome://brand/'+b.k+'?sort='+options.cat;
 if(group==='theaters')link+='&state='+options.state;
 var scope=group==='theaters'?'指定剧场名单 · '+(options.state==='aired'?'已开播':'即将开播'):group==='studios'?(b.k==='zhengwu'?'出品剧集':'出品电影'):'平台剧集 · 不含电影';
 var note=group==='theaters'?'第三方整理，归属仍需核对。':group==='studios'?'依据 TMDB 出品公司资料，不代表完整作品目录。':'依据 TMDB 播出网络，不代表当前可观看的全部上架内容。';
 return {id:link,type:'detail',link:link,title:b.title,
  posterPath:rexHomeLogoCard(b.k,'p'),backdropPath:rexHomeLogoCard(b.k,'l'),coverUrl:rexHomeLogoCard(b.k,'l'),
  genreTitle:scope,description:b.title+' · '+scope+'\n全部年份 · '+({new:'最新',hot:'热门',top:'高分'}[options.cat])+'\n'+note};
}

function rexHomeBrandWall(group,params){
 var page=rexHomeSimplePage(params||{});rexHomeBrandOptions(params,group);
 if(!group||group==='all')return page.page===1?RexHomeBrands.map(function(b){return rexHomeBrandCard(b,params);}):[];
 var g=RexHomeBrandGroups[group];if(!g)throw new Error('请选择有效的平台分类');
 return page.page===1?g.keys.map(function(k){return rexHomeBrandCard(rexHomeBrand(k),params);}):[];
}

async function rexHomeRowBrands(params){
 params=params||{};var legacy=String(params.sub||''),group,sub;
 // Rex 从详情页分类按钮回传 genreId；入口中保存的品牌、排序和状态优先于原标志墙参数。
 if(params.genreId){
  var route=rexHomeParseBrandLink(params.genreId);
  if(!route)throw new Error('品牌分类入口无效，请重新选择品牌');
  return rexHomeRowBrands({sub:route.brand.k,cat:route.options.cat,state:route.options.state,page:params.page,pageSize:params.pageSize});
 }
 // 旧版 .rex 直接传 sub=netflix 等时继续使用原入口。
 if(legacy&&legacy!=='wall'&&rexHomeBrand(legacy)){sub=legacy;group=rexHomeBrandGroup(sub);}
 else{
  var aliases={wall:'domestic',domestic:'domestic',overseas:'overseas',theaters:'theaters',studios:'studios'};
  if(legacy&&!Object.prototype.hasOwnProperty.call(aliases,legacy))throw new Error('请选择有效的平台或出品公司');
  group=legacy?aliases[legacy]:String(params.group||'domestic');
  if(!Object.prototype.hasOwnProperty.call(RexHomeBrandGroups,group))throw new Error('请选择有效的平台分类');
  var g=RexHomeBrandGroups[group];sub=String(params[g.param]||'wall');
  if(sub==='wall')return rexHomeBrandWall(group,params);
  if(g.keys.indexOf(sub)<0)throw new Error('所选条目不属于当前分类');
 }
 var b=rexHomeBrand(sub);if(!b)throw new Error('请选择有效的平台或出品公司');
 var cat=String(params.cat||params.sort||'new');if(['hot','new','top'].indexOf(cat)<0)throw new Error('请选择有效的片库排序');
 // 所有排序都在同一 TMDB 网络／公司片库或指定剧场名单内完成。
 if(group==='theaters')return rexHomeSimpleTheater(b,params);
 return rexHomeV62List(rexHomeBrandSpec(b),Object.assign({},params,{sort:cat,targetCap:500}));
}

function rexHomeParseBrandLink(link){
 var m=String(link||'').match(/^rexhome:\/\/brand\/([a-z]+)(?:\?([^#]*))?$/),b=m&&rexHomeBrand(m[1]);if(!b)return null;
 var values=Object.create(null);
 if(m[2])m[2].split('&').forEach(function(part){
  var pair=part.split('='),key,value;
  try{key=decodeURIComponent(pair[0]);value=decodeURIComponent(pair[1]||'');}catch(_){throw new Error('品牌入口参数无效');}
  if(pair.length!==2||['sort','state'].indexOf(key)<0||Object.prototype.hasOwnProperty.call(values,key)||!value)throw new Error('品牌入口参数无效');
  values[key]=value;
 });
 if(values.state&&rexHomeBrandGroup(b.k)!=='theaters')throw new Error('仅剧场入口支持开播状态');
 var options=rexHomeBrandOptions({cat:values.sort,state:values.state},rexHomeBrandGroup(b.k));
 return {brand:b,options:options};
}

async function loadDetail(link){
 var route=rexHomeParseBrandLink(link);if(!route)return null;
 var b=route.brand,options=route.options;
 var list=await rexHomeCnPosters(await rexHomeRowBrands({sub:b.k,cat:options.cat,state:options.state,pageSize:'100',page:'1'}));
 // 品牌是列表入口，不是可播放的影片；Rex 官方接口允许直接返回 VideoItem[]。
 return list;
}

async function rexHomeDoubanAnyMatch(row,media){return rexHomeSimpleMatch(row,media);}

async function rexHomeRowBanner(params){
 params=params||{};var mode=String(params.priority||'domestic');
 if(['domestic','off'].indexOf(mode)<0)throw new Error('请选择有效的轮播展示偏好');
 if(['recent','all'].indexOf(String(params.year||'recent'))<0)throw new Error('请选择有效的轮播年份');
 if(mode==='off')return rexHomeSimpleBanner(params);
 var size=params.size==null?20:Number(params.size),cn=[];
 try{cn=await rexHomeSimpleBanner(Object.assign({},params,{rexHomeBannerRegion:'大陆'}));}catch(_){}
 if(cn.length>=size&&!params.rexHomeBannerAll)return cn.slice(0,size);
 var all=await rexHomeSimpleBanner(params);
 var merged=rexHomeUnique(cn.concat(all),[rexHomeBridgeIdentity]);
 return params.rexHomeBannerAll?merged:merged.slice(0,size);
}

async function rexHomeRowPeople(params){return [];}

// 两个客户端都可能直接调用函数；未提供页量时与界面默认100部一致。
function rexHomePublicPageParams(params){
 var out=Object.assign({},params||{});
 if(out.pageSize==null||out.pageSize==='')out.pageSize=200;
 if(out.year==null||out.year==='')out.year='recent';
 return out;
}

async function rexHomeUndeduped_rowSeries(params){return rexHomeCnPosters(await rexHomePriorityRow('rowSeries',rexHomePublicPageParams(params)));}

async function rexHomeUndeduped_rowMovie(params){return rexHomeCnPosters(await rexHomePriorityRow('rowMovie',rexHomePublicPageParams(params)));}

async function rexHomeUndeduped_rowAnime(params){return rexHomeCnPosters(await rexHomePriorityRow('rowAnime',rexHomePublicPageParams(params)));}

async function rexHomeUndeduped_rowVariety(params){return rexHomeCnPosters(await rexHomePriorityRow('rowVariety',rexHomePublicPageParams(params)));}

async function rexHomeUndeduped_rowDocumentary(params){return rexHomeCnPosters(await rexHomePriorityRow('rowDocumentary',rexHomePublicPageParams(params)));}

async function rexHomeUndeduped_rowConcert(params){return rexHomeCnPosters(await rexHomePriorityRow('rowConcert',rexHomePublicPageParams(params)));}

async function rexHomeUndeduped_rowCharts(params){return rexHomeCnPosters(await rexHomePriorityRow('rowCharts',rexHomePublicPageParams(params)));}

async function rowPeople(params){return rexHomeCnPosters(await rexHomeRowPeople(params));}

async function rexHomeUndeduped_rowBanner(params){return rexHomeCnPosters(await rexHomeRowBanner(params));}

async function rowBrands(params){var items=await rexHomeRowBrands(params);return params&&params.sub&&params.sub!=='wall'?rexHomeCnPosters(items):items.map(rexHomeFinishItem);}

// 每个公开品牌模块固定自己的组，不接收旧版的跨组设置。
async function rexHomeFixedBrandRow(group,params){
 params=params||{};var g=RexHomeBrandGroups[group],sub=String(params[g.param]||'wall');
 var next={group:group,cat:params.cat||params.sort,page:params.page,pageSize:params.pageSize};
 if(group==='theaters')next.state=params.state;
 if(params.genreId){
  var route=rexHomeParseBrandLink(params.genreId);
  if(!route||rexHomeBrandGroup(route.brand.k)!==group)throw new Error('所选条目不属于当前分类');
  sub=route.brand.k;next.cat=route.options.cat;next.state=route.options.state;
 }
 if(sub!=='wall'&&g.keys.indexOf(sub)<0)throw new Error('所选条目不属于当前分类');
 if(sub!=='wall')next.sub=sub;
 return rowBrands(next);
}
async function rowDomesticPlatforms(params){return rexHomeFixedBrandRow('domestic',params);}
async function rowOverseasPlatforms(params){return rexHomeFixedBrandRow('overseas',params);}
async function rowTheaters(params){return rexHomeFixedBrandRow('theaters',params);}
async function rowStudios(params){return rexHomeFixedBrandRow('studios',params);}

// v130：国内平台片单。
// TMDB 播出网络编号与 2kuai/ForwardWidgets、MakkaPakka518/FW 一致：腾讯2007、爱奇艺1330、优酷1419、芒果TV1631。
// 豆瓣平台标签沿用 huangxd-/ForwardWidgets 的 recommend 接口写法；豆瓣没有芒果TV标签，以湖南卫视代替。
// 猫眼平台热度来自 2kuai/ForwardWidgets 定时生成的 maoyan-data.json，条目已是 TMDB 身份。
var RexHomePlatforms={
 tencent:{title:'腾讯视频',douban:'腾讯视频',maoyan:'腾讯视频'},
 iqiyi:{title:'爱奇艺',douban:'爱奇艺',maoyan:'爱奇艺'},
 youku:{title:'优酷',douban:'优酷',maoyan:'优酷'},
 mango:{title:'芒果TV',douban:'湖南卫视',maoyan:'芒果TV'}
};
var RexHomeMaoyanSource='https://raw.githubusercontent.com/2kuai/ForwardWidgets/main/data/maoyan-data.json';

function rexHomePlatformKind(params){
 var kind=String(params.kind||'tv');if(['tv','show'].indexOf(kind)<0)throw new Error('请选择有效的平台片单形式');
 return kind;
}

async function rexHomePlatformMaoyan(p,params){
 var ps=rexHomeSimplePage(params),kind=rexHomePlatformKind(params);
 var data=await rexHomeCached(RexHomeVer+':maoyan.source',3600000,function(){return rexHomeHttpJson(RexHomeMaoyanSource);},{memoryOnly:true});
 var list=data[kind]&&data[kind][p.maoyan];
 if(!Array.isArray(list))throw new Error('猫眼平台热度格式异常，请稍后刷新');
 var updated=rexHomeDate(String(data.last_updated||'').slice(0,10)),label=p.title+' · 猫眼'+(kind==='show'?'综艺':'剧集')+'热度';
 var cards=list.filter(function(x){return x&&x.type==='tmdb'&&x.mediaType==='tv'&&rexHomeValidId(x.id)&&rexHomeImage(x.posterPath)&&typeof x.title==='string'&&x.title.trim();}).map(function(x,i){
  var out={id:Number(x.id),type:'tmdb',mediaType:'tv',title:x.title.trim(),posterPath:x.posterPath,backdropPath:rexHomeImage(x.backdropPath)||undefined,
   releaseDate:rexHomeDate(x.releaseDate)||undefined,genreTitle:label,
   description:'猫眼热度第'+(i+1)+'名'+(updated?' · 榜单更新于'+updated:'')+'\n'+(typeof x.description==='string'?x.description:'')};
  var rating=rexHomeCountedRating(x.rating,x.voteCount);if(rating!=null)out.rating=Math.round(rating*10)/10;
  return out;
 });
 return rexHomeUnique(cards,[rexHomeKeyId]).slice((ps.page-1)*ps.size,ps.page*ps.size);
}

async function rexHomePlatformDouban(p,params){
 var kind=rexHomePlatformKind(params),sort=String(params.sort||'U');
 if(!RexHomeSimpleSorts.some(function(x){return x.value===sort;}))throw new Error('请选择有效的豆瓣排序');
 var form=kind==='show'?'综艺':'电视剧',cats={'类型':'','地区':'','形式':form};
 var query='selected_categories='+encodeURIComponent(JSON.stringify(cats))+'&tags='+encodeURIComponent(form+','+p.douban)+'&sort='+sort+'&uncollect=false&score_range=0,10';
 var secret=String(params.sk||'').trim(),label=p.title+' · 豆瓣'+(kind==='show'?'综艺':'剧集');
 var mapper=secret?rexHomeBridgeMapper(secret,label):rexHomeDoubanNativeRows;
 return rexHomeSimpleSourceSequence('platform.'+query,params,function(start){
  return rexHomeCached(RexHomeVer+':douban.raw.platform:'+query+':'+start,3600000,function(){return rexHomeDoubanListGet('https://m.douban.com/rexxar/api/v2/tv/recommend?refresh=0&start='+start+'&count=20&'+query);},{memoryOnly:true});
 },'tv',label,mapper,{gte:'',lte:'',label:'全部年份'});
}

async function rexHomeUndeduped_rowPlatform(params){
 params=Object.assign({},params||{});if(params.pageSize==null||params.pageSize==='')params.pageSize=20;
 var key=String(params.platform||'tencent'),p=Object.prototype.hasOwnProperty.call(RexHomePlatforms,key)?RexHomePlatforms[key]:null,b=rexHomeBrand(key);
 if(!p||!b)throw new Error('请选择有效的平台');
 var source=String(params.source||'tmdb'),items;
 if(source==='tmdb'){
  var options=rexHomeBrandOptions({cat:params.cat||'hot'},'domestic'),year=String(params.year==null||params.year===''?'recent':params.year);
  if(['recent','all'].indexOf(year)<0)throw new Error('请选择有效的平台年份');
  var range=rexHomeHomepageYear(year),spec=Object.assign({},rexHomeBrandSpec(b));
  if(range.gte||range.lte){spec.yearSpan={gte:range.gte,lte:range.lte,recent:!!range.recent};spec.key+=':years.'+range.gte+'.'+range.lte;}
  items=await rexHomeV62List(spec,{sort:options.cat,page:params.page,pageSize:params.pageSize});
 }else if(source==='douban')items=await rexHomePlatformDouban(p,params);
 else if(source==='maoyan')items=await rexHomePlatformMaoyan(p,params);
 else throw new Error('请选择有效的平台片单来源');
 return rexHomeCnPosters(items);
}

// v131：片库筛选。频道沿用七类片库的分类规则，平台用 TMDB 播出网络（with_networks）筛选。
var RexHomeBrowseChannels={
 tv:{key:'rowSeries',genre:'tvGenre'},movie:{key:'rowMovie',genre:'movieGenre'},variety:{key:'rowVariety',genre:'varietyGenre'},
 anime:{key:'rowAnime',genre:''},doc:{key:'rowDocumentary',genre:'docGenre'}
};
var RexHomeBrowseNetworks=['2007','1330','1419','1631','1605','213','2739','49|3186','2552','1024'];

async function rowBrowse(params){
 params=params||{};var channel=String(params.channel||'tv'),c=Object.prototype.hasOwnProperty.call(RexHomeBrowseChannels,channel)?RexHomeBrowseChannels[channel]:null;
 if(!c)throw new Error('请选择有效的频道');
 var network=String(params.platform||'');
 if(network&&RexHomeBrowseNetworks.indexOf(network)<0)throw new Error('请选择有效的平台');
 if(network&&channel==='movie')throw new Error('电影频道不支持平台筛选');
 var form=String(params.form||'all');
 if((channel==='anime'||channel==='doc')&&['all','tv','movie'].indexOf(form)<0)throw new Error('请选择有效的形式');
 var next={catalog:'library',genre:c.genre?String(params[c.genre]||''):'',region:params.region==null?'大陆':String(params.region),year:params.year,sort:String(params.sort||'U'),
  page:params.page,pageSize:params.pageSize==null||params.pageSize===''?20:params.pageSize,rexHomeBrowse:true,rexHomeNetwork:network};
 // 平台只存在于剧集资料；动漫、纪录片选了平台时只读剧集。
 if(channel==='anime'||channel==='doc')next.media=network?'tv':form;
 return rexHomeCnPosters(await rexHomeLibraryList(c.key,next));
}

// v132：首页去重。先显示的行占用影片，6小时内其他行不再显示；同一行刷新与翻页不受影响。
// 以 TMDB／豆瓣编号和“简体片名＋年份”双重判断，豆瓣与 TMDB 来源的同一部影片也会去重。
var RexHomeClaimTtl=6*3600000,rexHomeClaims=Object.create(null),RexHomeDedupeSizes=[20,40,60,100,200];

function rexHomeClaimKeys(item){
 var keys=[];if(!item||typeof item!=='object')return keys;
 if(item.type&&item.id!=null)keys.push(item.type+':'+(item.mediaType||'')+':'+item.id);
 var title=rexHomeDoubanName(rexHomeT2S(String(item.title||'')));
 if(title)keys.push('title:'+title+':'+String(item.releaseDate||'').slice(0,4));
 return keys;
}

function rexHomeClaimFilter(row,items){
 var now=Date.now();
 return (items||[]).filter(function(item){
  return !rexHomeClaimKeys(item).some(function(k){var c=rexHomeClaims[k];return c&&c.row!==row&&c.until>now;});
 });
}

function rexHomeClaimCommit(row,items){
 var now=Date.now(),until=now+RexHomeClaimTtl;
 items.forEach(function(item){rexHomeClaimKeys(item).forEach(function(k){var c=rexHomeClaims[k];if(!c||c.row===row||c.until<=now)rexHomeClaims[k]={row:row,until:until};});});
}

// v141：去重记录同时存到本机储存。开了缓存后，App 重开时部分行直接用缓存、部分行重新读取，
// 重新读取的行要先读回其他行占用的影片，才不会重复。
var RexHomeClaimStoreKey='rex.home.claims.v1',rexHomeClaimsLoading=null,rexHomeClaimsSaveTimer=null;
function rexHomeClaimsLoad(){
 if(!rexHomeClaimsLoading)rexHomeClaimsLoading=(async function(){
  try{
   var raw=await rexHomeStorageCall('get',[RexHomeClaimStoreKey]),saved=typeof raw==='string'?JSON.parse(raw):raw,now=Date.now();
   if(!saved||!Array.isArray(saved.r)||!saved.c||typeof saved.c!=='object')return;
   Object.keys(saved.c).forEach(function(k){var v=saved.c[k],until=Array.isArray(v)?Number(v[1])*60000:0,row=Array.isArray(v)?saved.r[v[0]]:null;
    if(row&&until>now&&!rexHomeClaims[k])rexHomeClaims[k]={row:row,until:until};});
  }catch(_){}
 })();
 return rexHomeClaimsLoading;
}
function rexHomeClaimsSave(){
 if(!Widget.storage)return;
 if(rexHomeClaimsSaveTimer!=null)return;
 var run=function(){rexHomeClaimsSaveTimer=null;rexHomeStorageWrite(async function(){
  var now=Date.now(),rows=[],index=Object.create(null),out={};
  Object.keys(rexHomeClaims).forEach(function(k){var c=rexHomeClaims[k];if(!c||c.until<=now){delete rexHomeClaims[k];return;}
   if(index[c.row]==null){index[c.row]=rows.length;rows.push(c.row);}out[k]=[index[c.row],Math.ceil(c.until/60000)];});
  await rexHomeStorageCall('set',[RexHomeClaimStoreKey,JSON.stringify({r:rows,c:out})]);
 }).catch(function(){});};
 if(typeof setTimeout==='function')rexHomeClaimsSaveTimer=setTimeout(run,300);else run();
}

function rexHomeClaimRowKey(name,params){
 var scope={};
 Object.keys(params).sort().forEach(function(k){if(['page','pageSize','size','sk','dedupe','rexHomeBannerAll'].indexOf(k)<0)scope[k]=params[k];});
 return name+':'+rexHomeStable(scope);
}

// v133：每个分类保证有片。
// 1) 追新（近一年）不足一页时，用全部年份补足，新片在前；
// 2) 来源失败或为空时改用 TMDB 片库（豆瓣榜单 → 同类片库；平台豆瓣／猫眼 → 平台 TMDB 片库）；
// 3) v138 起不再补入其他行已出现的影片，首页不重复。
var RexHomeRecentRows=['rowBanner','rowSeries','rowDramaRegion','rowDramaHKTW','rowDramaKR','rowDramaJP','rowDramaUS','rowMovie','rowAnime','rowVariety','rowDocumentary','rowConcert','rowPlatform'];

function rexHomeRowFallback(name,params){
 if(name==='rowCharts'){
  var config=RexHomeSimpleCharts[String(params.sub||'db_hot_tv')]||{media:'tv'};
  var fallback=config.media==='movie'?rexHomeUndeduped_rowMovie:rexHomeUndeduped_rowSeries;
  return async function(request){
   var base={priority:'domestic',sort:'S',page:request.page,pageSize:request.pageSize},list=await fallback(Object.assign({year:'recent'},base));
   if(list.length<Number(request.pageSize||200))list=rexHomeUnique(list.concat(await fallback(Object.assign({year:'all'},base))),[rexHomeBridgeIdentity]);
   return list;
  };
 }
 if(name==='rowPlatform'&&String(params.source||'tmdb')!=='tmdb')return function(request){return rexHomeUndeduped_rowPlatform(Object.assign({},request,{source:'tmdb',year:'all'}));};
 return null;
}

async function rexHomeDedupeRow(name,params,load){
 params=Object.assign({},params||{});var mode=String(params.dedupe||'on');
 if(['on','off'].indexOf(mode)<0)throw new Error('请选择有效的首页去重设置');
 var banner=name==='rowBanner',row=rexHomeClaimRowKey(name,params);
 if(mode==='on')await rexHomeClaimsLoad();
 var filter=mode==='on'?function(list){return rexHomeClaimFilter(row,list);}:function(list){return list;};
 if(!banner&&(params.pageSize==null||params.pageSize===''))params.pageSize=200;
 var ps=banner?{page:1,size:params.size==null?20:Number(params.size)}:rexHomeSimplePage(params),want=ps.page*ps.size,wide=null;
 // 多读一些来补足被其他行占用的影片；超过200条时按原页读取。
 if(!banner&&mode==='on')for(var i=0;i<RexHomeDedupeSizes.length;i++)if(RexHomeDedupeSizes[i]>=want*1.5){wide=RexHomeDedupeSizes[i];break;}
 var request=banner?Object.assign({},params,{rexHomeBannerAll:true}):wide?Object.assign({},params,{page:1,pageSize:wide}):params;
 var start=banner||wide?(ps.page-1)*ps.size:0,failure=null,list=[];
 var enough=function(){return filter(list).length>=start+ps.size;};
 // 不够时向后续页继续读（最多3页），直到扣除其他行占用后仍能排满本页。
 var readMore=async function(overrides){
  for(var n=0;n<3&&!enough();n++){
   var page=banner?1:Number(request.page||1)+n,batch;
   try{batch=await load(Object.assign({},request,overrides,banner?{}:{page:page}));}catch(error){failure=failure||error;return;}
   list=rexHomeUnique(list.concat(batch),[rexHomeBridgeIdentity]);
   if(banner||batch.length<Number(request.pageSize||20))return;
  }
 };
 await readMore({});
 var year=params.year==null||params.year===''?'recent':String(params.year);
 if(RexHomeRecentRows.indexOf(name)>=0&&year==='recent')await readMore({year:'all'});
 var fallback=rexHomeRowFallback(name,params);
 if(!list.length&&fallback){try{list=await fallback(request);}catch(error){failure=failure||error;}}
 if(!list.length&&failure)throw failure;
 var items=filter(list).slice(start,start+ps.size);
 // v138：首页不重复，去重后不足也不补回其他行已出现的影片。
 if(mode==='on'){rexHomeClaimCommit(row,items);rexHomeClaimsSave();}
 return items;
}
async function rowBanner(params){return rexHomeDedupeRow('rowBanner',params,rexHomeUndeduped_rowBanner);}
async function rowSeries(params){return rexHomeDedupeRow('rowSeries',params,rexHomeUndeduped_rowSeries);}
// v137：地区专行，固定地区与TMDB片库，其余参数同剧集。
function rexHomeRegionRow(name,region,params){return rexHomeDedupeRow(name,params,function(p){return rexHomeUndeduped_rowSeries(Object.assign({},p,{region:region,catalog:'library',priority:'off'}));});}
async function rowDramaHKTW(params){return rexHomeRegionRow('rowDramaHKTW','港台',params);}
async function rowDramaKR(params){return rexHomeRegionRow('rowDramaKR','韩国',params);}
async function rowDramaJP(params){return rexHomeRegionRow('rowDramaJP','日本',params);}
async function rowDramaUS(params){return rexHomeRegionRow('rowDramaUS','美国',params);}
// v139：地区剧合成一行；上面4个旧函数保留，兼容旧首页布局。
var RexHomeDramaRegions=['港台','韩国','日本','美国','英国','泰国','新马','西班牙','土耳其','印度'];
async function rowDramaRegion(params){
 params=Object.assign({},params||{});var region=String(params.region||'港台');
 if(RexHomeDramaRegions.indexOf(region)<0)throw new Error('请选择有效的地区');
 return rexHomeRegionRow('rowDramaRegion',region,params);
}
async function rowMovie(params){return rexHomeDedupeRow('rowMovie',params,rexHomeUndeduped_rowMovie);}
async function rowAnime(params){return rexHomeDedupeRow('rowAnime',params,rexHomeUndeduped_rowAnime);}
async function rowVariety(params){return rexHomeDedupeRow('rowVariety',params,rexHomeUndeduped_rowVariety);}
async function rowDocumentary(params){return rexHomeDedupeRow('rowDocumentary',params,rexHomeUndeduped_rowDocumentary);}
async function rowConcert(params){return rexHomeDedupeRow('rowConcert',params,rexHomeUndeduped_rowConcert);}
async function rowPlatform(params){return rexHomeDedupeRow('rowPlatform',params,rexHomeUndeduped_rowPlatform);}
async function rowCharts(params){return rexHomeDedupeRow('rowCharts',params,rexHomeUndeduped_rowCharts);}

// v134：豆列读取，整理成与榜单相同的条目格式；没有年份时只按片名匹配。
async function rexHomeDoulistGet(id,start){
 var data=await rexHomeDoubanGet('https://m.douban.com/rexxar/api/v2/doulist/'+id+'/items?start='+start+'&count=20&updated_at&items_only=1&type_tag&for_mobile=1');
 var raw=data&&data.items;if(!Array.isArray(raw))throw new Error('豆列格式异常，请稍后重试');
 var items=raw.map(function(x){
  if(!x||typeof x!=='object')return null;var t=x.target&&typeof x.target==='object'?x.target:{};
  var type=String(x.type||t.type||'');
  return {id:String(x.target_id||t.id||''),title:String(x.title||t.title||'').trim(),type:type==='movie'||type==='tv'?type:'',
   year:String(t.year||''),card_subtitle:String(t.card_subtitle||x.subtitle||''),pic:t.pic,rating:t.rating};
 });
 var out={items:items,total:data.total!=null?data.total:data.total_count};rexHomeSimpleRows(out);return out;
}
