import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cta4 } from "@/components/ui/cta";
import {
  CheckCircle,
  Users,
  Heart,
  Stethoscope,
  Clock,
  Shield,
} from "lucide-react";

export function DignityDecisionSection() {
  const t = useTranslations();

  return (
    <>
      {/* Decision Making Process */}
      <section className="min-h-[80vh] w-full bg-gradient-to-br from-secondary-50/30 to-white observe-section">
        <div className="w-full px-4 md:px-8 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-secondary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {t("dignityPage.decision.badge")}
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                {t("dignityPage.decision.title")}
                <br />
                <span className="font-semibold text-secondary-600">
                  {t("dignityPage.decision.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {t("dignityPage.decision.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-4">
                    {t("dignityPage.decision.steps.collaboration.title")}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t("dignityPage.decision.steps.collaboration.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-secondary-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-4">
                    {t("dignityPage.decision.steps.wishes.title")}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t("dignityPage.decision.steps.wishes.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-accent-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-4">
                    {t("dignityPage.decision.steps.support.title")}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t("dignityPage.decision.steps.support.description")}
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 bg-white shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center">
                  {t("dignityPage.decision.authority.title")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-slate-800 mb-1">
                          {t("dignityPage.decision.authority.patient.title")}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {t(
                            "dignityPage.decision.authority.patient.description"
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-slate-800 mb-1">
                          {t("dignityPage.decision.authority.family.title")}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {t(
                            "dignityPage.decision.authority.family.description"
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-slate-800 mb-1">
                          {t("dignityPage.decision.authority.hierarchy.title")}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {t(
                            "dignityPage.decision.authority.hierarchy.description"
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-slate-800 mb-1">
                          {t("dignityPage.decision.authority.guidance.title")}
                        </h4>
                        <p className="text-sm text-slate-600">
                          {t(
                            "dignityPage.decision.authority.guidance.description"
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility & Assessment */}
      <section className="min-h-[80vh] w-full bg-white observe-section">
        <div className="w-full px-4 md:px-8 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-primary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {t("dignityPage.eligibility.badge")}
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                {t("dignityPage.eligibility.title")}
                <br />
                <span className="font-semibold text-primary-600">
                  {t("dignityPage.eligibility.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {t("dignityPage.eligibility.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-8">
                  {t("dignityPage.eligibility.criteria.title")}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">
                        {t("dignityPage.eligibility.criteria.prognosis.title")}
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {t(
                          "dignityPage.eligibility.criteria.prognosis.description"
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Stethoscope className="w-4 h-4 text-secondary-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">
                        {t("dignityPage.eligibility.criteria.decline.title")}
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {t(
                          "dignityPage.eligibility.criteria.decline.description"
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-4 h-4 text-accent-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">
                        {t("dignityPage.eligibility.criteria.comfort.title")}
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {t(
                          "dignityPage.eligibility.criteria.comfort.description"
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-8">
                  {t("dignityPage.eligibility.assessment.title")}
                </h3>
                <Card className="border-0 bg-gradient-to-br from-primary-50/50 to-white shadow-xl">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <span className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                          1
                        </span>
                        <span className="text-slate-700">
                          {t(
                            "dignityPage.eligibility.assessment.steps.consultation"
                          )}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                          2
                        </span>
                        <span className="text-slate-700">
                          {t(
                            "dignityPage.eligibility.assessment.steps.medical"
                          )}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                          3
                        </span>
                        <span className="text-slate-700">
                          {t("dignityPage.eligibility.assessment.steps.team")}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                          4
                        </span>
                        <span className="text-slate-700">
                          {t("dignityPage.eligibility.assessment.steps.plan")}
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                      <p className="text-sm text-primary-800 font-medium">
                        {t("dignityPage.eligibility.assessment.note")}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & CTA */}
      <section className="min-h-[80vh] w-full bg-gradient-to-br from-accent-50/30 to-white observe-section">
        <div className="w-full px-4 md:px-8 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-accent-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {t("dignityPage.benefits.badge")}
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                {t("dignityPage.benefits.title")}
                <br />
                <span className="font-semibold text-accent-600">
                  {t("dignityPage.benefits.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {t("dignityPage.benefits.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-3">
                    {t("dignityPage.benefits.items.emotional.title")}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {t("dignityPage.benefits.items.emotional.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-3">
                    {t("dignityPage.benefits.items.family.title")}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {t("dignityPage.benefits.items.family.description")}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-3">
                    {t("dignityPage.benefits.items.practical.title")}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {t("dignityPage.benefits.items.practical.description")}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Cta4
                title={t("dignityPage.cta.title")}
                description={t("dignityPage.cta.description")}
                buttonText={t("dignityPage.cta.callButton")}
                buttonUrl="tel:909-321-2255"
                items={[
                  t("dignityPage.benefits.items.comfort.title"),
                  t("dignityPage.benefits.items.control.title"),
                  t("dignityPage.benefits.items.family.title"),
                  t("dignityPage.benefits.items.legal.title"),
                  t("dignityPage.benefits.items.practical.title"),
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
