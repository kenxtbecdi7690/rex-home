// Offline public-response fixtures; these do not establish live source availability.
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const code=fs.readFileSync(new URL('./ShortDrama.js',import.meta.url),'utf8');
const media='https://media.test/public-1080p.mp4';
const red={series_id:'11',series_name:'测试',vid_list:['21'],accessible_episode_cnt:1,episode_cnt:1};
const hema={bookId:'31',bookName:'测试',bookTypeThree:[],totalChapterNum:1};
const qm={playlet_id:'41',title:'测试',total_episode_num:1};
const star={id:'51',title:'测试',total:1};
const wg={oneId:'61',title:'测试',episodeCount:1};
const dyid='7608061313389955115';
const dy={aweme_id:'81',playlet_info:{playlet_id:dyid,statis:{current_episode:1}},is_charge_series:0,status:{},video:{vid:'v1',play_addr_h264:{uri:'v1',url_list:[media],width:1080,height:1920}}};
const xfs={tubeId:'91',episodeNum:1};
const xfLink='https://tube.e.kuaishou.com/mobile/xifan?detail='+encodeURIComponent(Buffer.from(JSON.stringify(xfs)).toString('base64'))+'&sign='+'0'.repeat(32);
const ymScheme='newxcomic://video/invokeVideoDetail?params='+encodeURIComponent(JSON.stringify({title:'测试',videoInfo:{video_list:{'1080p':media}}}));
const router=loader=>'window._ROUTER_DATA='+JSON.stringify({loaderData:{page:loader}})+';';
const next=props=>'<script id="__NEXT_DATA__">'+JSON.stringify({props:{pageProps:props}})+'</script>';
function fixture(url,body){
  const u=new URL(url);
  if(u.hostname==='hongguoduanju.com'){
    if(u.pathname.startsWith('/category/'))return router({recommendList:[red],pagination:{totalPages:2}});
    if(u.pathname==='/api/search/result')return {searchList:[red]};
    if(u.pathname==='/detail')return router({seriesDetail:red});
    if(u.pathname==='/player/11/21')return router({seriesDetail:red,vid:'21',publicVideoSeo:{available:true}})+'<script type="application/ld+json">'+JSON.stringify({contentUrl:media})+'</script>';
  }
  if(u.hostname==='www.kuaikaw.cn'){
    if(u.pathname.startsWith('/browse/'))return next({bookList:[hema],pages:2});
    if(u.pathname==='/drama/31')return next({bookInfoVo:hema,chapterList:[{chapterName:'第 1 集',chapterIndex:1,isCharge:0,chapterVideoVo:{mp41080p:media}},{chapterName:'paid',chapterIndex:2,isCharge:1,chapterVideoVo:{mp41080p:'https://media.test/paid.mp4'}}]});
    if(u.pathname==='/seo/video/6007')return {data:{bookList:[hema]}};
  }
  if(u.hostname.endsWith('.qmplaylet.com')){
    assert.ok(u.searchParams.get('sign'),'client checksum is supplied');
    if(u.pathname==='/api/v1/playlet/index'||u.pathname==='/api/v1/playlet/search')return {data:{list:[qm]}};
    if(u.pathname==='/player/api/v1/playlet/info')return {data:{...qm,play_list:[{sort:1,video_url:media}]}};
  }
  if(u.hostname==='u.shytkjgs.com'){
    assert.equal(Object.keys(body).join(','),'device');assert.match(body.device,/^[a-f0-9]{32}$/);
    return {data:{token:'fixture-guest-token'}};
  }
  if(u.hostname==='app.whjzjx.cn'){
    if(u.pathname==='/cloud/v2/theater/home_page')return {code:'ok',data:{list:[star]}};
    if(u.pathname==='/v2/theater_parent/detail')return {code:'ok',data:{...star,theaters:[{num:1,son_video_url:media}]}};
    if(u.pathname==='/v3/search')return {code:'ok',data:{search_data:[star]}};
  }
  if(u.hostname==='sv.baidu.com'){
    const form=new URLSearchParams(body);
    if(u.pathname==='/haokan/ui-feed/playletTagsFeed')return {status:0,data:{list:[{playlet_id:'71',progress_vid:'72',playlet_title:'测试',episodes_num:1}]}};
    if(u.pathname==='/haokan/ui-video/playlet/rec/detail')return {data:{playlet_id:'71',playlet_title:'测试',vid_list:['72'],episodes_num:1}};
    if(u.pathname==='/appui/api'){
      assert.ok(form.get('video/relate').includes('vid=72'));
      return {'video/relate':{status:0,data:{cur_video:{vid:'72',title:'测试',video_list:{'1080p':media}}}}};
    }
  }
  if(u.hostname==='api.drama.9ddm.com'){
    if(u.pathname==='/drama/home/search')return {code:200,data:[wg]};
    if(u.pathname==='/drama/home/shortVideoDetail')return {code:200,oneId:'61',title:'测试',data:[{playOrder:1,videoClarityList:[{name:'1080P',url:media}]}]};
  }
  if(u.hostname==='yo.baidu.com')return {errno:0,data:{items:[{data:{collection_id:'comic1',type:'comic',title:'测试',play_list:[{btn_text:'1',scheme:ymScheme}]}}]}};
  if(u.hostname==='www.iesdouyin.com'){
    if(u.pathname==='/web/api/playlet/detail/')return {status_code:0,playlet_info:{playlet_id:dyid,playlet_name:'测试',total_episode:1,is_charge_series:0}};
    if(u.pathname==='/web/api/playlet/item/list/')return {status_code:0,aweme_list:[dy],has_more:false};
  }
  if(u.hostname==='aweme.snssdk.com')return {status_code:0,aweme_list:[dy]};
  if(u.hostname==='tube.e.kuaishou.com')return {result:1,data:{tubeInfo:{tubeId:'91',name:'测试',totalEpisodeCount:1},tubeEpisodeList:[{tubeEpisode:{tubeId:'91',episodeNumber:1,free:1},videoInfo:{manifest:{adaptationSet:[{contentType:'video',representation:[{url:media,width:1080,height:1920}]}]}}}]}};
  throw Error('Unexpected fixture request: '+u.hostname+u.pathname);
}
function engine(){
  const store=new Map(),requests=[];
  const respond=async(url,body,options)=>{requests.push({url,body,options});return {statusCode:200,data:fixture(url,body)};};
  const c={Widget:{http:{get:(u,o)=>respond(u,undefined,o),post:respond},storage:{get:async k=>store.get(k),set:async(k,v)=>store.set(k,v)}}};
  vm.createContext(c);vm.runInContext(code,c);return {c,requests};
}
function validItems(items){assert.ok(Array.isArray(items));assert.ok(items.length);for(const x of items){assert.ok(x.id);assert.ok(x.title);assert.ok(['detail','url'].includes(x.type));}}
const metadata=engine().c.WidgetMetadata;
let options=0,details=0,searches=0;
for(const m of metadata.modules.filter(m=>m.type!=='stream')){
  const defaults=Object.fromEntries((m.params||[]).map(p=>[p.name,p.value]));if(m.id==='xifan')defaults.link=xfLink;
  const cases=[defaults];
  for(const p of m.params||[])for(const o of p.enumOptions||[])if(o.value!==p.value)cases.push({...defaults,[p.name]:o.value});
  for(const params of cases){
    const {c,requests}=engine();const rows=await c[m.functionName](params);validItems(rows);options++;
    const before=requests.length;assert.deepEqual(await c[m.functionName]({...params}),rows);assert.equal(requests.length,before,'cached source list must not request again');
  }
  const {c}=engine();const row=(await c[m.functionName](defaults))[0];
  const detail=await c.loadDetail(row.link);assert.ok(detail.title);details++;
  const episodes=detail.episodeItems||[detail];validItems(episodes);
  assert.equal(episodes.length,1,'fixture supplies exactly one public episode');
  const first=episodes[0];
  let url=first.videoUrl;
  if(!url&&first.link)url=(await c.loadDetail(first.link)).videoUrl;
  assert.equal(url,media,m.id+' public episode URL');
}
for(const source of ['hongguo','hema','qimao','xingya','weiguan','youman','all']){
  const {c}=engine();validItems(await c.search({keyword:'测试',source,page:'1'}));searches++;
}
console.log('Source fixtures passed: nine sources, '+options+' default/category runs with real cache wrappers, '+details+' detail/playback flows, '+searches+' search modes. Nested detail simulation does not verify Rex player dispatch.');
