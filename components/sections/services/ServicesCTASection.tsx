import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export function ServicesCTASection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="min-h-[40vh] w-full bg-gradient-to-br from-accent-800 to-accent-900 text-white observe-section">
      <div className="w-full px-4 md:px-8 lg:px-16 py-24 text-center">
        <h2 className="text-4xl sm:text-5xl font-light mb-6">
          {t("servicesPage.cta.title")}
          <br />
          <span className="font-semibold">
            {t("servicesPage.cta.titleHighlight")}
          </span>
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
          {t("servicesPage.cta.description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            onClick={() => window.open("tel:909-321-2255", "_self")}
            className="bg-white text-slate-800 hover:bg-white/90 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            <Phone className="w-5 h-5 mr-2" />
            {t("servicesPage.cta.ctaPrimary")}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => (window.location.href = `/${locale}#contact`)}
            className="border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg transition-all duration-300 bg-transparent backdrop-blur-sm"
          >
            {t("servicesPage.cta.ctaSecondary")}
          </Button>
        </div>
      </div>
    </section>
  );
}
