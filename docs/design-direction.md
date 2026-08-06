# Personal Landing Page Design Direction

## Purpose

This document defines the design direction for Rafael Gomes' personal landing page. It is intended to guide implementation and future refinement by humans or AI agents.

The design should present Rafael as a systems-minded backend and DevOps engineer with a calm, precise, professional, and innovative point of view. The page must feel premium and distinctive without becoming visually loud, dense, or generic.

## Core Direction

The final direction is:

**Light-first Calm Systems Portfolio**

The page should behave more like a polished product page for an engineering profile than a traditional portfolio template. It should borrow the smoothness, whitespace, rounded geometry, and confident hierarchy of Apple and Revolut-style product pages, while keeping enough technical substance for recruiters to understand Rafael's backend, DevOps, architecture, and project experience.

The emotional goal is:

- Calm.
- Smooth.
- Organized.
- Easy to digest.
- Premium.
- Ambitious.
- Innovative, but not flashy.

The user should understand the focus quickly:

> Rafael builds systems with clarity, especially across backend engineering, DevOps delivery, and architecture decisions.

## Why This Direction

Earlier dark studio explorations had personality, but they risked making the page feel like a design agency site or a technical dashboard. The final direction keeps the personality, but moves it into rhythm, spacing, typography, and polished interaction rather than visual density.

This is important because the primary audience is recruiters for junior backend and DevOps roles. They need a page that feels memorable and high-quality, but they also need to find practical evidence quickly:

- What Rafael focuses on.
- What technical areas he is strong in.
- Which projects prove that experience.
- What role he played.
- Which technologies he used.
- What outcome or impact each project had.

The design must therefore balance two variables:

1. A calm, smooth, premium first impression.
2. Recruiter-grade technical information that remains accessible.

The solution is progressive disclosure:

- The homepage stays visual, calm, and easy to scan.
- Project cards show enough detail to be useful.
- Full project detail opens only when the user clicks **View more details**.

## Brand Personality

The page should feel like:

- A premium engineering product page.
- A calm systems portfolio.
- A confident but approachable personal brand.
- A polished recruiter-facing profile with strong taste.

The page should not feel like:

- A dense technical dashboard.
- A generic developer portfolio template.
- A design agency landing page.
- A startup SaaS homepage.
- A resume pasted into cards.
- A dark neon developer website.

## Visual Principles

### 1. Calm First

Every section should be easy to understand at first glance. Avoid compressing too much information into one viewport. Let whitespace do real work.

Use large sections, generous padding, and clear visual grouping. When in doubt, reduce visual elements before adding new ones.

### 2. Big Typography With Restraint

Large, bold typography is a core part of the design. It should be used for moments that define the page:

- Hero headline.
- Section introductions.
- Project highlight headings.
- Key positioning statements.

Do not make every card or label oversized. The page should have dramatic moments and quiet supporting content.

### 3. Light Default, Dark Contrast Moments

The homepage should default to light mode. Dark sections should be used as intentional contrast, especially for selected work or project detail experiences.

This creates a smoother product-page feeling while still keeping the premium graphite mood from the dark explorations.

### 4. Product-Page Rhythm

Sections should feel like product storytelling:

- Big statement.
- Short support copy.
- Rounded visual object or card.
- Clear next action.
- Progressive reveal of detail.

Avoid repeating the same grid/card formula in every section.

### 5. Rounded, Spacious Surfaces

Large cards and panels should use very rounded corners and generous internal padding. Rounded geometry is a key part of the smooth, calm feeling.

Suggested radii:

- Large section cards: `32px` to `44px`.
- Medium cards: `24px` to `32px`.
- Pills/buttons: fully rounded.
- Small tags: fully rounded or `999px`.

Do not use sharp, enterprise-dashboard cards.

### 6. Selective Glassmorphism

Glassmorphism is allowed, but only where it supports interaction or hierarchy.

Good uses:

- Floating navbar.
- Carousel arrows.
- Fullscreen control.
- Close button.
- Modal overlay controls.
- Small floating project controls.

Avoid using glassmorphism on every card. The effect should feel Apple-like: subtle, functional, and premium.

## Color Direction

The preferred palette is calm, black-and-white first, with soft graphite and pale glacier accents.

### Light Theme

- Page background: `#F7F7F4`
- Clean surface: `#FFFFFF`
- Primary text: `#141416`
- Secondary text: `#6E737A`
- Soft graphite: `#242529`
- Pale glacier accent: `#8FBFDA`
- Light silver: `#E7E9EC`

### Dark Contrast Sections

- Graphite background: `#0A0B0D`
- Deep modal background: `#060708`
- Dark card surface: `#0D0F12`
- Secondary dark surface: `#111317`
- Porcelain text: `#F7F7F4`
- Muted dark text: `#A8ADB5`
- Pale glacier accent: `#8FBFDA`
- Silver line/control: `#E7E9EC`

