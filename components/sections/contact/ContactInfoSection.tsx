"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, User, ExternalLink, Navigation, MessageCircle } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/motion";
import { useState, useEffect } from "react";

export function ContactInfoSection() {
  const t = useTranslations();
  const [isOfficeHours, setIsOfficeHours] = useState(false);

  useEffect(() => {
    const checkOfficeHours = () => {
      const now = new Date();
      const hour = now.getHours();
      const day = now.getDay();
      // Office hours: Mon-Fri 9AM-5PM
      setIsOfficeHours(day >= 1 && day <= 5 && hour >= 9 && hour < 17);
    };
    
    checkOfficeHours();
    const interval = setInterval(checkOfficeHours, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  const contactCards = [
    {
      icon: Phone,
      title: t("contactPage.info.phone.title"),
      primary: "909-321-2255",
      secondary: "Backup: 909-256-4705",
      note: t("contactPage.info.phone.note"),
      bgColor: "from-primary-50/50 to-white",
      iconBg: "bg-primary-100",
      iconColor: "text-primary-600",
      primaryColor: "text-primary-600",
      href: "tel:909-321-2255",
      buttonText: "Call Now"
    },
    {
      icon: Mail,
      title: t("contactPage.info.email.title"),
      primary: "info@hospicecare.com",
      secondary: "",
      note: t("contactPage.info.email.note"),
      bgColor: "from-secondary-50/50 to-white",
      iconBg: "bg-secondary-100",
      iconColor: "text-secondary-600",
      primaryColor: "text-secondary-600",
      href: "mailto:info@hospicecare.com",
      buttonText: "Send Email"
    },
    {
      icon: MapPin,
      title: t("contactPage.info.office.title"),
      primary: "600 N. Mountain Ave, Suite D105",
      secondary: "Upland, CA 91786",
      note: t("contactPage.info.office.hours"),
      bgColor: "from-accent-50/50 to-white",
      iconBg: "bg-accent-100",
      iconColor: "text-accent-600",
      primaryColor: "text-slate-700",
      href: "https://maps.google.com/?q=600+N.+Mountain+Ave,+Suite+D105,+Upland,+CA+91786",
      buttonText: "Get Directions"
    },
    {
      icon: User,
      title: t("contactPage.info.manager.title"),
      primary: "Haydee Agojo",
      secondary: "Care Manager",
      note: t("contactPage.info.manager.description"),
      bgColor: "from-green-50/50 to-white",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      primaryColor: "text-green-600",
      href: "tel:909-321-2255",
      buttonText: "Contact Haydee"
    }
  ];

  return (
    <>
      {/* Floating Contact Bar */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white shadow-2xl rounded-full px-6 py-3 flex items-center gap-4 border border-gray-200">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${isOfficeHours ? 'bg-green-500 animate-pulse' : 'bg-amber-500'}`}></div>
            <span className="text-sm font-medium text-slate-700">
              {isOfficeHours ? 'We\'re Available' : '24/7 Emergency'}
            </span>
          </div>
          <div className="h-4 w-px bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <a 
              href="tel:909-321-2255" 
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              Call
            </a>
            <a 
              href="sms:909-321-2255" 
              className="flex items-center gap-2 bg-secondary-600 hover:bg-secondary-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              Text
            </a>
          </div>
        </div>
      </div>

      <section className="min-h-[90vh] w-full bg-gradient-to-br from-secondary-50/30 to-white observe-section">
        <div className="w-full px-4 md:px-8 lg:px-16 py-24">
          <div className="max-w-7xl mx-auto">
            <StaggerContainer className="text-center mb-16">
              <StaggerItem>
                <Badge className="bg-secondary-100 text-accent-800 px-6 py-3 rounded-full text-lg font-medium mb-6">
                  {t("contactPage.info.badge")}
                </Badge>
              </StaggerItem>
              <StaggerItem>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                  {t("contactPage.info.title")}
                  <br />
                  <span className="font-semibold text-secondary-600">
                    {t("contactPage.info.titleHighlight")}
                  </span>
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  {t("contactPage.info.description")}
                </p>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactCards.map((card, index) => (
                <StaggerItem key={index}>
                  <Card className={`border-0 bg-gradient-to-br ${card.bgColor} shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group`}>
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className={`w-14 h-14 ${card.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <card.icon className={`w-7 h-7 ${card.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-800 mb-3 text-xl">
                            {card.title}
                          </h3>
                          <p className={`text-xl font-bold ${card.primaryColor} mb-1`}>
                            {card.primary}
                          </p>
                          {card.secondary && (
                            <p className="text-slate-600 text-sm mb-2">
                              {card.secondary}
                            </p>
                          )}
                          <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                            {card.note}
                          </p>
                          {card.title === t("contactPage.info.office.title") && (
                            <div className="flex items-center space-x-2 text-sm text-slate-600 mb-4">
                              <Clock className="w-4 h-4" />
                              <span className={`font-medium ${isOfficeHours ? 'text-green-600' : 'text-amber-600'}`}>
                                {isOfficeHours ? 'Currently Open' : 'Currently Closed'}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <a href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                        <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                          {card.buttonText}
                          {card.href.startsWith('http') && <ExternalLink className="w-4 h-4" />}
                          {card.href.startsWith('https://maps') && <Navigation className="w-4 h-4" />}
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>
    </>
  );
} 