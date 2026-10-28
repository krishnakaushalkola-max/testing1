# testing1: team portfolio

## Kushal M R: personal portfolio
A single-page portfolio built with **React 19 + TypeScript + Vite**. It covers four projects (CueSeek, FocusOrb, DDSW paper, LiverQ) plus About and Contact sections. A day/night theme dial in the navbar changes the colour palette.

### Run it
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
```

### Structure
```
index.html              page shell + theme colour variables
src/main.tsx            React entry point
src/App.tsx             assembles all sections, highlights the active one in the navbar
src/components/         Navbar, Hero, Project*, About, Contact, Footer
src/theme/              day/night dial (Knob) and the colour stops it moves between
public/images/          project screenshots
```

### Git workflow used
Each part was built on its own branch and merged into `main`:
`feature/project-setup` → `feature/theme-dial` → `feature/navbar-hero` → `feature/projects` + `feature/about-contact` → `feature/assemble-app` → `docs/readme` (via pull request).
