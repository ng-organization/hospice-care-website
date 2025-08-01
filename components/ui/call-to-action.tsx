"use client";

import { Phone, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";

interface CTAProps {
  variant?: "default" | "areas" | "services" | "useful-info";
  className?: string;
}

function CTA({ variant = "default", className = "" }: CTAProps) {
  const t = useTranslations();
  const locale = useLocale();

  // Define content based on variant
  const getContent = () => {
    switch (variant) {
      case "areas":
        return {
          badge: t("areasPage.contact.badge"),
          title: t("areasPage.contact.title"),
          titleHighlight: t("areasPage.contact.titleHighlight"),
          description: t("areasPage.contact.description"),
          primaryText: t("areasPage.contact.cta.callButton"),
          secondaryText: t("areasPage.contact.cta.contactButton"),
        };
      case "services":
        return {
          badge: t("servicesPage.cta.title"),
          title: t("servicesPage.cta.title"),
          titleHighlight: t("servicesPage.cta.titleHighlight"),
          description: t("servicesPage.cta.description"),
          primaryText: t("servicesPage.cta.ctaPrimary"),
          secondaryText: t("servicesPage.cta.ctaSecondary"),
        };
      case "useful-info":
        return {
          badge: t("usefulInfoPage.resources.badge"),
          title: t("usefulInfoPage.cta.title"),
          titleHighlight: t("usefulInfoPage.cta.titleHighlight"),
          description: t("usefulInfoPage.cta.description"),
          primaryText: t("usefulInfoPage.cta.callButton"),
          secondaryText: t("usefulInfoPage.cta.contactButton"),
        };
      default:
        return {
          badge: t("contact.badge"),
          title: t("contact.title"),
          titleHighlight: t("contact.titleHighlight"),
          description: t("contact.description"),
          primaryText: t("common.callButton"),
          secondaryText: t("common.contactUs"),
        };
    }
  };

  const content = getContent();

  const handlePrimaryClick = () => {
    window.open("tel:909-321-2255", "_self");
  };

  const handleSecondaryClick = () => {
    if (variant === "areas") {
      window.location.href = `/${locale}#contact`;
    } else {
      window.location.href = `/${locale}/contact`;
    }
  };

  return (
    <div className={`w-full py-20 lg:py-32 ${className}`} id="contact">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col text-center bg-muted/50 rounded-2xl p-8 lg:p-16 gap-8 items-center border border-muted-foreground/10 backdrop-blur-sm">
          <div>
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              {content.badge}
            </Badge>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight max-w-4xl font-light leading-tight">
              {content.title}
              {content.titleHighlight && (
                <>
                  <br />
                  <span className="font-semibold text-primary">{content.titleHighlight}</span>
                </>
              )}
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-3xl mx-auto">
              {content.description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button 
              onClick={handlePrimaryClick}
              size="lg"
              className="gap-3 px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              {content.primaryText}
            </Button>
            <Button 
              variant="outline" 
              onClick={handleSecondaryClick}
              size="lg"
              className="gap-3 px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300 border-2"
            >
              <Mail className="w-5 h-5" />
              {content.secondaryText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CTA };