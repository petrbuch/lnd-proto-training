# Stack overview – local → Git → Netlify

Mermaid diagram of how the project flows from your machine to the live site.

## Full stack diagram

```mermaid
flowchart TB
    subgraph LOCAL["Local"]
        IDE["Cursor or IDE"]
        REPO_LOCAL["Repo clone"]
        NODE["Node.js 20 and npm"]
        PROTO["prototype folder"]
        DEV["npm run dev"]
        BUILD_LOCAL["npm run build"]
        OUT_LOCAL["out folder static"]
        IDE --> REPO_LOCAL
        REPO_LOCAL --> PROTO
        PROTO --> NODE
        NODE --> DEV
        NODE --> BUILD_LOCAL
        BUILD_LOCAL --> OUT_LOCAL
    end

    subgraph GIT["Git and GitHub"]
        REMOTE["GitHub repo"]
        PUSH["git push"]
        REPO_LOCAL --> PUSH
        PUSH --> REMOTE
    end

    subgraph NETLIFY["Netlify"]
        WATCH["Watch repo"]
        BASE["Base dir prototype"]
        INSTALL["npm ci"]
        BUILD_NET["npm run build"]
        EXPORT["Next.js static export"]
        OUT_NET["out folder"]
        PUBLISH["Publish dir out"]
        CDN["Netlify CDN"]
        LIVE["lnd-proto-training.netlify.app"]
        REMOTE --> WATCH
        WATCH --> BASE
        BASE --> INSTALL
        INSTALL --> BUILD_NET
        BUILD_NET --> EXPORT
        EXPORT --> OUT_NET
        OUT_NET --> PUBLISH
        PUBLISH --> CDN
        CDN --> LIVE
    end

    subgraph USER["User"]
        BROWSER["Browser"]
        BROWSER --> LIVE
    end
```

## Simplified flow (left to right)

```mermaid
flowchart LR
    A["Local edit and push"] --> B["GitHub"]
    B --> C["Netlify build"]
    C --> D["out published"]
    D --> E["Live site"]
```

## Repo structure (what lives where)

```mermaid
flowchart LR
    subgraph REPO["Repository"]
        ROOT["root"]
        ROOT --> INDEX["index.html"]
        ROOT --> NETLIFY_ROOT["netlify.toml"]
        ROOT --> HELPER["helper-docs"]
        ROOT --> PROTO["prototype"]
        PROTO --> APP["app"]
        PROTO --> COMP["components"]
        PROTO --> LIB["lib"]
        PROTO --> PKG["package.json"]
        PROTO --> NEXT["next.config.ts"]
        PROTO --> NETLIFY_PROTO["netlify.toml"]
    end

    subgraph BUILD["Build output not committed"]
        PROTO --> OUT["out"]
        OUT --> HTML["index.html"]
        OUT --> ASSETS["_next static"]
    end
```

## Build pipeline (Netlify step by step)

```mermaid
sequenceDiagram
    participant Dev as Developer
    participant GitHub as GitHub
    participant Netlify as Netlify
    participant CDN as CDN Live

    Dev->>GitHub: git push main
    GitHub->>Netlify: Webhook new commit
    Netlify->>Netlify: cd prototype base dir
    Netlify->>Netlify: npm ci
    Netlify->>Netlify: npm run build
    Note over Netlify: Next.js static export to out
    Netlify->>Netlify: Publish directory out
    Netlify->>CDN: Deploy out to edge
    CDN->>Dev: Site live at netlify.app
```

## Key pieces

| Piece | Role |
|-------|------|
| **Local** | Clone repo, `cd prototype`, `npm install` / `npm run dev` or `npm run build`. Edit in Cursor; commit & push. |
| **Git / GitHub** | Source of truth. Netlify is connected to the repo and builds on push (e.g. `main`). |
| **Netlify** | Reads root or base `netlify.toml`; base = `prototype`, command = `npm ci && npm run build`, publish = `out`. Builds in `prototype/`, gets static export in `out/`, deploys that. |
| **Browser** | User opens the Netlify URL; CDN serves static HTML/JS/CSS from `out/`. |

To view the diagrams, open this file in an editor or viewer that supports Mermaid (e.g. GitHub, VS Code with a Mermaid extension, or [mermaid.live](https://mermaid.live)).
