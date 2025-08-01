import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { getContentImage } from "@/lib/utils";

export function PromiseSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="min-h-[70vh] w-full bg-white observe-section">
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={getContentImage(locale, "promise-caregiver")}
                alt="Caregiver providing compassionate support"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-200 rounded-full opacity-20"></div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <Badge className="bg-secondary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {t("aboutPage.promise.badge")}
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                {t("aboutPage.promise.title")}
                <br />
                <span className="font-semibold text-secondary-600">
                  {t("aboutPage.promise.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {t("aboutPage.promise.description")}
              </p>
            </div>

            <div className="space-y-4">
              {t
                .raw("aboutPage.promise.items")
                .map((item: string, index: number) => (
                  <Card
                    key={index}
                    className="border-0 bg-gradient-to-r from-secondary-50/50 to-white shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-5 h-5 text-secondary-600" />
                        </div>
                        <p className="text-slate-700 font-medium text-lg">
                          {item}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
