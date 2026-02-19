import { Card, CardContent } from "./ui/card";

export function FeatureCard({ icon: Icon, title, description }) {
  return (
    <Card className="border-border hover:shadow-lg transition-shadow hover:bg-primary/5 active:bg-primary/10 duration-200">
      <CardContent className="p-6 space-y-4">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center transition-colors duration-200">
          <Icon className="w-6 h-6 text-primary group-hover:text-primary-dark" />
        </div>
        <h3 className="font-semibold text-foreground text-lg">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
