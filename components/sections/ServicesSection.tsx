"use client";

import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Shield, Users, Stethoscope, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion";

export function ServicesSection() {
  const t = useTranslations();
  const locale = useLocale();

  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: t("services.items.homecare.title"),
      description: t("services.items.homecare.description"),
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t("services.items.inpatient.title"),
      description: t("services.items.inpatient.description"),
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("services.items.continuous.title"),
      description: t("services.items.continuous.description"),
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: t("services.items.respite.title"),
      description: t("services.items.respite.description"),
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen w-full bg-white"
    >
      <AnimatedSection animation="fadeInUp" delay={0.2}>
        <div className="w-full px-4 md:px-8 lg:px-16 py-24">
          <StaggerContainer className="text-center mb-16">
            <StaggerItem>
              <Badge className="bg-primary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {t("services.badge")}
              </Badge>
            </StaggerItem>
            <StaggerItem>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                {t("services.title")}
                <br />
                <span className="font-semibold text-primary-600">
                  {t("services.titleHighlight")}
                </span>
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                {t("services.description")}
              </p>
            </StaggerItem>
          </StaggerContainer>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <Card
                  className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-primary-50/30 hover:scale-105 hover:-translate-y-2"
                >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-all duration-300 group-hover:scale-110">
                  <div className="text-primary-600">{service.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="text-center">
            <StaggerItem>
              <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
                {t("services.additionalInfo")}
              </p>
            </StaggerItem>
            <StaggerItem>
              <Button
                size="lg"
                onClick={() => window.location.href = `/${locale}/services`}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {t("services.viewAllServices")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </AnimatedSection>
    </section>
  );
}