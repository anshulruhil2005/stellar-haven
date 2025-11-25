import { useState } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import HeroWithBanners from "../components/HeroWithBanners";
import { ChevronDown, Filter, X } from "lucide-react";

// Mock products data
const allProducts = [
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    price: 139999,
    image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=500&h=500&fit=crop",
    rating: 5,
    reviews: 324,
    category: "Mobiles",
  },
  {
    id: "2",
    name: "MacBook Pro 16",
    price: 199999,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
    rating: 5,
    reviews: 256,
    category: "Laptops",
  },
  {
    id: "3",
    name: "Apple Watch Series 9",
    price: 41999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 182,
    category: "Smart Watches",
  },
  {
    id: "4",
    name: "AirPods Pro 2",
    price: 26999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 412,
    category: "Earbuds",
  },
  {
    id: "5",
    name: "Samsung Galaxy S24",
    price: 79999,
    image: "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=500&fit=crop",
    rating: 4,
    reviews: 198,
    category: "Mobiles",
  },
  {
    id: "6",
    name: "iPad Air 2024",
    price: 74999,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    rating: 5,
    reviews: 276,
    category: "Tablets",
  },
  {
    id: "7",
    name: "Dell Inspiron 15",
    price: 55999,
    image: "https://images.unsplash.com/photo-1588872657840-790ff3bde4c7?w=500&h=500&fit=crop",
    rating: 4,
    reviews: 145,
    category: "Laptops",
  },
  {
    id: "8",
    name: "OnePlus Watch 2",
    price: 19999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    rating: 4,
    reviews: 87,
    category: "Smart Watches",
  },
  {
    id: "9",
    name: "Sony WH-1000XM5",
    price: 24999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    rating: 5,
    reviews: 523,
    category: "Earbuds",
  },
  {
    id: "10",
    name: "Realme 12 Pro",
    price: 34999,
    image: "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 267,
    category: "Mobiles",
  },
  {
    id: "11",
    name: "HP Pavilion 15",
    price: 49999,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
    rating: 4,
    reviews: 112,
    category: "Laptops",
  },
  {
    id: "12",
    name: "Boat Airdopes 131",
    price: 2999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    rating: 3.5,
    reviews: 891,
    category: "Earbuds",
  },
];

const categories = [
  "Mobiles",
  "Laptops",
  "Smart Watches",
  "Earbuds",
  "Gaming Accessories",
  "Home Appliances",
];

const productsBanners = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=1200&h=600&fit=crop",
    title: "Latest Smartphones",
    subtitle: "Exclusive deals on flagship devices from top brands",
    link: "/products",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&h=600&fit=crop",
    title: "Gaming Laptops",
    subtitle: "High-performance machines for gamers and creators",
    link: "/products",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=600&fit=crop",
    title: "Wearable Tech",
    subtitle: "Smart watches and fitness trackers at best prices",
    link: "/products",
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200000 });
  const [minRating, setMinRating] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter products
  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesPrice =
      product.price >= priceRange.min && product.price <= priceRange.max;
    const matchesRating = product.rating >= minRating;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesPrice && matchesRating && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero Section with Banners */}
      <HeroWithBanners
        title="Products"
        subtitle="Browse our complete collection of authentic electronics"
        ctaText="Shop Now"
        ctaLink="/products"
        banners={productsBanners}
      />

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                className="flex items-center gap-2 bg-primary text-white font-bold px-4 py-2 rounded-lg w-full justify-center"
              >
                <Filter className="w-5 h-5" />
                Filters
              </button>
            </div>

            {/* Filters Sidebar */}
            <div
              className={`${
                isMobileFilterOpen ? "block" : "hidden"
              } lg:block lg:col-span-1`}
            >
              <div className="bg-white dark:bg-card rounded-lg shadow-md p-6">
                {/* Close button for mobile */}
                {isMobileFilterOpen && (
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="lg:hidden mb-4 w-full flex justify-end"
                  >
                    <X className="w-6 h-6" />
                  </button>
                )}

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Search Products
                  </label>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === null
                          ? "bg-primary text-white font-bold"
                          : "hover:bg-tech-gray dark:hover:bg-tech-gray"
                      }`}
                    >
                      All Categories
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? "bg-primary text-white font-bold"
                            : "hover:bg-tech-gray dark:hover:bg-tech-gray"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Price Range
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm text-muted-foreground mb-1">
                        Min: ₹{priceRange.min.toLocaleString()}
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="200000"
                        step="5000"
                        value={priceRange.min}
                        onChange={(e) =>
                          setPriceRange({
                            ...priceRange,
                            min: parseInt(e.target.value),
                          })
                        }
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-1">
                        Max: ₹{priceRange.max.toLocaleString()}
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="200000"
                        step="5000"
                        value={priceRange.max}
                        onChange={(e) =>
                          setPriceRange({
                            ...priceRange,
                            max: parseInt(e.target.value),
                          })
                        }
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Minimum Rating
                  </h3>
                  <div className="space-y-2">
                    {[0, 3.5, 4, 4.5, 5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => setMinRating(rating)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                          minRating === rating
                            ? "bg-primary text-white font-bold"
                            : "hover:bg-tech-gray dark:hover:bg-tech-gray"
                        }`}
                      >
                        {rating === 0 ? (
                          "All Ratings"
                        ) : (
                          <>
                            {rating}★ & Up
                          </>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setPriceRange({ min: 0, max: 200000 });
                    setMinRating(0);
                    setSearchTerm("");
                  }}
                  className="w-full bg-secondary hover:bg-tech-black text-secondary-foreground font-bold py-2 rounded-lg transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Results Counter */}
              <div className="mb-6 flex justify-between items-center">
                <p className="text-muted-foreground">
                  Showing <span className="font-bold">{filteredProducts.length}</span> products
                </p>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-2xl font-bold text-foreground mb-2">
                    No products found
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters or search term
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setPriceRange({ min: 0, max: 200000 });
                      setMinRating(0);
                      setSearchTerm("");
                    }}
                    className="bg-primary hover:bg-tech-blue-dark text-white font-bold py-2 px-6 rounded-lg transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
