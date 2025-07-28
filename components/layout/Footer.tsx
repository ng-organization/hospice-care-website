"use client";

import { useTranslations, useLocale } from "next-intl";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  ExternalLink,
} from "lucide-react";

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="mt-auto w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 to-secondary-900/10"></div>

      <div className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/assets/logo.png"
                alt="IE Community Hospice Logo"
                className="w-10 h-10"
              />
              <div>
                <span className="text-lg font-bold text-white">
                  {t("navigation.companyName")}
                </span>
                <p className="text-xs text-slate-300">Hospice Care Provider</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-sm mb-6">
              {t("footer.description")}
            </p>

            {/* Social Media */}
            <div>
              <h5 className="font-semibold text-white mb-3 text-sm">
                {t("footer.social.title")}
              </h5>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors bg-white/5 px-3 py-2 rounded-lg hover:bg-white/10"
                >
                  <Facebook className="w-4 h-4" />
                  <span className="text-sm">{t("footer.social.facebook")}</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-slate-300 hover:text-orange-400 transition-colors bg-white/5 px-3 py-2 rounded-lg hover:bg-white/10"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">{t("footer.social.chinese")}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg text-white">
              {t("footer.quickLinks.title")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`/${locale}/about`}
                  className="text-slate-300 hover:text-primary-400 transition-colors text-sm"
                >
                  {t("footer.quickLinks.about")}
                </a>
              </li>
              <li>
                <a
                  href={`/${locale}/services`}
                  className="text-slate-300 hover:text-primary-400 transition-colors text-sm"
                >
                  {t("footer.quickLinks.services")}
                </a>
              </li>
              <li>
                <a
                  href={`/${locale}/areas`}
                  className="text-slate-300 hover:text-primary-400 transition-colors text-sm"
                >
                  {t("footer.quickLinks.areas")}
                </a>
              </li>
              <li>
                <a
                  href="#dignity"
                  className="text-slate-300 hover:text-primary-400 transition-colors text-sm"
                >
                  {t("footer.quickLinks.dignity")}
                </a>
              </li>
              <li>
                <a
                  href="#info"
                  className="text-slate-300 hover:text-primary-400 transition-colors text-sm"
                >
                  {t("footer.quickLinks.info")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-300 hover:text-primary-400 transition-colors text-sm"
                >
                  {t("footer.quickLinks.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold mb-6 text-lg text-white">
              {t("footer.contact.title")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:909-321-2255"
                  className="text-slate-300 hover:text-primary-400 transition-colors font-medium text-sm"
                >
                  {t("footer.contact.phone")}
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-3 text-primary-400 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@iecommunityhospice.com"
                  className="text-slate-300 hover:text-primary-400 transition-colors text-sm break-all"
                >
                  {t("footer.contact.email")}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm whitespace-pre-line leading-relaxed">
                  {t("footer.contact.address")}
                </span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="font-bold mb-6 text-lg text-white flex items-center">
              <Clock className="w-5 h-5 mr-2 text-accent-400" />
              {t("footer.contact.hours")}
            </h4>

            <div className="space-y-4">
              <div>
                <p className="text-slate-300 text-sm font-medium mb-1">
                  {t("footer.contact.hoursDetail")}
                </p>
                <p className="text-accent-400 text-sm font-medium">
                  {t("footer.contact.emergency")}
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <p className="text-white text-sm font-semibold mb-1">
                  Medicare Certified
                </p>
                <p className="text-slate-300 text-xs">CMS Certified Provider</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="border-t border-slate-700/50 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">
            {t("footer.legal.copyright", { year: new Date().getFullYear() })}
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="#"
              className="text-slate-400 hover:text-primary-400 transition-colors"
            >
              {t("footer.legal.privacy")}
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-primary-400 transition-colors"
            >
              {t("footer.legal.terms")}
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-primary-400 transition-colors"
            >
              {t("footer.legal.hipaa")}
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-primary-400 transition-colors"
            >
              {t("footer.legal.compliance")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
