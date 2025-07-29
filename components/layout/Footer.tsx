"use client";

import { useTranslations, useLocale } from "next-intl";
import { Footer7 } from "@/components/ui/footer-7";
import { FaFacebook } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const logo = {
    url: `/${locale}`,
    src: "/assets/logo.png",
    alt: "IE Community Hospice Logo",
    title: t("navigation.companyName"),
  };

  const sections = [
    {
      title: t("footer.quickLinks.title"),
      links: [
        { name: t("footer.quickLinks.about"), href: `/${locale}/about` },
        { name: t("footer.quickLinks.services"), href: `/${locale}/services` },
        { name: t("footer.quickLinks.areas"), href: `/${locale}/areas` },
        { name: t("footer.quickLinks.dignity"), href: `/${locale}/death-with-dignity` },
        { name: t("footer.quickLinks.info"), href: `/${locale}/useful-information` },
        { name: t("footer.quickLinks.contact"), href: `/${locale}/contact` },
      ],
    },
    {
      title: t("footer.services.title"),
      links: [
        { name: t("footer.services.comfort"), href: `/${locale}/services#home-care` },
        { name: t("footer.services.pain"), href: `/${locale}/services#pain-management` },
        { name: t("footer.services.family"), href: `/${locale}/services#family-support` },
        { name: t("footer.services.bereavement"), href: `/${locale}/services#bereavement` },
        { name: t("footer.services.continuous"), href: `/${locale}/services#continuous-care` },
        { name: t("footer.services.respite"), href: `/${locale}/services#respite-care` },
      ],
    },
    {
      title: t("footer.contact.title"),
      links: [
        { name: t("footer.contact.phone"), href: "tel:909-321-2255" },
        { name: t("footer.contact.email"), href: "mailto:INFO@IECOMMUNITYHOSPICE.COM" },
        { name: "600 N. Mountain Ave, Suite D105", href: "#" },
        { name: "Upland, CA 91786", href: "#" },
        { name: t("footer.contact.hoursDetail"), href: "#" },
        { name: t("footer.contact.emergency"), href: "#" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook className="w-5 h-5" />,
      href: "#",
      label: t("footer.social.facebook"),
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      href: "#",
      label: t("footer.social.chinese"),
    },
  ];

  const legalLinks = [
    { name: t("footer.legal.privacy"), href: "#" },
    { name: t("footer.legal.terms"), href: "#" },
    { name: t("footer.legal.hipaa"), href: "#" },
    { name: t("footer.legal.compliance"), href: "#" },
  ];

  const description = t("footer.description");
  const copyright = t("footer.legal.copyright", { year: new Date().getFullYear() });

  return (
    <div className="mt-auto w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 to-secondary-900/10"></div>
      
      <div className="relative z-10">
        <Footer7
          logo={logo}
          sections={sections}
          description={description}
          socialLinks={socialLinks}
          copyright={copyright}
          legalLinks={legalLinks}
        />
      </div>
    </div>
  );
}
