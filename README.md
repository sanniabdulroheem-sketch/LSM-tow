# Lanre Shittu Motors (LSM) — Rescue & Towing Website

A 24/7 rescue, towing, and roadside assistance marketing site for Lanre Shittu Motors, Lagos. Converted from a single-file HTML/Babel prototype into a standard, modular Vite + React project.

## Tech stack

- **React 18**
- **Vite** — dev server & build tool
- **Tailwind CSS** — utility-first styling, dark mode via the `class` strategy

## Project structure

```
lsm-rescue/
├── index.html                 # Vite entry HTML
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx                # React root render
│   ├── App.jsx                 # Composes all page sections
│   ├── index.css                # Tailwind directives + global animations
│   ├── assets/
│   │   └── icons.jsx            # Shared <Icon> component + icon path library
│   ├── data/
│   │   └── content.js           # All static copy/data (services, pricing, FAQs, etc.)
│   ├── hooks/
│   │   ├── useCountUp.js
│   │   ├── useInView.js
│   │   └── useDarkMode.js
│   └── components/
│       ├── ui/
│       │   ├── Badge.jsx
│       │   ├── Buttons.jsx      # PrimaryButton, SecondaryButton
│       │   ├── RouteDivider.jsx
│       │   └── SectionEyebrow.jsx
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── StatsBar.jsx
│       ├── Services.jsx
│       ├── HowItWorks.jsx
│       ├── Coverage.jsx
│       ├── Pricing.jsx
│       ├── Testimonials.jsx
│       ├── FleetCTA.jsx
│       ├── FAQ.jsx
│       ├── FinalCTA.jsx
│       ├── Footer.jsx
│       └── FloatingCTA.jsx
└── README.md
```

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (defaults to `http://localhost:5173`).

### Other scripts

```bash
npm run build      # production build to dist/
npm run preview    # preview the production build locally
npm run lint        # run eslint
```

## Notes on the conversion

- The original was a single `.html` file using CDN-hosted React/Babel/Tailwind with inline JSX compiled in the browser. This version uses a proper Vite build pipeline (no more in-browser Babel transpilation, faster loads, production-ready bundling).
- Every component, hook, and data array from the original was preserved 1:1, just split into individual files by responsibility.
- Two corrupted artifacts present in the uploaded source were fixed during conversion:
  - A garbled placeholder string inside the Coverage section's paragraph copy.
  - A malformed Tailwind class (`blu...r-3xl`) in the Fleet CTA's decorative blur element, corrected to `blur-3xl`.
- Dark mode is toggled via a `dark` class on `<html>`, matching the original `darkMode: 'class'` Tailwind config, and defaults to the user's OS preference (`prefers-color-scheme`).

## GitHub Pages deployment

1. Push the project to GitHub.
2. In the repository settings, enable GitHub Pages and choose the GitHub Actions source.
3. The workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml) will publish the site automatically.
