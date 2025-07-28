"use client";

import { LevelsOfCareSection } from "@/components/sections/services/LevelsOfCareSection";
import { ServicesCTASection } from "@/components/sections/services/ServicesCTASection";
import { ServicesHeroSection } from "@/components/sections/services/ServicesHeroSection";
import { ServicesOverviewSection } from "@/components/sections/services/ServicesOverviewSection";
import { TeamSection } from "@/components/sections/services/TeamSection";
import { PageTransition } from "@/components/motion";

export default function ServicesPage() {
  return (
    <PageTransition className="min-h-screen flex flex-col scroll-smooth">
      <main className="flex-1">
        <ServicesHeroSection />
        <ServicesOverviewSection />
        <LevelsOfCareSection />
        <TeamSection />
        <ServicesCTASection />
      </main>
    </PageTransition>
  );
}
