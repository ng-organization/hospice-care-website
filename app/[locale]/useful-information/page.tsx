"use client";

import { UsefulInfoHeroSection } from "@/components/sections/info/UsefulInfoHeroSection";
import { FAQ } from "@/components/ui/faq-section";
import { UsefulInfoResourcesSection } from "@/components/sections/info/UsefulInfoResourcesSection";
import { CTA } from "@/components/ui/call-to-action";
import { PageTransition } from "@/components/motion";

export default function UsefulInformationPage() {
  return (
    <PageTransition className="min-h-screen flex flex-col scroll-smooth">
      <main className="flex-1">
        <UsefulInfoHeroSection />
        <FAQ />
        <UsefulInfoResourcesSection />
        <CTA variant="useful-info" />
      </main>
    </PageTransition>
  );
} 