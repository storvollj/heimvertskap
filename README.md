# Heim Vertskap — Nettside

Prototype og demo av nettstedet for Heim Vertskap AS — profesjonell drift av korttidsutleie i Nord-Norge.

## Innhold

Alle sidene i React:

- **Homepage** — Hovedside med Full Drift-fokus, teknologi-presentasjon, og pakke-oversikt
- **Full Drift** — Detaljert side om Full Drift-pakken (medvert, ansvar, pengeflyt, FAQ)
- **Optimalisering** — Prising-hjelp for eksisterende verter
- **Oppstart** — Setup og mentoring for nybegynnere
- **Partner** — Multi-unit skalering og kompleks drift
- **Pakker** — Sammenligning av alle fire pakker
- **Om oss** — Jørgen og Ingunn, bakgrunn og filosofi

## Setup & kjøring

### Forutsetninger
- Node.js 16+ installert
- npm eller yarn

### Steg 1: Install dependencies
```bash
npm install
```

### Steg 2: Kjør dev server
```bash
npm run dev
```

Nettsiden åpnes automatisk på `http://localhost:3000`

### Steg 3: Build for produksjon
```bash
npm run build
```

Output ligger i `dist/`-mappen.

## Filstruktur

```
├── App.jsx                                    # Main app med routing
├── main.jsx                                   # React entry point
├── index.html                                 # HTML template
├── vite.config.js                             # Vite config
├── package.json                               # Dependencies
├── heim-vertskap-homepage-v3-drifter-fokus.jsx
├── heim-vertskap-full-drift-rewrite.jsx
├── heim-vertskap-om-oss.jsx
├── heim-vertskap-optimalisering.jsx
├── heim-vertskap-oppstart.jsx
├── heim-vertskap-partner.jsx
└── heim-vertskap-pakker.jsx
```

## Teknologi

- **React 18** — UI framework
- **React Router 6** — Routing
- **Vite** — Build tool (rask dev server)
- **Lucide React** — Icons

## Neste steg

1. **Feedback:** Del dette med nettverket ditt og få innspill
2. **Refinement:** Oppdater copy/design basert på feedback
3. **Webflow:** Migrering til Webflow for produksjon
4. **Deployment:** Publiser på heimvertskap.no

## Kontakt

Spørsmål? Kontakt Jørgen på hei@heimvertskap.no
