# 由草稿的 RexHome-vN.rex 生成发布用的 RexHome.rex：
# 去掉包内的明文脚本，首页各行改为读取 main 上的加密 rex-home.js。
import json
import sys
import zipfile

src_path, dst_path, widget_url = sys.argv[1:4]
src = zipfile.ZipFile(src_path)
names = src.namelist()
if 'rex-layout.json' not in names:
    sys.exit('::error::草稿 .rex 缺少 rex-layout.json')

layout = json.loads(src.read('rex-layout.json'))
pointed = 0
for row in layout:
    for item in row.get('items', []):
        if item.get('widgetURL'):
            item['widgetURL'] = widget_url
            pointed += 1
if not pointed:
    sys.exit('::error::草稿 .rex 里没有任何行使用 Rex首页 模块')

out = zipfile.ZipFile(dst_path, 'w', zipfile.ZIP_DEFLATED)
for info in src.infolist():
    if info.filename.startswith('rex-scripts/'):
        continue
    data = src.read(info.filename)
    if info.filename == 'rex-layout.json':
        data = json.dumps(layout, ensure_ascii=False, indent=2).encode('utf-8')
    entry = zipfile.ZipInfo(info.filename, date_time=info.date_time)
    entry.compress_type = zipfile.ZIP_DEFLATED
    out.writestr(entry, data)
out.close()

check = zipfile.ZipFile(dst_path)
if check.testzip() is not None or any(n.startswith('rex-scripts/') for n in check.namelist()):
    sys.exit('::error::RexHome.rex 生成异常')
print(f'RexHome.rex：{len(layout)} 行，其中 {pointed} 行指向 {widget_url}，不含明文脚本')
