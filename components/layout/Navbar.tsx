"use client";

import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import { CurvedMobileMenu } from "@/components/ui/CurvedMobileMenu";
import { Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

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

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg"
          : "bg-primary-800/90 backdrop-blur-sm border-b border-white/20"
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
                isScrolled ? "text-primary-800" : "text-white"
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
                  ? "text-primary-800 hover:text-primary-600"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {t("navigation.services")}
            </a>
            <a
              href={`/${locale}/about`}
              className={`text-sm xl:text-base transition-all duration-300 whitespace-nowrap ${
                isScrolled
                  ? "text-primary-800 hover:text-primary-600"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {t("navigation.about")}
            </a>
            <a
              href={`/${locale}/areas`}
              className={`text-sm xl:text-base transition-all duration-300 whitespace-nowrap ${
                isScrolled
                  ? "text-primary-800 hover:text-primary-600"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {t("navigation.areas")}
            </a>
            <a
              href={`/${locale}/death-with-dignity`}
              className={`text-sm xl:text-base transition-all duration-300 whitespace-nowrap ${
                isScrolled
                  ? "text-primary-800 hover:text-primary-600"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {t("navigation.dignity")}
            </a>
            <a
              href={`/${locale}/useful-information`}
              className={`text-sm xl:text-base transition-all duration-300 whitespace-nowrap ${
                isScrolled
                  ? "text-primary-800 hover:text-primary-600"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {t("navigation.info")}
            </a>
            <a
              href={`/${locale}/contact`}
              className={`text-sm xl:text-base transition-all duration-300 whitespace-nowrap ${
                isScrolled
                  ? "text-primary-800 hover:text-primary-600"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {t("navigation.contact")}
            </a>
            <div className="flex-shrink-0">
              <LanguageSwitcher isScrolled={isScrolled} />
            </div>
            <Button
              variant="primary"
              size="default"
              onClick={() => window.open("tel:909-321-2255", "_self")}
              className="px-3 xl:px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm xl:text-base flex-shrink-0"
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
            {/* Curved Menu Button for Tablet */}
            <div
              onClick={handleMenuClick}
              className="w-12 h-12 flex items-center justify-center cursor-pointer bg-transparent"
            >
              <div className="relative w-8 h-6 flex flex-col justify-between items-center">
                <span
                  className={`block h-1 w-7 transition-transform duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  } ${isScrolled ? "bg-black" : "bg-white"}`}
                ></span>
                <span
                  className={`block h-1 w-7 transition-opacity duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  } ${isScrolled ? "bg-black" : "bg-white"}`}
                ></span>
                <span
                  className={`block h-1 w-7 transition-transform duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-3" : ""
                  } ${isScrolled ? "bg-black" : "bg-white"}`}
                ></span>
              </div>
            </div>
          </div>

          {/* Mobile menu button - Shows below md: (below 768px) */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Curved Menu Button for Mobile */}
            <div
              onClick={handleMenuClick}
              className="w-12 h-12 flex items-center justify-center cursor-pointer bg-transparent"
            >
              <div className="relative w-8 h-6 flex flex-col justify-between items-center">
                <span
                  className={`block h-1 w-7 transition-transform duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  } ${isScrolled ? "bg-black" : "bg-white"}`}
                ></span>
                <span
                  className={`block h-1 w-7 transition-opacity duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  } ${isScrolled ? "bg-black" : "bg-white"}`}
                ></span>
                <span
                  className={`block h-1 w-7 transition-transform duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-3" : ""
                  } ${isScrolled ? "bg-black" : "bg-white"}`}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved Mobile Menu Component */}
      <CurvedMobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        isScrolled={isScrolled}
      />
    </nav>
  );
}
