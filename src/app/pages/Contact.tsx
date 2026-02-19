import React from "react";
import { Button } from "../components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen bg-muted/20 py-16">
      <section className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Contact</h1>
        <p className="text-lg text-muted-foreground mb-6">Get in touch with the Sparkle Timekeeping team for support, sales, or partnership inquiries.</p>
      </section>
      <section className="max-w-5xl mx-auto px-6 mb-16 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 border border-border shadow flex flex-col items-center text-center gap-2">
          <h2 className="font-semibold text-xl text-foreground mb-2">Support</h2>
          <p className="text-muted-foreground text-sm">Need help? Our support team is here for you.</p>
          <Button size="lg" className="mt-4">Contact Support</Button>
        </div>
        <div className="bg-white rounded-xl p-6 border border-border shadow flex flex-col items-center text-center gap-2">
          <h2 className="font-semibold text-xl text-foreground mb-2">Sales & Partnerships</h2>
          <p className="text-muted-foreground text-sm">Interested in Sparkle for your business or want to partner with us?</p>
          <Button size="lg" className="mt-4">Request Demo</Button>
        </div>
      </section>
      <section className="max-w-2xl mx-auto px-6 text-center mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-2">Prefer email?</h2>
        <p className="text-muted-foreground mb-6">Reach us at <a href="mailto:hello@sparkletimekeeping.com" className="underline text-primary">hello@sparkletimekeeping.com</a></p>
      </section>
    </div>
  );
}
