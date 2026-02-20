import React, { useMemo, useState } from "react";
import { BookOpen, Megaphone, Sparkles } from "lucide-react";
import { FEATURE_CATALOG } from "../data/featureCatalog";
import {
  ABOUT_PREVIEW_IMAGES,
  HOW_IT_WORKS_PREVIEW_IMAGES,
} from "../data/manualPreviewImages";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

type ManualModalProps = {
  triggerClassName?: string;
  compact?: boolean;
};

type ManualPage = {
  id: "home" | "how-it-works" | "about" | "features" | "pricing" | "navbar";
  label: string;
  path: string;
  purpose: string;
  file: string;
  editable: string[];
};

type InteractivePanel = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
};

const WEBSITE_SECTIONS = [
  {
    title: "Attract",
    points: [
      "Strong headline, social proof, and visual product preview",
      "Clear CTA path for trial or demo",
    ],
  },
  {
    title: "Educate",
    points: [
      "Feature overviews and dedicated detail pages",
      "Step-by-step process explanation",
    ],
  },
  {
    title: "Convert",
    points: [
      "Pricing, trust signals, and sticky CTAs",
      "Low-friction next steps for leads",
    ],
  },
];

const PAGE_MANUAL: ManualPage[] = [
  {
    id: "home",
    label: "Home",
    path: "/",
    purpose: "Main marketing story and conversion page",
    file: "src/app/pages/Home.tsx",
    editable: [
      "Hero heading, subheading, and CTA copy",
      "Feature tab copy and preview images",
      "Testimonials, trust metrics, and final CTA",
    ],
  },
  {
    id: "how-it-works",
    label: "How It Works",
    path: "/how-it-works",
    purpose: "Guided workflow explanation",
    file: "src/app/pages/HowItWorks.tsx",
    editable: [
      "Timeline step titles and descriptions",
      "Interactive Setup/Schedule/Payroll tab content",
      "Before/After statements and role cards",
    ],
  },
  {
    id: "features",
    label: "Features",
    path: "/features and /features/:featureKey",
    purpose: "Feature discovery and module detail pages",
    file: "src/app/data/featureCatalog.ts",
    editable: [
      "Feature names, summaries, and tagged content lists",
      "Feature detail route content generated from catalog",
      "Feature card labels and CTA wording",
    ],
  },
  {
    id: "about",
    label: "About",
    path: "/about",
    purpose: "Trust and credibility page for brand positioning",
    file: "src/app/pages/About.tsx",
    editable: [
      "Hero message and quote banner",
      "Inspiration, Innovations, Vision, Mission, Core Values, and Philosophy strip",
      "Innovation card images and final CTA section",
    ],
  },
  {
    id: "pricing",
    label: "Pricing",
    path: "/pricing",
    purpose: "Plan comparison and package decision page",
    file: "src/app/pages/Pricing.tsx",
    editable: [
      "Plan names, prices, and included features",
      "Comparison table content",
      "Bottom CTA and enterprise contact copy",
    ],
  },
  {
    id: "navbar",
    label: "Navbar",
    path: "Global",
    purpose: "Top navigation and mega-menu behavior",
    file: "src/app/components/Navbar.tsx",
    editable: [
      "Menu labels and feature dropdown sections",
      "Hover/open/close behavior and panel sizing",
      "Manual button placement and right-side action buttons",
    ],
  },
];

const HOME_PANELS: InteractivePanel[] = [
  {
    id: "hero",
    label: "Hero",
    title: "Hero and phone preview",
    description:
      "Edit headline, subtext, hero badges, and the mobile-style dashboard preview with privacy blur.",
    image: "/assets/HERO-DASHBOARD.png",
  },
  {
    id: "tabs",
    label: "Feature Tabs",
    title: "Product walk-through tabs",
    description:
      "Update Scheduling/Overtime/Documents/Requests tab labels, bullets, and walkthrough screenshots.",
    image: "/assets/walkthrough/walkthrough-01-scheduling.png",
  },
  {
    id: "partners",
    label: "Partners",
    title: "Client partner showcase",
    description:
      "Manage partner logos, names, and hover behavior for the OUR CLIENT PARTNERS section.",
    image: "/assets/jollibee.png",
  },
];

