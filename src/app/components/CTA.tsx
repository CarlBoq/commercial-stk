import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-blue-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1688413709025-5f085266935a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHBhdHRlcm4lMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MTQ2MTU2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] opacity-10 bg-cover bg-center" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Workforce Management?
        </h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Join thousands of businesses saving time and money with Sparkle Timekeeping. 
          Start your 14-day free trial today—no credit card required.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/get-started">
            <Button size="lg" variant="secondary" className="text-base gap-2">
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/demo">
            <Button size="lg" variant="outline" className="text-base bg-white/10 text-white border-white/30 hover:bg-white/20">
              Schedule a Demo
            </Button>
          </Link>
        </div>

        <p className="text-white/80 text-sm mt-6">
          ✓ 14-day free trial  ✓ No credit card required  ✓ Cancel anytime
        </p>
      </div>
    </section>
  );
}
