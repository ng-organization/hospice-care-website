"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LanguageSwitcher } from "@/components/language-switcher";
import {
  Shield,
  Clock,
  Users,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  CheckCircle,
  Award,
  Stethoscope,
  Home,
  Heart,
  UserCheck,
  Pill,
  Wrench,
  User,
  GraduationCap,
  CalendarDays,
  HandHeart,
} from "lucide-react";

export default function ServicesPage() {
  const t = useTranslations();
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".observe-section");
    sections.forEach((section) => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  const coreServices = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: t("servicesPage.coreServices.painManagement.title"),
      description: t("servicesPage.coreServices.painManagement.description"),
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t("servicesPage.coreServices.onCallNursing.title"),
      description: t("servicesPage.coreServices.onCallNursing.description"),
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: t("servicesPage.coreServices.personalCare.title"),
      description: t("servicesPage.coreServices.personalCare.description"),
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("servicesPage.coreServices.socialWorker.title"),
      description: t("servicesPage.coreServices.socialWorker.description"),
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: t("servicesPage.coreServices.bereavement.title"),
      description: t("servicesPage.coreServices.bereavement.description"),
    },
    {
      icon: <User className="w-8 h-8" />,
      title: t("servicesPage.coreServices.volunteer.title"),
      description: t("servicesPage.coreServices.volunteer.description"),
    },
    {
      icon: <Pill className="w-8 h-8" />,
      title: t("servicesPage.coreServices.medication.title"),
      description: t("servicesPage.coreServices.medication.description"),
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: t("servicesPage.coreServices.equipment.title"),
      description: t("servicesPage.coreServices.equipment.description"),
    },
  ];

  const levelsOfCare = [
    {
      icon: <Home className="w-8 h-8" />,
      title: t("servicesPage.levelsOfCare.routine.title"),
      description: t("servicesPage.levelsOfCare.routine.description"),
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t("servicesPage.levelsOfCare.continuous.title"),
      description: t("servicesPage.levelsOfCare.continuous.description"),
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: t("servicesPage.levelsOfCare.inpatient.title"),
      description: t("servicesPage.levelsOfCare.inpatient.description"),
    },
    {
      icon: <CalendarDays className="w-8 h-8" />,
      title: t("servicesPage.levelsOfCare.respite.title"),
      description: t("servicesPage.levelsOfCare.respite.description"),
    },
  ];

  const teamMembers = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: t("servicesPage.team.doctors"),
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: t("servicesPage.team.nurses"),
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t("servicesPage.team.socialWorkers"),
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: t("servicesPage.team.counselors"),
    },
    {
      icon: <User className="w-6 h-6" />,
      title: t("servicesPage.team.volunteers"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-lg"
            : "bg-accent-800/90 border-white/20"
        }`}
      >
        <div className="w-full px-4 md:px-8 lg:px-16">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img
                src="/assets/logo.png"
                alt="IE Community Hospice Logo"
                className="w-8 h-8"
              />
              <span
                className={`text-xl font-semibold transition-colors duration-300 ${
                  isScrolled ? "text-accent-800" : "text-white"
                }`}
              >
                {t("navigation.companyName")}
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href={`/${locale}`}
                className={`transition-all duration-300 ${
                  isScrolled
                    ? "text-accent-800 hover:text-accent-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {t("navigation.home")}
              </a>
              <a
                href={`/${locale}/services`}
                className={`transition-all duration-300 ${
                  isScrolled
                    ? "text-accent-800 hover:text-accent-600"
                    : "text-white hover:text-gray-300"
                } font-semibold`}
              >
                {t("navigation.services")}
              </a>
              <a
                href={`/${locale}#about`}
                className={`transition-all duration-300 ${
                  isScrolled
                    ? "text-accent-800 hover:text-accent-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {t("navigation.about")}
              </a>
              <a
                href={`/${locale}#areas`}
                className={`transition-all duration-300 ${
                  isScrolled
                    ? "text-accent-800 hover:text-accent-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {t("navigation.areas")}
              </a>
              <a
                href={`/${locale}#dignity`}
                className={`transition-all duration-300 ${
                  isScrolled
                    ? "text-accent-800 hover:text-accent-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {t("navigation.dignity")}
              </a>
              <a
                href={`/${locale}#info`}
                className={`transition-all duration-300 ${
                  isScrolled
                    ? "text-accent-800 hover:text-accent-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {t("navigation.info")}
              </a>
              <a
                href={`/${locale}#contact`}
                className={`transition-all duration-300 ${
                  isScrolled
                    ? "text-accent-800 hover:text-accent-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {t("navigation.contact")}
              </a>
              <LanguageSwitcher isScrolled={isScrolled} />
              <Button
                onClick={() => window.open("tel:909-321-2255", "_self")}
                className="bg-primary-600 hover:bg-primary-700 text-white border-0 px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                {t("navigation.callNow")}
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 transition-colors duration-300 ${
                isScrolled ? "text-accent-800" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden backdrop-blur-md border-t shadow-lg transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 border-gray-200"
              : "bg-accent-800/95 border-white/20"
          }`}>
            <div className="px-4 py-4 space-y-4">
              <a
                href={`/${locale}`}
                className={`block transition-colors ${
                  isScrolled
                    ? "text-accent-800 hover:text-accent-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {t("navigation.home")}
              </a>
              <a
                href={`/${locale}/services`}
                className={`block transition-colors font-semibold ${
                  isScrolled
                    ? "text-accent-800 hover:text-accent-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {t("navigation.services")}
              </a>
              <a
                href={`/${locale}#about`}
                className={`block transition-colors ${
                  isScrolled
                    ? "text-accent-800 hover:text-accent-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {t("navigation.about")}
              </a>
              <a
                href={`/${locale}#areas`}
                className={`block transition-colors ${
                  isScrolled
                    ? "text-accent-800 hover:text-accent-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {t("navigation.areas")}
              </a>
              <a
                href={`/${locale}#dignity`}
                className={`block transition-colors ${
                  isScrolled
                    ? "text-accent-800 hover:text-accent-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {t("navigation.dignity")}
              </a>
              <a
                href={`/${locale}#info`}
                className={`block transition-colors ${
                  isScrolled
                    ? "text-accent-800 hover:text-accent-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {t("navigation.info")}
              </a>
              <a
                href={`/${locale}#contact`}
                className={`block transition-colors ${
                  isScrolled
                    ? "text-accent-800 hover:text-accent-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {t("navigation.contact")}
              </a>
              <div className="pt-2">
                <LanguageSwitcher isScrolled={isScrolled} />
              </div>
              <Button
                onClick={() => window.open("tel:909-321-2255", "_self")}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white border-0 shadow-lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                {t("navigation.callNow")}
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Wrapper */}
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative h-[60vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage:
              "url('/image_asset/20250724_2153_Realistic Medical Interaction_remix_01k0zyrpt0ft3a4dr3fm0epvzj.webp')",
          }}
        >
          {/* Background Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-800/95 to-accent-900/90"></div>

          {/* Additional dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Hero Content */}
          <div className="relative z-10 w-full px-4 md:px-8 lg:px-16 text-center">
            <div className="space-y-8 animate-fade-in">
              <Badge className="bg-white/20 text-white border border-white/30 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                {t("servicesPage.hero.badge")}
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
                {t("servicesPage.hero.title")}
                <br />
                <span className="font-semibold">
                  {t("servicesPage.hero.titleHighlight")}
                </span>
              </h1>

              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {t("servicesPage.hero.description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  onClick={() => window.open("tel:909-321-2255", "_self")}
                  className="bg-white text-slate-800 hover:bg-white/90 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t("servicesPage.hero.ctaPrimary")}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = `/${locale}#contact`}
                  className="border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg transition-all duration-300 bg-transparent backdrop-blur-sm"
                >
                  {t("servicesPage.hero.ctaSecondary")}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="min-h-screen w-full bg-white observe-section">
          <div className="w-full px-4 md:px-8 lg:px-16 py-24">
            <div className="text-center mb-16">
              <Badge className="bg-primary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {t("servicesPage.overview.badge")}
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                {t("servicesPage.overview.title")}
                <br />
                <span className="font-semibold text-primary-600">
                  {t("servicesPage.overview.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                {t("servicesPage.overview.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreServices.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-primary-50/30 hover:scale-105 hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-all duration-300 group-hover:scale-110">
                      <div className="text-primary-600">{service.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Levels of Care */}
        <section className="min-h-[80vh] w-full bg-gradient-to-br from-secondary-50/30 to-white observe-section">
          <div className="w-full px-4 md:px-8 lg:px-16 py-24">
            <div className="text-center mb-16">
              <Badge className="bg-secondary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {t("servicesPage.levelsOfCare.badge")}
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                {t("servicesPage.levelsOfCare.title")}
                <br />
                <span className="font-semibold text-secondary-600">
                  {t("servicesPage.levelsOfCare.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                {t("servicesPage.levelsOfCare.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {levelsOfCare.map((level, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:scale-105"
                >
                  <CardContent className="p-10">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-200 transition-all duration-300 group-hover:scale-110">
                        <div className="text-secondary-600">{level.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                          {level.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                          {level.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Interdisciplinary Team */}
        <section className="min-h-[60vh] w-full bg-white observe-section">
          <div className="w-full px-4 md:px-8 lg:px-16 py-24">
            <div className="text-center mb-16">
              <Badge className="bg-primary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {t("servicesPage.team.badge")}
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                {t("servicesPage.team.title")}
                <br />
                <span className="font-semibold text-primary-600">
                  {t("servicesPage.team.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                {t("servicesPage.team.description")}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="text-center group"
                  >
                    <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-all duration-300 group-hover:scale-110">
                      <div className="text-primary-600">{member.icon}</div>
                    </div>
                    <h3 className="text-sm font-medium text-slate-800">
                      {member.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="min-h-[40vh] w-full bg-gradient-to-br from-accent-800 to-accent-900 text-white observe-section">
          <div className="w-full px-4 md:px-8 lg:px-16 py-24 text-center">
            <h2 className="text-4xl sm:text-5xl font-light mb-6">
              {t("servicesPage.cta.title")}
              <br />
              <span className="font-semibold">
                {t("servicesPage.cta.titleHighlight")}
              </span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              {t("servicesPage.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                onClick={() => window.open("tel:909-321-2255", "_self")}
                className="bg-white text-slate-800 hover:bg-white/90 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t("servicesPage.cta.ctaPrimary")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = `/${locale}#contact`}
                className="border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg transition-all duration-300 bg-transparent backdrop-blur-sm"
              >
                {t("servicesPage.cta.ctaSecondary")}
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          size="lg"
          onClick={() => window.open("tel:909-321-2255", "_self")}
          className="bg-primary-600 hover:bg-primary-700 text-white rounded-full w-16 h-16 shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <Phone className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}