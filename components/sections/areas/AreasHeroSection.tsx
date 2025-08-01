import { useLocale, useTranslations } from "next-intl";
import { HeroSection } from "@/components/ui/HeroSection";
import { getHeroImage } from "@/lib/utils";

export function AreasHeroSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <HeroSection
      variant="page"
      backgroundImage={getHeroImage(locale, "/areas")}
      badgeText={t("areasPage.hero.badge")}
      title={t("areasPage.hero.title")}
      titleHighlight={t("areasPage.hero.titleHighlight")}
      description={t("areasPage.hero.description")}
      primaryButtonText={t("common.callButton")}
      secondaryButtonText={t("common.checkAvailability")}
    />
  );
}
