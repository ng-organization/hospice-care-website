"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Heart, Users, Clock } from "lucide-react";

export function InfoSection() {
  const t = useTranslations();

  return (
    <section
      id="info"
      className="min-h-[80vh] w-full bg-white observe-section"
    >
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="text-center mb-16">
          <Badge className="bg-primary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t("info.badge")}
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
            {t("info.title")}
            <br />
            <span className="font-semibold text-primary-600">
              {t("info.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {t("info.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* FAQ Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              {t("info.faq.title")}
            </h3>
            <div className="space-y-6">
              <Card className="border-0 bg-gradient-to-br from-primary-50/50 to-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h4 className="font-semibold text-slate-800 mb-3 text-lg">
                    {t("info.faq.payment.question")}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {t("info.faq.payment.answer")}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-gradient-to-br from-primary-50/50 to-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h4 className="font-semibold text-slate-800 mb-3 text-lg">
                    {t("info.faq.eligibility.question")}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {t("info.faq.eligibility.answer")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-primary-50/50 to-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h4 className="font-semibold text-slate-800 mb-3 text-lg">
                    {t("info.faq.location.question")}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {t("info.faq.location.answer")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Conditions Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              {t("info.conditions.title")}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-primary-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    {t("info.conditions.cancer")}
                  </h4>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-primary-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    {t("info.conditions.heart")}
                  </h4>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-primary-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    {t("info.conditions.dementia")}
                  </h4>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-primary-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    {t("info.conditions.respiratory")}
                  </h4>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-primary-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    {t("info.conditions.stroke")}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}