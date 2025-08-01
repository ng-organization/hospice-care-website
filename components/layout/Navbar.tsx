"use client";

import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CurvedMobileMenu } from "@/components/ui/CurvedMobileMenu";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const navigationItems = [
    {
      title: t("navigation.services"),
      href: `/${locale}/services`,
    },
    {
      title: t("navigation.about"),
      href: `/${locale}/about`,
    },
    {
      title: t("navigation.areas"),
      href: `/${locale}/areas`,
    },
    {
      title: t("navigation.dignity"),
      href: `/${locale}/death-with-dignity`,
    },
    {
      title: t("navigation.info"),
      href: `/${locale}/useful-information`,
    },
    {
      title: t("navigation.contact"),
      href: `/${locale}/contact`,
    },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg shadow-gray-900/5"
          : "bg-white/10 backdrop-blur-md border-b border-white/20"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="/assets/logo.png"
              alt="IE Community Hospice Logo"
              className="w-8 h-8"
            />
            <span
              className={cn(
                "text-lg font-semibold transition-colors duration-300 hidden sm:block",
                isScrolled ? "text-slate-900" : "text-white"
              )}
            >
              {t("navigation.companyName")}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "transition-all duration-300 bg-transparent hover:bg-white/20 focus:bg-white/20",
                          isScrolled
                            ? "text-slate-700 hover:text-slate-900 hover:bg-slate-600 focus:bg-slate-600"
                            : "text-white/90 hover:text-white"
                        )}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher - Hidden on mobile */}
            <div className="hidden md:block">
              <LanguageSwitcher isScrolled={isScrolled} />
            </div>

            {/* Call Button */}
            <Button
              size="sm"
              onClick={() => window.open("tel:909-321-2255", "_self")}
              className={cn(
                "rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105",
                isScrolled
                  ? "bg-primary-600 hover:bg-primary-700 text-white"
                  : "bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
              )}
            >
              <Phone className="w-4 h-4 lg:mr-2" />
              <span className="hidden lg:inline">
                {t("navigation.callNow")}
              </span>
            </Button>

            {/* Mobile Menu Button - Original Implementation */}
            <div className="flex lg:hidden items-center space-x-2">
              <div
                onClick={handleMenuClick}
                className="w-12 h-12 flex items-center justify-center cursor-pointer bg-transparent"
              >
                <div className="relative w-8 h-6 flex flex-col justify-between items-center">
                  <span
                    className={`block h-1 w-7 transition-transform duration-300 ${
                      isMenuOpen ? "rotate-45 translate-y-2" : ""
                    } ${isScrolled ? "bg-slate-700" : "bg-white"}`}
                  ></span>
                  <span
                    className={`block h-1 w-7 transition-opacity duration-300 ${
                      isMenuOpen ? "opacity-0" : ""
                    } ${isScrolled ? "bg-slate-700" : "bg-white"}`}
                  ></span>
                  <span
                    className={`block h-1 w-7 transition-transform duration-300 ${
                      isMenuOpen ? "-rotate-45 -translate-y-3" : ""
                    } ${isScrolled ? "bg-slate-700" : "bg-white"}`}
                  ></span>
                </div>
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
    </header>
  );
}
