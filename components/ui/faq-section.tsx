import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

function FAQ() {
  const t = useTranslations();

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">{t("faqSection.badge")}</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h4 className="text-4xl md:text-6xl tracking-tighter max-w-xl text-left font-regular">
                  {t("faqSection.title")}
                </h4>
                <p className="text-xl max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                  {t("faqSection.description")}
                </p>
              </div>
              <div className="">
                <Button className="gap-4" variant="outline">
                  {t("faqSection.contactButton")}{" "}
                  <PhoneCall className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="payment">
              <AccordionTrigger className="text-lg font-semibold">
                {t("faqSection.items.payment.question")}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                {t("faqSection.items.payment.answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="eligibility">
              <AccordionTrigger className="text-lg font-semibold">
                {t("faqSection.items.eligibility.question")}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                {t("faqSection.items.eligibility.answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="location">
              <AccordionTrigger className="text-lg font-semibold">
                {t("faqSection.items.location.question")}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                {t("faqSection.items.location.answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="services">
              <AccordionTrigger className="text-lg font-semibold">
                {t("faqSection.items.services.question")}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                {t("faqSection.items.services.answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="family">
              <AccordionTrigger className="text-lg font-semibold">
                {t("faqSection.items.family.question")}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                {t("faqSection.items.family.answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="timing">
              <AccordionTrigger className="text-lg font-semibold">
                {t("faqSection.items.timing.question")}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                {t("faqSection.items.timing.answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="team">
              <AccordionTrigger className="text-lg font-semibold">
                {t("faqSection.items.team.question")}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                {t("faqSection.items.team.answer")}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="quality">
              <AccordionTrigger className="text-lg font-semibold">
                {t("faqSection.items.quality.question")}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed">
                {t("faqSection.items.quality.answer")}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export { FAQ };
