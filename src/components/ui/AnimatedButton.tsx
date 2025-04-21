
import React from "react";
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
  return (
    <Link
      to={to}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-6 py-3 font-medium text-zephyr-dark transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg",
        "slide-in-bottom",
        className
      )}
      style={{ "--delay": delay } as React.CSSProperties}
    >
      <span className="relative flex items-center gap-2">
        {children}
        {arrow && (
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        )}
      </span>
    </Link>
  );
};
