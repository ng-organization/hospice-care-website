"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion";

export function TestimonialsSection() {
  const t = useTranslations();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: t("testimonials.items.0.name"),
      relation: t("testimonials.items.0.relation"),
      content: t("testimonials.items.0.content"),
      rating: 5,
    },
    {
      name: t("testimonials.items.1.name"),
      relation: t("testimonials.items.1.relation"),
      content: t("testimonials.items.1.content"),
      rating: 5,
    },
    {
      name: t("testimonials.items.2.name"),
      relation: t("testimonials.items.2.relation"),
      content: t("testimonials.items.2.content"),
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="min-h-[60vh] w-full bg-white"
    >
      <AnimatedSection animation="fadeInUp" delay={0.2}>
        <div className="w-full px-4 md:px-8 lg:px-16 py-24">
          <StaggerContainer className="text-center mb-16 max-w-7xl mx-auto">
            <StaggerItem>
              <Badge className="bg-primary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {t("testimonials.badge")}
              </Badge>
            </StaggerItem>
            <StaggerItem>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                {t("testimonials.title")}
                <br />
                <span className="font-semibold text-primary-600">
                  {t("testimonials.titleHighlight")}
                </span>
              </h2>
            </StaggerItem>
          </StaggerContainer>

          <AnimatedSection animation="scaleIn" delay={0.4}>
            <div className="relative max-w-4xl mx-auto">
              <Card className="border-0 bg-gradient-to-br from-primary-50/50 to-white shadow-2xl">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  )
                )}
              </div>

              <blockquote className="text-2xl text-slate-700 leading-relaxed mb-8 italic font-light">
                &ldquo;{testimonials[currentTestimonial].content}&rdquo;
              </blockquote>

              <div>
                <div className="font-semibold text-slate-800 text-xl">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-slate-500 text-lg">
                  {testimonials[currentTestimonial].relation}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 p-0 border-primary-300 hover:bg-primary-50 bg-transparent transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-primary-600 scale-125"
                      : "bg-primary-200 hover:bg-primary-300"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 p-0 border-primary-300 hover:bg-primary-50 bg-transparent transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
            </div>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </section>
  );
}