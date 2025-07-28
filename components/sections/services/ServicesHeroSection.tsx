import { useLocale, useTranslations } from "next-intl";
import { HeroSection } from "@/components/ui/HeroSection";

export function ServicesHeroSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <HeroSection
      variant="page"
      backgroundImage="/image_asset/20250724_2153_Realistic Medical Interaction_remix_01k0zyrpt0ft3a4dr3fm0epvzj.webp"
      badgeText={t("servicesPage.hero.badge")}
      title={t("servicesPage.hero.title")}
      titleHighlight={t("servicesPage.hero.titleHighlight")}
      description={t("servicesPage.hero.description")}
      primaryButtonText={t("servicesPage.hero.ctaPrimary")}
      secondaryButtonText={t("servicesPage.hero.ctaSecondary")}
    />
  );
}
