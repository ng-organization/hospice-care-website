import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export function CountiesSection() {
  const t = useTranslations();
  const counties = t.raw("areasPage.counties.items");

  return (
    <section className="min-h-screen w-full bg-white observe-section">
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="text-center mb-16">
          <Badge className="bg-primary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t("areasPage.counties.badge")}
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
            {t("areasPage.counties.title")}
            <br />
            <span className="font-semibold text-primary-600">
              {t("areasPage.counties.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {t("areasPage.counties.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {counties.map((county: any, index: number) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-primary-50/30 hover:scale-105 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-all duration-300 group-hover:scale-110">
                    <MapPin className="w-7 h-7 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">
                      {county.name}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {county.description}
                    </p>
                  </div>
                </div>

                <div className="bg-secondary-50/50 rounded-lg p-4 border-l-4 border-secondary-500">
                  <p className="text-sm font-medium text-secondary-700 mb-2">
                    {t("areasPage.counties.serviceAreasLabel")}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {county.cities}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coverage Map Placeholder */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-12 max-w-4xl mx-auto border border-primary-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              {t("areasPage.counties.coverageTitle")}
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              {t("areasPage.counties.coverageDescription")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {counties.map((county: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-lg px-4 py-2 shadow-sm border border-primary-200"
                >
                  <span className="text-sm font-medium text-primary-700">
                    {county.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
