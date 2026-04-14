import React, { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free Plan",
    monthlyPrice: 0,
    annualPrice: 0,
    period: "per employee/month",
    audience: "Best for individuals & very small teams starting out",
    features: [
      "Basic clock-in / check-out",
      "Basic Daily Time Record (DTR)",
      "Attendance logs",
      "CSV report extraction",
    ],
    unique: "Free forever. No credit card required.",
    cta: "Get Started",
    isFree: true,
  },
  {
    name: "Starter Plan",
    monthlyPrice: 19,
    annualPrice: 15,
    period: "per employee/month",
    audience: "For small teams needing reliable timekeeping",
    features: [
      "Digital clock-in / clock-out",
      "Selfie with timestamp",
      "GPS & geo-fencing",
      "Attendance creation",
      "Basic attendance & breaklist reports",
      "CSV report extraction",
      "Biometric-ready",
      "Payroll computation",
      "Payroll-ready DTR",
      "Payslip generation",
      "Premium hours submissions (OT, NSD, RD)",
      "Automated premium pay and additional allowances computation",
      "Technical support",
    ],
    unique: "Built for reliable attendance-to-payroll workflows.",
    cta: "Choose Plan",
    isFree: false,
  },
  {
    name: "Growth Plan",
    monthlyPrice: 39,
    annualPrice: 31,
    period: "per employee/month",
    audience: "Most Popular",
    features: [
      "Digital clock-in / clock-out",
      "Selfie with timestamp",
      "GPS & geo-fencing",
      "Attendance creation",
      "Basic attendance & breaklist reports",
      "CSV report extraction",
      "Biometric-ready",
      "Payroll computation",
      "Payroll-ready DTR",
      "Payslip generation",
      "Technical support",
      "Premium hours submissions (OT, NSD, RD)",
      "Automated premium pay and additional allowances computation",
      "Schedule confirmation & shift management",
      "201 employee file management",
    ],
    unique: "Best for teams scaling workforce visibility and controls.",
    cta: "Choose Plan",
    isFree: false,
  },
  {
    name: "Enterprise Plan",
    monthlyPrice: 49,
    annualPrice: 39,
    period: "per employee/month",
    audience: "For large or multi-branch organizations",
    features: [
      "Digital clock-in / clock-out",
      "Selfie with timestamp",
      "GPS & geo-fencing",
      "Attendance creation",
      "Basic attendance & breaklist reports",
      "CSV report extraction",
      "Biometric-ready",
      "Payroll computation",
      "Payroll-ready DTR",
      "Payslip generation",
      "Technical support",
      "Schedule confirmation & shift management",
      "Premium hours submissions (OT, NSD, RD)",
      "Automated premium pay and additional allowances computation",
      "201 employee file management",
      "Company tools (Profile, Code of Conduct, Company videos)",
      "Training videos & module management",
      "Multi-process request management",
      "Advanced & FGI report extraction",
      "Automated billing creation",
      "Optional fully-managed payroll services (with dedicated payroll head)",
    ],
    unique: "Complete package for enterprise-grade payroll operations.",
    cta: "Contact Sales",
    isFree: false,
  },
];

const faqs = [
  {
    q: "Can I try Sparkle before committing?",
    a: "Yes. Start with our Free Plan — no credit card required. You can upgrade anytime.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept major credit cards and can invoice annual contracts.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes. You can upgrade, downgrade, or cancel anytime from your dashboard.",
  },
  {
    q: "Is there a setup fee?",
    a: "No setup fees. You only pay the monthly per-employee rate.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We use strong encryption and follow industry security standards.",
  },
];