### Color Rules

- Default page should feel light, calm, and open.
- Dark graphite should be reserved for project highlight and project detail moments.
- Use pale glacier as a subtle accent only.
- Avoid loud gradients.
- Avoid red, orange, purple, and saturated neon as dominant colors.
- Do not copy the color palettes from the inspiration references.

## Typography

The preferred direction is Space Grotesk-led.

### Primary Font

Use **Space Grotesk** for:

- Hero headlines.
- Section headings.
- Navbar.
- Buttons.
- Card titles.
- Project names.
- Strong labels.

Space Grotesk gives the page a more distinctive, future-facing voice than generic sans fonts.

### Secondary / Technical Font

Use **IBM Plex Mono** or a similar restrained monospace font only for small technical metadata:

- Project numbers.
- Slide count.
- Stack labels.
- Status labels.
- Small metadata rows.

Do not use monospace for large bodies of text.

### Typography Rules

- Hero typography should be large and confident.
- Body copy should remain readable, usually `15px` to `18px`.
- Keep line lengths comfortable.
- Do not use negative letter spacing.
- Do not make the page feel like a code editor.
- Avoid generic Inter-style visual neutrality unless it is only a fallback.

## Page Structure

### 1. Navbar

The navbar should be a floating glass element.

Required qualities:

- Minimal.
- Rounded/pill-like.
- Subtle blur.
- Light by default.
- Clear wordmark or `RG` mark.
- Links: About, Focus, Work, Contact.
- One clear action, such as Contact or View work.

Why:

The navbar is a good place to use glassmorphism because it has a functional reason to float above content. It also creates the Apple-like premium feeling without overusing the effect.

### 2. Hero

The hero should establish the page immediately with large typography.

Recommended headline:

> Systems built with clarity.

Supporting copy should make the backend and DevOps focus explicit:

> Backend engineering, DevOps delivery, and architecture decisions for reliable software.

Hero requirements:

- Light background.
- Very large Space Grotesk headline.
- Calm supporting copy.
- Rounded pill CTAs.
- No personal photo for now.
- Optional subtle abstract systems visual, but not a dense dashboard.

Good CTAs:

- View projects.
- Technical focus.
- Contact.

Why:

The hero needs to feel bold and clear, but not overwhelming. It should define Rafael's engineering position in a calm, product-page way.

### 3. Technical Focus Section

This section should show Rafael's main strengths using three large, rounded, spacious cards:

- Backend engineering.
- DevOps delivery.
- Architecture decisions.

Each card should include:

- A concise title.
- One short explanatory paragraph.
- Two or three proof bullets.
- A small stack preview or tags.

Why:

This makes Rafael's focus clear before the user reaches projects. It gives recruiters an easy mental model for the profile.

### 4. Projects Section

The projects section should be a dark graphite contrast moment.

It should feel like a MacBook-style product highlight section:

- Dark background.
- Large rounded project panels.
- Strong section headline.
- Calm carousel/project navigation.
- Project visual preview.
- Recruiter-friendly summary.

Homepage project cards should include:

- Project title.
- Short summary.
- Visual/media preview area.
- Role or focus.
- Stack tags.
- A short outcome.
- **View more details** button.

The homepage card should not show every detail. It should invite deeper inspection.

Why:

Projects need to be visually engaging, but recruiters also need substance. The homepage should be smooth; the modal should carry depth.

### 5. Project Detail Modal

The final modal direction is:

**Minimal Dark Detail Room**

This opens when the user clicks **View more details** on a homepage project card.

Required structure:

- Blurred/out-of-focus homepage background.
- Large centered dark graphite modal.
- Top title/buttons area.
- Exactly two main cards:
  - Media carousel card.
  - Details card.
- No bottom navigation strip.
- No horizontal divider between the title area and cards.
- No fixed media category tabs.

#### Top Area

The top area should include:

- Project number.
- Project title.
- One-line summary.
- Status pill.
- GitHub/repository button when available.
- Close button.

Do not place a divider below this area.

#### Media Carousel Card

The left card should be a generic media carousel.

It may contain any mix of:

- Demo videos.
- Interface screenshots.
- Architecture diagrams.
- Deployment diagrams.
- Benchmark charts.
- Metrics screenshots.
- Repo or documentation visuals.

Do not create fixed tabs like `Demo`, `Architecture`, `Interface`, or `Metrics`. Different projects will have different types of media, so the carousel must stay flexible.

Controls:

- Previous arrow.
- Next arrow.
- Fullscreen button.
- Optional play button for videos.
- Slide count.
- Progress dots or segmented progress bar.

Use subtle glass controls.

#### Details Card

The right card should be structured, calm, and recruiter-friendly.

Required sections:

- Recruiter scan.
- Problem.
- My contribution.
- Technical decisions.
- Outcome.

The recruiter scan can include:

