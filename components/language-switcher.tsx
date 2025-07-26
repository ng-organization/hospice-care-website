"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

export function LanguageSwitcher({
  isScrolled = false,
}: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = () => {
    const newLocale = locale === "en" ? "zh" : "en";
    const pathWithoutLocale = pathname.replace(/^\/(en|zh)/, "");
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={switchLanguage}
      className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm ${
        isScrolled
          ? "bg-accent-100 hover:bg-accent-200 text-accent-800 border border-accent-300"
          : "bg-white/20 hover:bg-white/30 text-white border border-white/30"
      }`}
    >
      <Globe className="w-4 h-4 mr-2" />
      {locale === "en" ? "中文" : "English"}
    </Button>
  );
}
