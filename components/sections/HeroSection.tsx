"use client";

import { useLocale, useTranslations } from "next-intl";
import { HeroSection as UnifiedHeroSection } from "@/components/ui/HeroSection";
import { getHeroImage } from "@/lib/utils";

export function HeroSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <UnifiedHeroSection
      variant="home"
      backgroundImage={getHeroImage(locale, "/")}
      badgeText={t("hero.badge")}
      title={t("hero.title")}
      titleHighlight={t("hero.titleHighlight")}
      description={t("hero.description")}
      primaryButtonText={t("hero.ctaPrimary")}
      secondaryButtonText={t("hero.ctaSecondary")}
      showCertifications={true}
    />
  );
}