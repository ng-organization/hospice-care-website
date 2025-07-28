import { useLocale, useTranslations } from "next-intl";
import { HeroSection } from "@/components/ui/HeroSection";

export function UsefulInfoHeroSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <HeroSection
      variant="page"
      backgroundImage="/image_asset/20250725_1104_Realistic Doctor-Patient Interaction_remix_01k11bzjz9ekhrspfr0cgxdkb2.webp"
      badgeText={t("usefulInfoPage.hero.badge")}
      title={t("usefulInfoPage.hero.title")}
      titleHighlight={t("usefulInfoPage.hero.titleHighlight")}
      description={t("usefulInfoPage.hero.description")}
      primaryButtonText={t("common.callButton")}
      secondaryButtonText={t("common.contactUs")}
    />
  );
} 