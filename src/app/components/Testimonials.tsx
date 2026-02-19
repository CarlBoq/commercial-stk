import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "HR Director",
    company: "TechCorp Solutions",
    image: "https://images.unsplash.com/photo-1758518729459-235dcaadc611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBleGVjdXRpdmUlMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzEzNDU1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "Sparkle has transformed how we manage our distributed workforce. The accuracy and ease of use are unmatched. We've reduced payroll processing time by 70%."
  },
  {
    name: "Michael Chen",
    role: "Operations Manager",
    company: "BuildRight Construction",
    image: "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzE0NjIzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "Managing job sites across multiple locations used to be a nightmare. Now with GPS tracking and mobile clock-ins, we have complete visibility and accountability."
  },
  {
    name: "Emily Rodriguez",
    role: "CFO",
    company: "Retail Innovations Inc",
    image: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMGhlYWRzaG90fGVufDF8fHx8MTc3MTM0MzI3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "The ROI was immediate. Automated reporting and seamless payroll integration saved us thousands in the first month alone. Best investment we've made."
  }
];

const companyLogos = [
  { name: "TechCorp", width: "120px" },
  { name: "BuildRight", width: "140px" },
  { name: "RetailInnov", width: "130px" },
  { name: "GlobalCo", width: "110px" },
  { name: "StartupX", width: "100px" }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers have to say about their experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4 pt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-12 border border-border">
          <p className="text-center text-muted-foreground mb-8 text-sm uppercase tracking-wider">
            Trusted by Over 10,000+ Companies Worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {companyLogos.map((logo, index) => (
              <div 
                key={index} 
                className="h-12 bg-muted/50 rounded-lg flex items-center justify-center px-6"
                style={{ width: logo.width }}
              >
                <span className="text-muted-foreground font-semibold">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
