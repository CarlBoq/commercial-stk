import React, { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, Clock3, Settings2, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { HOW_IT_WORKS_PREVIEW_IMAGES } from "../data/manualPreviewImages";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";

const STEP_TIMELINE = [
  {
    id: "setup",
    number: "01",
    title: "Set up your workspace",
    desc: "Create your account, company profile, and team structure in minutes.",
  },
  {
    id: "schedule",
    number: "02",
    title: "Launch schedules and policies",
    desc: "Configure shifts, overtime rules, and approval paths for daily operations.",
  },
  {
    id: "payroll",
    number: "03",
    title: "Run payroll-ready operations",
    desc: "Track attendance, approve requests, and export clean reports with less rework.",
  },
];

const STEP_PREVIEWS = [
  {
    id: "setup",
    label: "Setup",
    title: "Onboard your organization in one guided flow",
    summary:
      "Import employees, assign departments, and define access so teams start on day one with clean data.",
    bullets: [
      "Fast employee and role setup",
      "Department and location structure",
      "Starter policy presets",
    ],
    image: HOW_IT_WORKS_PREVIEW_IMAGES.setup,
  },
  {
    id: "schedule",
    label: "Schedule",
    title: "Build schedules with fewer conflicts",
    summary:
      "Managers publish shifts quickly while Sparkle helps prevent overlap and overtime surprises.",
    bullets: [
      "Shift template workflows",
      "Real-time conflict visibility",
      "Employee confirmation process",
    ],
    image: HOW_IT_WORKS_PREVIEW_IMAGES.schedule,
  },
  {
    id: "payroll",
    label: "Payroll",
    title: "Prepare payroll with confidence",
    summary:
      "Gather approvals, finalize premium hours, and generate payroll-ready summaries faster.",
    bullets: [
      "OT and premium hour consolidation",
      "Approval audit trail",
      "Export-ready payroll reports",
    ],
    image: HOW_IT_WORKS_PREVIEW_IMAGES.payroll,
  },
];

const ROLE_CARDS = [
  {
    title: "For HR Teams",
    desc: "Track compliance, documents, and employee records from one source of truth.",
  },
  {
    title: "For Managers",
    desc: "Publish schedules quickly, manage requests, and prevent operational blind spots.",
  },
  {
    title: "For Employees",
    desc: "View schedules, confirm shifts, submit requests, and access training in one app.",
  },
];

const TRUST_METRICS = [
  { label: "Average onboarding", value: "Under 1 day" },
  { label: "Payroll prep reduction", value: "Up to 40%" },
  { label: "Manager visibility", value: "Real-time" },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(STEP_PREVIEWS[0].id);
  const [showStickyCta, setShowStickyCta] = useState(false);

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
      { threshold: 0.16, rootMargin: "0px 0px -28px 0px" },
    );

    revealTargets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const selectedStep =
    STEP_PREVIEWS.find((step) => step.id === activeStep) ?? STEP_PREVIEWS[0];

  return (
    <div className="min-h-screen bg-muted/20">
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/15 via-primary/5 to-white py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(14,165,233,0.2),transparent_46%)]" />
        <div className="relative max-w-6xl mx-auto px-6 text-center reveal-up">
          <p className="inline-flex items-center rounded-full border border-primary/30 bg-white/80 px-4 py-1 text-xs font-semibold tracking-[0.14em] uppercase text-primary">
            How Sparkle Works
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            From setup to payroll in three clear steps
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Sparkle is built for speed, clarity, and fewer manual errors from day one.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid sm:grid-cols-3 gap-3 reveal-up">
          {TRUST_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-border bg-white p-4 text-center shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                {metric.label}
              </p>
              <p className="mt-1 text-lg font-semibold text-foreground">{metric.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8 reveal-up">
          The Sparkle workflow
        </h2>
        <div className="relative">
          <div className="hidden md:block absolute left-0 right-0 top-8 h-[2px] bg-primary/20" />
          <div className="grid md:grid-cols-3 gap-5">
            {STEP_TIMELINE.map((step, index) => (
              <article
                key={step.id}
                className="reveal-up hover-lift rounded-xl border border-border bg-white p-5 shadow-sm relative"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
                {index < STEP_TIMELINE.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-4 top-8 h-4 w-4 text-primary/55" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="reveal-up rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive process preview</h2>
            <p className="text-sm text-muted-foreground mb-5">
              Pick a stage to see exactly what users do in that step.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {STEP_PREVIEWS.map((step) => (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(step.id)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    activeStep === step.id
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-white border-border text-foreground hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {step.label}
                </button>
              ))}
            </div>
            <h3 className="text-xl font-semibold text-foreground">{selectedStep.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{selectedStep.summary}</p>
            <ul className="mt-4 space-y-2">
              {selectedStep.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal-up rounded-2xl border border-border bg-white p-4 shadow-lg" style={{ animationDelay: "100ms" }}>
            <div className="aspect-[16/10] rounded-xl overflow-hidden bg-muted/30">
              <ImageWithFallback
                src={selectedStep.image}
                alt={`${selectedStep.label} preview`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          <article className="reveal-up rounded-xl border border-red-200 bg-red-50 p-6">
            <h3 className="text-xl font-semibold text-foreground mb-2">Before Sparkle</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Manual shift updates across multiple files</li>
              <li>Late overtime discovery near payroll cutoff</li>
              <li>Slow approvals and unclear request ownership</li>
            </ul>
          </article>
          <article className="reveal-up rounded-xl border border-emerald-200 bg-emerald-50 p-6" style={{ animationDelay: "80ms" }}>
            <h3 className="text-xl font-semibold text-foreground mb-2">After Sparkle</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Centralized schedule and policy workflows</li>
              <li>Real-time premium hour visibility</li>
              <li>Faster approvals with clear audit trail</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-foreground text-center mb-6 reveal-up">
          Built for every role
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          <article className="reveal-up hover-lift rounded-xl border border-border bg-white p-5 shadow-sm">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{ROLE_CARDS[0].title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{ROLE_CARDS[0].desc}</p>
          </article>
          <article className="reveal-up hover-lift rounded-xl border border-border bg-white p-5 shadow-sm" style={{ animationDelay: "70ms" }}>
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Settings2 className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{ROLE_CARDS[1].title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{ROLE_CARDS[1].desc}</p>
          </article>
          <article className="reveal-up hover-lift rounded-xl border border-border bg-white p-5 shadow-sm" style={{ animationDelay: "140ms" }}>
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Clock3 className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{ROLE_CARDS[2].title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{ROLE_CARDS[2].desc}</p>
          </article>
        </div>
      </section>

      <section className="py-14 bg-gradient-to-br from-primary/20 via-primary/10 to-white">
        <div className="max-w-3xl mx-auto px-6 text-center reveal-up">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Ready to streamline your workflow?
          </h2>
          <p className="text-muted-foreground mb-6">
            Start your trial or view pricing to choose the right Sparkle plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/get-started">
              <Button size="lg" className="w-full sm:w-auto">
                Start Free Trial
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div
        className={`fixed inset-x-4 bottom-4 z-50 transition-all duration-300 sm:left-auto sm:right-6 sm:w-[340px] ${
          showStickyCta ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <div className="rounded-xl border border-primary/25 bg-white/95 p-4 shadow-2xl backdrop-blur">
          <p className="text-sm font-semibold text-foreground">Want a guided walkthrough?</p>
          <p className="text-xs text-muted-foreground mt-1 mb-3">
            Explore the platform flow with a live product demo.
          </p>
          <div className="flex gap-2">
            <Link to="/get-started" className="flex-1">
              <Button size="sm" className="w-full">
                Start Trial
              </Button>
            </Link>
            <Link to="/pricing" className="flex-1">
              <Button size="sm" variant="outline" className="w-full">
                Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
