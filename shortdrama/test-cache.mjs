import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const code=fs.readFileSync(new URL('./ShortDrama.js',import.meta.url),'utf8');
let clock=1800000000000;
class TestDate extends Date {static now(){return clock;}}
function engine(store=new Map(),broken=false){
  const c={Date:TestDate,Widget:{storage:{
    get:async k=>{if(broken)throw Error('storage unavailable');return store.get(k);},
    set:async(k,v)=>{if(broken)throw Error('storage unavailable');store.set(k,v);}
  }}};
  vm.createContext(c);vm.runInContext(code,c);return c;
}
const store=new Map(),c=engine(store);
assert.equal(c.WidgetMetadata.detailCacheDuration,60);
assert.equal(c.WidgetMetadata.modules.filter(m=>m.type!=='stream').length,9);
for(const m of c.WidgetMetadata.modules)assert.equal(m.cacheDuration,m.type==='stream'?60:300);
let calls=0;
const list=c.withResultCache('test.list',async p=>{calls++;return [{id:String(p.page),title:'test'}];},300);
const first=await list({page:1,category:'a'});first[0].title='mutated by client';
assert.equal((await list({category:'a',page:1}))[0].title,'test');
assert.equal(calls,1,'equivalent parameters reuse cached data without leaking caller mutations');
await list({page:2,category:'a'});assert.equal(calls,2,'pages stay separate');
const restarted=engine(store);
assert.equal((await restarted.withResultCache('test.list',async()=>{throw Error('unexpected fetch');},300)({page:1,category:'a'}))[0].title,'test');
clock+=300001;await list({page:1,category:'a'});assert.equal(calls,3,'expired lists fetch again');
let mediaCalls=0;
const media=c.withResultCache('test.media',async()=>({videoUrl:'https://test.invalid/'+(++mediaCalls)}),60);
await media('ep1');clock+=59000;await media('ep1');assert.equal(mediaCalls,1);
clock+=1001;await media('ep1');assert.equal(mediaCalls,2,'media results expire after 60 seconds');
let failedCalls=0;
const failure=c.withResultCache('test.error',async()=>{failedCalls++;throw Error('source unavailable');},300);
await assert.rejects(failure('same'),/source unavailable/);await assert.rejects(failure('same'),/source unavailable/);
assert.equal(failedCalls,2,'request errors are never cached');
let partialCalls=0;
const partial=c.withResultCache('test.partial',async()=>{partialCalls++;return [{description:'未完成搜尋：來源逾時'}];},300);
await partial('same');await partial('same');assert.equal(partialCalls,2,'partial search failures are retried');
let release,started;
const gate=new Promise(r=>{release=r;});const ready=new Promise(r=>{started=r;});let simultaneous=0;
const parallel=c.withResultCache('test.concurrent',async()=>{simultaneous++;started();await gate;return [{id:'ok'}];},300);
const one=parallel('same'),two=parallel('same');await ready;release();await Promise.all([one,two]);
assert.equal(simultaneous,1,'concurrent identical requests share one fetch');
let unsupportedCalls=0;
const withoutStorage=engine(new Map(),true).withResultCache('test.noStorage',async()=>{unsupportedCalls++;return [{id:'ok'}];},300);
await withoutStorage(1);await withoutStorage(1);assert.equal(unsupportedCalls,1,'storage failures preserve usable in-memory caching');
await c.withResultCache('test.large',async()=>({description:'x'.repeat(400000)}),300)(1);
for(const raw of store.values())assert.ok(raw.length<=c.SDCACHE.maxChars,'persistent cache has a size bound');
for(let i=0;i<70;i++)await list({page:i+10});
assert.ok(Object.keys(c.SDCACHE.entries).length<=60,'persistent cache has an entry bound');
const key=c.SD.storePrefix+'resultCache',saved=JSON.parse(store.get(key));saved.version='previous-version';store.set(key,JSON.stringify(saved));
let upgradedCalls=0;await engine(store).withResultCache('test.list',async()=>{upgradedCalls++;return [];},300)({page:79});
assert.equal(upgradedCalls,1,'module updates invalidate previous cache versions');
console.log('Cache checks passed: nine sources, parameter/page isolation, expiry, restart persistence, version invalidation, concurrent requests, errors, mutation isolation, storage failure, and size bounds.');
