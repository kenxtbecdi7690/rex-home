/* Rex 短劇彈幕 0.2.1 — 相容彈彈play API 的可設定客戶端。
 * 需要使用者填入可用的服務地址。沒有內建私人伺服器或共享密鑰。
 * 實際支援的平台、劇名及集數，取決於填入的彈幕服務。
 */
var WidgetMetadata={
  id:'bolin.shortdrama.danmu',title:'短劇彈幕・自訂 API',author:'柏霖',version:'0.2.1',requiredVersion:'0.0.1',
  description:'先填寫相容彈彈play的服務地址，再搜尋劇名及選擇分集。來源覆蓋由服務決定。',
  globalParams:[{name:'baseURL',title:'彈幕 API 地址',type:'input',value:'',
    description:'填入服務根地址，可包含服務的存取路徑；亦接受結尾為 /api/v2 的地址。'}],
  modules:[
    {id:'searchDanmu',type:'danmu',title:'搜尋短劇彈幕',functionName:'searchDanmu',cacheDuration:60},
    {id:'getDetail',type:'danmu',title:'取得分集',functionName:'getDetail',cacheDuration:300},
    {id:'getComments',type:'danmu',title:'載入彈幕',functionName:'getComments',cacheDuration:60}
  ]
};
function danmuBase(p){
  var base=String(p&&p.baseURL||'').trim().replace(/\/+$/,'').replace(/\/api\/v2$/i,'');
  if(!base)throw new Error('請先在此彈幕模組設定「彈幕 API 地址」');
  if(!/^https?:\/\/[^\s/?#@]+(?:\/[^\s?#]*)?$/i.test(base))
    throw new Error('彈幕 API 地址須為 HTTP／HTTPS 根地址，不能包含查詢參數、片段或帳密');
  return base;
}
function danmuId(id){
  if(typeof id!=='string'&&typeof id!=='number')throw new Error('請重新選擇劇集或分集');
  var s=String(id);if(!s||s.length>2000)throw new Error('彈幕 ID 不正確');return s;
}
async function danmuGet(p,path,query){
  var base=danmuBase(p),pairs=[];
  Object.keys(query||{}).forEach(function(k){pairs.push(encodeURIComponent(k)+'='+encodeURIComponent(String(query[k])));});
  var url=base+'/api/v2/'+path+(pairs.length?'?'+pairs.join('&'):'');
  var response;
  try{response=await Widget.http.get(url,{headers:{'Accept':'application/json'}});}
  catch(_){throw new Error('無法連接彈幕服務，請檢查地址與網路');}
  var status=Number(response.statusCode||response.status||200);
  if(status<200||status>=300)throw new Error('彈幕服務回覆 HTTP '+status);
  var body=response.data;
  if(typeof body==='string'){
    try{body=JSON.parse(body);}catch(_){throw new Error('彈幕服務沒有回傳 JSON，請確認 API 地址');}
  }
  if(!body||typeof body!=='object'||body.success===false)throw new Error('彈幕服務回報失敗，請檢查服務狀態或存取權限');
  return body;
}
async function searchDanmu(p){
  p=p||{};var title=String(p.seriesName||p.title||'').trim();
  // Validate configuration even before an empty search, so missing setup is clear.
  danmuBase(p);
  if(!title)return {animes:[]};
  var body=await danmuGet(p,'search/anime',{keyword:title,anime:title});
  var rows=body.animes||(body.data&&body.data.animes);
  if(!Array.isArray(rows))throw new Error('彈幕搜尋回應缺少 animes 清單');
  var seen={};return {animes:rows.map(function(row){
    var id=row.animeId!==undefined?row.animeId:row.bangumiId;
    if(id===undefined||id===null||!row.animeTitle)return null;
    id=danmuId(id);if(seen[id])return null;seen[id]=true;
    var result={animeId:id,animeTitle:String(row.animeTitle)};
    if(row.bangumiId!==undefined&&row.bangumiId!==null)result.bangumiId=danmuId(row.bangumiId);
    return result;
  }).filter(Boolean)};
}
async function getDetail(p){
  p=p||{};var id=danmuId(p.animeId!==undefined?p.animeId:p.bangumiId);
  var body=await danmuGet(p,'bangumi/'+encodeURIComponent(id));
  var bangumi=body.bangumi||(body.data&&body.data.bangumi)||body;
  if(!Array.isArray(bangumi.episodes))throw new Error('彈幕服務沒有回傳分集清單');
  var seen={};return bangumi.episodes.map(function(row){
    var id=row.episodeId!==undefined?row.episodeId:row.commentId;
    if(id===undefined||id===null)return null;
    id=danmuId(id);if(seen[id])return null;seen[id]=true;
    return {episodeId:id,episodeTitle:String(row.episodeTitle||row.title||'未命名分集')};
  }).filter(Boolean);
}
function danmuColor(value){
  var n;
  if(typeof value==='string'&&/^#[a-f0-9]{6}$/i.test(value))n=parseInt(value.slice(1),16);
  else if(typeof value==='string'&&/^0x[a-f0-9]{1,6}$/i.test(value))n=parseInt(value.slice(2),16);
  else if(value===''||value===null||value===undefined)return null;
  else n=Number(value);
  return isFinite(n)&&n>=0&&n<=16777215&&Math.floor(n)===n?n:null;
}
function normalizeDanmu(rows){
  var result=[],seen={};
  rows.slice(0,100000).forEach(function(row){
    var time,mode,color,user='',message;
    if(Array.isArray(row)){
      if(row.length<5)return;time=Number(row[0]);
      var positions={'right':1,'scroll':1,'rtl':1,'top':5,'bottom':4,'1':1,'4':4,'5':5};
      mode=positions[String(row[1]).toLowerCase()];color=danmuColor(row[2]);message=row[4];
    }else if(row&&typeof row==='object'&&typeof row.p==='string'){
      var parts=row.p.split(',');if(parts.length<4)return;
      time=Number(parts[0]);mode=Number(parts[1]);
      color=danmuColor(parts.length>=8?parts[3]:parts[2]);
      user=String(parts.length>=8?parts[6]:parts[3]).replace(/,/g,'');message=row.m;
    }else return;
    if(!isFinite(time)||time<0||[1,4,5].indexOf(mode)<0||color===null||typeof message!=='string'||!message.trim())return;
    var stamp=Math.round(time*1000),key=stamp+'|'+mode+'|'+color+'|'+message;
    if(seen[key])return;seen[key]=true;
    var out={p:(stamp/1000)+','+mode+','+color+','+user,m:message};
    if(row.cid!==undefined)out.cid=row.cid;
    result.push(out);
  });
  result.sort(function(a,b){return Number(a.p.split(',')[0])-Number(b.p.split(',')[0]);});
  return result;
}
async function getComments(p){
  p=p||{};var id=danmuId(p.commentId!==undefined?p.commentId:p.episodeId);
  var body=await danmuGet(p,'comment/'+encodeURIComponent(id),{format:'json'});
  var rows=body.comments||(body.data&&body.data.comments);
  if(!Array.isArray(rows))throw new Error('彈幕服務沒有回傳 comments 清單');
  var comments=normalizeDanmu(rows);
  return {count:comments.length,comments:comments};
}
