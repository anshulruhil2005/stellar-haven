// client/pages/Products.tsx

import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import HeroWithBanners from "../components/HeroWithBanners";
import { ChevronDown, Filter, X } from "lucide-react";
import { allProducts } from "../lib/products";

// Home page ke "Shop by Category" wale names yahi hai:
const categories = [
  "Mobiles",
  "Laptops",
  "Smart Watches",
  "Earbuds",
  "Gaming Accessories",
  "Home Appliances",
];

export default function Products() {
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200000 });
  const [minRating, setMinRating] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // ✅ Home se jab /products?category=mobiles aata hai
  // yahan se category pick karke filter me set karenge
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const raw = params.get("category");

    if (!raw) {
      setSelectedCategory(null);
      return;
    }

    const match = categories.find(
      (cat) => cat.toLowerCase() === raw.toLowerCase()
    );

    setSelectedCategory(match || null);
  }, [location.search]);

  // Products filter logic
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesCategory =
        !selectedCategory || product.category === selectedCategory;

      const matchesPrice =
        product.price >= priceRange.min &&
        product.price <= priceRange.max;

      const matchesRating = product.rating >= minRating;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return (
        matchesCategory && matchesPrice && matchesRating && matchesSearch
      );
    });
  }, [selectedCategory, priceRange, minRating, searchTerm]);

  return (
    <Layout>
      {/* Top hero + banners (same jaise pehle) */}
      <HeroWithBanners />

      <section className="section-padding bg-background">
        <div className="container-custom max-w-6xl mx-auto">
          {/* Page heading */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                All Products
              </h1>
              <p className="text-muted-foreground text-sm md:text-base mt-1">
                Browse Mobiles, Laptops, Smart Watches, Earbuds and more.
              </p>
            </div>

            {/* Mobile filter button */}
            <button
              className="md:hidden inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-border text-sm"
              onClick={() => setIsMobileFilterOpen(true)}
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>

          <div className="grid gap-8 lg:grid-cols-[260px,1fr]">
            {/* ================= LEFT: FILTER PANEL ================= */}
            <aside className="hidden lg:block">
              <div className="bg-card border border-border rounded-2xl p-4 space-y-6">
                {/* Category filter */}
                <div>
                  <h2 className="text-sm font-semibold mb-3">
                    Category
                  </h2>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`text-xs text-left px-3 py-2 rounded-lg border ${
                        !selectedCategory
                          ? "bg-primary text-white border-primary"
                          : "border-border text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      All Categories
                    </button>
                    {categories.map((cat) => {
                      const active = selectedCategory === cat;
                      return (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`text-xs text-left px-3 py-2 rounded-lg border ${
                            active
                              ? "bg-primary text-white border-primary"
                              : "border-border text-muted-foreground hover:bg-muted"
                          }`}
                        >
                          {cat}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Price filter */}
                <div>
                  <h2 className="text-sm font-semibold mb-3">Price</h2>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span>Min</span>
                      <input
                        type="number"
                        className="w-24 px-2 py-1 rounded-md border border-input bg-background text-right text-xs"
                        value={priceRange.min}
                        onChange={(e) =>
                          setPriceRange((prev) => ({
                            ...prev,
                            min: Number(e.target.value || 0),
                          }))
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Max</span>
                      <input
                        type="number"
                        className="w-24 px-2 py-1 rounded-md border border-input bg-background text-right text-xs"
                        value={priceRange.max}
                        onChange={(e) =>
                          setPriceRange((prev) => ({
                            ...prev,
                            max: Number(e.target.value || 0),
                          }))
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Rating filter */}
                <div>
                  <h2 className="text-sm font-semibold mb-3">
                    Minimum Rating
                  </h2>
                  <select
                    value={minRating}
                    onChange={(e) => setMinRating(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm"
                  >
                    <option value={0}>All ratings</option>
                    <option value={3}>3★ & above</option>
                    <option value={4}>4★ & above</option>
                  </select>
                </div>
              </div>
            </aside>

            {/* ================= RIGHT: PRODUCTS LIST ================= */}
            <main className="space-y-4">
              {/* Search + sort line */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="relative w-full md:max-w-xs">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-input bg-background text-sm pr-8"
                  />
                  <ChevronDown className="w-4 h-4 absolute right-2 top-2.5 text-muted-foreground rotate-90" />
                </div>

                <p className="text-xs text-muted-foreground">
                  Showing{" "}
                  <span className="font-semibold">
                    {filteredProducts.length}
                  </span>{" "}
                  products
                  {selectedCategory && (
                    <>
                      {" "}
                      in{" "}
                      <span className="font-semibold">
                        {selectedCategory}
                      </span>
                    </>
                  )}
                </p>
              </div>

              {/* Product grid */}
              {filteredProducts.length === 0 ? (
                <div className="bg-card border border-dashed border-border rounded-2xl p-8 text-center text-sm text-muted-foreground">
                  No products found for this filter. Try changing category,
                  price or search.
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* ---------- Mobile Filters Drawer ---------- */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 md:hidden">
          <div className="absolute inset-y-0 right-0 w-80 max-w-[80%] bg-card border-l border-border p-4 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold">Filters</h2>
              <button
                className="p-1 rounded-lg hover:bg-muted"
                onClick={() => setIsMobileFilterOpen(false)}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-6 text-sm">
              {/* Category */}
              <div>
                <h3 className="text-sm font-semibold mb-2">Category</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`px-3 py-1.5 rounded-full border text-xs ${
                      !selectedCategory
                        ? "bg-primary text-white border-primary"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => {
                    const active = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1.5 rounded-full border text-xs ${
                          active
                            ? "bg-primary text-white border-primary"
                            : "border-border text-muted-foreground"
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-sm font-semibold mb-2">Price</h3>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>Min</span>
                    <input
                      type="number"
                      className="w-24 px-2 py-1 rounded-md border border-input bg-background text-right text-xs"
                      value={priceRange.min}
                      onChange={(e) =>
                        setPriceRange((prev) => ({
                          ...prev,
                          min: Number(e.target.value || 0),
                        }))
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Max</span>
                    <input
                      type="number"
                      className="w-24 px-2 py-1 rounded-md border border-input bg-background text-right text-xs"
                      value={priceRange.max}
                      onChange={(e) =>
                        setPriceRange((prev) => ({
                          ...prev,
                          max: Number(e.target.value || 0),
                        }))
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div>
                <h3 className="text-sm font-semibold mb-2">
                  Minimum Rating
                </h3>
                <select
                  value={minRating}
                  onChange={(e) => setMinRating(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg border border-input bg-background text-sm"
                >
                  <option value={0}>All ratings</option>
                  <option value={3}>3★ & above</option>
                  <option value={4}>4★ & above</option>
                </select>
              </div>
            </div>

            <button
              className="mt-4 w-full py-2.5 rounded-xl bg-primary text-white text-sm font-semibold"
              onClick={() => setIsMobileFilterOpen(false)}
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}
