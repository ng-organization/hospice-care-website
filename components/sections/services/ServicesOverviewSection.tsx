import { Badge } from "@/components/ui/badge";
import { ServiceCard } from "@/components/ui/service-card";
import { getCoreServices } from "@/lib/data/services-data";
import { useTranslations } from "next-intl";

export function ServicesOverviewSection() {
  const t = useTranslations();
  const coreServices = getCoreServices(t);

  return (
    <section className="min-h-screen w-full bg-white observe-section">
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="text-center mb-16">
          <Badge className="bg-primary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {t("servicesPage.overview.badge")}
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
            {t("servicesPage.overview.title")}
            <br />
            <span className="font-semibold text-primary-600">
              {t("servicesPage.overview.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {t("servicesPage.overview.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
