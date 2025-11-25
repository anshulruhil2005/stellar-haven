import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Banner {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  link?: string;
}

interface BannerCarouselProps {
  banners: Banner[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function BannerCarousel({
  banners,
  autoPlay = true,
  autoPlayInterval = 5000,
}: BannerCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || banners.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, banners.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index % banners.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  if (banners.length === 0) return null;

  const currentBanner = banners[currentIndex];

  return (
    <div className="relative w-full h-96 md:h-[500px] bg-gray-200 overflow-hidden rounded-lg shadow-lg">
      {/* Banner Container */}
      <div className="relative w-full h-full">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h3 className="text-3xl md:text-5xl font-bold mb-4 animate-slide-up">
                  {banner.title}
                </h3>
                <p className="text-lg md:text-2xl mb-8 opacity-90 animate-slide-up animation-delay-100">
                  {banner.subtitle}
                </p>
                {banner.link && (
                  <a
                    href={banner.link}
                    className="inline-block bg-primary hover:bg-tech-blue-dark text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg animate-slide-up animation-delay-200"
                  >
                    Learn More
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-tech-black p-3 rounded-full transition-all duration-300 hover:shadow-lg"
        aria-label="Previous banner"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-tech-black p-3 rounded-full transition-all duration-300 hover:shadow-lg"
        aria-label="Next banner"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
