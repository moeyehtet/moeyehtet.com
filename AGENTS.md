# AGENTS.md

# Project Overview

Personal portfolio website for a Master's student in Automotive Software Engineering, targeting **Automotive Software Developer** and **Embedded Software Engineer** roles.

The website is a professional showcase for recruiters and hiring managers, not a design experiment. Every page should communicate technical credibility, professionalism, and relevant experience while remaining easy to navigate and skim.

## Current Scope

- Home
- Resume
- Contact

## Planned Features

- Projects

Build the underlying structure to support these features without over-engineering them before they are needed.

---

# 1. Tech Stack

- **Framework:** Astro (static site generation, minimal JavaScript by default)
- **Styling:** Tailwind CSS (utility-first, no separate CSS-in-JS libraries)
- **Language:** TypeScript for all `.astro` and `.ts` logic (not plain `.js`)
- **Package Manager:** npm
- **Deployment:** Netlify

## Available Commands

```bash
npm run dev       # Local development server
npm run build     # Production build
npm run preview   # Preview production build locally
```

Always run `npm run build` before considering a task complete.

Astro's production build can surface type errors, broken imports, and other issues that development mode might not catch.

Use the existing package scripts and project configuration. Do not introduce alternative build tools or package managers without a good reason.

---

# 2. Project Structure

The Astro project is already initialized in the project directory.

Expected structure:

```text
src/
  components/      # Reusable Astro/UI components
  layouts/         # Shared page layouts
  pages/           # Route-based pages
  content/         # Structured content collections
  styles/          # Global styles and Tailwind extensions

public/
  resume.pdf       # Canonical resume PDF
  favicon.svg
  images/
```

Examples of reusable components:

- `Nav.astro`
- `Footer.astro`
- `Button.astro`
- `ProjectCard.astro`
- `SkillBadge.astro`

Examples of layouts:

- `BaseLayout.astro`

Examples of pages:

- `index.astro`
- `resume.astro`
- `contact.astro`

## Architecture Guidelines

- Keep components small, focused, and reusable.
- Avoid unnecessarily large components.
- Separate presentation from application logic when appropriate.
- Follow Astro's file-based routing conventions.
- Use kebab-case for page routes.
- Use PascalCase for component filenames.
- Keep shared layouts and components independent of individual pages wherever possible.
- Avoid unnecessary abstractions and premature optimization.

## Astro Content Collections

Use Astro Content Collections for structured content, particularly:

- Resume information
- Future project entries

Do not hardcode large collections of structured content directly into `.astro` files.

Prefer typed content schemas and queryable entries so the content can be reused across different pages.

However, do not introduce unnecessary complexity. The content architecture should remain appropriate for the current project scope.

---

# 3. Git Commit Policy

Whenever you complete a meaningful fix, feature implementation, refactoring, styling change, or other independent modification, you MUST create a Git commit.

Creating commits is part of completing the task, not an optional final suggestion.

Do not wait until the entire task is finished to commit all changes together.

Commit after each logically complete and independently meaningful change.

## 3.1 Commit Workflow

After completing each logically independent change:

1. Inspect the current Git working tree using `git status`.
2. Review the changes using `git diff`.
3. Identify all files modified as part of the current task.
4. Run relevant tests, linting, type checking, or other validation.
5. Stage only the files and changes related to the completed modification.
6. Create a Git commit with a meaningful commit message.
7. Verify that the commit was created successfully.
8. Report the commit details.

Use:

```bash
git status
git diff
git diff --cached
git log -1 --oneline
```

Do not commit incomplete or unrelated work.

For tasks involving multiple unrelated fixes, create separate commits for each logically complete fix.

For a feature involving several tightly related files, a single commit is appropriate.

## 3.2 Commit Message Convention

Use Conventional Commits.

The supported commit types are:

- `feat:` New features and functionality.
- `fix:` Bug fixes and frontend behavior corrections.
- `refactor:` Code restructuring without changing behavior.
- `style:` Formatting and CSS-only changes without behavior changes.
- `perf:` Performance optimizations.
- `test:` Adding or modifying tests.
- `docs:` Documentation changes.
- `build:` Build tools, dependencies, and configuration.
- `chore:` General maintenance.

