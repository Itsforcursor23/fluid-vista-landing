
import React, { useRef, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";

const specCategories = [
  {
    title: "Performance",
    items: [
      { name: "Top Speed", value: "28 mph", description: "Class 3 e-bike with pedal assist up to 28 mph" },
      { name: "Motor Power", value: "500W", description: "Powerful mid-drive motor with peak output of 750W" },
      { name: "Battery Range", value: "40-80 miles", description: "Range varies based on terrain, rider weight, and assist level" }
    ]
  },
  {
    title: "Components",
    items: [
      { name: "Frame Material", value: "Aluminum Alloy", description: "Lightweight yet durable 6061 aluminum frame" },
      { name: "Brakes", value: "Hydraulic Disc", description: "All-weather stopping power with 180mm rotors" },
      { name: "Gearing", value: "1x11 Speed", description: "Wide range cassette for all terrains" }
    ]
  },
  {
    title: "Comfort",
    items: [
      { name: "Suspension", value: "Front Fork", description: "100mm travel air suspension with lockout" },
      { name: "Saddle", value: "Ergonomic Gel", description: "Premium comfort with pressure relief channel" },
      { name: "Handlebars", value: "Adjustable", description: "Multiple position options for perfect fit" }
    ]
  },
  {
    title: "Technology",
    items: [
      { name: "Display", value: "Color LCD", description: "Backlit display with trip computer and battery management" },
      { name: "Lighting", value: "Integrated LED", description: "Front and rear lights powered by main battery" },
      { name: "Connectivity", value: "Bluetooth", description: "Connect to smartphone app for navigation and ride tracking" }
    ]
  }
];

export const SpecificationsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-zephyr-light">
      <div className="zephyr-container">
        <div className="text-center mb-16">
          <h2 className="heading-md text-zephyr-dark mb-4 slide-in-bottom font-playfair" style={{ "--delay": 0.1 } as React.CSSProperties}>
            Technical Specifications
          </h2>
          <p className="text-zephyr-muted text-lg max-w-2xl mx-auto slide-in-bottom font-playfair" style={{ "--delay": 0.2 } as React.CSSProperties}>
            Advanced engineering meets elegant design in every Zephyr electric bike
          </p>
        </div>

        <div className="mb-12">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {specCategories.map((category, index) => (
                <CarouselItem key={category.title} className="md:basis-1/2 lg:basis-1/3">
                  <div 
                    ref={(el) => {
                      if (el) cardsRef.current[index] = el;
                    }}
                    className="opacity-0"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <Card className="bg-white border-zephyr-cream hover:shadow-md transition-all duration-300 h-full transform hover:scale-[1.02]">
                      <CardHeader>
                        <CardTitle className="font-playfair text-zephyr-dark">{category.title}</CardTitle>
                        <CardDescription className="font-playfair text-zephyr-muted">Key specifications</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          {category.items.map((item) => (
                            <li key={item.name} className="flex justify-between items-center">
                              <HoverCard>
                                <HoverCardTrigger>
                                  <span className="text-zephyr-dark font-medium font-playfair cursor-help border-b border-dotted border-zephyr-muted">{item.name}</span>
                                </HoverCardTrigger>
                                <HoverCardContent className="font-playfair">
                                  {item.description}
                                </HoverCardContent>
                              </HoverCard>
                              <span className="font-bold text-zephyr-dark font-playfair">{item.value}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 md:-left-12" />
            <CarouselNext className="absolute right-0 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
