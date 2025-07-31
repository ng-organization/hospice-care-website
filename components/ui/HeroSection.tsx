"use client";

import { StaggerContainer, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle, Clock, Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

interface HeroSectionProps {
  variant?: "home" | "page";
  backgroundImage: string;
  badgeText: string;
  title: string;
  titleHighlight?: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  showCertifications?: boolean;
  customHeight?: string;
}

export function HeroSection({
  variant = "home",
  backgroundImage,
  badgeText,
  title,
  titleHighlight,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  showCertifications = false,
  customHeight,
}: HeroSectionProps) {
  const t = useTranslations();
  const locale = useLocale();

  const isHomePage = variant === "home";
  const defaultHeight = isHomePage ? "h-screen" : "h-[75vh]";
  const heightClass = customHeight || defaultHeight;

  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    } else {
      window.open("tel:909-321-2255", "_self");
    }
  };

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else {
      window.location.href = `/${locale}#contact`;
    }
  };

  return (
    <section
      className={`section-full-width relative ${heightClass} bg-cover bg-top bg-no-repeat flex items-center justify-center`}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      {/* Background Image Overlay with new colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800/95 to-primary-900/90"></div>

      {/* Additional dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="section-content relative z-10 text-center">
        <StaggerContainer
          className={`space-y-8 ${
            isHomePage ? "max-w-5xl mx-auto" : "max-w-4xl mx-auto"
          }`}
        >
          {/* <StaggerItem>
            <Badge className="bg-white/20 text-white border border-white/30 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              {badgeText}
            </Badge>
          </StaggerItem> */}

          <StaggerItem>
            <h1
              className={`font-light text-white leading-tight ${
                isHomePage
                  ? "text-4xl sm:text-5xl lg:text-7xl"
                  : "text-3xl sm:text-4xl lg:text-6xl"
              }`}
            >
              {title}
              {titleHighlight && (
                <>
                  <br />
                  <span className="font-semibold">{titleHighlight}</span>
                </>
              )}
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p
              className={`text-white/90 mx-auto leading-relaxed ${
                isHomePage ? "text-xl max-w-4xl" : "text-lg max-w-3xl"
              }`}
            >
              {description}
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                variant="primary"
                size="lg"
                onClick={handlePrimaryClick}
                className="bg-white text-primary-800 hover:bg-white/90 hover:text-primary-900 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl border-none"
              >
                <Phone className="w-5 h-5 mr-2" />
                {primaryButtonText}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={handleSecondaryClick}
                className="border-white/50 text-white hover:bg-white/10 hover:border-white px-8 py-4 rounded-full text-lg transition-all duration-300 bg-transparent backdrop-blur-sm"
              >
                {secondaryButtonText}
              </Button>
            </div>
          </StaggerItem>

          {/* Certifications - Only show on home page or when explicitly requested */}
          {(isHomePage || showCertifications) && (
            <StaggerItem>
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/80 pt-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span>{t("hero.certifications.medicare")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-white" />
                  <span>{t("hero.certifications.licensed")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-white" />
                  <span>{t("hero.certifications.availability")}</span>
                </div>
              </div>
            </StaggerItem>
          )}
        </StaggerContainer>
      </div>

      {/* Floating elements - Only on home page */}
      {isHomePage && (
        <>
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float-delayed"></div>
        </>
      )}

      {/* Fade border for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white from-0% via-white/30 via-20% to-transparent to-100% z-10"></div>
    </section>
  );
}

export default HeroSection;
