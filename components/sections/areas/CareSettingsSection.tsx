import { Badge } from "@/components/ui/badge";
import { ServiceCard } from "@/components/ui/service-card";
import { Building, Heart, Home, Hospital, Shield, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export function CareSettingsSection() {
  const t = useTranslations();
  const settings = t.raw("areasPage.settings.items");

  const getIcon = (iconName: string) => {
    const iconMap = {
      Home: <Home className="w-8 h-8" />,
      Building: <Building className="w-8 h-8" />,
      Users: <Users className="w-8 h-8" />,
      Heart: <Heart className="w-8 h-8" />,
      Hospital: <Hospital className="w-8 h-8" />,
      Shield: <Shield className="w-8 h-8" />,
    };
    return (
      iconMap[iconName as keyof typeof iconMap] || <Home className="w-8 h-8" />
    );
  };

  return (
    <section className="min-h-screen w-full bg-white observe-section">
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="text-center mb-16">
          <Badge className="bg-primary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t("areasPage.settings.badge")}
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
            {t("areasPage.settings.title")}
            <br />
            <span className="font-semibold text-primary-600">
              {t("areasPage.settings.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {t("areasPage.settings.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {settings.map((setting: any, index: number) => (
            <ServiceCard
              key={index}
              icon={getIcon(setting.icon)}
              title={setting.name}
              description={setting.description}
              className="h-full"
            />
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl p-12 max-w-5xl mx-auto border border-accent-100">
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              {t("areasPage.settings.coordinationTitle")}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {t("areasPage.settings.coordinationDescription")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm border border-primary-200">
                <span className="text-sm font-medium text-primary-700">
                  {t("areasPage.settings.features.onCallSupport")}
                </span>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm border border-primary-200">
                <span className="text-sm font-medium text-primary-700">
                  {t("areasPage.settings.features.carePlanCoordination")}
                </span>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm border border-primary-200">
                <span className="text-sm font-medium text-primary-700">
                  {t("areasPage.settings.features.familyCommunication")}
                </span>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm border border-primary-200">
                <span className="text-sm font-medium text-primary-700">
                  {t("areasPage.settings.features.medicationManagement")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
