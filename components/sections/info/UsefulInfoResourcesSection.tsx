import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  Download,
  FileText,
  Users,
  Eye,
  Facebook,
  ExternalLink,
  Phone,
  ArrowRight,
} from "lucide-react";

export function UsefulInfoResourcesSection() {
  const t = useTranslations();

  return (
    <>
      {/* Educational Resources */}
      <section className="min-h-[80vh] w-full bg-gradient-to-br from-secondary-50/30 to-white observe-section">
        <div className="w-full px-4 md:px-8 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-secondary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {t("usefulInfoPage.resources.badge")}
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                {t("usefulInfoPage.resources.title")}{" "}
                <span className="font-semibold text-secondary-600">
                  {t("usefulInfoPage.resources.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {t("usefulInfoPage.resources.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-5xl mx-auto">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    {t("usefulInfoPage.resources.items.guide.title")}
                  </h3>
                  <p className="text-slate-600 text-base mb-6 leading-relaxed">
                    {t("usefulInfoPage.resources.items.guide.description")}
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      {t("usefulInfoPage.resources.items.guide.button")}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-secondary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">
                    {t("usefulInfoPage.resources.items.family.title")}
                  </h3>
                  <p className="text-slate-600 text-base mb-6 leading-relaxed">
                    {t("usefulInfoPage.resources.items.family.description")}
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="w-4 h-4 mr-2" />
                      {t("usefulInfoPage.resources.items.family.button")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Community */}
      <section className="min-h-[80vh] w-full bg-white observe-section">
        <div className="w-full px-4 md:px-8 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-accent-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {t("usefulInfoPage.community.badge")}
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                {t("usefulInfoPage.community.title")}
                <br />
                <span className="font-semibold text-accent-600">
                  {t("usefulInfoPage.community.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {t("usefulInfoPage.community.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Facebook className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-3">
                    {t("usefulInfoPage.community.facebook.title")}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 flex-grow">
                    {t("usefulInfoPage.community.facebook.description")}
                  </p>
                  <Button className="bg-primary-600 hover:bg-primary-700 text-white mt-auto">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("usefulInfoPage.community.facebook.button")}
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-3">
                    {t("usefulInfoPage.community.chinese.title")}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 flex-grow">
                    {t("usefulInfoPage.community.chinese.description")}
                  </p>
                  <Button className="bg-primary-600 hover:bg-primary-700 text-white mt-auto">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("usefulInfoPage.community.chinese.button")}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