const tableFeatures = [
  { label: "Basic clock-in / check-out", keys: [true, true, true, true] },
  { label: "Basic Daily Time Record (DTR)", keys: [true, true, true, true] },
  { label: "Attendance logs", keys: [true, true, true, true] },
  { label: "CSV report extraction", keys: [true, true, true, true] },
  { label: "Selfie with timestamp", keys: [false, true, true, true] },
  { label: "GPS & geo-fencing", keys: [false, true, true, true] },
  { label: "Attendance creation", keys: [false, true, true, true] },
  { label: "Basic attendance & breaklist reports", keys: [false, true, true, true] },
  { label: "Biometric-ready", keys: [false, true, true, true] },
  { label: "Payroll computation", keys: [false, true, true, true] },
  { label: "Payroll-ready DTR", keys: [false, true, true, true] },
  { label: "Payslip generation", keys: [false, true, true, true] },
  { label: "Technical support", keys: [false, true, true, true] },
  { label: "Premium hours submissions (OT, NSD, RD)", keys: [false, true, true, true] },
  {
    label: "Automated premium pay and additional allowances computation",
    keys: [false, true, true, true],
  },
  { label: "Schedule confirmation & shift management", keys: [false, false, true, true] },
  { label: "201 employee file management", keys: [false, false, true, true] },
  {
    label: "Company tools (Profile, Code of Conduct, Company videos)",
    keys: [false, false, false, true],
  },
  { label: "Training videos & module management", keys: [false, false, false, true] },
  { label: "Multi-process request management", keys: [false, false, false, true] },
  { label: "Advanced & FGI report extraction", keys: [false, false, false, true] },
  { label: "Automated billing creation", keys: [false, false, false, true] },
  { label: "Optional fully-managed payroll services", keys: [false, false, false, true] },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [showMobileComparison, setShowMobileComparison] = useState(false);

  const getPrice = (plan: (typeof plans)[0]) => {
    if (plan.isFree) return "₱0";
    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    return `₱${price}`;
  };

  return (
    <div className="min-h-screen bg-muted/20 py-16">
      <section className="max-w-4xl mx-auto px-6 text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Choose the plan that fits your team
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center">
          <div className="inline-flex items-center bg-muted rounded-full p-1 gap-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                !isAnnual ? "bg-white shadow text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                isAnnual ? "bg-white shadow text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual{" "}
              <span className="text-primary font-semibold">(Save 20%)</span>
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-16 grid md:grid-cols-4 gap-6">
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            className={`bg-white rounded-xl border border-border shadow p-6 flex flex-col items-center text-center gap-4 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl ${
              i === 2 ? "ring-2 ring-primary" : ""
            }`}
          >
            {i === 2 && (
              <span className="bg-amber-400 text-black text-xs font-bold px-3 py-1 rounded-full -mt-2">
                Most Popular
              </span>
            )}
            <span className="uppercase text-xs font-bold tracking-widest text-primary">
              {plan.name}
            </span>
            <div className="text-4xl font-bold text-foreground">
              {getPrice(plan)}{" "}
              <span className="text-base font-normal text-muted-foreground">
                /{plan.isFree ? "free forever" : plan.period}
              </span>
            </div>
            {isAnnual && !plan.isFree && (
              <p className="text-xs text-primary -mt-2">billed annually</p>
            )}
            <div className="text-sm text-muted-foreground">{plan.audience}</div>
            <ul className="text-left text-sm mb-2 space-y-2 w-full">
              {plan.features.map((feature, idx) => (
                <li
                  key={feature}
                  className={`items-start gap-2 ${
                    idx < 7 ? "flex" : "hidden md:flex"
                  }`}
                >
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            {plan.features.length > 7 && (
              <p className="text-xs text-muted-foreground md:hidden">
                +{plan.features.length - 7} more features in this plan
              </p>
            )}
            <div className="text-xs text-muted-foreground mb-2">{plan.unique}</div>
            {plan.cta === "Contact Sales" ? (
              <a href="mailto:sales@sparkletimekeeping.com" className="w-full">
                <Button size="lg" variant="outline" className="w-full">
                  Contact Sales
                </Button>
              </a>
            ) : (
              <Link to="/get-started" className="w-full">
                <Button size="lg" variant={i === 2 ? "default" : "outline"} className="w-full">
                  {plan.cta}
                </Button>
              </Link>
            )}
          </div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          Compare Plans
        </h2>
        <div className="mb-4 md:hidden">
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => setShowMobileComparison((prev) => !prev)}
          >
            {showMobileComparison ? "Hide full comparison" : "Compare all features"}
          </Button>
        </div>
        <div className={`overflow-x-auto ${showMobileComparison ? "block" : "hidden md:block"}`}>
          <p className="text-xs text-muted-foreground text-center mb-3 md:hidden">
            Swipe left/right to view all plans.
          </p>
          <table className="min-w-full border border-border rounded-xl bg-white">
            <thead>
              <tr>
                <th className="p-3 text-left text-sm font-semibold text-foreground border-b border-border">
                  Feature
                </th>
                {plans.map((plan, idx) => (
                  <th
                    key={plan.name}
                    className={`p-3 text-center text-sm font-semibold border-b border-border ${
                      idx === 2 ? "bg-primary/10 text-primary" : "text-foreground"
                    }`}
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableFeatures.map((feature) => (
                <tr key={feature.label} className="border-b border-border">
                  <td className="p-3 text-sm text-foreground">{feature.label}</td>
                  {feature.keys.map((hasFeature, j) => (
                    <td
                      key={`${feature.label}-${j}`}
                      className={`p-3 text-center align-middle ${
                        j === 2 ? "bg-primary/10" : ""
                      }`}
                    >
                      {hasFeature ? (
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      ) : (
                        <span className="text-muted-foreground text-lg">-</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white rounded-xl p-6 border border-border shadow">
              <h3 className="font-semibold text-lg text-foreground mb-2">{faq.q}</h3>
              <p className="text-muted-foreground text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 text-center mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Need a custom solution?
        </h2>
        <p className="text-muted-foreground mb-6">
          Contact our sales team for enterprise pricing, integrations, or tailored onboarding.
        </p>
        <a href="mailto:sales@sparkletimekeeping.com">
          <Button size="lg">Contact Sales</Button>
        </a>
      </section>

      <footer className="text-center text-xs text-muted-foreground py-4">
        Sparkle Timekeeping &copy; {new Date().getFullYear()} - All rights reserved.
      </footer>
    </div>
  );
}
