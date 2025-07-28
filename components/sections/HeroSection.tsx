"use client";

import { useTranslations } from "next-intl";
import { HeroSection as UnifiedHeroSection } from "@/components/ui/HeroSection";

export function HeroSection() {
  const t = useTranslations();

  return (
    <UnifiedHeroSection
      variant="home"
      backgroundImage="/image_asset/20250725_1120_Realistic Medical Encounter_remix_01k11cx9w6f8wvtm0npyje67ct.webp"
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