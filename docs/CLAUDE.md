# E.E.S.T. Foundation - Website Projekt

## Projektübersicht
Statische HTML/CSS/JS-Website der E.E.S.T. Foundation, gehostet auf GitHub Pages.
- **Repository:** vorstand-eest/foundation
- **Live-URL:** https://eest.foundation
- **Domain:** eest.foundation (DNS bei Regfish, CNAME im Repo)

## Namenskonventionen

### Schreibweisen
- **Löwenpark** — großes L, Rest klein (nicht LÖWENPARK, nicht löwenpark)
- **E.E.S.T. Foundation e.S.** — "e." klein, "S." groß (eingetragene Stiftung)
- **Bahnhofstr.** — abgekürzt wegen internationaler Kompatibilität (kein ß)
- **Global EduPals** — CamelCase
- **Schrägstrich:** kein Leerzeichen davor, Leerzeichen danach (z.B. "Haftungsausschluss/ Haftung für Inhalte")
- **Paragrafenzeichen:** ohne Leerzeichen vor Nummer (z.B. §5, §§8)

### Dateinamen (HTML)
- Alles Kleinbuchstaben, Bindestriche als Trenner
- Seitenname möglichst kurz: `loewenpark.html`, `international.html`

### Dateinamen (Bilder)
- Schema: `{seitenname}-{beschreibung}.{ext}`
- Hero-Bilder: `{seite}-hero.jpg`
- Beispiele: `loewenpark-spieler.jpg`, `umwelt-hero.jpg`, `team-marko.png`

## Seitenstruktur

| Seite | Datei | Farbthema | Status |
|---|---|---|---|
| Home | index.html | Blau (#0086e6) für Subheadings | Fertig |
| Löwenpark | loewenpark.html | Blau (#0086e6) | Fertig |
| Umwelt & Natur | umwelt-und-natur.html | Grün (#46a244) | Fertig |
| International | international.html | Lila (#7b2fcc) | Fertig |
| Wer sind wir? | wer-sind-wir.html | Blau (#0086e6) | Fertig |
| Spenden | spenden.html | Orange (#F38314) | Fertig (PayPal-ID fehlt) |
| Impressum | impressum.html | Blau (#0086e6) | Fertig |
| Datenschutz | datenschutz.html | Blau (#0086e6) | Fertig |

## Farbsystem (aus dem Basketball-Logo)

| Bereich | Farbe | Hex | Verwendung |
|---|---|---|---|
| Education / Löwenpark | Blau | #0086e6 | Subheadings, Divider, Icons, Nav-Active |
| Environment / Umwelt | Grün | #46a244 | Subheadings, Divider, Icons, Nav-Active |
| Sport | Orange | #F38314 | Icons, Homepage-Karten, Spendenseite |
| Tolerance / International | Lila | #7b2fcc | Subheadings, Divider, Icons, Nav-Active |
| Primary (Buttons) | Blau | #0187E7 | CTA-Buttons allgemein |
| Footer-Hintergrund | Grau | #35494c | Aus Logo "FOUNDATION" Schriftfarbe |

## Schriften (selbst gehostet, kein Google Fonts)
- **Headings:** Urbanist (weight 500-600) — `fonts/urbanist.woff2`
- **Body:** Open Sans (weight 400) — `fonts/opensans.woff2`
- **Buttons/Nav:** Poppins (weight 500-600) — `fonts/poppins-500.woff2`, `fonts/poppins-600.woff2`
- Alle Fonts lokal in `/fonts/`, keine externen Verbindungen

## Typografie
- H1: 72px (Hero), global nicht definiert
- H2: 45px (global)
- H3: 28px
- Body: 16px, line-height 1.8, Farbe #666

## Seitenlayout-Muster

### Projektseiten (Löwenpark, Umwelt, International)
1. **Hero-Bild mit Overlay:** Subheading (Projektfarbe) + H1 (weiß) + Untertitel + "Unterstützen"-Button (rechts, Outline-Stil)
2. **Content-Sektion:** Bild links/rechts (stretch) + Text mit Subheading (Projektfarbe) + H2 + Divider (Projektfarbe)
3. **Content-Hero (optional):** Vollbreites Bild mit dunklem Overlay + weißer Text
4. **"Unterstützen"-Links** leiten auf `spenden.html?projekt={name}` weiter

### Spendenseite
- Hero: sanftes Orange (6% Opacity)
- Links: Beträge (50/100/200/500/1000 + individuell) + Intervall-Dropdown
- Rechts: Projekt-Dropdown + Spendenbescheinigung (Akkordeon) + PayPal-Button (Orange)
- URL-Parameter `?projekt=` setzt Projekt-Dropdown automatisch

### Navigation
- Aktive Seite: Blau (#0086e6)
- "Was machen wir?" wechselt Farbe je nach Unterseite (Blau/Grün/Lila)
- Dropdown-Hover: individuelle Projektfarben
- Mobile: Hamburger-Menü, Spenden-Button transparent mit orangem Rand

### Footer (zwei Zeilen)
- **Obere Zeile:** Logo (77%, animiertes GIF) + Text | Links | Projekte | Kontakt
- **Trennlinie:** dezentes Dunkelgrau (15% Opacity)
- **Untere Zeile:** Impressum/Datenschutz/Designed with Love | Spendenkonto (über 2 Spalten) | Spenden-Button
- Hintergrund: #35494c
- Nicht-verlinkte Texte: weiß, Links: #999, Hover: weiß
- Spenden-Button: Outline-Stil (weißer Rand, transparent)
- Mobile: Reihenfolge Spenden-Button → Spendenkonto → Impressum

### Impressum / Datenschutz
- Zweispaltig (Impressum), Einspaltig (Datenschutz)
- Blauer Divider (#0086e6)

## Team
- **Marko** — Stifter
- **Carine** — Kuratoriumsvorsitzende
- **Florian** — Kuratoriumsvorsitzender
- **Dr. Charles Löhnitz** — Kuratoriumsmitglied (noch kein Foto)

## Externe Links
- Basketball Löwen Erfurt: https://basketball-loewen.com/
- Löwenpark-Projekt: https://basketball-loewen.com/verein/loewenpark/
- Global EduPals: https://globaledupals.de/
- JustOn GmbH: https://juston.com/
- LogoLove: https://www.logolove.de

## Kontaktdaten
- E-Mail: vorstand@eest.foundation
- Adresse: E.E.S.T. Foundation e.S., Bahnhofstr. 16, 99085 Erfurt
- Sitz der Stiftung: Erfurt
- Steuernummer: 151/ 141/ 05519
- IBAN: DE74 8204 0000 0102 1971 00
- BIC: COBADEFFXXX

## Technisches
- Kontakt: E-Mail-Link im Footer (kein Kontaktformular, kein Formsubmit)
- Spendenformular: PayPal-Integration (PayPal-ID noch einzutragen)
- Favicon: favicon.svg (Basketball-Icon aus Logo)
- Fonts: selbst gehostet in `/fonts/` (kein Google Fonts)
- Kein Google Maps, keine Cookies, kein Cookie-Banner
- Responsive: Desktop (1200px+), Tablet (768-1199px), Mobile (bis 767px)

## Noch offen
- [ ] PayPal Business-ID eintragen (spenden.html)
