# schr-0dinger.github.io

Personal site of Dr Kailas Nath K M, built with [Astro](https://astro.build) as a fully static page with no client-side framework.

## Edit content

All text, links, projects and dates live in [`src/data/profile.ts`](src/data/profile.ts). The portrait is `src/assets/portrait.jpg`, and the social preview image is `public/og.jpg`.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built site
```

## Deploy

Every push to `main` builds and deploys through GitHub Actions (`.github/workflows/deploy.yml`).
In the repository settings, go to **Pages → Build and deployment → Source** and choose **GitHub Actions**.
