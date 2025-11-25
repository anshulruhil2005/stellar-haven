import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-tech-black border-b border-tech-gray dark:border-tech-gray shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold text-primary hover:text-tech-blue-dark transition-colors"
          >
            Ruhil
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/products"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-primary font-medium transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-tech-gray dark:hover:bg-tech-gray rounded-lg transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/cart"
              className="p-2 hover:bg-tech-gray dark:hover:bg-tech-gray rounded-lg transition-colors relative"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-1 right-1 bg-primary text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-tech-gray dark:hover:bg-tech-gray rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-tech-gray pb-4 animate-slide-down">
            <Link
              to="/products"
              className="block py-2 text-foreground hover:text-primary font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/about"
              className="block py-2 text-foreground hover:text-primary font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-foreground hover:text-primary font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
