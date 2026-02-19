import { LogIn, Clock, CheckSquare, BarChart3, DollarSign } from "lucide-react";

const steps = [
  {
    icon: LogIn,
    number: "01",
    title: "Clock In / Out",
    description: "Employees clock in and out using mobile app, web portal, or biometric devices"
  },
  {
    icon: Clock,
    number: "02",
    title: "Track Hours Automatically",
    description: "System automatically tracks work hours, breaks, and overtime in real-time"
  },
  {
    icon: CheckSquare,
    number: "03",
    title: "Review & Approve",
    description: "Managers review timesheets and approve hours with one-click approval"
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Generate Reports",
    description: "Create detailed reports for labor costs, attendance patterns, and productivity"
  },
  {
    icon: DollarSign,
    number: "05",
    title: "Payroll-ready Output",
    description: "Export accurate, compliant data directly to your payroll system"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How Sparkle Works
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple, streamlined process from clock-in to payroll
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-2 border-white">
                    <span className="text-xs font-bold text-accent-foreground">{step.number}</span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-foreground text-lg">
                  {step.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
