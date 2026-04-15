import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

const plans = [
  {
    name: "Free Plan",
    monthlyPrice: 0,
    annualPrice: 0,
    period: "per employee/month",
    description: "Best for individuals & very small teams starting out",
    features: [
      "Basic clock-in / check-out",
      "Basic Daily Time Record (DTR)",
      "Attendance logs",
      "CSV report extraction",
    ],
    cta: "Get Started",
    popular: false,
    isFree: true,
  },
  {
    name: "Starter Plan",
    monthlyPrice: 19,
    annualPrice: 15,
    period: "per employee/month",
    description: "For small teams needing reliable timekeeping",
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
    cta: "Choose Plan",
    popular: false,
    isFree: false,
  },
  {
    name: "Growth Plan",
    monthlyPrice: 39,
    annualPrice: 31,
    period: "per employee/month",
    description: "Most Popular",
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
    cta: "Choose Plan",
    popular: true,
    isFree: false,
  },
  {
    name: "Enterprise Plan",
    monthlyPrice: 49,
    annualPrice: 39,
    period: "per employee/month",
    description: "For large or multi-branch organizations",
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
    cta: "Contact Sales",
    popular: false,
    isFree: false,
  },
];

const comparisonRows = [
  { feature: "Basic clock-in / check-out", free: true, basic: true, standard: true, premium: true },
  { feature: "Basic Daily Time Record (DTR)", free: true, basic: true, standard: true, premium: true },
  { feature: "Attendance logs", free: true, basic: true, standard: true, premium: true },
  { feature: "CSV report extraction", free: true, basic: true, standard: true, premium: true },
  { feature: "Selfie with timestamp", free: false, basic: true, standard: true, premium: true },
  { feature: "GPS & geo-fencing", free: false, basic: true, standard: true, premium: true },
  { feature: "Attendance creation", free: false, basic: true, standard: true, premium: true },
  { feature: "Basic attendance & breaklist reports", free: false, basic: true, standard: true, premium: true },
  { feature: "Biometric-ready", free: false, basic: true, standard: true, premium: true },
  { feature: "Payroll computation", free: false, basic: true, standard: true, premium: true },
  { feature: "Payroll-ready DTR", free: false, basic: true, standard: true, premium: true },
  { feature: "Payslip generation", free: false, basic: true, standard: true, premium: true },
  { feature: "Technical support", free: false, basic: true, standard: true, premium: true },
  { feature: "Premium hours submissions (OT, NSD, RD)", free: false, basic: true, standard: true, premium: true },
  {
    feature: "Automated premium pay and additional allowances computation",
    free: false,
    basic: true,
    standard: true,
    premium: true,
  },
  { feature: "Schedule confirmation & shift management", free: false, basic: false, standard: true, premium: true },
  { feature: "201 employee file management", free: false, basic: false, standard: true, premium: true },
  {
    feature: "Company tools (Profile, Code of Conduct, Company videos)",
    free: false,
    basic: false,
    standard: false,
    premium: true,
  },
  { feature: "Training videos & module management", free: false, basic: false, standard: false, premium: true },
  { feature: "Multi-process request management", free: false, basic: false, standard: false, premium: true },
  { feature: "Advanced & FGI report extraction", free: false, basic: false, standard: false, premium: true },
  { feature: "Automated billing creation", free: false, basic: false, standard: false, premium: true },
  { feature: "Optional fully-managed payroll services", free: false, basic: false, standard: false, premium: true },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [showMobileComparison, setShowMobileComparison] = useState(false);

  const getPrice = (plan: (typeof plans)[0]) => {
    if (plan.isFree) return "₱0";
    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    return `₱${price}`;
  };

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your team
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
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

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl ${plan.popular ? "border-primary shadow-md" : "border-border"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-amber-400 text-black px-4 py-1">Most Popular</Badge>
                </div>
              )}

              <CardHeader className="text-center p-6 pb-4">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="mb-1">
                  <span className="text-4xl font-bold text-foreground">{getPrice(plan)}</span>
                </div>
                <p className="text-muted-foreground text-xs">{plan.isFree ? "free forever" : plan.period}</p>
                {isAnnual && !plan.isFree && (
                  <p className="text-xs text-primary mt-1">billed annually</p>
                )}
              </CardHeader>

              <CardContent className="p-6 pt-0">
                <Button className="w-full mb-6" variant={plan.popular ? "default" : "outline"} size="lg">
                  {plan.cta === "Contact Sales" ? (
                    <a href="mailto:sales@sparkletimekeeping.com" style={{ display: "block", width: "100%" }}>
                      Contact Sales
                    </a>
                  ) : plan.cta === "Choose Plan" ? (
                    <a href="https://sparkletimekeeping.com/login" target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%" }}>
                      Choose Plan
                    </a>
                  ) : (
                    <a href="https://sparkletimekeeping.com/login" target="_blank" rel="noopener noreferrer" style={{ display: "block", width: "100%" }}>
                      Get Started
                    </a>
                  )}
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={feature}
                      className={`items-start gap-3 ${featureIndex < 7 ? "flex" : "hidden md:flex"}`}
                    >
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                  {plan.features.length > 7 && (
                    <p className="text-xs text-muted-foreground md:hidden">
                      +{plan.features.length - 7} more features in this plan
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

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

        <div
          className={`bg-white rounded-2xl border border-border overflow-hidden shadow-sm ${
            showMobileComparison ? "block" : "hidden md:block"
          }`}
        >
          <div className="p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              Feature Comparison
            </h3>
            <p className="text-xs text-muted-foreground text-center mb-4 md:hidden">
              Swipe left/right to view all plans.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-foreground font-semibold">Feature</th>
                    <th className="text-center py-4 px-4 text-foreground font-semibold">Free</th>
                    <th className="text-center py-4 px-4 text-foreground font-semibold">Starter</th>
                    <th className="text-center py-4 px-4 text-foreground font-semibold">Growth</th>
                    <th className="text-center py-4 px-4 text-foreground font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="border-b border-border last:border-0">
                      <td className="py-4 px-4 text-foreground">{row.feature}</td>
                      <td className="py-4 px-4 text-center">
                        {row.free ? <Check className="w-5 h-5 text-primary mx-auto" /> : <span className="text-muted-foreground">-</span>}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.basic ? <Check className="w-5 h-5 text-primary mx-auto" /> : <span className="text-muted-foreground">-</span>}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.standard ? <Check className="w-5 h-5 text-primary mx-auto" /> : <span className="text-muted-foreground">-</span>}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.premium ? <Check className="w-5 h-5 text-primary mx-auto" /> : <span className="text-muted-foreground">-</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
