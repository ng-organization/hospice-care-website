"use client";

import { ContactHeroSection } from "@/components/sections/contact/ContactHeroSection";
import { ContactSplitSection } from "@/components/sections/contact/ContactSplitSection";
import { PageTransition } from "@/components/motion";

export default function ContactPage() {
  return (
    <PageTransition className="min-h-screen flex flex-col scroll-smooth">
      <main className="flex-1">
        <ContactHeroSection />
        <ContactSplitSection />
      </main>
    </PageTransition>
  );
} 