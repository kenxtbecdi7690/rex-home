#!/usr/bin/env python3
"""Build phone and Mac .rex homepage packages from Rex module files.

Usage: build_rex.py TITLE OUT_DIR module1.js [module2.js ...]
Each list function of each module becomes one fullWidthPoster row (titled "module · function" when several modules); modules are bundled in rex-scripts/.
Needs node (to read WidgetMetadata).
"""
import json, os, subprocess, sys, uuid, zipfile

title, out = sys.argv[1], sys.argv[2]
mods = sys.argv[3:]
os.makedirs(out, exist_ok=True)

def meta(path):
    js = 'const s=require("fs").readFileSync(process.argv[1],"utf8");console.log(JSON.stringify(new Function(s+";return WidgetMetadata")()))'
    return json.loads(subprocess.check_output(['node', '-e', js, path]))

def mac_json(v):
    return json.dumps(v, ensure_ascii=False, separators=(',', ':')).replace('/', '\\/').encode()

def uid(key):
    return str(uuid.uuid5(uuid.NAMESPACE_URL, title + ':' + key)).upper()

def rows(mac):
    out_rows = []
    for path in mods:
        md, name = meta(path), os.path.basename(path)
        for m in md['modules']:
            if m.get('type') in ('stream', 'danmu', 'subtitle'):
                continue
            label = m['title'] if len(mods) == 1 else md['title'] + ' · ' + m['title']
            params = [{'key': p['name'], 'value': '1' if p['type'] == 'page' else str(p.get('value', ''))} for p in m.get('params', [])]
            item = {'style': 'fullWidthPoster', 'count': 0, 'gridSize': [-1, 3.2 if mac else 2.3], 'id': uid(md['id'] + m['id']),
                    'title': label, 'subtitle': '', 'iconUrl': '', 'functionId': m['functionName'], 'params': params,
                    'widgetBundleId': md['id'], 'widgetId': md['id'], 'widgetURL': 'file:///' + name, 'name': md['title']}
            out_rows.append({'id': uid(md['id'] + m['id'] + 'row'), 'title': label, 'isActive': True, 'items': [item]})
    return out_rows

for mac in (False, True):
    path = os.path.join(out, title + ('-Mac' if mac else '') + '.rex')
    z = zipfile.ZipFile(path, 'w', zipfile.ZIP_DEFLATED)
    files = [('rex-manifest.json', mac_json({'format': 'video.fika.rex.home-package', 'version': 1})),
             ('rex-layout.json', mac_json(rows(mac))),
             ('rex-home.json', mac_json({'avatar': 'avatar-22', 'isIndependent': False, 'title': title + ('（Mac）' if mac else '')}))]
    files += [('rex-scripts/' + os.path.basename(p), open(p, 'rb').read()) for p in mods]
    for name, data in files:
        e = zipfile.ZipInfo(name, date_time=(2026, 1, 1, 0, 0, 0))
        e.compress_type, e.create_system, e.external_attr = zipfile.ZIP_DEFLATED, 3, 0o100644 << 16
        z.writestr(e, data)
    z.close()
    print(path)
