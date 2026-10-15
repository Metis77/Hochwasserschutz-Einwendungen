# Gegenseite: insel-freunde.de – Befund und Angriffspunkte

_Stand: 2026-10-13 (verschoben aus WebSite-Inhalte am 15.10.2026, Links angepasst; Chronik und neuere Snapshots im [README](README.md)). Snapshot der Seite in [`snapshot-2026-10-13/`](snapshot-2026-10-13/) (HTML, Volltext, Tracking-Skripte, Bilder, Netzwerk-Log). Alle Seitenzahlen der Planunterlagen sind im PDF verifiziert._

---

## 1. Steckbrief

| | |
|---|---|
| **URL** | https://insel-freunde.de (gefunden: Startseite und `/impressum`; Sitemap nennt nur die Startseite, übliche weitere Pfade liefern 404) |
| **Absender lt. Impressum** | „Interessengemeinschaft Insel-Freunde, c/o Dipl.-Ing. Richard Weidmüller, Werftstraße 4, 93059 Regensburg" – sonst nichts: keine E-Mail, kein Telefon, keine Rechtsform, kein V.i.S.d.P. |
| **Selbstbezeichnung** | „Insel-Freunde – Die Bewohner des Unteren Wöhrd" (Meta-Tags, Header, Footer) |
| **Position** | „JA! zum geplanten Hochwasserschutz" – Zustimmung zur Planung des WWA ohne Einschränkung |
| **Kontakt / CTA** | ausschließlich `mailto:kontakt@insel-freunde.de` („JA! Halt mich auf dem Laufenden") – sammelt E-Mail-Adressen für einen Verteiler |
| **Technik** | Lovable (KI-Website-Baukasten, Projekt-ID `lovp_…`), Auslieferung über Cloudflare (`server: cloudflare`, `cf-ray`-Header), A-Record 185.158.133.1 (RIPE-Netzname DET-FRA-CUSTOMERS), DNS INWX, Mail webspace.bz. Online spätestens seit 13.10.2026: Upload-Zeitstempel des OG-Bildes 13.10.2026, 13:08 UTC; keine Wayback-Snapshots; Zertifikatshistorie (crt.sh) nicht abrufbar. |
| **Umfang** | eine Seite, ca. 620 Wörter, ein Foto (Uferweg an einer Inselspitze mit Wehr, keine Urheberangabe), keine Quellen, keine Fußnoten, keine Namen außer c/o |
| **Datenschutz** | keine Datenschutzerklärung (alle üblichen Pfade 404), kein Consent-Banner, trotz Google Fonts und Tracking (siehe Abschnitt 2) |

Zur c/o-Adresse: Öffentliche Branchenverzeichnisse führen unter diesem Namen und dieser Adresse ein Landschaftsarchitektur-Büro (Leistungsspektrum lt. Einträgen u. a. Grünordnungspläne, Umweltberichte, Baumbestandspläne). In den Planfeststellungsunterlagen (Volltextsuche über alle Markdown-Konvertierungen) kommt der Name **nicht** vor. **Leitplanke beachten:** keine Einzelpersonen-Kritik, der Name wird in unseren Texten nicht thematisiert.

---

## 2. Formell angreifbar

Reihenfolge nach Belastbarkeit.

### 2.1 Keine Datenschutzerklärung – Art. 13 DSGVO

Die Seite verarbeitet personenbezogene Daten und informiert nicht darüber. Nachgewiesen im Browser ([Netzwerk-Log](snapshot-2026-10-13/netzwerk-log.md)):

- **Google Fonts von Google-Servern** (`fonts.googleapis.com`, `fonts.gstatic.com`): IP-Adresse jedes Besuchers geht an Google. Genau der Sachverhalt aus LG München I, Urteil vom 20.01.2022, Az. 3 O 17493/20 (100 € Schadensersatz). Lokales Einbinden wäre trivial.
- **Zwei Tracking-Systeme senden bei jedem Aufruf ohne Einwilligung** (im Browser beobachtet: ein POST an `/~api/analytics`, drei an `/__l5e/trackevents`): Lovable-Analytics (`~flock.js`, im Code Endpunkt `api.tinybird.co`; laut Skriptcode User-Agent, Referrer, Sprache, Pfad, Session-ID) und Lovable-Events-SDK (Ereignistypen Seite/Session/Interaktion/Formular; enthält ein rrweb-Session-Replay-Modul, dessen Aktivierung nicht verifiziert ist). Der Skriptcode enthält Cookie- und localStorage-Zugriffe; beim Testaufruf war localStorage leer, Cookies waren nicht prüfbar. Ein Verstoß gegen § 25 TDDDG (Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz, Einwilligungspflicht für Cookies und Speicherzugriff) ist deshalb möglich, aber nicht nachgewiesen.
- **E-Mail-Sammlung** per mailto-CTA: Wer schreibt, landet in einem Verteiler, ohne Information über Zweck, Speicherdauer, Widerruf.

Zuständig: BayLDA (Bayerisches Landesamt für Datenschutzaufsicht, Ansbach), Beschwerde durch jede betroffene Person möglich.

### 2.2 Impressum unvollständig

- **§ 5 DDG** (Digitale-Dienste-Gesetz, Nachfolger des TMG) verlangt E-Mail-Adresse plus einen weiteren schnellen Kontaktweg. Beides fehlt im Impressum (die E-Mail steht nur im Footer). Ob § 5 DDG für eine rein ideelle Seite gilt, ist strittig („geschäftsmäßig"), für § 18 MStV nicht.
- **§ 18 Abs. 1 MStV** (Medienstaatsvertrag): Name und Anschrift – minimal erfüllt.
- **§ 18 Abs. 2 MStV**: bei journalistisch-redaktionell gestalteten Angeboten muss ein Verantwortlicher (V.i.S.d.P.) mit Name und Anschrift benannt sein. Eine meinungsbildende Kampagnenseite zu einem laufenden Planfeststellungsverfahren ist dafür ein vertretbarer Fall. Fehlt. Zuständig: BLM (Bayerische Landeszentrale für neue Medien).
- **„Interessengemeinschaft" ist keine Rechtsform.** „c/o" benennt eine Zustelladresse, keinen Verantwortlichen. Wer die Seite inhaltlich verantwortet, ist nicht feststellbar.

### 2.3 Repräsentationsanspruch ohne Substanz

„Die Bewohner des Unteren Wöhrd" als Absender in Titel, Meta-Tags und Footer, ohne Mitgliederzahl, Gründungsdatum, Sprecher oder Satzung. Das Aktionsbündnis ist demgegenüber ein eingetragener Verein mit Mitgliedern, Vorstand und Adresse. Der Anspruch ist irreführend und bei Nachfrage von Presse oder Stadtrat nicht belegbar.

### 2.4 Keine Quellen

Die einzigen Zahlen der Seite (HW 20 seit 2006, „20 Jahre Planungszeit", „2 Jahrzehnte gewartet") stehen ohne Beleg. Zwei davon widersprechen den Planunterlagen (siehe 3.1, 3.3).

### 2.5 Bildrechte (nachrangig)

Ein Foto ohne Urhebernennung. Nur relevant, wenn es sich um ein Fremdfoto handelt (§ 13 UrhG). Nicht verfolgen.

**Einschätzung:** 2.1 ist rechtlich eindeutig, 2.2 vertretbar, 2.3 ist das kommunikativ wichtigste.

---

## 3. Inhaltlich angreifbar

Die Überschrift „JA! zum geplanten Hochwasserschutz" trifft unsere Position direkt: Wir sagen Nein zu dieser Planung. Die Begründung der Seite verschiebt das aber zu einer **falschen Alternative**: entweder diese Planung oder gar kein Schutz („Hochwasserschutz ist keine Option", „Was ist die Alternative", „Scheitert der Hochwasserschutz am Unteren Wöhrd, scheitert … für alle Inseln"). Dass es ein Ja zum Schutz und ein Nein zu dieser Mauer gleichzeitig gibt, kommt auf der Seite nicht vor. Jede Antwort sollte diese falsche Alternative zuerst auflösen (Leitplanke „WIE, nicht OB") und dann die Behauptungen einzeln an den Planunterlagen messen. Abkürzungen: EB = Erläuterungsbericht (Anlage A), UVS = Umweltverträglichkeitsstudie (D 1.0 §36-Bericht).

| # | Behauptung der Seite | Was die Planunterlagen sagen | Quelle |
|---|---|---|---|
| 3.1 | „Die Stadt Regensburg hat mit ihren Katastrophenschutzelementen in der Werftstraße seit dem Jahr 2006 einen Grundschutz gegen zwanzigjährige Hochwasser (HW 20) geschaffen." | Das bisherige K-System der Stadt „bietet bislang lediglich einen Minimalschutz" und steht „auch nur für wenige Teilbereiche" zur Verfügung; es wird „lediglich oberflächlich aufgebracht", die Flutung über den Grundwasseranstieg erfolgt dennoch. Ein Schutzgrad HW 20 ist nirgends belegt. 2006 ist in den Unterlagen das Jahr des Planungswettbewerbs und der Welterbe-Ernennung; ein Aufbau des K-Systems 2006 wird nicht erwähnt. | [UVS, S. 237](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/D 1.0 36 Bericht.pdf#page=237&search="Minimalschutz">), [EB, S. 20](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/A Erläuterungsbericht.pdf#page=20&search="Planungswettbewerb (2006)">) |
| 3.2 | „Vollschutz gegen hundertjährige Hochwasser (HW 100) für die ganze Insel" | (a) Evakuierung der Inselbewohner bleibt auch mit fertigem HWS „ab ca. HW50" Teil des Konzepts. (b) „Keller, Garagen und Gebäudeteile, die bisher nicht zu Wohnzwecken dienen, [bleiben] weiterhin ungeschützt"; Keller und Tiefgeschosse müssen „bei starkem Grundwasseranstieg weiterhin geflutet werden". (c) Pesthofareal ausgenommen: „kein Anspruch auf staatlichen Hochwasserschutz". (d) Bemessung HQ100 = 3.400 m³/s **ohne** den üblichen 15-%-Klimazuschlag, „bewusst verzichtet". | [UVS, S. 115](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/D 1.0 36 Bericht.pdf#page=115&search="ab ca. HW50">), [UVS, S. 219](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/D 1.0 36 Bericht.pdf#page=219>), [UVS, S. 171](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/D 1.0 36 Bericht.pdf#page=171&search="weiterhin ungeschützt">), [UVS, S. 247](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/D 1.0 36 Bericht.pdf#page=247&search="weiterhin geflutet">), [EB, S. 25](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/A Erläuterungsbericht.pdf#page=25&search="Pesthofareal">), [EB, S. 14](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/A Erläuterungsbericht.pdf#page=14&search="3.400">), [EB, S. 15](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/A Erläuterungsbericht.pdf#page=15&search="bewusst verzichtet">) |
| 3.3 | „Die letzten Hochwasser 2013 und 2024 haben deutlich gemacht, wie ernst die Lage ist." / „durch den Klimawandel … nehmen Extremwetterereignisse … zu" | 2013 = 2.670 m³/s, knapp über HQ20. Für 2024 spricht die UVS vom „10-jährlichen Hochwasser-Ereignis im Jahr 2024". Beides weit unter dem Bemessungswert 3.400 m³/s. In 180 Jahren Pegelreihe wurde HQ100 einmal überschritten (1845). Und: Wer mit dem Klimawandel argumentiert, muss erklären, warum der Plan den Klimazuschlag weglässt (3.2 d). | [UVS, S. 95](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/D 1.0 36 Bericht.pdf#page=95&search="2670">), [UVS, S. 237](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/D 1.0 36 Bericht.pdf#page=237&search="Hochwasser-Ereignis im Jahr 2024">) |
| 3.4 | „Die Evakuierung am Unteren Wöhrd war ein Warnsignal." | Die Evakuierung 2024 erfolgte, weil die Führungsgruppe Katastrophenschutz „um die Standsicherheit der Ufermauer und des K-Systems" fürchtete; danach wurde die Werftstraße kontrolliert teilgeflutet. Die Ufermauer stammt aus den 1830er Jahren, ihre Standsicherheit „ist nicht mehr nachzuweisen", und ihre Instandsetzung „muss vor Beginn der Hochwasserschutz-Bauarbeiten abgeschlossen werden". Das Warnsignal galt also der maroden Ufermauer, die unabhängig vom HW-100-Bauwerk und vor ihm saniert wird. Evakuierungen bleiben ohnehin ab HW50 vorgesehen (3.2 a). | [UVS, S. 237](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/D 1.0 36 Bericht.pdf#page=237&search="Standsicherheit der Ufermauer">), [EB, S. 18](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/A Erläuterungsbericht.pdf#page=18&search="Standsicherheit nicht mehr nachzuweisen">) |
| 3.5 | „Die Eingriffe sind vorübergehend. Der Schutz bleibt." | Dauerhaft sind: Fällung von 127 vitalen Bäumen (37 nach Baumschutzverordnung geschützt), Ersatz durch 161 Setzlinge mit 16–18 cm Stammumfang; Untergrundabdichtung in „Tiefen bis zu 20 m"; Mauern und Geländeanhebungen. Vorübergehend ist nur die Bauzeit, und die ist lang: Baubeginn „nicht vor 2028", Gesamtbauzeit „etwa 5 Jahre angestrebt", Einzelabschnitte summiert 19,5 Jahre. | [UVS, S. 131](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/D 1.0 36 Bericht.pdf#page=131&search="127 vitalen Bäumen">), [UVS, S. 222](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/D 1.0 36 Bericht.pdf#page=222&search="16-18 cm">), [EB, S. 21](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/A Erläuterungsbericht.pdf#page=21&search="Tiefen bis zu 20 m">), [EB, S. 94](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/A Erläuterungsbericht.pdf#page=94&search="vor 2028">) |
| 3.6 | Schutz von „Denkmälern" und dem „UNESCO Weltkulturerbe" | Das Vorhaben liegt selbst „in der Kernzone … bzw. Pufferzone der Welterbestätte"; die UVS listet beeinträchtigte Baudenkmäler (Wöhrdstr. 2, 10, 41, Proskestr. 5). Die Maßnahme ist selbst ein Eingriff ins Welterbe. **Belastbarer Angriffspunkt:** Die Planunterlagen enthalten keine Welterbe-Verträglichkeitsprüfung (Heritage Impact Assessment, HIA) und keine Stellungnahme von ICOMOS, dem Fachgremium des Welterbekomitees (Volltextsuche über alle Unterlagen: kein Treffer). Im UVP-Scoping gingen genau vier Stellungnahmen ein (Umweltamt Naturschutz, Tiefbauamt, Landesfischereiverband, Amt für Brand- und Katastrophenschutz), „von den restlichen beteiligten Stellen" keine (S. 16). Die einzige dokumentierte Denkmal-Abstimmung ist ein Beratungstermin mit Landesamt für Denkmalpflege und Unterer Denkmalbehörde am 30.11.2021 (Protokoll Nr. 50, Literaturverzeichnis S. 260). Die UVS erklärt das Schutzgut zum „Hauptschwerpunkt" (S. 170), stützt die Welterbe-Beschreibung aber auf „die Internetseite der UNESCO-Kommission Deutschland (2024, online)" (S. 109). Ob das Welterbezentrum informiert wurde (Operational Guidelines Ziff. 172: Meldepflicht bei Vorhaben, die den außergewöhnlichen universellen Wert berühren können), geht aus den Unterlagen nicht hervor; zu verifizieren über Stadt/Welterbekoordination. **Nicht belastbar (Stand 13.10.2026):** eine „nur flüchtige Prüfung" durch Welterbe-Gremien oder eine drohende Aberkennung des Status. Dafür gibt es im Projekt keine Quelle; verwendbar nur als Frage mit Präzedenz (Dresdner Elbtal, Aberkennung 2009), sobald die Quelle für die Prüfungsaussage vorliegt. **Gegenrisiko:** Die UVS attestiert zugleich „erheblich positive Wirkungen durch das deutliche Senken der Hochwassergefahr" (S. 191); die Gegenseite kann das zitieren. | [EB, S. 9](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/A Erläuterungsbericht.pdf#page=9&search="Kernzone">), [UVS, S. 172](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/D 1.0 36 Bericht.pdf#page=172>), [UVS, S. 170](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/D 1.0 36 Bericht.pdf#page=170&search="Hauptschwerpunkt">), [UVS, S. 109](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/D 1.0 36 Bericht.pdf#page=109&search="Internetseite der UNESCO-Kommission">), [UVS, S. 16](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/D 1.0 36 Bericht.pdf#page=16&search="Amt für Brand- und Katastrophenschutz">), [UVS, S. 260](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/D 1.0 36 Bericht.pdf#page=260&search="Unteren Denkmalbehörde">), [UVS, S. 191](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/D 1.0 36 Bericht.pdf#page=191>) |
| 3.7 | „nach 20 Jahren Planungszeit" / „Jetzt ist der Zeitpunkt" | Der Planungswettbewerb war 2006, die Zahl stimmt grob. Sie trägt aber in beide Richtungen: Das Baumkataster stammt im Kern von 2015, die Habitatkartierung ist laut Planunterlagen selbst „nicht mehr aktuell". „Jetzt" heißt zudem Baubeginn frühestens 2028 und Fertigstellung in den 2030ern. | [EB, S. 20](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/A Erläuterungsbericht.pdf#page=20&search="Planungswettbewerb (2006)">), [Baumkataster D 7.0, S. 4–6](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/D 7.0 Baumkataster - Erläuterungsbericht.pdf#page=6&search="mehr aktuell ist">), [EB, S. 94](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/A Erläuterungsbericht.pdf#page=94&search="vor 2028">) |
| 3.8 | „Scheitert der Hochwasserschutz am Unteren Wöhrd, scheitert der notwendige Hochwasserschutz für alle Inseln." / Reihenfolge Unterer Wöhrd → Oberer Wöhrd → Stadtamhof | Nicht belegt. Oberer Wöhrd (Abschnitt I) und Stadtamhof (Abschnitt G) sind eigenständige Abschnitte mit eigener Planung und eigenem Verfahren. Der EB erwähnt beide nur geografisch, eine technische oder rechtliche Abhängigkeit ist nicht dokumentiert. | [Quellenbelege §28 Abschnittstabelle](../../WebSite-Inhalte/research/Quellenbelege.md) (WWA-Projektseite, sekundär) |
| 3.9 | „Beim Hochwasserschutz geht es nicht um abstrakte Technikdebatten – dafür gibt es Ingenieure." | Der stv. WWA-Leiter sagt selbst, rund 40 der 55 Mio. € hätten „mit Hochwasserschutz gar nichts zu tun", sondern seien städtebaulicher und landschaftsplanerischer Mehrwert. Was gebaut wird, ist also eine Gestaltungs- und Kostenfrage, keine reine Ingenieursfrage. Das Planfeststellungsverfahren sieht Einwendungen ausdrücklich vor (57 wurden eingereicht). | Mittelbayerische 07.02.2024 (Zimmermann, sekundär, [Quellenbelege §28](../../WebSite-Inhalte/research/Quellenbelege.md)); Stadtrat 14.04.2026 ([context.md](../../WebSite-Inhalte/research/context.md)) |
| 3.10 | „Was ist die Alternative?" (rhetorisch, unbeantwortet) | Die Frage lässt sich beantworten: Objektschutz ist auf der Nordseite bereits Praxis; die Planunterlagen selbst nennen Objektschutz als Baustein. Die Alternativenprüfung im Verfahren ist eng geführt (siehe [Argument-Bibliothek §4](../../WebSite-Inhalte/research/argument-bibliothek.md)). | EB Kap. 4.2, [S. 20](<../01-Planunterlagen Hochwasserschutz Unterer Wöhrd/A Erläuterungsbericht.pdf#page=20&search="Objektschutz">) |

**Muster der Seite:** Werte-Rhetorik (Verantwortung, Sicherheit, Zukunft, Kinder und Enkel) ohne einen einzigen belegten Fakt. Die wenigen Tatsachenbehauptungen sind falsch (3.1), halbwahr (3.2, 3.3) oder verschweigen den Kontext (3.4, 3.5). Die Antwort des Aktionsbündnisses sollte das Gegenteil sein: wenige Sätze, jede mit Fundstelle.

---

## 4. Was daraus folgt (Optionen)

1. **FAQ-Eintrag** aus Abschnitt 3, ohne die Seite zu verlinken und ohne Namensnennung. Falsche Alternative zuerst auflösen, dann 3.2 bis 3.5. Entwurf in Abschnitt 5.
2. **Beobachten:** Seite periodisch neu sichern (Vorgehen im [README](README.md); `x-deployment-id` wechselt pro Abruf, Asset-Hashes vergleichen), prüfen, ob Unterseiten, Namen oder Unterstützerlisten dazukommen.

---

## 5. FAQ-Entwurf

Entwurf für `seiten/faq.md` (Repo WebSite-Inhalte) (Gruppe B, Eintrag 6) mit Fußnoten `faq-41` bis `faq-44`: [faq-entwurf-befuerworter.md](../../WebSite-Inhalte/research/insel-freunde/faq-entwurf-befuerworter.md). Noch nicht übernommen.
