import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, AlertCircle, Phone } from "lucide-react";

export function ContactMapSection() {
  const t = useTranslations();

  return (
    <section className="min-h-[80vh] w-full bg-gray-50 observe-section">
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-accent-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              {t("contactPage.map.badge")}
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
              {t("contactPage.map.title")}
              <br />
              <span className="font-semibold text-accent-600">
                {t("contactPage.map.titleHighlight")}
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t("contactPage.map.description")}
            </p>
          </div>
          
          {/* Map Placeholder */}
          <Card className="border-0 shadow-2xl overflow-hidden mb-16">
            <div className="bg-gray-200 h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p className="text-lg font-medium mb-2">{t("contactPage.map.placeholder.title")}</p>
                <p className="text-sm">{t("contactPage.map.placeholder.description")}</p>
                <p className="text-sm mt-2 font-medium">600 N. Mountain Ave, Suite D105, Upland, CA 91786</p>
              </div>
            </div>
          </Card>

          {/* Emergency Contact */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 bg-red-50 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  {t("contactPage.emergency.title")}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {t("contactPage.emergency.description")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <div className="bg-red-100 p-4 rounded-lg">
                    <p className="text-sm text-slate-600 mb-2">{t("contactPage.emergency.medical")}</p>
                    <p className="text-2xl font-bold text-red-600">911</p>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-600 mb-2">{t("contactPage.emergency.hospice")}</p>
                    <p className="text-2xl font-bold text-primary-600">909-321-2255</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 