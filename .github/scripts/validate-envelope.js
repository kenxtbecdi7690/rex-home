// 校验 Rex 加密信封，规则与 rex-widget-libs encrypt.ts 的 validateEncryptEnvelope 相同
const fs = require('fs');

const text = fs.readFileSync(process.argv[2], 'utf8');
const lines = text.split('\n');
const b64 = (s) => Buffer.from(s || '', 'base64');
const fail = (msg) => {
  console.error(`::error::加密结果校验失败：${msg}`);
  process.exit(1);
};

if (lines.length !== 3) fail(`行数应为 3，实际 ${lines.length}`);
if (lines[0] !== 'REXENC') fail('第1行不是 REXENC');

let header;
try {
  header = JSON.parse(lines[1]);
} catch {
  fail('第2行不是合法 JSON');
}
if (header.v !== 2) fail(`v 应为 2，实际 ${header.v}`);
if (header.mkv !== 'rex-1') fail(`mkv 应为 rex-1，实际 ${header.mkv}`);
if (header.alg !== 'A256GCM') fail(`alg 应为 A256GCM，实际 ${header.alg}`);
if (b64(header.iv).length !== 12) fail('iv 解码后不是 12 字节');
if (b64(header.kb).length !== 60) fail('kb 解码后不是 60 字节');
if (b64(lines[2]).length <= 16) fail('第3行密文解码后不大于 16 字节');

console.log(`校验通过：${Buffer.byteLength(text)} 字节`);
