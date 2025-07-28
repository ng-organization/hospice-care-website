"use client";

import { ContactHeroSection } from "@/components/sections/contact/ContactHeroSection";
import { ContactFormSection } from "@/components/sections/contact/ContactFormSection";
import { ContactInfoSection } from "@/components/sections/contact/ContactInfoSection";
import { ContactMapSection } from "@/components/sections/contact/ContactMapSection";
import { PageTransition } from "@/components/motion";

export default function ContactPage() {
  return (
    <PageTransition className="min-h-screen flex flex-col scroll-smooth">
      <main className="flex-1">
        <ContactHeroSection />
        <ContactFormSection />
        <ContactInfoSection />
        <ContactMapSection />
      </main>
    </PageTransition>
  );
} 