import { Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  rating,
  reviews,
  category,
}: ProductCardProps) {
  return (
    <Link
      to={`/product/${id}`}
      className="bg-white dark:bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
    >
      {/* Image Container */}
      <div className="relative h-48 md:h-56 bg-tech-gray dark:bg-tech-gray overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Category Badge */}
        <span className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({reviews})
          </span>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-2xl font-bold text-primary">₹{price.toLocaleString()}</p>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              // Add to cart logic
            }}
            className="bg-primary hover:bg-tech-blue-dark text-white p-2 rounded-lg transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Link>
  );
}
