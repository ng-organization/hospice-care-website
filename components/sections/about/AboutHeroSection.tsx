import { HeroSection } from "@/components/ui/HeroSection";
import { useLocale, useTranslations } from "next-intl";
import { getHeroImage } from "@/lib/utils";

export function AboutHeroSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <HeroSection
      variant="page"
      backgroundImage={getHeroImage(locale, "/about")}
      badgeText={t("aboutPage.hero.badge")}
      title={t("aboutPage.hero.title")}
      titleHighlight={t("aboutPage.hero.titleHighlight")}
      description={t("aboutPage.hero.description")}
      primaryButtonText={t("common.callButton")}
      secondaryButtonText={t("common.contactUs")}
    />
  );
}
