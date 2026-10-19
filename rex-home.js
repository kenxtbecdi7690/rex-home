// ===== 1. Shared parameter definitions (each enum / param defined once, reused by modules) =====
var RexHomeEnum = {
  e_year: [{"title":"全部年份","value":""},{"title":"2026","value":"2026"},{"title":"2025","value":"2025"},{"title":"2024","value":"2024"},{"title":"2023","value":"2023"},{"title":"2022","value":"2022"},{"title":"2020年代","value":"2020s"},{"title":"2010年代","value":"2010s"},{"title":"2000年代","value":"2000s"},{"title":"90年代","value":"1990s"},{"title":"80年代","value":"1980s"},{"title":"70年代","value":"1970s"},{"title":"60年代","value":"1960s"},{"title":"50年代","value":"1950s"},{"title":"1940年代","value":"1940s"},{"title":"1930年代","value":"1930s"},{"title":"1920年代","value":"1920s"},{"title":"1910年代","value":"1910s"},{"title":"1900年代","value":"1900s"},{"title":"自定义年份","value":"custom"}],
  e_region: [{"title":"中国大陆（默认）","value":"CN"},{"title":"全部地区","value":"all"},{"title":"中国香港","value":"HK"},{"title":"中国台湾","value":"TW"},{"title":"美国","value":"US"},{"title":"英国","value":"GB"},{"title":"日本","value":"JP"},{"title":"韩国","value":"KR"},{"title":"泰国","value":"TH"},{"title":"印度","value":"IN"},{"title":"巴西","value":"BR"},{"title":"阿根廷","value":"AR"},{"title":"墨西哥","value":"MX"},{"title":"法国","value":"FR"},{"title":"德国","value":"DE"},{"title":"西班牙","value":"ES"},{"title":"意大利","value":"IT"}],
  e_platform: [{"title":"全部平台","value":""},{"title":"国内 · 腾讯视频","value":"tencent"},{"title":"国内 · 爱奇艺","value":"iqiyi"},{"title":"国内 · 优酷","value":"youku"},{"title":"国内 · 芒果TV","value":"mango"},{"title":"国外 · Netflix","value":"netflix"},{"title":"国外 · Disney+","value":"disney"},{"title":"国外 · Apple TV+","value":"apple"},{"title":"国外 · Prime Video","value":"prime"},{"title":"国外 · HBO/Max","value":"max"},{"title":"国外 · Hulu","value":"hulu"}],
  e_watchRegion: [{"title":"自动选择","value":"auto"},{"title":"中国香港","value":"HK"},{"title":"中国台湾","value":"TW"},{"title":"美国","value":"US"},{"title":"英国","value":"GB"},{"title":"日本","value":"JP"},{"title":"韩国","value":"KR"},{"title":"泰国","value":"TH"},{"title":"印度","value":"IN"},{"title":"巴西","value":"BR"},{"title":"阿根廷","value":"AR"}],
  e_range: [{"title":"最近30天","value":"30"},{"title":"最近90天","value":"90"},{"title":"最近180天","value":"180"},{"title":"最近365天","value":"365"},{"title":"不限","value":"all"}],
  e_sort: [{"title":"首映／首播倒序","value":"recent"},{"title":"评分优先","value":"score"},{"title":"热度优先","value":"popular"}],
  e_pageSize: [{"title":"20条 · 轻量","value":"20"},{"title":"40条","value":"40"},{"title":"60条 · 默认","value":"60"}],
  e_sort2: [{"title":"首映／首播倒序","value":"recent"},{"title":"评分优先","value":"score"},{"title":"热度优先","value":"popular"},{"title":"更新时间（页内）","value":"updated"}],
  e_dateMode: [{"title":"最近一集已播日期","value":"updated"},{"title":"首播日期（更快）","value":"premiere"}],
  e_loadMode: [{"title":"快速（默认）","value":"fast"},{"title":"精确更新日期","value":"precise"}],
  e_category: [{"title":"动画剧集","value":"animeSeries"},{"title":"动画电影","value":"animeMovies"}],
  e_region2: [{"title":"全部海外地区","value":""},{"title":"中国香港","value":"HK"},{"title":"中国台湾","value":"TW"},{"title":"美国","value":"US"},{"title":"英国","value":"GB"},{"title":"日本","value":"JP"},{"title":"韩国","value":"KR"},{"title":"泰国","value":"TH"},{"title":"印度","value":"IN"},{"title":"巴西","value":"BR"},{"title":"阿根廷","value":"AR"},{"title":"墨西哥","value":"MX"},{"title":"法国","value":"FR"},{"title":"德国","value":"DE"},{"title":"西班牙","value":"ES"},{"title":"意大利","value":"IT"}],
  e_genre: [{"title":"全部","value":""},{"title":"剧情","value":"18"},{"title":"喜剧","value":"35"},{"title":"悬疑","value":"9648"},{"title":"犯罪","value":"80"},{"title":"家庭","value":"10751"}],
  e_movieSort: [{"title":"上映倒序","value":"recent"},{"title":"评分优先","value":"score"},{"title":"热度优先","value":"popular"}],
  e_view: [{"title":"完整片单","value":"all"},{"title":"首页避重复","value":"home"}]
};
var RexHomeParam = {
  p_year: {"name": "year", "title": "年份", "type": "enumeration", "value": "", "description": "先列最近五年，再按年代分组；年代覆盖对应十年，未来上映内容仍排除。其他单一年份可选自定义。", "enumOptions": RexHomeEnum.e_year},
  p_customYear: {"name": "customYear", "title": "自定义年份", "type": "input", "value": "", "description": "输入四位年份，如1994；仅在年份选择自定义时生效。", "belongTo": {"paramName":"year","value":["custom"]}},
  p_region: {"name": "region", "title": "地区", "type": "enumeration", "value": "CN", "enumOptions": RexHomeEnum.e_region},
  p_platform: {"name": "platform", "title": "平台", "type": "enumeration", "value": "", "description": "剧集按播出平台；电影按观看地区的平台片库。未收录的片库会提示，平台筛选不提供播放资源。", "enumOptions": RexHomeEnum.e_platform},
  p_rating: {"name": "rating", "title": "最低评分", "type": "input", "value": "0", "description": "片库评分，0至10，可输入小数。"},
  p_range: {"name": "range", "title": "范围", "type": "enumeration", "value": "all", "enumOptions": RexHomeEnum.e_range, "description": "默认不限制时间范围，按所选排序展示；仍排除未来首播内容。可选择近期播出范围。"},
  p_sort: {"name": "sort", "title": "排序", "type": "enumeration", "value": "recent", "enumOptions": RexHomeEnum.e_sort},
  p_tags: {"name": "tags", "title": "自定义标签", "type": "input", "value": "", "description": "使用可检索的关键词名称，多个用英文逗号连接（同时满足）；也可输入数字关键词ID。不是豆瓣标签。"},
  p_pageSize: {"name": "pageSize", "title": "数量", "type": "enumeration", "value": "60", "description": "读取上限；过滤后实际条数可能较少。20条请求更少，40/60条并行读取多页。更改片量后请回到第一页。", "enumOptions": RexHomeEnum.e_pageSize},
  p_page: {"name": "page", "title": "页码", "type": "page", "value": "1"},
  p_sort2: {"name": "sort", "title": "排序", "type": "enumeration", "value": "recent", "enumOptions": RexHomeEnum.e_sort2, "description": "更新时间排序需要额外查询最近已播集，仅对当前加载页排序。"},
  p_dateMode: {"name": "dateMode", "title": "海报日期", "type": "enumeration", "value": "updated", "enumOptions": RexHomeEnum.e_dateMode},
  p_loadMode: {"name": "loadMode", "title": "加载模式", "type": "enumeration", "value": "fast", "description": "快速模式优先读取片单及已有更新缓存；精确模式逐部查询最近已播集。选择更新时间排序也会查询详情。", "enumOptions": RexHomeEnum.e_loadMode},
  p_category: {"name": "category", "title": "类别", "type": "enumeration", "value": "animeSeries", "enumOptions": RexHomeEnum.e_category},
  p_region2: {"name": "region", "title": "地区", "type": "enumeration", "value": "", "enumOptions": RexHomeEnum.e_region2},
  p_genre: {"name": "genre", "title": "题材", "type": "enumeration", "value": "", "enumOptions": RexHomeEnum.e_genre},
  p_watchRegion: {"name": "watchRegion", "title": "电影观看地区", "type": "enumeration", "value": "auto", "description": "选择平台片库所在地区，与作品出品地区分别筛选。自动：国内平台使用中国内地，国外平台使用美国。", "enumOptions": RexHomeEnum.e_watchRegion, "belongTo": {"paramName":"category","value":["animeMovies"]}},
  p_sort3: {"name": "sort", "title": "排序", "type": "enumeration", "value": "recent", "enumOptions": RexHomeEnum.e_sort2, "belongTo": {"paramName":"category","value":["animeSeries"]}, "description": "更新时间排序需要额外查询最近已播集，仅对当前加载页排序。"},
  p_movieSort: {"name": "movieSort", "title": "排序", "type": "enumeration", "value": "recent", "enumOptions": RexHomeEnum.e_movieSort, "belongTo": {"paramName":"category","value":["animeMovies"]}, "description": "动画电影按上映日期、评分或热度排序，不提供剧集更新时间排序。"},
  p_dateMode2: {"name": "dateMode", "title": "海报日期", "type": "enumeration", "value": "updated", "enumOptions": RexHomeEnum.e_dateMode, "belongTo": {"paramName":"category","value":["animeSeries"]}},
  p_loadMode2: {"name": "loadMode", "title": "加载模式", "type": "enumeration", "value": "fast", "description": "快速模式优先读取片单及已有更新缓存；精确模式逐部查询最近已播集。选择更新时间排序也会查询详情。", "enumOptions": RexHomeEnum.e_loadMode, "belongTo": {"paramName":"category","value":["animeSeries"]}},
  p_view: {"name": "view", "title": "显示范围", "type": "enumeration", "value": "all", "description": "首页预览避开上方默认分类的已展示影片；查看完整榜单请选择完整片单。", "enumOptions": RexHomeEnum.e_view}
};

