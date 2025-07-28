import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  id?: string;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  background?: "white" | "gray" | "primary" | "secondary" | "transparent";
  as?: keyof React.JSX.IntrinsicElements;
}

const paddingClasses = {
  none: "",
  sm: "py-8",
  md: "py-16",
  lg: "py-24",
  xl: "py-32",
};

const backgroundClasses = {
  white: "bg-white",
  gray: "bg-gray-50",
  primary: "bg-primary-800",
  secondary: "bg-secondary-600",
  transparent: "bg-transparent",
};

export function Section({
  children,
  fullWidth = true,
  className = "",
  id,
  padding = "lg",
  background = "white",
  as: Component = "section",
}: SectionProps) {
  const sectionClasses = cn(
    // Full-width utility if enabled
    fullWidth && "section-full-width",
    // Background color
    backgroundClasses[background],
    // Padding
    paddingClasses[padding],
    // Custom classes
    className
  );

  const contentClasses = fullWidth ? "section-content" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

  return (
    <Component id={id} className={sectionClasses}>
      <div className={contentClasses}>
        {children}
      </div>
    </Component>
  );
}

// Specialized section variants for common use cases
export function WhiteSection({ children, ...props }: Omit<SectionProps, "background">) {
  return <Section background="white" {...props}>{children}</Section>;
}

export function GraySection({ children, ...props }: Omit<SectionProps, "background">) {
  return <Section background="gray" {...props}>{children}</Section>;
}

export function PrimarySection({ children, ...props }: Omit<SectionProps, "background">) {
  return <Section background="primary" {...props}>{children}</Section>;
}

export function SecondarySection({ children, ...props }: Omit<SectionProps, "background">) {
  return <Section background="secondary" {...props}>{children}</Section>;
}

export default Section;