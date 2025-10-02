# bensenwang.dev

Minimal portfolio site — clean, fast, functional.


## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** components
- **Biome** for linting

## Structure

- `/` — Hero page with quick links
- `/projects` — Published projects with images and descriptions
- `/upcoming` — Projects in planning
- `/about` — Bio, skills, contact

## Running Locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

## Content

All content is defined in `INFO.md` as the source of truth. Project images are in `public/assets/`.

## Notes

- Dark mode by default
- File-based routing, no client state
- No modals, no save/load features
- Uses shadcn components throughout
