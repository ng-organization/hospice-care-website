import { useLocale, useTranslations } from "next-intl";
import { HeroSection } from "@/components/ui/HeroSection";

export function ContactHeroSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <HeroSection
      variant="page"
      backgroundImage="/image_asset/20250724_1131_温馨家庭探访_remix_01k0yv594bfy1vs06ygah5s0qn.webp"
      badgeText={t("contactPage.hero.badge")}
      title={t("contactPage.hero.title")}
      titleHighlight={t("contactPage.hero.titleHighlight")}
      description={t("contactPage.hero.description")}
      primaryButtonText={t("common.callButton")}
      secondaryButtonText={t("common.contactUs")}
    />
  );
} 