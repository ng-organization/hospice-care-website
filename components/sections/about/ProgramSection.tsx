import { Badge } from "@/components/ui/badge";
import { LevelCard } from "@/components/ui/level-card";
import { CalendarDays, Home, Shield, Stethoscope } from "lucide-react";
import { useTranslations } from "next-intl";

export function ProgramSection() {
  const t = useTranslations();

  const programItems = [
    {
      icon: <Home className="w-8 h-8" />,
      title: t.raw("aboutPage.program.items")[0].title,
      description: t.raw("aboutPage.program.items")[0].description,
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t.raw("aboutPage.program.items")[1].title,
      description: t.raw("aboutPage.program.items")[1].description,
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: t.raw("aboutPage.program.items")[2].title,
      description: t.raw("aboutPage.program.items")[2].description,
    },
    {
      icon: <CalendarDays className="w-8 h-8" />,
      title: t.raw("aboutPage.program.items")[3].title,
      description: t.raw("aboutPage.program.items")[3].description,
    },
  ];

  return (
    <section className="min-h-[80vh] w-full bg-gradient-to-br from-secondary-50/30 to-white observe-section">
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="text-center mb-16">
          <Badge className="bg-secondary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t("aboutPage.program.badge")}
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
            {t("aboutPage.program.title")}
            <br />
            <span className="font-semibold text-secondary-600">
              {t("aboutPage.program.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {t("aboutPage.program.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programItems.map((item, index) => (
            <LevelCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
