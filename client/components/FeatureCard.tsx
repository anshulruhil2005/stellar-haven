import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="text-center p-6 hover:bg-tech-gray dark:hover:bg-tech-gray rounded-lg transition-all duration-300">
      <div className="flex justify-center mb-4">
        <div className="bg-primary text-white p-4 rounded-lg">
          <Icon className="w-8 h-8" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
