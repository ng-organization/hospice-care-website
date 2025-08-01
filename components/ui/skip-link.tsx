"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface SkipLinkProps {
  href?: string;
  children?: React.ReactNode;
  className?: string;
}

export function SkipLink({ href = "#main-content", children, className }: SkipLinkProps) {
  const t = useTranslations();

  return (
    <a
      href={href}
      className={cn(
        "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50",
        "bg-primary-600 text-white px-4 py-2 rounded-md font-medium",
        "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
        "transition-all duration-200",
        className
      )}
    >
      {children || t("accessibility.skipToMainContent")}
    </a>
  );
}