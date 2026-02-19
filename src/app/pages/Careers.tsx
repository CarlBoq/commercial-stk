import React from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function Careers() {
  return (
    <div className="min-h-screen bg-muted/20 py-16">
      <section className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Careers</h1>
        <p className="text-lg text-muted-foreground mb-6">Join Sparkle Timekeeping and help shape the future of workforce management.</p>
      </section>
      <section className="max-w-5xl mx-auto px-6 mb-16 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-6 border border-border shadow flex flex-col items-center text-center gap-2">
          <h2 className="font-semibold text-xl text-foreground mb-2">Open Roles</h2>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>Frontend Engineer</li>
            <li>Customer Success Specialist</li>
            <li>Product Designer</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl p-6 border border-border shadow flex flex-col items-center text-center gap-2">
          <h2 className="font-semibold text-xl text-foreground mb-2">Why Work With Us?</h2>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>Remote-friendly culture</li>
            <li>Growth opportunities</li>
            <li>Inclusive, supportive team</li>
          </ul>
        </div>
      </section>
      <section className="max-w-2xl mx-auto px-6 text-center mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-2">Ready to apply?</h2>
        <p className="text-muted-foreground mb-6">Send your resume and cover letter to our team.</p>
        <Link to="/contact">
          <Button size="lg">Contact HR</Button>
        </Link>
      </section>
    </div>
  );
}
