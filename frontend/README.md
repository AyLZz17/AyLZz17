# AyLZz17 Portfolio

Static portfolio built with Astro.

## Commands

- `pnpm dev` starts the local development server.
- `pnpm build` generates the static site in `dist/`.
- `pnpm preview` previews the production build.
- `pnpm format` formats project files with Oxfmt.

## Deployment

### Vercel

Create a Vercel project with this directory (`frontend`) as its root. Vercel builds the Astro site with `pnpm build` and publishes `dist/`, as configured in `vercel.json`. Vercel deploys the project using its native build system; it does not deploy Docker images.

### Docker

Build and run the static site locally or on a Docker-compatible host:

```sh
docker build -t aylzz17-portfolio .
docker run --rm -p 8080:8080 aylzz17-portfolio
```

Open `http://localhost:8080`.
