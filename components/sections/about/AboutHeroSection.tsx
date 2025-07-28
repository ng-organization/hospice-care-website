import { useLocale, useTranslations } from "next-intl";
import { HeroSection } from "@/components/ui/HeroSection";

export function AboutHeroSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <HeroSection
      variant="page"
      backgroundImage="/image_asset/20250724_1452_Realistic Caring Interaction_remix_01k0z6m6yke1av5srhgz6j4c9c.webp"
      badgeText={t("aboutPage.hero.badge")}
      title={t("aboutPage.hero.title")}
      titleHighlight={t("aboutPage.hero.titleHighlight")}
      description={t("aboutPage.hero.description")}
      primaryButtonText={t("common.callButton")}
      secondaryButtonText={t("common.contactUs")}
    />
  );
}