Keep commit messages concise, descriptive, and specific to the actual changes.

### Commit Message Examples

**Features**

```text
feat: add responsive navigation menu
feat: implement dark mode toggle
feat: add reusable project card component
feat: implement contact form
feat: add downloadable resume button
feat: create responsive homepage hero section
feat: add project content collection
```

**Bug Fixes**

```text
fix: prevent mobile navigation overflow
fix: correct responsive layout on resume page
fix: resolve broken navigation links
fix: correct contact form validation
fix: fix missing font loading in production
fix: resolve Astro content collection query error
```

**Refactoring**

```text
refactor: extract reusable button component
refactor: separate page content from layout components
refactor: centralize typography configuration
refactor: simplify responsive navigation logic
```

**Styling**

```text
style: refine homepage typography and spacing
style: improve resume page visual hierarchy
style: update navigation hover and focus states
style: improve mobile layout consistency
```

**Performance**

```text
perf: optimize image loading on homepage
perf: reduce unnecessary client-side JavaScript
perf: optimize font loading strategy
```

**Testing**

```text
test: add tests for contact form validation
test: verify responsive navigation behavior
test: add accessibility checks for shared components
```

**Documentation and Build**

```text
docs: document project architecture
build: configure Tailwind CSS for production
build: update Astro dependencies
chore: update development dependencies
```

Choose the commit type that best represents the actual modification. Do not force every change into a feature or bug-fix category.

## 3.3 Git Safety Rules

- Never use `git add .` or `git add -A` blindly.
- Stage only files related to the current task.
- Never include unrelated pre-existing user changes in a commit.
- Never commit secrets, credentials, sensitive environment files, generated binaries, or temporary files.
- Never use `git commit --amend` unless explicitly requested.
- Never push commits automatically.
- Do not create empty commits.
- Do not rewrite Git history unless explicitly requested.
- Never discard or overwrite existing user changes.
- Do not modify `.gitignore` simply to hide unexpected files without understanding their purpose.

If a file contains both pre-existing changes and your own modifications, stage only your specific changes using patch-based staging where necessary.

If a commit cannot be created because of permissions or another issue, explain why rather than silently skipping it.

## 3.4 Existing Changes

Before starting work, inspect the working tree.

If there are pre-existing uncommitted changes:

- Preserve them.
- Do not modify or revert them unless required by the task.
- Do not include them in your commits.
- Carefully stage only files and changes belonging to your current task.

Never assume that all uncommitted changes belong to the current task.

## 3.5 Testing Before Committing

Run relevant project checks before committing whenever applicable.

For frontend changes, consider:

- Production build.
- TypeScript type checking.
- ESLint or other configured linting tools.
- Unit and integration tests.
- End-to-end tests when relevant.
- Accessibility checks.

Always run:

```bash
npm run build
```

before considering the overall task complete.

If a validation command fails:

1. Investigate the failure.
2. Determine whether it was introduced by the current changes or already existed.
3. Fix issues introduced by your changes.
4. If an existing or unrelated failure prevents validation, explain it clearly.
5. Do not claim that a test or build passed unless it was actually executed successfully.

Do not silently commit an incomplete implementation.

## 3.6 Commit Reporting

After every commit, report:

1. Short summary of the changes.
2. Commit hash.
3. Commit message.
4. Files included in the commit.
5. Tests and checks performed.

For tasks involving multiple commits, report each commit separately.

Include commit information in the final response.

---

# 4. Frontend Development Guidelines

## 4.1 Astro Development

- Prefer Astro components (`.astro`) for static content.
- Use Astro's built-in capabilities wherever possible.
- Only introduce framework islands such as React when genuine interactivity requires them.
- Keep client-side JavaScript minimal.
- Avoid unnecessary hydration.
- Prefer CSS and Astro capabilities over JavaScript for visual effects.
- Use TypeScript for component logic and utilities.
- Follow Astro conventions for layouts, components, routing, and content.

