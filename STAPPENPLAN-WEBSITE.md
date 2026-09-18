# Terrastate en Romaterra gratis online zetten (solo), stap voor stap

Wat je krijgt: een website met de landingspagina en beide solo-spellen, gratis gehost bij GitHub Pages,
installeerbaar als app op telefoon en desktop, en offline speelbaar. Geen server, geen VPS, geen kosten
behalve een domeinnaam (die mag ook later).

De map die je online zet is deze map `WEBSITE`. Inhoud:

    index.html               landingspagina
    play.html                Terrastate solo
    romaterra.html           Romaterra solo
    sw.js                    maakt de site installeerbaar en offline speelbaar
    terrastate.webmanifest   app-gegevens (naam, icoon) voor Terrastate
    romaterra.webmanifest    idem voor Romaterra
    icons/  img/             iconen en schermafbeeldingen
    .nojekyll                vertelt GitHub Pages: gewoon de bestanden serveren

---

## Deel 1, gratis online via GitHub Pages (15 minuten)

1. Ga naar github.com, log in (of maak een gratis account).
2. Klik rechtsboven op het plusje, "New repository". Naam: `terrastate`. Zet hem op **Public**
   (Pages is gratis voor openbare repositories). Klik "Create repository".
3. Klik "uploading an existing file". Open op je computer de map `WEBSITE`, selecteer ALLES wat erin zit
   (ook de mappen icons en img en het bestand .nojekyll) en sleep het in het uploadvak.
   Wacht tot de grote bestanden geladen zijn (play.html en romaterra.html zijn elk 1,5 MB).
   Klik onderaan op "Commit changes".
4. In de repository: tabblad **Settings**, links **Pages**. Bij "Source" kies "Deploy from a branch",
   branch `main`, map `/ (root)`. Klik Save.
5. Na een minuut staat bovenaan een adres, iets als `https://JOUWNAAM.github.io/terrastate/`.
   Open het: de landingspagina, en "Play Terrastate" werkt.

Klaar. Dit adres kun je meteen delen. Alles hieronder is optioneel.

## Deel 2, een eigen domein erop (later, als je wilt)

Bij TransIP (of waar je domein staat) hoef je alleen DNS-records aan te maken. Geen hosting nodig.

Plan: `playterrastate.nl` wordt de site (landingspagina + solo, gratis via GitHub Pages). Komt volgend jaar de
multiplayer op de VPS, dan krijgt die `live.playterrastate.nl` (één extra A-record naar de VPS); de site blijft waar hij is.

1. In GitHub: Settings, Pages, veld "Custom domain": vul `playterrastate.nl` in. Klik Save. GitHub maakt dan
   zelf een bestand `CNAME` in je repository.
2. Bij TransIP, DNS-instellingen van het domein, voeg toe:
   - Voor `playterrastate.nl` zelf: vier **A**-records met naam `@` naar
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153` en `185.199.111.153`.
   - Voor `www`: een **CNAME**-record met naam `www` naar `JOUWNAAM.github.io.`
   (Controleer deze adressen even in de GitHub-documentatie "Managing a custom domain for your GitHub
   Pages site"; ze zijn al jaren hetzelfde, maar het kost dertig seconden om te checken.)
3. Wacht tot een uur. Vink in GitHub bij Pages "Enforce HTTPS" aan zodra dat kan.

## Deel 3, de multiplayer koppelen (volgend jaar, als de VPS er is)

De solo-spellen tonen nu geen "Join the live world"-knop, want de live wereld is er nog niet.
Zodra de multiplayer op `live.playterrastate.nl` draait:

1. Open `play.html` en `romaterra.html` in een teksteditor (Kladblok werkt).
2. Zoek bovenin de regel `window.__MP_URL__=''` en maak ervan `window.__MP_URL__='https://live.playterrastate.nl'`.
   (Voor Romaterra het Romaterra-adres.)
3. Open `sw.js`, verhoog het versienummer in `VERSION` (bijvoorbeeld v3.35), zodat spelers de nieuwe versie krijgen.
4. Upload de drie bestanden opnieuw naar GitHub (Add file, Upload files, overschrijven). Klaar: de knop
   "Join the live world" verschijnt vanzelf in het spel en neemt de naam en doctrine van de speler mee.

## Nieuwe versie van het spel online zetten

1. Laat mij (of doe het zelf) een nieuwe `play.html` / `romaterra.html` maken uit `public/solo.html` van de
   nieuwste build, met bovenin dezelfde regels (manifest, icoon, `__MP_URL__`, service worker).
   Het bestand `maak-website.py` in deze map doet dat automatisch.
2. Verhoog `VERSION` in `sw.js`.
3. Upload de gewijzigde bestanden naar GitHub. Binnen een minuut staat het live; spelers die de app
   geïnstalleerd hebben krijgen de nieuwe versie bij de volgende start.

## itch.io (optioneel, extra vindbaarheid)

In de map `ITCH` staan `terrastate-itch.zip` en `romaterra-itch.zip`: precies wat itch.io wil (een zip
met `index.html` in de hoofdmap, zonder service worker). Bij het uploaden: "Kind of project: HTML",
vink "This file will be played in the browser" aan, viewport 1280 x 800, "Fullscreen button" aan,
"Mobile friendly" aan. Zet in de beschrijving een link naar je eigen site.

## Goed om te weten

- Spelers bewaren hun spel in hun eigen browser (en kunnen het exporteren via Instellingen). Er komt
  niets bij jou terecht; er valt dus ook niets te beheren of te beveiligen.
- Bezoekersaantallen: GitHub geeft die niet. Wil je dat weten, dan kan een privacyvriendelijke teller
  (bijvoorbeeld GoatCounter, gratis) met één regel in index.html. Zeg het maar.
- Alles is gratis en blijft gratis; GitHub Pages heeft een zachte grens van 100 GB verkeer per maand,
  dat is honderdduizenden spelsessies.
