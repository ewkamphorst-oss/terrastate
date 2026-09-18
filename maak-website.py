#!/usr/bin/env python3
"""Maakt play.html en romaterra.html voor de website uit de nieuwste solo-builds.

Gebruik (vanuit de map WEBSITE):
    python maak-website.py <pad naar Terrastate public/solo.html> <pad naar Romaterra public/solo.html>

Zet daarna VERSION in sw.js één hoger en upload play.html, romaterra.html en sw.js naar GitHub.
"""
import sys, re, zipfile, os
if len(sys.argv) < 3:
    print(__doc__); sys.exit(1)
MP_URL = ''  # '' = live wereld nog niet open; anders 'https://live.playterrastate.nl'
JOBS = [('play.html', sys.argv[1], 'Terrastate', 'terrastate', '#0d1420'),
        ('romaterra.html', sys.argv[2], 'Romaterra', 'romaterra', '#1a1410')]
for out, src, title, g, col in JOBS:
    s = open(src, encoding='utf-8').read()
    t = '<title>%s</title>' % title
    assert s.count(t) == 1, 'titel niet gevonden in ' + src
    head = (t + '\n<link rel="manifest" href="%s.webmanifest"><meta name="theme-color" content="%s">'
            '<link rel="icon" href="icons/%s-64.png"><link rel="apple-touch-icon" href="icons/%s-180.png">\n'
            "<script>window.__MP_URL__='%s'; /* '' = live multiplayer not open yet */ "
            "if('serviceWorker' in navigator)addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));</script>") % (g, col, g, g, MP_URL)
    open(out, 'w', encoding='utf-8').write('<!doctype html><html lang="en">\n' + s.replace(t, head) + '\n</html>')
    os.makedirs('ITCH', exist_ok=True)
    with zipfile.ZipFile('ITCH/%s-itch.zip' % g, 'w', zipfile.ZIP_DEFLATED) as z:
        z.writestr('index.html', '<!doctype html><html lang="en">\n' + s.replace(t, t + "\n<script>window.__MP_URL__='%s';</script>" % MP_URL) + '\n</html>')
    print('geschreven:', out, 'en ITCH/%s-itch.zip' % g)
# versie in sw.js tonen als herinnering
m = re.search(r"VERSION='([^']+)'", open('sw.js', encoding='utf-8').read())
print('Vergeet niet: VERSION in sw.js verhogen (nu: %s)' % (m.group(1) if m else '?'))
