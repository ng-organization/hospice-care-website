"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-lg"
          : "bg-accent-800/90 border-white/20"
      }`}
    >
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-16">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <img
              src="/assets/logo.png"
              alt="IE Community Hospice Logo"
              className="w-8 h-8"
            />
            <span
              className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${
                isScrolled ? "text-accent-800" : "text-white"
              }`}
            >
              {t("navigation.companyName")}
            </span>
          </Link>

          {/* Desktop Navigation - Now shows from lg: (1024px+) */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-6">
            <a
              href={`/${locale}/services`}
              className={`text-sm xl:text-base transition-all duration-300 whitespace-nowrap ${
                isScrolled
                  ? "text-accent-800 hover:text-accent-600"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {t("navigation.services")}
            </a>
            <a
              href="#about"
              className={`text-sm xl:text-base transition-all duration-300 whitespace-nowrap ${
                isScrolled
                  ? "text-accent-800 hover:text-accent-600"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {t("navigation.about")}
            </a>
            <a
              href="#areas"
              className={`text-sm xl:text-base transition-all duration-300 whitespace-nowrap ${
                isScrolled
                  ? "text-accent-800 hover:text-accent-600"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {t("navigation.areas")}
            </a>
            <a
              href="#dignity"
              className={`text-sm xl:text-base transition-all duration-300 whitespace-nowrap ${
                isScrolled
                  ? "text-accent-800 hover:text-accent-600"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {t("navigation.dignity")}
            </a>
            <a
              href="#info"
              className={`text-sm xl:text-base transition-all duration-300 whitespace-nowrap ${
                isScrolled
                  ? "text-accent-800 hover:text-accent-600"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {t("navigation.info")}
            </a>
            <a
              href="#contact"
              className={`text-sm xl:text-base transition-all duration-300 whitespace-nowrap ${
                isScrolled
                  ? "text-accent-800 hover:text-accent-600"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {t("navigation.contact")}
            </a>
            <div className="flex-shrink-0">
              <LanguageSwitcher isScrolled={isScrolled} />
            </div>
            <Button
              onClick={() => window.open("tel:909-321-2255", "_self")}
              className="bg-primary-600 hover:bg-primary-700 text-white border-0 px-3 xl:px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm xl:text-base flex-shrink-0"
            >
              <Phone className="w-4 h-4 xl:mr-2" />
              <span className="hidden xl:inline ml-2">
                {t("navigation.callNow")}
              </span>
              <span className="xl:hidden">Call</span>
            </Button>
          </div>

          {/* Tablet Navigation - Shows from md: to lg: (768px-1023px) */}
          <div className="hidden md:flex lg:hidden items-center space-x-2">
            <div className="flex-shrink-0">
              <LanguageSwitcher isScrolled={isScrolled} />
            </div>
            <Button
              onClick={() => window.open("tel:909-321-2255", "_self")}
              className="bg-primary-600 hover:bg-primary-700 text-white border-0 px-3 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm flex-shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span className="ml-1">Call</span>
            </Button>
            <button
              className={`p-2 transition-colors duration-300 ${
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

          {/* Mobile menu button - Shows below md: (below 768px) */}
          <div className="flex md:hidden items-center space-x-2">
            <Button
              onClick={() => window.open("tel:909-321-2255", "_self")}
              className="bg-primary-600 hover:bg-primary-700 text-white border-0 p-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg flex-shrink-0"
            >
              <Phone className="w-4 h-4" />
            </Button>
            <button
              className={`p-2 transition-colors duration-300 ${
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
      </div>

      {/* Mobile Navigation - Shows for both mobile and tablet when menu is open */}
      {isMenuOpen && (
        <div
          className={`lg:hidden backdrop-blur-md border-t shadow-lg transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 border-gray-200"
              : "bg-accent-800/95 border-white/20"
          }`}
        >
          <div className="px-4 py-4 space-y-4">
            <a
              href={`/${locale}/services`}
              className={`block transition-colors py-2 ${
                isScrolled
                  ? "text-accent-800 hover:text-accent-600"
                  : "text-white hover:text-gray-300"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navigation.services")}
            </a>
            <a
              href="#about"
              className={`block transition-colors py-2 ${
                isScrolled
                  ? "text-accent-800 hover:text-accent-600"
                  : "text-white hover:text-gray-300"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navigation.about")}
            </a>
            <a
              href="#areas"
              className={`block transition-colors py-2 ${
                isScrolled
                  ? "text-accent-800 hover:text-accent-600"
                  : "text-white hover:text-gray-300"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navigation.areas")}
            </a>
            <a
              href="#dignity"
              className={`block transition-colors py-2 ${
                isScrolled
                  ? "text-accent-800 hover:text-accent-600"
                  : "text-white hover:text-gray-300"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navigation.dignity")}
            </a>
            <a
              href="#info"
              className={`block transition-colors py-2 ${
                isScrolled
                  ? "text-accent-800 hover:text-accent-600"
                  : "text-white hover:text-gray-300"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navigation.info")}
            </a>
            <a
              href="#contact"
              className={`block transition-colors py-2 ${
                isScrolled
                  ? "text-accent-800 hover:text-accent-600"
                  : "text-white hover:text-gray-300"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navigation.contact")}
            </a>
            <div className="pt-2 md:hidden">
              <LanguageSwitcher isScrolled={isScrolled} />
            </div>
            <div className="md:hidden">
              <Button
                onClick={() => {
                  window.open("tel:909-321-2255", "_self");
                  setIsMenuOpen(false);
                }}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white border-0 shadow-lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                {t("navigation.callNow")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
