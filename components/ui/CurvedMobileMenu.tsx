"use client";

import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { Phone, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface iNavItem {
  heading: string;
  href: string;
  subheading?: string;
  imgSrc?: string;
}

interface iNavLinkProps extends iNavItem {
  setIsActive: (isActive: boolean) => void;
  index: number;
}

interface iCurvedNavbarProps {
  setIsActive: (isActive: boolean) => void;
  navItems: iNavItem[];
}

interface iHeaderProps {
  navItems?: iNavItem[];
  footer?: React.ReactNode;
}

interface CurvedMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isScrolled: boolean;
}

const MENU_SLIDE_ANIMATION = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

const NavLink: React.FC<iNavLinkProps> = ({
  heading,
  href,
  setIsActive,
  index,
}) => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    const rect = ref.current!.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleClick = () => {
    return setIsActive(false);
  };

  return (
    <motion.div
      onClick={handleClick}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-center border-b border-black/10 py-6 md:py-8 transition-colors duration-500"
    >
      <Link ref={ref} onMouseMove={handleMouseMove} href={href} className="text-center">
        <div className="relative flex justify-center">
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: 0, scale: 1.05 },
            }}
            transition={{
              type: "spring",
              staggerChildren: 0.075,
              delayChildren: 0.25,
            }}
            className="relative z-10 block text-3xl md:text-4xl font-light text-black transition-colors duration-500 hover:text-primary-600"
          >
            {heading.split("").map((letter, i) => {
              return (
                <motion.span
                  key={i}
                  variants={{
                    initial: { x: 0 },
                    whileHover: { x: 0, y: -2 },
                  }}
                  transition={{ type: "spring", delay: i * 0.02 }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              );
            })}
          </motion.span>
        </div>
      </Link>
    </motion.div>
  );
};

const Curve: React.FC = () => {
  const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;

  const curve = {
    initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg
      className="absolute top-0 -left-[99px] w-[100px] stroke-none h-full"
      style={{ fill: "#ffffff" }}
    >
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  );
};

const CurvedNavbar: React.FC<
  iCurvedNavbarProps & { footer?: React.ReactNode }
> = ({ setIsActive, navItems, footer }) => {
  return (
    <motion.div
      variants={MENU_SLIDE_ANIMATION}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-[100dvh] w-screen max-w-screen-sm fixed right-0 top-0 z-[60] bg-white"
    >
      {/* Close Button */}
      <button
        onClick={() => setIsActive(false)}
        className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors duration-200 group"
        aria-label="Close menu"
      >
        <X className="w-5 h-5 text-black/70 group-hover:text-black transition-colors duration-200" />
      </button>

      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="pt-16 pb-8 px-8 md:px-12 text-center border-b border-black/10">
          <p className="text-black/60 uppercase text-sm font-medium tracking-wider">Navigation</p>
        </div>
        
        {/* Menu Items - Centered and evenly spaced */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-12">
          <nav className="space-y-2">
            {navItems.map((item, index) => {
              return (
                <NavLink
                  key={item.href}
                  {...item}
                  setIsActive={setIsActive}
                  index={index + 1}
                />
              );
            })}
          </nav>
        </div>
        
        {/* Footer */}
        <div className="pb-8">
          {footer}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

const CustomFooter: React.FC = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center gap-6 px-8 md:px-12">
      {/* Language Switcher */}
      <div className="flex justify-center">
        <LanguageSwitcher isScrolled={true} />
      </div>

      {/* Call Button */}
      <div className="flex justify-center w-full">
        <Button
          variant="primary"
          size="lg"
          onClick={() => {
            window.open("tel:909-321-2255", "_self");
          }}
          className="w-full max-w-xs rounded-full"
        >
          <Phone className="w-5 h-5 mr-2" />
          {t("navigation.callNow")}
        </Button>
      </div>

      {/* Contact Information */}
      <div className="text-center text-sm text-black/60 space-y-1">
        <p className="font-medium">{t("footer.contact.phone")}: (909) 321-2255</p>
        <p>{t("footer.contact.email")}: info@iecommunity.com</p>
        <p className="text-xs opacity-75 mt-2">
          {t("footer.contact.availableHours")}
        </p>
      </div>
    </div>
  );
};

const Header: React.FC<iHeaderProps> = ({
  navItems,
  footer = <CustomFooter />,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="relative">
        <div
          onClick={handleClick}
          className="w-12 h-12 flex items-center justify-center cursor-pointer bg-transparent"
        >
          <div className="relative w-8 h-6 flex flex-col justify-between items-center">
            <span
              className={`block h-1 w-7 bg-black transition-transform duration-300 ${isActive ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block h-1 w-7 bg-black transition-opacity duration-300 ${isActive ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block h-1 w-7 bg-black transition-transform duration-300 ${isActive ? "-rotate-45 -translate-y-3" : ""}`}
            ></span>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isActive && (
          <CurvedNavbar
            setIsActive={setIsActive}
            navItems={navItems || []}
            footer={footer}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export function CurvedMobileMenu({ isOpen, onClose, isScrolled }: CurvedMobileMenuProps) {
  const t = useTranslations();
  const locale = useLocale();

  const navItems: iNavItem[] = [
    {
      heading: t("navigation.services"),
      href: `/${locale}/services`,
    },
    {
      heading: t("navigation.about"),
      href: `/${locale}/about`,
    },
    {
      heading: t("navigation.areas"),
      href: `/${locale}/areas`,
    },
    {
      heading: t("navigation.dignity"),
      href: `/${locale}/death-with-dignity`,
    },
    {
      heading: t("navigation.info"),
      href: `/${locale}/useful-information`,
    },
    {
      heading: t("navigation.contact"),
      href: `/${locale}/contact`,
    },
  ];

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

  if (!isOpen) return null;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <CurvedNavbar
          setIsActive={onClose}
          navItems={navItems}
          footer={<CustomFooter />}
        />
      )}
    </AnimatePresence>
  );
}

export { Header };
export default CurvedMobileMenu;