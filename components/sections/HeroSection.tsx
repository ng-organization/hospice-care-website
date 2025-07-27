"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, CheckCircle, Award, Clock } from "lucide-react";

export function HeroSection() {
  const t = useTranslations();

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/image_asset/20250725_1120_Realistic Medical Encounter_remix_01k11cx9w6f8wvtm0npyje67ct.webp')",
      }}
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-800/95 to-accent-900/90"></div>

      {/* Additional dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-16 text-center">
        <div className="space-y-8 animate-fade-in">
          <Badge className="bg-white/20 text-white border border-white/30 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            {t("hero.badge")}
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white leading-tight">
            {t("hero.title")}
            <br />
            <span className="font-semibold">
              {t("hero.titleHighlight")}
            </span>
          </h1>

          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              onClick={() => window.open("tel:909-321-2255", "_self")}
              className="bg-white text-slate-800 hover:bg-white/90 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t("hero.ctaPrimary")}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg transition-all duration-300 bg-transparent backdrop-blur-sm"
            >
              {t("hero.ctaSecondary")}
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/80 pt-8">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-white" />
              <span>{t("hero.certifications.medicare")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-white" />
              <span>{t("hero.certifications.licensed")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-white" />
              <span>{t("hero.certifications.availability")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float-delayed"></div>
    </section>
  );
}