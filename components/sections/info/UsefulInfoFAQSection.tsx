import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Users, Heart } from "lucide-react";

export function UsefulInfoFAQSection() {
  const t = useTranslations();

  return (
    <section className="min-h-[80vh] w-full bg-white observe-section">
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-primary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              {t("usefulInfoPage.faq.badge")}
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
              {t("usefulInfoPage.faq.title")}
              <br />
              <span className="font-semibold text-primary-600">
                {t("usefulInfoPage.faq.titleHighlight")}
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t("usefulInfoPage.faq.description")}
            </p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="payment" className="border border-slate-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <HelpCircle className="w-4 h-4 text-primary-600" />
                      </div>
                      <span className="font-semibold text-slate-800">
                        {t("usefulInfoPage.faq.items.payment.question")}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6 pl-11">
                    <p className="leading-relaxed">
                      {t("usefulInfoPage.faq.items.payment.answer")}
                    </p>
                    <div className="mt-4 p-4 bg-primary-50 rounded-lg">
                      <p className="text-sm font-medium text-primary-800">
                        {t("usefulInfoPage.faq.items.payment.note")}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="eligibility" className="border border-slate-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-secondary-600" />
                      </div>
                      <span className="font-semibold text-slate-800">
                        {t("usefulInfoPage.faq.items.eligibility.question")}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6 pl-11">
                    <p className="leading-relaxed mb-4">
                      {t("usefulInfoPage.faq.items.eligibility.answer")}
                    </p>
                    <div className="space-y-2">
                      <p className="font-medium text-slate-700">
                        {t("usefulInfoPage.faq.items.eligibility.conditionsTitle")}:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>{t("usefulInfoPage.faq.items.eligibility.conditions.cancer")}</li>
                        <li>{t("usefulInfoPage.faq.items.eligibility.conditions.heart")}</li>
                        <li>{t("usefulInfoPage.faq.items.eligibility.conditions.dementia")}</li>
                        <li>{t("usefulInfoPage.faq.items.eligibility.conditions.respiratory")}</li>
                        <li>{t("usefulInfoPage.faq.items.eligibility.conditions.stroke")}</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="location" className="border border-slate-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className="w-4 h-4 text-accent-600" />
                      </div>
                      <span className="font-semibold text-slate-800">
                        {t("usefulInfoPage.faq.items.location.question")}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6 pl-11">
                    <p className="leading-relaxed">
                      {t("usefulInfoPage.faq.items.location.answer")}
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="services" className="border border-slate-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className="w-4 h-4 text-primary-600" />
                      </div>
                      <span className="font-semibold text-slate-800">
                        {t("usefulInfoPage.faq.items.services.question")}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6 pl-11">
                    <p className="leading-relaxed mb-4">
                      {t("usefulInfoPage.faq.items.services.answer")}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <ul className="space-y-1">
                        <li>• {t("usefulInfoPage.faq.items.services.list.pain")}</li>
                        <li>• {t("usefulInfoPage.faq.items.services.list.nursing")}</li>
                        <li>• {t("usefulInfoPage.faq.items.services.list.aids")}</li>
                        <li>• {t("usefulInfoPage.faq.items.services.list.social")}</li>
                        <li>• {t("usefulInfoPage.faq.items.services.list.bereavement")}</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• {t("usefulInfoPage.faq.items.services.list.volunteer")}</li>
                        <li>• {t("usefulInfoPage.faq.items.services.list.medication")}</li>
                        <li>• {t("usefulInfoPage.faq.items.services.list.equipment")}</li>
                        <li>• {t("usefulInfoPage.faq.items.services.list.therapy")}</li>
                        <li>• {t("usefulInfoPage.faq.items.services.list.dietary")}</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="family" className="border border-slate-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-secondary-600" />
                      </div>
                      <span className="font-semibold text-slate-800">
                        {t("usefulInfoPage.faq.items.family.question")}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6 pl-11">
                    <p className="leading-relaxed">
                      {t("usefulInfoPage.faq.items.family.answer")}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 