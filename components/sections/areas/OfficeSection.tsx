import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Car, MapPin, Navigation } from "lucide-react";
import { useTranslations } from "next-intl";

export function OfficeSection() {
  const t = useTranslations();

  return (
    <section className="min-h-[80vh] w-full bg-gradient-to-br from-secondary-50/30 to-white observe-section">
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-secondary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {t("areasPage.office.badge")}
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                {t("areasPage.office.title")}
                <br />
                <span className="font-semibold text-secondary-600">
                  {t("areasPage.office.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {t("areasPage.office.description")}
              </p>
            </div>

            <div className="space-y-6">
              {/* Address Card */}
              <Card className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-secondary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        {t("areasPage.office.addressTitle")}
                      </h3>
                      <p className="text-slate-600 whitespace-pre-line leading-relaxed">
                        {t("areasPage.office.address")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Directions Card */}
              <Card className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Navigation className="w-6 h-6 text-accent-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        {t("areasPage.office.accessTitle")}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {t("areasPage.office.directions")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Parking Card */}
              <Card className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Car className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        {t("areasPage.office.parkingTitle")}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {t("areasPage.office.parking")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map/Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/image_asset/20250725_1031_Realistic Makeover Moment_remix_01k11a4vbgeeyrp9v4n2fzpv2a.webp"
                alt="Professional office environment"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-200 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
