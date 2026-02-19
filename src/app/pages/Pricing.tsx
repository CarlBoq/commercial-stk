import React from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

// Pricing plans data
const plans = [
  {
    name: "Basic",
    price: "$4",
    period: "per employee/month",
    audience: "For small teams and startups",
    features: [
      "Employee time tracking",
      "Basic attendance management",
      "Mobile & web access",
      "Email support",
      "Basic reporting",
      "Up to 50 employees",
      "My Schedule"
    ],
    unique: "Ideal for teams just starting with digital timekeeping."
  },
  {
    name: "Standard",
    price: "$8",
    period: "per employee/month",
    audience: "For growing businesses and HR teams",
    features: [
      "Everything in Basic",
      "Advanced scheduling",
      "Overtime & holiday tracking",
      "Custom reports & analytics",
      "Priority support",
      "Unlimited employees",
      "Payroll integration",
      "Manager approvals",
      "My Schedule Cost"
    ],
    unique: "Includes cost forecasting and advanced analytics for scaling teams."
  },
  {
    name: "Premium",
    price: "$12",
    period: "per employee/month",
    audience: "For enterprises and complex organizations",
    features: [
      "Everything in Standard",
      "Advanced analytics & forecasting",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 phone support",
      "SSO & advanced security",
      "Compliance management",
      "API access",
      "Custom training",
      "Premium Values"
    ],
    unique: "Unlocks Premium Values and enterprise-grade support."
  }
];

// FAQ data
const faqs = [
  {
    q: "Can I try Sparkle before committing?",
    a: "Yes! Every plan comes with a 14-day free trial. No credit card required."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards and can invoice for annual contracts."
  },
  {
    q: "Can I change plans later?",
    a: "Absolutely. Upgrade, downgrade, or cancel anytime from your dashboard."
  },
  {
    q: "Is there a setup fee?",
    a: "No setup fees. You only pay the monthly per-employee rate."
  },
  {
    q: "Is my data secure?",
    a: "Yes. We use bank-level encryption and comply with industry standards."
  }
];


// Comparison table features and availability matrix
const tableFeatures = [
  {
    label: "My Schedule",
    keys: [true, true, true]
  },
  {
    label: "My Documents",
    keys: [true, true, true]
  },
  {
    label: "My Company",
    keys: [true, true, true]
  },
  {
    label: "My Request (Ticketing / Requests)",
    keys: [true, true, true]
  },
  {
    label: "Training & Development",
    keys: [false, true, true]
  },
  {
    label: "My Schedule Cost (Labor Cost Forecasting)",
    keys: [false, true, true]
  },
  {
    label: "Premium Values (OT, Rest Day, NSD input)",
    keys: [false, false, true]
  },
  {
    label: "Advanced Reports & Analytics",
    keys: [false, true, true]
  },
  {
    label: "Priority Support",
    keys: [false, false, true]
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-muted/20 py-16">
      {/* HERO SECTION */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Choose the plan that fits your business. All plans include a 14-day free trial and unlimited support.
        </p>
      </section>

      {/* PRICING CARDS */}
      <section className="max-w-5xl mx-auto px-6 mb-16 grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div key={plan.name} className={`bg-white rounded-xl border border-border shadow p-8 flex flex-col items-center text-center gap-4 ${i === 1 ? 'ring-2 ring-primary' : ''}`}>
            <span className="uppercase text-xs font-bold tracking-widest text-primary mb-2">{plan.name}</span>
            <div className="text-4xl font-bold text-foreground">{plan.price} <span className="text-base font-normal text-muted-foreground">/{plan.period}</span></div>
            <div className="text-sm text-muted-foreground mb-2">{plan.audience}</div>
            <ul className="text-left text-sm mb-4 space-y-1">
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2"><span className="text-primary">•</span> {f}</li>
              ))}
            </ul>
            <div className="text-xs text-muted-foreground mb-4">{plan.unique}</div>
            <Link to="/get-started">
              <Button size="lg" variant={i === 1 ? "default" : "outline"}>{i === 2 ? "Contact Sales" : "Start Free Trial"}</Button>
            </Link>
          </div>
        ))}
      </section>

      {/* COMPARISON TABLE */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Compare Plans</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-border rounded-xl bg-white">
            <thead>
              <tr>
                <th className="p-3 text-left text-sm font-semibold text-foreground border-b border-border">Feature</th>
                {plans.map((plan, idx) => (
                  <th
                    key={plan.name}
                    className={`p-3 text-center text-sm font-semibold border-b border-border ${idx === 2 ? 'bg-primary/10 text-primary' : 'text-foreground'}`}
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableFeatures.map((feature, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="p-3 text-sm text-foreground">{feature.label}</td>
                  {feature.keys.map((hasFeature, j) => (
                    <td
                      key={j}
                      className={`p-3 text-center align-middle ${j === 2 ? 'bg-primary/10' : ''}`}
                    >
                      {hasFeature ? (
                        <span className="text-primary font-bold text-lg" title="Included">✔</span>
                      ) : (
                        <span className="text-muted-foreground text-lg" title="Not included">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-3xl mx-auto px-6 mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-border shadow">
              <h3 className="font-semibold text-lg text-foreground mb-2">{faq.q}</h3>
              <p className="text-muted-foreground text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SALES CTA */}
      <section className="max-w-2xl mx-auto px-6 text-center mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-2">Need a custom solution?</h2>
        <p className="text-muted-foreground mb-6">Contact our sales team for enterprise pricing, integrations, or tailored onboarding.</p>
        <Link to="/get-started">
          <Button size="lg">Contact Sales</Button>
        </Link>
      </section>

      {/* FOOTER NOTE */}
      <footer className="text-center text-xs text-muted-foreground py-4">
        Sparkle Timekeeping &copy; {new Date().getFullYear()} &mdash; All rights reserved.
      </footer>
    </div>
  );
}
