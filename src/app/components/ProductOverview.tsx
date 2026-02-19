import { CheckCircle2 } from "lucide-react";

export function ProductOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Simplify Time Tracking & Workforce Management
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sparkle Timekeeping is a comprehensive workforce management platform designed to help businesses track employee time, manage attendance, and automate payroll processes with precision and ease.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Automated Accuracy</h3>
                  <p className="text-muted-foreground">Eliminate manual errors with automated time tracking and calculations</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Real-time Insights</h3>
                  <p className="text-muted-foreground">Monitor workforce activity and attendance in real-time</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Compliance Ready</h3>
                  <p className="text-muted-foreground">Stay compliant with labor laws and regulations automatically</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Seamless Integration</h3>
                  <p className="text-muted-foreground">Connect with your existing payroll and HR systems</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl border border-border">
              <img
                src="https://images.unsplash.com/photo-1758691736843-90f58dce465e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzE0NjIzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 -top-6 -right-6 w-full h-full bg-accent rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
