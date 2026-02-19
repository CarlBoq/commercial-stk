import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { FEATURE_CATALOG } from "../data/featureCatalog";

export default function Features() {
  return (
    <div className="min-h-screen bg-muted/20 py-16">
      <section className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
          All-in-One Workforce Features
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Sparkle Timekeeping gives your team modern tools for scheduling,
          payroll accuracy, compliance, and employee engagement.
        </p>
        <img
          src="/assets/PLACEHOLDER-FEATURES-HERO.png"
          alt="Features overview illustration"
          className="mx-auto rounded-xl shadow-lg border border-border max-w-md"
        />
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURE_CATALOG.map((feature) => (
            <article
              key={feature.key}
              className="scroll-mt-28 bg-white rounded-xl p-6 border border-border shadow flex flex-col items-center text-center gap-4"
            >
              <div className="text-xs font-semibold tracking-[0.14em] uppercase rounded-full bg-primary/10 text-primary px-3 py-1">Feature</div>
              <h2 className="font-semibold text-xl text-foreground">
                {feature.title}
              </h2>
              <p className="text-muted-foreground text-sm">{feature.tagline}</p>
              <Link to={`/features/${feature.key}`} className="mt-1">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 text-center mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Ready to experience Sparkle?
        </h2>
        <p className="text-muted-foreground mb-6">
          See how these features can transform workforce management.
        </p>
        <Link to="/get-started">
          <Button size="lg">Get Started</Button>
        </Link>
      </section>

      <footer className="text-center text-xs text-muted-foreground py-4">
        Sparkle Timekeeping &copy; {new Date().getFullYear()} - All rights
        reserved.
      </footer>
    </div>
  );
}
