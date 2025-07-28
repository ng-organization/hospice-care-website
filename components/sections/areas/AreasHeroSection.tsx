import { useLocale, useTranslations } from "next-intl";
import { HeroSection } from "@/components/ui/HeroSection";

export function AreasHeroSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <HeroSection
      variant="page"
      backgroundImage="/image_asset/20250725_1104_Realistic Doctor-Patient Interaction_remix_01k11bzjz9ekhrspfr0cgxdkb2.webp"
      badgeText={t("areasPage.hero.badge")}
      title={t("areasPage.hero.title")}
      titleHighlight={t("areasPage.hero.titleHighlight")}
      description={t("areasPage.hero.description")}
      primaryButtonText={t("common.callButton")}
      secondaryButtonText={t("common.checkAvailability")}
    />
  );
}