Do not introduce React or another frontend framework just to implement functionality that Astro and CSS can already handle.

## 4.2 Component Architecture

- Prefer reusable, maintainable, and composable components.
- Keep components focused on a single responsibility.
- Avoid duplicating UI and business logic.
- Extract repeated UI patterns into reusable components when appropriate.
- Avoid creating components for trivial markup that is unlikely to be reused.
- Keep component APIs simple and predictable.

Examples:

- Navigation should be reusable across pages.
- Buttons should have consistent styling and behavior.
- Project cards should be reusable for future project entries.
- Skill badges should use a consistent visual treatment.
- Shared page layouts should provide consistent structure and metadata.

## 4.3 Tailwind CSS

- Use Tailwind utility classes directly in markup.
- Avoid introducing CSS-in-JS libraries.
- Avoid `@apply` unless a styling pattern repeats three or more times and extraction improves maintainability.
- Prefer Tailwind's default spacing and typography scales.
- Avoid arbitrary values such as `mt-[13px]` unless there is a clear design reason.
- Keep styling consistent across components.
- Use reusable CSS variables or design tokens for shared theme values when appropriate.
- Avoid duplicating long collections of utility classes unnecessarily.

Follow the existing Tailwind configuration and version.

## 4.4 Semantic HTML

Use semantic HTML elements wherever possible:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<aside>`
- `<footer>`

Use appropriate heading hierarchy.

Avoid using generic `<div>` elements when a semantic element better represents the content.

Semantic markup is important for accessibility, screen readers, search engines, and recruiters' tools that extract resume information.

## 4.5 Responsive Design

- Design mobile-first when appropriate.
- Ensure layouts adapt naturally to mobile, tablet, and desktop.
- Avoid fixed widths that cause horizontal overflow.
- Ensure typography and spacing remain readable at different viewport sizes.
- Test navigation, forms, and interactive elements on smaller screens.
- Avoid unnecessary layout changes between breakpoints.
- Maintain a consistent visual hierarchy across screen sizes.

## 4.6 Accessibility

Follow WCAG AA accessibility guidelines.

- Maintain sufficient text and background contrast.
- Use semantic HTML.
- Provide meaningful accessible names for interactive elements.
- Ensure keyboard navigation works correctly.
- Maintain visible focus indicators.
- Provide appropriate labels for form controls.
- Use meaningful `alt` text for informative images.
- Use `alt=""` for decorative images.
- Avoid relying solely on color to communicate information.
- Use ARIA attributes only when necessary.

## 4.7 Code Quality

- Follow existing naming conventions and project structure.
- Use descriptive variable, function, and component names.
- Avoid unnecessary dependencies.
- Avoid premature abstractions.
- Handle errors and edge cases appropriately.
- Remove unused imports, variables, and dead code introduced by your changes.
- Avoid unnecessary TypeScript type assertions.
- Do not introduce `any` or disable type checking to bypass errors without a valid reason.
- Keep functions and components reasonably small.

## 4.8 Performance

- Take advantage of Astro's static generation.
- Avoid unnecessary client-side JavaScript.
- Optimize images and static assets.
- Lazy-load below-the-fold images when appropriate.
- Avoid unnecessarily large client-side bundles.
- Use appropriate font loading strategies.
- Avoid unnecessary third-party scripts.
- Keep Lighthouse performance and accessibility scores in mind.

---

# 5. Content & Tone Guidelines

The primary audience is technical recruiters and hiring managers in automotive software and embedded systems.

The website must communicate professional credibility, technical knowledge, and relevant experience.

## Writing Style

- Prefer clarity and concrete technical detail over marketing language.
- Avoid generic statements such as "passionate about technology."
- Describe actual work, technologies, responsibilities, and outcomes.
- Keep paragraphs concise and easy to scan.
- Avoid excessive promotional language.
- Use accurate technical terminology.

For example:

Prefer:

"Developed a CAN bus communication module in C for an ATmega328P-based embedded system."

Instead of:

"Passionate about developing innovative automotive solutions."

## Technical Vocabulary

Use domain-specific terminology where genuinely applicable:

- AUTOSAR
- CAN, LIN, FlexRay
- RTOS
- ISO 26262
- MISRA C
- HIL testing
- Embedded Linux
- Sensor fusion
- V2X communication
- Software-defined vehicles
- Edge AI
- Automotive software architecture

Do not keyword-stuff the website or claim experience with technologies that are not supported by the actual resume or projects.

## Home Page

The homepage should communicate the following above the fold:

1. Who I am.
2. My academic or professional background.
3. My target roles.
4. A clear way to access Resume, Contact, and Projects pages.

Keep the introduction concise and technically credible.

Avoid generic hero illustrations, oversized decorative elements, or marketing-heavy copy.

## Resume Page

The resume page should prioritize fast scanning.

- Render resume information directly as HTML.
- Organize information into clear sections.
- Use readable typography and consistent spacing.
- Make education, experience, skills, and projects easy to identify.
- Include a downloadable PDF link.
- Do not rely solely on an embedded PDF viewer.

Recruiters should be able to read and copy resume content directly from the page.

## Future Projects Page

Each project should be presented as a concise technical case study.

Where applicable, include:

- Problem or objective.
- Technologies and tools used.
- My specific role and contributions.
- Technical implementation.
- Outcome or results.
- Relevant repository or demonstration links.

Do not present projects as simple lists of repository links.

---

# 6. Resume Content Source

The canonical resume file is:

```text
public/resume.pdf
```

This is the single source of truth for resume content.

It is also the file served by the Download Resume button. Therefore, it must always contain the latest approved and final resume, not a draft.

## Resume Processing Workflow

When implementing or updating the resume page:

1. Extract text from `public/resume.pdf`.
2. Identify education, experience, skills, projects, and other relevant sections.
3. Structure the information into typed Astro Content Collections or another appropriately structured data source under `src/content/`.
4. Render the Resume page from this structured data.
5. Keep the PDF available as a separate downloadable file.

The Resume page must render actual HTML content rather than relying on an embedded PDF viewer.

## Resume Synchronization

If `public/resume.pdf` is updated:

- Re-extract its text.
- Update the corresponding structured resume data.
- Verify that the HTML resume matches the PDF.
- Ensure that no outdated information remains.

Never invent missing resume details.

If information is unclear or unavailable, flag it rather than fabricating experience, qualifications, responsibilities, or achievements.

The PDF remains the canonical source of truth. Structured content is a representation of that source, not an independent source of resume information.

---

# 7. Design Direction

The entire website, including Home, Resume, Contact, and future Projects pages, should feel:

**Modern, minimalist, professional, and technically credible.**

The design should complement an automotive software and embedded engineering portfolio rather than resemble a generic portfolio template.

## 7.1 Color Palette

- Use one neutral base, such as near-black/near-white.
- Use one accent color sparingly for links, buttons, and important highlights.
- Avoid multiple competing accent colors.
- Avoid gradients.
- Avoid decorative color blobs and unnecessary visual effects.
- Maintain WCAG AA contrast ratios.

## 7.2 Typography

Typography should establish the visual hierarchy.

- Prefer clean sans-serif fonts.
- Suitable options include Inter and IBM Plex Sans.
- Use a consistent type scale.
- Maintain generous line-height.
- Use letter-spacing appropriately.
- Avoid excessive font weights and decorative typography.
- Prioritize readability over visual novelty.

## 7.3 Spacing and Layout

- Prefer whitespace over borders and decorative containers.
- Use spacing to establish hierarchy.
- Maintain consistent alignment.
- Use grid-based layouts where appropriate.
- Follow Tailwind's default spacing scale.
- Avoid arbitrary spacing values without a clear reason.
- Use borders sparingly.
- Use subtle shadows only where useful, such as a soft `shadow-sm` on cards.
- Avoid heavy drop shadows.

## 7.4 Motion and Interactions

- Use subtle transitions for hover and focus states.
- Small fade-ins or other restrained effects are acceptable when appropriate.
- Avoid flashy animations.
- Avoid unnecessary parallax.
- Avoid animations that interfere with readability or navigation.
- Respect reduced-motion preferences.

## 7.5 Imagery

- Avoid generic stock-photo aesthetics.
- Do not add generic hero illustrations.
- Prefer typography-led layouts.
- Use simple technical or diagram-style graphics where relevant.
- A subtle circuit, embedded systems, or CAN-bus motif is acceptable if it supports the content.
- Avoid decorative imagery that does not communicate anything meaningful.

The content and technical experience should remain the primary focus.

---

# 8. PDF Download Button

Add a clearly visible Download Resume button or link on the Resume page.

It may also appear in the homepage or site navigation where appropriate.

The link must point directly to:

```text
/resume.pdf
```

Use the `download` attribute so the browser downloads the PDF instead of navigating to it.

Example:

```astro
<a
  href="/resume.pdf"
  download
  class="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700"
