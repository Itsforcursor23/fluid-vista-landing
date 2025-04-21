
import React, { useRef, useEffect } from "react";
import { AnimatedButton } from "../ui/AnimatedButton";

export const CTASection = () => {
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-zephyr-light opacity-0"
    >
      <div className="zephyr-container">
        <div className="bg-gradient-to-r from-zephyr-dark to-zephyr-dark/80 rounded-xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <pattern id="diagonalLines" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="40" style={{ stroke: "white", strokeWidth: 2 }} />
              </pattern>
              <rect width="100%" height="100%" fill="url(#diagonalLines)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 slide-in-bottom" style={{ "--delay": 0.1 } as React.CSSProperties}>
              Ready to Experience the Future of Cycling?
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-8 slide-in-bottom" style={{ "--delay": 0.2 } as React.CSSProperties}>
              Join thousands of satisfied riders who have made the switch to Zephyr electric bikes. 
              Test ride today and discover the perfect e-bike for your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 slide-in-bottom" style={{ "--delay": 0.3 } as React.CSSProperties}>
              <AnimatedButton to="/order" className="bg-white text-zephyr-dark font-medium !px-8 !py-3.5">
                Order Now
              </AnimatedButton>
              <AnimatedButton to="/test-ride" className="bg-transparent border border-white text-white !px-8 !py-3.5 hover:bg-white/10">
                Book a Test Ride
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
