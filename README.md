# Portfolio

Personal portfolio website built with Next.js, featuring an interactive network mesh animation and a topology-inspired design.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion + Canvas API
- **Theming:** next-themes (dark/light + system preference)
- **i18n:** Custom React Context (TR/EN)

## Features

- **Interactive Network Mesh** — Canvas-based particle animation with mouse interaction, inspired by network topologies
- **Bilingual Support** — Full Turkish/English content with client-side locale switching
- **Dark/Light Theme** — Class-based toggle with system preference detection
- **Typewriter Effect** — Cycling taglines in the hero section
- **Scroll Animations** — Framer Motion reveal effects on each section
- **Responsive Design** — Mobile-first layout with adaptive navigation
- **SEO Optimized** — Open Graph image generation, meta tags, semantic HTML
- **Locale-Aware Resume** — Downloads TR or EN resume based on active language

## Design

**"Topology"** — A visual language drawn from network infrastructure. The color palette combines warm amber (copper cabling) with electric blue (fiber optic), moving away from generic dark-theme templates.

**Typography:** Syne (display) · Inter (body) · Fira Code (mono)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/              # Next.js App Router (layout, page, OG image)
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Skills, Experience, Projects, Contact
│   └── ui/           # NetworkMesh, TypeWriter, ThemeToggle, Icons
├── data/             # Projects and skills data
└── i18n/             # Translations and language context
```

## License

MIT
