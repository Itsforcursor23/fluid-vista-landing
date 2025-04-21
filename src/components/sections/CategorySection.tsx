
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface Category {
  name: string;
  slug: string;
  active?: boolean;
}

const categories: Category[] = [
  { name: "Cargo E-bikes", slug: "cargo-e-bikes" },
  { name: "City Bikes", slug: "city-bikes", active: true },
  { name: "Folding E-Bikes", slug: "folding-e-bikes" },
  { name: "E-Mountain Bikes", slug: "e-mountain-bikes" },
  { name: "Kids Bikes", slug: "kids-bikes" }
];

export const CategorySection = () => {
  return (
    <section className="sticky bottom-0 left-0 right-0 z-40 bg-zephyr-dark bg-opacity-80 backdrop-blur-lg py-4 border-t border-white/10">
      <div className="zephyr-container">
        <div className="flex items-center justify-between overflow-x-auto hide-scrollbar">
          <div className="flex items-center gap-8 lg:gap-12 pr-4">
            {categories.map((category, index) => (
              <Link
                key={category.slug}
                to={`/${category.slug}`}
                className={cn(
                  "text-white/70 hover:text-white whitespace-nowrap transition-colors py-2 text-sm md:text-base",
                  category.active && "text-white font-medium"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {category.name}
              </Link>
            ))}
          </div>
          <div className="flex-shrink-0 pl-4 border-l border-white/10">
            <Link 
              to="/test-ride"
              className="group inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors text-sm md:text-base whitespace-nowrap"
            >
              Book a free test ride
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
