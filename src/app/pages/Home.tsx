import React, { useEffect, useState } from "react";
import {
  BarChart3,
  Building2,
  Calculator,
  CheckCircle2,
  Clock3,
  FileText,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { HomeCarousel } from "../components/HomeCarousel";
import { Pricing } from "../components/Pricing";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";

const BENEFITS = [
  {
    title: "Live Scheduling and Time Capture",
    desc: "See attendance in real time and adjust shifts without spreadsheet handoffs.",
    Icon: Clock3,
  },
  {
    title: "Accurate Premium and Overtime Rules",
    desc: "Automate premium pay calculations and remove manual payroll corrections.",
    Icon: Calculator,
  },
  {
    title: "Employee Self-Service",
    desc: "Staff can check schedules, submit requests, and stay aligned on one portal.",
    Icon: Users,
  },
  {
    title: "Compliance-Ready Controls",
    desc: "Centralized approvals and audit trails keep HR and operations protected.",
    Icon: ShieldCheck,
  },
  {
    title: "Labor Cost Forecasting",
    desc: "Model workforce cost before schedules are published to prevent overruns.",
    Icon: BarChart3,
  },
];

const FEATURE_TABS = [
  {
    id: "scheduling",
    label: "Scheduling",
    title: "Build and adjust schedules in minutes",
    description:
      "Managers can create shifts, resolve conflicts, and publish updates instantly.",
    bullets: [
      "Department-level schedule templates",
      "Conflict detection before publish",
      "One-click notifications to employees",
    ],
    image: "/assets/PLACEHOLDER-FLOATING-2.png",
  },
  {
    id: "overtime",
    label: "Overtime",
    title: "Stop overtime guesswork before payroll day",
    description:
      "Track premium hours in real time and spot expensive patterns early.",
    bullets: [
      "Live overtime trend monitoring",
      "Rest-day and night differential support",
      "Payroll-ready exports with fewer edits",
    ],
    image: "/assets/PLACEHOLDER-FLOATING-3.png",
  },
  {
    id: "documents",
    label: "Documents",
    title: "Keep employee records organized and secure",
    description:
      "Store documents in one place with controlled access for admins and staff.",
    bullets: [
      "Secure employee document center",
      "Fast retrieval for audits and onboarding",
      "Role-based visibility by team",
    ],
    image: "/assets/PLACEHOLDER-FLOATING-5.png",
  },
  {
    id: "requests",
    label: "Requests",
    title: "Approve requests with full context",
    description:
      "Requests are routed to managers with schedule impact visible before approval.",
    bullets: [
      "Leave and shift-change workflows",
      "Manager review queue and status tracking",
      "Clear employee status updates",
    ],
    image: "/assets/PLACEHOLDER-FLOATING-4.png",
  },
];

const LOGOS = [
  "Northpoint Retail",
  "MetroCare Clinics",
  "Harborline Hotels",
  "Vertex Foods",
  "Summit Logistics",
  "Clearview Services",
];

const STEPS = [
  {
    title: "Import your team",
    desc: "Bring in employees, departments, and locations in one guided setup.",
    Icon: Users,
  },
  {
    title: "Launch smart scheduling",
    desc: "Publish schedules faster with built-in rules and conflict checks.",
    Icon: Clock3,
  },
  {
    title: "Run payroll with confidence",
    desc: "Export clean, verified time data with less last-minute correction work.",
    Icon: FileText,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "We cut payroll prep from 6 hours to under 3 and eliminated recurring overtime disputes.",
    name: "Alyssa Ramos",
    role: "HR Director, Northpoint Retail",
    result: "40% faster payroll preparation",
  },
  {
    quote:
      "Scheduling across four branches used to be chaos. Sparkle gave managers visibility in one day.",
    name: "Daniel Cruz",
    role: "Operations Manager, Harborline Hotels",
    result: "2x faster shift publishing",
  },
];

function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"
    />
  );
}

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(FEATURE_TABS[0].id);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const heroImageSrc = "/assets/HERO-DASHBOARD.png";

  useEffect(() => {
    const onScroll = () => setShowStickyCta(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-up"),
    );
    if (!revealTargets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -32px 0px" },
    );

    revealTargets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const selectedFeature =
    FEATURE_TABS.find((tab) => tab.id === activeFeature) ?? FEATURE_TABS[0];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/15 via-primary/5 to-white py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.18),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(37,99,235,0.12),transparent_40%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="space-y-6 reveal-up">
            <p className="inline-flex items-center rounded-full border border-primary/30 bg-white/80 px-4 py-1 text-xs font-semibold tracking-[0.14em] uppercase text-primary">
              Setup in under 15 minutes
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Cut payroll prep time by up to 40 percent
            </h1>
            <p className="text-lg text-muted-foreground">
              Sparkle Timekeeping helps growing teams schedule smarter, control
              overtime, and stay compliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/get-started">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Free Trial
                </Button>
              </Link>
              <a href="#pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  View Pricing
                </Button>
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {[
                { label: "99.9% uptime", value: "Reliability" },
                { label: "2,000+ teams", value: "Active users" },
                { label: "30% less overtime", value: "Average reduction" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border/80 bg-white/80 px-4 py-3"
                >
                  <div className="text-sm font-semibold text-foreground">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="relative flex justify-center items-center reveal-up"
            style={{ animationDelay: "120ms" }}
          >
            <span className="absolute -top-3 left-2 rounded-full border border-primary/20 bg-white px-3 py-1 text-xs font-medium text-primary shadow-sm">
              Live Attendance
            </span>
            <span className="absolute -bottom-4 right-4 rounded-full border border-primary/20 bg-white px-3 py-1 text-xs font-medium text-primary shadow-sm">
              Auto Overtime Rules
            </span>
            <div className="w-full max-w-md aspect-[16/10] rounded-2xl shadow-2xl border border-border overflow-hidden bg-muted/40">
              <ImageWithFallback
                src={heroImageSrc}
                alt="Sparkle Timekeeping dashboard preview"
                className="h-full w-full object-fill"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />
      <HomeCarousel />
      <SectionDivider />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
            Why teams switch to Sparkle
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {BENEFITS.map((benefit, index) => (
              <article
                key={benefit.title}
                className="hover-lift reveal-up rounded-xl border border-border bg-white shadow-sm p-6 text-center"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <benefit.Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-2">
                  {benefit.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-16 bg-muted/70">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-3 text-center">
            Product walk-through in one view
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Select a workflow to preview how Sparkle improves speed and
            accuracy.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {FEATURE_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFeature(tab.id)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  activeFeature === tab.id
                    ? "border-primary bg-primary text-primary-foreground shadow-md"
                    : "border-border bg-white text-foreground hover:border-primary/60 hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="reveal-up rounded-2xl border border-border bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-foreground">
                {selectedFeature.title}
              </h3>
              <p className="mt-3 text-muted-foreground">
                {selectedFeature.description}
              </p>
              <ul className="mt-5 space-y-3">
                {selectedFeature.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link to="/features">
                  <Button size="lg" variant="secondary">
                    Explore All Features
                  </Button>
                </Link>
              </div>
            </div>
            <div
              className="reveal-up rounded-2xl border border-border/90 bg-white/90 p-4 shadow-xl"
              style={{ animationDelay: "100ms" }}
            >
              <ImageWithFallback
                src={selectedFeature.image}
                alt={`${selectedFeature.label} preview`}
                className="h-[280px] w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-semibold tracking-[0.16em] uppercase text-muted-foreground mb-6">
            Trusted by growing teams
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {LOGOS.map((brand) => (
              <div
                key={brand}
                className="hover-lift rounded-lg border border-border bg-muted/30 px-4 py-3 text-center text-sm font-medium text-foreground"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <div id="pricing">
        <Pricing />
      </div>

      <SectionDivider />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
            How it works in 3 steps
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((step, index) => (
              <article
                key={step.title}
                className="reveal-up hover-lift rounded-xl border border-border bg-white p-6 shadow-sm"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <step.Icon className="h-5 w-5" />
                </div>
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-muted-foreground">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-16 bg-muted/25">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-3 text-center">
            What customers are seeing
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Real outcomes from teams using Sparkle daily.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((item, index) => (
              <article
                key={item.name}
                className="reveal-up rounded-xl border border-border bg-white p-7 shadow-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Building2 key={star} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed">
                  "{item.quote}"
                </blockquote>
                <p className="mt-4 text-sm font-semibold text-primary">
                  {item.result}
                </p>
                <p className="mt-3 font-semibold text-foreground">
                  {item.name}
                </p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-16 bg-gradient-to-br from-primary/20 via-primary/10 to-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to simplify workforce management?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start your free trial or request a demo and see Sparkle in action.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/get-started">
              <Button size="lg" className="w-full sm:w-auto">
                Start Free Trial
              </Button>
            </Link>
            <a href="#pricing">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Book a Demo
              </Button>
            </a>
          </div>
        </div>
      </section>

      <div
        className={`fixed inset-x-4 bottom-4 z-50 transition-all duration-300 sm:left-auto sm:right-6 sm:w-[360px] ${
          showStickyCta
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <div className="rounded-xl border border-primary/25 bg-white/95 p-4 shadow-2xl backdrop-blur">
          <p className="text-sm font-semibold text-foreground">
            Ready to launch Sparkle?
          </p>
          <p className="text-xs text-muted-foreground mt-1 mb-3">
            Start your trial or see a live demo.
          </p>
          <div className="flex gap-2">
            <Link to="/get-started" className="flex-1">
              <Button size="sm" className="w-full">
                Start Trial
              </Button>
            </Link>
            <a href="#pricing" className="flex-1">
              <Button size="sm" variant="outline" className="w-full">
                View Pricing
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
