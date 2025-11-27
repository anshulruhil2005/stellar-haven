import { Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import type { Product } from "../lib/products";

interface ProductCardProps extends Product {}

export default function ProductCard({
  id,
  name,
  price,
  image,
  rating,
  reviews,
  category,
}: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Link
      to={`/product/${id}`}
      className="group bg-tech-gray/40 dark:bg-card border border-tech-gray-light/40 rounded-2xl overflow-hidden flex flex-col hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 transition-all"
    >
      {/* Image */}
      <div className="relative bg-tech-gray flex items-center justify-center aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-2 p-3 sm:p-4">
        <span className="text-[11px] uppercase tracking-wide text-primary/80 font-semibold">
          {category}
        </span>

        <h3 className="text-sm sm:text-base font-semibold text-foreground line-clamp-2">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) => {
                const value = index + 1;
                return (
                  <Star
                    key={value}
                    className={
                      "w-3 h-3 " +
                      (value <= Math.round(rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-500")
                    }
                  />
                );
              })}
            </div>
            <span>{rating.toFixed(1)}</span>
          </div>
          <span>{reviews} reviews</span>
        </div>

        {/* Price + button */}
        <div className="mt-1 flex items-center justify-between">
          <div>
            <p className="text-[11px] text-muted-foreground">Price</p>
            <p className="text-base sm:text-lg font-bold text-primary">
              ₹{price.toLocaleString()}
            </p>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault(); // card ke link ko rokna
              addToCart(id);
            }}
            className="inline-flex items-center justify-center rounded-xl bg-primary hover:bg-primary/90 text-white p-2 sm:px-3 sm:py-2 text-xs sm:text-sm font-semibold transition-colors"
          >
            <ShoppingCart className="w-4 h-4 mr-1" />
            Add
          </button>
        </div>
      </div>
    </Link>
  );
}
