import React from "react";
import { Button } from "../components/ui/button";

export default function Docs() {
  return (
    <div className="min-h-screen bg-muted/20 py-16">
      <section className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Documentation</h1>
        <p className="text-lg text-muted-foreground mb-6">Explore Sparkle Timekeeping's documentation for setup guides, feature details, and best practices.</p>
      </section>
      <section className="max-w-5xl mx-auto px-6 mb-16 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 border border-border shadow flex flex-col items-center text-center gap-2">
          <h2 className="font-semibold text-xl text-foreground mb-2">Setup Guides</h2>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>Getting started</li>
            <li>Integrating with payroll</li>
            <li>Admin controls</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl p-6 border border-border shadow flex flex-col items-center text-center gap-2">
          <h2 className="font-semibold text-xl text-foreground mb-2">Feature Deep Dives</h2>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>My Schedule</li>
            <li>Premium Values</li>
            <li>Reporting & analytics</li>
          </ul>
        </div>
      </section>
      <section className="max-w-2xl mx-auto px-6 text-center mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-2">Need more details?</h2>
        <p className="text-muted-foreground mb-6">Contact our support team for advanced documentation.</p>
        <Button size="lg">Contact Support</Button>
      </section>
    </div>
  );
}
