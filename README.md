# FIVE10 Website

Next.js implementation of the FIVE10 Productions website based on the Figma design.

## Local development in VS Code

Requirements:
- Node.js 20+
- npm

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open the local site at:

```
http://localhost:3000
```

Production build test:

```bash
npm run build
npm start
```

## Deployment

The repository is configured for Netlify with `netlify.toml`.

Recommended workflow:

1. Develop and test locally in VS Code.
2. Commit and push changes to `main`.
3. Netlify pulls the latest `main` commit and runs the production build.

## Routes

- /
- /about
- /projects
- /projects/power-mac-center
- /contact
