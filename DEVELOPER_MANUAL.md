# STK Developer Manual

This manual documents the current website structure, where to edit content, how links behave, and how to manage assets and deployment.

## 1) Stack and Core Setup

- Framework: React + TypeScript + Vite
- Routing: `react-router-dom`
- Styling: Tailwind + custom CSS variables
- Entry points:
  - `src/main.tsx`
  - `src/app/App.tsx`
- Theme tokens:
  - `src/styles/theme.css`
- Navbar hover underline styles:
  - `src/styles/navbar.css`
- Global animation/helpers:
  - `src/styles/index.css`

## 2) Route Map

Defined in `src/app/App.tsx`.

- `/` -> `src/app/pages/Home.tsx`
- `/features` -> `src/app/pages/Features.tsx`
- `/features/:featureKey` -> `src/app/pages/FeatureDetail.tsx`
- `/how-it-works` -> `src/app/pages/HowItWorks.tsx`
- `/pricing` -> `src/app/pages/Pricing.tsx`
- `/about` -> `src/app/pages/About.tsx`
- `/sign-in` -> `src/app/pages/SignIn.tsx`
- `/get-started` -> `src/app/pages/GetStarted.tsx`
- `/integrations` -> `src/app/pages/Integrations.tsx`
- `/updates` -> `src/app/pages/Updates.tsx`
- `/careers` -> `src/app/pages/Careers.tsx`
- `/blog` -> `src/app/pages/Blog.tsx`
- `/contact` -> `src/app/pages/Contact.tsx`
- `/help-center` -> `src/app/pages/HelpCenter.tsx`
- `/docs` -> `src/app/pages/Docs.tsx`
- `/api-reference` -> `src/app/pages/ApiReference.tsx`
- `/status` -> `src/app/pages/Status.tsx`

## 3) Global Header (Navbar)

File: `src/app/components/Navbar.tsx`

### 3.1 Editable Header Items

- Logo source:
  - `BRAND_LOGO_SRC = ${import.meta.env.BASE_URL}assets/sparkle-logo.png`
- Main desktop nav:
  - Features
  - How It Works
  - Pricing
  - About
- Right action buttons:
  - Manual
  - Sign In
  - Get Started

### 3.2 Features Dropdown (Desktop)

Driven by:
- `FEATURE_GROUPS` (labels, cards, paths, badges)
- `MOST_REQUESTED` quick links

Behavior:
- Hover opens, mouse-out closes with delay
- Click on `Features` navigates to `/features`
- Includes `See all features` and `Book Demo`

### 3.3 Mobile Menu Behavior

- Burger icon toggles mobile panel
- `Features` expands/collapses subgroup links
- Includes `See all features` shortcut
- Sign In/Get Started remain available

### 3.4 Smooth Pricing Scroll Behavior

- `handlePricingClick`:
  - If already on Home, scrolls to `#pricing`
  - If on other pages, routes to `/#pricing`

## 4) Global Footer

File: `src/app/components/Footer.tsx`

### Editable Areas

- Logo source:
  - `assets/sparkle-logo.png`
- Social links:
  - Twitter/LinkedIn/Facebook currently `href="#"` (replace with real URLs)
- Footer link groups:
  - Product, Company, Support

### Pricing Link Behavior

- Footer pricing link uses custom handler:
  - Navigates to Home if needed
  - Smooth-scrolls to `#pricing`

## 5) Home Page Manual

File: `src/app/pages/Home.tsx`

### 5.1 Main Editable Content Blocks

- `BENEFITS`
- `FEATURED_SERVICES`
- `FEATURE_TABS` (the 4 workflow tabs in Product Walk-through)
- `PARTNERS`
- `STEPS`

### 5.2 Hero Section

- Hero image source:
  - `DEPLOYED_DASHBOARD_IMAGE = assets/HERO-DASHBOARD.png`
- Phone frame + badges:
  - `Live Attendance`
  - `Auto Overtime Rules`
- Profile blur mask is applied in the phone preview via overlay div

### 5.3 Product Walk-through Tab Images (already linked)

- Base path:
  - `assets/walkthrough/`
- Filenames:
  - `walkthrough-01-scheduling.png`
  - `walkthrough-02-overtime.png`
  - `walkthrough-03-documents.png`
  - `walkthrough-04-requests.png`

### 5.4 Partner Logos

- Section: `OUR CLIENT PARTNERS`
- Current files:
  - `assets/jollibee.png`
  - `assets/pepper-lunch.png`
  - `assets/ebc.png`
  - `assets/khiang.png`
  - `assets/7star.png`

### 5.5 Pricing on Home

- Home uses shared component:
  - `src/app/components/Pricing.tsx`
- Wrapped in:
  - `<div id="pricing">`

### 5.6 Sticky Bottom CTA

- Shows after scroll threshold
- Buttons:
  - Start Trial -> `/get-started`
  - View Pricing -> smooth scroll to `#pricing`

## 6) Carousel Manual

File: `src/app/components/HomeCarousel.tsx`

