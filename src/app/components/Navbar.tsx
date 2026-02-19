import { type MouseEvent, useEffect, useRef, useState } from "react";
import {
  CalendarClock,
  ChevronDown,
  Clock,
  FileCheck2,
  FileText,
  Gauge,
  Menu,
  ReceiptText,
  ShieldCheck,
  X,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ManualModal } from "./ManualModal";

type FeatureNavItem = {
  title: string;
  desc: string;
  path: string;
  badge?: "New" | "Popular";
  Icon: React.ComponentType<{ className?: string }>;
};

type FeatureNavGroup = {
  label: string;
  items: FeatureNavItem[];
};

const FEATURE_GROUPS: FeatureNavGroup[] = [
  {
    label: "Scheduling",
    items: [
      {
        title: "My Schedule",
        desc: "Publish and confirm shifts faster.",
        path: "/features/my-schedule",
        badge: "Popular",
        Icon: CalendarClock,
      },
      {
        title: "My Request",
        desc: "Handle leave and shift-change approvals.",
        path: "/features/my-request",
        Icon: FileCheck2,
      },
      {
        title: "Training and Development",
        desc: "Access videos and modules in one place.",
        path: "/features/training",
        badge: "New",
        Icon: FileCheck2,
      },
    ],
  },
  {
    label: "Payroll",
    items: [
      {
        title: "Premium Values",
        desc: "Track overtime and premium hours accurately.",
        path: "/features/premium-values",
        badge: "Popular",
        Icon: ReceiptText,
      },
      {
        title: "My Schedule Cost",
        desc: "Forecast labor costs before publish.",
        path: "/features/my-schedule-cost",
        Icon: Gauge,
      },
    ],
  },
  {
    label: "Compliance",
    items: [
      {
        title: "My Documents",
        desc: "Secure employee records in one place.",
        path: "/features/my-documents",
        badge: "New",
        Icon: FileText,
      },
      {
        title: "My Company",
        desc: "Centralize policies and culture assets.",
        path: "/features/my-company",
        Icon: ShieldCheck,
      },
    ],
  },
];

