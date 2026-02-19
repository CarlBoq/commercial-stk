import React from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function Updates() {
  return (
    <div className="min-h-screen bg-muted/20 py-16">
      <section className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Updates</h1>
        <p className="text-lg text-muted-foreground mb-6">Stay up to date with the latest features, improvements, and announcements from Sparkle Timekeeping.</p>
        {/* EDIT LINE: ~Updates */}
        {/* WHAT TO REPLACE: Replace /assets/PLACEHOLDER-UPDATES.png with updates screenshot */}
        <img src="/assets/PLACEHOLDER-UPDATES.png" alt="Updates screenshot" className="mx-auto rounded-xl shadow-lg border border-border max-w-md mb-6" />
      </section>
      <section className="max-w-5xl mx-auto px-6 mb-16 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 border border-border shadow flex flex-col items-center text-center gap-2">
          <h2 className="font-semibold text-xl text-foreground mb-2">Recent Releases</h2>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>New mobile app launched</li>
            <li>Payroll integration improvements</li>
            <li>Enhanced reporting features</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl p-6 border border-border shadow flex flex-col items-center text-center gap-2">
          <h2 className="font-semibold text-xl text-foreground mb-2">Coming Soon</h2>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>AI-powered scheduling</li>
            <li>More integrations</li>
            <li>Customizable dashboards</li>
          </ul>
        </div>
      </section>
      <section className="max-w-2xl mx-auto px-6 text-center mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-2">Want product updates?</h2>
        <p className="text-muted-foreground mb-6">Subscribe to our newsletter for the latest news.</p>
        <Link to="/contact">
          <Button size="lg">Subscribe</Button>
        </Link>
      </section>
    </div>
  );
}
