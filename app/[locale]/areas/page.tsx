"use client";

import { AreasCTASection } from "@/components/sections/areas/AreasCTASection";
import { AreasHeroSection } from "@/components/sections/areas/AreasHeroSection";
import { CareSettingsSection } from "@/components/sections/areas/CareSettingsSection";
import { CountiesSection } from "@/components/sections/areas/CountiesSection";
import { OfficeSection } from "@/components/sections/areas/OfficeSection";
import { useEffect, useRef, useState } from "react";

export default function AreasPage() {
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

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      {/* Main Content Wrapper */}
      <main className="flex-1">
        <AreasHeroSection />
        <CountiesSection />
        <OfficeSection />
        <CareSettingsSection />
        <AreasCTASection />
      </main>
    </div>
  );
}
