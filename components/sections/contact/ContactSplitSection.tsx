"use client";

import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export function ContactSplitSection() {
  const t = useTranslations();
  const [showMapOverlay, setShowMapOverlay] = useState(true);

  useEffect(() => {
    // Auto-hide the map overlay after 4 seconds
    const timer = setTimeout(() => {
      setShowMapOverlay(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-[80vh] w-full bg-white relative overflow-hidden observe-section">
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Mobile: Map First, Desktop: Contact Info First */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 lg:p-8 flex items-center relative animate-fade-in-left order-2 lg:order-1 min-h-[500px] lg:min-h-[600px]">
              <div className="w-full max-w-lg mx-auto animate-slide-up">
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extralight text-slate-800 mb-16 leading-tight">
                  <span className="block text-slate-700">
                    {t("contact.info.title")}
                  </span>
                  <span className="font-normal text-primary-600 block">
                    {t("contact.splitSection.subtitle")}
                  </span>
                </h2>

                <div className="space-y-10">
                  {/* Phone Contact */}
                  <div
                    className="group animate-fade-in-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 group-hover:scale-110 transition-all duration-300">
                        <Phone className="w-6 h-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-800 mb-3 text-lg">
                          {t("contact.info.phone.title")}
                        </h3>
                        <a
                          href="tel:909-321-2255"
                          className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors mb-2 block"
                        >
                          909-321-2255
                        </a>
                        <a
                          href="tel:909-256-4705"
                          className="text-slate-600 text-sm hover:text-slate-800 transition-colors block mb-3"
                        >
                          {t("contact.splitSection.phone.backup")}: 909-256-4705
                        </a>
                        <p className="text-slate-600 text-sm">
                          {t("contact.splitSection.phone.availability")}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email Contact */}
                  <div
                    className="group animate-fade-in-up"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-200 group-hover:scale-110 transition-all duration-300">
                        <Mail className="w-6 h-6 text-secondary-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-800 mb-3 text-lg">
                          {t("contact.info.email.title")}
                        </h3>
                        <a
                          href="mailto:info@hospicecare.com"
                          className="text-xl font-semibold text-secondary-600 hover:text-secondary-700 transition-colors mb-3 block"
                        >
                          info@hospicecare.com
                        </a>
                        <p className="text-slate-600 text-sm">
                          {t("contact.splitSection.email.responseTime")}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Office Location */}
                  <div
                    className="group animate-fade-in-up"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-200 group-hover:scale-110 transition-all duration-300">
                        <MapPin className="w-6 h-6 text-accent-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-800 mb-3 text-lg">
                          {t("contact.location.title")}
                        </h3>
                        <a
                          href="https://maps.google.com/?q=600+N.+Mountain+Ave,+Suite+D105,+Upland,+CA+91786"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-700 hover:text-slate-900 transition-colors leading-relaxed block mb-3"
                        >
                          600 N. Mountain Ave, Suite D105
                          <br />
                          Upland, CA 91786
                        </a>
                        <div className="flex items-center space-x-2 text-sm text-slate-600">
                          <Clock className="w-4 h-4" />
                          <span>
                            {t("contact.splitSection.location.hours")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Map First, Desktop: Map Second */}
            <div className="bg-gray-100 relative animate-fade-in-right order-1 lg:order-2 min-h-[400px] lg:min-h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.8826524545847!2d-117.65453892453656!3d34.097639273152555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c335a0b6f6b5e1%3A0x7c5b8d5f8c5d5e6!2s600%20N%20Mountain%20Ave%20%23D105%2C%20Upland%2C%20CA%2091786!5e0!3m2!1sen!2sus!4v1643723456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hospice Care Office Location - 600 N. Mountain Ave, Suite D105, Upland, CA 91786"
                className="absolute inset-0 w-full h-full"
              ></iframe>

              {/* Map Overlay with Office Info - Auto-hide after 4 seconds */}
              {showMapOverlay && (
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs transition-all duration-500 animate-in fade-in-0 slide-in-from-left-4">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    <h4 className="font-semibold text-slate-800">
                      {t("contact.splitSection.mapOverlay.title")}
                    </h4>
                    <button
                      onClick={() => setShowMapOverlay(false)}
                      className="ml-auto text-slate-400 hover:text-slate-600 transition-colors"
                      aria-label={t(
                        "contact.splitSection.mapOverlay.closeLabel"
                      )}
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    600 N. Mountain Ave, Suite D105
                    <br />
                    Upland, CA 91786
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                    <Clock className="w-3 h-3" />
                    <span>{t("contact.splitSection.mapOverlay.hours")}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