// ===== 2. Widget metadata =====
WidgetMetadata = {
  "id": "rex.home.unified",
  "title": "Rex首页",
  "version": "2026.10.19.61",
  "requiredVersion": "0.0.1",
  "description": "四大分类、电影出品公司、国内外纪录片、精选、Bangumi、Netflix周榜与各平台国漫。",
  "site": "https://developer.themoviedb.org/",
  "modules": [
    {"id":"rowMovie","title":"🎬 电影","description":"本周热门、近期上映、高分电影、类型片、国产与外语电影、短片和出品公司。","requiresWebView":false,"functionName":"rowMovie","cacheDuration":3600,"params":[{"name":"sub","title":"分类","type":"enumeration","value":"week","enumOptions":[{"title":"本周热门","value":"week"},{"title":"近期上映","value":"now"},{"title":"高分电影","value":"top"},{"title":"轻松喜剧","value":"comedy"},{"title":"悬疑解谜","value":"mystery"},{"title":"合家欢","value":"family"},{"title":"国产电影","value":"cn"},{"title":"外语电影","value":"foreign"},{"title":"短片","value":"short"},{"title":"出品公司","value":"studio"}]},{"name":"company","title":"电影出品公司","type":"enumeration","value":"warner","enumOptions":[{"title":"华纳兄弟","value":"warner"},{"title":"环球影业","value":"universal"},{"title":"派拉蒙","value":"paramount"},{"title":"哥伦比亚","value":"columbia"},{"title":"迪士尼","value":"disney"},{"title":"二十世纪影业","value":"century"},{"title":"中国电影集团","value":"chinaFilm"},{"title":"光线影业","value":"enlight"}],"belongTo":{"paramName":"sub","value":["studio"]}},{"name":"year","title":"年份","type":"enumeration","value":"","description":"先列最近五年，再按年代分组；年代覆盖对应十年，未来上映内容仍排除。其他单一年份可选自定义。","enumOptions":[{"title":"全部年份","value":""},{"title":"2026","value":"2026"},{"title":"2025","value":"2025"},{"title":"2024","value":"2024"},{"title":"2023","value":"2023"},{"title":"2022","value":"2022"},{"title":"2020年代","value":"2020s"},{"title":"2010年代","value":"2010s"},{"title":"2000年代","value":"2000s"},{"title":"90年代","value":"1990s"},{"title":"80年代","value":"1980s"},{"title":"70年代","value":"1970s"},{"title":"60年代","value":"1960s"},{"title":"50年代","value":"1950s"},{"title":"1940年代","value":"1940s"},{"title":"1930年代","value":"1930s"},{"title":"1920年代","value":"1920s"},{"title":"1910年代","value":"1910s"},{"title":"1900年代","value":"1900s"},{"title":"自定义年份","value":"custom"}],"belongTo":{"paramName":"sub","value":["comedy","mystery","family","cn","foreign","short","studio"]}},{"name":"pageSize","title":"数量","type":"enumeration","value":"20","enumOptions":[{"title":"20部 · 最快","value":"20"},{"title":"40部","value":"40"},{"title":"60部","value":"60"}]},{"name":"page","title":"页码","type":"page","value":"1"}]},
    {"id":"rowSeries","title":"📺 剧集","description":"国产剧（豆瓣热门）、口碑剧集、近期开播、港剧台剧美剧英剧韩剧日剧、悬疑剧集与国产平台热播。","requiresWebView":false,"functionName":"rowSeries","cacheDuration":3600,"params":[{"name":"sub","title":"分类","type":"enumeration","value":"cn","enumOptions":[{"title":"国产剧","value":"cn"},{"title":"口碑剧集","value":"koubei"},{"title":"近期开播","value":"onair"},{"title":"港剧","value":"hk"},{"title":"台剧","value":"tw"},{"title":"美剧","value":"us"},{"title":"英剧","value":"gb"},{"title":"韩剧","value":"kr"},{"title":"日剧","value":"jp"},{"title":"悬疑剧集","value":"mystery"},{"title":"华语口碑剧集榜","value":"db_weekly"},{"title":"高分国产剧","value":"db_top"},{"title":"腾讯视频热播","value":"db_tencent"},{"title":"爱奇艺热播","value":"db_iqiyi"},{"title":"优酷热播","value":"db_youku"},{"title":"芒果TV热播","value":"db_mango"}]},{"name":"year","title":"年份","type":"enumeration","value":"","description":"先列最近五年，再按年代分组；年代覆盖对应十年，未来上映内容仍排除。其他单一年份可选自定义。","enumOptions":[{"title":"全部年份","value":""},{"title":"2026","value":"2026"},{"title":"2025","value":"2025"},{"title":"2024","value":"2024"},{"title":"2023","value":"2023"},{"title":"2022","value":"2022"},{"title":"2020年代","value":"2020s"},{"title":"2010年代","value":"2010s"},{"title":"2000年代","value":"2000s"},{"title":"90年代","value":"1990s"},{"title":"80年代","value":"1980s"},{"title":"70年代","value":"1970s"},{"title":"60年代","value":"1960s"},{"title":"50年代","value":"1950s"},{"title":"1940年代","value":"1940s"},{"title":"1930年代","value":"1930s"},{"title":"1920年代","value":"1920s"},{"title":"1910年代","value":"1910s"},{"title":"1900年代","value":"1900s"},{"title":"自定义年份","value":"custom"}],"belongTo":{"paramName":"sub","value":["hk","tw","us","gb","kr","jp","mystery"]}},{"name":"pageSize","title":"数量","type":"enumeration","value":"20","enumOptions":[{"title":"20部 · 最快","value":"20"},{"title":"40部","value":"40"},{"title":"60部","value":"60"}]},{"name":"page","title":"页码","type":"page","value":"1"}]},
    {"id":"rowVariety","title":"🎤 综艺","description":"国产综艺与海外综艺，可按平台筛选。","requiresWebView":false,"functionName":"rowVariety","cacheDuration":3600,"params":[{"name":"sub","title":"分类","type":"enumeration","value":"cn","enumOptions":[{"title":"国产综艺","value":"cn"},{"title":"海外综艺","value":"global"}]},{"name":"platform","title":"平台","type":"enumeration","value":"","description":"剧集按播出平台；电影按观看地区的平台片库。未收录的片库会提示，平台筛选不提供播放资源。","enumOptions":[{"title":"全部平台","value":""},{"title":"国内 · 腾讯视频","value":"tencent"},{"title":"国内 · 爱奇艺","value":"iqiyi"},{"title":"国内 · 优酷","value":"youku"},{"title":"国内 · 芒果TV","value":"mango"},{"title":"国外 · Netflix","value":"netflix"},{"title":"国外 · Disney+","value":"disney"},{"title":"国外 · Apple TV+","value":"apple"},{"title":"国外 · Prime Video","value":"prime"},{"title":"国外 · HBO/Max","value":"max"},{"title":"国外 · Hulu","value":"hulu"}],"belongTo":{"paramName":"sub","value":["cn","global"]}},{"name":"pageSize","title":"数量","type":"enumeration","value":"20","enumOptions":[{"title":"20部 · 最快","value":"20"},{"title":"40部","value":"40"},{"title":"60部","value":"60"}]},{"name":"page","title":"页码","type":"page","value":"1"}]},
    {"id":"rowAnime","title":"🌸 动漫","description":"日漫、国漫与海外动画电影。","requiresWebView":false,"functionName":"rowAnime","cacheDuration":3600,"params":[{"name":"sub","title":"分类","type":"enumeration","value":"jp","enumOptions":[{"title":"日漫","value":"jp"},{"title":"国漫","value":"cn_tv"},{"title":"国漫电影","value":"cn_movie"},{"title":"海外动画电影","value":"anime_movie"},{"title":"海外动画（全部地区）","value":"anime_tv"}]},{"name":"pageSize","title":"数量","type":"enumeration","value":"20","enumOptions":[{"title":"20部 · 最快","value":"20"},{"title":"40部","value":"40"},{"title":"60部","value":"60"}]},{"name":"page","title":"页码","type":"page","value":"1"}]},
    {"id":"rowDocumentary","title":"🎞️ 纪录片","description":"纪录片电影、纪录片剧集与国产纪录片（仅中国大陆）。","requiresWebView":false,"functionName":"rowDocumentary","cacheDuration":3600,"params":[{"name":"sub","title":"分类","type":"enumeration","value":"global_movie","enumOptions":[{"title":"纪录片电影","value":"global_movie"},{"title":"纪录片剧集","value":"global_tv"},{"title":"国产纪录片 · 电影","value":"cn_movie"},{"title":"国产纪录片 · 剧集","value":"cn_tv"}]},{"name":"pageSize","title":"数量","type":"enumeration","value":"20","enumOptions":[{"title":"20部 · 最快","value":"20"},{"title":"40部","value":"40"},{"title":"60部","value":"60"}]},{"name":"page","title":"页码","type":"page","value":"1"}]},
    {"id":"rowCharts","title":"🔥 榜单","description":"流媒体平台Top10：Netflix官方周榜与各平台热播，另有Bangumi动画榜。","requiresWebView":false,"functionName":"rowCharts","cacheDuration":3600,"params":[{"name":"sub","title":"分类","type":"enumeration","value":"nf_en_tv","enumOptions":[{"title":"Netflix · 英语剧集","value":"nf_en_tv"},{"title":"Netflix · 非英语剧集","value":"nf_other_tv"},{"title":"Netflix · 英语电影","value":"nf_en_movie"},{"title":"Netflix · 非英语电影","value":"nf_other_movie"},{"title":"Disney+ · 剧集","value":"disney_tv"},{"title":"Disney+ · 电影","value":"disney_movie"},{"title":"Apple TV+ · 剧集","value":"apple_tv"},{"title":"Apple TV+ · 电影","value":"apple_movie"},{"title":"HBO Max · 剧集","value":"max_tv"},{"title":"HBO Max · 电影","value":"max_movie"},{"title":"Prime Video · 剧集","value":"prime_tv"},{"title":"Prime Video · 电影","value":"prime_movie"},{"title":"Hulu · 剧集","value":"hulu_tv"},{"title":"Hulu · 电影","value":"hulu_movie"},{"title":"Paramount+ · 电影","value":"paramount_movie"},{"title":"Bangumi · 动画人气","value":"bgm_heat"},{"title":"Bangumi · 动画排名","value":"bgm_rank"}]},{"name":"page","title":"页码","type":"page","value":"1"}]},
    {
      "id": "movieHome",
      "title": "电影（旧版）",
      "functionName": "loadMovieHome",
      "requiresWebView": false,
      "cacheDuration": 21600,
      "description": "旧版入口，已合并到新首页，可继续使用。追新片单；子分类通过本入口的分类筛选选择，不另占首页目录。",
      "params": [
        {"name": "category", "title": "类别", "type": "enumeration", "value": "movies", "enumOptions": [{"title":"长片","value":"movies"},{"title":"短片","value":"shortMovies"}]},
        RexHomeParam.p_year,
        RexHomeParam.p_customYear,
        RexHomeParam.p_region,
        {"name": "genre", "title": "题材", "type": "enumeration", "value": "", "enumOptions": [{"title":"全部","value":""},{"title":"剧情","value":"18"},{"title":"喜剧","value":"35"},{"title":"动作","value":"28"},{"title":"爱情","value":"10749"},{"title":"悬疑","value":"9648"},{"title":"科幻","value":"878"},{"title":"惊悚","value":"53"},{"title":"恐怖","value":"27"},{"title":"奇幻","value":"14"},{"title":"犯罪","value":"80"},{"title":"音乐","value":"10402"},{"title":"冒险","value":"12"},{"title":"家庭","value":"10751"}]},
        RexHomeParam.p_platform,
        {"name": "watchRegion", "title": "电影观看地区", "type": "enumeration", "value": "auto", "description": "选择平台片库所在地区，与作品出品地区分别筛选。自动：国内平台使用中国内地，国外平台使用美国。", "enumOptions": RexHomeEnum.e_watchRegion},
        RexHomeParam.p_rating,
        RexHomeParam.p_range,
        RexHomeParam.p_sort,
        RexHomeParam.p_tags,
        RexHomeParam.p_pageSize,
        RexHomeParam.p_page
      ]
    },
    {
      "id": "seriesHome",
      "title": "剧集（旧版）",
      "functionName": "loadSeriesHome",
      "requiresWebView": false,
      "cacheDuration": 21600,
      "description": "旧版入口，已合并到新首页，可继续使用。追新片单；子分类通过本入口的分类筛选选择，不另占首页目录。",
      "params": [
        {"name": "douban", "title": "豆瓣国产剧", "type": "enumeration", "value": "", "description": "选择后按豆瓣榜单显示国产剧，其他筛选不生效；只显示能准确对上片库的作品。", "enumOptions": [{"title":"关闭（按下方筛选）","value":""},{"title":"近期热门国产剧","value":"hot"},{"title":"华语口碑剧集榜","value":"weekly"},{"title":"高分国产剧","value":"top"},{"title":"腾讯视频热播","value":"tencent"},{"title":"爱奇艺热播","value":"iqiyi"},{"title":"优酷热播","value":"youku"},{"title":"芒果TV热播","value":"mango"}]},
        RexHomeParam.p_year,
        RexHomeParam.p_customYear,
        RexHomeParam.p_region,
        {"name": "genre", "title": "题材", "type": "enumeration", "value": "", "enumOptions": [{"title":"全部","value":""},{"title":"剧情","value":"18"},{"title":"喜剧","value":"35"},{"title":"动作冒险","value":"10759"},{"title":"悬疑","value":"9648"},{"title":"科幻奇幻","value":"10765"},{"title":"犯罪","value":"80"},{"title":"家庭","value":"10751"}]},
        RexHomeParam.p_platform,
        RexHomeParam.p_rating,
        RexHomeParam.p_range,
        RexHomeParam.p_sort2,
        RexHomeParam.p_tags,
        RexHomeParam.p_dateMode,
        RexHomeParam.p_loadMode,
        RexHomeParam.p_pageSize,
        RexHomeParam.p_page
      ]
    },
    {
      "id": "varietyHome",
      "title": "国内综艺（旧版）",
      "functionName": "loadVarietyHome",
      "requiresWebView": false,
      "cacheDuration": 21600,
      "description": "旧版入口，已合并到新首页，可继续使用。追新片单；子分类通过本入口的分类筛选选择，不另占首页目录。",
      "params": [
        {"name": "category", "title": "类别", "type": "enumeration", "value": "varietyCN", "enumOptions": [{"title":"国内综艺","value":"varietyCN"},{"title":"国外综艺","value":"varietyGlobal"}]},
        RexHomeParam.p_year,
        RexHomeParam.p_customYear,
        {"name": "region", "title": "地区", "type": "enumeration", "value": "", "enumOptions": [{"title":"指定海外国家合并","value":""},{"title":"美国","value":"US"},{"title":"英国","value":"GB"},{"title":"日本","value":"JP"},{"title":"韩国","value":"KR"},{"title":"泰国","value":"TH"},{"title":"印度","value":"IN"},{"title":"巴西","value":"BR"},{"title":"阿根廷","value":"AR"},{"title":"墨西哥","value":"MX"},{"title":"法国","value":"FR"},{"title":"德国","value":"DE"},{"title":"西班牙","value":"ES"},{"title":"意大利","value":"IT"}], "belongTo": {"paramName":"category","value":["varietyGlobal"]}},
        {"name": "genre", "title": "节目类型", "type": "enumeration", "value": "", "enumOptions": [{"title":"全部","value":""},{"title":"真人秀","value":"10764"},{"title":"脱口秀","value":"10767"}]},
        RexHomeParam.p_platform,
        RexHomeParam.p_rating,
        RexHomeParam.p_range,
        RexHomeParam.p_sort2,
        RexHomeParam.p_tags,
        RexHomeParam.p_dateMode,
        RexHomeParam.p_loadMode,
        RexHomeParam.p_pageSize,
        RexHomeParam.p_page
      ]
    },
    {
      "id": "animeHome",
      "title": "海外动漫（旧版）",
      "functionName": "loadAnimeHome",
      "requiresWebView": false,
      "cacheDuration": 21600,
      "description": "旧版入口，已合并到新首页，可继续使用。追新片单；子分类通过本入口的分类筛选选择，不另占首页目录。；动漫只含中国大陆以外的动画，中国大陆动画在国漫。",
      "params": [
        RexHomeParam.p_category,
        RexHomeParam.p_year,
        RexHomeParam.p_customYear,
        RexHomeParam.p_region2,
        RexHomeParam.p_genre,
        RexHomeParam.p_platform,
        RexHomeParam.p_watchRegion,
        RexHomeParam.p_rating,
        RexHomeParam.p_range,
        RexHomeParam.p_sort3,
        RexHomeParam.p_movieSort,
        RexHomeParam.p_tags,
        RexHomeParam.p_dateMode2,
        RexHomeParam.p_loadMode2,
        RexHomeParam.p_pageSize,
        RexHomeParam.p_page
      ]
    },
    {
      "id": "guomanHome",
      "title": "国漫（旧版）",
      "functionName": "guomanHome",
      "requiresWebView": false,
      "cacheDuration": 21600,
      "description": "旧版入口，已合并到新首页，可继续使用。追新片单；子分类通过本入口的分类筛选选择，不另占首页目录。；动漫只含中国大陆以外的动画，中国大陆动画在国漫。",
      "params": [
        RexHomeParam.p_category,
        RexHomeParam.p_year,
        RexHomeParam.p_customYear,
        RexHomeParam.p_genre,
        RexHomeParam.p_platform,
        RexHomeParam.p_watchRegion,
        RexHomeParam.p_rating,
        RexHomeParam.p_range,
        RexHomeParam.p_sort3,
        RexHomeParam.p_movieSort,
        RexHomeParam.p_tags,
        RexHomeParam.p_dateMode2,
        RexHomeParam.p_loadMode2,
        RexHomeParam.p_pageSize,
        RexHomeParam.p_page
      ]
    },
    {
      "id": "tmdbPicks",
      "title": "本周趋势（旧版）",
      "functionName": "loadTmdbPicks",
      "requiresWebView": false,
      "cacheDuration": 21600,
      "description": "旧版入口，已合并到新首页，可继续使用。保留趋势、热门、高分和上映片单；新增系列电影与主题探索，使用原始影片ID和海报，过滤纪录片。",
      "params": [
        {"name": "feed", "title": "片单", "type": "enumeration", "value": "weekMovies", "enumOptions": [{"title":"本周电影趋势","value":"weekMovies"},{"title":"本周剧集趋势","value":"weekSeries"},{"title":"热门电影","value":"popularMovies"},{"title":"热门剧集","value":"popularSeries"},{"title":"高分电影","value":"ratedMovies"},{"title":"高分剧集","value":"ratedSeries"},{"title":"正在上映","value":"nowMovies"},{"title":"系列电影","value":"collections"},{"title":"主题探索","value":"themes"}]},
        {"name": "series", "title": "电影系列", "type": "enumeration", "value": "lordOfRings", "belongTo": {"paramName":"feed","value":["collections"]}, "enumOptions": [{"title":"流浪地球","value":"wanderingEarth"},{"title":"唐人街探案","value":"detectiveChinatown"},{"title":"指环王","value":"lordOfRings"},{"title":"哈利·波特","value":"harryPotter"},{"title":"碟中谍","value":"missionImpossible"},{"title":"黑客帝国","value":"matrix"},{"title":"复仇者联盟","value":"avengers"},{"title":"玩具总动员","value":"toyStory"}]},
        {"name": "seriesSort", "title": "系列排序", "type": "enumeration", "value": "release", "belongTo": {"paramName":"feed","value":["collections"]}, "enumOptions": [{"title":"按上映顺序","value":"release"},{"title":"评分优先","value":"score"}]},
        {"name": "theme", "title": "电影主题", "type": "enumeration", "value": "timeLoop", "belongTo": {"paramName":"feed","value":["themes"]}, "enumOptions": [{"title":"时空循环","value":"timeLoop"},{"title":"赛博朋克","value":"cyberpunk"},{"title":"密室推理","value":"whodunit"},{"title":"太空歌剧","value":"spaceOpera"}]},
        {"name": "themeSort", "title": "主题排序", "type": "enumeration", "value": "popular", "belongTo": {"paramName":"feed","value":["themes"]}, "enumOptions": [{"title":"热度优先","value":"popular"},{"title":"评分优先","value":"score"},{"title":"最近上映","value":"recent"}]},
        RexHomeParam.p_view,
        RexHomeParam.p_pageSize,
        RexHomeParam.p_page
      ]
    },
    {
      "id": "netflixWeekly",
      "title": "Netflix-全球周榜（旧版）",
      "functionName": "loadNetflixWeekly",
      "requiresWebView": false,
      "cacheDuration": 3600,
      "description": "旧版入口，已合并到新首页，可继续使用。一个平台榜单母入口对应七个平台。Netflix官方全球周榜；其余平台为平台在播热门（美国区）。",
      "params": [
        {"name": "platform", "title": "平台", "type": "enumeration", "value": "netflix", "enumOptions": [{"title":"Netflix","value":"netflix"},{"title":"Disney+","value":"disney"},{"title":"Apple TV+","value":"apple"},{"title":"Prime Video","value":"prime"},{"title":"HBO/Max","value":"max"},{"title":"Hulu","value":"hulu"},{"title":"Paramount+","value":"paramount"}]},
        {"name": "feed", "title": "榜单", "type": "enumeration", "value": "englishMovies", "enumOptions": [{"title":"英语电影","value":"englishMovies"},{"title":"非英语电影","value":"otherMovies"},{"title":"英语剧集","value":"englishSeries"},{"title":"非英语剧集","value":"otherSeries"}], "belongTo": {"paramName":"platform","value":["netflix"]}},
        {"name": "chartType", "title": "类别", "type": "enumeration", "value": "movie", "belongTo": {"paramName":"platform","value":["disney","apple","prime","max","paramount"]}, "enumOptions": [{"title":"电影","value":"movie"},{"title":"剧集","value":"tv"}]},
        RexHomeParam.p_view,
        RexHomeParam.p_page
      ]
    },
    {
      "id": "studioHome",
      "title": "出品公司（旧版）",
      "functionName": "loadStudioHome",
      "requiresWebView": false,
      "cacheDuration": 43200,
      "description": "旧版入口，已合并到新首页，可继续使用。按实际出品公司筛选真人电影；公司不等于播放平台，不保证可播放。",
      "params": [
        {"name": "company", "title": "电影出品公司", "type": "enumeration", "value": "warner", "enumOptions": [{"title":"华纳兄弟","value":"warner"},{"title":"环球影业","value":"universal"},{"title":"派拉蒙","value":"paramount"},{"title":"哥伦比亚","value":"columbia"},{"title":"迪士尼","value":"disney"},{"title":"二十世纪影业","value":"century"},{"title":"中国电影集团","value":"chinaFilm"},{"title":"光线影业","value":"enlight"}]},
        RexHomeParam.p_year,
        RexHomeParam.p_customYear,
        {"name": "region", "title": "地区", "type": "enumeration", "value": "all", "enumOptions": [{"title":"全部地区（默认）","value":"all"}].concat(RexHomeEnum.e_region.filter(function(o){return o.value!=="all";}))},
        RexHomeParam.p_rating,
        RexHomeParam.p_range,
        RexHomeParam.p_sort,
        {"name": "view", "title": "首页展示", "type": "enumeration", "value": "all", "enumOptions": [{"title":"完整片单顺序","value":"all"},{"title":"首页优先避重复","value":"home"}], "description": "仅读取已加载的电影栏缓存调整第一页顺序，保留全部返回项及分页；无缓存时保持原顺序。"},
        RexHomeParam.p_pageSize,
        RexHomeParam.p_page
      ]
    },
    {
      "id": "documentaryHome",
      "title": "纪录片（旧版）",
      "functionName": "loadDocumentaryHome",
      "requiresWebView": false,
      "cacheDuration": 43200,
      "description": "旧版入口，已合并到新首页，可继续使用。国内、国外纪录电影和纪录剧集；国外默认覆盖当前支持的海外国家，按出品地区筛选，不代表播放平台。",
      "params": [
        {"name": "scope", "title": "国内／国外", "type": "enumeration", "value": "domestic", "enumOptions": [{"title":"国内纪录片","value":"domestic"},{"title":"国外纪录片","value":"foreign"}]},
        {"name": "format", "title": "内容形式", "type": "enumeration", "value": "movie", "enumOptions": [{"title":"纪录电影","value":"movie"},{"title":"纪录剧集","value":"tv"}]},
        RexHomeParam.p_year,
        RexHomeParam.p_customYear,
        {"name": "regionDomestic", "title": "国内地区", "type": "enumeration", "value": "", "enumOptions": [{"title":"中国大陆（默认）","value":""},{"title":"大陆及港澳台","value":"all"},{"title":"中国香港","value":"HK"},{"title":"中国台湾","value":"TW"},{"title":"中国澳门","value":"MO"}], "belongTo": {"paramName":"scope","value":["domestic"]}},
        {"name": "regionForeign", "title": "海外地区", "type": "enumeration", "value": "", "enumOptions": [{"title":"全部支持的海外地区","value":""},{"title":"美国","value":"US"},{"title":"英国","value":"GB"},{"title":"日本","value":"JP"},{"title":"韩国","value":"KR"},{"title":"泰国","value":"TH"},{"title":"印度","value":"IN"},{"title":"巴西","value":"BR"},{"title":"阿根廷","value":"AR"},{"title":"墨西哥","value":"MX"},{"title":"法国","value":"FR"},{"title":"德国","value":"DE"},{"title":"西班牙","value":"ES"},{"title":"意大利","value":"IT"}], "belongTo": {"paramName":"scope","value":["foreign"]}},
        RexHomeParam.p_rating,
        RexHomeParam.p_range,
        RexHomeParam.p_sort,
        RexHomeParam.p_pageSize,
        RexHomeParam.p_page
      ]
    },
    {
      "id": "bangumiPicks",
      "title": "Bangumi-动画人气榜（旧版）",
      "functionName": "loadBangumiPicks",
      "requiresWebView": false,
      "cacheDuration": 21600,
      "description": "旧版入口，已合并到新首页，可继续使用。Bangumi累计人气与有效排名；仅展示可唯一核对的同名同年片库动画，不是本周播放量。",
      "params": [
        {"name": "bgmSort", "title": "榜单", "type": "enumeration", "value": "heat", "enumOptions": [{"title":"Bangumi人气","value":"heat"},{"title":"Bangumi排名","value":"rank"}]},
        RexHomeParam.p_category,
        RexHomeParam.p_year,
        RexHomeParam.p_customYear,
        {"name": "bgmRegion", "title": "地区", "type": "enumeration", "value": "", "description": "仅按Bangumi公共标签筛选中国／日本，不代表平台片库。", "enumOptions": [{"title":"全部","value":""},{"title":"国漫","value":"CN"},{"title":"日番","value":"JP"}]},
        {"name": "bgmRating", "title": "最低评分", "type": "input", "value": "0", "description": "0至10；Bangumi评分，与片库评分不同。"},
        {"name": "bgmPageSize", "title": "数量", "type": "enumeration", "value": "40", "description": "每页最多读取40条源记录，可选20条减少请求或60条扩大读取；匹配后数量可能更少。", "enumOptions": [{"title":"20条 · 快速","value":"20"},{"title":"40条 · 默认","value":"40"},{"title":"60条 · 更多","value":"60"}]},
        RexHomeParam.p_view,
        RexHomeParam.p_page
      ]
    }
  ],
  "author": "Bolinxxlin"
};