const HOW_IT_WORKS_PANELS: InteractivePanel[] = [
  {
    id: "setup",
    label: "Setup",
    title: "Set up your workspace",
    description:
      "Customize onboarding instructions, setup bullets, and image to match your client onboarding flow.",
    image: HOW_IT_WORKS_PREVIEW_IMAGES.setup,
  },
  {
    id: "schedule",
    label: "Schedule",
    title: "Launch schedules and policies",
    description:
      "Edit schedule workflow content, approval examples, and relevant screenshots.",
    image: HOW_IT_WORKS_PREVIEW_IMAGES.schedule,
  },
  {
    id: "payroll",
    label: "Payroll",
    title: "Run payroll-ready operations",
    description:
      "Update payroll and reporting messaging to reflect your current process and integrations.",
    image: HOW_IT_WORKS_PREVIEW_IMAGES.payroll,
  },
];

const ABOUT_PANELS: InteractivePanel[] = [
  {
    id: "story",
    label: "Story",
    title: "Inspiration and story",
    description:
      "Edit About hero quote and the Our Inspiration narrative content block.",
    image: ABOUT_PREVIEW_IMAGES.story,
  },
  {
    id: "innovations",
    label: "Innovations",
    title: "Innovation product cards",
    description:
      "Update the four innovation cards and replace logos from assets/innovations.",
    image: "/assets/innovations/innovation-01-stk.png",
  },
  {
    id: "vision-mission",
    label: "Vision/Mission",
    title: "Vision, mission, values, and philosophy",
    description:
      "Adjust mission bullets, core values copy, and philosophy strip presentation.",
    image: ABOUT_PREVIEW_IMAGES.team,
  },
];

const PRICING_PANELS: InteractivePanel[] = [
  {
    id: "plans",
    label: "Plans",
    title: "Plan cards and pricing tiers",
    description:
      "Edit plan names, prices, and included feature lists in both pricing files.",
    image: "/assets/walkthrough/walkthrough-02-overtime.png",
  },
  {
    id: "comparison",
    label: "Comparison",
    title: "Feature comparison table",
    description:
      "Control checkmark availability and row order for Starter, Growth, and Enterprise.",
    image: "/assets/walkthrough/walkthrough-03-documents.png",
  },
  {
    id: "mobile",
    label: "Mobile UX",
    title: "Mobile pricing interaction",
    description:
      "Configure the Compare all features toggle and the short-list card behavior on small screens.",
    image: "/assets/walkthrough/walkthrough-04-requests.png",
  },
];

const NAVBAR_PANELS: InteractivePanel[] = [
  {
    id: "links",
    label: "Links",
    title: "Header links and destinations",
    description:
      "Edit top navigation links, active states, and smooth scroll behavior for pricing anchors.",
    image: "/assets/sparkle-logo.png",
  },
  {
    id: "features-menu",
    label: "Features Menu",
    title: "Desktop dropdown and mobile submenu",
    description:
      "Manage FEATURE_GROUPS, badges, Most Requested links, and See all features behavior.",
    image: "/assets/walkthrough/walkthrough-01-scheduling.png",
  },
  {
    id: "actions",
    label: "Actions",
    title: "Manual / Sign In / Get Started actions",
    description:
      "Configure CTA button labels, routes, and compact mobile action layout.",
    image: "/assets/walkthrough/walkthrough-02-overtime.png",
  },
];

