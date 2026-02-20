import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

const plans = [
  {
    name: "Starter Plan",
    price: "PHP 19",
    period: "per employee/month",
    description: "For growing teams that need payroll-ready accuracy",
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
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth Plan",
    price: "PHP 29",
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
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise Plan",
    price: "PHP 49",
    period: "per employee/month",
    description: "For advanced workforce and payroll operations",
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
  },
];

const comparisonRows = [
  { feature: "Digital clock-in / clock-out", basic: true, standard: true, premium: true },
  { feature: "Selfie with timestamp", basic: true, standard: true, premium: true },
  { feature: "GPS & geo-fencing", basic: true, standard: true, premium: true },
  { feature: "Attendance creation", basic: true, standard: true, premium: true },
  { feature: "Basic attendance & breaklist reports", basic: true, standard: true, premium: true },
  { feature: "CSV report extraction", basic: true, standard: true, premium: true },
  { feature: "Biometric-ready", basic: true, standard: true, premium: true },
  { feature: "Payroll computation", basic: true, standard: true, premium: true },
  { feature: "Payroll-ready DTR", basic: true, standard: true, premium: true },
  { feature: "Payslip generation", basic: true, standard: true, premium: true },
  { feature: "Technical support", basic: true, standard: true, premium: true },
  { feature: "Premium hours submissions (OT, NSD, RD)", basic: true, standard: true, premium: true },
  {
    feature: "Automated premium pay and additional allowances computation",
    basic: true,
    standard: true,
    premium: true,
  },
  { feature: "Schedule confirmation & shift management", basic: false, standard: true, premium: true },
  { feature: "201 employee file management", basic: false, standard: true, premium: true },
  {
    feature: "Company tools (Profile, Code of Conduct, Company videos)",
    basic: false,
    standard: false,
    premium: true,
  },
  { feature: "Training videos & module management", basic: false, standard: false, premium: true },
  { feature: "Multi-process request management", basic: false, standard: false, premium: true },
  { feature: "Advanced & FGI report extraction", basic: false, standard: false, premium: true },
  { feature: "Automated billing creation", basic: false, standard: false, premium: true },
  { feature: "Optional fully-managed payroll services", basic: false, standard: false, premium: true },
];

export function Pricing() {
  const [showMobileComparison, setShowMobileComparison] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">PRICING PACKAGES</h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your workforce and payroll operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${plan.popular ? "border-primary shadow-xl scale-105" : "border-border"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-amber-400 text-black px-4 py-1">Most Popular</Badge>
                </div>
              )}

              <CardHeader className="text-center p-8 pb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{plan.period}</p>
              </CardHeader>

              <CardContent className="p-8 pt-0">
                <Button className="w-full mb-6" variant={plan.popular ? "default" : "outline"} size="lg">
                  {plan.cta === "Contact Sales" ? (
                    <a href="mailto:sales@sparkletimekeeping.com" style={{ display: "block", width: "100%" }}>
                      Contact Sales
                    </a>
                  ) : (
                    <Link to="/get-started" style={{ display: "block", width: "100%" }}>
                      {plan.cta}
                    </Link>
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
