import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

const sizeClasses = {
  sm: "max-w-2xl",
  md: "max-w-4xl", 
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-none",
};

export function Container({
  children,
  size = "xl",
  className = "",
  as: Component = "div",
}: ContainerProps) {
  const containerClasses = cn(
    "mx-auto px-4 sm:px-6 lg:px-8",
    sizeClasses[size],
    className
  );

  return (
    <Component className={containerClasses}>
      {children}
    </Component>
  );
}

export default Container;