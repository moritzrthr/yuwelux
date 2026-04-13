# Hosting Plan: Yuwelux on Serverprofis

The project is now built and ready for production hosting.

## Wichtiger Hinweis zu lokalen Tests
Wenn du die `index.html` direkt per Doppelklick im Browser öffnest (`file://`), erhältst du **CORS-Fehler**. Das ist ein Sicherheitsfeature moderner Browser.
*   **Richtig testen**: Nutze den Befehl `npm run preview` im Terminal, um eine lokale Vorschau der fertigen Seite zu sehen.

## Durchgeführte Schritte

1.  **SPA Routing Support**: Erstellung der `out/.htaccess`. Damit funktionieren Unterseiten wie `/strategie` auch bei Serverprofis (Apache) im Unterordner `/yuwelux/` einwandfrei.
2.  **Subfolder Konfiguration**: Die `base` in der Vite-Config wurde auf `/yuwelux/` gesetzt und in der `main.tsx` wurde der `basename` für den React-Router hinzugefügt.
3.  **Output-Ordner**: Der Build-Ordner wurde auf **`out/`** umgestellt.
3.  **Code Fixes**: 
    - TypeScript-Fehler in `main.tsx` behoben.
    - Fehlerhafter Import in `Ecosystem.tsx` korrigiert.

## Deployment-Anleitung

1.  **Dateien packen**: Zippe den **Inhalt** des Ordners **`out/`**.
2.  **Upload**: Lade die Zip-Datei bei Serverprofis hoch und entpacke sie im Root-Verzeichnis (meist `public_html`).
    - *Hinweis: Die `.htaccess` Datei muss unbedingt mit hochgeladen werden.*

## Build Speicherort
Die fertigen Dateien liegen hier:
`d:\ENTRPRENEUR\portoflio web\digitalfundament\SOP\0scale\yuwelux\out`
