import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { FEATURE_BY_KEY, type FeatureItem } from "../data/featureCatalog";

export default function FeatureDetail() {
  const params = useParams();
  const key = params.featureKey as FeatureItem["key"] | undefined;
  const feature = key ? FEATURE_BY_KEY[key] : undefined;

  if (!feature) {
    return (
      <div className="min-h-screen bg-muted/20 py-16">
        <section className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-3">
            Feature Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            The feature page you requested does not exist.
          </p>
          <Link to="/features">
            <Button>Back to Features</Button>
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/20 py-16">
      <section className="max-w-5xl mx-auto px-6 mb-8">
        <Link
          to="/features"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to All Features
        </Link>
      </section>

      <section className="max-w-5xl mx-auto px-6">
        <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold tracking-[0.14em] uppercase text-primary mb-2">
            Feature Detail
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            {feature.title}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">{feature.tagline}</p>
          <p className="mt-6 text-foreground leading-relaxed">{feature.summary}</p>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              What this page contains
            </h2>
            <ul className="space-y-2">
              {feature.contents.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-muted/20 px-4 py-3 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/get-started">
              <Button>Get Started</Button>
            </Link>
            <a href="/#pricing">
              <Button variant="outline">View Pricing</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
