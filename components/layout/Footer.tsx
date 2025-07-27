"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="mt-auto w-full bg-slate-800 text-white">
      <div className="w-full px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/assets/logo.png"
                alt="IE Community Hospice Logo"
                className="w-8 h-8"
              />
              <span className="text-xl font-semibold">
                {t("navigation.companyName")}
              </span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md text-lg leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-primary-600 text-white px-4 py-2">
                {t("footer.badges.medicare")}
              </Badge>
              <Badge className="bg-secondary-600 text-white px-4 py-2">
                {t("footer.badges.licensed")}
              </Badge>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">
              {t("footer.services.title")}
            </h4>
            <ul className="space-y-3 text-slate-300">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  {t("footer.services.comfort")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  {t("footer.services.pain")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  {t("footer.services.family")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  {t("footer.services.bereavement")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">
              {t("footer.contact.title")}
            </h4>
            <ul className="space-y-3 text-slate-300">
              <li className="text-lg">{t("footer.contact.phone")}</li>
              <li>{t("footer.contact.email")}</li>
              <li className="whitespace-pre-line">
                {t("footer.contact.address")}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400">
            {t("footer.legal.copyright", { year: new Date().getFullYear() })}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
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
          </div>
        </div>
      </div>
    </footer>
  );
}