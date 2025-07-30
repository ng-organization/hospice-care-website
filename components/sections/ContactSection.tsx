"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Heart, Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export function ContactSection() {
  const t = useTranslations();

  return (
    <section className="section-background py-24" id="contact">
      <div className="section-content">
        <StaggerContainer className="space-y-16">
          {/* Header */}
          <StaggerItem>
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="bg-primary-100 text-accent-800 px-6 py-3 rounded-full text-sm font-medium mb-6">
                {t("contact.badge")}
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                {t("contact.title")}
                <br />
                <span className="font-semibold text-primary-600">
                  {t("contact.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {t("contact.description")}
              </p>
            </div>
          </StaggerItem>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Direct Contact Information */}
            <AnimatedSection animation="slideInLeft" delay={0.3}>
              <Card className="border-0 bg-white shadow-2xl h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-8">
                    <Heart className="w-8 h-8 text-primary-600" />
                    <h3 className="text-2xl font-semibold text-slate-800">
                      {t("contact.direct.title")}
                    </h3>
                  </div>

                  <div className="space-y-8 flex-1">
                    {/* Emergency Contact */}
                    <div className="group">
                      <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 group-hover:scale-110 transition-all duration-300">
                          <Phone className="w-7 h-7 text-primary-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-800 mb-2 text-lg">
                            {t("contact.direct.emergency")}
                          </h4>
                          <Button
                            onClick={() => window.open("tel:909-321-2255", "_self")}
                            variant="ghost"
                            className="p-0 h-auto text-2xl font-bold text-primary-600 hover:text-primary-700 mb-2"
                          >
                            909-321-2255
                          </Button>
                          <p className="text-slate-600 text-sm">
                            {t("contact.direct.available24")}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Email Contact */}
                    <div className="group">
                      <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-200 group-hover:scale-110 transition-all duration-300">
                          <Mail className="w-7 h-7 text-secondary-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-800 mb-2 text-lg">
                            {t("contact.direct.email")}
                          </h4>
                          <Button
                            onClick={() => window.open("mailto:info@iecommunity.com", "_self")}
                            variant="ghost"
                            className="p-0 h-auto text-xl font-semibold text-secondary-600 hover:text-secondary-700 mb-2"
                          >
                            info@iecommunity.com
                          </Button>
                          <p className="text-slate-600 text-sm">
                            {t("contact.direct.emailResponse")}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Office Hours */}
                    <div className="group">
                      <div className="flex items-start space-x-4">
                        <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-200 group-hover:scale-110 transition-all duration-300">
                          <Clock className="w-7 h-7 text-accent-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-800 mb-2 text-lg">
                            {t("contact.direct.hours")}
                          </h4>
                          <p className="text-lg text-slate-700 mb-1">
                            {t("contact.direct.businessHours")}
                          </p>
                          <p className="text-slate-600 text-sm">
                            {t("contact.direct.afterHours")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call Now Button */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <Button
                      onClick={() => window.open("tel:909-321-2255", "_self")}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      {t("contact.direct.callNow")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Office Location */}
            <AnimatedSection animation="slideInRight" delay={0.5}>
              <Card className="border-0 bg-white shadow-2xl h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-8">
                    <MapPin className="w-8 h-8 text-accent-600" />
                    <h3 className="text-2xl font-semibold text-slate-800">
                      {t("contact.location.title")}
                    </h3>
                  </div>

                  <div className="flex-1">
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-800 mb-3 text-lg">
                        {t("contact.location.office")}
                      </h4>
                      <Button
                        onClick={() => window.open("https://maps.google.com/?q=600+N.+Mountain+Ave,+Suite+D105,+Upland,+CA+91786", "_blank")}
                        variant="ghost"
                        className="p-0 h-auto text-left"
                      >
                        <div className="text-slate-700 hover:text-slate-900 transition-colors leading-relaxed">
                          600 N. Mountain Ave, Suite D105<br />
                          Upland, CA 91786
                        </div>
                      </Button>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-800 mb-3 text-lg">
                        {t("contact.location.serviceArea")}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {t("contact.location.serviceAreaDescription")}
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-semibold text-slate-800 mb-3">
                        {t("contact.location.immediateNeeds")}
                      </h4>
                      <p className="text-slate-600 text-sm mb-4">
                        {t("contact.location.immediateNeedsDescription")}
                      </p>
                      <Button
                        onClick={() => window.open("tel:909-321-2255", "_self")}
                        className="w-full bg-accent-600 hover:bg-accent-700 text-white py-3 rounded-lg"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        {t("contact.location.callEmergency")}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}