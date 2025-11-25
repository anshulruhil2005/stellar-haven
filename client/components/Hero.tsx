import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundGradient?: boolean;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundGradient = true,
}: HeroProps) {
  return (
    <section
      className={`relative py-20 md:py-32 overflow-hidden ${
        backgroundGradient
          ? "bg-gradient-to-br from-primary via-tech-blue-dark to-tech-black"
          : "bg-tech-black"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-8 right-1/4 w-96 h-96 bg-primary opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
            {title}
          </h1>
          <p className="text-lg md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-100">
            {subtitle}
          </p>
          <Link
            to={ctaLink}
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-tech-black font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-xl animate-slide-up animation-delay-200"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
