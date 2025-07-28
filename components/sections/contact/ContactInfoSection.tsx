import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, User } from "lucide-react";

export function ContactInfoSection() {
  const t = useTranslations();

  return (
    <section className="min-h-[80vh] w-full bg-gradient-to-br from-secondary-50/30 to-white observe-section">
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-secondary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              {t("contactPage.info.badge")}
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
              {t("contactPage.info.title")}
              <br />
              <span className="font-semibold text-secondary-600">
                {t("contactPage.info.titleHighlight")}
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t("contactPage.info.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Cards */}
            <Card className="border-0 bg-gradient-to-br from-primary-50/50 to-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800 mb-2 text-lg">
                      {t("contactPage.info.phone.title")}
                    </h3>
                    <p className="text-2xl font-bold text-primary-600 mb-1">
                      {t("contactPage.info.phone.main")}
                    </p>
                    <p className="text-slate-600 text-sm mb-2">
                      {t("contactPage.info.phone.backup")}: 909-256-4705
                    </p>
                    <p className="text-slate-600 text-sm">
                      {t("contactPage.info.phone.note")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-secondary-50/50 to-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800 mb-2 text-lg">
                      {t("contactPage.info.email.title")}
                    </h3>
                    <p className="text-lg font-semibold text-secondary-600 mb-1">
                      {t("contactPage.info.email.address")}
                    </p>
                    <p className="text-slate-600 text-sm">
                      {t("contactPage.info.email.note")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-accent-50/50 to-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800 mb-2 text-lg">
                      {t("contactPage.info.office.title")}
                    </h3>
                    <p className="text-slate-700 mb-2">
                      600 N. Mountain Ave, Suite D105<br />
                      Upland, CA 91786
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-slate-600">
                      <Clock className="w-4 h-4" />
                      <span>{t("contactPage.info.office.hours")}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-primary-50/30 to-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800 mb-2 text-lg">
                      {t("contactPage.info.manager.title")}
                    </h3>
                    <p className="text-lg font-semibold text-primary-600 mb-2">
                      Haydee Agojo
                    </p>
                    <p className="text-slate-600 text-sm mb-3">
                      {t("contactPage.info.manager.description")}
                    </p>
                    <div className="text-sm text-slate-600">
                      <p>{t("contactPage.info.manager.methods")}: {t("contactPage.info.manager.methodsList")}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 