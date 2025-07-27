"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  const t = useTranslations();

  return (
    <section
      id="about"
      className="min-h-screen w-full bg-gradient-to-br from-secondary-50/30 to-white observe-section"
    >
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div>
              <Badge className="bg-secondary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {t("about.badge")}
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                {t("about.title")}
                <br />
                <span className="font-semibold text-secondary-600">
                  {t("about.titleHighlight")}
                </span>
              </h2>
            </div>

            <p className="text-xl text-slate-600 leading-relaxed">
              {t("about.description")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  5
                </div>
                <div className="text-slate-600 font-medium">
                  {t("about.stats.families")}
                </div>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  24/7
                </div>
                <div className="text-slate-600 font-medium">
                  {t("about.stats.experience")}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
                {t("about.buttons.meetTeam")}
              </Button>
              <Button
                variant="outline"
                className="border-secondary-300 text-secondary-700 hover:bg-secondary-50 px-8 py-4 rounded-full text-lg bg-transparent transition-all duration-300"
              >
                {t("about.buttons.viewCredentials")}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/image_asset/20250725_1034_Realistic Care Interaction_remix_01k11a9631e8rv6vmsdb2qbgkh.webp"
                alt="Professional hospice care team providing compassionate care"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-200/50 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-secondary-200/50 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}