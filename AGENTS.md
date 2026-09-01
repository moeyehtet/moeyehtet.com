## Project Overview

Personal portfolio website for a Master's student in Automotive Software Engineering,
targeting **Automotive Software Developer** and **Embedded Software Engineer** roles.
The site is a professional showcase for recruiters/hiring managers, not a general blog
or design experiment — every page should read as credible, technical, and easy to skim.

**Current scope:**

- Home, Resume, Contact

**Planned (build structure to support, but don't over-engineer yet):**

- Projects, Blog

## Tech Stack

- **Framework:** Astro (static site generation, minimal JS by default)
- **Styling:** Tailwind CSS (utility-first, no separate CSS-in-JS libraries)
- **Language:** TypeScript for any `.astro`/`.ts` logic (not plain `.js`)
- **Package manager:** npm
- **Deployment target:** Netlify

## Commands

```bash
npm run dev       # local dev server
npm run build     # production build
npm run preview   # preview production build locally
```

Always run `npm run build` before considering a task "done" — Astro's static
build will surface type errors and broken imports that `dev` mode can hide.

## Project Structure

A minimal Astro project is already initialized in the project directory.

```
src/
  components/    # reusable Astro/UI components (Nav, Footer, Card, etc.)
  layouts/       # shared page layouts (BaseLayout, etc.)
  pages/         # route-based pages (index.astro, resume.astro, contact.astro)
  content/       # resume, future: blog posts, project entries (Astro Content Collections)
  styles/        # global.css / Tailwind config extensions
public/          # static assets: resume PDF, favicon, images
```

- Use **Astro Content Collections** (`src/content/`) for the resume page, the future blog and
  projects sections rather than hardcoding entries in `.astro` files — this
  keeps them structured and type-safe from the start, even before those
  pages are built.
- Keep components small and single-purpose (e.g., `ProjectCard.astro`,
  `SkillBadge.astro`) so they can be reused across Home, Projects, and Resume.

## Code Style

- Prefer Astro components (`.astro`) for static content; only reach for
  framework islands (React) if genuine interactivity is needed —
  keep JS shipped to the client minimal.
- Tailwind: use utility classes directly in markup; avoid `@apply` unless a
  pattern repeats 3+ times. Keep a consistent spacing/type scale — don't mix
  arbitrary values (`mt-[13px]`) with the standard scale without reason.
- Semantic HTML first (`<nav>`, `<main>`, `<section>`, `<article>`, `<header>`,
  `<footer>`) — this matters both for accessibility and for how recruiters'
  tools/ATS-adjacent scrapers and screen readers parse the resume/contact pages.
- Consistent naming: PascalCase for components, kebab-case for page routes.

## Content & Tone Guidelines

- Audience is technical recruiters and hiring managers in automotive/embedded
  industries — favor clarity and concrete technical detail over marketing
  language ("built a CAN bus diagnostic tool" beats "passionate about cars").
- Home page should surface, above the fold: who you are, your target roles,
  and a way to reach the Resume/Contact/Projects pages within one click.
- Resume page: prioritize fast scanning — consider rendering key resume
  content directly as HTML (not just a PDF embed), with a downloadable PDF
  link alongside it, since ATS and recruiters often prefer text they can copy.
- Vocabulary should reflect the domain accurately (AUTOSAR, CAN/LIN/FlexRay,
  RTOS, ISO 26262, MISRA C, HIL testing, etc.) — but only where genuinely
  applicable to your experience; don't keyword-stuff.
- Future Projects page: each entry should read like a mini case study —
  problem, tools/stack, your role, outcome — not just a repo link.
- Future Blog: technical writing on automotive/embedded topics reinforces
  subject-matter credibility; structure content collections now so adding
  this later doesn't require restructuring.

## Resume Content Source

The canonical resume file lives at **`public/resume.pdf`** — this is the
single source of truth for all resume content on the site, and is also the
file served by the "Download Resume" button (so it must always be the
up-to-date, final version, not a draft). Create content collections as needed
from the provided resume pdf.

Workflow for the agent:

1. Extract text content from `public/resume.pdf` (experience, education,
   skills, projects mentioned).
2. Structure it into typed `resume` Content
   Collection under `src/content/`, if entries like each job/project should
   be individually queryable — e.g., for reuse on the future Projects page.
3. The **Resume page renders from this structured data**, not from an
   embedded PDF viewer — this lets the page be styled to match the site
   (see Design Direction below) while the PDF remains available as a
   separate, literal download for recruiters/ATS.
4. If `public/resume.pdf` is updated later, re-run the extraction step and
   update `resume.json` to match — don't let the two drift out of sync.

## Design Direction

The whole site — home, resume, contact, and future projects/blog — should
feel **modern, minimalist, and professional**, not playful or experimental.
Concretely, this means:

- **Restrained color palette:** 1 neutral base (e.g., near-black/near-white)
    - 1 accent color used sparingly (links, buttons, highlights). Avoid
      gradients, multiple accent colors, or decorative shapes/blobs.
- **Typography does the work:** a clean sans-serif (e.g., Inter, IBM Plex
  Sans — something with an engineering/technical feel) with a clear type
  scale. Generous line-height and letter-spacing over heavy styling.
- **Whitespace over borders:** prefer spacing and layout to communicate
  hierarchy rather than boxes, shadows, or dividing lines. Use shadows only
  subtly (e.g., a soft `shadow-sm` on cards), never heavy drop shadows.
- **Grid-based, consistent spacing:** stick to Tailwind's default spacing
  scale throughout; don't introduce one-off arbitrary values.
- **Minimal motion:** subtle transitions (hover states, fade-ins) are fine;
  avoid flashy animations, parallax, or anything that reads as a template
  demo rather than a professional portfolio.
- **No stock-photo aesthetic:** avoid generic hero illustrations or stock
  imagery. Prefer clean typography-led sections, or simple technical/diagram
  style graphics where relevant (e.g., a subtle circuit or CAN-bus motif is
  fine if tasteful and not overdone — text and content should still lead).

## PDF Download Button

- Add a clearly visible "Download Resume" button/link on the Resume page
  (and optionally in the site nav or Home page) that links directly to
  `/resume.pdf` with the `download` attribute set, so it downloads rather
  than navigates.
- Style it as a primary call-to-action consistent with the site's accent
  color — but keep it simple (solid or outline button, no gimmicks).
- Example:
    ```astro
    <a
      href="/resume.pdf"
      download
      class="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2
             text-sm font-medium text-white transition hover:bg-neutral-700"
    >
      Download PDF
    </a>
    ```

## Accessibility & Performance

- Maintain color contrast ratios (WCAG AA minimum) for all Tailwind color
  choices — don't rely on default grays without checking contrast.
- All images need meaningful `alt` text; decorative images use `alt=""`.
- Keep Lighthouse performance/accessibility scores in mind — Astro's default
  zero-JS-by-default approach should keep this easy; don't undo it with
  unnecessary client-side hydration.

## What the Agent Should NOT Do

- Don't introduce a new CSS framework or component library alongside Tailwind.
- Don't hardcode future Projects/Blog content directly into page files —
  use Content Collections so the structure scales.
- Don't add generic placeholder/lorem-ipsum copy in committed content —
  flag missing content instead of inventing fake experience or projects.
- Don't add heavy client-side JS frameworks for effects that CSS/Astro can do.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
