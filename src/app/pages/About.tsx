import React, { useEffect } from "react";
import { Gem, Lightbulb, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";

const MISSION_POINTS = [
  "Create technological breakthroughs that are built low-cost and have high impact in the economy and the society.",
  "Establish software services that are tailored-fit to solve current and future problems of the company and their target consumers.",
  "Enable projects that will fuel new growth, new solutions and new ecosystems for the future.",
];

const INNOVATIONS = [
  {
    name: "Sparkle Time Keeping System",
    description:
      "A reliable and secure solution for accurate employee time tracking, attendance management, and seamless payroll processing.",
    src: `${import.meta.env.BASE_URL}assets/innovations/innovation-01-stk.png`,
  },
  {
    name: "Starjobs: Talents and Skills Services App",
    description:
      "An online platform that connects clients and principals to JOBSTERS - independent contractors, freelancers, and relievers - enabling short-term and temporary engagement opportunities.",
    src: `${import.meta.env.BASE_URL}assets/innovations/innovation-02-starjobs.png`,
  },
  {
    name: "Sparkle POS",
    description:
      "A modern, efficient point-of-sale system that streamlines sales, inventory, and business operations.",
    src: `${import.meta.env.BASE_URL}assets/innovations/innovation-03-pos.png`,
  },
  {
    name: "Sparkle Form",
    description:
      "A versatile digital form solution for effortless data collection, management, and insightful analysis.",
    src: `${import.meta.env.BASE_URL}assets/innovations/innovation-04-form.png`,
  },
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
      <section className="relative overflow-hidden bg-[linear-gradient(130deg,#0c5dbd_0%,#1577dd_45%,#2fb9e8_100%)] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.35),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(255,255,255,0.2),transparent_42%)]" />
        <div className="pointer-events-none absolute -bottom-16 left-0 h-48 w-[130%] -translate-x-[8%] rounded-[100%] bg-white/85" />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="inline-flex items-center rounded-full border border-white/40 bg-white/15 px-4 py-1 text-xs font-semibold tracking-[0.14em] uppercase text-white">
            About Sparkle
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[0.03em] text-white reveal-up">
            Be The Future... Today!!!
          </h1>
          <p className="mt-6 inline-block max-w-2xl rounded-xl bg-black/30 px-4 py-3 text-white text-lg italic leading-relaxed shadow-sm backdrop-blur-[1px] reveal-up">
            "Sparkle recognizes every business as vital in refueling our economy amid pandemic crisis"
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <article className="reveal-up rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-primary">OUR INSPIRATION</h2>
          <p className="mt-5 text-base leading-relaxed text-foreground">
            Launched December 2020, what started out as a desire to help during
            the pandemic has now grown into a recognized software company in the
            Philippines. Bringing technology and innovations in various
            industries, SparkleStar aims to influence the future to bring
            solutions, sustainability and growth for each Filipino.
          </p>
        </article>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-14">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary text-center mb-8 reveal-up">
          OUR INNOVATIONS
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {INNOVATIONS.map((item, index) => (
            <article
              key={item.name}
              className="reveal-up rounded-3xl border border-border bg-white/95 p-6 text-center shadow-sm hover-lift"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="mx-auto mb-5 flex h-24 items-center justify-center">
                <ImageWithFallback
                  src={item.src}
                  alt={item.name}
                  className="max-h-24 w-auto max-w-full object-contain"
                />
              </div>
              <h3 className="text-[2rem] leading-tight font-bold text-primary">
                {item.name}
              </h3>
              <p className="mt-4 text-foreground leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-14">
        <div className="grid lg:grid-cols-2 gap-6">
          <article className="reveal-up rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Vision</h3>
            <ul className="mt-4 space-y-3 text-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  To be the pioneer software development company in efficiency
                  and innovation in South East Asia by 2025.
                </span>
              </li>
            </ul>
          </article>

          <article
            className="reveal-up rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm"
            style={{ animationDelay: "80ms" }}
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Lightbulb className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Mission</h3>
            <ul className="mt-4 space-y-3 text-foreground">
              {MISSION_POINTS.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-14">
        <article className="reveal-up rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
          <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Gem className="h-5 w-5" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">Core Values</h3>
          <p className="mt-4 text-foreground leading-relaxed">
            Christo-centricity, Visionary, Leadership and Teamwork, Zeal,
            Customer-centered, Meritocracy
          </p>
        </article>
      </section>

      <section className="px-6 pb-14">
        <div className="max-w-6xl mx-auto reveal-up rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/15 via-primary/8 to-white px-6 py-10 sm:px-10 text-center shadow-sm">
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-primary">
            Philosophy
          </p>
          <p className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold italic text-foreground">
            Innovate... Inspire... Sparkle...
          </p>
        </div>
      </section>

      <section className="py-14 bg-gradient-to-br from-primary/20 via-primary/10 to-white">
        <div className="max-w-3xl mx-auto px-6 text-center reveal-up">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Build The Future With Sparkle
          </h2>
          <p className="text-muted-foreground mb-6">
            Transform attendance into payroll-ready intelligence with a platform
            built for growth and impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/get-started">
              <Button size="lg" className="w-full sm:w-auto">
                Start Free Trial
              </Button>
            </Link>
            <Link to="/features">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Explore Features
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
