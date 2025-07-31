"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { StaggerContainer, StaggerItem } from "@/components/motion";

export function AreasCTASection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section 
      className="section-full-width relative h-[75vh] bg-cover bg-center bg-no-repeat flex items-center justify-center observe-section"
      style={{
        backgroundImage: `url('/image_asset/20250724_1131_温馨家庭探访_remix_01k0yv594bfy1vs06ygah5s0qn.webp')`,
      }}
    >
      {/* Background overlay matching site design */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800/95 to-primary-900/90"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="section-content relative z-10 text-center">
        <StaggerContainer className="space-y-8 max-w-4xl mx-auto">
          <StaggerItem>
            <Badge className="bg-white/20 text-white border border-white/30 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              {t("areasPage.contact.badge")}
            </Badge>
          </StaggerItem>

          <StaggerItem>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light text-white leading-tight">
              {t("areasPage.contact.title")}
              <br />
              <span className="font-semibold">{t("areasPage.contact.titleHighlight")}</span>
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t("areasPage.contact.description")}
            </p>
          </StaggerItem>

          {/* Contact Information */}
          <StaggerItem>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              {/* Phone */}
              <div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 cursor-pointer hover:bg-white/20 transition-all duration-300 group"
                onClick={() => window.open("tel:909-321-2255", "_self")}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm font-medium">{t("areasPage.contact.cards.callTitle")}</p>
                    <p className="text-white text-lg font-semibold">{t("areasPage.contact.phone")}</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 cursor-pointer hover:bg-white/20 transition-all duration-300 group"
                onClick={() => window.open("mailto:info@iecommunityhospice.com", "_self")}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm font-medium">{t("areasPage.contact.cards.emailTitle")}</p>
                    <p className="text-white text-base font-semibold break-all">{t("areasPage.contact.email")}</p>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm font-medium">{t("areasPage.contact.cards.availabilityTitle")}</p>
                    <p className="text-white text-base font-semibold">{t("areasPage.contact.availability")}</p>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* CTA Buttons */}
          <StaggerItem>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">
                {t("areasPage.contact.cta.title")}
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.open("tel:909-321-2255", "_self")}
                  className="bg-white text-primary-800 hover:bg-white/90 hover:text-primary-900 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl border-none"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t("areasPage.contact.cta.callButton")}
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => (window.location.href = `/${locale}#contact`)}
                  className="border-white/50 text-white hover:bg-white/10 hover:border-white px-8 py-4 rounded-full text-lg transition-all duration-300 bg-transparent backdrop-blur-sm"
                >
                  {t("areasPage.contact.cta.contactButton")}
                </Button>
              </div>
            </div>
          </StaggerItem>

          {/* Note */}
          <StaggerItem>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 max-w-3xl mx-auto">
              <p className="text-white/80 text-sm">
                <strong className="text-white">{t("common.note")}:</strong>{" "}
                {t("areasPage.contact.cta.note")}
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* Fade border for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white from-0% via-white/30 via-20% to-transparent to-100% z-10"></div>
    </section>
  );
}
