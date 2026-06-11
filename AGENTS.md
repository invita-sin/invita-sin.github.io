# AGENTS.md — Wedding Template Hub

**State:** Root catalog website built. Template repos are separate.
**Source of truth:** `.agents/prd.md` — read it first before any work.

## Stack

- Next.js 15 (App Router, static export: `output: 'export'`) + TypeScript + Tailwind CSS 4
- Deploy: GitHub Pages via GitHub Actions (`push main` → `pnpm install --ignore-scripts` → build → export → deploy)
- Package manager: **pnpm** (v11+, via `pnpm/action-setup@v4` in CI)
- Icons: `lucide-react`
- No backend — 100% static site

## Architecture

- **Root repo** (`invita-sin.github.io`): catalog landing page showing all templates
- **Template repos** (separate, e.g. `template-midnight-romance`): each has own source, Actions, and `config.json`
- Template repos live as **git submodules** under `apps/`
- Existing template repos: `template-midnight-romance`
- MVP template repos to create: Elegant, Minimalist, Floral

## Current project structure

```
├── app/                    # App Router root (page.tsx, layout.tsx, globals.css)
├── components/             # Catalog page components
│   ├── hero.tsx
│   ├── template-catalog.tsx  # Search + category filter + grid
│   ├── template-card.tsx
│   ├── doc-section.tsx
│   └── footer.tsx
├── data/
│   └── templates.json      # Template catalog metadata
├── public/images/thumbnails/  # SVG placeholder thumbnails
├── apps/template-midnight-romance/  # Git submodule
├── .github/workflows/deploy.yml
├── next.config.ts          # output: 'export', trailingSlash, images unoptimized
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
└── pnpm-workspace.yaml
```

## Key dev commands

```bash
pnpm dev         # local dev server
pnpm build       # static export ke out/
```

No lint or typecheck scripts defined yet.

## Key decisions

| Concern | Choice |
|---|---|
| Fonts | Playfair Display (serif), Poppins (body), Montserrat (accent) |
| Config per template | `config.json` at template repo root (not `config/wedding.json`) |
| Template metadata | `data/templates.json` in root repo |
| Routing | No basePath (deployed at root domain) |
| CI/CD | GitHub Actions deploy.yml with pnpm |

## Template requirements (every template must have)

Cover Opening → Hero Couple → Event Info → Countdown → Love Story → Gallery → Location (Google Maps) → RSVP (WhatsApp/Form) → Gift (Bank/QRIS) → Closing

## Gotchas

- `apps/` is excluded from tsconfig (`"exclude": ["node_modules", "apps"]`) to prevent TypeScript from checking submodule files
- Submodule (`apps/template-midnight-romance/`) uses `npm`, not `pnpm` — separate build system
- Template catalog filters by category: Modern, Minimalist, Elegant, Floral, Islamic, Luxury, Rustic, Traditional
- `--ignore-scripts` needed for pnpm install (sharp fails without it, and isn't needed for static export)
- Submodule must be checked out with `actions/checkout@v4` using `submodules: true`