const DEV_INSTRUCTIONS = [
  {
    title: "Routes and Pages",
    points: [
      "/ -> Home.tsx",
      "/features + /features/:featureKey -> Features.tsx + FeatureDetail.tsx",
      "/how-it-works, /pricing, /about, /get-started, /sign-in and support pages are mapped in App.tsx",
      "Add new route in src/app/App.tsx, then add its page file under src/app/pages/",
    ],
  },
  {
    title: "Navbar and Footer",
    points: [
      "Navbar is in src/app/components/Navbar.tsx",
      "Feature dropdown groups are controlled by FEATURE_GROUPS and MOST_REQUESTED",
      "Footer is in src/app/components/Footer.tsx",
      "Pricing links use smooth scroll to #pricing on Home",
    ],
  },
  {
    title: "Home Content Controls",
    points: [
      "Main editable blocks: BENEFITS, FEATURED_SERVICES, FEATURE_TABS, STEPS, PARTNERS",
      "Product walk-through tabs use FEATURE_TABS images",
      "Hero phone preview uses assets/HERO-DASHBOARD.png with privacy blur overlay",
      "Sticky CTA appears after scroll threshold and links to /get-started and #pricing",
    ],
  },
  {
    title: "Pricing Controls",
    points: [
      "Home pricing component: src/app/components/Pricing.tsx",
      "Full pricing page: src/app/pages/Pricing.tsx",
      "Keep both plan arrays and comparison rows aligned",
      "Mobile UX: show top features first, then expand comparison table",
    ],
  },
  {
    title: "About Page Controls",
    points: [
      "About content is in src/app/pages/About.tsx",
      "Sections: Inspiration, Innovations, Vision, Mission, Core Values, Philosophy, CTA",
      "Innovation cards are controlled by INNOVATIONS array",
      "Mission bullets are controlled by MISSION_POINTS array",
    ],
  },
  {
    title: "Assets and Naming",
    points: [
      "Brand logo: public/assets/sparkle-logo.png",
      "Favicon: public/assets/stk-favicon.png (set in index.html)",
      "Carousel images: public/assets/carousel/carousel-01..06-*.png",
      "Walk-through images: public/assets/walkthrough/walkthrough-01..04-*.png",
      "Innovation images: public/assets/innovations/innovation-01..04-*.png",
    ],
  },
  {
    title: "Theme and Branding",
    points: [
      "Primary accent and color tokens are in src/styles/theme.css",
      "Navbar hover underline style is in src/styles/navbar.css",
      "Global reveal/hover animation helpers are in src/styles/index.css",
      "Use import.meta.env.BASE_URL for deploy-safe asset paths",
    ],
  },
  {
    title: "Deployment Notes",
    points: [
      "GitHub Pages workflow: .github/workflows/deploy-pages.yml",
      "Vite base path is configured in vite.config.ts",
      "For repo deploy, production base must match /commercial-stk/",
      "If page is blank after deploy, re-check base path and asset URLs first",
    ],
  },
];

