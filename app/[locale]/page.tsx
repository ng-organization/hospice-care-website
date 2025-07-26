"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  Star,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  CheckCircle,
  Award,
  Stethoscope,
  Home,
} from "lucide-react";

export default function HospiceCareWebsite() {
  const t = useTranslations();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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

  const testimonials = [
    {
      name: t("testimonials.items.0.name"),
      relation: t("testimonials.items.0.relation"),
      content: t("testimonials.items.0.content"),
      rating: 5,
    },
    {
      name: t("testimonials.items.1.name"),
      relation: t("testimonials.items.1.relation"),
      content: t("testimonials.items.1.content"),
      rating: 5,
    },
    {
      name: t("testimonials.items.2.name"),
      relation: t("testimonials.items.2.relation"),
      content: t("testimonials.items.2.content"),
      rating: 5,
    },
  ];

  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: t("services.items.homecare.title"),
      description: t("services.items.homecare.description"),
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t("services.items.inpatient.title"),
      description: t("services.items.inpatient.description"),
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("services.items.continuous.title"),
      description: t("services.items.continuous.description"),
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: t("services.items.respite.title"),
      description: t("services.items.respite.description"),
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

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
                href="#services"
                className={`transition-all duration-300 ${
                  isScrolled
                    ? "text-accent-800 hover:text-accent-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {t("navigation.services")}
              </a>
              <a
                href="#about"
                className={`transition-all duration-300 ${
                  isScrolled
                    ? "text-accent-800 hover:text-accent-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {t("navigation.about")}
              </a>
              <a
                href="#areas"
                className={`transition-all duration-300 ${
                  isScrolled
                    ? "text-accent-800 hover:text-accent-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {t("navigation.areas")}
              </a>
              <a
                href="#dignity"
                className={`transition-all duration-300 ${
                  isScrolled
                    ? "text-accent-800 hover:text-accent-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {t("navigation.dignity")}
              </a>
              <a
                href="#info"
                className={`transition-all duration-300 ${
                  isScrolled
                    ? "text-accent-800 hover:text-accent-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {t("navigation.info")}
              </a>
              <a
                href="#contact"
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
                href="#services"
                className={`block transition-colors ${
                  isScrolled
                    ? "text-accent-800 hover:text-accent-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {t("navigation.services")}
              </a>
              <a
                href="#about"
                className={`block transition-colors ${
                  isScrolled
                    ? "text-accent-800 hover:text-accent-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {t("navigation.about")}
              </a>
              <a
                href="#areas"
                className={`block transition-colors ${
                  isScrolled
                    ? "text-accent-800 hover:text-accent-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {t("navigation.areas")}
              </a>
              <a
                href="#dignity"
                className={`block transition-colors ${
                  isScrolled
                    ? "text-accent-800 hover:text-accent-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {t("navigation.dignity")}
              </a>
              <a
                href="#info"
                className={`block transition-colors ${
                  isScrolled
                    ? "text-accent-800 hover:text-accent-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {t("navigation.info")}
              </a>
              <a
                href="#contact"
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
          className="relative h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage:
              "url('/image_asset/20250725_1120_Realistic Medical Encounter_remix_01k11cx9w6f8wvtm0npyje67ct.webp')",
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
                {t("hero.badge")}
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white leading-tight">
                {t("hero.title")}
                <br />
                <span className="font-semibold">
                  {t("hero.titleHighlight")}
                </span>
              </h1>

              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {t("hero.description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  onClick={() => window.open("tel:909-321-2255", "_self")}
                  className="bg-white text-slate-800 hover:bg-white/90 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t("hero.ctaPrimary")}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg transition-all duration-300 bg-transparent backdrop-blur-sm"
                >
                  {t("hero.ctaSecondary")}
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/80 pt-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span>{t("hero.certifications.medicare")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-white" />
                  <span>{t("hero.certifications.licensed")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-white" />
                  <span>{t("hero.certifications.availability")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float-delayed"></div>
        </section>

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>

        {/* Services Section */}
        <section
          id="services"
          className="min-h-screen w-full bg-white observe-section"
        >
          <div className="w-full px-4 md:px-8 lg:px-16 py-24">
            <div className="text-center mb-16">
              <Badge className="bg-primary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {t("services.badge")}
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                {t("services.title")}
                <br />
                <span className="font-semibold text-primary-600">
                  {t("services.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                {t("services.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
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

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen w-full bg-gradient-to-br from-secondary-50/30 to-white observe-section"
        >
          <div className="w-full px-4 md:px-8 lg:px-16 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
              <div className="space-y-8">
                <div>
                  <Badge className="bg-secondary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    {t("about.badge")}
                  </Badge>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                    {t("about.title")}
                    <br />
                    <span className="font-semibold text-secondary-600">
                      {t("about.titleHighlight")}
                    </span>
                  </h2>
                </div>

                <p className="text-xl text-slate-600 leading-relaxed">
                  {t("about.description")}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-4xl font-bold text-primary-600 mb-2">
                      5
                    </div>
                    <div className="text-slate-600 font-medium">
                      {t("about.stats.families")}
                    </div>
                  </div>
                  <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-4xl font-bold text-primary-600 mb-2">
                      24/7
                    </div>
                    <div className="text-slate-600 font-medium">
                      {t("about.stats.experience")}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
                    {t("about.buttons.meetTeam")}
                  </Button>
                  <Button
                    variant="outline"
                    className="border-secondary-300 text-secondary-700 hover:bg-secondary-50 px-8 py-4 rounded-full text-lg bg-transparent transition-all duration-300"
                  >
                    {t("about.buttons.viewCredentials")}
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/image_asset/20250725_1034_Realistic Care Interaction_remix_01k11a9631e8rv6vmsdb2qbgkh.webp"
                    alt="Professional hospice care team providing compassionate care"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-200/50 rounded-full blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-secondary-200/50 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="min-h-[60vh] w-full bg-white observe-section"
        >
          <div className="w-full px-4 md:px-8 lg:px-16 py-24">
            <div className="text-center mb-16">
              <Badge className="bg-primary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {t("testimonials.badge")}
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                {t("testimonials.title")}
                <br />
                <span className="font-semibold text-primary-600">
                  {t("testimonials.titleHighlight")}
                </span>
              </h2>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <Card className="border-0 bg-gradient-to-br from-primary-50/50 to-white shadow-2xl">
                <CardContent className="p-12 text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 text-yellow-400 fill-current"
                        />
                      )
                    )}
                  </div>

                  <blockquote className="text-2xl text-slate-700 leading-relaxed mb-8 italic font-light">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  <div>
                    <div className="font-semibold text-slate-800 text-xl">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-slate-500 text-lg">
                      {testimonials[currentTestimonial].relation}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center items-center mt-8 space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="rounded-full w-12 h-12 p-0 border-primary-300 hover:bg-primary-50 bg-transparent transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? "bg-primary-600 scale-125"
                          : "bg-primary-200 hover:bg-primary-300"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="rounded-full w-12 h-12 p-0 border-primary-300 hover:bg-primary-50 bg-transparent transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen w-full bg-gradient-to-br from-secondary-50/30 to-white observe-section"
        >
          <div className="w-full px-4 md:px-8 lg:px-16 py-24">
            <div className="text-center mb-16">
              <Badge className="bg-secondary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {t("contact.badge")}
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                {t("contact.title")}
                <br />
                <span className="font-semibold text-primary-600">
                  {t("contact.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {t("contact.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
              {/* Contact Form */}
              <Card className="border-0 bg-white shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                    {t("contact.form.title")}
                  </h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">
                          {t("contact.form.firstName")}
                        </label>
                        <Input className="border-secondary-200 focus:border-primary-400 rounded-lg h-12" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">
                          {t("contact.form.lastName")}
                        </label>
                        <Input className="border-secondary-200 focus:border-primary-400 rounded-lg h-12" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        {t("contact.form.email")}
                      </label>
                      <Input
                        type="email"
                        className="border-secondary-200 focus:border-primary-400 rounded-lg h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        {t("contact.form.phone")}
                      </label>
                      <Input
                        type="tel"
                        className="border-secondary-200 focus:border-primary-400 rounded-lg h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">
                        {t("contact.form.message")}
                      </label>
                      <Textarea
                        rows={4}
                        className="border-secondary-200 focus:border-primary-400 rounded-lg resize-none"
                        placeholder={t("contact.form.messagePlaceholder")}
                      />
                    </div>

                    <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105">
                      {t("contact.form.submit")}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                    {t("contact.info.title")}
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-lg">
                          {t("contact.info.phone.title")}
                        </h4>
                        <p className="text-slate-600 text-lg">
                          {t("contact.info.phone.number")}
                        </p>
                        <p className="text-sm text-slate-500">
                          {t("contact.info.phone.note")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-lg">
                          {t("contact.info.email.title")}
                        </h4>
                        <p className="text-slate-600 text-lg">
                          {t("contact.info.email.address")}
                        </p>
                        <p className="text-sm text-slate-500">
                          {t("contact.info.email.note")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-lg">
                          {t("contact.info.address.title")}
                        </h4>
                        <p className="text-slate-600 text-lg whitespace-pre-line">
                          {t("contact.info.address.address")}
                        </p>
                        <p className="text-sm text-slate-500">
                          {t("contact.info.address.note")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <Card className="border-2 border-red-200 bg-red-50/50">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-red-800 mb-2 text-lg">
                      {t("contact.emergency.title")}
                    </h4>
                    <p className="text-red-700 mb-4">
                      {t("contact.emergency.description")}
                    </p>
                    <Button
                      onClick={() => window.open("tel:909-321-2255", "_self")}
                      className="bg-primary-600 hover:bg-primary-700 text-white transition-all duration-300 hover:scale-105"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      {t("contact.emergency.button")}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Footer */}
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
