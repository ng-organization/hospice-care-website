"use client";

import { useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isScrolled: boolean;
}

export function MobileMenu({ isOpen, onClose, isScrolled }: MobileMenuProps) {
  const t = useTranslations();
  const locale = useLocale();
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Handle click outside menu
  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === overlayRef.current) {
      onClose();
    }
  };

  const menuItems = [
    { href: `/${locale}/services`, label: t("navigation.services") },
    { href: `/${locale}/about`, label: t("navigation.about") },
    { href: `/${locale}/areas`, label: t("navigation.areas") },
    { href: `/${locale}/death-with-dignity`, label: t("navigation.dignity") },
    { href: `/${locale}/useful-information`, label: t("navigation.info") },
    { href: `/${locale}/contact`, label: t("navigation.contact") },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Overlay - darkened 1/4 screen */}
      <div
        ref={overlayRef}
        className="mobile-menu-overlay"
        onClick={handleOverlayClick}
      />
      
      {/* Menu Container - 3/4 screen slide-out from right */}
      <div
        ref={menuRef}
        className={`mobile-menu-container ${isOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={t("navigation.mobileMenu")}
      >
        {/* Close Button */}
        <button
          className="mobile-menu-close"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        {/* Menu Content */}
        <div className="mobile-menu-content">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <img
              src="/assets/logo.png"
              alt="IE Community Hospice Logo"
              className="w-12 h-12"
            />
            <span className="ml-3 text-xl font-semibold text-primary-800">
              {t("navigation.companyName")}
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="mobile-menu-nav">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="mobile-menu-nav-link"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="flex justify-center mt-8 mb-6">
            <LanguageSwitcher isScrolled={true} />
          </div>

          {/* Call Button */}
          <div className="flex justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                window.open("tel:909-321-2255", "_self");
                onClose();
              }}
              className="w-full max-w-xs"
            >
              <Phone className="w-5 h-5 mr-2" />
              {t("navigation.callNow")}
            </Button>
          </div>

          {/* Contact Information */}
          <div className="mt-8 text-center text-sm text-gray-600">
            <p className="mb-2">{t("footer.phone")}: (909) 321-2255</p>
            <p className="mb-2">{t("footer.email")}: info@iecommunity.com</p>
            <p className="text-xs opacity-75">
              {t("footer.availableHours")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;