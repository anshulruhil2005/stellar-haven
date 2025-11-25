import Layout from "../components/Layout";
import FeatureCard from "../components/FeatureCard";
import HeroWithBanners from "../components/HeroWithBanners";
import { Zap, Truck, RotateCcw, Headphones, Award, Target, Users, TrendingUp } from "lucide-react";

const aboutBanners = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    title: "About Ruhil Electronics",
    subtitle: "Your trusted partner for authentic electronics",
    link: "/about",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    title: "10+ Years of Excellence",
    subtitle: "Serving thousands of satisfied customers across India",
    link: "/about",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    title: "100% Genuine Products",
    subtitle: "Authenticity and quality guaranteed with every purchase",
    link: "/about",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section with Banners */}
      <HeroWithBanners
        title="About Ruhil Electronics"
        subtitle="Delivering trusted, affordable, next-generation tech across India"
        ctaText="Learn More"
        ctaLink="/about"
        banners={aboutBanners}
      />

      {/* Brand Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                alt="Ruhil Electronics Store"
                className="rounded-lg shadow-xl"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Ruhil Electronics was founded with a simple mission: to make cutting-edge technology accessible to every Indian. We started as a small electronics retailer in Bangalore and have grown into a trusted name in the industry.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                With over a decade of experience, we've served thousands of satisfied customers across India. Our commitment to authenticity, quality, and customer satisfaction has made us a preferred choice for gadget enthusiasts, professionals, and casual users alike.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we continue to expand our product range and improve our services, ensuring that every customer gets the best value for their money and an exceptional buying experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-tech-gray dark:bg-tech-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white dark:bg-card rounded-lg shadow-md p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To deliver trusted, affordable, next-generation technology across India, empowering every individual and business to embrace the digital revolution with confidence.
              </p>
              <ul className="mt-6 space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>100% authentic products with manufacturer warranty</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Competitive pricing and exclusive deals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Expert customer support and guidance</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-card rounded-lg shadow-md p-8">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become India's most trusted electronics retailer, recognized for our integrity, innovation, and unwavering commitment to customer satisfaction.
              </p>
              <ul className="mt-6 space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Expand our presence across India</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Introduce innovative products and services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span>Build long-term relationships with customers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Ruhil Electronics?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best experience for our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Award}
              title="100% Genuine Products"
              description="All products are authentic and come with manufacturer warranty"
            />
            <FeatureCard
              icon={Truck}
              title="Fast Delivery"
              description="Quick and reliable shipping across all of India"
            />
            <FeatureCard
              icon={RotateCcw}
              title="Easy Returns"
              description="30-day hassle-free return policy for your peace of mind"
            />
            <FeatureCard
              icon={Headphones}
              title="24/7 Support"
              description="Round-the-clock customer support via phone and email"
            />
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="section-padding bg-tech-gray dark:bg-tech-gray">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                10K+
              </h3>
              <p className="text-lg text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                5K+
              </h3>
              <p className="text-lg text-muted-foreground">Products</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                100%
              </h3>
              <p className="text-lg text-muted-foreground">Authentic</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                10+
              </h3>
              <p className="text-lg text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate professionals dedicated to serving you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ruhil Sharma",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
              },
              {
                name: "Priya Patel",
                role: "Operations Manager",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
              },
              {
                name: "Amit Kumar",
                role: "Customer Success Lead",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white dark:bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-tech-blue-dark py-16 md:py-24">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Quality Tech?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Visit our store today and discover the perfect gadget for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="bg-white hover:bg-gray-100 text-tech-black font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Shop Now
            </a>
            <a
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-tech-black text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
