import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export function AboutHeroSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section
      className="relative h-[60vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/image_asset/20250724_1452_Realistic Caring Interaction_remix_01k0z6m6yke1av5srhgz6j4c9c.webp')",
      }}
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-800/95 to-accent-900/90"></div>

      {/* Additional dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-16 text-center">
        <div className="space-y-8 animate-fade-in">
          <Badge className="bg-white/20 text-white border border-white/30 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            {t("aboutPage.hero.badge")}
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
            {t("aboutPage.hero.title")}
            <br />
            <span className="font-semibold">
              {t("aboutPage.hero.titleHighlight")}
            </span>
          </h1>

          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t("aboutPage.hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              onClick={() => window.open("tel:909-321-2255", "_self")}
              className="bg-white text-slate-800 hover:bg-white/90 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call 909-321-2255
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = `/${locale}#contact`)}
              className="border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg transition-all duration-300 bg-transparent backdrop-blur-sm"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
