import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

const plans = [
  {
    name: "Basic",
    price: "$4",
    period: "per employee/month",
    description: "Perfect for small teams getting started",
    features: [
      "Employee time tracking",
      "Basic attendance management",
      "Mobile & web access",
      "Email support",
      "Basic reporting",
      "Up to 50 employees"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Standard",
    price: "$8",
    period: "per employee/month",
    description: "Most popular for growing businesses",
    features: [
      "Everything in Basic",
      "Advanced scheduling",
      "Overtime & holiday tracking",
      "Custom reports & analytics",
      "Priority support",
      "Unlimited employees",
      "Payroll integration",
      "Manager approvals"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Premium",
    price: "$12",
    period: "per employee/month",
    description: "Enterprise-grade features and support",
    features: [
      "Everything in Standard",
      "Advanced analytics & forecasting",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 phone support",
      "SSO & advanced security",
      "Compliance management",
      "API access",
      "Custom training"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-primary shadow-xl scale-105' : 'border-border'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-white px-4 py-1">Most Popular</Badge>
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
                <Button 
                  className="w-full mb-6" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta === "Contact Sales" ? (
                    <a href="mailto:sales@sparkletimekeeping.com" style={{display: 'block', width: '100%'}}>Contact Sales</a>
                  ) : (
                    <Link to="/get-started" style={{display: 'block', width: '100%'}}>{plan.cta}</Link>
                  )}
                </Button>
                
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
          <div className="p-8">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              Feature Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-foreground font-semibold">Feature</th>
                    <th className="text-center py-4 px-4 text-foreground font-semibold">Basic</th>
                    <th className="text-center py-4 px-4 text-foreground font-semibold">Standard</th>
                    <th className="text-center py-4 px-4 text-foreground font-semibold">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Employee Limit", basic: "50", standard: "Unlimited", premium: "Unlimited" },
                    { feature: "Mobile App", basic: true, standard: true, premium: true },
                    { feature: "GPS Tracking", basic: true, standard: true, premium: true },
                    { feature: "Overtime Tracking", basic: false, standard: true, premium: true },
                    { feature: "Custom Reports", basic: false, standard: true, premium: true },
                    { feature: "Payroll Integration", basic: false, standard: true, premium: true },
                    { feature: "API Access", basic: false, standard: false, premium: true },
                    { feature: "SSO", basic: false, standard: false, premium: true }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-border last:border-0">
                      <td className="py-4 px-4 text-foreground">{row.feature}</td>
                      <td className="py-4 px-4 text-center">
                        {typeof row.basic === 'boolean' ? (
                          row.basic ? <Check className="w-5 h-5 text-primary mx-auto" /> : <span className="text-muted-foreground">—</span>
                        ) : (
                          <span className="text-foreground">{row.basic}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof row.standard === 'boolean' ? (
                          row.standard ? <Check className="w-5 h-5 text-primary mx-auto" /> : <span className="text-muted-foreground">—</span>
                        ) : (
                          <span className="text-foreground">{row.standard}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof row.premium === 'boolean' ? (
                          row.premium ? <Check className="w-5 h-5 text-primary mx-auto" /> : <span className="text-muted-foreground">—</span>
                        ) : (
                          <span className="text-foreground">{row.premium}</span>
                        )}
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
