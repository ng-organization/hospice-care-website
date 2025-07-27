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
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
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
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href={`/${locale}/services`}
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
        <div
          className={`md:hidden backdrop-blur-md border-t shadow-lg transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 border-gray-200"
              : "bg-accent-800/95 border-white/20"
          }`}
        >
          <div className="px-4 py-4 space-y-4">
            <a
              href={`/${locale}/services`}
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
  );
}
