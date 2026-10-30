/*
 * ShortDrama 0.4.3 — 原創 Rex Widget，2026-10-30。
 * Sources: 紅果、河馬、七貓、星芽、好看、圍觀、柚漫劇、抖音連結、喜番分享單集。
 * 只使用來源實際提供的播放網址。公開集數/畫質以來源為準。
 * 不需要 Worker；不包含 balge 的程式碼、帳號或加密模組。
 */
var WidgetMetadata = {
  id: 'bolin.shortdrama.original',
  title: '短劇聚合・柏霖',
  author: '柏霖',
  version: '0.4.3',
  requiredVersion: '0.0.1',
  description: '九個來源，優先來源提供的最高畫質，含本機資料快取。喜番僅分享單集；抖音為連結入口；柚漫劇僅部分公開分集。',
  detailCacheDuration: 60,
  modules: [
    {id: 'hongguo', title: '紅果短劇／漫劇', functionName: 'hongguoList', cacheDuration: 300,
      params: [{name:'channel',title:'分類',type:'enumeration',value:'real-drama',enumOptions:[
        {title:'真人短劇',value:'real-drama'},{title:'漫劇',value:'comic-drama'},
        {title:'AI 劇',value:'ai-drama'}]}, {name:'page',title:'頁碼',type:'page',value:'1'}]},
    {id: 'hema', title: '河馬劇場', functionName: 'hemaList', cacheDuration: 300,
      params: [{name:'category',title:'分類',type:'enumeration',value:'462',enumOptions:[
        {title:'甜寵',value:'462'},{title:'古裝仙俠',value:'1102'},
        {title:'現代言情',value:'1145'},{title:'青春',value:'1170'},
        {title:'豪門恩怨',value:'585'},{title:'逆襲',value:'417-464'},
        {title:'重生',value:'439-465'},{title:'系統',value:'1159'},
        {title:'總裁',value:'1147'},{title:'職場商戰',value:'943'}]},
        {name:'page',title:'頁碼',type:'page',value:'1'}]},
    {id: 'qimao', title: '七貓短劇', functionName: 'qimaoList', cacheDuration: 300,
      params:[{name:'category',title:'分類',type:'enumeration',value:'0',enumOptions:[
        {title:'推薦',value:'0'},{title:'新劇',value:'-1'},{title:'現代言情',value:'21'},
        {title:'神豪',value:'37'},{title:'萌寶',value:'356'},{title:'穿越',value:'373'},
        {title:'戰神',value:'527'},{title:'神醫',value:'1269'},{title:'古裝',value:'1272'}]}]},
    {id: 'xingya', title: '星芽短劇', functionName: 'xingyaList', cacheDuration: 300,
      params:[{name:'category',title:'分類',type:'enumeration',value:'1',enumOptions:[
        {title:'劇場',value:'1'},{title:'熱播',value:'2'},{title:'新劇',value:'3'},
        {title:'陽光劇場',value:'5'},{title:'星選',value:'7'}]},
        {name:'page',title:'頁碼',type:'page',value:'1'}]},
    {id:'haokan',title:'好看短劇',functionName:'haokanList',cacheDuration:300,
      description:'分類與分集播放。全站搜尋尚未接入。',
      params:[{name:'category',title:'分類',type:'enumeration',value:'3',enumOptions:[
        {title:'男頻',value:'3'},{title:'女頻',value:'4'},{title:'都市',value:'2013'},
        {title:'玄幻',value:'2009'},{title:'年代',value:'2014'},{title:'科幻',value:'2015'},
        {title:'軍旅戰爭',value:'2016'},{title:'歷史架空',value:'2010'},{title:'武俠武打',value:'2017'},
        {title:'家庭倫理',value:'2012'},{title:'古代言情',value:'2011'},{title:'現代言情',value:'2008'},
        {title:'青春校園',value:'2018'},{title:'逆襲',value:'1004'},{title:'甜寵',value:'1007'},
        {title:'穿越重生',value:'2004'}]},
        {name:'page',title:'頁碼',type:'page',value:'1'}]},
    {id:'weiguan',title:'圍觀短劇',functionName:'weiguanList',cacheDuration:300,
      params:[{name:'category',title:'分類',type:'enumeration',value:'',enumOptions:[
        {title:'全部',value:''},{title:'都市',value:'都市'},{title:'逆襲',value:'逆袭'},
        {title:'家庭',value:'家庭'},{title:'古裝',value:'古装'},{title:'甜寵',value:'甜宠'},
        {title:'懸疑',value:'悬疑'},{title:'愛情',value:'爱情'},{title:'重生',value:'重生'},
        {title:'穿越',value:'穿越'},{title:'萌寶',value:'萌宝'},{title:'戰神',value:'战神'}]},
        {name:'page',title:'頁碼',type:'page',value:'1'}]},
    {id:'youman',title:'柚漫劇・搜尋入口',functionName:'youmanList',cacheDuration:300,
      description:'按題材或關鍵字找劇。只提供搜尋回傳的公開分集入口，可能不是完整目錄。',
      params:[{name:'keyword',title:'題材／劇名',type:'input',value:'玄幻'}]},
    {id:'douyin',title:'抖音・短劇連結',functionName:'douyinList',cacheDuration:300,
      description:'貼上完整 playlet/detail 短劇連結或純數字劇集 ID。僅列來源明確免費的分集；沒有全站搜尋。',
      params:[{name:'link',title:'完整短劇連結／劇集 ID',type:'input',value:'7608061313389955115'}]},
    {id:'xifan',title:'喜番・分享單集',functionName:'xifanList',cacheDuration:300,
      description:'貼上喜番官方分享連結；僅載入分享頁回傳的免費分集，不是全集、分類或搜尋。',
      params:[{name:'link',title:'喜番分享連結',type:'input',value:''}]},
    {id:'loadResource',type:'stream',title:'紅果公開分集',functionName:'loadResource',cacheDuration:60,
      description:'播放紅果分集時取得該集的公開影片網址。'}
  ],
  search: {title:'短劇搜尋',functionName:'search',params:[
    {name:'keyword',title:'劇名',type:'input',value:''},
    {name:'source',title:'來源',type:'enumeration',value:'all',enumOptions:[
      {title:'全部可搜尋來源',value:'all'},{title:'紅果',value:'hongguo'},
      {title:'河馬',value:'hema'},{title:'七貓',value:'qimao'},{title:'星芽',value:'xingya'},
      {title:'圍觀',value:'weiguan'},{title:'柚漫劇（部分公開入口）',value:'youman'}]},
    {name:'page',title:'頁碼',type:'page',value:'1'}
  ]}
};

var SD = {
  red: 'https://hongguoduanju.com',
  hema: 'https://www.kuaikaw.cn',
  qm: 'https://api-store.qmplaylet.com',
  qmRead: 'https://api-read.qmplaylet.com',
  star: 'https://app.whjzjx.cn',
  ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  memory: {},
  storePrefix: 'bolin.shortdrama.v1.'
};

