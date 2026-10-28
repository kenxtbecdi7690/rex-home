// 爱奇艺片单 · 原作者 Minis，Bolinxxlin 改编号与默认值（只有片单）
var WidgetMetadata = {
  id: "iqiyi.video.catalog",
  title: "爱奇艺片单",
  version: "1.7.0",
  requiredVersion: "0.0.1",
  description: "爱奇艺片库：每个频道独立筛选（类型/地区/年份/排序/资费），可多级叠加，输出 TMDB 条目（含封面）",
  author: "Minis（Bolinxxlin 改编号与默认值）",
  modules: [
    {
      id: "iqTv",
      title: "电视剧",
      functionName: "loadIqTv",
      cacheDuration: 600,
      params: [
        { name: "sort", title: "排序", type: "enumeration", value: "{\"mode\": 4}", enumOptions: [ { title: "综合排序", value: "{\"mode\": 24}" }, { title: "热播榜", value: "{\"mode\": 11}" }, { title: "新上线", value: "{\"mode\": 4}" } ] },
        { name: "1800233", title: "地区", type: "enumeration", value: "", enumOptions: [ { title: "全部地区", value: "" }, { title: "内地", value: "cid:15" }, { title: "港剧", value: "cid:16" }, { title: "韩剧", value: "cid:17" }, { title: "美剧", value: "cid:18" }, { title: "日剧", value: "cid:309" }, { title: "泰剧", value: "cid:1114" }, { title: "台湾地区", value: "cid:1117" }, { title: "英剧", value: "cid:28916" }, { title: "其它", value: "cid:19" } ] },
        { name: "1800333", title: "类型", type: "enumeration", value: "", enumOptions: [ { title: "全部类型", value: "" }, { title: "自制", value: "cid:11992" }, { title: "古装", value: "cid:24" }, { title: "言情", value: "cid:20" }, { title: "武侠", value: "cid:23" }, { title: "偶像", value: "cid:30" }, { title: "家庭", value: "cid:1654" }, { title: "青春", value: "cid:1653" }, { title: "都市", value: "cid:24064" }, { title: "喜剧", value: "cid:135" }, { title: "战争", value: "cid:27916" }, { title: "军旅", value: "cid:1655" }, { title: "谍战", value: "cid:290" }, { title: "悬疑", value: "cid:32" }, { title: "罪案", value: "cid:149" }, { title: "穿越", value: "cid:148" }, { title: "宫廷", value: "cid:139" }, { title: "历史", value: "cid:21" }, { title: "神话", value: "cid:145" }, { title: "科幻", value: "cid:34" }, { title: "年代", value: "cid:27" }, { title: "农村", value: "cid:29" }, { title: "商战", value: "cid:140" }, { title: "剧情", value: "cid:24063" }, { title: "奇幻", value: "cid:27881" }, { title: "网剧", value: "cid:24065" }, { title: "竖短片", value: "cid:32839" } ] },
        { name: "year", title: "年份", type: "enumeration", value: "", enumOptions: [ { title: "全部年份", value: "" }, { title: "2026", value: "{\"market_release_date_level\": \"2026\"}" }, { title: "2025", value: "{\"market_release_date_level\": \"2025\"}" }, { title: "2024", value: "{\"market_release_date_level\": \"2024\"}" }, { title: "2023", value: "{\"market_release_date_level\": \"2023\"}" }, { title: "2022", value: "{\"market_release_date_level\": \"2022\"}" }, { title: "2021", value: "{\"market_release_date_level\": \"2021\"}" }, { title: "2020", value: "{\"market_release_date_level\": \"2020\"}" }, { title: "2019", value: "{\"market_release_date_level\": \"2019\"}" }, { title: "2018", value: "{\"market_release_date_level\": \"2018\"}" }, { title: "2017", value: "{\"market_release_date_level\": \"2017\"}" }, { title: "2016", value: "{\"market_release_date_level\": \"2016\"}" }, { title: "2015", value: "{\"market_release_date_level\": \"2015\"}" }, { title: "2011-2014", value: "{\"market_release_date_level\": \"2011-2014\"}" }, { title: "2000-2010", value: "{\"market_release_date_level\": \"2000-2010\"}" }, { title: "90年代", value: "{\"market_release_date_level\": \"1990-1999\"}" }, { title: "80年代", value: "{\"market_release_date_level\": \"1980-1989\"}" }, { title: "更早", value: "{\"market_release_date_level\": \"1949-1979\"}" } ] },
        { name: "purchase", title: "资费", type: "enumeration", value: "", enumOptions: [ { title: "全部资费", value: "" }, { title: "免费", value: "{\"is_purchase\": \"0\"}" }, { title: "付费", value: "{\"is_purchase\": \"1\"}" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "iqMovie",
      title: "电影",
      functionName: "loadIqMovie",
      cacheDuration: 600,
      params: [
        { name: "sort", title: "排序", type: "enumeration", value: "{\"mode\": 4}", enumOptions: [ { title: "综合排序", value: "{\"mode\": 24}" }, { title: "热播榜", value: "{\"mode\": 11}" }, { title: "好评榜", value: "{\"mode\": 8}" }, { title: "新上线", value: "{\"mode\": 4}" } ] },
        { name: "1800033", title: "地区", type: "enumeration", value: "", enumOptions: [ { title: "全部地区", value: "" }, { title: "华语", value: "cid:1" }, { title: "香港地区", value: "cid:28997" }, { title: "美国", value: "cid:2" }, { title: "欧洲", value: "cid:3" }, { title: "韩国", value: "cid:4" }, { title: "日本", value: "cid:308" }, { title: "泰国", value: "cid:1115" }, { title: "印度", value: "cid:28999" }, { title: "其它", value: "cid:5" } ] },
        { name: "1800133", title: "类型", type: "enumeration", value: "", enumOptions: [ { title: "全部类型", value: "" }, { title: "喜剧", value: "cid:8" }, { title: "爱情", value: "cid:6" }, { title: "动作", value: "cid:11" }, { title: "枪战", value: "cid:131" }, { title: "犯罪", value: "cid:291" }, { title: "惊悚", value: "cid:128" }, { title: "恐怖", value: "cid:10" }, { title: "悬疑", value: "cid:289" }, { title: "动画", value: "cid:12" }, { title: "家庭", value: "cid:27356" }, { title: "奇幻", value: "cid:1284" }, { title: "魔幻", value: "cid:129" }, { title: "科幻", value: "cid:9" }, { title: "战争", value: "cid:7" }, { title: "青春", value: "cid:130" } ] },
        { name: "2739633", title: "规格", type: "enumeration", value: "", enumOptions: [ { title: "全部规格", value: "" }, { title: "巨制", value: "cid:27397" }, { title: "院线", value: "cid:27815" }, { title: "独播", value: "cid:30149" }, { title: "网络电影", value: "cid:27401" } ] },
        { name: "year", title: "年份", type: "enumeration", value: "", enumOptions: [ { title: "全部年份", value: "" }, { title: "2026", value: "{\"market_release_date_level\": \"2026\"}" }, { title: "2025", value: "{\"market_release_date_level\": \"2025\"}" }, { title: "2024", value: "{\"market_release_date_level\": \"2024\"}" }, { title: "2023", value: "{\"market_release_date_level\": \"2023\"}" }, { title: "2022", value: "{\"market_release_date_level\": \"2022\"}" }, { title: "2021", value: "{\"market_release_date_level\": \"2021\"}" }, { title: "2020", value: "{\"market_release_date_level\": \"2020\"}" }, { title: "2019", value: "{\"market_release_date_level\": \"2019\"}" }, { title: "2018", value: "{\"market_release_date_level\": \"2018\"}" }, { title: "2017", value: "{\"market_release_date_level\": \"2017\"}" }, { title: "2016", value: "{\"market_release_date_level\": \"2016\"}" }, { title: "2015", value: "{\"market_release_date_level\": \"2015\"}" }, { title: "2011-2014", value: "{\"market_release_date_level\": \"2011-2014\"}" }, { title: "2000-2010", value: "{\"market_release_date_level\": \"2000-2010\"}" }, { title: "90年代", value: "{\"market_release_date_level\": \"1990-1999\"}" }, { title: "80年代", value: "{\"market_release_date_level\": \"1980-1989\"}" }, { title: "更早", value: "{\"market_release_date_level\": \"1949-1979\"}" } ] },
        { name: "purchase", title: "资费", type: "enumeration", value: "", enumOptions: [ { title: "全部资费", value: "" }, { title: "免费", value: "{\"is_purchase\": \"0\"}" }, { title: "付费", value: "{\"is_purchase\": \"1\"}" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "iqVariety",
      title: "综艺",
      functionName: "loadIqVariety",
      cacheDuration: 600,
      params: [
        { name: "sort", title: "排序", type: "enumeration", value: "{\"mode\": 4}", enumOptions: [ { title: "综合排序", value: "{\"mode\": 24}" }, { title: "热播榜", value: "{\"mode\": 11}" }, { title: "新上线", value: "{\"mode\": 4}" } ] },
        { name: "1801333", title: "地区", type: "enumeration", value: "", enumOptions: [ { title: "全部地区", value: "" }, { title: "内地", value: "cid:151" }, { title: "港台", value: "cid:152" }, { title: "韩国", value: "cid:33306" }, { title: "欧美", value: "cid:154" }, { title: "其它", value: "cid:1113" } ] },
        { name: "1801433", title: "类型", type: "enumeration", value: "", enumOptions: [ { title: "全部类型", value: "" }, { title: "播报", value: "cid:155" }, { title: "访谈", value: "cid:156" }, { title: "游戏", value: "cid:158" }, { title: "晚会", value: "cid:292" }, { title: "曲艺", value: "cid:293" }, { title: "脱口秀", value: "cid:2118" }, { title: "真人秀", value: "cid:2224" }, { title: "竞技", value: "cid:30278" }, { title: "爱奇艺出品", value: "cid:30279" }, { title: "竞演", value: "cid:33860" } ] },
        { name: "3316233", title: "题材", type: "enumeration", value: "", enumOptions: [ { title: "全部题材", value: "" }, { title: "音乐", value: "cid:33163" }, { title: "舞蹈", value: "cid:33172" }, { title: "文化", value: "cid:33173" }, { title: "美食", value: "cid:33182" }, { title: "伦理", value: "cid:33184" }, { title: "相亲", value: "cid:33193" }, { title: "纪实", value: "cid:33195" }, { title: "生活", value: "cid:33196" }, { title: "亲子", value: "cid:33197" }, { title: "少儿", value: "cid:33198" }, { title: "财经", value: "cid:33199" }, { title: "健康", value: "cid:33200" }, { title: "时尚", value: "cid:33203" }, { title: "旅游", value: "cid:33205" }, { title: "教育", value: "cid:33206" }, { title: "其它", value: "cid:33220" }, { title: "爱情", value: "cid:33316" }, { title: "搞笑", value: "cid:33317" }, { title: "益智", value: "cid:33318" }, { title: "职场", value: "cid:33319" }, { title: "语言", value: "cid:33530" }, { title: "辩论", value: "cid:33531" }, { title: "演讲", value: "cid:33843" } ] },
        { name: "purchase", title: "资费", type: "enumeration", value: "", enumOptions: [ { title: "全部资费", value: "" }, { title: "免费", value: "{\"is_purchase\": \"0\"}" }, { title: "付费", value: "{\"is_purchase\": \"1\"}" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "iqAnime",
      title: "动漫",
      functionName: "loadIqAnime",
      cacheDuration: 600,
      params: [
        { name: "sort", title: "排序", type: "enumeration", value: "{\"mode\": 4}", enumOptions: [ { title: "综合排序", value: "{\"mode\": 24}" }, { title: "热播榜", value: "{\"mode\": 11}" }, { title: "新上线", value: "{\"mode\": 4}" } ] },
        { name: "1800533", title: "地区", type: "enumeration", value: "", enumOptions: [ { title: "全部地区", value: "" }, { title: "中国大陆", value: "cid:37" }, { title: "日本", value: "cid:38" }, { title: "韩国", value: "cid:1106" }, { title: "欧美", value: "cid:30218" }, { title: "其它", value: "cid:40" } ] },
        { name: "3021933", title: "版本", type: "enumeration", value: "", enumOptions: [ { title: "全部版本", value: "" }, { title: "动画", value: "cid:30220" }, { title: "特摄", value: "cid:30223" }, { title: "布袋戏", value: "cid:30224" }, { title: "特别篇", value: "cid:32782" }, { title: "动态漫画", value: "cid:32783" }, { title: "动画电影", value: "cid:32784" }, { title: "竖版视频", value: "cid:32785" }, { title: "轻动画", value: "cid:33482" }, { title: "短剧", value: "cid:33483" } ] },
        { name: "3022533", title: "风格", type: "enumeration", value: "", enumOptions: [ { title: "全部风格", value: "" }, { title: "搞笑", value: "cid:30230" }, { title: "热血", value: "cid:30232" }, { title: "催泪", value: "cid:30233" }, { title: "治愈", value: "cid:30234" }, { title: "励志", value: "cid:30237" }, { title: "机战", value: "cid:30241" }, { title: "恋爱", value: "cid:30243" }, { title: "科幻", value: "cid:30245" }, { title: "奇幻", value: "cid:30247" }, { title: "推理", value: "cid:30248" }, { title: "校园", value: "cid:30249" }, { title: "日常", value: "cid:30252" }, { title: "历史", value: "cid:30254" }, { title: "美食", value: "cid:30255" }, { title: "职场", value: "cid:30256" }, { title: "偶像", value: "cid:30258" }, { title: "泡面", value: "cid:30265" }, { title: "冒险", value: "cid:30267" }, { title: "竞技", value: "cid:30268" }, { title: "合家欢", value: "cid:30270" }, { title: "武侠", value: "cid:32792" }, { title: "玄幻", value: "cid:32793" } ] },
        { name: "3279533", title: "新类型", type: "enumeration", value: "", enumOptions: [ { title: "全部新类型", value: "" }, { title: "轻小说改编", value: "cid:32796" }, { title: "漫画改编", value: "cid:32797" }, { title: "游戏改编", value: "cid:32798" }, { title: "原创", value: "cid:32799" } ] },
        { name: "purchase", title: "资费", type: "enumeration", value: "", enumOptions: [ { title: "全部资费", value: "" }, { title: "免费", value: "{\"is_purchase\": \"0\"}" }, { title: "付费", value: "{\"is_purchase\": \"1\"}" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "iqDoc",
      title: "纪录片",
      functionName: "loadIqDoc",
      cacheDuration: 600,
      params: [
        { name: "sort", title: "排序", type: "enumeration", value: "{\"mode\": 4}", enumOptions: [ { title: "综合排序", value: "{\"mode\": 24}" }, { title: "热播榜", value: "{\"mode\": 11}" }, { title: "新上线", value: "{\"mode\": 4}" } ] },
        { name: "1800433", title: "类型", type: "enumeration", value: "", enumOptions: [ { title: "全部类型", value: "" }, { title: "人文", value: "cid:70" }, { title: "美食", value: "cid:33908" }, { title: "医疗", value: "cid:33924" }, { title: "自然", value: "cid:33933" }, { title: "萌宠", value: "cid:33945" }, { title: "财经", value: "cid:33953" }, { title: "罪案", value: "cid:33960" }, { title: "竞技", value: "cid:33967" }, { title: "灾难", value: "cid:33974" }, { title: "军事", value: "cid:72" }, { title: "历史", value: "cid:74" }, { title: "探险", value: "cid:73" }, { title: "社会", value: "cid:71" }, { title: "科技", value: "cid:28119" }, { title: "旅游", value: "cid:310" } ] },
        { name: "2032233", title: "地区", type: "enumeration", value: "", enumOptions: [ { title: "全部地区", value: "" }, { title: "国内", value: "cid:20323" }, { title: "国外", value: "cid:20324" } ] },
        { name: "2846733", title: "出品方", type: "enumeration", value: "", enumOptions: [ { title: "全部出品方", value: "" }, { title: "BBC", value: "cid:28468" }, { title: "美国历史频道", value: "cid:28470" }, { title: "探索频道", value: "cid:28471" }, { title: "央视记录", value: "cid:28472" }, { title: "北京纪实频道", value: "cid:28473" }, { title: "上海纪实频道", value: "cid:28474" }, { title: "朗思文化", value: "cid:28476" }, { title: "CNEX", value: "cid:28477" }, { title: "五星传奇", value: "cid:28478" }, { title: "IMG", value: "cid:28479" }, { title: "NHK", value: "cid:28480" }, { title: "爱奇艺出品", value: "cid:31283" }, { title: "Netflix", value: "cid:31286" } ] },
        { name: "2907633", title: "片种", type: "enumeration", value: "", enumOptions: [ { title: "全部片种", value: "" }, { title: "纪录电影", value: "cid:29077" }, { title: "系列纪录片", value: "cid:29078" }, { title: "网络纪录片", value: "cid:29082" }, { title: "纪实栏目", value: "cid:29083" } ] },
        { name: "3129433", title: "时长", type: "enumeration", value: "", enumOptions: [ { title: "全部时长", value: "" }, { title: "微纪录", value: "cid:29079" }, { title: "长纪录", value: "cid:29080" }, { title: "短纪录", value: "cid:29081" } ] },
        { name: "purchase", title: "资费", type: "enumeration", value: "", enumOptions: [ { title: "全部资费", value: "" }, { title: "免费", value: "{\"is_purchase\": \"0\"}" }, { title: "付费", value: "{\"is_purchase\": \"1\"}" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    },
    {
      id: "iqKids",
      title: "少儿",
      functionName: "loadIqKids",
      cacheDuration: 600,
      params: [
        { name: "sort", title: "排序", type: "enumeration", value: "{\"mode\": 4}", enumOptions: [ { title: "综合排序", value: "{\"mode\": 24}" }, { title: "热播榜", value: "{\"mode\": 11}" }, { title: "新上线", value: "{\"mode\": 4}" } ] },
        { name: "1811133", title: "语种", type: "enumeration", value: "", enumOptions: [ { title: "全部语种", value: "" }, { title: "英语", value: "cid:4486" }, { title: "普通话", value: "cid:4487" }, { title: "日语", value: "cid:4488" }, { title: "其他", value: "cid:28932" } ] },
        { name: "2028833", title: "年龄段", type: "enumeration", value: "", enumOptions: [ { title: "全部年龄段", value: "" }, { title: "0-3岁", value: "cid:4489" }, { title: "4-6岁", value: "cid:28929" }, { title: "7-10岁", value: "cid:4493" }, { title: "11-13岁", value: "cid:4494" } ] },
        { name: "3095533", title: "类型", type: "enumeration", value: "", enumOptions: [ { title: "全部类型", value: "" }, { title: "电影", value: "cid:31013" }, { title: "有声绘本", value: "cid:31014" }, { title: "儿童综艺", value: "cid:31016" }, { title: "真人特摄", value: "cid:31017" }, { title: "动画", value: "cid:31020" }, { title: "其他", value: "cid:31022" } ] },
        { name: "1805733", title: "地区", type: "enumeration", value: "", enumOptions: [ { title: "全部地区", value: "" }, { title: "欧美", value: "cid:1261" }, { title: "大陆", value: "cid:1259" }, { title: "港台", value: "cid:1260" }, { title: "日本", value: "cid:1262" }, { title: "韩国", value: "cid:28933" }, { title: "其它", value: "cid:1263" } ] },
        { name: "2898233", title: "课程类型", type: "enumeration", value: "", enumOptions: [ { title: "全部课程类型", value: "" }, { title: "儿歌", value: "cid:28983" }, { title: "故事", value: "cid:28984" }, { title: "学英语", value: "cid:28985" }, { title: "百科", value: "cid:28986" }, { title: "国学", value: "cid:28987" }, { title: "手工", value: "cid:28988" }, { title: "识字", value: "cid:28989" }, { title: "数学", value: "cid:28990" }, { title: "美术", value: "cid:28991" }, { title: "舞蹈", value: "cid:28993" }, { title: "音乐", value: "cid:30918" }, { title: "诗词", value: "cid:30919" }, { title: "运动", value: "cid:30920" }, { title: "口才", value: "cid:30922" }, { title: "其他", value: "cid:28994" } ] },
        { name: "purchase", title: "资费", type: "enumeration", value: "", enumOptions: [ { title: "全部资费", value: "" }, { title: "免费", value: "{\"is_purchase\": \"0\"}" }, { title: "付费", value: "{\"is_purchase\": \"1\"}" } ] },
        { name: "page", title: "页码", type: "page" }
      ]
    }
  ]
};

var IQ_API = "https://pub.m.iqiyi.com/h5/main/recVideos/lib/";
var IQ_CH = { tv: 2, movie: 1, variety: 6, anime: 4, doc: 3, kids: 15 };
var IQ_UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1";

function iqQs(o) {
  var parts = [];
  for (var k in o) {
    if (!o.hasOwnProperty(k)) continue;
    parts.push(encodeURIComponent(k) + "=" + encodeURIComponent(o[k]));
  }
  return parts.join("&");
}

function iqPlan(params) {
  var plan = { mode: 11, three: [], year: "-", buy: "" };
  params = params || {};
  for (var k in params) {
    if (!params.hasOwnProperty(k) || k === "page") continue;
    var v = params[k];
    if (!v || v === "all") continue;
    if (v.indexOf("cid:") === 0) { plan.three.push(v.slice(4)); continue; }
    var o = null;
    try { o = JSON.parse(v); } catch (e) { continue; }
    if (o.mode) plan.mode = o.mode;
    if (o.market_release_date_level) plan.year = o.market_release_date_level;
    if (o.is_purchase !== undefined && o.is_purchase !== null) plan.buy = o.is_purchase;
  }
  return plan;
}

async function iqFetch(ch, params, page) {
  var plan = iqPlan(params);
  var q = {
    page_id: page, mode: plan.mode, channel_id: ch, ret_num: 21, pos: 1,
    type: "list", post: "list", from: "mobile_videolib",
    is_unified_interface: 1, version: "1.0.0", play_platform: "H5_QIYI"
  };
  if (plan.three.length) q.three_category_id = plan.three.join(",");
  if (plan.year && plan.year !== "-") q.market_release_date_level = plan.year;
  if (plan.buy !== "") q.is_purchase = plan.buy;
  var res = await Widget.http.get(IQ_API + "?" + iqQs(q), {
    headers: { "User-Agent": IQ_UA, Referer: "https://m.iqiyi.com/", Accept: "application/json" }
  });
  var body = res && res.data !== undefined ? res.data : res;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch (e) { body = null; } }
  if (!body || !body.data) throw new Error("爱奇艺片库返回格式异常，请稍后刷新");
  var data = body && body.data;
  var vids = (data && data.videos) || [];
  var cards = [];
  var seen = {};
  for (var i = 0; i < vids.length; i++) {
    var v = vids[i] || {};
    var aid = String(v.albumId || v.qipuId || "");
    var title = String(v.albumName || v.shortTitle || v.vt || v.name || "").trim();
    if (!aid || !title || seen[aid]) continue;
    seen[aid] = 1;
    cards.push({ cid: "iq" + aid, title: title, year: parseInt(v.year, 10) || 0 });
  }
  return cards;
}

async function loadIqChannel(chKey, params) {
  var ch = IQ_CH[chKey];
  if (!ch) return [];
  var kind = chKey === "movie" ? "movie" : "tv";
  return await fillRexPage((params || {}).page, function (sp) { return iqFetch(ch, params, sp); }, function (cards) { return iqResolveAll(cards, kind); }, fillKey("iq", chKey, params));
}
function iqNorm(s) {
  return String(s || "").toLowerCase()
    .replace(/[\s·・:：!！?？,，.。'"、]/g, "")
    .replace(/[（(][^)）]*[)）]/g, "");
}

function iqVariants(title) {
  var raw = String(title || "").trim();
  if (!raw) return [];
  var list = [];
  function add(x) {
    x = String(x || "").trim();
    if (x.length >= 2 && list.indexOf(x) < 0) list.push(x);
  }
  add(raw);
  var a = raw.replace(/[（(][^)）]*[)）]/g, "").replace(/【[^】]*】/g, "").replace(/\[[^\]]*\]/g, "").trim();
  add(a);
  var b = a.replace(/[·・].*$/, "").trim();
  add(b);
  var c = b.replace(/第\s*[0-9一二三四五六七八九十]+\s*[季期部篇].*$/, "").trim();
  add(c);
  var d = c.replace(/\s*(年番|完结季|完结篇|特别篇|普通话版|国语版|日语版|粤语版|中配版)$/, "").trim();
  add(d);
  var e = d.replace(/\s*(爽看版|精编版|加更版|会员版|悠享版|抢先版|完整版|导演剪辑版|速看版|高能版|纯享版|竖屏版|横屏版|特辑|番外|大结局)$/, "").trim();
  add(e);
  return list;
}

function iqJunk(title) {
  return /(拆解|解说|盘点|大赏|合集|预告|花絮|精选|混剪|周周看|名场面|彩蛋|剧情回顾|幕后|cut合集)/i.test(String(title || ""));
}

function iqGrams(s) {
  var t = iqNorm(s);
  var set = {};
  for (var i = 0; i < t.length - 1; i++) set[t.substr(i, 2)] = 1;
  if (t.length === 1) set[t] = 1;
  return set;
}

function iqSim(a, b) {
  var ga = iqGrams(a), gb = iqGrams(b);
  var ka = Object.keys(ga), kb = Object.keys(gb);
  if (!ka.length || !kb.length) return 0;
  var inter = 0;
  for (var i = 0; i < ka.length; i++) if (gb[ka[i]]) inter++;
  return inter / (ka.length + kb.length - inter);
}

function iqBest(results, names, year, kind) {
  var best = null, bestScore = 0;
  var imgAlt = null, imgScore = -1;
  for (var i = 0; i < (results || []).length; i++) {
    var r = results[i];
    if (!r || !r.id) continue;
    var title = r.name || r.title || r.original_name || r.original_title || "";
    var alt = (r.original_name || r.original_title || "");
    var score = 0;
    for (var n = 0; n < names.length; n++) {
      var s2 = Math.max(iqSim(names[n], title), alt ? iqSim(names[n], alt) : 0);
      if (s2 > score) score = s2;
    }
    if (score < (year ? 0.6 : 0.8)) continue; // Bolinxxlin：片名不够像就跳过，避免配错海报
    var date = String(r.first_air_date || r.release_date || "");
    if (year && date.slice(0, 4) === String(year)) score += 0.5;
    else if (year && date && Math.abs(parseInt(date.slice(0, 4), 10) - parseInt(year, 10)) === 1) score += 0.25;
    score += Math.min(0.2, (r.popularity || 0) / 5000);
    if (r.poster_path && score > imgScore) { imgScore = score; imgAlt = r; }
    if (score > bestScore) { bestScore = score; best = r; }
  }
  if (!best || bestScore < 0.72) return null;
  if (!best.poster_path && !best.backdrop_path && imgAlt && imgScore >= bestScore - 0.18) best = imgAlt;
  return {
    id: best.id,
    kind: kind,
    poster: best.poster_path || "",
    backdrop: best.backdrop_path || "",
    date: best.first_air_date || best.release_date || "",
    vote: best.vote_average || 0
  };
}

// Bolinxxlin：同一时间最多 8 个 TMDB 请求，24 行一起载入也不会被限流。
var TMDB_SLOT = 8, TMDB_BUSY = 0, TMDB_QUEUE = [];
function tmdbAcquire() { if (TMDB_BUSY < TMDB_SLOT) { TMDB_BUSY++; return Promise.resolve(); } return new Promise(function (r) { TMDB_QUEUE.push(r); }); }
function tmdbRelease() { var n = TMDB_QUEUE.shift(); if (n) n(); else TMDB_BUSY--; }
async function iqSearch(kind, query) {
  await tmdbAcquire();
  try {
    var r = await Widget.tmdb.get("search/" + kind, { params: { query: query, language: "zh-CN", include_adult: "false" } });
    tmdbRelease();
    return (r && r.results) || [];
  } catch (e) {
    tmdbRelease();
    var failed = [];
    failed.failed = true; // Bolinxxlin：请求失败，不当成查无此片
    return failed;
  }
}

async function cacheGet(key) {
  try {
    var v = await Widget.storage.get(key);
    if (!v) return null;
    var o = typeof v === "string" ? JSON.parse(v) : v;
    if (o && o.ts && Date.now() - o.ts < (o.id ? 604800000 : 86400000)) return o; // Bolinxxlin：查不到的只记 1 天，新剧上了 TMDB 就能补上
  } catch (e) {}
  return null;
}

async function cacheSet(key, obj) {
  try { await Widget.storage.set(key, JSON.stringify(Object.assign({ ts: Date.now() }, obj))); } catch (e) {}
}
// Bolinxxlin：老剧出新一季时，用平台年份那一季的首播日期，排序才会排在前面
async function iqSeasonDate(id, year) {
  await tmdbAcquire();
  try {
    var d = await Widget.tmdb.get("tv/" + id, { params: { language: "zh-CN" } });
    tmdbRelease();
    var ss = (d && d.seasons) || [], best = "";
    for (var i = 0; i < ss.length; i++) {
      var a = String(ss[i].air_date || "");
      if (Number(ss[i].season_number) > 0 && a.slice(0, 4) === String(year) && a > best) best = a;
    }
    return best;
  } catch (e) {
    tmdbRelease();
    return "";
  }
}

async function iqMatchOne(card, kind) {
  if (iqJunk(card.title)) return null;
  var ck = "iqpc:tmdb:" + card.cid;
  var cached = await cacheGet(ck);
  if (cached) return cached.id ? cached : null;
  var names = iqVariants(card.title).slice(0, 2);
  var hit = null, anyFailed = false;
  for (var i = 0; i < names.length && !hit; i++) {
    var res = await iqSearch(kind, names[i]);
    if (res.failed) anyFailed = true;
    hit = iqBest(res, names, card.year, kind);
  }
  if (!hit) {
    var alt = kind === "tv" ? "movie" : "tv";
    var res2 = await iqSearch(alt, names[0]);
    if (res2.failed) anyFailed = true;
    hit = iqBest(res2, names, card.year, alt);
  }
  if (hit && hit.kind === "tv" && card.year && String(hit.date || "").slice(0, 4) < String(card.year)) {
    hit.date = (await iqSeasonDate(hit.id, card.year)) || hit.date;
  }
  if (hit || !anyFailed) await cacheSet(ck, hit ? hit : { id: 0 });
  return hit;
}

function iqToItem(card, hit) {
  var poster = hit.poster ? "https://image.tmdb.org/t/p/w500" + hit.poster : "";
  var backdrop = hit.backdrop ? "https://image.tmdb.org/t/p/w780" + hit.backdrop : poster;
  if (!poster && !backdrop) return null;
  return {
    id: hit.id,
    type: "tmdb",
    title: card.title,
    mediaType: hit.kind,
    posterPath: poster,
    backdropPath: backdrop,
    coverUrl: backdrop,
    releaseDate: hit.date || (card.year ? String(card.year) : ""),
    rating: hit.vote > 0 ? hit.vote : undefined,
    genreTitle: card.genre || ""
  };
}

async function iqResolveAll(cards, kind) {
  // Bolinxxlin：照平台原本的顺序输出（热门排序不被打乱），电影与剧集分开去重
  var hits = new Array(cards.length), next = 0;
  async function worker() {
    while (next < cards.length) {
      var i = next++;
      try { hits[i] = await iqMatchOne(cards[i], kind); } catch (e) { hits[i] = null; }
    }
  }
  await Promise.all(Array.from({ length: 12 }, function () { return worker(); }));
  var out = [], seen = {};
  for (var i = 0; i < cards.length; i++) {
    var hit = hits[i];
    if (!hit || !hit.id || seen[hit.kind + ":" + hit.id]) continue;
    var item = iqToItem(cards[i], hit);
    if (!item) continue;
    seen[hit.kind + ":" + hit.id] = 1;
    out.push(item);
  }
  return out;
}

async function loadIqTv(params) { return await loadIqChannel("tv", params); }
async function loadIqMovie(params) { return await loadIqChannel("movie", params); }
async function loadIqVariety(params) { return await loadIqChannel("variety", params); }
async function loadIqAnime(params) { return await loadIqChannel("anime", params); }
async function loadIqDoc(params) { return await loadIqChannel("doc", params); }
async function loadIqKids(params) { return await loadIqChannel("kids", params); }

// Bolinxxlin：Rex 每一页尽量补到 FILL_TARGET 部（跟 Rex首页一样 200 部），最多读平台 FILL_MAX 页；
// 超过 FILL_BUDGET 毫秒就先交出已找到的，下一页从没读的地方接着读。每页起点会记下来，翻页不重复、不漏片。
var FILL_TARGET = 200, FILL_MAX = 40, FILL_BUDGET = 25000, FILL_TTL = 86400000;
async function fillGet(key) {
  try { var v = await Widget.storage.get(key); if (!v) return 0; var o = typeof v === "string" ? JSON.parse(v) : v; return o && Date.now() - o.ts < FILL_TTL ? o.sp : 0; } catch (e) { return 0; }
}
async function fillSet(key, sp) { try { await Widget.storage.set(key, JSON.stringify({ ts: Date.now(), sp: sp })); } catch (e) {} }
async function fillRexPage(page, fetchCards, resolveCards, key) {
  var p = Math.max(1, parseInt(page, 10) || 1);
  var start = 1;
  if (p > 1) {
    start = await fillGet(key + ":" + p);
    if (!start) { await fillRexPage(p - 1, fetchCards, resolveCards, key); start = await fillGet(key + ":" + p); }
    if (!start) return [];
  }
  var out = [], seen = {}, sp = start, t0 = Date.now();
  function grab(n) { return Promise.resolve().then(function () { return fetchCards(n); }); }
  var pending = grab(sp);
  for (; sp < start + FILL_MAX && out.length < FILL_TARGET; sp++) {
    var cards;
    try { cards = await pending; } catch (e) { if (sp === start) throw e; break; }
    if (!cards || !cards.length) { sp = 0; break; }
    var more = sp + 1 < start + FILL_MAX && Date.now() - t0 < FILL_BUDGET;
    // 一边配对这一页，一边先抓下一页
    pending = more ? grab(sp + 1) : null;
    if (pending) pending.catch(function () {});
    var items = await resolveCards(cards);
    // 整页收完再停（可能略多于 200），平台这一页剩下的片才不会被跳过
    for (var i = 0; i < items.length; i++) {
      var k = items[i].mediaType + ":" + items[i].id;
      if (!seen[k]) { seen[k] = 1; out.push(items[i]); }
    }
    if (!more) { sp++; break; }
  }
  // Bolinxxlin：每页按首映／首播时间从新到旧排（跟 Rex首页一样），没有日期的排最后
  out.sort(function (a, b) { return String(b.releaseDate || "").localeCompare(String(a.releaseDate || "")); });
  await fillSet(key + ":" + (p + 1), sp);
  return out;
}
function fillKey(prefix, chKey, params) {
  var o = {}; for (var k in params || {}) if (k !== "page") o[k] = params[k];
  return prefix + ":fill:" + chKey + ":" + JSON.stringify(o);
}
