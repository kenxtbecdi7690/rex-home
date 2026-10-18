WidgetMetadata = {
  "id": "rex.home.unified",
  "title": "Rex首页",
  "version": "2026.10.18",
  "requiredVersion": "0.0.1",
  "description": "四主目录、七个内容分支重写版。首页只声明电影、剧集、综艺、动漫；已移除纪录电影和纪录剧集分类。追剧日历是独立工具。TMDB数据，需实机验证。",
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
              "title": "电影综合",
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
          "value": "180",
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
          ]
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
          "value": "30",
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
          ]
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
          "value": "30",
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
          ]
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
          "value": "30",
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
          ]
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
        "title": "电影综合",
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
        "title": "电视剧综合",
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
        ]
      },
      "animeMovies": {
        "title": "动画电影",
        "media": "movie",
        "genres": [
          16
        ]
      }
    }
  }
};

var RexHomeCountries = [
  ['国产（中国）','CN'],['美国','US'],['英国','GB'],['日本','JP'],['韩国','KR'],
  ['泰国','TH'],['印度','IN'],['巴西','BR'],['阿根廷','AR'],['墨西哥','MX'],
  ['法国','FR'],['德国','DE'],['西班牙','ES'],['意大利','IT']
];
var RexHomeForeignCountries = RexHomeCountries.filter(function(x){return x[1] !== 'CN';}).map(function(x){return x[1];});
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
  if (!item || !Number.isInteger(Number(item.id)) || Number(item.id)<=0 ||
      (item.media_type && item.media_type!==rule.media)) return false;
  var genres=rexHomeIds(item);
  if (!genres.length) return false;
  if (rule.genres && !rule.genres.some(function(g){return genres.indexOf(g)>=0;})) return false;
  if ((rule.exclude || []).some(function(g){return genres.indexOf(g)>=0;})) return false;
  var countries=Array.isArray(item.origin_country)?item.origin_country:[];
  if (rule.domestic && countries.indexOf('CN')<0) return false;
  if (rule.foreign && (countries.indexOf('CN')>=0 || !countries.some(function(c){return RexHomeForeignCountries.indexOf(c)>=0;}))) return false;
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
async function rexHomeQuery(rule,params) {
  var page=Number(params.page == null || params.page === '' ? 1 : params.page), rating=Number(params.rating || 0);
  if (!Number.isInteger(page) || page<1 || page>500) throw new Error('页码必须为1至500的整数');
  if (!Number.isFinite(rating) || rating<0 || rating>10) throw new Error('最低评分必须为0至10');
  var q={language:'zh-CN',page:page,include_adult:false,'vote_average.gte':rating,'vote_count.gte':1};
  if (rule.genres) q.with_genres=rule.genres.join('|');
  if (rule.exclude) q.without_genres=rule.exclude.join(',');
  var region=String(params.region || '');
  if (rule.domestic) q.with_origin_country='CN';
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
  var range=String(params.range || (rule.media==='movie'?'180':'30'));
  if (['30','90','180','365','all'].indexOf(range)<0) throw new Error('请选择有效的时间范围');
  var today=rexHomeToday();
  if (rule.media==='movie') {
    q['primary_release_date.lte']=today;
    if (range!=='all') q['primary_release_date.gte']=rexHomeBefore(Number(range));
  } else {
    q.include_null_first_air_dates=false;
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
async function rexHomeLoad(rule,params) {
  params=params || {};
  if (!rule || !rule.media) throw new Error('未知分类');
  var query=await rexHomeQuery(rule,params);
  var response=await rexHomeApi('/discover/'+rule.media,query.params,900000);
  if (!Array.isArray(response.results)) throw new Error('TMDB片单格式异常');
  var seen=new Set();
  var raw=response.results.filter(function(item){
    if (!rexHomeAccept(rule,item) || seen.has(String(item.id))) return false;
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
    return {id:canonicalId,type:'tmdb',mediaType:rule.media,
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
  if (query.sort==='updated') items.sort(function(a,b){return (sortDates[b.id] || '').localeCompare(sortDates[a.id] || '');});
  return items;
}

// Only the four functions declared in WidgetMetadata are public list entrypoints.
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
  ['region','year','rating','range','sort','tags','dateMode','loadMode','page'].forEach(function(key){
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
