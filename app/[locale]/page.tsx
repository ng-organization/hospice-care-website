"use client";

import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { DignitySection } from "@/components/sections/DignitySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InfoSection } from "@/components/sections/InfoSection";
import { ServiceAreasSection } from "@/components/sections/ServiceAreasSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { PageTransition } from "@/components/motion";

export default function HospiceCareWebsite() {
  return (
    <PageTransition className="min-h-screen flex flex-col scroll-smooth">
      <main className="flex-1">
        <HeroSection />
        <SectionDivider />
        <ServicesSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <TestimonialsSection />
        <SectionDivider />
        <ServiceAreasSection />
        <SectionDivider />
        <DignitySection />
        <SectionDivider />
        <InfoSection />
        <SectionDivider />
        <ContactSection />
      </main>
    </PageTransition>
  );
}
