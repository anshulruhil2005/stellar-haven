import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-tech-black text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Ruhil</h3>
            <p className="text-gray-300 mb-4">
              Delivering trusted, affordable, next-generation tech across India.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-bold text-lg mb-4">Policies</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">+91 9000 000 000</span>
              </div>
              <div className="flex gap-3 items-start">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:support@ruhil.com"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  support@ruhil.com
                </a>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Bangalore, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Ruhil Electronics. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
