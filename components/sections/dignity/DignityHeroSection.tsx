import { useLocale, useTranslations } from "next-intl";
import { HeroSection } from "@/components/ui/HeroSection";

export function DignityHeroSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <HeroSection
      variant="page"
      backgroundImage="/image_asset/20250724_1347_Realistic Quilt Sharing_remix_01k0z2x346e8m8tztchby92rbv.webp"
      badgeText={t("dignityPage.hero.badge")}
      title={t("dignityPage.hero.title")}
      titleHighlight={t("dignityPage.hero.titleHighlight")}
      description={t("dignityPage.hero.description")}
      primaryButtonText={t("common.callButton")}
      secondaryButtonText={t("common.contactUs")}
    />
  );
} 