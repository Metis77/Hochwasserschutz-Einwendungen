# Netzwerk-Log beim Seitenaufruf (Chrome, 2026-10-13, ohne Interaktion)

Beobachtete Requests beim Laden von `https://insel-freunde.de/` (Reihenfolge wie im Browser):

| # | Ziel | Art | Bemerkung |
|---|------|-----|-----------|
| 1 | `insel-freunde.de/__l5e/trackevents` | POST 202 | Lovable-Event-Tracking (3× pro Seitenaufruf, davon 1× per sendBeacon) |
| 2 | `insel-freunde.de/~api/analytics` | POST 202 | Lovable-Analytics (`~flock.js`), Proxy; Skriptcode nennt `api.tinybird.co` als Endpunkt |
| 3 | `fonts.googleapis.com/css2?family=Anton&family=Montserrat…` | GET | Google Fonts, direkt von Google-Servern |
| 4 | `fonts.gstatic.com/s/anton/…woff2`, `…/montserrat/…woff2` | GET | Schriftdateien von Google-Servern (IP-Übermittlung an Google) |
| 5 | `insel-freunde.de/~flock.js` | GET | Analytics-Skript; Skriptcode enthält Zugriffe auf `document.cookie`, `localStorage`, `sessionStorage` und liest laut Code `userAgent`, `referrer`, `language`, `pathname`, `session_id`; beim Testaufruf war `localStorage` leer, Cookies nicht prüfbar |
| 6 | `insel-freunde.de/__l5e/events.33a4189afb1076e3.js` | GET | Lovable-Events-SDK; Ereignistypen `lovable.page`, `lovable.session`, `lovable.interaction`, `lovable.form`, `lovable.replay` (rrweb-Session-Replay, Aktivierung nicht verifiziert) |

Kein Cookie-Banner, keine Einwilligungsabfrage, keine Datenschutzerklärung (`/datenschutz`, `/privacy`, `/datenschutzerklaerung` → 404).

Hosting: Lovable-Projekt (`lovp_…`, `__l5e/`), Auslieferung über Cloudflare (`server: cloudflare`, `cf-ray`-Header), A-Record 185.158.133.1 (RIPE-Netzname „DET-FRA-CUSTOMERS“). DNS bei INWX, Mail bei `webspace.bz`. Der Zeitstempel `u:…` im HTML ist die Render-Zeit der jeweiligen Anfrage (bei zwei Abrufen verschieden), kein Build-Datum. Online-Datum: Upload-Zeitstempel des OG-Bildes 2026-10-13 13:08 UTC; keine Wayback-Machine-Snapshots; crt.sh lieferte keine Daten.
