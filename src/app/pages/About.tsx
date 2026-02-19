import React, { useEffect } from "react";
import {
  CheckCircle2,
  Clock3,
  Lock,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";

const METRICS = [
  { label: "Teams supported", value: "2,000+" },
  { label: "Payroll prep reduction", value: "Up to 40%" },
  { label: "Average onboarding", value: "Under 1 day" },
];

const OUTCOMES = [
  {
    title: "Less payroll rework",
    desc: "Teams reduce manual payroll cleanup with clearer overtime and request workflows.",
    result: "Up to 32% fewer payroll disputes",
  },
  {
    title: "Faster schedule publishing",
    desc: "Managers publish shifts faster using centralized planning and confirmation tools.",
    result: "2x faster shift planning cycles",
  },
  {
    title: "Higher team visibility",
    desc: "HR and operations can act earlier with real-time attendance and request visibility.",
    result: "30% faster decision turnaround",
  },
];

const TRUST_PILLARS = [
  {
    title: "Security by default",
    desc: "Role-based access, protected records, and secure data handling for workforce operations.",
    Icon: Lock,
  },
  {
    title: "Compliance-ready workflows",
    desc: "Structured policies and approvals that reduce risk and improve reporting confidence.",
    Icon: ShieldCheck,
  },
  {
    title: "Practical support",
    desc: "A product and support team focused on helping your team launch quickly and stay efficient.",
    Icon: Users,
  },
];

const TEAM = [
  {
    name: "Alyssa Ramos",
    role: "Product Lead",
    focus: "Turns field feedback into practical workflow improvements.",
  },
  {
    name: "Daniel Cruz",
    role: "Customer Success Lead",
    focus: "Helps teams onboard fast and optimize their daily operations.",
  },
  {
    name: "Mia Santos",
    role: "Compliance Specialist",
    focus: "Ensures policy and reporting workflows stay audit-friendly.",
  },
];

const MILESTONES = [
  { year: "2022", title: "Sparkle launched", desc: "Started with scheduling and attendance core features." },
  { year: "2023", title: "Payroll workflows expanded", desc: "Added premium value handling and request approvals." },
  { year: "2024", title: "Feature modules scaled", desc: "Introduced documents, company, and training modules." },
  { year: "2025", title: "Multi-team adoption growth", desc: "Expanded across more industries and multi-branch teams." },
];

export default function About() {
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
      { threshold: 0.16, rootMargin: "0px 0px -30px 0px" },
    );

    revealTargets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-muted/20">
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/15 via-primary/5 to-white py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(14,165,233,0.2),transparent_44%)]" />
        <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
          <div className="reveal-up">
            <p className="inline-flex items-center rounded-full border border-primary/30 bg-white/80 px-4 py-1 text-xs font-semibold tracking-[0.14em] uppercase text-primary">
              About Sparkle Timekeeping
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Built to simplify workforce operations for growing organizations
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Sparkle helps HR and operations teams manage scheduling, attendance, and payroll workflows with speed, accuracy, and confidence.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link to="/get-started">
                <Button size="lg" className="w-full sm:w-auto">Start Free Trial</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">Schedule Demo</Button>
              </Link>
            </div>
          </div>

          <div className="reveal-up rounded-2xl border border-border bg-white p-4 shadow-xl" style={{ animationDelay: "90ms" }}>
            <div className="aspect-[16/10] rounded-xl overflow-hidden bg-muted/30">
              <ImageWithFallback
                src="/assets/PLACEHOLDER-TEAM-PHOTO.png"
                alt="Sparkle team collaboration"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid sm:grid-cols-3 gap-3 reveal-up">
          {METRICS.map((metric) => (
            <div key={metric.label} className="rounded-xl border border-border bg-white p-4 text-center shadow-sm">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{metric.label}</p>
              <p className="mt-1 text-lg font-semibold text-foreground">{metric.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8 reveal-up">
          Customer outcomes we optimize for
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {OUTCOMES.map((outcome, index) => (
            <article
              key={outcome.title}
              className="reveal-up hover-lift rounded-xl border border-border bg-white p-5 shadow-sm"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground">{outcome.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{outcome.desc}</p>
              <p className="mt-4 text-sm font-semibold text-primary">{outcome.result}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          <article className="reveal-up rounded-xl border border-border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-3">Our mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To provide businesses with a reliable, people-first workforce platform that makes scheduling, attendance, and payroll preparation easier to operate and easier to trust.
            </p>
            <h2 className="text-2xl font-bold text-foreground mb-3 mt-8">Our vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To become the practical operating layer for workforce management where HR, operations, and employees stay aligned in real time.
            </p>
          </article>

          <article className="reveal-up rounded-xl border border-border bg-white p-6 shadow-sm" style={{ animationDelay: "90ms" }}>
            <h2 className="text-2xl font-bold text-foreground mb-3">Why teams trust Sparkle</h2>
            <div className="space-y-4">
              {TRUST_PILLARS.map((pillar) => (
                <div key={pillar.title} className="rounded-lg border border-border bg-muted/20 p-3">
                  <div className="flex items-start gap-3">
                    <pillar.Icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{pillar.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{pillar.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8 reveal-up">
          Team credibility
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {TEAM.map((member, index) => (
            <article
              key={member.name}
              className="reveal-up hover-lift rounded-xl border border-border bg-white p-5 shadow-sm"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm text-primary">{member.role}</p>
              <p className="mt-2 text-sm text-muted-foreground">{member.focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8 reveal-up">
          Growth milestones
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {MILESTONES.map((milestone, index) => (
            <article
              key={milestone.year}
              className="reveal-up rounded-xl border border-border bg-white p-5 shadow-sm"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-primary">{milestone.year}</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{milestone.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{milestone.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-14 bg-gradient-to-br from-primary/20 via-primary/10 to-white">
        <div className="max-w-3xl mx-auto px-6 text-center reveal-up">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
            <Sparkles className="h-5 w-5" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Ready to modernize your workforce workflow?
          </h2>
          <p className="text-muted-foreground mb-6">
            Start a free trial or schedule a live walkthrough with our team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/get-started">
              <Button size="lg" className="w-full sm:w-auto">
                Start Free Trial
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Schedule Demo
              </Button>
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-primary" /> No credit card required</span>
            <span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5 text-primary" /> Fast onboarding support</span>
          </div>
        </div>
      </section>
    </div>
  );
}
