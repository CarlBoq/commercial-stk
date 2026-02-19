import React from "react";
import { Button } from "../components/ui/button";

export default function Status() {
  return (
    <div className="min-h-screen bg-muted/20 py-16">
      <section className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
          Status
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Check the current status of Sparkle Timekeeping services and uptime
          history.
        </p>
        {/* EDIT LINE: ~Status */}
        {/* WHAT TO REPLACE: Replace /assets/PLACEHOLDER-STATUS.png with real status dashboard screenshot */}
        <img
          src="/assets/PLACEHOLDER-STATUS.png"
          alt="Status dashboard"
          className="mx-auto rounded-xl shadow-lg border border-border max-w-md mb-6"
        />
      </section>
      <section className="max-w-5xl mx-auto px-6 mb-16 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 border border-border shadow flex flex-col items-center text-center gap-2">
          <h2 className="font-semibold text-xl text-foreground mb-2">
            Current Status
          </h2>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>Web app: Operational</li>
            <li>API: Operational</li>
            <li>Integrations: Operational</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl p-6 border border-border shadow flex flex-col items-center text-center gap-2">
          <h2 className="font-semibold text-xl text-foreground mb-2">
            Uptime History
          </h2>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>99.99% uptime (last 90 days)</li>
            <li>No major incidents reported</li>
            <li>All systems monitored 24/7</li>
          </ul>
        </div>
      </section>
      <section className="max-w-2xl mx-auto px-6 text-center mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Experiencing issues?
        </h2>
        <p className="text-muted-foreground mb-6">
          Contact our support team for real-time assistance.
        </p>
        <Button size="lg">Contact Support</Button>
      </section>
    </div>
  );
}
