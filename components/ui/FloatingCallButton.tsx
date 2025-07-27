"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function FloatingCallButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        size="lg"
        onClick={() => window.open("tel:909-321-2255", "_self")}
        className="bg-primary-600 hover:bg-primary-700 text-white rounded-full w-16 h-16 shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <Phone className="w-6 h-6" />
      </Button>
    </div>
  );
}