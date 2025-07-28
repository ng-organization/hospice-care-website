import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export function AreasCTASection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="min-h-[70vh] w-full bg-gradient-to-br from-primary-50/50 to-secondary-50/30 observe-section">
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-primary-100 text-accent-800 border border-primary-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
              {t("areasPage.contact.badge")}
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-accent-800 mb-6">
              {t("areasPage.contact.title")}
              <br />
              <span className="font-semibold text-primary-600">
                {t("areasPage.contact.titleHighlight")}
              </span>
            </h2>
            <p className="text-xl text-accent-700/90 max-w-4xl mx-auto leading-relaxed">
              {t("areasPage.contact.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="bg-white/80 border-primary-200 backdrop-blur-sm hover:bg-white/90 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-accent-800 mb-1">
                        {t("areasPage.contact.cards.callTitle")}
                      </h3>
                      <p className="text-accent-700/80 text-sm mb-2">
                        {t("areasPage.contact.cards.callDescription")}
                      </p>
                      <a
                        href="tel:909-321-2255"
                        className="text-xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        {t("areasPage.contact.phone")}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 border-primary-200 backdrop-blur-sm hover:bg-white/90 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-accent-800 mb-1">
                        {t("areasPage.contact.cards.emailTitle")}
                      </h3>
                      <p className="text-accent-700/80 text-sm mb-2">
                        {t("areasPage.contact.cards.emailDescription")}
                      </p>
                      <a
                        href="mailto:info@iecommunityhospice.com"
                        className="text-lg text-primary-600 hover:text-primary-700 transition-colors break-all"
                      >
                        {t("areasPage.contact.email")}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 border-primary-200 backdrop-blur-sm hover:bg-white/90 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-accent-800 mb-1">
                        {t("areasPage.contact.cards.availabilityTitle")}
                      </h3>
                      <p className="text-accent-700/80 text-sm">
                        {t("areasPage.contact.availability")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-accent-800 mb-4">
                  {t("areasPage.contact.cta.title")}
                </h3>
                <p className="text-accent-700/90 text-lg leading-relaxed mb-8">
                  {t("areasPage.contact.cta.description")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => window.open("tel:909-321-2255", "_self")}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t("areasPage.contact.cta.callButton")}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => (window.location.href = `/${locale}#contact`)}
                  className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 px-8 py-4 rounded-full text-lg transition-all duration-300 bg-transparent backdrop-blur-sm"
                >
                  {t("areasPage.contact.cta.contactButton")}
                </Button>
              </div>

              <div className="bg-primary-50/50 rounded-lg p-6 backdrop-blur-sm border border-primary-200">
                <p className="text-accent-700/90 text-sm text-center lg:text-left">
                  <strong>{t("common.note")}:</strong>{" "}
                  {t("areasPage.contact.cta.note")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
