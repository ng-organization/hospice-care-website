"use client";

import { LevelsOfCareSection } from "@/components/sections/services/LevelsOfCareSection";
import { ServicesCTASection } from "@/components/sections/services/ServicesCTASection";
import { ServicesHeroSection } from "@/components/sections/services/ServicesHeroSection";
import { ServicesOverviewSection } from "@/components/sections/services/ServicesOverviewSection";
import { TeamSection } from "@/components/sections/services/TeamSection";
import { useEffect, useRef, useState } from "react";

export default function ServicesPage() {
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
        <ServicesHeroSection />
        <ServicesOverviewSection />
        <LevelsOfCareSection />
        <TeamSection />
        <ServicesCTASection />
      </main>
    </div>
  );
}
