import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

export function MissionSection() {
  const t = useTranslations();

  return (
    <section className="min-h-[80vh] w-full bg-gradient-to-br from-primary-50/30 to-white observe-section">
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-primary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {t("aboutPage.mission.badge")}
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                {t("aboutPage.mission.title")}
                <br />
                <span className="font-semibold text-primary-600">
                  {t("aboutPage.mission.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                {t("aboutPage.mission.description")}
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/image_asset/20250725_1123_Realistic Doctor Consultation_remix_01k11d2jzke1w8mxrazmkk5kny.webp"
                alt="Doctor consultation showing compassionate care"
                className="w-full h-[500px] object-cover"
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
