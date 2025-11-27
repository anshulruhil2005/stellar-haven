// client/components/BannerCarousel.tsx

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface BannerSlide {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  image?: string;
}

// Default banners: agar props se kuch na aaye to ye use honge
const defaultBanners: BannerSlide[] = [
  {
    id: "1",
    title: "Festive Mega Sale on Mobiles",
    subtitle:
      "Up to 40% off on Samsung, Redmi, Realme & more. No-cost EMI, exchange offers available.",
    badge: "Limited Time Deal",
    image:
      "https://images.pexels.com/photos/6078126/pexels-photo-6078126.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "2",
    title: "Premium Laptops for Work & Gaming",
    subtitle:
      "Latest Intel & Ryzen laptops with SSD, backlit keyboard and FHD displays.",
    badge: "New Arrivals",
    image:
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "3",
    title: "Smart Watches & Earbuds Combo",
    subtitle:
      "Track your health, attend calls on-the-go and enjoy deep bass music.",
    badge: "Best Value",
    image:
      "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

interface BannerCarouselProps {
  banners?: BannerSlide[];
}

export default function BannerCarousel({ banners }: BannerCarouselProps) {
  // ✅ yahan se undefined issue solve ho gaya
  const slides: BannerSlide[] =
    banners && banners.length > 0 ? banners : defaultBanners;

  // agar phir bhi kuch reason se array empty ho, to component hi mat dikhao
  if (!slides || slides.length === 0) {
    return null;
  }

  const [index, setIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    if (slides.length <= 1) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(id);
  }, [slides.length]);

  const current = slides[index];

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white shadow-xl">
      <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-6 md:gap-10 p-6 md:p-10">
        {/* LEFT: Text */}
        <div className="flex flex-col justify-center space-y-4">
          {current.badge && (
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 border border-white/30 text-xs font-semibold uppercase tracking-wide w-fit">
              {current.badge}
            </span>
          )}

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            {current.title}
          </h2>

          {current.subtitle && (
            <p className="text-sm md:text-base text-blue-100 max-w-xl">
              {current.subtitle}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-white text-blue-700 text-sm font-semibold hover:bg-blue-50 transition-colors">
              Shop Now
            </button>
            <span className="text-xs md:text-sm text-blue-100">
              No-cost EMI • Free delivery in Rohtak • GST invoice available
            </span>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="relative hidden md:block">
          <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl" />
          <div className="relative w-full h-56 md:h-64 lg:h-72 rounded-3xl overflow-hidden border border-white/20 bg-white/5 flex items-center justify-center">
            {current.image ? (
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center text-blue-100 text-sm">
                Ruhil Electronics Promotional Banner
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      {slides.length > 1 && (
        <>
          {/* Prev / Next buttons */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 md:px-4">
            <button
              onClick={goPrev}
              className="p-1.5 md:p-2 rounded-full bg-black/30 hover:bg-black/45 border border-white/40 transition-colors"
              aria-label="Previous banner"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goNext}
              className="p-1.5 md:p-2 rounded-full bg-black/30 hover:bg-black/45 border border-white/40 transition-colors"
              aria-label="Next banner"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-white" : "w-2 bg-white/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
