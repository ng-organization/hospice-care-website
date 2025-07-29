import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Shield } from "lucide-react";

export function DignityPhilosophySection() {
  const t = useTranslations();

  return (
    <section className="min-h-[80vh] w-full bg-white observe-section">
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-accent-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  {t("dignityPage.philosophy.badge")}
                </Badge>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                  {t("dignityPage.philosophy.title")}
                  <br />
                  <span className="font-semibold text-accent-600">
                    {t("dignityPage.philosophy.titleHighlight")}
                  </span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-6">
                  {t("dignityPage.philosophy.description")}
                </p>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {t("dignityPage.philosophy.additional")}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">
                      {t("dignityPage.philosophy.principles.comfort.title")}
                    </h4>
                    <p className="text-slate-600">
                      {t("dignityPage.philosophy.principles.comfort.description")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">
                      {t("dignityPage.philosophy.principles.dignity.title")}
                    </h4>
                    <p className="text-slate-600">
                      {t("dignityPage.philosophy.principles.dignity.description")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">
                      {t("dignityPage.philosophy.principles.peace.title")}
                    </h4>
                    <p className="text-slate-600">
                      {t("dignityPage.philosophy.principles.peace.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/image_asset/20250724_1445_Realistic Healthcare Portrait_remix_01k0z67dw8f99s2362jmy2mf9p.webp"
                  alt="Compassionate healthcare professional showing caring approach"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <blockquote className="text-center">
                    <p className="text-lg font-light italic mb-4 leading-relaxed">
                      &ldquo;{t("dignityPage.philosophy.quote")}&rdquo;
                    </p>
                    <footer className="text-white/80 font-medium">
                      {t("dignityPage.philosophy.quoteAuthor")}
                    </footer>
                  </blockquote>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-200 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 