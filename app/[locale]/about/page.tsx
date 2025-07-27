"use client";

import { AboutHeroSection } from "@/components/sections/about/AboutHeroSection";
import { ComplianceSection } from "@/components/sections/about/ComplianceSection";
import { LocationsSection } from "@/components/sections/about/LocationsSection";
import { MissionSection } from "@/components/sections/about/MissionSection";
import { ProgramSection } from "@/components/sections/about/ProgramSection";
import { PromiseSection } from "@/components/sections/about/PromiseSection";
import { useEffect, useRef, useState } from "react";

export default function AboutPage() {
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
        <AboutHeroSection />
        <MissionSection />
        <PromiseSection />
        <ProgramSection />
        <LocationsSection />
        <ComplianceSection />
      </main>
    </div>
  );
}
