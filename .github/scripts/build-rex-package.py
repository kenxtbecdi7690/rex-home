# 由草稿的 RexHome-vN.rex 生成发布用的首页包：
# 去掉包内的明文脚本，首页各行改为读取 main 上的加密 rex-home.js。
# 写法照 Mac 版 Rex 导出的 .rex：manifest → layout → home、紧凑 JSON（/ 写成 \/）、
# rex-home.json 栏位顺序 avatar、avatarData、isIndependent、title（没有自订头像就不写 avatarData）、档案属性 0644。
# 用法：build-rex-package.py 草稿.rex RexHome.rex 模块网址 [RexHome-Mac.rex]
import copy
import json
import sys
import zipfile

src_path, dst_path, widget_url = sys.argv[1:4]
mac_path = sys.argv[4] if len(sys.argv) > 4 else None

src = zipfile.ZipFile(src_path)
names = src.namelist()
for need in ('rex-manifest.json', 'rex-layout.json', 'rex-home.json'):
    if need not in names:
        sys.exit(f'::error::草稿 .rex 缺少 {need}')

layout = json.loads(src.read('rex-layout.json'))
pointed = 0
for row in layout:
    for item in row.get('items', []):
        if item.get('widgetURL'):
            item['widgetURL'] = widget_url
            pointed += 1
if not pointed:
    sys.exit('::error::草稿 .rex 里没有任何行使用 Rex首页 模块')

home_src = json.loads(src.read('rex-home.json'))
stamp = src.getinfo('rex-layout.json').date_time  # 固定时间：同一份草稿每次打包结果相同


def mac_json(value):
    return json.dumps(value, ensure_ascii=False, separators=(',', ':')).replace('/', '\\/').encode('utf-8')


def mac_home(title):
    home = {'avatar': home_src.get('avatar') or 'avatar-22'}
    if home_src.get('avatarData'):
        home['avatarData'] = home_src['avatarData']
    home['isIndependent'] = bool(home_src.get('isIndependent'))
    home['title'] = title
    return home


def write(path, rows, home):
    out = zipfile.ZipFile(path, 'w', zipfile.ZIP_DEFLATED)
    for name, data in (('rex-manifest.json', mac_json({'format': 'video.fika.rex.home-package', 'version': 1})),
                       ('rex-layout.json', mac_json(rows)),
                       ('rex-home.json', mac_json(home))):
        entry = zipfile.ZipInfo(name, date_time=stamp)
        entry.compress_type = zipfile.ZIP_DEFLATED
        entry.create_system = 3
        entry.external_attr = 0o100644 << 16
        out.writestr(entry, data)
    out.close()
    check = zipfile.ZipFile(path)
    if check.testzip() is not None or check.namelist() != ['rex-manifest.json', 'rex-layout.json', 'rex-home.json']:
        sys.exit(f'::error::{path} 生成异常')


title = home_src.get('title') or 'Rex首页'
write(dst_path, layout, mac_home(title))
print(f'{dst_path}：{len(layout)} 行，其中 {pointed} 行指向 {widget_url}，不含明文脚本（Mac 写法）')

if mac_path:
    # Mac 中尺寸：只放大全宽行（gridSize 第一格 -1）的高度，一行多格的不变
    grow = {'banner': (3, 3.8), 'fullWidthPoster': (2.3, 3.2), 'fullWidthBackdrop': (1.5, 2.2),
            'backdropFeature': (2, 2.8), 'fullWidthWatchProgress': (2, 2.8)}
    mac_rows = copy.deepcopy(layout)
    for row in mac_rows:
        for item in row.get('items', []):
            size, rule = item.get('gridSize'), grow.get(item.get('style'))
            if rule and isinstance(size, list) and len(size) == 2 and size[0] == -1 and isinstance(size[1], (int, float)):
                item['gridSize'] = [-1, rule[1] if size[1] == rule[0] else round(size[1] + rule[1] - rule[0], 1)]
    write(mac_path, mac_rows, mac_home(title + '（Mac）'))
    print(f'{mac_path}：Mac 中尺寸，{len(mac_rows)} 行')
