"use client";

import { CTA } from "@/components/ui/call-to-action";
import { AreasHeroSection } from "@/components/sections/areas/AreasHeroSection";
import { CareSettingsSection } from "@/components/sections/areas/CareSettingsSection";
import { CountiesSection } from "@/components/sections/areas/CountiesSection";
import { OfficeSection } from "@/components/sections/areas/OfficeSection";
import { PageTransition } from "@/components/motion";

export default function AreasPage() {
  return (
    <PageTransition className="min-h-screen flex flex-col scroll-smooth">
      <main className="flex-1">
        <AreasHeroSection />
        <CountiesSection />
        <OfficeSection />
        <CareSettingsSection />
        <CTA variant="areas" />
      </main>
    </PageTransition>
  );
}
