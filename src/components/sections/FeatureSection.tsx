
import React, { useEffect, useRef } from "react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Cutting-Edge Technology",
    description: "Advanced electric motors with smart power management systems for optimal performance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="m4.93 4.93 4.24 4.24"/>
        <path d="m14.83 9.17 4.24-4.24"/>
        <path d="m14.83 14.83 4.24 4.24"/>
        <path d="m9.17 14.83-4.24 4.24"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
    ),
  },
  {
    title: "Sleek Design",
    description: "Aerodynamic frames crafted from lightweight materials for a smooth and stylish ride.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    title: "Eco-Friendly",
    description: "Zero emissions transportation that reduces your carbon footprint without compromising on performance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22c1.25-1.67 2.04-3.92 2.5-6.5"/>
        <path d="M5 8c1.25 1.67 2.04 3.92 2.5 6.5"/>
        <path d="M16.5 19c-.79.5-1.71.88-2.5 1"/>
        <path d="M19 6.5c-1.79.35-3.29 1.79-3.5 3"/>
        <path d="M22 12c-1.25-1.67-2.04-3.92-2.5-6.5"/>
        <path d="M10 9c1.25-1.67 2.04-3.92 2.5-6.5"/>
        <path d="M9 22a9 9 0 0 0 9-9"/>
        <path d="M6 13c2.5 0 4-1.5 4.5-3.5"/>
      </svg>
    ),
  },
  {
    title: "Superior Range",
    description: "Long-lasting batteries provide extended journeys up to 80 miles on a single charge.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/>
        <path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
        <line x1="11" x2="10" y1="7" y2="17"/>
        <line x1="20" x2="20" y1="10" y2="14"/>
        <line x1="4" x2="4" y1="10" y2="14"/>
      </svg>
    ),
  },
];

export const FeatureSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement[]>([]);

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

    featuresRef.current.forEach((feature) => {
      if (feature) {
        observer.observe(feature);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      featuresRef.current.forEach((feature) => {
        if (feature) {
          observer.unobserve(feature);
        }
      });
    };
  }, []);

  // Mouse follow effect for feature cards
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      featuresRef.current.forEach(feature => {
        if (!feature) return;
        
        const rect = feature.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Only apply effect if mouse is over the element
        if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          // Calculate rotation based on mouse position
          const rotateY = ((x - centerX) / centerX) * 5; // Max 5 degrees
          const rotateX = ((centerY - y) / centerY) * 5; // Max 5 degrees
          
          feature.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          feature.style.transition = 'transform 0.1s';
        }
      });
    };
    
    const handleMouseLeave = () => {
      featuresRef.current.forEach(feature => {
        if (!feature) return;
        feature.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        feature.style.transition = 'transform 0.5s';
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="zephyr-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="heading-md text-zephyr-dark mb-4 slide-in-bottom font-playfair" style={{ "--delay": 0.1 } as React.CSSProperties}>
            Experience the Zephyr Difference
          </h2>
          <p className="text-zephyr-muted text-lg slide-in-bottom font-playfair" style={{ "--delay": 0.2 } as React.CSSProperties}>
            Our electric bikes combine cutting-edge technology with elegant design to create 
            the perfect riding experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              ref={(el) => {
                if (el) featuresRef.current[index] = el;
              }}
              className="bg-zephyr-light p-8 rounded-xl opacity-0 transform hover:shadow-lg transition-all duration-300 cursor-pointer"
              style={{ 
                animationDelay: `${(index + 1) * 150}ms`,
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-zephyr-dark shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-zephyr-dark mb-3 font-playfair">
                {feature.title}
              </h3>
              <p className="text-zephyr-muted font-playfair">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
