
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { AnimatedButton } from "../ui/AnimatedButton";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  features: string[];
  badge?: string;
}

const products: Product[] = [
  {
    id: "zephyr-velocity",
    name: "Zephyr Velocity",
    category: "Urban Commuter",
    price: 1599,
    image: "https://images.unsplash.com/photo-1571333250630-f0369566e359?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    features: ["350W Motor", "60 Mile Range", "Easy Folding Design"],
    badge: "Best Seller"
  },
  {
    id: "zephyr-terrain",
    name: "Zephyr Terrain",
    category: "Off-road",
    price: 2199,
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1908&q=80",
    features: ["500W Motor", "Full Suspension", "All-terrain Tires"],
  },
  {
    id: "zephyr-cargo",
    name: "Zephyr Cargo",
    category: "Utility",
    price: 2499,
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    features: ["450W Motor", "High Capacity Rack", "Extended Battery Life"],
  },
];

export const ProductSection = () => {
  const [activeProduct, setActiveProduct] = useState<string>(products[0].id);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    productRefs.current.forEach((product) => {
      if (product) {
        observer.observe(product);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      productRefs.current.forEach((product) => {
        if (product) {
          observer.unobserve(product);
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-zephyr-cream">
      <div className="zephyr-container">
        <div className="text-center mb-16">
          <h2 className="heading-md font-playfair text-zephyr-dark mb-4 slide-in-bottom" style={{ "--delay": 0.1 } as React.CSSProperties}>
            Featured Electric Bikes
          </h2>
          <p className="text-zephyr-muted text-lg max-w-2xl mx-auto slide-in-bottom font-playfair" style={{ "--delay": 0.2 } as React.CSSProperties}>
            Discover our most popular models, designed for every type of rider and journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (productRefs.current[index] = el)}
              className={cn(
                "bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col opacity-0 transform hover:scale-[1.03] hover:-translate-y-1",
                activeProduct === product.id && "ring-2 ring-zephyr-dark ring-opacity-10"
              )}
              style={{ animationDelay: `${(index + 3) * 150}ms` }}
              onMouseEnter={() => setActiveProduct(product.id)}
            >
              <div className="relative h-64 overflow-hidden">
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-zephyr-dark text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    {product.badge}
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <span className="text-sm font-medium text-zephyr-muted font-playfair block mb-1">{product.category}</span>
                  <h3 className="text-xl font-semibold text-zephyr-dark font-playfair">{product.name}</h3>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-zephyr-dark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 text-zephyr-dark"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-lg font-bold text-zephyr-dark font-playfair">${product.price}</span>
                  <AnimatedButton to={`/product/${product.id}`} className="!py-2 !px-4 hover:scale-105 transition-transform" arrow={false}>
                    View Details
                  </AnimatedButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
