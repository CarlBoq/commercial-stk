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
      "Hero message and value proposition",
      "Outcome cards, trust pillars, and milestone copy",
      "Team credibility cards and final CTA section",
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
    title: "First impression section",
    description:
      "Edit your main value proposition, badges, and hero dashboard image to match your latest campaign.",
    image: "/assets/HERO-DASHBOARD.png",
  },
  {
    id: "tabs",
    label: "Feature Tabs",
    title: "Interactive feature storytelling",
    description:
      "Switch feature tab labels, benefits, and screenshots to highlight your strongest product modules.",
    image: "/assets/PLACEHOLDER-FLOATING-2.png",
  },
  {
    id: "cta",
    label: "CTA",
    title: "Final conversion section",
    description:
      "Tune CTA wording, proof points, and button labels to increase trial signups and demo requests.",
    image: "/assets/PLACEHOLDER-FLOATING-3.png",
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
    title: "Brand promise and positioning",
    description:
      "Edit the high-level message, mission, and vision to align with your ideal customer and industry tone.",
    image: ABOUT_PREVIEW_IMAGES.story,
  },
  {
    id: "trust",
    label: "Trust",
    title: "Proof, security, and credibility",
    description:
      "Update trust pillars, outcome metrics, and customer confidence messaging.",
    image: ABOUT_PREVIEW_IMAGES.trust,
  },
  {
    id: "team",
    label: "Team",
    title: "People and momentum",
    description:
      "Refine team cards and milestone timeline to show progress and reliability.",
    image: ABOUT_PREVIEW_IMAGES.team,
  },
];

export function ManualModal({ triggerClassName, compact }: ManualModalProps) {
  const [selectedPage, setSelectedPage] = useState<ManualPage["id"]>("home");
  const [homePanel, setHomePanel] = useState(HOME_PANELS[0].id);
  const [howItWorksPanel, setHowItWorksPanel] = useState(HOW_IT_WORKS_PANELS[0].id);
  const [aboutPanel, setAboutPanel] = useState(ABOUT_PANELS[0].id);

  const activePage =
    PAGE_MANUAL.find((page) => page.id === selectedPage) ?? PAGE_MANUAL[0];

  const activeHomePanel =
    HOME_PANELS.find((panel) => panel.id === homePanel) ?? HOME_PANELS[0];
  const activeHowPanel =
    HOW_IT_WORKS_PANELS.find((panel) => panel.id === howItWorksPanel) ??
    HOW_IT_WORKS_PANELS[0];
  const activeAboutPanel =
    ABOUT_PANELS.find((panel) => panel.id === aboutPanel) ?? ABOUT_PANELS[0];

  const activePanel = useMemo(() => {
    if (selectedPage === "how-it-works") return activeHowPanel;
    if (selectedPage === "about") return activeAboutPanel;
    return activeHomePanel;
  }, [activeAboutPanel, activeHomePanel, activeHowPanel, selectedPage]);

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

          {(selectedPage === "home" || selectedPage === "how-it-works" || selectedPage === "about") && (
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
      </DialogContent>
    </Dialog>
  );
}
