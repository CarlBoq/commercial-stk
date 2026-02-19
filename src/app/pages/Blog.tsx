import React from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="min-h-screen bg-muted/20 py-16">
      <section className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground mb-6">Insights, tips, and news from the Sparkle Timekeeping team.</p>
      </section>
      <section className="max-w-5xl mx-auto px-6 mb-16 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 border border-border shadow flex flex-col items-center text-center gap-2">
          <h2 className="font-semibold text-xl text-foreground mb-2">Latest Articles</h2>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>How to improve time tracking accuracy</li>
            <li>Best practices for remote teams</li>
            <li>Feature spotlight: My Schedule Cost</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl p-6 border border-border shadow flex flex-col items-center text-center gap-2">
          <h2 className="font-semibold text-xl text-foreground mb-2">Popular Topics</h2>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>Compliance & labor laws</li>
            <li>Employee engagement</li>
            <li>Integrations & automation</li>
          </ul>
        </div>
      </section>
      <section className="max-w-2xl mx-auto px-6 text-center mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-2">Want more insights?</h2>
        <p className="text-muted-foreground mb-6">Subscribe to our newsletter for updates and tips.</p>
        <Link to="/contact">
          <Button size="lg">Subscribe</Button>
        </Link>
      </section>
    </div>
  );
}