export function ManualModal({ triggerClassName, compact }: ManualModalProps) {
  const [selectedPage, setSelectedPage] = useState<ManualPage["id"]>("home");
  const [homePanel, setHomePanel] = useState(HOME_PANELS[0].id);
  const [howItWorksPanel, setHowItWorksPanel] = useState(HOW_IT_WORKS_PANELS[0].id);
  const [aboutPanel, setAboutPanel] = useState(ABOUT_PANELS[0].id);
  const [pricingPanel, setPricingPanel] = useState(PRICING_PANELS[0].id);
  const [navbarPanel, setNavbarPanel] = useState(NAVBAR_PANELS[0].id);

  const activePage =
    PAGE_MANUAL.find((page) => page.id === selectedPage) ?? PAGE_MANUAL[0];

  const activeHomePanel =
    HOME_PANELS.find((panel) => panel.id === homePanel) ?? HOME_PANELS[0];
  const activeHowPanel =
    HOW_IT_WORKS_PANELS.find((panel) => panel.id === howItWorksPanel) ??
    HOW_IT_WORKS_PANELS[0];
  const activeAboutPanel =
    ABOUT_PANELS.find((panel) => panel.id === aboutPanel) ?? ABOUT_PANELS[0];
  const activePricingPanel =
    PRICING_PANELS.find((panel) => panel.id === pricingPanel) ??
    PRICING_PANELS[0];
  const activeNavbarPanel =
    NAVBAR_PANELS.find((panel) => panel.id === navbarPanel) ??
    NAVBAR_PANELS[0];

  const activePanel = useMemo(() => {
    if (selectedPage === "how-it-works") return activeHowPanel;
    if (selectedPage === "about") return activeAboutPanel;
    if (selectedPage === "pricing") return activePricingPanel;
    if (selectedPage === "navbar") return activeNavbarPanel;
    return activeHomePanel;
  }, [
    activeAboutPanel,
    activeHomePanel,
    activeHowPanel,
    activeNavbarPanel,
    activePricingPanel,
    selectedPage,
  ]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={compact ? "ghost" : "outline"}
          size={compact ? "sm" : "default"}
          className={triggerClassName}
        >
          <BookOpen className="h-4 w-4" />
          Manual
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-5xl max-h-[88vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Website Showcase Manual</DialogTitle>
          <DialogDescription>
            Interactive guide for your marketing website and where developers
            should edit content/layout.
          </DialogDescription>
        </DialogHeader>

        <section className="rounded-lg border border-border bg-muted/20 p-4">
          <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <Megaphone className="h-4 w-4 text-primary" />
            Marketing Story Flow
          </h3>
          <div className="grid md:grid-cols-3 gap-3">
            {WEBSITE_SECTIONS.map((section) => (
              <article key={section.title} className="rounded-md border border-border bg-white p-3">
                <p className="text-sm font-semibold text-foreground">{section.title}</p>
                <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-border bg-muted/20 p-4">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            Interactive Page Preview
          </h3>

          <div className="flex flex-wrap gap-2 mb-4">
            {PAGE_MANUAL.map((page) => (
              <button
                key={page.id}
                type="button"
                onClick={() => setSelectedPage(page.id)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  selectedPage === page.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-white text-foreground hover:border-primary/60 hover:text-primary"
                }`}
              >
                {page.label}
              </button>
            ))}
          </div>

          <div className="rounded-md border border-border bg-white p-4">
            <p className="text-sm font-semibold text-foreground">{activePage.label}</p>
            <p className="text-xs text-muted-foreground mt-1">{activePage.path}</p>
            <p className="text-sm text-foreground mt-2">{activePage.purpose}</p>
            <p className="text-xs text-primary mt-2">Primary file: {activePage.file}</p>
            <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
              {activePage.editable.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {(
            selectedPage === "home" ||
            selectedPage === "how-it-works" ||
            selectedPage === "about" ||
            selectedPage === "pricing" ||
            selectedPage === "navbar"
          ) && (
            <div className="mt-4 grid lg:grid-cols-[1fr_0.9fr] gap-4">
              <div className="rounded-md border border-border bg-white p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground mb-2">
                  Demo Controls
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {(selectedPage === "how-it-works"
                    ? HOW_IT_WORKS_PANELS
                    : selectedPage === "about"
                      ? ABOUT_PANELS
                      : selectedPage === "pricing"
                        ? PRICING_PANELS
                        : selectedPage === "navbar"
                          ? NAVBAR_PANELS
                          : HOME_PANELS).map(
                    (panel) => (
                      <button
                        key={panel.id}
                        type="button"
                        onClick={() =>
                          selectedPage === "how-it-works"
                            ? setHowItWorksPanel(panel.id)
                            : selectedPage === "about"
                              ? setAboutPanel(panel.id)
                              : selectedPage === "pricing"
                                ? setPricingPanel(panel.id)
                                : selectedPage === "navbar"
                                  ? setNavbarPanel(panel.id)
                            : setHomePanel(panel.id)
                        }
                        className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                          activePanel.id === panel.id
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-white text-foreground hover:border-primary/50 hover:text-primary"
                        }`}
                      >
                        {panel.label}
                      </button>
                    ),
                  )}
                </div>
                <p className="text-sm font-semibold text-foreground">{activePanel.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{activePanel.description}</p>
              </div>

              <div className="rounded-md border border-border bg-white p-3">
                <div className="aspect-[16/10] rounded-md overflow-hidden bg-muted/30">
                  <ImageWithFallback
                    src={activePanel.image}
                    alt={`${activePanel.label} preview`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </section>

        <section className="rounded-lg border border-border bg-muted/20 p-4">
          <h3 className="font-semibold text-foreground mb-2">Feature Module Index</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {FEATURE_CATALOG.map((feature) => (
              <div key={feature.key} className="rounded-md border border-border bg-white px-3 py-2">
                <p className="text-sm font-medium text-foreground">{feature.title}</p>
                <p className="text-xs text-muted-foreground">{feature.tagline}</p>
                <p className="text-xs text-primary mt-1">/features/{feature.key}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-border bg-muted/20 p-4">
          <h3 className="font-semibold text-foreground mb-2">Developer Instruction Manual</h3>
          <p className="text-xs text-muted-foreground mb-4">
            Quick reference for tabs, buttons, functions, editable blocks, links, assets, and deployment behavior.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {DEV_INSTRUCTIONS.map((group) => (
              <article key={group.title} className="rounded-md border border-border bg-white p-3">
                <p className="text-sm font-semibold text-foreground">{group.title}</p>
                <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                  {group.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
}
