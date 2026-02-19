import React from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function Integrations() {
  return (
    <div className="min-h-screen bg-muted/20 py-16">
      <section className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Integrations</h1>
        <p className="text-lg text-muted-foreground mb-6">Connect Sparkle Timekeeping with your favorite HR, payroll, and productivity tools for seamless workflows.</p>
        {/* EDIT LINE: ~Integrations */}
        {/* WHAT TO REPLACE: Replace /assets/PLACEHOLDER-INTEGRATIONS.png with integrations diagram/screenshot */}
        <img src="/assets/PLACEHOLDER-INTEGRATIONS.png" alt="Integrations diagram" className="mx-auto rounded-xl shadow-lg border border-border max-w-md mb-6" />
      </section>
      <section className="max-w-5xl mx-auto px-6 mb-16 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 border border-border shadow flex flex-col items-center text-center gap-2">
          <h2 className="font-semibold text-xl text-foreground mb-2">Payroll Systems</h2>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>QuickBooks</li>
            <li>ADP</li>
            <li>Gusto</li>
            <li>And more...</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl p-6 border border-border shadow flex flex-col items-center text-center gap-2">
          <h2 className="font-semibold text-xl text-foreground mb-2">HR & Productivity</h2>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>Slack</li>
            <li>Google Workspace</li>
            <li>Microsoft Teams</li>
            <li>Zapier</li>
          </ul>
        </div>
      </section>
      <section className="max-w-2xl mx-auto px-6 text-center mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-2">Want a custom integration?</h2>
        <p className="text-muted-foreground mb-6">Contact our team to discuss your unique workflow needs.</p>
        <Link to="/contact">
          <Button size="lg">Contact Us</Button>
        </Link>
      </section>
    </div>
  );
}
