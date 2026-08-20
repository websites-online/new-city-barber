# New City Barber

Angular-Website für New City Barber in Nürnberg.

## Lokal starten

```bash
npm install
npm start
```

Danach ist die Website unter `http://localhost:4200` erreichbar.

## Produktions-Build

```bash
npm run build
```

Das Ergebnis liegt unter `dist/new-city-barber/browser`.

## Veröffentlichung mit GitHub Pages

Der Workflow `.github/workflows/deploy-pages.yml` baut und veröffentlicht die Website automatisch bei jedem Push auf `main`. Der benötigte `base-href` wird aus dem tatsächlichen Repository-Namen berechnet.

1. Auf GitHub ein neues Repository anlegen.
2. Dieses lokale Repository mit GitHub verbinden und `main` pushen.
3. Auf GitHub unter **Settings → Pages → Source** die Option **GitHub Actions** auswählen.
4. Den Workflow unter **Actions** abwarten. Die öffentliche URL erscheint im Deployment.

Für ein Repository namens `New-City-Barber` lautet die URL normalerweise:

```text
https://DEIN-BENUTZERNAME.github.io/New-City-Barber/
```

## Vor Veröffentlichung erforderlich

In den Dateien für Impressum und Datenschutz müssen noch der vollständige Name des Inhabers und eine geschäftliche E-Mail-Adresse eingesetzt werden. Optional sind Register- und Umsatzsteuerangaben zu ergänzen, falls vorhanden.
