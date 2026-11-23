# Adil Bains

Static Astro portfolio for [adibains.me](https://adibains.me).

## Local development

Use Node.js 22.23.4 or later. Run `npm ci`, then `npm run dev`. Run `npm run check` for type checking and `npm run build` to generate `dist/index.html` and its assets. Use `npm run preview` to test the built site.

Add a Markdown file under `src/content/projects` with `title`, `description`, `url`, and integer `order` frontmatter. Lower values appear first. Future blog Markdown goes in `src/content/blog` with `title`, `description`, and `published` frontmatter.

## Vercel

Use the existing project linked to this repository and adibains.me. The root `vercel.json` selects Astro, `npm run build`, and `dist`. Select a Node version that satisfies `package.json` and clear any stale dashboard build overrides. Deploy a branch preview before merging to the production branch.

## Cloudflare Pages

Connect the repository in Pages and set the build command to `npm run build`, the output directory to `dist`, and the build environment to a Node version that satisfies `package.json`. For direct upload, run `npm ci`, `npm run build`, and `npx wrangler pages deploy` with the Pages project named in `wrangler.toml`.

## GitHub Pages

In the repository Pages settings, select GitHub Actions. In the workflow, install a supported Node version, run `npm ci`, then `PORTFOLIO_BASE=/portfolio/ npm run build`. Upload `dist` with the GitHub Pages artifact action and publish it with the Pages deploy action. For a root-domain deployment, use `PORTFOLIO_BASE=/`. The canonical URL continues to point to adibains.me.
