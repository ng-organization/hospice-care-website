"use client";

import { useLocale, useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";

export function ContactHeroSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/image_asset/20250724_1131_温馨家庭探访_remix_01k0yv594bfy1vs06ygah5s0qn.webp"
          alt="Compassionate hospice care visit showing warmth and dignity"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-6 py-3 rounded-full text-lg font-medium mb-8">
            {t("contactPage.hero.badge")}
          </Badge>

          {/* Main Title - No buttons, just text */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 leading-tight">
            {t("contactPage.hero.title")}
            <br />
            <span className="font-semibold bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent">
              {t("contactPage.hero.titleHighlight")}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            {t("contactPage.hero.description")}
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white from-0% via-white/30 via-20% to-transparent to-100% z-10"></div>
    </section>
  );
}
