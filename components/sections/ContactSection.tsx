"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion";

export function ContactSection() {
  const t = useTranslations();

  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-gradient-to-br from-secondary-50/30 to-white"
    >
      <AnimatedSection animation="fadeInUp" delay={0.2}>
        <div className="w-full px-4 md:px-8 lg:px-16 py-24">
          <StaggerContainer className="text-center mb-16">
            <StaggerItem>
              <Badge className="bg-secondary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {t("contact.badge")}
              </Badge>
            </StaggerItem>
            <StaggerItem>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                {t("contact.title")}
                <br />
                <span className="font-semibold text-primary-600">
                  {t("contact.titleHighlight")}
                </span>
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {t("contact.description")}
              </p>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <AnimatedSection animation="slideInLeft" delay={0.3}>
              <Card className="border-0 bg-white shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                {t("contact.form.title")}
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">
                      {t("contact.form.firstName")}
                    </label>
                    <Input className="border-secondary-200 focus:border-primary-400 rounded-lg h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">
                      {t("contact.form.lastName")}
                    </label>
                    <Input className="border-secondary-200 focus:border-primary-400 rounded-lg h-12" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    {t("contact.form.email")}
                  </label>
                  <Input
                    type="email"
                    className="border-secondary-200 focus:border-primary-400 rounded-lg h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    {t("contact.form.phone")}
                  </label>
                  <Input
                    type="tel"
                    className="border-secondary-200 focus:border-primary-400 rounded-lg h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    {t("contact.form.message")}
                  </label>
                  <Textarea
                    rows={4}
                    className="border-secondary-200 focus:border-primary-400 rounded-lg resize-none"
                    placeholder={t("contact.form.messagePlaceholder")}
                  />
                </div>

                <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105">
                  {t("contact.form.submit")}
                </Button>
              </form>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection animation="slideInRight" delay={0.4}>
              <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                {t("contact.info.title")}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-lg">
                      {t("contact.info.phone.title")}
                    </h4>
                    <p className="text-slate-600 text-lg">
                      {t("contact.info.phone.number")}
                    </p>
                    <p className="text-sm text-slate-500">
                      {t("contact.info.phone.note")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-lg">
                      {t("contact.info.email.title")}
                    </h4>
                    <p className="text-slate-600 text-lg">
                      {t("contact.info.email.address")}
                    </p>
                    <p className="text-sm text-slate-500">
                      {t("contact.info.email.note")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-lg">
                      {t("contact.info.address.title")}
                    </h4>
                    <p className="text-slate-600 text-lg whitespace-pre-line">
                      {t("contact.info.address.address")}
                    </p>
                    <p className="text-sm text-slate-500">
                      {t("contact.info.address.note")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <Card className="border-2 border-red-200 bg-red-50/50">
              <CardContent className="p-6">
                <h4 className="font-semibold text-red-800 mb-2 text-lg">
                  {t("contact.emergency.title")}
                </h4>
                <p className="text-red-700 mb-4">
                  {t("contact.emergency.description")}
                </p>
                <Button
                  onClick={() => window.open("tel:909-321-2255", "_self")}
                  className="bg-primary-600 hover:bg-primary-700 text-white transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {t("contact.emergency.button")}
                </Button>
              </CardContent>
              </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}