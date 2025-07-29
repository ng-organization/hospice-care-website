"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Home, Shield, Users, Stethoscope, Clock } from "lucide-react";

export function ServiceAreasSection() {
  const t = useTranslations();

  return (
    <section
      id="areas"
      className="min-h-[80vh] w-full bg-white observe-section"
    >
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="text-center mb-16">
          <Badge className="bg-primary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t("areas.badge")}
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
            {t("areas.title")}
            <br />
            <span className="font-semibold text-primary-600">
              {t("areas.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {t("areas.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-primary-50/30 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-all duration-300">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {t("areas.counties.sanBernardino")}
              </h3>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-primary-50/30 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-all duration-300">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {t("areas.counties.riverside")}
              </h3>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-primary-50/30 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-all duration-300">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {t("areas.counties.losAngeles")}
              </h3>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-primary-50/30 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-all duration-300">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {t("areas.counties.orange")}
              </h3>
            </CardContent>
          </Card>
        </div>

        {/* Removed the Main Office Location card */}
      </div>
    </section>
  );
}