const MOST_REQUESTED = [
  { label: "Overtime Rules", path: "/features/premium-values" },
  { label: "Shift Templates", path: "/features/my-schedule" },
  { label: "Manager Approvals", path: "/features/my-request" },
];

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const featuresMenuRef = useRef<HTMLDivElement | null>(null);
  const featuresCloseTimerRef = useRef<number | null>(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopFeaturesOpen, setDesktopFeaturesOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setDesktopFeaturesOpen(false);
    setMobileFeaturesOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onPointerDown = (event: globalThis.MouseEvent) => {
      const target = event.target as Node;
      if (featuresMenuRef.current && !featuresMenuRef.current.contains(target)) {
        setDesktopFeaturesOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  useEffect(() => {
    return () => {
      if (featuresCloseTimerRef.current !== null) {
        window.clearTimeout(featuresCloseTimerRef.current);
      }
    };
  }, []);

  const openFeaturesMenu = () => {
    if (featuresCloseTimerRef.current !== null) {
      window.clearTimeout(featuresCloseTimerRef.current);
      featuresCloseTimerRef.current = null;
    }
    setDesktopFeaturesOpen(true);
  };

  const closeFeaturesMenuWithDelay = () => {
    if (featuresCloseTimerRef.current !== null) {
      window.clearTimeout(featuresCloseTimerRef.current);
    }
    featuresCloseTimerRef.current = window.setTimeout(() => {
      setDesktopFeaturesOpen(false);
      featuresCloseTimerRef.current = null;
    }, 160);
  };

  const handleNavClick = (
    e: MouseEvent<HTMLElement>,
    to: string,
    hash?: string,
  ) => {
    if (location.pathname === to) {
      e.preventDefault();
      if (hash) {
        const el = document.getElementById(hash.replace("#", ""));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }
  };

  const handlePricingClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname !== "/") {
      e.preventDefault();
      navigate("/#pricing");
    } else {
      e.preventDefault();
      const el = document.getElementById("pricing");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }
  };

  const handleFeatureItemClick = () => {
    setDesktopFeaturesOpen(false);
  };

  const isFeaturesActive = location.pathname.startsWith("/features");

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3">
          <Link
            to="/"
            className="flex items-center gap-2 min-w-0"
            onClick={(e) => handleNavClick(e, "/")}
          >
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <span className="text-base sm:text-xl font-semibold text-foreground truncate">
              Sparkle Timekeeping
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <div
              ref={featuresMenuRef}
              className="relative"
              onMouseEnter={openFeaturesMenu}
              onMouseLeave={closeFeaturesMenuWithDelay}
            >
              <button
                type="button"
                className={`navbar-link !inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors${isFeaturesActive ? " active" : ""}`}
                aria-current={isFeaturesActive ? "page" : undefined}
                aria-expanded={desktopFeaturesOpen}
                onFocus={openFeaturesMenu}
                onBlur={closeFeaturesMenuWithDelay}
                onClick={() => setDesktopFeaturesOpen((prev) => !prev)}
              >
                Features
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${desktopFeaturesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {desktopFeaturesOpen && (
                <div
                  className="absolute left-1/2 top-[calc(100%+0.2rem)] z-50 w-[min(95vw,980px)] -translate-x-1/2 rounded-2xl border border-border bg-white shadow-2xl overflow-hidden"
                  onMouseEnter={openFeaturesMenu}
                  onMouseLeave={closeFeaturesMenuWithDelay}
                >
                  <div className="grid gap-5 p-6 max-h-[75vh] overflow-y-auto lg:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_0.9fr]">
                    {FEATURE_GROUPS.map((group) => (
                      <div key={group.label}>
                        <p className="mb-3 text-xs font-semibold tracking-[0.14em] uppercase text-muted-foreground">
                          {group.label}
                        </p>
                        <div className="space-y-2">
                          {group.items.map((item) => (
                            <Link
                              key={item.title}
                              to={item.path}
                              onClick={handleFeatureItemClick}
                              className="block rounded-lg border border-transparent p-2 hover:border-primary/20 hover:bg-primary/5"
                            >
                              <div className="flex items-start gap-2">
                                <item.Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium text-foreground">{item.title}</span>
                                    {item.badge && (
                                      <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold uppercase text-primary">
                                        {item.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-muted-foreground leading-snug">{item.desc}</p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}

                    <div className="rounded-xl border border-border bg-muted/20 p-3 lg:col-span-2 xl:col-span-1">
                      <p className="text-xs font-semibold tracking-[0.14em] uppercase text-muted-foreground mb-2">
                        Most Requested
                      </p>
                      <div className="space-y-2">
                        {MOST_REQUESTED.map((item) => (
                          <Link
                            key={item.label}
                            to={item.path}
                            onClick={handleFeatureItemClick}
                            className="block rounded-md px-2 py-1.5 text-sm text-foreground hover:bg-white hover:text-primary"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 rounded-lg bg-white p-3 border border-border">
                        <p className="text-sm font-semibold text-foreground">See Sparkle in action</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Explore all capabilities and book a live walkthrough.
                        </p>
                        <div className="mt-3 flex gap-2">
                          <Link to="/features" className="flex-1">
                            <Button size="sm" variant="secondary" className="w-full">
                              See All
                            </Button>
                          </Link>
                          <a href="/#pricing" className="flex-1" onClick={handlePricingClick}>
                            <Button size="sm" className="w-full">
                              Book Demo
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/how-it-works"
              className={`navbar-link text-muted-foreground hover:text-foreground transition-colors${location.pathname === "/how-it-works" ? " active" : ""}`}
              aria-current={
                location.pathname === "/how-it-works" ? "page" : undefined
              }
              onClick={(e) => handleNavClick(e, "/how-it-works")}
            >
              How It Works
            </Link>
            <a
              href="/#pricing"
              className={`navbar-link text-muted-foreground hover:text-foreground transition-colors${location.hash === "#pricing" && location.pathname === "/" ? " active" : ""}`}
              aria-current={
                location.hash === "#pricing" && location.pathname === "/"
                  ? "page"
                  : undefined
              }
              onClick={handlePricingClick}
            >
              Pricing
            </a>
            <Link
              to="/about"
              className={`navbar-link text-muted-foreground hover:text-foreground transition-colors${location.pathname === "/about" ? " active" : ""}`}
              aria-current={location.pathname === "/about" ? "page" : undefined}
              onClick={(e) => handleNavClick(e, "/about")}
            >
              About
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <ManualModal />
            <Link to="/sign-in" onClick={(e) => handleNavClick(e, "/sign-in")}>
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link
              to="/get-started"
              onClick={(e) => handleNavClick(e, "/get-started")}
            >
              <Button>Get Started</Button>
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-border p-2 text-foreground hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden mt-3 rounded-xl border border-border bg-white shadow-sm p-3">
            <div className="flex flex-col gap-1">
              <button
                type="button"
                className={`navbar-link !flex w-full items-center justify-between py-2 text-left text-muted-foreground hover:text-foreground${isFeaturesActive ? " active" : ""}`}
                onClick={() => setMobileFeaturesOpen((prev) => !prev)}
                aria-expanded={mobileFeaturesOpen}
              >
                <span>Features</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${mobileFeaturesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileFeaturesOpen && (
                <div className="ml-2 mt-1 mb-2 rounded-lg border border-border bg-muted/20 p-2">
                  {FEATURE_GROUPS.map((group) => (
                    <div key={group.label} className="mb-2 last:mb-0">
                      <p className="px-2 py-1 text-[11px] font-semibold tracking-[0.12em] uppercase text-muted-foreground">
                        {group.label}
                      </p>
                      {group.items.map((item) => (
                        <Link
                          key={item.title}
                          to={item.path}
                          className="block rounded-md px-2 py-1.5 text-sm text-foreground hover:bg-white"
                          onClick={() => setMobileOpen(false)}
                        >
                          <span>{item.title}</span>
                          {item.badge && (
                            <span className="ml-2 rounded-full bg-primary/15 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              <Link
                to="/how-it-works"
                className={`navbar-link block py-2 text-muted-foreground hover:text-foreground${location.pathname === "/how-it-works" ? " active" : ""}`}
                onClick={(e) => handleNavClick(e, "/how-it-works")}
              >
                How It Works
              </Link>
              <a
                href="/#pricing"
                className={`navbar-link block py-2 text-muted-foreground hover:text-foreground${location.hash === "#pricing" && location.pathname === "/" ? " active" : ""}`}
                onClick={handlePricingClick}
              >
                Pricing
              </a>
              <Link
                to="/about"
                className={`navbar-link block py-2 text-muted-foreground hover:text-foreground${location.pathname === "/about" ? " active" : ""}`}
                onClick={(e) => handleNavClick(e, "/about")}
              >
                About
              </Link>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="col-span-2">
                <ManualModal compact triggerClassName="w-full justify-center" />
              </div>
              <Link
                to="/sign-in"
                onClick={(e) => handleNavClick(e, "/sign-in")}
              >
                <Button variant="ghost" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link
                to="/get-started"
                onClick={(e) => handleNavClick(e, "/get-started")}
              >
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
