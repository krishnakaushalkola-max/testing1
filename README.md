# testing1: team portfolio

**Live site:** https://krishnakaushalkola-max.github.io/testing1/

## How the site is built
| Folder | What it is | Published at |
|---|---|---|
| `site/` | team landing page; members are listed in `site/team.json` | `/testing1/` |
| `kushal/` | Kushal's React + Vite portfolio, built by the workflow | `/testing1/kushal/` |
| `members/<name>/` | other members' portfolios (plain HTML), copied as-is | `/testing1/<name>/` |

`.github/workflows/pages.yml` runs on every push to `main`: it builds `kushal/`, puts all the folders into one site and deploys it to GitHub Pages. To add your own portfolio, see [`members/README.md`](members/README.md).

## Kushal M R: personal portfolio
A single-page portfolio built with **React 19 + TypeScript + Vite**. It covers four projects (CueSeek, FocusOrb, DDSW paper, LiverQ) plus About and Contact sections. A day/night theme dial in the navbar changes the colour palette.

### Run it
```bash
cd kushal
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
```

### Structure
```
kushal/index.html       page shell + theme colour variables
kushal/src/main.tsx     React entry point
kushal/src/App.tsx      assembles all sections, highlights the active one in the navbar
kushal/src/components/  Navbar, Hero, Project*, About, Contact, Footer
kushal/src/theme/       day/night dial (Knob) and the colour stops it moves between
kushal/public/images/   project screenshots
```

### Git workflow used
Each part was built on its own branch and merged into `main`:
`feature/project-setup` → `feature/theme-dial` → `feature/navbar-hero` → `feature/projects` + `feature/about-contact` → `feature/assemble-app` → `docs/readme` (via pull request).
