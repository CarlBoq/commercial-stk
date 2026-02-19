import React from "react";
import { Button } from "../components/ui/button";

export default function ApiReference() {
  return (
    <div className="min-h-screen bg-muted/20 py-16">
      <section className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
          API Reference
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Access Sparkle Timekeeping's API documentation for developers and
          integrators.
        </p>
        {/* EDIT LINE: ~API Reference */}
        {/* WHAT TO REPLACE: Replace /assets/PLACEHOLDER-API.png with real API diagram/screenshot */}
        <img
          src="/assets/PLACEHOLDER-API.png"
          alt="API Reference diagram"
          className="mx-auto rounded-xl shadow-lg border border-border max-w-md mb-6"
        />
      </section>
      <section className="max-w-5xl mx-auto px-6 mb-16 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 border border-border shadow flex flex-col items-center text-center gap-2">
          <h2 className="font-semibold text-xl text-foreground mb-2">
            Authentication
          </h2>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>API keys</li>
            <li>OAuth 2.0</li>
            <li>Access scopes</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl p-6 border border-border shadow flex flex-col items-center text-center gap-2">
          <h2 className="font-semibold text-xl text-foreground mb-2">
            Endpoints
          </h2>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>Time entries</li>
            <li>Employee management</li>
            <li>Reporting</li>
          </ul>
        </div>
      </section>
      <section className="max-w-2xl mx-auto px-6 text-center mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Need API access?
        </h2>
        <p className="text-muted-foreground mb-6">
          Contact our team for API credentials and support.
        </p>
        <Button size="lg">Request API Access</Button>
      </section>
    </div>
  );
}
