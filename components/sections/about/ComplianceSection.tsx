import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Scale } from "lucide-react";
import { useTranslations } from "next-intl";

export function ComplianceSection() {
  const t = useTranslations();

  return (
    <section className="min-h-[60vh] w-full bg-gradient-to-br from-accent-50/30 to-white observe-section">
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-accent-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              {t("aboutPage.compliance.badge")}
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
              {t("aboutPage.compliance.title")}
              <br />
              <span className="font-semibold text-accent-600">
                {t("aboutPage.compliance.titleHighlight")}
              </span>
            </h2>
          </div>

          <Card className="border-0 bg-white shadow-xl">
            <CardContent className="p-12">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center">
                    <Scale className="w-10 h-10 text-accent-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {t("aboutPage.compliance.description")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="bg-white rounded-lg shadow-md px-6 py-4 text-center">
              <p className="text-sm font-semibold text-accent-800">
                Medicare Certified
              </p>
              <p className="text-xs text-slate-600">Federal Certification</p>
            </div>
            <div className="bg-white rounded-lg shadow-md px-6 py-4 text-center">
              <p className="text-sm font-semibold text-accent-800">
                CMS Provider
              </p>
              <p className="text-xs text-slate-600">
                Centers for Medicare & Medicaid
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md px-6 py-4 text-center">
              <p className="text-sm font-semibold text-accent-800">
                Equal Opportunity
              </p>
              <p className="text-xs text-slate-600">Non-Discriminatory Care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
