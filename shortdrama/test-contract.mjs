import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
const code=fs.readFileSync(new URL('./ShortDrama.js',import.meta.url),'utf8');
let clock=1800000000000;
class TestDate extends Date {static now(){return clock;}}
const html=loader=>'window._ROUTER_DATA='+JSON.stringify({loaderData:{page:loader}})+';';
const series={series_id:'11',series_name:'测试剧',series_cover:'https://image.test/cover.jpg',vid_list:['21','22'],accessible_episode_cnt:2,episode_cnt:2};
const player=(available=true,vid='21')=>html({seriesDetail:series,vid,publicVideoSeo:{available,width:360,height:640}})+'<script type="application/ld+json">'+JSON.stringify({contentUrl:'https://media.test/'+vid+'.mp4'})+'</script>';
function engine(respond=async()=>{throw Error('unexpected HTTP');}){
  const store=new Map(),calls=[];
  const c={Date:TestDate,Widget:{storage:{get:async k=>store.get(k),set:async(k,v)=>store.set(k,v)},http:{
    get:async(url,options)=>{calls.push({url,options});return {statusCode:200,data:await respond(url,undefined,options)};},
    post:async(url,body,options)=>{calls.push({url,body,options});return {statusCode:200,data:await respond(url,body,options)};}
  }}};
  vm.createContext(c);vm.runInContext(code,c);return {c,calls,store};
}
let failures=0,passed=0;
async function check(name,fn){try{await fn();passed++;console.log('PASS '+name);}catch(e){failures++;console.error('FAIL '+name+': '+e.message);}}
await check('collection, metadata and all homepage row references',async()=>{
  const {c}=engine(),m=c.WidgetMetadata;
  const manifest=JSON.parse(fs.readFileSync(new URL('./manifest.json',import.meta.url)));
  assert.equal(manifest.widgets.length,1);const w=manifest.widgets[0];
  for(const k of ['id','version','requiredVersion','title','description','author'])assert.equal(w[k],m[k],k);
  assert.ok(!code.includes('REXENC'));assert.ok(!m.modules.some(x=>x.type==='danmu'));
  assert.equal(m.modules.filter(x=>x.type!=='stream').length,9);
  assert.equal(m.search.cacheDuration,300,'Rex search TTL must be explicit');
  for(const entry of [...m.modules,m.search]){
    assert.equal(typeof c[entry.functionName],'function',entry.functionName);
    for(const p of entry.params||[]){
      assert.ok(!Object.hasOwn(p,'default'));
      if(p.enumOptions)assert.ok(p.enumOptions.some(o=>o.value===p.value));
      for(const label of [p.title,...(p.enumOptions||[]).map(o=>o.title)])
        assert.ok([...label].reduce((n,x)=>n+(x.charCodeAt(0)>255?2:1),0)<=24,'option label too wide: '+label);
    }
  }
  const home=JSON.parse(execFileSync('python',['-c','import zipfile,json,sys; z=zipfile.ZipFile(sys.argv[1]); assert z.testzip() is None; print(json.dumps({n:json.loads(z.read(n)) for n in z.namelist()}))',new URL('./iphone.rex',import.meta.url).pathname],{encoding:'utf8'}));
  assert.deepEqual(Object.keys(home),['rex-manifest.json','rex-layout.json','rex-home.json']);
  assert.equal(home['rex-manifest.json'].format,'video.fika.rex.home-package');
  assert.equal(home['rex-manifest.json'].version,1);
  assert.deepEqual(home['rex-layout.json'].map(r=>r.items[0].functionId),['hongguoList','qimaoList','hemaList','xingyaList','haokanList']);
  const ids=new Set();
  for(const row of home['rex-layout.json']){
    assert.ok(!ids.has(row.id));ids.add(row.id);assert.equal(row.isActive,true);
    for(const item of row.items){
      for(const k of ['style','count','gridSize','id','title','subtitle','iconUrl','functionId','params','widgetBundleId','widgetId','widgetURL','name'])assert.ok(Object.hasOwn(item,k),k);
      assert.ok(!ids.has(item.id));ids.add(item.id);
      assert.equal(item.widgetId,m.id);assert.equal(item.widgetBundleId,m.id);assert.equal(item.widgetURL,w.url);
      const entry=m.modules.find(e=>e.functionName===item.functionId);assert.ok(entry);
      assert.deepEqual(item.params,JSON.parse(JSON.stringify((entry.params||[]).map(p=>({key:p.name,value:p.value})))));
    }
  }
});
await check('red first preload, direct player resolver and no unrelated fallback',async()=>{
  const {c,calls}=engine(async url=>url.includes('/detail?')?html({seriesDetail:series}):player(true,url.endsWith('/22')?'22':'21'));
  const detail=await c.loadDetail(c.SD.red+'/detail?series_id=11');
  assert.equal(detail.episodeItems.length,2);assert.equal(detail.episodeItems[0].type,'url');
  assert.equal(detail.episodeItems[0].videoUrl,'https://media.test/21.mp4');
  assert.equal(calls.length,2,'opening detail must not load every player page');
  assert.equal((await c.loadResource({id:detail.episodeItems[1].id}))[0].url,'https://media.test/22.mp4');
  assert.equal((await c.loadResource({id:'https://unrelated.test/player/11/22'})).length,0);
  assert.equal(calls.length,3);
});
await check('red public availability must be literal true',async()=>{
  for(const flag of [false,'false',1,'true',null]){
    const {c}=engine(async()=>player(flag));
    await assert.rejects(c.loadResource({link:c.SD.red+'/player/11/21'}),/公開播放/);
  }
});
await check('red rejects wrong series, wrong episode and wrong detail identity',async()=>{
  let ctx=engine(async()=>player(true,'22')).c;
  await assert.rejects(ctx.loadResource({link:ctx.SD.red+'/player/11/21'}),/不一致/);
  ctx=engine(async()=>player()).c;
  await assert.rejects(ctx.loadResource({link:ctx.SD.red+'/player/99/21'}),/不一致/);
  ctx=engine(async()=>html({seriesDetail:{...series,series_id:'99'}})).c;
  await assert.rejects(ctx.loadDetail(ctx.SD.red+'/detail?series_id=11'),/不一致/);
});
await check('red failed preload can retry without caching the failure',async()=>{
  let attempts=0;
  const {c}=engine(async url=>url.includes('/detail?')?html({seriesDetail:series}):player(++attempts>1));
  const d=await c.loadDetail(c.SD.red+'/detail?series_id=11');
  assert.ok(!d.episodeItems[0].videoUrl);assert.match(d.description,/預載失敗/);
  assert.equal((await c.loadResource({link:d.episodeItems[0].link}))[0].url,'https://media.test/21.mp4');
});
await check('red cached player URL lifetime is not extended by detail/stream caches',async()=>{
  clock=1800000000000;const {c,calls}=engine(async()=>player());const link=c.SD.red+'/player/11/21';
  await c.loadDetail(link);clock+=59000;await c.loadResource({link});assert.equal(calls.length,1);
  clock+=2000;await c.loadResource({link});assert.equal(calls.length,2,'must refresh after original 60 seconds');
  clock+=59000;await c.loadDetail(link);assert.equal(calls.length,2);
  clock+=2000;await c.loadDetail(link);assert.equal(calls.length,3);
});
await check('red parent detail cannot extend the lifetime of an older first-episode URL',async()=>{
  clock=1800000000000;
  const {c,calls}=engine(async url=>url.includes('/detail?')?html({seriesDetail:series}):player());
  await c.loadResource({link:c.SD.red+'/player/11/21'});
  clock+=59000;await c.loadDetail(c.SD.red+'/detail?series_id=11');assert.equal(calls.length,2);
  clock+=2000;await c.loadDetail(c.SD.red+'/detail?series_id=11');assert.equal(calls.length,4);
});
await check('parallel visitor requests reuse a device ID and one guest login',async()=>{
  const {c,calls}=engine(async()=>{await new Promise(resolve=>setImmediate(resolve));return {data:{token:'test-guest-token'}};});
  const devices=await Promise.all([c.deviceId(),c.deviceId(),c.deviceId()]);assert.equal(new Set(devices).size,1);
  const tokens=await Promise.all([c.starToken(),c.starToken(),c.starToken()]);assert.equal(new Set(tokens).size,1);
  assert.equal(calls.length,1,'do not create multiple guest sessions concurrently');
  assert.ok(calls[0].url.startsWith('https://u.shytkjgs.com/'));
});
await check('hidden/protected tracks are excluded at manifest, adaptation and representation levels',async()=>{
  const {c}=engine();const rep={url:'https://media.test/track.mp4',width:2160,height:3840};
  for(const flag of ['hidden','drm','encryption']){
    const v={videoInfo:{manifest:{adaptationSet:[{contentType:'video',[flag]:true,representation:[rep]}]}}};
    assert.equal(c.xifanMedia(v),'','adaptation '+flag);
  }
  for(const flag of ['hidden','drm','encryption','need_set_token']){
    assert.equal(c.bestDouyinMedia({[flag]:true,play_addr:{url_list:[rep.url]}}),'','video '+flag);
    assert.equal(c.bestDouyinMedia({play_addr:{[flag]:true,url_list:[rep.url]}}),'','address '+flag);
  }
});
await check('expired Youman records cannot survive a search that removed them',async()=>{
  const {c}=engine(async()=>({errno:0,data:{items:[]}}));
  const url=c.YM.base+'/xcomic/search/search?collection_id=abc';
  c.YM.cache[url]={created:clock-61000,word:'测试',card:{id:url,title:'removed'},episodes:[{videoUrl:'https://media.test/old.mp4'}]};
  await assert.rejects(c.youmanDetail('abc'),/已不在/);
});
console.log('Contract checks: '+passed+' passed, '+failures+' failed.');
if(failures)process.exitCode=1;
