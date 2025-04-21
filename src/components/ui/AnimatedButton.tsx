
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface AnimatedButtonProps {
  children: React.ReactNode;
  to: string;
  className?: string;
  arrow?: boolean;
  delay?: number;
}

export const AnimatedButton = ({
  children,
  to,
  className,
  arrow = true,
  delay = 0,
}: AnimatedButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link
      to={to}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-6 py-3 font-medium text-zephyr-dark transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg",
        "slide-in-bottom font-playfair",
        className
      )}
      style={{ "--delay": delay } as React.CSSProperties}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className="absolute inset-0 z-0 bg-gradient-to-r from-zephyr-cream to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      <span 
        className={cn(
          "absolute -inset-3 z-10 opacity-0 blur-xl bg-zephyr-cream", 
          isHovering ? "opacity-20" : ""
        )}
        style={{ 
          transition: "opacity 0.4s ease-out",
          transitionDelay: isHovering ? "0s" : "0.1s" 
        }}
      ></span>
      <span className="relative z-20 flex items-center gap-2">
        {children}
        {arrow && (
          <ArrowRight
            size={18}
            className={cn(
              "transition-transform duration-300",
              isHovering ? "translate-x-1" : ""
            )}
          />
        )}
      </span>
    </Link>
  );
};
