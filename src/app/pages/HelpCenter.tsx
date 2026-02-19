import React from "react";
import { Button } from "../components/ui/button";

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-muted/20 py-16">
      <section className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Help Center</h1>
        <p className="text-lg text-muted-foreground mb-6">Find answers to common questions and get the most out of Sparkle Timekeeping.</p>
        {/* EDIT LINE: ~Help Center */}
        {/* WHAT TO REPLACE: Replace /assets/PLACEHOLDER-HELP-CENTER.png with real help center screenshot */}
        <img src="/assets/PLACEHOLDER-HELP-CENTER.png" alt="Help Center screenshot" className="mx-auto rounded-xl shadow-lg border border-border max-w-md mb-6" />
      </section>
      <section className="max-w-5xl mx-auto px-6 mb-16 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 border border-border shadow flex flex-col items-center text-center gap-2">
          <h2 className="font-semibold text-xl text-foreground mb-2">Getting Started</h2>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>Account setup guide</li>
            <li>Inviting your team</li>
            <li>First steps for admins</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl p-6 border border-border shadow flex flex-col items-center text-center gap-2">
          <h2 className="font-semibold text-xl text-foreground mb-2">Popular Topics</h2>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>Resetting your password</li>
            <li>Managing requests</li>
            <li>Integrations overview</li>
          </ul>
        </div>
      </section>
      <section className="max-w-2xl mx-auto px-6 text-center mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-2">Need more help?</h2>
        <p className="text-muted-foreground mb-6">Contact our support team for personalized assistance.</p>
        <Button size="lg">Contact Support</Button>
      </section>
    </div>
  );
}