// The same graph is validated against static metadata.
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
    catch(_){throw new Error('片库加载失败，请检查网络后刷新；暂无可用缓存时不会展示替代影片');}
    if (!data || typeof data!=='object' || data.success===false) throw new Error('片库数据暂不可用，请稍后刷新');
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
 if(path.startsWith('/')) return 'https://image.tmdb.org/t/p/w500'+path;
 var match=path.match(/^https:\/\/image\.tmdb\.org\/t\/p\/(?:original|w[0-9]+)(\/[^?#]+)$/);
 return match?'https://image.tmdb.org/t/p/w500'+match[1]:path;
}
// ===== Shared text helper: Traditional -> Simplified (OpenCC tw/hk->cn single-character table) =====
var RexHomeT2SPairs="㑯㑔㑳㑇㑶㐹㓨刾㘚㘎㜄㚯㜏㛣㠏㟆㥮㤘㩜㨫㩳㧐㩵擜䁻䀥䃮鿎䊷䌶䋙䌺䋚䌻䋹䌿䋻䌾䍦䍠䎱䎬䙡䙌䜀䜧䝼䞍䥇䦂䥑鿏䥱䥾䦛䦶䦟䦷䯀䯅䰾鲃䱷䲣䱽䲝䲁鳚䲘鳤䴉鹮丟丢並并么幺乾干亂乱亙亘亞亚佇伫佈布佔占併并來来侖仑侶侣侷局俁俣係系俔伣俠侠俥伡俬私倀伥倆俩倈俫倉仓個个們们倖幸倫伦倲㑈偉伟偑㐽側侧偵侦偽伪傌㐷傑杰傖伧傘伞備备傢家傭佣傯偬傳传傴伛債债傷伤傾倾僂偻僅仅僉佥僑侨僕仆僞伪僥侥僨偾僱雇價价儀仪儁俊儂侬億亿儈侩儉俭儎傤儐傧儔俦儕侪儘尽償偿優优儲储儷俪儸㑩儺傩儻傥儼俨兇凶兌兑兒儿兗兖內内兩两冊册冑胄冪幂凈净凍冻凜凛凱凯別别刪删剄刭則则剋克剎刹剗刬剛刚剝剥剮剐剴剀創创剷铲劃划劄札劇剧劉刘劊刽劌刿劍剑劏㓥劑剂劚㔉勁劲動动務务勛勋勝胜勞劳勢势勩勚勱劢勳勋勵励勸劝勻匀匭匦匯汇匱匮區区協协卹恤卻却卽即厙厍厠厕厤历厭厌厲厉厴厣參参叄叁叢丛吒咤吳吴吶呐呂吕咼呙員员唄呗唸念問问啓启啞哑啟启啢唡喎㖞喚唤喪丧喫吃喬乔單单喲哟嗆呛嗇啬嗊唝嗎吗嗚呜嗩唢嗶哔嘆叹嘍喽嘓啯嘔呕嘖啧嘗尝嘜唛嘩哗嘮唠嘯啸嘰叽嘵哓嘸呒嘽啴噁恶噓嘘噚㖊噝咝噠哒噥哝噦哕噯嗳噲哙噴喷噸吨噹当嚀咛嚇吓嚌哜嚐尝嚕噜嚙啮嚥咽嚦呖嚨咙嚮向嚲亸嚳喾嚴严嚶嘤囀啭囁嗫囂嚣囅冁囈呓囉啰囌苏囑嘱囪囱圇囵國国圍围園园圓圆圖图團团垻坝埡垭埰采執执堅坚堊垩堖垴堝埚堯尧報报場场塊块塋茔塏垲塒埘塗涂塚冢塢坞塤埙塵尘塹堑墊垫墜坠墮堕墰坛墳坟墶垯墻墙墾垦壇坛壋垱壎埙壓压壘垒壙圹壚垆壜坛壞坏壟垄壠垅壢坜壩坝壪塆壯壮壺壶壼壸壽寿夠够夢梦夥伙夾夹奐奂奧奥奩奁奪夺奬奖奮奋奼姹妝妆姍姗姦奸娛娱婁娄婦妇婭娅媧娲媯妫媰㛀媼媪媽妈嫋袅嫗妪嫵妩嫺娴嫻娴嫿婳嬀妫嬃媭嬈娆嬋婵嬌娇嬙嫱嬡嫒嬤嬷嬪嫔嬰婴嬸婶孃娘孋㛤孌娈孫孙學学孿孪宮宫寀采寢寝實实寧宁審审寫写寬宽寵宠寶宝將将專专尋寻對对導导尷尴屆届屍尸屓屃屜屉屢屡層层屨屦屬属岡冈峯峰峴岘島岛峽峡崍崃崑昆崗岗崙仑崢峥崬岽嵐岚嵗岁嵾㟥嶁嵝嶄崭嶇岖嶔嵚嶗崂嶠峤嶢峣嶧峄嶨峃嶮崄嶸嵘嶺岭嶼屿嶽岳巋岿巒峦巔巅巖岩巰巯巹卺帥帅師师帳帐帶带幀帧幃帏幓㡎幗帼幘帻幟帜幣币幫帮幬帱幷并幹干幾几庫库廁厕廂厢廄厩廈厦廎庼廕荫廚厨廝厮廟庙廠厂廡庑廢废廣广廩廪廬庐廳厅弒弑弔吊弳弪張张強强彆别彈弹彌弥彎弯彔录彙汇彠彟彥彦彫雕彲彨彿佛後后徑径從从徠徕復复徵征徹彻恆恒恥耻悅悦悞悮悵怅悶闷悽凄惡恶惱恼惲恽惻恻愛爱愜惬愨悫愴怆愷恺愾忾慄栗態态慍愠慘惨慚惭慟恸慣惯慤悫慪怄慫怂慮虑慳悭慶庆慺㥪慼戚慾欲憂忧憊惫憐怜憑凭憒愦憖慭憚惮憤愤憫悯憮怃憲宪憶忆懇恳應应懌怿懍懔懞蒙懟怼懣懑懤㤽懨恹懲惩懶懒懷怀懸悬懺忏懼惧懾慑戀恋戇戆戔戋戧戗戩戬戰战戱戯戲戏戶户扞捍拋抛拚拼挩捝挱挲挾挟捨舍捫扪捱挨捲卷掃扫掄抡掆㧏掗挜掙挣掛挂採采揀拣揚扬換换揮挥揯搄損损搖摇搗捣搧扇搵揾搶抢摑掴摜掼摟搂摯挚摳抠摶抟摺折摻掺撈捞撏挦撐撑撓挠撝㧑撟挢撣掸撥拨撫抚撲扑撳揿撻挞撾挝撿捡擁拥擄掳擇择擊击擋挡擓㧟擔担據据擠挤擡抬擣捣擬拟擯摈擰拧擱搁擲掷擴扩擷撷擺摆擻擞擼撸擽㧰擾扰攄摅攆撵攏拢攔拦攖撄攙搀攛撺攜携攝摄攢攒攣挛攤摊攪搅攬揽敍叙敎教敓敚敗败敘叙敵敌數数斂敛斃毙斆敩斕斓斬斩斷断於于旂旗旣既昇升時时晉晋晝昼暈晕暉晖暘旸暢畅暫暂曄晔曆历曇昙曉晓曏向曖暧曠旷曨昽曬晒書书會会朧胧朮术東东枱台枴拐柵栅柺拐査查桿杆梔栀梘枧條条梟枭梲棁棄弃棊棋棖枨棗枣棟栋棡㭎棧栈棲栖棶梾椏桠椲㭏楊杨楓枫楨桢業业極极榘矩榦干榪杩榮荣榲榅榿桤構构槍枪槓杠槤梿槧椠槨椁槮椮槳桨槶椢槼椝樁桩樂乐樅枞樑梁樓楼標标樞枢樢㭤樣样樧榝樫㭴樳桪樸朴樹树樺桦樿椫橈桡橋桥機机橢椭橫横檁檩檉柽檔档檜桧檟槚檢检檣樯檮梼檯台檳槟檸柠檻槛櫃柜櫓橹櫚榈櫛栉櫝椟櫞橼櫟栎櫥橱櫧槠櫨栌櫪枥櫫橥櫬榇櫱蘖櫳栊櫸榉櫻樱欄栏欅榉權权欏椤欒栾欖榄欞棂欽钦歎叹歐欧歟欤歡欢歲岁歷历歸归歿殁殘残殞殒殤殇殨㱮殫殚殭僵殮殓殯殡殰㱩殲歼殺杀殻壳殼壳毀毁毆殴毿毵氂牦氈毡氌氇氣气氫氢氬氩氳氲氾泛汎泛汙污決决沒没沖冲況况泝溯洩泄洶汹浹浃涇泾涗涚涼凉淒凄淚泪淥渌淨净淩凌淪沦淵渊淶涞淺浅渙涣減减渢沨渦涡測测渾浑湊凑湞浈湧涌湯汤溈沩準准溝沟溫温溮浉溳涢溼湿滄沧滅灭滌涤滎荥滙汇滬沪滯滞滲渗滷卤滸浒滻浐滾滚滿满漁渔漊溇漚沤漢汉漣涟漬渍漲涨漵溆漸渐漿浆潀潨潁颍潑泼潔洁潙沩潚㴋潛潜潤润潯浔潰溃潷滗潿涠澀涩澆浇澇涝澐沄澗涧澠渑澤泽澦滪澩泶澮浍澱淀澾㳠濁浊濃浓濄㳡濕湿濘泞濚溁濛蒙濜浕濟济濤涛濧㳔濫滥濰潍濱滨濺溅濼泺濾滤瀂澛瀅滢瀆渎瀇㲿瀉泻瀋沈瀏浏瀕濒瀘泸瀝沥瀟潇瀠潆瀦潴瀧泷瀨濑瀰弥瀲潋瀾澜灃沣灄滠灑洒灕漓灘滩灝灏灡㳕灣湾灤滦灧滟灩滟災灾為为烏乌烴烃無无煉炼煒炜煙烟煢茕煥焕煩烦煬炀煱㶽熅煴熒荧熗炝熱热熲颎熾炽燁烨燈灯燉炖燒烧燙烫燜焖營营燦灿燬毁燭烛燴烩燶㶶燻熏燼烬燾焘爍烁爐炉爛烂爭争爲为爺爷爾尔牀床牆墙牘牍牴抵牽牵犖荦犛牦犢犊犧牺狀状狹狭狽狈猙狰猶犹猻狲獁犸獃呆獄狱獅狮獎奖獨独獪狯獫猃獮狝獰狞獱㺍獲获獵猎獷犷獸兽獺獭獻献獼猕玀猡現现琱雕琺珐琿珲瑋玮瑒玚瑣琐瑤瑶瑩莹瑪玛瑲玱璉琏璡琎璣玑璦瑷璫珰璯㻅環环璵玙璸瑸璽玺璿璇瓊琼瓏珑瓔璎瓚瓒甌瓯甕瓮產产産产畝亩畢毕畫画異异畵画當当疇畴疊叠痙痉痠酸痺痹痾疴瘂痖瘋疯瘍疡瘓痪瘞瘗瘡疮瘧疟瘮瘆瘲疭瘺瘘瘻瘘療疗癆痨癇痫癉瘅癒愈癘疠癟瘪癡痴癢痒癤疖癥症癧疬癩癞癬癣癭瘿癮瘾癰痈癱瘫癲癫發发皁皂皚皑皰疱皸皲皺皱盃杯盜盗盞盏盡尽監监盤盘盧卢盪荡眞真眥眦眾众睏困睜睁睞睐睪睾瞘眍瞜䁖瞞瞒瞶瞆瞼睑矇蒙矓眬矚瞩矯矫硃朱硜硁硤硖硨砗硯砚碕埼碩硕碭砀碸砜確确碼码碽䂵磑硙磚砖磠硵磣碜磧碛磯矶磽硗磾䃅礄硚礎础礙碍礦矿礪砺礫砾礬矾礱砻祕秘祿禄禍祸禎祯禕祎禡祃禦御禪禅禮礼禰祢禱祷禿秃秈籼稅税稈秆稏䅉稜棱稟禀種种稱称穀谷穇䅟穌稣積积穎颖穠秾穡穑穢秽穩稳穫获穭穞窩窝窪洼窮穷窯窑窵窎窶窭窺窥竄窜竅窍竇窦竈灶竊窃竪竖競竞筆笔筍笋筧笕筴䇲箇个箋笺箏筝箚札節节範范築筑篋箧篔筼篠筿篤笃篩筛篳筚簀箦簍篓簑蓑簞箪簡简簣篑簫箫簷檐簹筜簽签簾帘籃篮籌筹籔䉤籙箓籛篯籜箨籟籁籠笼籤签籩笾籪簖籬篱籮箩籲吁粧妆粵粤糉粽糝糁糞粪糧粮糭粽糰团糲粝糴籴糶粜糹纟糾纠紀纪紂纣約约紅红紆纡紇纥紈纨紉纫紋纹納纳紐纽紓纾純纯紕纰紖纼紗纱紘纮紙纸級级紛纷紜纭紝纴紡纺紬䌷紮扎細细紱绂紲绁紳绅紵纻紹绍紺绀紼绋紿绐絀绌終终絃弦組组絅䌹絆绊絎绗結结絕绝絛绦絝绔絞绞絡络絢绚給给絨绒絰绖統统絲丝絳绛絶绝絹绢綁绑綃绡綆绠綈绨綉绣綌绤綏绥綐䌼綑捆經经綜综綞缍綠绿綢绸綣绻綫线綬绶維维綯绹綰绾綱纲網网綳绷綴缀綵彩綸纶綹绺綺绮綻绽綽绰綾绫綿绵緄绲緇缁緊紧緋绯緑绿緒绪緓绬緔绱緗缃緘缄緙缂線线緝缉緞缎締缔緡缗緣缘緦缌編编緩缓緬缅緯纬緱缑緲缈練练緶缏緹缇緻致緼缊縈萦縉缙縊缢縋缒縐绉縑缣縕缊縗缞縛缚縝缜縞缟縟缛縣县縧绦縫缝縭缡縮缩縱纵縲缧縳䌸縴纤縵缦縶絷縷缕縹缥總总績绩繃绷繅缫繆缪繒缯織织繕缮繚缭繞绕繡绣繢缋繩绳繪绘繫系繭茧繮缰繯缳繰缲繳缴繸䍁繹绎繼继繽缤繾缱繿䍀纇颣纈缬纊纩續续纍累纏缠纓缨纔才纖纤纘缵纜缆缽钵罃䓨罈坛罌罂罎坛罰罚罵骂罷罢羅罗羆罴羈羁羋芈羣群羥羟羨羡義义羶膻習习翫玩翬翚翹翘翽翙耬耧耮耢聖圣聞闻聯联聰聪聲声聳耸聵聩聶聂職职聹聍聽听聾聋肅肃脅胁脈脉脛胫脣唇脩修脫脱脹胀腎肾腖胨腡脶腦脑腫肿腳脚腸肠膃腽膕腘膚肤膞䏝膠胶膩腻膽胆膾脍膿脓臉脸臍脐臏膑臘腊臚胪臟脏臠脔臢臜臥卧臨临臺台與与興兴舉举舊旧舖铺舘馆艙舱艤舣艦舰艫舻艱艰艷艳芻刍苧苎茲兹荊荆莊庄莖茎莢荚莧苋華华菴庵菸烟萇苌萊莱萬万萴荝萵莴葉叶葒荭著着葤荮葦苇葯药葷荤蒐搜蒓莼蒔莳蒕蒀蒞莅蒼苍蓀荪蓆席蓋盖蓮莲蓯苁蓴莼蓽荜蔔卜蔘参蔞蒌蔣蒋蔥葱蔦茑蔭荫蕁荨蕆蒇蕎荞蕒荬蕓芸蕕莸蕘荛蕢蒉蕩荡蕪芜蕭萧蕷蓣薀蕰薈荟薊蓟薌芗薑姜薔蔷薘荙薟莶薦荐薩萨薳䓕薴苧薵䓓薹苔薺荠藍蓝藎荩藝艺藥药藪薮藭䓖藴蕴藶苈藹蔼藺蔺蘀萚蘄蕲蘆芦蘇苏蘊蕴蘋苹蘚藓蘞蔹蘢茏蘭兰蘺蓠蘿萝虆蔂處处虛虚虜虏號号虧亏虯虬蛺蛱蛻蜕蜆蚬蝕蚀蝟猬蝦虾蝨虱蝸蜗螄蛳螞蚂螢萤螮䗖螻蝼螿螀蟄蛰蟈蝈蟎螨蟣虮蟬蝉蟯蛲蟲虫蟶蛏蟻蚁蠁蚃蠅蝇蠆虿蠍蝎蠐蛴蠑蝾蠔蚝蠟蜡蠣蛎蠨蟏蠱蛊蠶蚕蠻蛮衆众衊蔑術术衕同衚胡衛卫衝冲衞卫衹只袞衮袷夹裊袅裏里補补裝装裡里製制複复褌裈褘袆褲裤褳裢褸褛褻亵襇裥襉裥襏袯襖袄襝裣襠裆襤褴襪袜襬摆襯衬襲袭襴襕覈核見见覎觃規规覓觅視视覘觇覡觋覥觍覦觎親亲覬觊覯觏覲觐覷觑覺觉覽览覿觌觀观觴觞觶觯觸触訁讠訂订訃讣計计訊讯訌讧討讨訐讦訒讱訓训訕讪訖讫託托記记訛讹訝讶訟讼訢䜣訣诀訥讷訩讻訪访設设許许訴诉訶诃診诊註注証证詁诂詆诋詎讵詐诈詒诒詔诏評评詖诐詗诇詘诎詛诅詞词詠咏詡诩詢询詣诣試试詩诗詫诧詬诟詭诡詮诠詰诘話话該该詳详詵诜詼诙詿诖誄诔誅诛誆诓誇夸誌志認认誑诳誒诶誕诞誘诱誚诮語语誠诚誡诫誣诬誤误誥诰誦诵誨诲說说説说誰谁課课誶谇誹诽誼谊誾訚調调諂谄諄谆談谈諉诿請请諍诤諏诹諑诼諒谅論论諗谂諛谀諜谍諝谞諞谝諡谥諢诨諤谔諦谛諧谐諫谏諭谕諮咨諱讳諳谙諶谌諷讽諸诸諺谚諼谖諾诺謀谋謁谒謂谓謄誊謅诌謊谎謎谜謐谧謔谑謖谡謗谤謙谦謚谥講讲謝谢謠谣謡谣謨谟謫谪謬谬謭谫謳讴謹谨謾谩譁哗證证譎谲譏讥譖谮識识譙谯譚谭譜谱譟噪譫谵譭毁譯译議议譴谴護护譸诪譽誉譾谫讀读讅谉變变讋詟讌䜩讎雠讒谗讓让讕谰讖谶讚赞讜谠讞谳谿溪豈岂豎竖豐丰豔艳豬猪豶豮貍狸貓猫貙䝙貝贝貞贞貟贠負负財财貢贡貧贫貨货販贩貪贪貫贯責责貯贮貰贳貲赀貳贰貴贵貶贬買买貸贷貺贶費费貼贴貽贻貿贸賀贺賁贲賂赂賃赁賄贿賅赅資资賈贾賊贼賑赈賒赊賓宾賕赇賙赒賚赉賜赐賞赏賠赔賡赓賢贤賣卖賤贱賦赋賧赕質质賫赍賬账賭赌賰䞐賴赖賵赗賺赚賻赙購购賽赛賾赜贄贽贅赘贇赟贈赠贊赞贋赝贍赡贏赢贐赆贓赃贔赑贖赎贗赝贛赣贜赃赬赪趕赶趙赵趨趋趲趱跡迹踐践踰逾踴踊蹌跄蹕跸蹟迹蹠跖蹣蹒蹤踪蹺跷躂跶躉趸躊踌躋跻躍跃躎䟢躑踯躒跞躓踬躕蹰躚跹躡蹑躥蹿躦躜躪躏軀躯車车軋轧軌轨軍军軑轪軒轩軔轫軛轭軟软軤轷軫轸軲轱軸轴軹轵軺轺軻轲軼轶軾轼較较輅辂輇辁輈辀載载輊轾輒辄輓挽輔辅輕轻輛辆輜辎輝辉輞辋輟辍輥辊輦辇輩辈輪轮輬辌輯辑輳辏輸输輻辐輼辒輾辗輿舆轀辒轂毂轄辖轅辕轆辘轉转轍辙轎轿轔辚轟轰轡辔轢轹轤轳辦办辭辞辮辫辯辩農农迴回逕径這这連连週周進进遊游運运過过達达違违遙遥遜逊遞递遠远遡溯適适遲迟遶绕遷迁選选遺遗遼辽邁迈還还邇迩邊边邏逻邐逦郟郏郵邮鄆郓鄉乡鄒邹鄔邬鄖郧鄧邓鄭郑鄰邻鄲郸鄴邺鄶郐鄺邝酇酂酈郦醃腌醖酝醜丑醞酝醟蒏醣糖醫医醬酱醱酦釀酿釁衅釃酾釅酽釋释釐厘釒钅釓钆釔钇釕钌釗钊釘钉釙钋針针釣钓釤钐釦扣釧钏釩钒釵钗釷钍釹钕釺钎釾䥺鈀钯鈁钫鈃钘鈄钭鈅钥鈈钚鈉钠鈍钝鈎钩鈐钤鈑钣鈒钑鈔钞鈕钮鈞钧鈡钟鈣钙鈥钬鈦钛鈧钪鈮铌鈰铈鈳钶鈴铃鈷钴鈸钹鈹铍鈺钰鈽钸鈾铀鈿钿鉀钾鉅巨鉆钻鉈铊鉉铉鉋铇鉍铋鉑铂鉕钷鉗钳鉚铆鉛铅鉞钺鉢钵鉤钩鉦钲鉬钼鉭钽鉳锫鉶铏鉸铰鉺铒鉻铬鉿铪銀银銃铳銅铜銍铚銑铣銓铨銖铢銘铭銚铫銛铦銜衔銠铑銣铷銥铱銦铟銨铵銩铥銪铕銫铯銬铐銱铞銳锐銷销銹锈銻锑銼锉鋁铝鋃锒鋅锌鋇钡鋌铤鋏铗鋒锋鋙铻鋝锊鋟锓鋣铘鋤锄鋥锃鋦锔鋨锇鋩铓鋪铺鋭锐鋮铖鋯锆鋰锂鋱铽鋶锍鋸锯鋼钢錁锞錄录錆锖錇锫錈锩錏铔錐锥錒锕錕锟錘锤錙锱錚铮錛锛錟锬錠锭錡锜錢钱錦锦錨锚錩锠錫锡錮锢錯错録录錳锰錶表錸铼錼镎鍀锝鍁锨鍃锪鍅钫鍆钔鍇锴鍈锳鍊炼鍋锅鍍镀鍔锷鍘铡鍚钖鍛锻鍠锽鍤锸鍥锲鍩锘鍬锹鍰锾鍵键鍶锶鍺锗鍼针鍾钟鎂镁鎄锿鎇镅鎊镑鎌镰鎔镕鎖锁鎘镉鎚锤鎛镈鎡镃鎢钨鎣蓥鎦镏鎧铠鎩铩鎪锼鎬镐鎭镇鎮镇鎰镒鎲镋鎳镍鎵镓鎶鿔鎸镌鎿镎鏃镞鏇旋鏈链鏌镆鏍镙鏐镠鏑镝鏗铿鏘锵鏜镗鏝镘鏞镛鏟铲鏡镜鏢镖鏤镂鏨錾鏰镚鏵铧鏷镤鏹镪鏺䥽鏽锈鐃铙鐋铴鐐镣鐒铹鐓镦鐔镡鐘钟鐙镫鐝镢鐠镨鐥䦅鐦锎鐧锏鐨镄鐫镌鐮镰鐯䦃鐲镯鐳镭鐵铁鐶镮鐸铎鐺铛鐿镱鑄铸鑊镬鑌镔鑑鉴鑒鉴鑔镲鑕锧鑞镴鑠铄鑣镳鑥镥鑭镧鑰钥鑱镵鑲镶鑷镊鑹镩鑼锣鑽钻鑾銮鑿凿钁镢钂镋長长門门閂闩閃闪閆闫閈闬閉闭開开閌闶閎闳閏闰閑闲閒闲間间閔闵閘闸閡阂閣阁閤合閥阀閨闺閩闽閫阃閬阆閭闾閱阅閲阅閶阊閹阉閻阎閼阏閽阍閾阈閿阌闃阒闆板闇暗闈闱闊阔闋阕闌阑闍阇闐阗闒阘闓闿闔阖闕阙闖闯關关闞阚闠阓闡阐闢辟闤阛闥闼陘陉陝陕陞升陣阵陰阴陳陈陸陆陽阳隉陧隊队階阶隕陨際际隨随險险隯陦隱隐隴陇隸隶隻只雋隽雖虽雙双雛雏雜杂雞鸡離离難难雲云電电霑沾霢霡霧雾霽霁靂雳靄霭靆叇靈灵靉叆靚靓靜静靝靔靦腼靨靥鞏巩鞝绱鞦秋鞽鞒韁缰韃鞑韆千韉鞯韋韦韌韧韍韨韓韩韙韪韜韬韝鞲韞韫韻韵響响頁页頂顶頃顷項项順顺頇顸須须頊顼頌颂頎颀頏颃預预頑顽頒颁頓顿頗颇領领頜颌頡颉頤颐頦颏頭头頮颒頰颊頲颋頴颕頷颔頸颈頹颓頻频頽颓顆颗題题額额顎腭顏颜顒颙顓颛顔颜願愿顙颡顛颠類类顢颟顥颢顧顾顫颤顬颥顯显顰颦顱颅顳颞顴颧風风颭飐颮飑颯飒颱台颳刮颶飓颸飔颺飏颻飖颼飕飀飗飄飘飆飙飈飚飛飞飠饣飢饥飣饤飥饦飩饨飪饪飫饫飭饬飯饭飱飧飲饮飴饴飼饲飽饱飾饰飿饳餃饺餄饸餅饼餈糍餉饷養养餌饵餎饹餏饻餑饽餒馁餓饿餕馂餖饾餘余餚肴餛馄餜馃餞饯餡馅館馆餬糊餱糇餳饧餵喂餶馉餷馇餺馎餼饩餾馏餿馊饁馌饃馍饅馒饈馐饉馑饊馓饋馈饌馔饑饥饒饶饗飨饜餍饞馋饢馕馬马馭驭馮冯馱驮馳驰馴驯馹驲駁驳駐驻駑驽駒驹駔驵駕驾駘骀駙驸駛驶駝驼駟驷駡骂駢骈駭骇駰骃駱骆駸骎駿骏騁骋騂骍騅骓騌骔騍骒騎骑騏骐騖骛騙骗騤骙騧䯄騫骞騭骘騮骝騰腾騶驺騷骚騸骟騾骡驀蓦驁骜驂骖驃骠驄骢驅驱驊骅驌骕驍骁驏骣驕骄驗验驚惊驛驿驟骤驢驴驤骧驥骥驦骦驪骊驫骉骯肮髏髅髒脏體体髕髌髖髋髮发鬆松鬍胡鬚须鬢鬓鬥斗鬧闹鬨哄鬩阋鬮阄鬱郁鬹鬶魎魉魘魇魚鱼魛鱽魢鱾魨鲀魯鲁魴鲂魷鱿魺鲄鮁鲅鮃鲆鮊鲌鮋鲉鮍鲏鮎鲇鮐鲐鮑鲍鮒鲋鮓鲊鮚鲒鮜鲘鮝鲞鮞鲕鮣䲟鮦鲖鮪鲔鮫鲛鮭鲑鮮鲜鮳鲓鮶鲪鮺鲝鯀鲧鯁鲠鯇鲩鯉鲤鯊鲨鯒鲬鯔鲻鯕鲯鯖鲭鯗鲞鯛鲷鯝鲴鯡鲱鯢鲵鯤鲲鯧鲳鯨鲸鯪鲮鯫鲰鯰鲇鯴鲺鯷鳀鯽鲫鯿鳊鰁鳈鰂鲗鰃鳂鰆䲠鰈鲽鰉鳇鰌䲡鰍鳅鰏鲾鰐鳄鰒鳆鰓鳃鰛鳁鰜鳒鰟鳑鰠鳋鰣鲥鰥鳏鰧䲢鰨鳎鰩鳐鰭鳍鰮鳁鰱鲢鰲鳌鰳鳓鰵鳘鰷鲦鰹鲣鰺鲹鰻鳗鰼鳛鰾鳔鱂鳉鱅鳙鱈鳕鱉鳖鱒鳟鱔鳝鱖鳜鱗鳞鱘鲟鱝鲼鱟鲎鱠鲙鱣鳣鱤鳡鱧鳢鱨鲿鱭鲚鱯鳠鱷鳄鱸鲈鱺鲡鳥鸟鳧凫鳩鸠鳬凫鳲鸤鳳凤鳴鸣鳶鸢鳾䴓鴆鸩鴇鸨鴉鸦鴒鸰鴕鸵鴛鸳鴝鸲鴞鸮鴟鸱鴣鸪鴦鸯鴨鸭鴯鸸鴰鸹鴴鸻鴷䴕鴻鸿鴿鸽鵁䴔鵂鸺鵃鸼鵐鹀鵑鹃鵒鹆鵓鹁鵜鹈鵝鹅鵠鹄鵡鹉鵪鹌鵬鹏鵮鹐鵯鹎鵰雕鵲鹊鵷鹓鵾鹍鶄䴖鶇鸫鶉鹑鶊鹒鶓鹋鶖鹙鶘鹕鶚鹗鶡鹖鶥鹛鶩鹜鶪䴗鶬鸧鶯莺鶲鹟鶴鹤鶹鹠鶺鹡鶻鹘鶼鹣鶿鹚鷀鹚鷁鹢鷂鹞鷄鸡鷉䴘鷊鹝鷓鹧鷖鹥鷗鸥鷙鸷鷚鹨鷥鸶鷦鹪鷫鹔鷯鹩鷲鹫鷳鹇鷴鹇鷸鹬鷹鹰鷺鹭鷽鸴鸂㶉鸇鹯鸊䴙鸌鹱鸏鹲鸕鸬鸘鹴鸚鹦鸛鹳鸝鹂鸞鸾鹵卤鹹咸鹺鹾鹼碱鹽盐麗丽麥麦麩麸麪面麫面麯曲麴曲麵面麼么麽么黃黄黌黉點点黨党黲黪黴霉黶黡黷黩黽黾黿鼋鼂鼌鼉鼍鼕冬鼴鼹齊齐齋斋齎赍齏齑齒齿齔龀齕龁齗龂齙龅齜龇齟龃齠龆齡龄齣出齦龈齧啮齪龊齬龉齲龋齶腭齷龌龍龙龎厐龐庞龑䶮龔龚龕龛龜龟鿁䜤鿓鿒",RexHomeT2SMap=null;
function rexHomeT2S(v){
 if(typeof v!=='string'||!v)return v;
 if(!RexHomeT2SMap){RexHomeT2SMap={};for(var i=0;i<RexHomeT2SPairs.length;i+=2)RexHomeT2SMap[RexHomeT2SPairs[i]]=RexHomeT2SPairs[i+1];}
 var out='';for(var j=0;j<v.length;j++){var c=v[j];out+=RexHomeT2SMap[c]||c;}return out;
}

// ===== Shared list helpers: one dedup helper for every module =====
// rexHomeUnique(items,[keyFn...]): drops falsy items and any item whose key (per keyFn) was already seen.
// A keyFn returning '' skips that check for the item.
function rexHomeUnique(items,keyFns){
 var seen=keyFns.map(function(){return new Set();});
 return (items||[]).filter(function(x){
  if(!x)return false;var keys=keyFns.map(function(f){return f(x);});
  for(var i=0;i<keys.length;i++)if(keys[i]!==''&&seen[i].has(keys[i]))return false;
  keys.forEach(function(k,i){if(k!=='')seen[i].add(k);});return true;
 });
}
function rexHomeKeyId(x){return x.id;}
function rexHomeKeyPoster(x){return x.posterPath;}
function rexHomeKeyNativePoster(x){return rexHomeNativeImage(x.posterPath);}
function rexHomeKeyFranchise(x){return rexHomeFranchiseKey(x.title);}
// Franchise key: one entry per series title (e.g. several 冰川时代 films); the first (most popular) wins.
function rexHomeFranchiseKey(title){
 return String(title||'').toLowerCase().replace(/[：:·\-—–].*$/,'').replace(/[\s\d第部集季\(\)（）!！?？.,，、'"“”]/g,'').replace(/[ⅰ-ⅻ]+$/,'');
}

// ===== Shared poster helper: mainland-China (zh-CN) posters for every module =====
// TMDB poster_path with language=zh-CN falls back to zh-TW/zh-HK when no CN poster is tagged, so pick from /images:
// zh-CN > zh (no region) > zh-SG; if none and the current poster is zh-TW/zh-HK, use a textless poster.
// posterPath is written as a raw TMDB path (/abc.jpg), as the Forward docs specify for type 'tmdb'.
function rexHomePickCnPoster(posters){
 if(!Array.isArray(posters))return '';
 function best(f){var list=posters.filter(f).sort(function(a,b){return (b.vote_average||0)-(a.vote_average||0)||(b.vote_count||0)-(a.vote_count||0);});return list.length?list[0].file_path:'';}
 return best(function(p){return p.iso_639_1==='zh'&&p.iso_3166_1==='CN';})||
  best(function(p){return p.iso_639_1==='zh'&&!p.iso_3166_1;})||
  best(function(p){return p.iso_639_1==='zh'&&p.iso_3166_1==='SG';})||'';
}
// Poster: zh-CN (with text) > zh > zh-SG > best-rated no-text poster (2:3, >=500px wide); never zh-TW/zh-HK.
// Backdrop: best-rated no-text backdrop (>=1280px) for the landscape slot, else keep the list backdrop.
function rexHomeBestImage(list,f){
 var l=(list||[]).filter(f).sort(function(a,b){return (b.vote_average||0)-(a.vote_average||0)||(b.vote_count||0)-(a.vote_count||0)||(b.width||0)-(a.width||0);});
 return l.length?l[0].file_path:'';
}
async function rexHomeCnPosterPath(media,id){
 return rexHomeCached('cnposter.v61:'+media+':'+id,604800000,async function(){
  var data;try{data=await Widget.tmdb.get('/'+media+'/'+id+'/images',{params:{include_image_language:'zh,null'}});}catch(_){return {cn:'',textless:'',backdrop:''};}
  var posters=(data&&data.posters)||[],backs=(data&&data.backdrops)||[];
  return {cn:rexHomePickCnPoster(posters)||'',
   textless:rexHomeBestImage(posters,function(p){return !p.iso_639_1&&Math.abs(Number(p.aspect_ratio||0)-0.667)<0.02&&Number(p.width||0)>=500;}),
   backdrop:rexHomeBestImage(backs,function(p){return !p.iso_639_1&&Number(p.width||0)>=1280;})};
 });
}
async function rexHomeCnPosters(items){
 if(!Array.isArray(items))return items;
 await rexHomeMapLimited(items,async function(item){
  var id=String(item&&item.id||'').replace(/^(movie|tv)\./,'');
  if(!item||!rexHomeValidId(id)||(item.mediaType!=='movie'&&item.mediaType!=='tv'))return;
  try{var info=await rexHomeCnPosterPath(item.mediaType,Number(id));
   if(info.cn)item.posterPath=info.cn;else if(info.textless)item.posterPath=info.textless;
   if(info.backdrop)item.backdropPath=info.backdrop;}catch(_){}
 },6);
 return items.map(rexHomeFinishItem);
}
// Forward item rules (README "返回数据格式" + official demo.js): tmdb items use numeric id + mediaType and raw TMDB image paths (/abc.jpg);
// other types need full image URLs.
function rexHomeRawTmdbPath(value){
 var path=rexHomeImage(value,false);if(!path)return '';if(path.startsWith('/'))return path;
 var m=path.match(/^https:\/\/image\.tmdb\.org\/t\/p\/(?:original|w[0-9]+)(\/[^?#\/]+)$/);return m?m[1]:path;
}
function rexHomeFinishItem(item){
 if(!item||typeof item!=='object')return item;
 ['title','description','genreTitle'].forEach(function(k){if(typeof item[k]==='string')item[k]=rexHomeT2S(item[k]);});
 if(item.type==='tmdb'&&(item.mediaType==='movie'||item.mediaType==='tv')){
  if(rexHomeValidId(item.id))item.id=Number(item.id);
  ['posterPath','backdropPath'].forEach(function(k){if(item[k]){var v=rexHomeRawTmdbPath(item[k]);if(v)item[k]=v;else delete item[k];}});
 } else {
  ['posterPath','backdropPath','coverUrl'].forEach(function(k){if(item[k]){var v=rexHomeNativeImage(item[k]);if(/^https:\/\//.test(v))item[k]=v;else delete item[k];}});
 }
 return item;
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
  if (rule.domestic && countries.indexOf('CN')<0) return false;
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
    if(!exact)throw new Error('未找到准确的标签：'+name+'；请使用关键词ID或更准确名称');
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
  "max": {
    "title": "HBO/Max",
    "network": 3186,
    "aliases": [
      "HBO",
      "HBO Max",
      "Max"
    ],
    "networks": [
      {
        "id": 49,
        "aliases": [
          "HBO"
        ]
      },
      {
        "id": 3186,
        "aliases": [
          "HBO Max",
          "Max"
        ]
      }
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
  var key=String(params.platform || '');if(key==='hbo')key='max';
  if (!key) return;
  if (!Object.prototype.hasOwnProperty.call(RexHomePlatforms,key)) throw new Error('请选择有效的平台');
  var platform=RexHomePlatforms[key];
  if (rule.media==='tv') {
    if(platform.networks){
     var ids=await Promise.all(platform.networks.map(async function(entry){var n=await rexHomeApi('/network/'+entry.id,{},86400000);if(!n||Number(n.id)!==entry.id||!rexHomePlatformMatch(entry,n.name))throw new Error('平台信息不一致，请刷新后重试');return entry.id;}));q.with_networks=ids.join('|');return;
    }
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
    if (ids.length!==1&&key!=='max') throw new Error('平台名称对应多个片库，暂未执行筛选，请切换平台');
    q.watch_region=region;q.with_watch_providers=key==='max'?ids.join('|'):String(ids[0]);
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
  if (rule.domestic) q.with_origin_country='CN'; // 国产 = 中国大陆
  else if (rule.foreign) {
    if (region && RexHomeForeignCountries.indexOf(region)<0) throw new Error('国外综艺只能选择列出的海外国家');
    q.with_origin_country=region || RexHomeForeignCountries.join('|');
  } else if (region==='all') {
    // no origin-country filter
  } else if (region==='!CN') {
    q.with_origin_country=RexHomeCountries.map(function(x){return x[1];}).filter(function(c){return c!=='CN';}).join('|');
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
    if (!response || !Array.isArray(response.results)) throw new Error('片单格式异常');
    combined=combined.concat(response.results);
  });
  return combined;
}
async function rexHomeLoad(rule,params) {
  params=params || {};
  if (!rule || !rule.media) throw new Error('未知分类');
  var query=await rexHomeQuery(rule,params);
  if(params.region==='CN'&&rule.genres&&rule.genres.indexOf(16)>=0)query.params['vote_count.gte']=Number(params.rating||0)>0?1:0;
  var combined=await rexHomeFetchPages('/discover/'+rule.media,query.params,params.pageSize);
  if(params.region==='CN'&&rule.genres&&rule.genres.indexOf(16)>=0){
   var candidates=rexHomeFilterRaw(rule,params,combined),failures=0;
   combined=(await rexHomeMapLimited(candidates,async function(item){
    var countries=rexHomeGuomanCountries(item);
    if(!countries.length){try{var detail=await rexHomeApi('/'+rule.media+'/'+item.id,{language:'zh-CN'},86400000);if(Number(detail.id)!==Number(item.id))return null;countries=rexHomeGuomanCountries(detail);}catch(_){failures++;return null;}}
    return countries.indexOf('CN')>=0?item:null;
   },8)).filter(Boolean);
   if(!combined.length&&failures)throw new Error('国漫出品地区核对失败，请稍后重试；未替换为其他地区作品');
  }
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
function rexHomeSelect(parentId, params, guoman) {
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
  if(parentId==='animeHome'&&rule.media==='movie'&&params.movieSort!=null&&params.movieSort!==''){
    if(['recent','score','popular'].indexOf(String(params.movieSort))<0)throw new Error('请选择有效的动画电影排序');
    clean.sort=String(params.movieSort);
  }
  if (rule.media==='movie') {
    clean.dateMode='premiere';
    if (clean.sort==='updated') clean.sort='recent';
  }
  // Row ownership: 动漫 (animeHome) = non-mainland animation; 国漫 and every other row = forced mainland (強制國產).
  // Region: 国漫 = 中国大陆; 动漫 = 中国大陆以外 (or one chosen non-mainland region); other rows default to 中国大陆, 'all' = no filter.
  var askedRegion=String(params.region||'');
  if(parentId==='animeHome')clean.region=guoman?'CN':(askedRegion&&askedRegion!=='CN'&&askedRegion!=='all'?askedRegion:'!CN');
  else if(rule.foreign)clean.region=RexHomeDomesticCountries.indexOf(askedRegion)>=0?'':askedRegion;
  else clean.region=askedRegion||'CN';
  return {rule:rule,params:clean};
}
async function rexHomeMain(parentId, params, guoman) {
  var route=rexHomeSelect(parentId,params || {},guoman);
  return rexHomeKeepList('v61:'+parentId+':'+route.rule.id+':'+rexHomeStable(route.params),route.params,function(){return rexHomeLoad(route.rule,route.params);});
}
async function rexHomeLoadMovie(params){
 params=params||{};if(!params.region)params.region='CN';return rexHomeMain('movieHome',params);}
async function rexHomeLoadSeries(params){
 params=params||{};if(params.douban)return rexHomeDoubanSeries(params);
 if(!params.region)params.region='CN';return rexHomeMain('seriesHome',params);}

// ===== 豆瓣国产剧 (only used by 剧集 → 豆瓣国产剧). Douban supplies the list; each entry is matched to the film library by
// title + first-air year (or season air year) + mainland origin, and dropped when not uniquely matched.
// Douban images are hotlink-protected (HTTP 418/403), so posters always come from the matched library entry.
var RexHomeDoubanSeries={
 hot:{label:'近期热门国产剧',path:'subject_collection/tv_domestic/items'},
 weekly:{label:'华语口碑剧集榜',path:'subject_collection/tv_chinese_best_weekly/items'},
 top:{label:'高分国产剧',rec:'国产剧',sort:'S'},
 tencent:{label:'腾讯视频热播',rec:'腾讯视频',sort:'U'},iqiyi:{label:'爱奇艺热播',rec:'爱奇艺',sort:'U'},
 youku:{label:'优酷热播',rec:'优酷',sort:'U'},mango:{label:'芒果TV热播',rec:'芒果TV',sort:'U'}
};
async function rexHomeDoubanGet(url){
 var r=await Widget.http.get(url,{headers:{'Referer':'https://m.douban.com/','User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148'}});
 var d=r&&r.data;if(typeof d==='string'){try{d=JSON.parse(d);}catch(_){d=null;}}
 if(!d||typeof d!=='object')throw new Error('豆瓣榜单加载失败，请稍后重试');return d;
}
function rexHomeDoubanName(v){return String(v||'').trim().toLowerCase().replace(/[\s·:：,，!！?？'"“”‧・]/g,'');}
async function rexHomeDoubanMatch(row){
 var raw=String(row.title||'').trim(),year=String(row.year||'').slice(0,4);if(!raw)return null;
 return rexHomeCached('douban.match.v61b:'+row.id,604800000,async function(){
  var m=raw.match(/^(.*?)\s*第([一二三四五六七八九十\d]+)季$/),base=m?m[1]:raw,season=1;
  if(m){var n=m[2],map={一:1,二:2,三:3,四:4,五:5,六:6,七:7,八:8,九:9,十:10};season=/^\d+$/.test(n)?Number(n):(n.length===2&&n[0]==='十'?10+map[n[1]]:(n.length===2&&n[1]==='十'?map[n[0]]*10:map[n]||0));}
  var res=await rexHomeApi('/search/tv',{query:base,language:'zh-CN',include_adult:false,page:1},86400000);
  var want=rexHomeDoubanName(rexHomeT2S(base));
  var cands=(res.results||[]).filter(function(x){return x&&rexHomeValidId(x.id)&&rexHomeImage(x.poster_path)&&
   [x.name,x.original_name].some(function(n){return rexHomeDoubanName(rexHomeT2S(n))===want;})&&
   (!Array.isArray(x.origin_country)||!x.origin_country.length||x.origin_country.indexOf('CN')>=0)&&
   !(x.genre_ids||[]).some(function(g){return [16,99,10764,10767].indexOf(g)>=0;});});
  var ok=[];
  for(var i=0;i<cands.length&&i<4;i++){var x=cands[i];
   if(season<=1){if(!year||String(x.first_air_date||'').slice(0,4)===year)ok.push(x);continue;}
   try{var d=await rexHomeApi('/tv/'+x.id,{language:'zh-CN'},86400000);var se=(d.seasons||[]).filter(function(z){return Number(z.season_number)===season;})[0];
    if(se&&(!year||String(se.air_date||'').slice(0,4)===year))ok.push(x);}catch(_){}}
  if(ok.length!==1)return {none:true};
  return {id:ok[0].id,x:ok[0],season:season};
 });
}
async function rexHomeDoubanSeries(params){
 var key=String(params.douban),src=RexHomeDoubanSeries[key];if(!src)throw new Error('请选择有效的豆瓣国产剧榜单');
 var page=Number(params.page==null||params.page===''?1:params.page);if(!Number.isInteger(page)||page<1)throw new Error('页码必须为正整数');
 var size=Number(params.pageSize)||40;if([20,40,60].indexOf(size)<0)size=40;
 return rexHomeKeepList('douban.series.v61:'+key+':'+size,params,async function(){
  var rows=await rexHomeCached('douban.list.v61:'+key+':'+page+':'+size,3600000,async function(){
   var url;if(src.path)url='https://m.douban.com/rexxar/api/v2/'+src.path+'?start='+((page-1)*size)+'&count='+size;
   else url='https://m.douban.com/rexxar/api/v2/tv/recommend?refresh=0&start='+((page-1)*size)+'&count='+size+'&selected_categories='+encodeURIComponent(JSON.stringify({'形式':'电视剧','地区':'中国大陆'}))+'&tags='+encodeURIComponent(src.rec)+'&sort='+src.sort;
   var d=await rexHomeDoubanGet(url);
   return (d.subject_collection_items||d.items||[]).filter(function(x){return x&&x.type==='tv'&&x.id&&x.title;}).map(function(x){return {id:String(x.id),title:x.title,year:x.year,rating:x.rating&&x.rating.value};});
  });
  if(page>1&&!rows.length)return [];
  var matched=await rexHomeMapLimited(rows,async function(row){try{return {row:row,m:await rexHomeDoubanMatch(row)};}catch(_){return null;}},4);
  var items=matched.filter(function(r){return r&&r.m&&!r.m.none;}).map(function(r,i){var x=r.m.x;
   var label='豆瓣 · '+src.label+(r.row.rating?' · 豆瓣'+r.row.rating+'分':'');
   var out={id:Number(x.id),type:'tmdb',mediaType:'tv',title:rexHomeTitle(x,'tv')||r.row.title,posterPath:x.poster_path,backdropPath:x.backdrop_path||undefined,
    releaseDate:rexHomeDate(x.first_air_date)||undefined,genreTitle:label,description:label+'\n豆瓣片名：'+r.row.title+'\n'+(x.overview||'')};
   if(Number(x.vote_count)>0&&Number.isFinite(Number(x.vote_average)))out.rating=Number(x.vote_average);return out;});
  items=rexHomeUnique(items,[rexHomeKeyId]);
  if(!items.length&&page===1)throw new Error('豆瓣榜单暂未匹配到作品，请稍后重试');
  return items;
 });
}
async function rexHomeLoadVariety(params){
 params=params||{};if(!params.region)params.region='CN';return rexHomeMain('varietyHome',params);}
async function rexHomeLoadGuoman(params){
 params=params||{};
 params.region='CN';
 return rexHomeMain('animeHome',params,true);
}
async function rexHomeLoadAnime(params){
 params=params||{};if(!params.region)params.region='CN';return rexHomeMain('animeHome',params);}

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
 // Netflix gives English titles; non-English films only match TMDB's en-US title, so search zh-CN and en-US
 // with the chart year and match against every returned name of the same TMDB id.
 var yearKey=source.media==='movie'?'year':'first_air_date_year';
 async function search(lang,withYear){var q={query:title,language:lang,include_adult:false,page:1};if(withYear)q[yearKey]=year;return rexHomeApi('/search/'+source.media,q,86400000);}
 var zh=await search('zh-CN',false);
 if(Number(zh.total_pages)>1)zh=await search('zh-CN',true);
 // Incomplete first-page searches cannot establish uniqueness.
 if(Number(zh.total_pages)>1)return null;
 var en=await search('en-US',Number((zh.results||[]).length)===0||!seasonLookupFor());
 function seasonLookupFor(){return source.media==='tv'&&parent&&parent.title&&!parent.releaseYear;}
 var enNames={};(Number(en.total_pages)>1?[]:(en.results||[])).forEach(function(x){if(x&&x.id)enNames[x.id]=[x.title,x.name];});
 var byId=new Map();(zh.results||[]).forEach(function(x){if(x&&x.id)byId.set(x.id,x);});
 (Number(en.total_pages)>1?[]:(en.results||[])).forEach(function(x){if(x&&x.id&&!byId.has(x.id))byId.set(x.id,x);});
 var result={results:Array.from(byId.values())};
 var expected=rexHomeNetflixTitle(title);
 var season=Number(video.number),seasonLookup=source.media==='tv'&&parent&&parent.title&&!parent.releaseYear&&Number.isInteger(season)&&season>0;
 var candidates=(result.results||[]).filter(function(x){
  if(!x||!rexHomeValidId(x.id)||x.adult===true)return false;
  var names=(source.media==='movie'?[x.title,x.original_title]:[x.name,x.original_name]).concat(enNames[x.id]||[]);
  return names.some(function(n){return rexHomeNetflixTitle(n)===expected;})&&Array.isArray(x.genre_ids)&&x.genre_ids.indexOf(99)<0&&rexHomeImage(x.poster_path);
 });
 var checked=await rexHomeMapLimited(candidates,async function(x){
  var date=rexHomeDate(source.media==='movie'?x.release_date:x.first_air_date);
  if(!date||date>rexHomeToday())return null;
  if(date.slice(0,4)===String(year))return x;
  if(!seasonLookup)return null;
  try{
   var detail=await rexHomeApi('/tv/'+x.id,{language:'zh-CN'},86400000);
   if(Number(detail.id)!==Number(x.id)||![detail.name,detail.original_name].concat(enNames[x.id]||[]).some(function(n){return rexHomeNetflixTitle(n)===expected;}))return null;
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
async function rexHomeNetflixOfficialWeekly(params){
 params=params||{};var feed=rexHomeNetflixFeed(params);
 if(!Object.prototype.hasOwnProperty.call(RexHomeNetflixFeeds,feed))throw new Error('请选择有效的Netflix榜单');
 var page=Number(params.page==null||params.page===''?1:params.page);
 if(!Number.isInteger(page)||page<1)throw new Error('页码必须为正整数');
 if(page>1)return [];
 var source=RexHomeNetflixFeeds[feed],view=rexHomeView(params);
 var items=await rexHomeKeepList('netflix:v60:'+feed+':'+view,params,function(){return rexHomeCached('netflix.weekly.v60.'+feed+':'+view,43200000,async function(){
  var response;
  try{response=await Widget.http.get('https://www.netflix.com/tudum/top10/'+source.path,{headers:{'User-Agent':'Mozilla/5.0'}});}
  catch(_){throw new Error('Netflix周榜加载失败，请检查网络后刷新');}
  var rows=rexHomeNetflixParse(response&&response.data,source.category);
  if(!rows.length)throw new Error('Netflix暂未返回该周榜单');
  var failures=0;
  var match=async function(row){try{return await rexHomeNetflixMatch(row,source);}catch(_){failures++;return null;}};
  var items=await rexHomeMapLimited(rows,match);
  items=rexHomeUnique(items,[rexHomeKeyId,rexHomeKeyNativePoster]);items=rexHomeUnique(items,[rexHomeKeyFranchise]);
  if(!items.length&&failures)throw new Error('Netflix周榜影片身份核对失败，请检查网络后刷新；未替换成其他影片');
  if(!items.length)throw new Error('本周影片未找到唯一的同名同年匹配，未替换成其他影片');
  return items;
 });});
 return view==='home'?rexHomeNetflixPreview(items,source.media):items;
}

function rexHomePreviewCount(id){return id==='bangumiPicks'?12:6;}
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
 if(bgmSaved&&Array.isArray(bgmSaved.data))above=above.concat(bgmSaved.data.slice(0,rexHomePreviewCount('bangumiPicks')));
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
 await rexHomeCached(key,900000,function(){return shown.slice(0,rexHomePreviewCount('bangumiPicks'));});
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
async function rexHomeLoadTmdbPicks(params) {
  params=params || {};
  var feed=String(params.feed || 'weekMovies');
  if (!Object.prototype.hasOwnProperty.call(RexHomeTmdbPicks,feed)) throw new Error('请选择有效的片单');
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
 universal:{tmdbId:33,title:'环球影业',query:'Universal Pictures',names:['Universal Pictures']},
 paramount:{title:'派拉蒙',query:'Paramount Pictures',names:['Paramount Pictures']},
 columbia:{title:'哥伦比亚',query:'Columbia Pictures',names:['Columbia Pictures']},
 disney:{title:'迪士尼',query:'Walt Disney Pictures',names:['Walt Disney Pictures']},
 century:{title:'二十世纪影业',query:'20th Century Studios',names:['20th Century Studios','20th Century Fox']},
 chinaFilm:{domestic:true,title:'中国电影集团',query:'China Film Group Corporation',names:['China Film Group Corporation']},
 enlight:{domestic:true,title:'光线影业',query:'Beijing Enlight Pictures',names:['Beijing Enlight Pictures']}
};
function rexHomeCompanyName(value){return String(value||'').trim().toLowerCase().replace(/\s+/g,' ');}
async function rexHomeResolveStudio(key){
 if(!Object.prototype.hasOwnProperty.call(RexHomeStudios,key))throw new Error('请选择有效的电影出品公司');
 return rexHomeCached('studio.identity.v59.'+key,86400000,async function(){
  var studio=RexHomeStudios[key],names=studio.names.map(rexHomeCompanyName);
  if(studio.tmdbId)return studio.tmdbId; // search for this name has many pages; use the known TMDB company id
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
async function rexHomeLoadStudio(params){
 params=params||{};var key=String(params.company||'warner');
 if(!params.region&&RexHomeStudios[key]&&RexHomeStudios[key].domestic)params.region='CN';
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
async function rexHomeLoadDocumentary(params){
 params=params||{};var scope=String(params.scope||'domestic'),format=String(params.format||'movie');
 if(['domestic','foreign'].indexOf(scope)<0||['movie','tv'].indexOf(format)<0)throw new Error('请选择有效的纪录片地区与内容形式');
 var regionKey=scope==='domestic'?'regionDomestic':'regionForeign';
 var region=String(params[regionKey]!=null?params[regionKey]:(params.region||'')),countries=scope==='domestic'?RexHomeDomesticCountries:RexHomeForeignCountries;
 // 国内 = 中国大陆 by default; 港澳台 only when chosen explicitly.
 if(scope==='domestic'&&(!region||region==='CN'))region='CN';else if(region==='all')region='';
 if(region&&countries.indexOf(region)<0)throw new Error('具体地区与国内／国外分类不一致，请重新选择');
 var clean=rexHomeExtraParams(params);delete clean.region;
 var selected=region?[region]:countries;
 return rexHomeKeepList('docs.v61:'+scope+':'+format+':'+selected.join('|')+':'+rexHomeStable(clean),clean,async function(){
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
 var page=Number(params.page==null||params.page===''?1:params.page),size=Number(params.bgmPageSize||40),rating=Number(params.bgmRating||0);
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
    {headers:{'User-Agent':'rex-home/2026.10.19.44 (https://github.com/kenxtbecdi7690/rex-home)','Content-Type':'application/json','Accept':'application/json'}});}
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
    description:label+'\n'+(query.media==='movie'?'上映：':'首播：')+rexHomeDisplayDate(date)+'\nBangumi条目日期：'+rexHomeDisplayDate(row.date)+'\n榜单与BGM分数来自Bangumi，详情资源关联使用已核对的片库ID。\nhttps://bgm.tv/subject/'+row.id+'\n'+(item.overview||row.summary||'')};
   // Native TMDB detail ratings remain TMDB ratings; Bangumi score is separately labelled above.
   var tmdbScore=Number(item.vote_average);if(Number(item.vote_count)>0&&Number.isFinite(tmdbScore)&&tmdbScore>=0&&tmdbScore<=10)out.rating=tmdbScore;
   return out;
  });
  var result=rexHomeUnique(items,[rexHomeKeyId,rexHomeKeyPoster]);
  if(!result.length&&failures)throw new Error('Bangumi影片身份核对失败，请检查网络后刷新；未用其他影片替换');
  if(!result.length&&query.page===1)throw new Error('Bangumi当前筛选未找到可唯一核对的同名同年动画；未用其他影片替换');
  return result;
 });
}

async function rexHomeLoadBangumiPicks(params){
 params=params||{};if(!params.region)params.region='CN';
 params=params||{};var sort=String(params.bgmSort||'heat');
 if(['heat','rank'].indexOf(sort)<0)throw new Error('请选择有效的Bangumi榜单');
 var view=rexHomeView(params),items=await rexHomeLoadBangumi(params,sort==='rank'?'bangumiRank':'bangumiHeat');
 if(view!=='home'||Number(params.page||1)!==1)return items;
 return rexHomeBangumiPreview(items,params,params.category==='animeMovies'?'movie':'tv');
}

function rexHomeGuomanCountries(item){
 if(Array.isArray(item.origin_country)&&item.origin_country.length)return item.origin_country;
 if(Array.isArray(item.production_countries))return item.production_countries.map(function(x){return x&&x.iso_3166_1;}).filter(Boolean);
 return [];
}

// One parent entry with seven platform children. Sources retain their own cadence.
// One platform table: non-Netflix platforms served from TMDB watch providers (US); others fall back to FlixPatrol charts below.
var RexHomePlatformTmdb={
 disney:{name:'Disney+',provider:'337'},apple:{name:'Apple TV+',provider:'350'},prime:{name:'Prime Video',provider:'9'},
 hbo:{name:'HBO/Max',provider:'1899'},max:{name:'HBO/Max',provider:'1899'},hulu:{name:'Hulu',provider:'15'},paramount:{name:'Paramount+',provider:'531'}
};
var RexHomePlatformCharts={
 disney:{slug:'disney',title:'Disney+',sourceName:'Disney+'},
 apple:{slug:'apple-tv',title:'Apple TV+',sourceName:'Apple TV'},
 prime:{slug:'amazon-prime',title:'Prime Video',sourceName:'Amazon Prime'},
 max:{slug:'hbo-max',title:'HBO/Max',sourceName:'HBO Max'},
 hulu:{slug:'hulu',title:'Hulu',sourceName:'Hulu',market:'united-states',marketName:'the United States',mixed:true},
 paramount:{slug:'paramount-plus',title:'Paramount+',sourceName:'Paramount+'}
};
var rexHomeChartLimitedUntil=0;
async function rexHomeChartGet(url){
 if(rexHomeChartLimitedUntil>Date.now())throw new Error('榜单来源暂时限流，请稍后重试；未改用其他片库');
 try{
  var response=await Widget.http.get(url,{headers:{'User-Agent':'Mozilla/5.0'}});
  var status=Number(response&&(response.statusCode||response.status));
  if(status===429||status===403){rexHomeChartLimitedUntil=Date.now()+1800000;throw new Error('榜单来源暂时限流或拒绝访问（HTTP '+status+'）');}
  if(status>=400)throw new Error('榜单来源返回HTTP '+status);
  return response;
 }catch(error){
  if(/429|403/.test(String(error&&error.message||error)))rexHomeChartLimitedUntil=Date.now()+1800000;
  throw error;
 }
}
async function rexHomeChartMap(rows,task){
 var index=0,out=new Array(rows.length);
 async function worker(){while(index<rows.length){var i=index++;out[i]=await task(rows[i]);}}
 await Promise.all(Array.from({length:Math.min(4,rows.length)},worker));return out;
}
function rexHomeChartText(value){
 return String(value||'').replace(/<[^>]*>/g,' ').replace(/&(?:amp|quot|apos|lt|gt|#\d+|#x[0-9a-f]+);/gi,function(s){
  var map={'&amp;':'&','&quot;':'"','&apos;':"'",'&lt;':'<','&gt;':'>'};
  if(map[s])return map[s];var n=s.slice(2,-1);var code=n[0].toLowerCase()==='x'?parseInt(n.slice(1),16):Number(n);return code>0&&code<=1114111?String.fromCodePoint(code):'';
 }).replace(/\s+/g,' ').trim();
}
function rexHomePlatformChartParse(html,source,media){
 html=String(html||'');var heading=html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
 var title=rexHomeChartText(heading&&heading[1]);var prefix='TOP 10 on '+source.sourceName+' in '+(source.marketName||'the World')+' on ';
 if(title.indexOf(prefix)!==0)throw new Error('平台榜单页面结构或来源已变化');
 var stamp=Date.parse(title.slice(prefix.length)+' 12:00:00 GMT');
 if(!Number.isFinite(stamp))throw new Error('平台榜单缺少有效日期');
 var date=new Date(stamp).toISOString().slice(0,10);if(date>rexHomeToday())throw new Error('平台榜单日期异常');
 var suffix=media==='movie'?'movies':'tv-shows';
 var headingRe=new RegExp('<h2\\b[^>]*\\bid="toc-'+source.slug+(source.mixed?'':'-'+suffix)+'"[^>]*>[\\s\\S]*?<\\/h2>','i');
 var section=headingRe.exec(html);if(!section)throw new Error('该平台暂未提供此类别榜单');
 var tail=html.slice(section.index+section[0].length).split(/<h2\b/i)[0];
 var table=tail.match(/<table\b[^>]*>([\s\S]*?)<\/table>/i);if(!table)throw new Error('平台榜单表格已变化');
 var rows=[],seen=new Set(),ranks=new Set(),tr,regex=/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi;
 while((tr=regex.exec(table[1]))){
  var cell=tr[1].match(/<td\b[^>]*>([\s\S]*?)<\/td>/i),rankText=rexHomeChartText(cell&&cell[1]);
  if(!/^\d+\.$/.test(rankText))continue;var rank=Number(rankText.slice(0,-1));
  var link=tr[1].match(/<a\b[^>]*\bhref="(\/title\/[a-z0-9-]+\/)"[^>]*>([\s\S]*?)<\/a>/i);if(!link)continue;
  var image=link[2].match(/<img\b[^>]*\balt="([^"]+)"/i);var name=rexHomeChartText(image?image[1]:(source.mixed?link[2]:''));
  if(rank<1||rank>10||!name||seen.has(link[1])||ranks.has(rank))continue;
  rows.push({rank:rank,title:name,path:link[1],date:date});seen.add(link[1]);ranks.add(rank);
 }
 if(!rows.length)throw new Error('该平台暂未返回有效榜单，未用普通片库填充');
 return rows.sort(function(a,b){return a.rank-b.rank;});
}
function rexHomeChartIdentity(html,row,media){
 var regex=/<script\b[^>]*\btype=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,match,items=[];
 while((match=regex.exec(String(html||'')))){
  try{var value=JSON.parse(match[1]);items=items.concat(Array.isArray(value)?value:(value['@graph']||[value]));}catch(_){}
 }
 var type=media==='movie'?'Movie':'TVSeries';
 var found=items.filter(function(x){return x&&(media==='mixed'?['Movie','TVSeries'].indexOf(x['@type'])>=0:x['@type']===type)&&rexHomeNetflixTitle(x.name)===rexHomeNetflixTitle(row.title)&&rexHomeDate(x.dateCreated);});
 if(found.length!==1)throw new Error('榜单作品缺少唯一的名称、年份或类型依据');
 var date=rexHomeDate(found[0].dateCreated);if(date>rexHomeToday())return null;
 return {title:found[0].name,year:date.slice(0,4),media:found[0]['@type']==='Movie'?'movie':'tv'};
}
async function rexHomePlatformChartMatch(row,source,media){
 var identity=await rexHomeCached('chart.identity.v53:'+row.path+':'+media,604800000,async function(){
  var response=await rexHomeChartGet('https://flixpatrol.com'+row.path);
  if(Number(response&&(response.statusCode||response.status))>=400)throw new Error('榜单作品详情请求失败');
  return rexHomeChartIdentity(response&&response.data,row,media);
 });
 if(!identity)return null;media=identity.media;
 var result=await rexHomeApi('/search/'+media,{query:identity.title,language:'zh-CN',include_adult:false,page:1},86400000);
 if(Number(result.total_pages)>1)return null;
 var unique=new Map();(result.results||[]).forEach(function(x){
  if(!x||!rexHomeValidId(x.id)||x.adult===true||(x.media_type&&x.media_type!==media)||!rexHomeNativeImage(x.poster_path))return;
  var date=rexHomeDate(media==='movie'?x.release_date:x.first_air_date),names=media==='movie'?[x.title,x.original_title]:[x.name,x.original_name];
  if(!date||date>rexHomeToday()||date.slice(0,4)!==identity.year||!names.some(function(n){return rexHomeNetflixTitle(n)===rexHomeNetflixTitle(identity.title);}))return;
  unique.set(Number(x.id),x);
 });
 if(unique.size!==1)return null;var x=Array.from(unique.values())[0],date=media==='movie'?x.release_date:x.first_air_date;
 var label=source.title+' · '+(media==='movie'?'电影':'剧集')+' · 第'+row.rank+'名 · 榜单日期 '+row.date;
 var out={id:Number(x.id),type:'tmdb',mediaType:media,title:rexHomeTitle(x,media),posterPath:rexHomeNativeImage(x.poster_path),backdropPath:rexHomeNativeImage(x.backdrop_path)||undefined,releaseDate:date,genreTitle:label,
  description:label+'\n来源：FlixPatrol'+(source.mixed?'美国区综合':'全球')+'每日榜（非平台官方周榜）；评分来自片库。\n'+(media==='movie'?'上映：':'首播：')+rexHomeDisplayDate(date)+'\nhttps://flixpatrol.com/top10/'+source.slug+'/'+(source.market||'world')+'/\n'+(x.overview||'')};
 if(Number(x.vote_count)>0&&Number.isFinite(Number(x.vote_average))&&Number(x.vote_average)>=0&&Number(x.vote_average)<=10)out.rating=Number(x.vote_average);
 return out;
}

async function rexHomePlatformTmdb(params,platform,providerId){
 params=params||{};var media=params.chartType==='tv'?'tv':'movie';
 var label=((RexHomePlatformTmdb[platform]&&RexHomePlatformTmdb[platform].name)||platform)+' · '+(media==='movie'?'电影':'剧集')+' · 平台热门在播';
 return rexHomeKeepList('platform.tmdb.v2:'+platform+':'+media+':'+rexHomeView(params),params,async function(){
  var result=await rexHomeApi('/discover/'+media,{with_watch_providers:providerId,watch_region:'US',sort_by:'popularity.desc',language:'zh-CN',include_adult:false,page:1},43200000);
  var items=(result.results||[]).slice(0,20).map(function(x,i){
   if(!x||!rexHomeValidId(x.id)||!rexHomeNativeImage(x.poster_path))return null;
   var date=rexHomeDate(media==='movie'?x.release_date:x.first_air_date);
   var out={id:Number(x.id),type:'tmdb',mediaType:media,title:rexHomeTitle(x,media),posterPath:rexHomeNativeImage(x.poster_path),backdropPath:rexHomeNativeImage(x.backdrop_path)||undefined,releaseDate:date,genreTitle:label+' · 第'+(i+1)+'名',description:label+'\n来源：平台在播热门（按热度排序）。\n'+(x.overview||'')};
   if(Number(x.vote_count)>0&&Number.isFinite(Number(x.vote_average)))out.rating=Number(x.vote_average);
   return out;
  }).filter(Boolean);
  items=rexHomeUnique(items,[rexHomeKeyFranchise]);
  return items;
 });
}
async function rexHomeLoadPlatformWeekly(params){
 params=params||{};var platform=String(params.platform||'netflix');
 if(platform==='netflix')return rexHomeNetflixOfficialWeekly(params);
 if(!Object.prototype.hasOwnProperty.call(RexHomePlatformCharts,platform))throw new Error('请选择有效的平台');
 // 非 Netflix 平台：改用 TMDB with_watch_providers，保證海報可用
 if(RexHomePlatformTmdb[platform])return rexHomePlatformTmdb(params,platform,RexHomePlatformTmdb[platform].provider);
 var media=platform==='hulu'?'mixed':String(params.chartType||'movie');if((platform==='hulu'?['mixed']:['movie','tv']).indexOf(media)<0)throw new Error('请选择有效的榜单类别');
 var page=Number(params.page==null||params.page===''?1:params.page);if(!Number.isInteger(page)||page<1)throw new Error('页码必须为正整数');if(page>1)return [];
 var source=RexHomePlatformCharts[platform],view=rexHomeView(params);
 return rexHomeKeepList('platform.chart.v52:'+platform+':'+media+':'+view,params,async function(){
  var rows=await rexHomeCached('platform.chart.rows.v52:'+platform,43200000,async function(){
   var response=await rexHomeChartGet('https://flixpatrol.com/top10/'+source.slug+'/'+(source.market||'world')+'/');
   if(Number(response&&(response.statusCode||response.status))>=400)throw new Error('平台榜单加载失败，请稍后重试');
   // Parse each category on demand; store only the original page text.
   var html=String(response&&response.data||'');rexHomePlatformChartParse(html,source,media);return html;
  });
  rows=rexHomePlatformChartParse(rows,source,media);var failures=0;
  var items=await rexHomeChartMap(rows,async function(row){try{return await rexHomePlatformChartMatch(row,source,media);}catch(_){failures++;return null;}});
  items=rexHomeUnique(items,[rexHomeKeyId,rexHomeKeyPoster]);
  if(!items.length&&rexHomeChartLimitedUntil>Date.now())throw new Error('榜单来源暂时限流，请稍后重试；未改用其他片库');
  if(!items.length)throw new Error(failures?'平台榜单身份核对请求失败，请检查网络后重试；未替换为其他影片':'该榜单暂未找到唯一的同名同年作品，未替换为其他影片');
  if(view!=='home')return items;
  if(media!=='mixed')return rexHomeNetflixPreview(items,media);
  var above=(await rexHomePrimaryPreview('movie')).concat(await rexHomePrimaryPreview('tv'));
  var shown=rexHomeExcludeRows(items,above);if(!shown.length)throw new Error('榜单影片已在上方展示，请切换完整片单查看');return shown;
 });
}

// ===== 新首页 6 行：每行一个“分类”主参数，复用原有加载器 =====
function rexHomeRowBase(params,keys){var o={page:params.page||1,pageSize:String(params.pageSize||'20')};(keys||[]).forEach(function(k){if(params[k]!=null&&params[k]!=='')o[k]=params[k];});return o;}
async function rexHomeRowMovie(params){params=params||{};var sub=String(params.sub||'week'),o=rexHomeRowBase(params,['year','customYear']);
 var picks={week:'weekMovies',now:'nowMovies',top:'ratedMovies'};
 if(picks[sub])return rexHomeLoadTmdbPicks({feed:picks[sub],view:'all',page:o.page,pageSize:o.pageSize});
 if(sub==='studio')return rexHomeLoadStudio(Object.assign(o,{company:params.company||'warner',view:'all',region:'all',sort:'popular'}));
 var map={comedy:{genre:'35',region:'all'},mystery:{genre:'9648',region:'all'},family:{genre:'10751',region:'all'},cn:{region:'CN'},foreign:{region:'!CN'},short:{category:'shortMovies',region:'all'}};
 if(!map[sub])throw new Error('请选择有效的电影分类');
 return rexHomeLoadMovie(Object.assign({category:'movies',sort:'popular'},o,map[sub]));}
async function rexHomeRowSeries(params){params=params||{};var sub=String(params.sub||'cn'),o=rexHomeRowBase(params,['year','customYear']);
 if(sub==='cn')sub='db_hot';
 if(/^db_/.test(sub))return rexHomeLoadSeries({douban:sub.slice(3),page:o.page,pageSize:o.pageSize});
 if(sub==='koubei')return rexHomeLoadTmdbPicks({feed:'ratedSeries',view:'all',page:o.page,pageSize:o.pageSize});
 var map={onair:{region:'all',range:'30'},hk:{region:'HK'},tw:{region:'TW'},us:{region:'US'},gb:{region:'GB'},kr:{region:'KR'},jp:{region:'JP'},mystery:{region:'all',genre:'9648'}};
 if(!map[sub])throw new Error('请选择有效的剧集分类');
 return rexHomeLoadSeries(Object.assign(o,{sort:'popular',dateMode:'premiere',loadMode:'fast'},map[sub]));}
async function rexHomeRowVariety(params){params=params||{};var sub=String(params.sub||'cn');if(['cn','global'].indexOf(sub)<0)throw new Error('请选择有效的综艺分类');
 return rexHomeLoadVariety(Object.assign(rexHomeRowBase(params,['platform']),{category:sub==='cn'?'varietyCN':'varietyGlobal',region:sub==='cn'?'CN':'',sort:'popular',dateMode:'premiere',loadMode:'fast'}));}
async function rexHomeRowAnime(params){params=params||{};var sub=String(params.sub||'jp');
 var map={jp:['anime','animeSeries','JP'],cn_tv:['cn','animeSeries'],cn_movie:['cn','animeMovies'],anime_movie:['anime','animeMovies',''],anime_tv:['anime','animeSeries','']},r=map[sub];
 if(!r)throw new Error('请选择有效的动漫分类');
 var o=Object.assign(rexHomeRowBase(params),{category:r[1],sort:'popular',movieSort:'popular',dateMode:'premiere',loadMode:'fast'});
 if(r[0]==='cn')return rexHomeLoadGuoman(o);o.region=r[2];return rexHomeLoadAnime(o);}
async function rexHomeRowDocumentary(params){params=params||{};var sub=String(params.sub||'global_movie'),m=sub.match(/^(cn|global)_(movie|tv)$/);if(!m)throw new Error('请选择有效的纪录片分类');
 var o=Object.assign(rexHomeRowBase(params),{scope:m[1]==='cn'?'domestic':'foreign',format:m[2],sort:'popular'});
 if(m[1]==='cn')o.regionDomestic='CN';else o.regionForeign='';return rexHomeLoadDocumentary(o);}
var RexHomeRowCharts={nf_en_movie:{platform:'netflix',feed:'englishMovies'},nf_other_movie:{platform:'netflix',feed:'otherMovies'},nf_en_tv:{platform:'netflix',feed:'englishSeries'},nf_other_tv:{platform:'netflix',feed:'otherSeries'}};
['disney','apple','prime','max','hulu','paramount'].forEach(function(k){RexHomeRowCharts[k+'_movie']={platform:k,chartType:'movie'};RexHomeRowCharts[k+'_tv']={platform:k,chartType:'tv'};});
async function rexHomeRowCharts(params){params=params||{};var sub=String(params.sub||'nf_en_tv');
 if(sub==='bgm_heat'||sub==='bgm_rank')return rexHomeLoadBangumiPicks({bgmSort:sub==='bgm_heat'?'heat':'rank',category:'animeSeries',view:'all',bgmPageSize:'20',page:params.page||1});
 var r=RexHomeRowCharts[sub];if(!r)throw new Error('请选择有效的榜单');
 return rexHomeLoadPlatformWeekly(Object.assign({view:'all',page:params.page||1},r));}

// ===== Entry points (functionName in WidgetMetadata). Every module returns through rexHomeCnPosters. =====
async function loadMovieHome(params){return rexHomeCnPosters(await rexHomeLoadMovie(params));}
async function loadSeriesHome(params){return rexHomeCnPosters(await rexHomeLoadSeries(params));}
async function loadVarietyHome(params){return rexHomeCnPosters(await rexHomeLoadVariety(params));}
async function loadAnimeHome(params){return rexHomeCnPosters(await rexHomeLoadAnime(params));}
async function guomanHome(params){return rexHomeCnPosters(await rexHomeLoadGuoman(params));}
async function loadTmdbPicks(params){return rexHomeCnPosters(await rexHomeLoadTmdbPicks(params));}
async function loadNetflixWeekly(params){return rexHomeCnPosters(await rexHomeLoadPlatformWeekly(params));}
async function loadStudioHome(params){return rexHomeCnPosters(await rexHomeLoadStudio(params));}
async function loadDocumentaryHome(params){return rexHomeCnPosters(await rexHomeLoadDocumentary(params));}
async function loadBangumiPicks(params){return rexHomeCnPosters(await rexHomeLoadBangumiPicks(params));}
async function rowMovie(params){return rexHomeCnPosters(await rexHomeRowMovie(params));}
async function rowSeries(params){return rexHomeCnPosters(await rexHomeRowSeries(params));}
async function rowVariety(params){return rexHomeCnPosters(await rexHomeRowVariety(params));}
async function rowAnime(params){return rexHomeCnPosters(await rexHomeRowAnime(params));}
async function rowDocumentary(params){return rexHomeCnPosters(await rexHomeRowDocumentary(params));}
async function rowCharts(params){return rexHomeCnPosters(await rexHomeRowCharts(params));}
