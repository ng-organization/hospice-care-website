"use client";

import { DignityHeroSection } from "@/components/sections/dignity/DignityHeroSection";
import { DignityPhilosophySection } from "@/components/sections/dignity/DignityPhilosophySection";
import { DignityDecisionSection } from "@/components/sections/dignity/DignityDecisionSection";
import { PageTransition } from "@/components/motion";

export default function DeathWithDignityPage() {
  return (
    <PageTransition className="min-h-screen flex flex-col scroll-smooth">
      <main className="flex-1">
        <DignityHeroSection />
        <DignityPhilosophySection />
        <DignityDecisionSection />
      </main>
    </PageTransition>
  );
} 