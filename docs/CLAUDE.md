# E.E.S.T. Foundation - Website Projekt

## Projektübersicht
Statische HTML/CSS/JS-Website der E.E.S.T. Foundation, gehostet auf GitHub Pages.
- **Repository:** vorstand-eest/foundation
- **Live-URL:** https://vorstand-eest.github.io/foundation/
- **Alte WordPress-Seite:** https://eestfoundation.website-love.de/

## Namenskonventionen

### Schreibweisen
- **Löwenpark** — großes L, Rest klein (nicht LÖWENPARK, nicht löwenpark)
- **E.E.S.T. Foundation e.S.** — "e." klein, "S." groß (eingetragene Stiftung)
- **Bahnhofstr.** — abgekürzt wegen internationaler Kompatibilität (kein ß)
- **Global EduPals** — CamelCase

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
| Home | index.html | Mehrfarbig (E.E.S.T.) | Fertig |
| Löwenpark | loewenpark.html | Blau (#0086e6) | Fertig |
| Umwelt & Natur | umwelt-und-natur.html | Grün (#46a244) | Fertig |
| International | international.html | Lila (#7b2fcc) | Fertig |
| Wer sind wir? | wer-sind-wir.html | Blau (#0086e6) | Fertig |
| Spenden | spenden.html | — | Platzhalter, wird später |
| Impressum | impressum.html | — | Platzhalter, wird später |
| Datenschutz | datenschutz.html | — | Platzhalter, wird später |

## Farbsystem (aus dem Basketball-Logo)

| Bereich | Farbe | Hex | Verwendung |
|---|---|---|---|
| Education / Löwenpark | Blau | #0086e6 | Subheadings, Divider, Icons, Nav-Active |
| Environment / Umwelt | Grün | #46a244 | Subheadings, Divider, Icons, Nav-Active |
| Sport | Orange | #F38314 | Icons, Homepage-Karten |
| Tolerance / International | Lila | #7b2fcc | Subheadings, Divider, Icons, Nav-Active |
| Primary (Buttons) | Blau | #0187E7 | CTA-Buttons allgemein |
| Footer-Hintergrund | Grau | #35494c | Aus Logo "FOUNDATION" Schriftfarbe |

## Schriften
- **Headings:** Urbanist (weight 500)
- **Body:** Open Sans (Regular)
- **Buttons/Nav:** Poppins (weight 500)

## Typografie
- H1: 72px (Hero), global nicht definiert
- H2: 45px (global)
- H3: 28px
- Body: 16px, line-height 1.8, Farbe #666

## Seitenlayout-Muster

### Projektseiten (Löwenpark, Umwelt, International)
1. **Hero-Bild mit Overlay:** Subheading (Projektfarbe) + H1 (weiß) + Untertitel + "Unterstützen"-Button (rechts, Projektfarbe)
2. **Content-Sektion:** Bild links/rechts + Text mit Subheading (Projektfarbe) + H2 + Divider (Projektfarbe)
3. **Content-Hero (optional):** Vollbreites Bild mit dunklem Overlay + weißer Text

### Navigation
- Aktive Seite: Blau (#0086e6)
- "Was machen wir?" wechselt Farbe je nach Unterseite (Blau/Grün/Lila)
- Dropdown-Hover: individuelle Projektfarben

### Footer
- Hintergrund: #35494c
- Animiertes Logo-GIF (logo-footer.gif), 77% Breite
- Alle Links in Grau (#999), kein Blau
- Spenden-Button: Outline-Stil (weißer Rand, transparent)
- "Designed with Love by LogoLove" unter Impressum/Datenschutz

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
- IBAN: DE26 3706 0193 5002 9410 09
- BIC: GENODED1PAX (Pax-Bank e.G.)

## Technisches
- Kontakt: E-Mail-Link im Footer (kein Kontaktformular)
- Spendenformular: PayPal-Integration (PayPal-ID noch einzutragen)
- Favicon: favicon.svg (Basketball-Icon aus Logo)
- Kein Google Maps, kein Cookie-Banner (noch)
- Responsive: Desktop (1200px+), Tablet (768-1199px), Mobile (bis 767px)

## Noch offen
- [ ] Spendenseite finalisieren (PayPal-ID eintragen)
- [ ] Impressum mit echtem Rechtstext füllen
- [ ] Datenschutz mit echtem Rechtstext füllen
- [ ] Foto Dr. Charles Löhnitz
- [ ] SPORT VERNETZT Seite (später)
- [ ] Cookie-Banner (falls benötigt)
- [ ] Responsive Feinschliff nach allen Änderungen
