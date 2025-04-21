
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jordan Miller",
    title: "Daily Commuter",
    content: "My Zephyr e-bike has transformed my daily commute. I arrive at work energized and sweat-free, even in the summer. The battery life is phenomenal - I only charge it twice a week despite my 15-mile round trip commute.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Alex Rivera",
    title: "Weekend Explorer",
    content: "As someone who loves weekend adventures, my Zephyr Terrain has opened up new possibilities. I can explore trails that were previously too challenging, and the sturdy build quality gives me confidence on rough terrain.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Samantha Chen",
    title: "Urban Rider",
    content: "The Zephyr Velocity is the perfect city companion. It's nimble enough to navigate busy streets but has enough power to tackle the steep hills in my neighborhood. The folding feature means I can easily bring it into my apartment.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 4
  },
];

export const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, []);

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
      className="py-24 bg-zephyr-dark text-white relative opacity-0"
    >
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>

      <div className="zephyr-container relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <h2 className="heading-md mb-0 slide-in-left" style={{ "--delay": 0.1 } as React.CSSProperties}>
            What Our Riders Say
          </h2>
          <div className="flex items-center space-x-2 slide-in-right" style={{ "--delay": 0.2 } as React.CSSProperties}>
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
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
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
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
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="min-w-full"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-10">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                      <p className="text-white/70">{testimonial.title}</p>
                    </div>
                    <div className="ml-auto">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill={i < testimonial.rating ? "currentColor" : "none"}
                            stroke="currentColor"
                            strokeWidth="2"
                            className={cn("mx-0.5", i < testimonial.rating ? "text-yellow-400" : "text-white/20")}
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <blockquote>
                    <p className="text-white/80 text-lg leading-relaxed">"{testimonial.content}"</p>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                i === activeIndex
                  ? "w-8 bg-white"
                  : "bg-white/30 hover:bg-white/50"
              )}
              aria-label={`Go to testimonial ${i + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};