### Current Behavior

- Auto-advance every 5 seconds
- Pause on hover
- Mobile:
  - single-card layout
  - Previous/Next buttons
- Desktop:
  - 3-card floating style
  - side cards clickable

### Image Folder + Naming

- Folder:
  - `public/assets/carousel/`
- Filenames:
  - `carousel-01-live-team-dashboard.png`
  - `carousel-02-smart-shift-scheduling.png`
  - `carousel-03-overtime-insights.png`
  - `carousel-04-employee-self-service.png`
  - `carousel-05-payroll-ready-reports.png`
  - `carousel-06-mobile-workforce-view.png`

## 7) About Page Manual

File: `src/app/pages/About.tsx`

### Editable Sections

- Hero text + quote
- `OUR INSPIRATION`
- `OUR INNOVATIONS`
- Vision
- Mission (array: `MISSION_POINTS`)
- Core Values
- Philosophy strip
- Final CTA

### Innovations Assets

- Folder:
  - `public/assets/innovations/`
- Filenames:
  - `innovation-01-stk.png`
  - `innovation-02-starjobs.png`
  - `innovation-03-pos.png`
  - `innovation-04-form.png`

## 8) Pricing Manual

Two pricing implementations exist:

- Shared Home pricing section:
  - `src/app/components/Pricing.tsx`
- Dedicated pricing route page:
  - `src/app/pages/Pricing.tsx`

### Important

Keep both files in sync when changing:
- Plan names/prices
- Included features
- Comparison table rows
- CTA copy

### Mobile UX behavior currently implemented

- Pricing cards show top 7 features + `+X more`
- Comparison table hidden on mobile by default
- `Compare all features` button toggles full table

## 9) Feature Catalog (Features + Detail Pages)

File: `src/app/data/featureCatalog.ts`

Edit here to change:
- Feature keys (route slug)
- Titles/taglines/summaries
- Bullet contents

Used by:
- `Features.tsx`
- `FeatureDetail.tsx`
- `ManualModal.tsx`

## 10) Manual Modal (In-app guide button)

File: `src/app/components/ManualModal.tsx`

Contains:
- Page edit hints
- Interactive preview tabs
- Feature module index

Note:
- Some preview image references may still use old placeholders.
- Update `HOME_PANELS`, `HOW_IT_WORKS_PANELS`, `ABOUT_PANELS` to match latest assets/content.

## 11) Branding, Colors, and Typography

File: `src/styles/theme.css`

Main brand color token:
- `--primary: #2fb9e8`

To rebrand quickly:
- update `--primary`, `--ring`, `--chart-*`, and related secondary/accent tokens

Navbar underline:
- `src/styles/navbar.css`

## 12) Tab Title + Favicon

File: `index.html`

- Title:
  - `<title>STK</title>`
- Favicon:
  - `./assets/stk-favicon.png`

Place icon file in:
- `public/assets/stk-favicon.png`

## 13) Asset Folder Standard (Current)

- `public/assets/`
  - `sparkle-logo.png`
  - `HERO-DASHBOARD.png`
  - partner logos
  - `stk-favicon.png`
- `public/assets/carousel/`
- `public/assets/walkthrough/`
- `public/assets/innovations/`

When adding new grouped assets, prefer:
- `public/assets/<section-name>/...`

## 14) How to Add/Replace Links

### Internal route link

Use `Link`:
- `to="/about"`

### In-page section jump on Home

Use anchor + smooth handler:
- `href="/#pricing"` and custom click handler
- or direct scroll to `document.getElementById("pricing")`

### External link

Use `<a href="https://...">` with:
- `target="_blank" rel="noreferrer"` if new tab required

## 15) How to Add a New Navbar Tab

1. Add route in `src/app/App.tsx`
2. Add page file in `src/app/pages/`
3. Add nav entry in `src/app/components/Navbar.tsx`
4. (Optional) Add footer link in `src/app/components/Footer.tsx`

## 16) GitHub Pages Deployment

Workflow:
- `.github/workflows/deploy-pages.yml`

Build base path:
- `vite.config.ts`
- production base is `/commercial-stk/`

If site is blank on GitHub Pages, check:
1. `Settings > Pages` source is GitHub Actions
2. workflow run is green
3. `vite.config.ts` base matches repo name
4. asset paths use `import.meta.env.BASE_URL` or relative `/assets/...` compatible with base

## 17) Developer Checklist Before Pushing

1. Verify changed links/routes still resolve.
2. Verify new image filenames match code exactly.
3. Test Home hero, carousel, pricing, and nav dropdown on mobile + desktop.
4. Confirm both pricing files are consistent.
5. Confirm About innovations images load.
6. Hard-refresh browser to validate favicon/title updates.

## 18) Recommended Cleanup Tasks (Optional)

- Update `README.md` title/content (currently still "Untitled")
- Sync `ManualModal` copy to latest About/Home sections and new asset names
- Add real social media URLs in Footer
- Add fallback images for new folders (`walkthrough`, `innovations`, `carousel`) if files are missing

