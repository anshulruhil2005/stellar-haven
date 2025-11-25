import { Zap, Truck, RotateCcw, Headphones, TrendingUp, Gift } from "lucide-react";
import Layout from "../components/Layout";
import HeroWithBanners from "../components/HeroWithBanners";
import ProductCard from "../components/ProductCard";
import TestimonialCard from "../components/TestimonialCard";
import FeatureCard from "../components/FeatureCard";
import Newsletter from "../components/Newsletter";
import { Link } from "react-router-dom";

// Mock data
const featuredProducts = [
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
];

const trendingDeals = [
  {
    id: "d1",
    name: "Sony WH-1000XM5 Headphones",
    originalPrice: 24999,
    salePrice: 18999,
    discount: 24,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
  },
  {
    id: "d2",
    name: "Dell Inspiron 15 Laptop",
    originalPrice: 55999,
    salePrice: 44999,
    discount: 20,
    image: "https://images.unsplash.com/photo-1588872657840-790ff3bde4c7?w=500&h=500&fit=crop",
  },
  {
    id: "d3",
    name: "GoPro Hero 12",
    originalPrice: 42999,
    salePrice: 34999,
    discount: 19,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop",
  },
];

const testimonials = [
  {
    name: "Raj Kumar",
    role: "Tech Enthusiast",
    text: "Ruhil Electronics provided me with genuine products and excellent customer service. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Priya Sharma",
    role: "Business Owner",
    text: "Fast delivery and authentic products. I've made multiple purchases and never been disappointed.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Amit Patel",
    role: "Student",
    text: "Great prices and a wide variety of gadgets. The return process was hassle-free.",
    rating: 4.5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
];

const features = [
  {
    icon: Gift,
    title: "100% Genuine Products",
    description: "All products are authentic and come with manufacturer warranty",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and reliable shipping across all of India",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day hassle-free return policy for your peace of mind",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support via phone and email",
  },
];

const homeBanners = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=1200&h=600&fit=crop",
    title: "New iPhone 15 Pro",
    subtitle: "Experience the future with cutting-edge technology and design",
    link: "/products",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
    title: "MacBook Pro 16",
    subtitle: "Powerful performance for professionals and creators",
    link: "/products",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=600&fit=crop",
    title: "Premium Audio Experience",
    subtitle: "Discover our collection of high-quality wireless earbuds",
    link: "/products",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=600&fit=crop",
    title: "Smart Watch Collection",
    subtitle: "Stay connected with the latest wearable technology",
    link: "/products",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section with Banners */}
      <HeroWithBanners
        title="Future of Electronics"
        subtitle="Powered by Ruhil. Discover the latest gadgets: smartphones, laptops, smartwatches, and more."
        ctaText="Shop Now"
        ctaLink="/products"
        banners={homeBanners}
      />

      {/* Featured Products Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked selection of the best electronics available in the market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-primary hover:bg-tech-blue-dark text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              View All Products
              <Zap className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Deals Section */}
      <section className="section-padding bg-tech-gray dark:bg-tech-gray">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Trending Deals & Limited Offers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingDeals.map((deal) => (
              <div
                key={deal.id}
                className="bg-white dark:bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-56 bg-gray-200 overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white font-bold px-3 py-1 rounded-full">
                    -{deal.discount}%
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-foreground mb-3">
                    {deal.name}
                  </h3>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-primary">
                      ₹{deal.salePrice.toLocaleString()}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      ₹{deal.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <button className="w-full bg-primary hover:bg-tech-blue-dark text-white font-bold py-2 rounded-lg transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Ruhil Electronics?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering the best experience for our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-tech-gray dark:bg-tech-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Customer Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What our satisfied customers have to say about Ruhil Electronics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Categories Preview Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Shop by Category
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Mobiles", "Laptops", "Smart Watches", "Earbuds", "Gaming Accessories", "Home Appliances"].map(
              (category) => (
                <Link
                  key={category}
                  to={`/products?category=${category.toLowerCase()}`}
                  className="bg-gradient-to-br from-primary to-tech-blue-dark hover:shadow-lg rounded-lg p-6 text-center text-white font-bold transition-all duration-300 hover:-translate-y-1"
                >
                  {category}
                </Link>
              )
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
