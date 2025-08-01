import { useLocale, useTranslations } from "next-intl";
import { HeroSection } from "@/components/ui/HeroSection";
import { getHeroImage } from "@/lib/utils";

export function ServicesHeroSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <HeroSection
      variant="page"
      backgroundImage={getHeroImage(locale, "/services")}
      badgeText={t("servicesPage.hero.badge")}
      title={t("servicesPage.hero.title")}
      titleHighlight={t("servicesPage.hero.titleHighlight")}
      description={t("servicesPage.hero.description")}
      primaryButtonText={t("servicesPage.hero.ctaPrimary")}
      secondaryButtonText={t("servicesPage.hero.ctaSecondary")}
    />
  );
}