>
  Download Resume
</a>
```

## Styling Guidelines

- Treat it as a primary call-to-action.
- Use the site's accent color.
- Keep the design simple.
- Use a solid or outline button.
- Provide appropriate hover and focus states.
- Ensure sufficient contrast.
- Avoid unnecessary icons or decorative effects.

---

# 9. What the Agent Should NOT Do

- Do not introduce another CSS framework or component library alongside Tailwind.
- Do not introduce React or another frontend framework without a genuine requirement.
- Do not unnecessarily increase client-side JavaScript.
- Do not hardcode future Projects content directly into page files.
- Do not introduce unnecessary architectural complexity.
- Do not add generic placeholder or lorem-ipsum content to committed pages.
- Do not invent professional experience, projects, achievements, or technical skills.
- Do not modify the canonical resume PDF unless explicitly instructed.
- Do not let the structured resume data drift from the PDF.
- Do not introduce excessive animations or decorative visual effects.
- Do not use generic stock imagery.
- Do not sacrifice accessibility for visual appearance.
- Do not sacrifice maintainability for premature optimization.
- Do not silently ignore build errors or failed checks.
- Do not push Git commits automatically.

If content or information is missing, identify what is needed instead of inventing it.

---

# 10. Documentation

Official Astro documentation:

https://docs.astro.build

Consult the relevant documentation before implementing or modifying related functionality.

## Relevant Guides

- [Routing, dynamic routes, and middleware](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Framework components](https://docs.astro.build/en/guides/framework-components/)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling and Tailwind CSS](https://docs.astro.build/en/guides/styling/)
- [Internationalization](https://docs.astro.build/en/guides/internationalization/)

Prefer official documentation when resolving questions about Astro APIs, configuration, and recommended practices.

---

# 11. Task Completion Checklist

Before considering a task complete, verify the following where applicable:

## Implementation

- [ ] Changes follow the existing project architecture.
- [ ] Components are reusable and maintainable.
- [ ] Styling follows the established design direction.
- [ ] Responsive layouts work correctly.
- [ ] Semantic HTML and accessibility requirements are respected.
- [ ] No unnecessary dependencies or client-side JavaScript were introduced.
- [ ] No placeholder or fabricated content was added.

## Validation

- [ ] Relevant tests have been executed.
- [ ] Type checking and linting have been performed where configured.
- [ ] `npm run build` completes successfully.
- [ ] No unexpected errors or warnings were introduced.

## Git

- [ ] Changes have been reviewed with `git diff`.
- [ ] Only relevant files have been staged.
- [ ] Every logically completed change has its own appropriate commit.
- [ ] Commit messages follow Conventional Commits.
- [ ] No unrelated user changes were included.
- [ ] Commit hashes have been verified.
- [ ] No automatic Git push was performed.

## Final Report

After completing the task, provide a concise report containing:

1. **Summary:** What was implemented or fixed.
2. **Files changed:** The important files modified.
3. **Validation:** Tests, type checking, linting, and build results.
4. **Git commits:** Commit hashes and their messages.
5. **Outstanding issues:** Any remaining problems or limitations.

Committing is part of completing the task, not an optional final suggestion.
