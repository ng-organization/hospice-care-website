import { Badge } from "@/components/ui/badge";
import { LevelCard } from "@/components/ui/level-card";
import { getLevelsOfCare } from "@/lib/data/services-data";
import { useTranslations } from "next-intl";

export function LevelsOfCareSection() {
  const t = useTranslations();
  const levelsOfCare = getLevelsOfCare(t);

  return (
    <section className="min-h-[80vh] w-full bg-gradient-to-br from-secondary-50/30 to-white observe-section">
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="text-center mb-16">
          <Badge className="bg-secondary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t("servicesPage.levelsOfCare.badge")}
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
            {t("servicesPage.levelsOfCare.title")}
            <br />
            <span className="font-semibold text-secondary-600">
              {t("servicesPage.levelsOfCare.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {t("servicesPage.levelsOfCare.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {levelsOfCare.map((level, index) => (
            <LevelCard
              key={index}
              icon={level.icon}
              title={level.title}
              description={level.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
