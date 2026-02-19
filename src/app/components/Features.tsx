import { Clock, Users, TrendingUp, FileText, Smartphone, Shield } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    icon: Clock,
    title: "Employee Time Tracking",
    description: "Accurate clock-in/out with GPS verification and automatic break tracking for your entire workforce."
  },
  {
    icon: Users,
    title: "Attendance & Shift Management",
    description: "Manage schedules, shifts, and time-off requests with intelligent scheduling and notifications."
  },
  {
    icon: TrendingUp,
    title: "Overtime & Holiday Tracking",
    description: "Automatically calculate overtime hours and holiday pay based on your company policies."
  },
  {
    icon: FileText,
    title: "Reports & Analytics",
    description: "Generate comprehensive reports with customizable dashboards and real-time analytics."
  },
  {
    icon: Shield,
    title: "Payroll-ready Data",
    description: "Export clean, accurate data directly to your payroll system with one-click integration."
  },
  {
    icon: Smartphone,
    title: "Mobile & Web Access",
    description: "Access from anywhere with responsive web app and native mobile applications."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything You Need for Workforce Management
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to streamline your time tracking and make payroll effortless
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
