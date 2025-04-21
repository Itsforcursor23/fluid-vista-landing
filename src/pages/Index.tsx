
import React, { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { CategorySection } from "@/components/sections/CategorySection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  // For smooth scrolling when clicking links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // Add intersection observer to reveal sections on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-zephyr-light text-zephyr-dark overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureSection />
        <ProductSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
      <CategorySection />
    </div>
  );
};

export default Index;
