import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Heart, Home, Hospital, Users } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { getContentImage } from "@/lib/utils";

export function LocationsSection() {
  const t = useTranslations();
  const locale = useLocale();

  const locationIcons = [
    <Home key="home" className="w-6 h-6" />,
    <Hospital key="hospital" className="w-6 h-6" />,
    <Building key="building" className="w-6 h-6" />,
    <Users key="users" className="w-6 h-6" />,
    <Heart key="heart" className="w-6 h-6" />,
  ];

  return (
    <section className="min-h-[80vh] w-full bg-white observe-section">
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-primary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {t("aboutPage.locations.badge")}
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                {t("aboutPage.locations.title")}
                <br />
                <span className="font-semibold text-primary-600">
                  {t("aboutPage.locations.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {t("aboutPage.locations.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {t
                .raw("aboutPage.locations.items")
                .map((location: string, index: number) => (
                  <Card
                    key={index}
                    className="border-0 bg-gradient-to-r from-primary-50/50 to-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="text-primary-600">
                            {locationIcons[index]}
                          </div>
                        </div>
                        <p className="text-slate-700 font-medium text-lg">
                          {location}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={getContentImage(locale, "location-visit")}
                alt="Warm family visit showing home care"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-200 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
