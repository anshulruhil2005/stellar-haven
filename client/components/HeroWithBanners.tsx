import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BannerCarousel, { Banner } from "./BannerCarousel";

interface HeroWithBannersProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  banners: Banner[];
  backgroundGradient?: boolean;
}

export default function HeroWithBanners({
  title,
  subtitle,
  ctaText,
  ctaLink,
  banners,
  backgroundGradient = true,
}: HeroWithBannersProps) {
  return (
    <section
      className={`relative py-8 overflow-hidden ${
        backgroundGradient
          ? "bg-gradient-to-b from-tech-gray dark:from-tech-gray to-background"
          : "bg-background"
      }`}
    >
      <div className="container-custom">
        {/* Banner Carousel */}
        <div className="mb-12">
          <BannerCarousel banners={banners} autoPlay={true} autoPlayInterval={5000} />
        </div>

        {/* Hero Content */}
        <div className="text-center py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-100">
            {subtitle}
          </p>
          <Link
            to={ctaLink}
            className="inline-flex items-center gap-2 bg-primary hover:bg-tech-blue-dark text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg animate-slide-up animation-delay-200"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
