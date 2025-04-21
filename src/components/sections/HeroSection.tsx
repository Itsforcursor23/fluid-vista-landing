
import React, { useEffect, useRef } from "react";
import { AnimatedButton } from "../ui/AnimatedButton";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const section = sectionRef.current;
      if (section) {
        const heading = section.querySelector(".hero-heading");
        const subtext = section.querySelector(".hero-subtext");
        const cta = section.querySelector(".hero-cta");
        
        if (heading) {
          (heading as HTMLElement).style.transform = `translateY(${scrollY * 0.2}px)`;
        }
        if (subtext) {
          (subtext as HTMLElement).style.transform = `translateY(${scrollY * 0.1}px)`;
        }
        if (cta) {
          (cta as HTMLElement).style.transform = `translateY(${scrollY * 0.05}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-zephyr-dark flex items-center"
      style={{ 
        backgroundImage: "url('/lovable-uploads/2e51937f-26b1-43eb-9676-5651c6bb10c3.png')", 
        backgroundSize: "cover", 
        backgroundPosition: "center"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-zephyr-dark/90 to-transparent pointer-events-none"></div>
      
      <div className="zephyr-container relative z-10 flex flex-col justify-center h-full pt-20">
        <div className="max-w-2xl">
          <h1 className="heading-xl text-white mb-6 leading-none hero-heading slide-in-left" style={{ "--delay": 0.2 } as React.CSSProperties}>
            Top-tier <br />
            Electric Bikes
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 hero-subtext slide-in-left" style={{ "--delay": 0.4 } as React.CSSProperties}>
            From $1590
          </p>
          
          <div className="hero-cta slide-in-left" style={{ "--delay": 0.6 } as React.CSSProperties}>
            <AnimatedButton to="/e-bikes" delay={0.8}>
              Explore our best Ebikes
            </AnimatedButton>
          </div>
        </div>
      </div>

      {/* Video preview button */}
      <div className="absolute bottom-16 right-8 md:right-16 slide-in-bottom" style={{ "--delay": 1 } as React.CSSProperties}>
        <button className="relative w-48 md:w-56 h-24 md:h-28 rounded-lg overflow-hidden group">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571333250630-f0369566e359?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')" }}
          ></div>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-zephyr-dark border-b-[8px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
};
