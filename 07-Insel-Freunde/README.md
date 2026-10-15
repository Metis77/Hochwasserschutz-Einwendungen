# 07 – Gegenseite: insel-freunde.de

Befürworter-Kampagnenseite „JA! zum geplanten Hochwasserschutz“ der „Interessengemeinschaft Insel-Freunde – Die Bewohner des Unteren Wöhrd“ (c/o Werftstraße 4). Hier liegt alles, was die Gegenseite betrifft: Analyse, Sicherungen der Seite, künftig Presse, Social Media, Schriftwechsel.

Namenskonvention wie in `03.1-Nachreichungen/`: ISO-Datum vorn, Snapshots als `snapshot-JJJJ-MM-TT/`.

## Inhalt

| Datei / Ordner | Was |
|---|---|
| [2026-10-13_Analyse-insel-freunde-de.md](2026-10-13_Analyse-insel-freunde-de.md) | Befund und Angriffspunkte: Steckbrief, formell (Datenschutz, Impressum, Repräsentationsanspruch), inhaltlich (10 Behauptungen gegen die Planunterlagen), Optionen. PDF daneben. |
| [snapshot-2026-10-13/](snapshot-2026-10-13/) | Erste Sicherung (Browser): HTML Startseite und Impressum, Volltext, Tracking-Skripte, Bilder, Netzwerk-Log |
| [snapshot-2026-10-15/](snapshot-2026-10-15/) | Zweite Sicherung (curl): HTML Startseite und Impressum, `events.js`, `flock.js`, `robots.txt`, `sitemap.xml`, Antwort-Header der Startseite |
| [instagram/](instagram/) | Screenshots der Instagram-Auftritte (Profil-Post der Insel-Freunde, Agentur-Profil), ISO-Datum vorn |
| [2026-10-15_hcwagner-com_Visitenkarte.jpg](2026-10-15_hcwagner-com_Visitenkarte.jpg), [2026-10-15_hcwagner-com_Flyer-Agentur.pdf](2026-10-15_hcwagner-com_Flyer-Agentur.pdf) | Gesamte öffentliche Website der PR-Agentur (ein Bild, ein Flyer von 2012), gesichert 15.10.2026 |
| FAQ-Entwurf als Antwort | liegt im Repo WebSite-Inhalte: `research/insel-freunde/faq-entwurf-befuerworter.md` (noch nicht in `seiten/faq.md` übernommen) |

## Chronik

| Datum | Ereignis | Beleg |
|---|---|---|
| 2026-10-13 | Seite online (Upload-Zeitstempel des OG-Bildes 13:08 UTC), erste Sicherung und Analyse | `snapshot-2026-10-13/` |
| 2026-10-14 (abends) | **Instagram-Account `insel.freunde.regensburg`** (Name „Insel-Freunde“, Link auf die Website, 1 Beitrag, 39 Follower, folgt 4). Einziger Beitrag: Reel als **gemeinsamer Post mit `hcwagnersbureau`** (Instagram-Kollaboration, beide Accounts als Autoren), Musik „An der schönen blauen Donau“, Hashtags #hochwasser #hochwasserschutz #hw100 #regensburg #donau. Inhalt: **Einladung zum „Bürgerdialog zum Hochwasserschutz am Unteren Wöhrd“ mit Bürgermeister Dr. Thomas Burger, Samstag, 17.10.2026, 11:00 bis 13:00 Uhr, nördlicher Brückenkopf der Eisernen Brücke.** Bürgermeister Burger (`thomas112burger`) folgt dem Account. | [instagram/2026-10-15_Post-Buergerdialog…](instagram/) |
| 2026-10-15 | Neues Deployment. Sichtbarer Text von Startseite und Impressum unverändert. **Neu: Instagram-Link in der Navigation** (Profil `insel.freunde.regensburg`, noch nicht gesichtet). Lovable-Events-SDK aktualisiert (`events.*.js`, nur Minifier-Umbenennungen), `flock.js`, `robots.txt`, `sitemap.xml` unverändert. Startseite setzt beim ersten Aufruf ein Cloudflare-Cookie `__cf_bm` (Bot-Management, 30 Minuten) ohne Einwilligung; in der Regel als technisch notwendig eingestuft, deshalb nur nachrichtlich. | `snapshot-2026-10-15/`, Diff gegen 13.10. |

## Seite erneut sichern

Der Header `x-deployment-id` ändert sich bei jedem Abruf (zwei Abrufe am 15.10. im Abstand von Minuten lieferten verschiedene Werte) und taugt nicht als Deployment-Kennung. Verlässlich sind die Asset-Hashes im HTML: `styles-*.css`, `index-*.js`, `routes-*.js` und der Dateiname `__l5e/events.*.js`. Ändern sie sich, wurde neu deployt.

```bash
cd 07-Insel-Freunde && D=snapshot-$(date +%F) && mkdir -p "$D" && cd "$D"
curl -s -D headers-startseite.txt -o index.html https://insel-freunde.de/
curl -s -o impressum.html https://insel-freunde.de/impressum
curl -s -o robots.txt https://insel-freunde.de/robots.txt
curl -s -o sitemap.xml https://insel-freunde.de/sitemap.xml
curl -s -o flock.js https://insel-freunde.de/~flock.js
curl -s -o events.js "https://insel-freunde.de$(grep -o '/__l5e/events\.[a-f0-9]*\.js' index.html | head -1)"
```

Sichtbaren Text vergleichen: Tags entfernen (`sed 's/<[^>]*>/\n/g'`) und gegen den letzten Snapshot diffen. Neue Pfade prüfen: Sitemap, Navigation, Links im Footer.

## Akteure

**H.C. WAGNERs BUREAU** (Hinweis Martin 15.10.2026; öffentlich belegt durch den Kollaborations-Post auf Instagram): PR-Agentur, Inhaber Hans-Christian Wagner, **Wöhrdstraße 50, 93059 Regensburg**, also selbst auf dem Unteren Wöhrd ansässig. Website hcwagner.com besteht nur aus einer Visitenkarte und einem Flyer (Dezember 2012): Presse- und Öffentlichkeitsarbeit, Medieninformationen und PR-Texte, Event-Marketing, Reportage-Fotografie; Domain seit 2001. Instagram `hcwagnersbureau`: 307 Beiträge, 1.481 Follower, Reportage-Fotos von Regensburger Veranstaltungen (Stadtpolitik, Vereine, Brauereien); der Bürgerdialog-Post erscheint auch dort. Ob die Agentur auch die Website insel-freunde.de betreut, ist nicht belegt (Lovable-Baukasten, keine Agentur-Signatur im Code).

Bedeutung: Die Gegenseite arbeitet mit professioneller PR und hat mit dem Bürgerdialog einen Termin mit dem Bürgermeister. Für Einzelpersonen gilt die Leitplanke unten; die Agentur als Unternehmen darf in der Chronik benannt werden, in öffentlichen Texten des Aktionsbündnisses nur, wenn es einen sachlichen Anlass gibt.

## Leitplanken

- Keine Einzelpersonen-Kritik. Der Name des c/o-Inhabers wird in unseren Texten nicht thematisiert.
- Antworten in eigenen Kanälen ohne Verlinkung der Seite, Argumente nur mit Fundstelle in den Planunterlagen (Analyse Abschnitt 3).
