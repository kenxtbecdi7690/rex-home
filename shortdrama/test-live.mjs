// Opt-in network smoke test: one list/detail/media sample per chosen source.
// It creates only an ephemeral guest session, never reads personal credentials,
// never writes runtime tokens or signed media URLs to the report, and never retries.
// Usage: node shortdrama/test-live.mjs hongguo hema qimao xingya haokan
import fs from 'node:fs/promises';
import vm from 'node:vm';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import os from 'node:os';
import path from 'node:path';
const run=promisify(execFile),store=new Map();
async function http(url,body,options={},media=false){
  const dir=await fs.mkdtemp(path.join(os.tmpdir(),'shortdrama-http-'));
  try{
    const headers=path.join(dir,'headers'),data=path.join(dir,'data');
    const args=['--silent','--show-error','--location','--connect-timeout','10','--max-time','25','--max-filesize',media?'65536':'8000000','--dump-header',headers,'--output',data];
    for(const [k,v] of Object.entries(options.headers||{}))args.push('--header',k+': '+v);
    if(body!==undefined)args.push('--data',typeof body==='string'?body:JSON.stringify(body));
    if(media)args.push('--range','0-4095');
    args.push(url);
    try{await run('curl',args,{maxBuffer:100000});}catch(e){throw Error('network request failed (curl '+(e.code||'error')+')');}
    const raw=await fs.readFile(headers,'utf8'),buffer=await fs.readFile(data);
    const statuses=[...raw.matchAll(/^HTTP\/[^ ]+ (\d+)/gm)];
    const status=Number(statuses.at(-1)?.[1]||0);
    return {statusCode:status,data:media?buffer:buffer.toString('utf8')};
  }finally{await fs.rm(dir,{recursive:true,force:true});}
}
const c={Widget:{storage:{get:async k=>store.get(k),set:async(k,v)=>store.set(k,v)},http:{get:(u,o)=>http(u,undefined,o),post:http}}};
vm.createContext(c);vm.runInContext(await fs.readFile(new URL('./ShortDrama.js',import.meta.url),'utf8'),c);
const sources=process.argv.slice(2);
if(!sources.length)throw Error('Choose sources explicitly; no network tests run by default.');
const report={version:c.WidgetMetadata.version,checkedAt:new Date().toISOString(),rexDevice:'not verified',sources:{}};
for(const source of sources){
  const record=report.sources[source]={};
  try{
    const m=c.WidgetMetadata.modules.find(x=>x.id===source&&x.type!=='stream');if(!m)throw Error('unknown source');
    const params=Object.fromEntries((m.params||[]).map(p=>[p.name,p.value]));
    if(source==='xifan'&&!params.link){record.skipped='requires a fresh official share link';continue;}
    const items=await c[m.functionName](params);record.list=items.length;if(!items.length)throw Error('source returned an empty list');
    const detail=await c.loadDetail(items[0].link);record.title=detail.title;
    const episodes=detail.episodeItems||[detail];record.episodes=episodes.length;
    const first=episodes[0];let media=first.videoUrl;
    if(!media&&source==='hongguo')media=(await c.loadResource({link:first.link,id:first.id}))[0]?.url;
    if(!media&&first.link)media=(await c.loadDetail(first.link)).videoUrl;
    if(!media)throw Error('no public first-episode media URL');
    const response=await http(media,undefined,{},true),b=response.data;
    record.mediaHTTP=response.statusCode;record.mediaBytes=b.length;
    record.mediaHeader=b.subarray(0,64).toString().includes('#EXTM3U')?'HLS':b.subarray(4,8).toString()==='ftyp'?'MP4':'unknown';
    record.mediaVerified=[200,206].includes(response.statusCode)&&['HLS','MP4'].includes(record.mediaHeader);
    if(source==='hongguo'&&episodes[1]){
      try{const lines=await c.loadResource({link:episodes[1].link});record.secondEpisodeRoute=lines[0]?.url?'public URL resolved':'no public URL';}
      catch(e){record.secondEpisodeRoute=String(e.message).replace(/https?:\/\/\S+/g,'[URL omitted]');}
    }
  }catch(e){record.error=String(e.message).replace(/https?:\/\/\S+/g,'[URL omitted]');}
  console.log(JSON.stringify({source,...record}));
}
await fs.writeFile(new URL('./verification-live.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log('Live smoke report saved. Media probes are not full playback or Rex device validation.');
