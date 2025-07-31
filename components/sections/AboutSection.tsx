"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import { Check } from "lucide-react";

export function AboutSection() {
  const t = useTranslations();

  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-24 items-center lg:grid-cols-2 max-w-7xl mx-auto">
          <AnimatedSection animation="slideInRight" delay={0.4}>
            <div className="relative order-1 lg:order-2">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/image_asset/20250725_1034_Realistic Care Interaction_remix_01k11a9631e8rv6vmsdb2qbgkh.webp"
                  alt="Professional hospice care team providing compassionate care"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-200/50 rounded-full blur-lg"></div>
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-secondary-200/50 rounded-full blur-lg"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideInLeft" delay={0.2}>
            <StaggerContainer className="flex gap-10 flex-col order-2 lg:order-1">
              <StaggerItem>
                <div className="flex gap-4 flex-col">
                  <div>
                    <Badge className="bg-secondary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                      {t("about.badge")}
                    </Badge>
                  </div>
                  <div className="flex gap-2 flex-col">
                    <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-light text-gray-800">
                      {t("about.title")}
                      <br />
                      <span className="font-semibold text-secondary-600">
                        {t("about.titleHighlight")}
                      </span>
                    </h2>
                    <p className="text-lg leading-relaxed tracking-tight text-gray-600 max-w-xl text-left">
                      {t("about.description")}
                    </p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-2 items-start lg:grid-cols-1 gap-6">
                  <div className="flex flex-row gap-6 items-start">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-gray-800">
                        {t("about.features.experience.title")}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {t("about.features.experience.description")}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 items-start">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-gray-800">
                        {t("about.features.support.title")}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {t("about.features.support.description")}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 items-start">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-gray-800">
                        {t("about.features.bilingual.title")}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {t("about.features.bilingual.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    className="px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
                    onClick={() => window.open("tel:909-321-2255", "_self")}
                  >
                    {t("common.callButton")}
                  </Button>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
