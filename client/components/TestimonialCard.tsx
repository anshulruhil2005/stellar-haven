import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

export default function TestimonialCard({
  name,
  role,
  text,
  rating,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className="bg-white dark:bg-card p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-tech-gray dark:border-tech-gray">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-foreground mb-6 italic">"{text}"</p>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
