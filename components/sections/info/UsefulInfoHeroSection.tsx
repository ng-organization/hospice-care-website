import { useLocale, useTranslations } from "next-intl";
import { HeroSection } from "@/components/ui/HeroSection";
import { getHeroImage } from "@/lib/utils";

export function UsefulInfoHeroSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <HeroSection
      variant="page"
      backgroundImage={getHeroImage(locale, "/useful-information")}
      badgeText={t("usefulInfoPage.hero.badge")}
      title={t("usefulInfoPage.hero.title")}
      titleHighlight={t("usefulInfoPage.hero.titleHighlight")}
      description={t("usefulInfoPage.hero.description")}
      primaryButtonText={t("common.callButton")}
      secondaryButtonText={t("common.contactUs")}
    />
  );
} 