function pageNumber(p) {
  var n=Number(p && p.page || 1);
  if (!isFinite(n) || n<1 || n>10000 || Math.floor(n)!==n) throw new Error('頁碼不正確');
  return n;
}
// Douyin's public share catalogue; paid/preview/private items are never opened.
var DY='https://www.iesdouyin.com';
var DYUA='com.ss.android.ugc.aweme/290101 (Linux; U; Android 10; zh_CN; Pixel 4; Build/QQ3A.200805.001; Cronet/TTNetVersion:5f9037be 2023-01-13 QuicVersion:4668bb42 2022-11-21)';
function douyinId(value) {
  var s=text(value).trim();if(/^\d{1,24}$/.test(s))return numberId(s);
  var m=/https:\/\/(?:www\.)?(?:iesdouyin|douyin)\.com\/(?:share\/)?playlet\/detail\/(\d{1,24})(?=[/?#\s]|$)/.exec(s);
  if(!m)throw new Error('請貼上完整的抖音 playlet/detail 短劇連結或純數字劇集 ID；暫不支援 v.douyin.com 短連結');
  return numberId(m[1]);
}
function douyinLink(id,aweme) {return DY+'/share/playlet/detail/'+numberId(id)+'/'+(aweme?'?aweme_id='+numberId(aweme):'');}
function douyinImage(x) {return x&&Array.isArray(x.url_list)?videoURL(x.url_list[0]):'';}
async function douyinAPI(path,params) {
  var d=json(await request(queryURL(DY+path,Object.assign({aid:1128},params)),undefined,
    {'User-Agent':SD.ua,'Referer':DY+'/'}));
  if(!d||Number(d.status_code)!==0)throw new Error('抖音未提供有效資料，請稍後再試');
  return d;
}
async function douyinInfo(id) {
  var d=(await douyinAPI('/web/api/playlet/detail/',{playlet_id:numberId(id)})).playlet_info;
  if(!d||text(d.playlet_id)!==text(id))throw new Error('抖音回應的劇集 ID 不一致');
  return d;
}
function douyinCard(d) {
  return detailCard(douyinLink(d.playlet_id),d.playlet_name,douyinImage(d.cover_url),d.desc,'',d.total_episode,'抖音・連結入口');
}
async function douyinList(p) {return [douyinCard(await douyinInfo(douyinId(p&&p.link)))];}
function douyinFree(meta,item) {
  var info=item.playlet_info||{},n=Number(info.statis&&info.statis.current_episode),s=item.status||{};
  if(text(info.playlet_id)!==text(meta.playlet_id)||!Number.isInteger(n)||n<1)return false;
  if(item.is_preview||s.is_delete||s.is_private||s.is_prohibited||s.self_see||s.in_reviewing||Number(s.private_status)>0)return false;
  var paid=meta.charge_episodes||meta.charge_info&&meta.charge_info.charge_episodes||[];
  if(!Array.isArray(paid))return false;
  if(paid.some(function(x){return Number(x)===n;})||Number(item.is_charge_series)>0||Number(item.series_paid_info&&item.series_paid_info.item_price)>0)return false;
  // For a paid series, require an explicitly free per-item flag as well.
  if(Number(meta.is_charge_series)>0&&item.is_charge_series!==0)return false;
  return true;
}
async function douyinCatalogue(id) {
  id=numberId(id);var cached=SD.memory['dy.'+id];
  if(cached&&Date.now()-cached.at<60000)return cached;
  var meta=await douyinInfo(id),all=[],cursor=0,seen={};
  for(var page=0;page<20;page++){
    var d=await douyinAPI('/web/api/playlet/item/list/',{playlet_id:id,count:100,cursor:cursor});
    if(!Array.isArray(d.aweme_list))throw new Error('抖音沒有提供分集目錄');
    all=all.concat(d.aweme_list);
    if(!d.has_more)break;
    var next=Number(d.cursor);
    if(!Number.isFinite(next)||next<=cursor||page===19)throw new Error('抖音分頁尚未完整，請稍後再試');
    cursor=next;
  }
  var items=all.filter(function(x){
    if(!douyinFree(meta,x)||!/^\d{1,24}$/.test(text(x.aweme_id))||seen[x.aweme_id])return false;
    seen[x.aweme_id]=true;return true;
  }).sort(function(a,b){return a.playlet_info.statis.current_episode-b.playlet_info.statis.current_episode;});
  if(!items.length)throw new Error('抖音目前沒有提供本劇明確免費的分集');
  cached={at:Date.now(),meta:meta,items:items};
  var keys=Object.keys(SD.memory).filter(function(k){return k.indexOf('dy.')===0;});
  if(keys.length>=20)delete SD.memory[keys[0]];
  SD.memory['dy.'+id]=cached;return cached;
}
async function douyinDetail(id) {
  var d=await douyinCatalogue(id),card=douyinCard(d.meta);
  card.episodeItems=d.items.map(function(x){var n=x.playlet_info.statis.current_episode,u=douyinLink(id,x.aweme_id);
    return {id:u,link:u,type:'detail',title:'第 '+n+' 集',episode:n,posterPath:card.posterPath,mediaType:'tv'};});
  card.description+='\n僅列出來源明確免費的 '+card.episodeItems.length+' 集；付費及預覽集數未列入。';
  return card;
}
async function douyinEpisode(id,aweme) {
  var cat=await douyinCatalogue(id),wanted=cat.items.find(function(x){return text(x.aweme_id)===text(aweme);});
  if(!wanted)throw new Error('本集不在來源明確免費的目錄內');
  var response=json(await request(queryURL('https://aweme.snssdk.com/aweme/v1/feed/',{aweme_id:numberId(aweme),aid:1128}),undefined,{'User-Agent':DYUA}));
  if(!response||Number(response.status_code)!==0)throw new Error('抖音未提供本集播放資料');
  var x=(response.aweme_list||[]).find(function(v){return text(v.aweme_id)===text(aweme);});
  if(!x)throw new Error('抖音回傳其他推薦影片，沒有本集，已停止播放');
  var v=x.video||{},status=x.status||{};
  if(v.need_set_token||x.is_preview||Number(x.is_charge_series)>0||Number(x.series_paid_info&&x.series_paid_info.item_price)>0||status.is_private||status.is_delete||status.is_prohibited)throw new Error('抖音本集目前未公開提供播放');
  var returnedVid=v.vid||v.play_addr_h264&&v.play_addr_h264.uri||v.play_addr&&v.play_addr.uri;
  if(!wanted.video||!wanted.video.vid||text(returnedVid)!==text(wanted.video.vid))throw new Error('抖音回應的影片 ID 不一致');
  var media=bestDouyinMedia(v);
  if(!media)throw new Error('抖音沒有提供本集公開播放網址');
  return playable(media,'第 '+wanted.playlet_info.statis.current_episode+' 集',wanted.playlet_info.statis.current_episode,douyinImage(v.cover));
}
function text(v) { return v==null ? '' : String(v); }
function numberId(v) {
  var s=text(v); if (!/^\d{1,24}$/.test(s)) throw new Error('劇集 ID 不正確'); return s;
}
function decodeShareBase64(value) {
  var s=text(value),alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',bits=0,count=0,percent='';
  if(!/^[A-Za-z0-9+/]*={0,2}$/.test(s)||s.length>16000||s.length%4===1)throw new Error('分享資料編碼不正確');
  s=s.replace(/=+$/,'');
  for(var i=0;i<s.length;i++){
    bits=(bits<<6)|alphabet.indexOf(s[i]);count+=6;
    if(count>=8){count-=8;percent+='%'+('0'+((bits>>count)&255).toString(16)).slice(-2);}
  }
  try{return decodeURIComponent(percent);}catch(_){throw new Error('分享資料文字編碼不正確');}
}
function xifanShare(value) {
  var input=text(value).trim(),m=/https:\/\/tube\.e\.kuaishou\.com\/mobile\/xifan\?([^\s#]+)/.exec(input);
  if(!m||m[1].length>20000)throw new Error('請貼上喜番 App 複製的完整官方分享連結');
  var q={};m[1].split('&').forEach(function(pair){var at=pair.indexOf('=');if(at<0)return;
    try{var k=decodeURIComponent(pair.slice(0,at)),v=decodeURIComponent(pair.slice(at+1));
      if(k==='detail'||k==='sign')q[k]=v;
    }catch(_){throw new Error('分享連結參數編碼不正確');}
  });
  if(!q.detail||!/^([a-f0-9]{32})$/i.test(q.sign||''))throw new Error('分享連結缺少 detail 或 sign，請重新複製');
  var d;try{d=JSON.parse(decodeShareBase64(q.detail));}catch(_){throw new Error('分享資料格式不正確');}
  var id=numberId(d.tubeId),ep=Number(d.episodeNum);
  if(!Number.isInteger(ep)||ep<1||ep>5000)throw new Error('分享連結的集數不正確');
  return {id:id,episode:ep,detail:q.detail,sign:q.sign};
}
function xifanLink(id,ep){return 'https://tube.e.kuaishou.com/mobile/xifan?tube_id='+numberId(id)+'&episode='+ep;}
async function xifanRequest(share) {
  var r=json(await request('https://tube.e.kuaishou.com/rest/e/tube/app/share/landingPage',
    {detail:share.detail,sign:share.sign,extra:{model:'iPhone'}},
    {'Content-Type':'application/json','User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Version/18.0 Mobile/15E148 Safari/604.1',
    'Origin':'https://tube.e.kuaishou.com','Referer':'https://tube.e.kuaishou.com/mobile/xifan'}));
  if(!r||Number(r.result)!==1)throw new Error('喜番分享資料不可用或已失效，請重新從 App 複製連結');
  var d=r.data;
  if(!d||!d.tubeInfo||text(d.tubeInfo.tubeId)!==share.id)throw new Error('喜番回應的劇集 ID 不一致');
  if(!Array.isArray(d.tubeEpisodeList))throw new Error('喜番沒有提供分享分集');
  return d;
}
function xifanPublicItems(d,share) {
  return d.tubeEpisodeList.filter(function(x){
    var ep=x&&x.tubeEpisode;
    return ep&&text(ep.tubeId)===share.id&&Number(ep.episodeNumber)===share.episode&&Number(ep.free)===1&&!ep.isExcitingClips;
  });
}
function xifanMedia(x) {
  var manifest;try{manifest=json(x.videoInfo&&x.videoInfo.manifest);}catch(_){return '';}
  if(!manifest||!Array.isArray(manifest.adaptationSet)||manifest.drm||manifest.encryption)return '';
  var variants=[];
  manifest.adaptationSet.forEach(function(set){
    if(!/audio/i.test(text(set.contentType||set.mimeType))&&Array.isArray(set.representation))variants=variants.concat(set.representation);
  });
  variants=variants.filter(function(v){return !v.hidden&&!v.drm&&!v.encryption&&videoURL(v.url);});
  var selected=highestMedia(variants.map(function(v){return {url:v.url,width:v.width,height:v.height,
    bitrate:v.bitrate||v.avgBitrate||v.bandwidth,label:v.qualityLabel||v.qualityType||v.name};}));
  // The source emits HTTP URLs; this CDN also serves the same signed path over TLS.
  if(/^http:\/\/[A-Za-z0-9.-]+\.video\.yximgs\.com\//i.test(selected))selected=selected.replace(/^http:/,'https:');
  return selected;
}
async function xifanList(p) {
  var share=xifanShare(p&&p.link),d=await xifanRequest(share),episodes=xifanPublicItems(d,share);
  if(!episodes.some(function(x){return !!xifanMedia(x);}))throw new Error('喜番分享頁沒有提供這一集的免費播放網址');
  var key=share.id+'.'+share.episode,maps=await readStore('xifanShares')||{};
  delete maps[key];maps[key]={id:share.id,episode:share.episode,detail:share.detail,sign:share.sign};
  var keys=Object.keys(maps);while(keys.length>40)delete maps[keys.shift()];
  await writeStore('xifanShares',maps);
  var info=d.tubeInfo,card=detailCard(xifanLink(share.id,share.episode),info.name,info.coverUrl,info.summary,
    Array.isArray(info.tagList)?info.tagList.join('／'):'',info.totalEpisodeCount,'喜番・分享單集');
  card.description+='\n此連結僅提供第 '+share.episode+' 集；不是完整劇集目錄。';
  return [card];
}
async function xifanDetail(id,episode) {
  var maps=await readStore('xifanShares')||{},share=maps[numberId(id)+'.'+episode];
  if(!share)throw new Error('分享記錄不存在，請在喜番入口重新貼上官方分享連結');
  if(share.id!==text(id)||Number(share.episode)!==episode)throw new Error('喜番分享記錄不一致，請重新貼上連結');
  var d=await xifanRequest(share),items=xifanPublicItems(d,share),ep=items.find(function(x){return !!xifanMedia(x);});
  if(!ep)throw new Error('喜番未提供這一集的免費公開播放網址');
  var card=playable(xifanMedia(ep),d.tubeInfo.name+'・第 '+episode+' 集',episode,d.tubeInfo.coverUrl);
  card.description='喜番分享頁只提供此集；不是完整目錄。';return card;
}
function queryURL(url, params) {
  var a=[]; Object.keys(params || {}).forEach(function(k){
    if (params[k] !== undefined && params[k] !== null) a.push(encodeURIComponent(k)+'='+encodeURIComponent(text(params[k])));
  });
  return url+(url.indexOf('?')<0?'?':'&')+a.join('&');
}
function json(value) { return typeof value==='string' ? JSON.parse(value) : value; }
async function request(url, body, headers) {
  var h=Object.assign({'User-Agent':SD.ua, 'Accept':'application/json,text/html;q=0.9,*/*;q=0.8'},headers || {});
  var r=body===undefined ? await Widget.http.get(url,{headers:h}) :
    await Widget.http.post(url,body,{headers:Object.assign({'Content-Type':'application/json'},h)});
  var status=Number(r.statusCode || r.status || 200);
  if (status<200 || status>=300) throw new Error('來源回覆 HTTP '+status+'，請稍後再試');
  return r.data;
}
async function readStore(key) {
  if (SD.memory[key]!==undefined) return SD.memory[key];
  try {
    var value=await Widget.storage.get(SD.storePrefix+key);
    if (value!=null) {value=json(value);SD.memory[key]=value;return value;}
  } catch (_) {}
  return null;
}
async function writeStore(key,value) {
  SD.memory[key]=value;
  try {await Widget.storage.set(SD.storePrefix+key,JSON.stringify(value));} catch (_) {}
}
async function deviceId() {
  var id=await readStore('device');
  if (typeof id==='string' && /^[a-f0-9]{32}$/.test(id)) return id;
  id='';for(var i=0;i<32;i++) id+=Math.floor(Math.random()*16).toString(16);
  await writeStore('device',id);return id;
}
function unique(rows) {
  var seen={};return rows.filter(function(x){if(!x||!x.id||!x.title||seen[x.id])return false;seen[x.id]=true;return true;});
}
function videoURL(v) {var s=text(v);return /^https?:\/\/[^\s<>]+$/i.test(s)?s:'';}
function qualityPixels(label){
  var s=text(label).toLowerCase(),m=/(?:^|[^0-9])(4320|2160|1440|1080|960|720|540|480|360|240)(?:p|(?:[^0-9]|$))/.exec(s);
  if(m)return Number(m[1]);
  if(/(?:^|\W)8k(?:\W|$)/.test(s))return 4320;
  if(/(?:^|\W)4k(?:\W|$)/.test(s))return 2160;
  if(/(?:^|\W)2k(?:\W|$)/.test(s))return 1440;
  if(/蓝光|藍光/.test(s))return 1080;
  if(/超清/.test(s))return 1080;
  if(/高清/.test(s)||s==='hd')return 720;
  if(/标清|標清/.test(s)||s==='sd')return 480;
  return 0;
}
function highestMedia(variants){
  var items=(variants||[]).filter(function(v){return v&&videoURL(v.url)&&!v.drm&&!v.encryption&&!v.hidden;}).map(function(v,i){
    var w=Number(v.width)||0,h=Number(v.height)||0,side=w>0&&h>0?Math.min(w,h):0;
    return {url:videoURL(v.url),pixels:side||qualityPixels(v.label)||qualityPixels(v.url.split('?')[0]),
      area:w*h,bitrate:Number(v.bitrate)||0,index:i};
  });
  items.sort(function(a,b){return b.pixels-a.pixels||b.area-a.area||b.bitrate-a.bitrate||a.index-b.index;});
  return items.length?items[0].url:'';
}
function bestDouyinMedia(video){
  var variants=[];
  function add(address,meta){
    if(!address||address.need_set_token||address.drm||address.encryption||meta&&meta.need_set_token)return;
    var u=douyinImage(address);if(!u)return;
    variants.push({url:u,width:address.width||meta&&meta.width,height:address.height||meta&&meta.height,
      bitrate:meta&&meta.bit_rate,label:meta&&meta.gear_name,drm:meta&&meta.drm,encryption:meta&&meta.encryption});
  }
  add(video.play_addr_h264,{});add(video.play_addr,{});add(video.play_addr_265,{});
  (Array.isArray(video.bit_rate)?video.bit_rate:[]).forEach(function(v){add(v.play_addr||v.play_addr_h264,v);});
  return highestMedia(variants);
}
function bestHemaMedia(video){
  var fields={mp4:'',m3u8:'',vodMp4Url:'',mp4720p:'720p',m3u8720p:'720p',
    mp41080p:'1080p',m3u81080p:'1080p',mp41440p:'1440p',mp42160p:'2160p',m3u82160p:'2160p'};
  return highestMedia(Object.keys(fields).map(function(k){return {url:videoURL(video[k]),label:fields[k]};}));
}
function detailCard(url,title,poster,intro,tags,total,source) {
  return {id:url,type:'detail',title:text(title),posterPath:videoURL(poster),
    mediaType:'tv',link:url,genreTitle:text(tags),
    description:source+(total?'｜共 '+total+' 集':'')+(intro?'\n'+intro:'')};
}
function playable(url,title,index,poster) {
  return {id:url,type:'url',title:text(title||('第 '+index+' 集')),videoUrl:url,
    episode:Number(index)||undefined,posterPath:videoURL(poster),mediaType:'tv',playerType:'system'};
}
// Parse only a JSON value embedded in HTML; never evaluate website JavaScript.
function balancedJSON(source,offset) {
  var start=offset;
  while(/\s/.test(source.charAt(start))&&start<source.length)start++;
  if(source.charAt(start)!=='{'&&source.charAt(start)!=='[')throw new Error('來源 JSON 格式改變');
  var depth=0,quoted=false,escape=false;
  for(var i=start;i<source.length;i++){
    var c=source.charAt(i);
    if(quoted){if(escape)escape=false;else if(c==='\\')escape=true;else if(c==='"')quoted=false;continue;}
    if(c==='"')quoted=true;
    else if(c==='{'||c==='[')depth++;
    else if(c==='}'||c===']'){depth--;if(depth===0)return JSON.parse(source.slice(start,i+1));}
  }
  throw new Error('來源 JSON 不完整');
}
function redData(html) {
  var m=/_ROUTER_DATA\s*=\s*\{/.exec(text(html));
  if(!m)throw new Error('紅果網頁格式改變或暫時無法載入');
  var root=balancedJSON(html,m.index+m[0].length-1), loaders=root.loaderData || {};
  var values=Object.keys(loaders).map(function(k){return loaders[k];}).filter(function(x){return x&&typeof x==='object';});
  if(!values.length)throw new Error('紅果網頁沒有資料');return values;
}
function nextData(html) {
  var m=/<script\b[^>]*\bid=["']__NEXT_DATA__["'][^>]*>([\s\S]*?)<\/script>/i.exec(text(html));
  if(!m)throw new Error('河馬網頁格式改變或暫時無法載入');
  return (JSON.parse(m[1]).props || {}).pageProps || {};
}
function redCard(x) {
  var name=x.series_name || x.series_title;
  if(!x.series_id || !name)return null;
  var tags=x.tags || (x.category_list || []).map(function(t){return t.name;});
  return detailCard(SD.red+'/detail?series_id='+numberId(x.series_id),name,x.series_cover,x.series_intro,
    Array.isArray(tags)?tags.join('／'):tags,x.episode_cnt,'紅果');
}
async function hongguoList(p) {
  p=p||{};var channel=p.channel || 'real-drama',page=pageNumber(p);
  if(['real-drama','comic-drama','ai-drama'].indexOf(channel)<0)throw new Error('紅果分類不正確');
  var data=redData(await request(queryURL(SD.red+'/category/'+channel,{page:page})));
  var d=data.filter(function(v){return Array.isArray(v.recommendList);})[0];
  if(!d)throw new Error('紅果分類回應沒有清單');
  if(d.pagination && page>Number(d.pagination.totalPages))return [];
  return unique(d.recommendList.map(redCard));
}
async function redDetail(url) {
  var data=redData(await request(url));
  var d=data.filter(function(v){return v.seriesDetail;})[0];
  if(!d)throw new Error('紅果沒有這部劇的資料');
  var s=d.seriesDetail,card=redCard(s),ids=s.vid_list || [];
  // accessible_episode_cnt is the website's declared public subset.
  var count=Math.min(ids.length,Math.max(0,Number(s.accessible_episode_cnt)||0));
  if(!count)throw new Error('這部劇目前沒有網頁公開分集，請使用官方 App');
  // Rex opens episodes directly in the player. Use URL identities with a
  // registered stream resolver instead of relying on nested loadDetail calls.
  card.episodeItems=ids.slice(0,count).map(function(id,index){
    var link=SD.red+'/player/'+numberId(s.series_id)+'/'+numberId(id);
    return {id:link,type:'url',title:'第 '+(index+1)+' 集',episode:index+1,link:link,mediaType:'tv',posterPath:card.posterPath,playerType:'system'};
  });
  // Prime episode one for direct playback; resolve later episodes on demand.
  // This avoids requesting dozens of player pages while opening the catalogue.
  try {card.episodeItems[0].videoUrl=(await redEpisode(card.episodeItems[0].link)).videoUrl;}
  catch(e){card.description+='\n首集預載失敗，點選播放時會重新取得：'+text(e&&e.message||e);}
  card.description+='\n網頁公開 '+count+'／'+text(s.episode_cnt)+' 集；其餘集數請於官方 App 觀看。';
  return card;
}
async function loadResource(params) {
  var candidates=typeof params==='string'?[params]:params?[params.link,params.id,params.url,params.videoId]:[];
  var link=candidates.map(text).filter(function(x){return /^https:\/\/hongguoduanju\.com\/player\/\d+\/\d+$/.test(x);})[0];
  if(!link)return [];
  var item=await redEpisode(link);
  return [{name:'紅果公開分集',url:item.videoUrl,playerType:'system'}];
}
async function redEpisode(url) {
  var html=text(await request(url)),data=redData(html);
  var page=data.filter(function(v){return v.seriesDetail && v.publicVideoSeo;})[0];
  if(!page || !page.publicVideoSeo.available)throw new Error('本集未提供網頁公開播放，請使用官方 App');
  var expected=/\/player\/(\d+)\/(\d+)$/.exec(url);
  if(!expected||text(page.seriesDetail.series_id)!==expected[1]||text(page.vid)!==expected[2])
    throw new Error('紅果回傳的分集不一致，請重新開啟本集');
  var m=/"contentUrl"\s*:\s*"((?:\\.|[^"\\])*)"/.exec(html);
  var media=m?videoURL(JSON.parse('"'+m[1]+'"')):'';
  if(!media)throw new Error('本集沒有公開播放網址');
  var ids=page.seriesDetail.vid_list || [],index=ids.indexOf(text(page.vid))+1;
  var out=playable(media,'第 '+(index||1)+' 集',index||1,page.seriesDetail.series_cover);
  var w=Number(page.publicVideoSeo.width),h=Number(page.publicVideoSeo.height),res=w>0&&h>0?Math.min(w,h):0;
  out.description='紅果公開網頁提供'+(res?' '+res+'p':'的畫質')+'；沒有另造高畫質網址。';return out;
}
function hemaCard(x) {
  if(!x.bookId || !x.bookName)return null;
  return detailCard(SD.hema+'/drama/'+numberId(x.bookId),x.bookName,x.coverWap,x.introduction,
    (x.bookTypeThree||[]).map(function(g){return g.name;}).join('／'),x.totalChapterNum,'河馬');
}
async function hemaList(p) {
  p=p||{};var category=text(p.category || '462'),page=pageNumber(p);
  if(!/^\d+(?:-\d+)?$/.test(category))throw new Error('河馬分類不正確');
  var d=nextData(await request(SD.hema+'/browse/'+category+'/'+page));
  if(Number(d.pages)>0 && page>Number(d.pages))return [];
  if(!Array.isArray(d.bookList))throw new Error('河馬分類回應沒有清單');
  return unique(d.bookList.map(hemaCard));
}
async function hemaDetail(url) {
  var d=nextData(await request(url)),card=hemaCard(d.bookInfoVo || {});
  if(!card)throw new Error('河馬沒有這部劇的資料');
  card.episodeItems=(d.chapterList||[]).filter(function(e){return text(e.isCharge)!=='1';}).map(function(e){
    var v=e.chapterVideoVo || {},media=bestHemaMedia(v);
    return media?playable(media,e.chapterName,e.chapterIndex,card.posterPath):null;
  }).filter(Boolean).sort(function(a,b){return (a.episode||0)-(b.episode||0);});
  card.description+='\n本頁提供 '+card.episodeItems.length+' 集公開播放；付費／未提供網址的集數未列入。';
  if(!card.episodeItems.length)throw new Error('這部劇沒有可直接播放的公開分集，請使用官方 App');
  return card;
}
// RFC 1321 MD5, used only to generate this public client's request checksum.
function md5(input) {
  var bytes=[],encoded=encodeURIComponent(text(input)),i;
  for(i=0;i<encoded.length;i++){
    if(encoded.charAt(i)==='%'){bytes.push(parseInt(encoded.slice(i+1,i+3),16));i+=2;}
    else bytes.push(encoded.charCodeAt(i));
  }
  var length=bytes.length;bytes.push(128);while(bytes.length%64!==56)bytes.push(0);
  for(i=0;i<8;i++)bytes.push(Math.floor(length*8/Math.pow(256,i))&255);
  var h=[1732584193,-271733879,-1732584194,271733878];
  var shifts=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21],k=[];
  for(i=0;i<64;i++)k[i]=Math.floor(Math.abs(Math.sin(i+1))*4294967296)|0;
  for(var block=0;block<bytes.length;block+=64){
    var words=[];for(i=0;i<16;i++)words[i]=(bytes[block+i*4]|bytes[block+i*4+1]<<8|bytes[block+i*4+2]<<16|bytes[block+i*4+3]<<24);
    var a=h[0],b=h[1],c=h[2],d=h[3];
    for(i=0;i<64;i++){
      var f,g,group=Math.floor(i/16);
      if(group===0){f=(b&c)|(~b&d);g=i;}
      else if(group===1){f=(d&b)|(~d&c);g=(5*i+1)%16;}
      else if(group===2){f=b^c^d;g=(3*i+5)%16;}
      else {f=c^(b|~d);g=(7*i)%16;}
      var sum=(a+f+k[i]+words[g])|0,shift=shifts[group*4+i%4],rot=(sum<<shift)|(sum>>>(32-shift));
      a=d;d=c;c=b;b=(b+rot)|0;
    }
    h[0]=(h[0]+a)|0;h[1]=(h[1]+b)|0;h[2]=(h[2]+c)|0;h[3]=(h[3]+d)|0;
  }
  var out='';for(i=0;i<16;i++)out+=('0'+((h[Math.floor(i/4)]>>>(i%4*8))&255).toString(16)).slice(-2);return out;
}
function base64ascii(s) {
  var abc='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',out='';
  for(var i=0;i<s.length;i+=3){var a=s.charCodeAt(i),b=s.charCodeAt(i+1),c=s.charCodeAt(i+2);
    out+=abc[a>>>2]+abc[((a&3)<<4)|(isNaN(b)?0:b>>>4)]+(isNaN(b)?'=':abc[((b&15)<<2)|(isNaN(c)?0:c>>>6)])+(isNaN(c)?'=':abc[c&63]);}
  return out;
}
var QMSEED='d3dGiJc651gSQ8w1';
async function qmHeaders() {
  var id=await deviceId(),now=text(Date.now()),map={'+':'P','/':'X','0':'M','1':'U','2':'l','3':'E','4':'r','5':'Y','6':'W','7':'b','8':'d','9':'J','A':'9','B':'s','C':'a','D':'I','E':'0','F':'o','G':'y','H':'_','I':'H','J':'G','K':'i','L':'t','M':'g','N':'N','O':'A','P':'8','Q':'F','R':'k','S':'3','T':'h','U':'f','V':'R','W':'q','X':'C','Y':'4','Z':'p','a':'m','b':'B','c':'O','d':'u','e':'c','f':'6','g':'K','h':'x','i':'5','j':'T','k':'-','l':'2','m':'z','n':'S','o':'Z','p':'1','q':'V','r':'v','s':'j','t':'Q','u':'7','v':'D','w':'w','x':'n','y':'L','z':'e'};
  var payload={'static_score':'0.8','uuid':id,'device-id':md5(id)+md5(id+'device'),'sourceuid':id.slice(0,16),'refresh-type':'0','model':'22021211RC','client-id':id.slice(0,16),'brand':'Redmi','sys-ver':'12','phone-level':'H','wlb-uid':id.slice(0,16),'session-id':now};
  var qp=base64ascii(JSON.stringify(payload)).split('').map(function(c){return map[c]||c;}).join('');
  var signature=md5('AUTHORIZATION=app-version=10001application-id=com.duoduo.readchannel=unknownis-white=net-env=5platform=androidqm-params='+qp+'reg='+QMSEED);
  return {'net-env':'5','reg':'','channel':'unknown','is-white':'','platform':'android','application-id':'com.duoduo.read','authorization':'','app-version':'10001','User-Agent':'webviewversion/0','qm-params':qp,'sign':signature};
}
function qmData(r) {
  r=json(r);if(!r || !r.data)throw new Error('七貓回應失敗'+(r&&r.errors?'：'+text(r.errors.details||r.errors.title):r&&r.msg?'：'+r.msg:''));return r.data;
}
async function qmRequest(path,params) {
  var sorted=Object.keys(params).sort().map(function(k){return k+'='+params[k];}).join('');
  var q=Object.assign({},params,{sign:md5(sorted+QMSEED)});
  return qmData(await request(queryURL(path,q),undefined,await qmHeaders()));
}
function qmCard(x) {
  if(!x.playlet_id || !x.title)return null;
  return detailCard(SD.qmRead+'/player/api/v1/playlet/info?playlet_id='+numberId(x.playlet_id),x.title,x.image_link,x.intro,x.tags,x.total_episode_num,'七貓');
}
async function qimaoList(p) {
  p=p||{};if(pageNumber(p)>1)return [];
  var category=text(p.category||'0');if(!/^-?\d+$/.test(category))throw new Error('七貓分類不正確');
  var d=await qmRequest(SD.qm+'/api/v1/playlet/index',{tag_id:category,playlet_privacy:'1',operation:'1'});
  if(!Array.isArray(d.list))throw new Error('七貓回應沒有清單');return unique(d.list.map(qmCard));
}
async function qmDetail(id) {
  var d=await qmRequest(SD.qmRead+'/player/api/v1/playlet/info',{playlet_id:numberId(id)});
  // The detail response can omit playlet_id; preserve the requested identity.
  var card=qmCard(Object.assign({},d,{playlet_id:id}));
  if(!card)throw new Error('七貓沒有這部劇的資料');
  card.episodeItems=(d.play_list||[]).map(function(e){
    var u=videoURL(e.video_url);return u?playable(u,'第 '+text(e.sort)+' 集',e.sort,card.posterPath):null;
  }).filter(Boolean).sort(function(a,b){return (a.episode||0)-(b.episode||0);});
  card.description+='\n來源目前提供 '+card.episodeItems.length+' 集播放網址。';
  if(!card.episodeItems.length)throw new Error('七貓目前沒有提供本劇播放網址');return card;
}
async function starToken(force) {
  if(!force){var cache=await readStore('starAuth');if(cache&&cache.token&&cache.expires>Date.now())return cache.token;}
  var r=json(await request('https://u.shytkjgs.com/user/v1/account/login',
    {device:await deviceId()},{'User-Agent':'okhttp/4.10.0','platform':'1'}));
  var token=r&&r.data&&r.data.token;
  if(!token)throw new Error('星芽訪客登入失敗'+(r&&r.msg?'：'+r.msg:''));
  await writeStore('starAuth',{token:token,expires:Date.now()+3600000});return token;
}
async function starRequest(path,body) {
  for(var attempt=0;attempt<2;attempt++){
    var r=json(await request(path,body,{'authorization':await starToken(attempt>0),'User-Agent':'okhttp/4.10.0'}));
    if(r&&r.code==='Unauthorized'&&attempt===0)continue;
    if(!r||r.code!=='ok'||!r.data)throw new Error('星芽回應失敗'+(r&&r.msg?'：'+r.msg:''));
    return r.data;
  }
}
function starCard(x) {
  x=x.theater||x;if(!x.id||!x.title)return null;
  return detailCard(SD.star+'/v2/theater_parent/detail?theater_parent_id='+numberId(x.id),x.title,x.cover_url,x.introduction||x.descrip,x.theme,x.total,'星芽');
}
async function xingyaList(p) {
  p=p||{};var category=text(p.category||'1');if(!/^\d+$/.test(category))throw new Error('星芽分類不正確');
  var d=await starRequest(queryURL(SD.star+'/cloud/v2/theater/home_page',
    {theater_class_id:category,type:1,class2_ids:0,page_num:pageNumber(p),page_size:24}));
  if(!Array.isArray(d.list))throw new Error('星芽回應沒有清單');return unique(d.list.map(starCard));
}
async function starDetail(id) {
  var d=await starRequest(queryURL(SD.star+'/v2/theater_parent/detail',{theater_parent_id:numberId(id)}));
  var card=starCard(Object.assign({},d,{id:id}));if(!card)throw new Error('星芽沒有這部劇的資料');
  card.episodeItems=(d.theaters||[]).map(function(e){
    var u=videoURL(e.son_video_url);return u?playable(u,'第 '+text(e.num)+' 集',e.num,card.posterPath):null;
  }).filter(Boolean).sort(function(a,b){return (a.episode||0)-(b.episode||0);});
  card.description+='\n來源目前提供 '+card.episodeItems.length+' 集播放網址。';
  if(!card.episodeItems.length)throw new Error('星芽目前沒有提供本劇播放網址');return card;
}
async function loadDetail(link) {
  link=text(link);
  var xf=/^https:\/\/tube\.e\.kuaishou\.com\/mobile\/xifan\?tube_id=(\d+)&episode=(\d+)$/.exec(link);
  if(xf)return xifanDetail(xf[1],Number(xf[2]));
  if(/^https:\/\/hongguoduanju\.com\/detail\?series_id=\d+$/.test(link))return redDetail(link);
  if(/^https:\/\/hongguoduanju\.com\/player\/\d+\/\d+$/.test(link))return redEpisode(link);
  if(/^https:\/\/www\.kuaikaw\.cn\/drama\/\d+$/.test(link))return hemaDetail(link);
  var m=/^https:\/\/api-read\.qmplaylet\.com\/player\/api\/v1\/playlet\/info\?playlet_id=(\d+)$/.exec(link);
  if(m)return qmDetail(m[1]);
  m=/^https:\/\/app\.whjzjx\.cn\/v2\/theater_parent\/detail\?theater_parent_id=(\d+)$/.exec(link);
  if(m)return starDetail(m[1]);
  m=/^https:\/\/api\.drama\.9ddm\.com\/drama\/home\/shortVideoDetail\?oneId=(\d+)$/.exec(link);
  if(m)return weiguanDetail(m[1]);
  m=/^https:\/\/yo\.baidu\.com\/xcomic\/search\/search\?collection_id=([A-Za-z0-9_-]+)$/.exec(link);
  if(m)return youmanDetail(m[1]);
  m=/^https:\/\/haokan\.baidu\.com\/v\?vid=(\d+)&playlet_id=(\d+)(?:&episode=(\d+))?$/.exec(link);
  if(m)return m[3]?haokanEpisode(m[2],m[1],Number(m[3])):haokanDetail(m[2],m[1]);
  m=/^https:\/\/www\.iesdouyin\.com\/share\/playlet\/detail\/(\d+)\/(?:\?aweme_id=(\d+))?$/.exec(link);
  if(m)return m[2]?douyinEpisode(m[1],m[2]):douyinDetail(m[1]);
  throw new Error('不支援的短劇連結，請重新從本模組開啟');
}
async function searchSource(source,word,page) {
  if(source==='hongguo')return redSearch(word,page);
  if(source==='hema'){
    var d=json(await request(SD.hema+'/seo/video/6007',{sourceType:1,keyword:word,index:page,page:page},
      {'pname':'www.kuaikaw.cn','tmpid':(await deviceId()).slice(0,16),'Referer':queryURL(SD.hema+'/search',{searchValue:word}),'Origin':SD.hema}));
    if(!d||!d.data||!Array.isArray(d.data.bookList))throw new Error('河馬搜尋回應異常');
    return unique(d.data.bookList.map(hemaCard));
  }
  if(source==='qimao'){
    var q=await qmRequest(SD.qm+'/api/v1/playlet/search',{
      extend:'',page:text(page),read_preference:'0',track_id:md5((await deviceId())+'search'),wd:word});
    if(q.list==null && Object.prototype.hasOwnProperty.call(q,'is_list_have_results'))return [];
    if(!Array.isArray(q.list))throw new Error('七貓搜尋回應異常');
    return unique(q.list.map(function(row){
      return qmCard(Object.assign({},row,{playlet_id:row.playlet_id||row.id,
        title:text(row.title).replace(/<[^>]*>/g,''),total_episode_num:row.total_episode_num||row.total_num}));
    }));
  }
  if(source==='xingya'){
    // Search API has no verified pagination contract. Never repeat page 1.
    if(page>1)return [];
    var s=await starRequest(SD.star+'/v3/search',{text:word});
    var rows=s.theater&&s.theater.search_data || s.search_data || s.list;
    if(!Array.isArray(rows))throw new Error('星芽搜尋回應異常');return unique(rows.map(starCard));
  }
  if(source==='weiguan')return weiguanSearch(word,page,'');
  if(source==='youman')return page>1?[]:youmanSearch(word);
  throw new Error('搜尋來源不正確');
}
async function search(p) {
  p=p||{};var word=text(p.keyword||p.search||'').trim(),source=p.source||'all',page=pageNumber(p);
  if(!word)return [];
  var names={hongguo:'紅果',hema:'河馬',qimao:'七貓',xingya:'星芽',weiguan:'圍觀',youman:'柚漫劇'};
  if(source!=='all'&&!names[source])throw new Error('搜尋來源不正確');
  if(source!=='all')return searchSource(source,word,page);
  var sources=Object.keys(names),results=await Promise.all(sources.map(async function(s){
    try{return {items:await searchSource(s,word,page)};}catch(e){return {error:names[s]+'：'+text(e.message||e)};}
  }));
  var good=results.filter(function(r){return !r.error;});
  if(!good.length)throw new Error(results.map(function(r){return r.error;}).join('；'));
  var errors=results.filter(function(r){return r.error;}).map(function(r){return r.error;});
  var rows=unique([].concat.apply([],good.map(function(r){return r.items;})));
  if(errors.length){
    if(!rows.length)throw new Error('部分來源未完成搜尋：'+errors.join('；'));
    // Keep usable results and make partial failures visible in their descriptions.
    rows=rows.map(function(item){return Object.assign({},item,{description:item.description+'\n本次未完成搜尋：'+errors.join('；')});});
  }
  return rows;
}

async function redSearch(word,page) {
  var r=json(await request(queryURL(SD.red+'/api/search/result',{query:word,page:page})));
  // Public search can reject requests or require browser verification.
  // Do not try to bypass it or substitute unrelated search results.
  if(r && r.code)throw new Error('紅果搜尋暫不可用，請使用分類；來源訊息：'+text(r.message||r.code));
  var rows=r&&(r.searchList||r.series_list||r.list||r.data&&r.data.searchList);
  if(!Array.isArray(rows))throw new Error('紅果搜尋暫不可用，請使用分類或其他來源');
  return unique(rows.map(function(row){return redCard(row.video_data||row);}));
}

var HK={
  base:'https://sv.baidu.com',
  ua:'Mozilla/5.0 (Linux; Android 11) AppleWebKit/537.36 Chrome/131.0 Mobile Safari/537.36 haokan/7.80.0.18 Talos/1.8.7'
};
async function haokanRequest(path,form) {
  var pairs=Object.keys(form).map(function(k){return encodeURIComponent(k)+'='+encodeURIComponent(text(form[k]));});
  var r=json(await request(HK.base+path+'?osbranch=a0',pairs.join('&'),{
    'User-Agent':HK.ua,'Content-Type':'application/x-www-form-urlencoded; charset=utf-8',
    'Talos-Module-Version':'1.0.71.1','Talos-Module-Name':'shortDrama'}));
  if(r && r.status!==undefined && Number(r.status)!==0)throw new Error('好看回應失敗：'+text(r.msg||r.status));
  return r;
}
function haokanLink(book,vid,episode) {
  return 'https://haokan.baidu.com/v?vid='+numberId(vid)+'&playlet_id='+numberId(book)+(episode?'&episode='+episode:'');
}
async function haokanList(p) {
  p=p||{};var category=text(p.category||'3');if(!/^\d+$/.test(category))throw new Error('好看分類不正確');
  var r=await haokanRequest('/haokan/ui-feed/playletTagsFeed',{tag_id:category,rn:'9',pn:pageNumber(p)});
  var rows=r&&r.data&&r.data.list;if(!Array.isArray(rows))throw new Error('好看回應沒有分類清單');
  return unique(rows.map(function(x){
    // A real video ID from the source is required for reopening the series.
    // Never substitute preview_url for a complete episode.
    if(!x.playlet_id||!x.progress_vid||!x.playlet_title)return null;
    return detailCard(haokanLink(x.playlet_id,x.progress_vid),x.playlet_title,x.playlet_poster,
      x.description,Array.isArray(x.tags)?x.tags.join('／'):'',x.episodes_num,'好看');
  }));
}
async function haokanDetail(book,seed) {
  var r=await haokanRequest('/haokan/ui-video/playlet/rec/detail',{vid:numberId(seed),playlet_id:numberId(book)});
  var d=r&&r.data;if(!d||!Array.isArray(d.vid_list))throw new Error('好看目前沒有提供本劇分集目錄');
  if(text(d.playlet_id)!==text(book))throw new Error('好看回應的劇集 ID 不一致，已停止載入');
  var card=detailCard(haokanLink(book,seed),d.playlet_title,d.playlet_poster,d.description,d.tag_text,d.episodes_num,'好看');
  card.episodeItems=d.vid_list.map(function(vid,i){
    var url=haokanLink(book,vid,i+1);
    return {id:url,type:'detail',title:'第 '+(i+1)+' 集',episode:i+1,link:url,posterPath:card.posterPath,mediaType:'tv'};
  });
  if(!card.episodeItems.length)throw new Error('好看目前沒有提供本劇分集目錄');
  card.description+='\n來源提供 '+card.episodeItems.length+' 集目錄；逐集開啟時再取得播放網址。';
  return card;
}
function bestHaokanMedia(video) {
  var list=video.video_list||{},clarity=video.clarityUrl||[],hw=video.video_hw||{},variants=[];
  Object.keys(list).forEach(function(k){var size=hw[k]||{};
    variants.push({url:videoURL(list[k]),label:k==='sc'?'720p':k,width:size.width,height:size.height});
  });
  clarity.forEach(function(v){var size=text(v.vodVideoHW).split(/\$\$|[xX*×]/);
    variants.push({url:videoURL(v.url),label:v.key==='sc'?'720p':v.key||v.title,
      width:v.width||size[0],height:v.height||size[1],bitrate:v.videoBps});
  });
  variants.push({url:videoURL(video.video_src)},{url:videoURL(video.play_url)});
  return highestMedia(variants);
}
async function haokanEpisode(book,vid,episode) {
  var inner='method=post&vid='+numberId(vid)+'&immersive_mode=v4_5&tplname=feed_small_video&tag=playlet_talos&tab=detail&video_set_id='+numberId(book)+'&play_screen_type=1&play_volume_type=2&play_external_device_type=1';
  var r=await haokanRequest('/appui/api',{'video/relate':inner}),wrapper=r&&r['video/relate'];
  if(!wrapper||Number(wrapper.status)!==0)throw new Error('好看沒有提供本集播放資料');
  var v=wrapper.data&&wrapper.data.cur_video;
  if(!v||text(v.vid||v.id)!==text(vid))throw new Error('好看回應的分集 ID 不一致，已停止載入');
  var media=bestHaokanMedia(v);if(!media)throw new Error('好看沒有提供本集可用播放網址');
  return playable(media,v.title||('第 '+episode+' 集'),episode,v.poster||v.cover_src);
}

var WG='https://api.drama.9ddm.com';
async function weiguanRequest(path,params,body) {
  var common={version_code:'1600',version_name:'1.6.0',device_name:'PJA110',device_type:'phone',
    is_first_day:'false',is_first_24h:'false',app_launch_way:'icon',default_homepage:'drama_library',
    device_owning_firm:'OnePlus',font_scale:'default',os_type:'1',clientInfo:md5(await deviceId())};
  var result=json(await request(queryURL(WG+path,Object.assign(common,params||{})),body,
    {'User-Agent':'okhttp/5.1.0','Content-Type':'application/json;charset=utf-8'}));
  if(!result||Number(result.code)!==200)throw new Error('圍觀回應失敗'+(result&&result.msg?'：'+result.msg:''));
  return result;
}
function weiguanCard(x) {
  if(!x.oneId||!x.title)return null;
  return detailCard(WG+'/drama/home/shortVideoDetail?oneId='+numberId(x.oneId),x.title,
    x.vertPoster||x.horzPoster,x.description,Array.isArray(x.shortPlayTag)?x.shortPlayTag.join('／'):'',x.episodeCount,'圍觀');
}
async function weiguanSearch(word,page,category) {
  var r=await weiguanRequest('/drama/home/search',{},
    {audience:'',page:page,pageSize:30,searchWord:word,subject:category||''});
  if(!Array.isArray(r.data))throw new Error('圍觀回應沒有清單');
  return unique(r.data.map(weiguanCard));
}
async function weiguanList(p) {
  p=p||{};return weiguanSearch('',pageNumber(p),text(p.category||''));
}
function bestWeiguanMedia(choices) {
  if(!Array.isArray(choices))return '';
  return highestMedia(choices.map(function(x){return {url:x.url,label:x.name,width:x.width,height:x.height,bitrate:x.bitrate||x.bitRate};}));
}
async function weiguanDetail(id) {
  var r=await weiguanRequest('/drama/home/shortVideoDetail',{oneId:numberId(id),page:1,pageSize:1000});
  if(!Array.isArray(r.data)||!r.data.length)throw new Error('圍觀目前沒有提供本劇分集資料，請稍後重試');
  if(r.oneId&&text(r.oneId)!==text(id))throw new Error('圍觀回應的劇集 ID 不一致，已停止載入');
  var first=r.data[0],url=WG+'/drama/home/shortVideoDetail?oneId='+id;
  var card=detailCard(url,r.title||first.title,r.vertPoster||first.vertPoster,r.description,
    Array.isArray(r.shortPlayTag)?r.shortPlayTag.join('／'):'',r.totalEpisodeCount||r.data.length,'圍觀');
  card.episodeItems=r.data.map(function(e){
    var media=bestWeiguanMedia(e.videoClarityList||[]);
    return media?playable(media,'第 '+text(e.playOrder)+' 集',e.playOrder,card.posterPath):null;
  }).filter(Boolean).sort(function(a,b){return (a.episode||0)-(b.episode||0);});
  if(!card.episodeItems.length)throw new Error('圍觀目前沒有提供本劇可用播放網址');
  card.description+='\n來源目前提供 '+card.episodeItems.length+' 集播放網址。';return card;
}

var YM={base:'https://yo.baidu.com',cache:{}};
function parseYoumanScheme(scheme){
  if(typeof scheme!=='string'||scheme.indexOf('newxcomic://video/invokeVideoDetail?')!==0)return null;
  var m=/[?&]params=([^&]+)/.exec(scheme);if(!m)return null;
  try{return JSON.parse(decodeURIComponent(m[1].replace(/\+/g,' ')));}catch(_){return null;}
}
function youmanRecord(row,word){
  var d=row&&row.data,id=d&&text(d.collection_id);
  if(!d||d.type!=='comic'||d.origin_website||!id||!/^[A-Za-z0-9_-]{1,128}$/.test(id)||!d.title||!Array.isArray(d.play_list))return null;
  var eps=d.play_list.map(function(entry){
    if(entry.disabled||entry.skipped)return null;
    var p=parseYoumanScheme(entry.scheme),info=p&&p.videoInfo;
    if(!info)return null;
    var media=bestHaokanMedia(info),index=Number(entry.btn_text);
    if(!media||!Number.isInteger(index)||index<1)return null;
    return playable(media,p.title||('第 '+index+' 集'),index,d.image);
  }).filter(Boolean).sort(function(a,b){return a.episode-b.episode;});
  eps=unique(eps);
  if(!eps.length)return null;
  var url=YM.base+'/xcomic/search/search?collection_id='+id;
  var card=detailCard(url,d.title,d.image,d.description,d.image_tag,'','柚漫劇');
  card.description+='\n搜尋接口提供 '+eps.length+' 個公開分集入口（第 '+eps.map(function(e){return e.episode;}).join('、')+' 集），不是完整劇集目錄。';
  return {card:card,episodes:eps,created:Date.now(),word:word};
}
async function youmanSearch(word){
  word=text(word).trim();if(!word)return [];
  if(word.length>200)throw new Error('柚漫劇搜尋詞過長');
  var r=json(await request(YM.base+'/xcomic/search/search',{
    word:word,search_input_type:'text',cuid:'',isIncognito:'1',source:'search',is_repeat_search:'0'
  },{'User-Agent':'Mozilla/5.0 (Linux; Android 11) newxcomic/1.9.0.10'}));
  if(!r||Number(r.errno)!==0||!r.data||!Array.isArray(r.data.items))throw new Error('柚漫劇搜尋回應失敗');
  // Bound the in-memory catalogue; no third-party source code or app account is stored.
  var keys=Object.keys(YM.cache);
  if(keys.length>40)YM.cache={};
  var records=r.data.items.map(function(row){return youmanRecord(row,word);}).filter(Boolean);
  records.forEach(function(record){YM.cache[record.card.id]=record;});
  var queries=await readStore('youmanQueries')||{};
  records.forEach(function(record){queries[record.card.id]=word;});
  var ids=Object.keys(queries);while(ids.length>100)delete queries[ids.shift()];
  await writeStore('youmanQueries',queries);
  return unique(records.map(function(record){return record.card;}));
}
async function youmanList(p){
  return youmanSearch(text(p&&p.keyword||'玄幻').trim()||'玄幻');
}
async function youmanDetail(id){
  var url=YM.base+'/xcomic/search/search?collection_id='+id;
  var record=YM.cache[url];
  if(!record||Date.now()-record.created>60000){
    var queries=await readStore('youmanQueries')||{},word=record&&record.word||queries[url];
    if(!word)throw new Error('請先在柚漫劇重新搜尋本劇，再開啟分集');
    await youmanSearch(word);record=YM.cache[url];
  }
  if(!record)throw new Error('這部柚漫劇已不在目前搜尋結果，請重新搜尋');
  return Object.assign({},record.card,{episodeItems:record.episodes});
}

// Local result cache shared by all nine sources. Signed media-bearing results
// expire sooner than lists; rejected requests and partial search failures do not
// become cache hits. Data stays in Rex storage and is invalidated on updates.
var SDCACHE={entries:{},pending:{},ready:null,writes:Promise.resolve(),maxEntries:60,maxChars:350000};
function cacheArguments(value){
  if(Array.isArray(value))return value.map(cacheArguments);
  if(value&&typeof value==='object'){
    var out={};Object.keys(value).sort().forEach(function(k){
      if(value[k]!==undefined)out[k]=cacheArguments(value[k]);
    });return out;
  }
  return value===undefined?null:value;
}
function cacheCopy(value){return JSON.parse(JSON.stringify(value));}
async function resultCacheReady(){
  if(!SDCACHE.ready)SDCACHE.ready=(async function(){
    try{
      var raw=await Widget.storage.get(SD.storePrefix+'resultCache');
      var saved=raw?json(raw):null;
      if(saved&&saved.version===WidgetMetadata.version&&saved.entries&&typeof saved.entries==='object'&&!Array.isArray(saved.entries))
        SDCACHE.entries=saved.entries;
    }catch(_){}
  })();
  await SDCACHE.ready;
}
async function saveResultCache(){
  var now=Date.now();
  Object.keys(SDCACHE.entries).forEach(function(k){if(!SDCACHE.entries[k]||SDCACHE.entries[k].expires<=now)delete SDCACHE.entries[k];});
  var keys=Object.keys(SDCACHE.entries).sort(function(a,b){return SDCACHE.entries[a].created-SDCACHE.entries[b].created;});
  while(keys.length>SDCACHE.maxEntries)delete SDCACHE.entries[keys.shift()];
  var data=JSON.stringify({version:WidgetMetadata.version,entries:SDCACHE.entries});
  while(data.length>SDCACHE.maxChars&&keys.length){
    delete SDCACHE.entries[keys.shift()];data=JSON.stringify({version:WidgetMetadata.version,entries:SDCACHE.entries});
  }
  SDCACHE.writes=SDCACHE.writes.catch(function(){}).then(async function(){
    try{await Widget.storage.set(SD.storePrefix+'resultCache',data);}catch(_){}
  });
  await SDCACHE.writes;
}
function withResultCache(name,fn,seconds){
  return async function(params){
    await resultCacheReady();
    var key=name+':'+md5(JSON.stringify(cacheArguments(params))),now=Date.now(),entry=SDCACHE.entries[key];
    if(entry&&entry.created<=now&&entry.expires>now&&entry.expires<=now+seconds*1000)return cacheCopy(entry.value);
    if(SDCACHE.pending[key])return cacheCopy(await SDCACHE.pending[key]);
    var work=(async function(){
      var result=await fn(params);
      var partial=Array.isArray(result)&&result.some(function(x){return x&&/未完成搜尋/.test(text(x.description));});
      if(result!==undefined&&result!==null&&!partial){
        var copy=cacheCopy(result),created=Date.now();
        SDCACHE.entries[key]={created:created,expires:created+seconds*1000,value:copy};
        await saveResultCache();
      }
      return result;
    })();
    SDCACHE.pending[key]=work;
    try{return cacheCopy(await work);}finally{delete SDCACHE.pending[key];}
  };
}
hongguoList=withResultCache('hongguoList',hongguoList,300);
hemaList=withResultCache('hemaList',hemaList,300);
qimaoList=withResultCache('qimaoList',qimaoList,300);
xingyaList=withResultCache('xingyaList',xingyaList,300);
haokanList=withResultCache('haokanList',haokanList,300);
weiguanList=withResultCache('weiguanList',weiguanList,300);
youmanList=withResultCache('youmanList',youmanList,300);
douyinList=withResultCache('douyinList',douyinList,300);
xifanList=withResultCache('xifanList',xifanList,300);
search=withResultCache('search',search,300);
loadDetail=withResultCache('loadDetail',loadDetail,60);
loadResource=withResultCache('loadResource',loadResource,60);
redEpisode=withResultCache('redEpisode',redEpisode,60);
