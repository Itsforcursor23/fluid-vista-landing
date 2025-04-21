
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-zephyr-dark/90 backdrop-blur-md py-4" : "bg-transparent py-6"
      )}
    >
      <div className="zephyr-container flex items-center justify-between">
        <Link to="/" className="relative z-10">
          <div className="flex items-center space-x-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              className="text-white"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            <span className="text-xl font-semibold text-white tracking-wide">ZEPHYR</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["E-bikes", "All bikes", "Track you order", "About Us", "Contact"].map((item) => (
            <Link 
              key={item} 
              to={item === "E-bikes" ? "/e-bikes" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-white/90 hover:text-white transition-colors font-medium text-sm uppercase tracking-wider hover-underline"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/order" className="hidden md:flex items-center justify-center bg-white text-zephyr-dark font-medium uppercase tracking-wider text-sm py-2 px-6 rounded-full transition-transform hover:scale-105">
            Order now
          </Link>
          <button className="text-white p-2">
            <Heart size={20} />
          </button>
          <button className="text-white p-2">
            <ShoppingBag size={20} />
          </button>
          <button 
            className="text-white p-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-zephyr-dark z-40 transition-transform duration-300 ease-in-out",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col h-full pt-24 px-6">
          {["E-bikes", "All bikes", "Track you order", "About Us", "Contact"].map((item, index) => (
            <Link 
              key={item} 
              to={item === "E-bikes" ? "/e-bikes" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-white/90 hover:text-white py-4 text-2xl font-medium border-b border-white/10"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link 
            to="/order" 
            className="mt-8 bg-white text-zephyr-dark font-medium py-4 px-6 rounded-lg text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Order now
          </Link>
        </div>
      </div>
    </header>
  );
};
