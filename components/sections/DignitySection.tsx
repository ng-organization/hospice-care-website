"use client";

import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Stethoscope } from "lucide-react";
import { getContentImage } from "@/lib/utils";

export function DignitySection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section
      id="dignity"
      className="min-h-[80vh] w-full bg-gradient-to-br from-secondary-50/30 to-white observe-section"
    >
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            <div>
              <Badge className="bg-secondary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {t("dignity.badge")}
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                {t("dignity.title")}
                <br />
                <span className="font-semibold text-secondary-600">
                  {t("dignity.titleHighlight")}
                </span>
              </h2>
            </div>

            <p className="text-xl text-slate-600 leading-relaxed">
              {t("dignity.description")}
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-secondary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    {t("dignity.benefits.title")}
                  </h4>
                  <p className="text-slate-600">
                    {t("dignity.benefits.description")}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-secondary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    {t("dignity.decision.title")}
                  </h4>
                  <p className="text-slate-600">
                    {t("dignity.decision.description")}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-5 h-5 text-secondary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">
                    {t("dignity.eligibility.title")}
                  </h4>
                  <p className="text-slate-600">
                    {t("dignity.eligibility.description")}
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
              {t("dignity.button")}
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-secondary-100 to-primary-100 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={getContentImage(locale, "dignity-care")}
                alt="Compassionate hospice care providing dignity and comfort"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary-200/50 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary-200/50 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}