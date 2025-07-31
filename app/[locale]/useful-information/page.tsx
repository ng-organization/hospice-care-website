"use client";

import { UsefulInfoHeroSection } from "@/components/sections/info/UsefulInfoHeroSection";
import { UsefulInfoFAQSection } from "@/components/sections/info/UsefulInfoFAQSection";
import { UsefulInfoResourcesSection } from "@/components/sections/info/UsefulInfoResourcesSection";
import { CTA } from "@/components/ui/call-to-action";
import { PageTransition } from "@/components/motion";

export default function UsefulInformationPage() {
  return (
    <PageTransition className="min-h-screen flex flex-col scroll-smooth">
      <main className="flex-1">
        <UsefulInfoHeroSection />
        <UsefulInfoFAQSection />
        <UsefulInfoResourcesSection />
        <CTA variant="useful-info" />
      </main>
    </PageTransition>
  );
} 