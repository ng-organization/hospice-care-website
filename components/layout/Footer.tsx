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
  CheckCircle,
  Facebook
} from "lucide-react";

// Custom Chinese LA community icon
const ChineseLAIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5"/>
    <text x="12" y="16" textAnchor="middle" fontSize="4" fontWeight="bold" fill="currentColor">洛</text>
  </svg>
);

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const brand = {
    name: t("navigation.companyName"),
    description: t("footer.description"),
    logo: "/assets/logo.png",
  };

  const socialLinks = [
    {
      name: t("footer.social.facebook"),
      href: "#",
      Icon: Facebook,
    },
    {
      name: t("footer.social.chinese"),
      href: "https://www.chineseinla.com/",
      Icon: ChineseLAIcon,
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
      ],
    },
    {
      title: t("footer.contact.title"),
      links: [
        { name: t("footer.contact.phone"), Icon: Phone, href: "tel:909-321-2255" },
        { name: t("footer.contact.email"), Icon: Mail, href: "mailto:INFO@IECOMMUNITYHOSPICE.COM" },
        { name: "600 N. Mountain Ave, Suite D105, Upland, CA 91786", Icon: MapPin, href: "#" },
        { name: t("footer.contact.hoursDetail"), Icon: Clock, href: "#" },
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

  const certifications = [
    { name: t("footer.certifications.medicare"), Icon: Award },
    { name: t("footer.certifications.cms"), Icon: CheckCircle },
    { name: t("footer.certifications.hipaa"), Icon: Shield },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 to-secondary-900/10"></div>
      
      <div className="relative z-10">
        {/* Certifications Bar */}
        <div className="border-b border-white/10">
          <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-4">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              {certifications.map(({ name, Icon }) => (
                <div key={name} className="flex items-center text-white/70">
                  <Icon className="h-4 w-4 mr-2" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
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
