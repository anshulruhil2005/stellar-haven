import { useParams, useNavigate, Link } from "react-router-dom";
import Layout from "../components/Layout";
import { ArrowLeft, ShoppingCart, Star } from "lucide-react";
import { getProductById } from "../lib/products";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Product not found
          </p>
          <h1 className="text-2xl font-bold mb-6">
            Oops! Ye product abhi list me nahi mil raha.
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90"
          >
            <ArrowLeft className="w-4 h-4" />
            Go back
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6 text-muted-foreground">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-primary">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT: image */}
          <div className="bg-tech-gray/40 dark:bg-tech-gray rounded-2xl overflow-hidden flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full max-h-[420px] object-contain"
            />
          </div>

          {/* RIGHT: info */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Category:{" "}
              <span className="font-semibold text-primary">
                {product.category}
              </span>
            </p>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, index) => {
                  const value = index + 1;
                  return (
                    <Star
                      key={value}
                      className={
                        "w-5 h-5 " +
                        (value <= Math.round(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300")
                      }
                    />
                  );
                })}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating.toFixed(1)} • {product.reviews} reviews
              </span>
            </div>

            {/* Price */}
            <div className="pt-2">
              <p className="text-sm text-muted-foreground mb-1">Price</p>
              <p className="text-3xl md:text-4xl font-extrabold text-primary">
                ₹{product.price.toLocaleString()}
              </p>
            </div>

            {/* Description – abhi dummy */}
            <p className="text-sm md:text-base text-muted-foreground">
              Yahan pe aap original product ki details, specifications, warranty
              info, aur delivery details show kar sakte ho. Abhi ke liye ye demo
              static text hai.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90">
                <ShoppingCart className="w-5 h-5" />
                Add to cart
              </button>

              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-sm md:text-base"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
