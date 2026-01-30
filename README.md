# lnd-proto-training

Household and property insurance **client zone** prototype. Next.js 15 (App Router), React 19, TypeScript, Mantine 7, Tailwind 4. Deploys to Netlify.

## Features (prototype)

- **Login** – Simple sign-in (any credentials; no persistence).
- **Client zone** – Welcome, Get insurance (multi-step form), Overview, Camera demo, Sign out.
- **Multi-step form** – Property → Household & contact → Attachments → Summary → Contract preview → Confirm (demo).
- **Camera** – Capture document via device camera (no upload/storage).
- **Contract view** – Placeholder contract preview in flow.
- **API** – Mock `POST /api/send-contract` and `POST /api/send-quote`.

## Quick start

**Prerequisites:** Node.js 20+ (LTS), npm.

```bash
cd prototype
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Sign in with any email/password to enter the client zone.

## Commands (in `prototype/`)

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start dev server         |
| `npm run build`| Production build         |
| `npm start`    | Run production build     |
| `npm run lint` | Run ESLint               |

## Structure

```
repo/
├── README.md
├── netlify.toml          # Netlify: base = prototype
├── helper-docs/          # Context, structure, startup
├── index.html            # Static landing (optional)
└── prototype/            # Next.js app
    ├── app/              # App Router: pages, API, layout
    ├── components/       # UI: LoginForm, OnboardingForm, ClientNav, etc.
    ├── lib/              # contexts, theme, types, utils
    ├── public/
    ├── package.json
    ├── next.config.ts
    └── netlify.toml      # Build env (NODE_VERSION)
```

## Deploy (Netlify)

1. Connect the repo to Netlify.
2. Build settings are read from the **root** `netlify.toml`: **Base directory** = `prototype`, **Build command** = `npm ci && npm run build`.
3. Netlify’s Next.js / OpenNext plugin will detect the app and set the publish output.

No env vars required for the prototype.

## Docs

- **Context & features:** `helper-docs/01-context.md`
- **Stack & structure:** `helper-docs/02-structure.md`
- **Machine setup:** `helper-docs/03-startup.md`
