"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

// Animation presets
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7 }
};

export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7 }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

interface MotionDivProps extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "transition"> {
  children: ReactNode;
  animation?: "fadeInUp" | "fadeIn" | "slideInLeft" | "slideInRight" | "scaleIn" | "staggerContainer" | "staggerItem";
  delay?: number;
  duration?: number;
  className?: string;
}

const animationPresets = {
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight,
  scaleIn,
  staggerContainer,
  staggerItem
};

export function MotionDiv({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration,
  className,
  ...props
}: MotionDivProps) {
  const preset = animationPresets[animation];
  
  const customTransition = 'transition' in preset ? (duration ? 
    { ...preset.transition, duration, delay } : 
    { ...preset.transition, delay }) : { duration: duration || 0.6, delay };

  return (
    <motion.div
      initial={'initial' in preset ? preset.initial : undefined}
      animate={'animate' in preset ? preset.animate : undefined}
      transition={customTransition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default MotionDiv;