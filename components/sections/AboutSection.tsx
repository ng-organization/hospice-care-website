"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion";
import { Check } from "lucide-react";

export function AboutSection() {
  const t = useTranslations();

  return (
    <div className="w-full py-20 lg:py-40 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-24 items-center lg:grid-cols-2">
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
                      <p className="font-medium text-gray-800">5+ Years Experience</p>
                      <p className="text-muted-foreground text-sm">
                        Serving families with compassionate care for over 5 years.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 items-start">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-gray-800">24/7 Support</p>
                      <p className="text-muted-foreground text-sm">
                        Round-the-clock care and support when you need it most.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 items-start">
                    <Check className="w-4 h-4 mt-2 text-primary" />
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-gray-800">Bilingual Care</p>
                      <p className="text-muted-foreground text-sm">
                        English and Traditional Chinese speaking staff available.
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
                  >
                    {t("about.buttons.meetTeam")}
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="px-8 py-4 rounded-full text-lg transition-all duration-300"
                  >
                    {t("about.buttons.viewCredentials")}
                  </Button>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}