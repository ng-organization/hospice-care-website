"use client";

import { AboutHeroSection } from "@/components/sections/about/AboutHeroSection";
import { ComplianceSection } from "@/components/sections/about/ComplianceSection";
import { LocationsSection } from "@/components/sections/about/LocationsSection";
import { MissionSection } from "@/components/sections/about/MissionSection";
import { ProgramSection } from "@/components/sections/about/ProgramSection";
import { PromiseSection } from "@/components/sections/about/PromiseSection";
import { PageTransition } from "@/components/motion";

export function AboutPageClient() {
  return (
    <PageTransition className="min-h-screen flex flex-col scroll-smooth">
      <main className="flex-1">
        <AboutHeroSection />
        <MissionSection />
        <PromiseSection />
        <ProgramSection />
        <LocationsSection />
        <ComplianceSection />
      </main>
    </PageTransition>
  );
}