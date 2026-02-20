import { Zap, Target, Lock, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "99.99% Accuracy",
    description: "Eliminate timesheet errors and payroll discrepancies with automated precision tracking"
  },
  {
    icon: Zap,
    title: "Save 10+ Hours/Week",
    description: "Automate tedious manual processes and let your team focus on what matters most"
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with SOC 2, GDPR, and labor regulations"
  },
  {
    icon: TrendingUp,
    title: "Scales With You",
    description: "From 5 to 5,000 employees, our platform grows seamlessly with your business"
  }
];

export function WhyChoose() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose Sparkle Timekeeping?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of businesses that trust Sparkle to manage their workforce
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-foreground text-xl">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
