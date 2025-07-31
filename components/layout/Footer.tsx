"use client";

import { useTranslations, useLocale } from "next-intl";
import { Footer as UIFooter } from "@/components/ui/footer";
import { 
  Info, 
  Heart, 
  MapPin, 
  HeartHandshake, 
  Phone, 
  Mail, 
  Clock, 
  AlertCircle,
  Home,
  Stethoscope,
  Users,
  Flower2,
  Shield,
  ExternalLink,
  Scale,
  FileText,
  Award,
  CheckCircle
} from "lucide-react";

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const brand = {
    name: t("navigation.companyName"),
    description: t("footer.description"),
  };

  const socialLinks = [
    {
      name: t("footer.social.facebook"),
      href: "#",
    },
    {
      name: t("footer.social.chinese"),
      href: "#",
    },
  ];

  const columns = [
    {
      title: t("footer.quickLinks.title"),
      links: [
        { name: t("footer.quickLinks.about"), Icon: Info, href: `/${locale}/about` },
        { name: t("footer.quickLinks.services"), Icon: Heart, href: `/${locale}/services` },
        { name: t("footer.quickLinks.areas"), Icon: MapPin, href: `/${locale}/areas` },
        { name: t("footer.quickLinks.dignity"), Icon: HeartHandshake, href: `/${locale}/death-with-dignity` },
        { name: t("footer.quickLinks.info"), Icon: Info, href: `/${locale}/useful-information` },
        { name: t("footer.quickLinks.contact"), Icon: Phone, href: `/${locale}/contact` },
      ],
    },
    {
      title: t("footer.services.title"),
      links: [
        { name: t("footer.services.comfort"), Icon: Home, href: `/${locale}/services#home-care` },
        { name: t("footer.services.pain"), Icon: Stethoscope, href: `/${locale}/services#pain-management` },
        { name: t("footer.services.family"), Icon: Users, href: `/${locale}/services#family-support` },
        { name: t("footer.services.bereavement"), Icon: Flower2, href: `/${locale}/services#bereavement` },
        { name: t("footer.services.continuous"), Icon: Clock, href: `/${locale}/services#continuous-care` },
        { name: t("footer.services.respite"), Icon: Heart, href: `/${locale}/services#respite-care` },
      ],
    },
    {
      title: t("footer.contact.title"),
      links: [
        { name: t("footer.contact.phone"), Icon: Phone, href: "tel:909-321-2255" },
        { name: t("footer.contact.email"), Icon: Mail, href: "mailto:INFO@IECOMMUNITYHOSPICE.COM" },
        { name: "600 N. Mountain Ave, Suite D105", Icon: MapPin, href: "#" },
        { name: "Upland, CA 91786", Icon: MapPin, href: "#" },
        { name: t("footer.contact.hoursDetail"), Icon: Clock, href: "#" },
        { name: t("footer.contact.emergency"), Icon: AlertCircle, href: "#" },
      ],
    },
    {
      title: t("footer.certifications.title"),
      links: [
        { name: t("footer.certifications.medicare"), Icon: Award, href: "#certifications" },
        { name: t("footer.certifications.cms"), Icon: CheckCircle, href: "#certifications" },
        { name: t("footer.certifications.civilRights"), Icon: Scale, href: "#civil-rights" },
        { name: t("footer.certifications.hipaa"), Icon: Shield, href: "#hipaa" },
      ],
    },
  ];

  const legalLinks = [
    { name: t("footer.legal.privacy"), href: "#privacy" },
    { name: t("footer.legal.terms"), href: "#terms" },
    { name: t("footer.legal.hipaa"), href: "#hipaa" },
    { name: t("footer.legal.compliance"), href: "#compliance" },
  ];

  const copyright = t("footer.legal.copyright", { year: new Date().getFullYear() });

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 to-secondary-900/10"></div>
      
      <div className="relative z-10">
        <UIFooter
          brand={brand}
          socialLinks={socialLinks}
          columns={columns}
          copyright={copyright}
          legalLinks={legalLinks}
        />
      </div>
    </div>
  );
}