- Role.
- Stack.
- Status.
- Year or duration.

The details card should not feel like a report. Use short sections, clear labels, subtle separators, and generous whitespace.

Why:

The modal gives recruiters the detail they need without compromising the homepage's smoothness. It also lets future project media vary naturally.

## Interaction Model

### Homepage

Interactions should be smooth and restrained:

- Navbar blur on scroll.
- Gentle hover states.
- Project card hover affordance.
- Carousel dots/arrows in project section.
- Smooth modal open/close.
- Reduced motion support.

Avoid excessive animations. Motion should make the page feel calm and polished, not busy.

### Project Detail Modal

Interaction flow:

1. User clicks **View more details** on a project card.
2. Homepage background blurs and dims.
3. Minimal Dark Detail Room modal opens.
4. User can browse media carousel.
5. User can fullscreen media.
6. User can inspect details.
7. User closes modal and returns to the same homepage position.

## Content Strategy

### Voice

Copy should be clear, confident, and concise.

Avoid:

- Overly broad claims.
- Buzzwords without evidence.
- Long resume paragraphs.
- Generic phrases like "passionate developer."

Prefer:

- Specific engineering focus.
- Clear role and contribution.
- Concrete technical decisions.
- Outcome-oriented project summaries.

### Project Summary Pattern

Use this content model for every project:

- Title.
- One-line summary.
- Focus area.
- Problem.
- My contribution.
- Technical decisions.
- Stack.
- Outcome.
- Media items.
- Repository link when available.

### Project Media Strategy

Project media should eventually be project-specific.

Good media:

- Actual interface screenshots.
- Short demo clips.
- Architecture diagrams.
- Deployment diagrams.
- CI/CD screenshots.
- Benchmark charts.
- Annotated visuals.

Avoid generic stock imagery. If real media is not ready, use calm abstract placeholders that imply the future asset type without pretending to be final evidence.

## Implementation Guidance

### Component Priorities

Implement in this order:

1. Global design tokens and typography.
2. Light-first page background and dark contrast section tokens.
3. Floating glass navbar.
4. Big-type hero.
5. Technical focus cards.
6. Dark project highlight section.
7. Homepage project cards.
8. Minimal Dark Detail Room modal.
9. Generic media carousel.
10. Responsive and accessibility pass.

### Suggested Data Shape

Projects should support homepage and modal content separately:

```ts
type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt?: string;
  caption?: string;
};

type Project = {
  id: string;
  title: string;
  summary: string;
  focus: string;
  role: string;
  status: "completed" | "in-progress" | "research";
  year?: string;
  stack: string[];
  problem: string;
  contribution: string;
  decisions: string[];
  outcome: string;
  media: ProjectMedia[];
  githubUrl?: string;
};
```

### Accessibility

- Modal must trap focus.
- Escape closes modal.
- Close button must have an accessible label.
- Carousel controls must be keyboard reachable.
- Media captions and alt text are required.
- Support `prefers-reduced-motion`.
- Keep color contrast high in dark sections.

### Responsive Behavior

Desktop:

- Hero uses large type and spacious layout.
- Project modal uses two balanced columns.

Tablet:

- Project modal can keep two columns if readable, otherwise stack.
- Cards keep large rounded corners.

Mobile:

- Hero headline remains bold but must not overflow.
- Focus cards stack.
- Project cards stack.
- Detail modal becomes a full-screen sheet.
- Media carousel appears before details.

## Do

- Use large whitespace.
- Use big typography intentionally.
- Keep default page light.
- Use dark graphite only for contrast moments.
- Use very rounded cards.
- Use pill buttons.
- Use glassmorphism selectively.
- Keep project details available but progressively disclosed.
- Make project media flexible.
- Keep copy clear and recruiter-friendly.

## Do Not

- Do not turn the page into a dashboard.
- Do not make dark mode the default visual identity.
- Do not overuse glassmorphism.
- Do not use fixed media tabs in project detail.
- Do not place all project details on the homepage.
- Do not use generic stock imagery as final project evidence.
- Do not repeat the same card grid pattern in every section.
- Do not use loud gradients or saturated accent colors.
- Do not make typography small in the hero.
- Do not hide Rafael's backend and DevOps focus behind abstract positioning.

## Final Design Summary

The final page should feel like a calm, premium product page for Rafael's engineering profile.

The homepage should communicate:

- Rafael thinks in systems.
- His current focus is backend and DevOps.
- He values clarity, reliability, architecture, and delivery discipline.
- His work is organized, thoughtful, and technically grounded.

The project section should be the main contrast moment:

- Smooth dark graphite presentation.
- Large visual project cards.
- Clear summary details.
- A focused modal for deeper evidence.

The project modal should be:

- Dark.
- Balanced.
- Two-card.
- Media-flexible.
- Recruiter-friendly.
- Calm, not dense.

This direction should guide the implementation and future design refinements.
