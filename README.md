# Rangoo website

Static site built with [Next.js](https://nextjs.org/) using **`output: 'export'`**. Production output is plain HTML, CSS, and JavaScript in the **`out/`** folder—suitable for static hosts (for example Hostinger) with no Node server.

Static assets live in **`public/`** (for example logos and images under `public/` paths).

## Requirements

- [Node.js](https://nodejs.org/) (LTS recommended)

## Install

```bash
npm install
```

## Development

Run the local dev server (default [http://localhost:3000](http://localhost:3000)):

```bash
npm run dev
```

Use another port:

```bash
npm run dev -- -p 3001
```

## Production build (static export)

Generate the static site:

```bash
npm run build
```

Next writes the deployable site to **`out/`**. Upload the **contents** of `out/` to your host’s web root (or point your static host at that folder).

**Hostinger:** `public/.htaccess` is copied into **`out/`** on build. It allows Hostinger to use the 404.html page output from the build. The favicon will not work if it is too big, current is 35x35px.

**Note:** `npm run start` runs the Next.js **Node** production server, which is **not** used for this static-export setup. To preview the export locally:

```bash
npx serve out
```
