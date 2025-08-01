import { useLocale, useTranslations } from "next-intl";
import { HeroSection } from "@/components/ui/HeroSection";
import { getHeroImage } from "@/lib/utils";

export function DignityHeroSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <HeroSection
      variant="page"
      backgroundImage={getHeroImage(locale, "/death-with-dignity")}
      badgeText={t("dignityPage.hero.badge")}
      title={t("dignityPage.hero.title")}
      titleHighlight={t("dignityPage.hero.titleHighlight")}
      description={t("dignityPage.hero.description")}
      primaryButtonText={t("common.callButton")}
      secondaryButtonText={t("common.contactUs")}
    />
  );
} 