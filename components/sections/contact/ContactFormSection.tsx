import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ContactFormSection() {
  const t = useTranslations();

  return (
    <section className="min-h-[80vh] w-full bg-white observe-section">
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-primary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              {t("contactPage.form.badge")}
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
              {t("contactPage.form.title")}
              <br />
              <span className="font-semibold text-primary-600">
                {t("contactPage.form.titleHighlight")}
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t("contactPage.form.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Form */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                  {t("contactPage.form.formTitle")}
                </h3>
                <p className="text-slate-600 mb-8">
                  {t("contactPage.form.formDescription")}
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {t("contactPage.form.firstName")} *
                      </label>
                      <Input 
                        placeholder={t("contactPage.form.firstNamePlaceholder")}
                        className="border-slate-200 focus:border-primary-500 h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {t("contactPage.form.lastName")} *
                      </label>
                      <Input 
                        placeholder={t("contactPage.form.lastNamePlaceholder")}
                        className="border-slate-200 focus:border-primary-500 h-12"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t("contactPage.form.phone")} *
                    </label>
                    <Input 
                      type="tel"
                      placeholder={t("contactPage.form.phonePlaceholder")}
                      className="border-slate-200 focus:border-primary-500 h-12"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t("contactPage.form.email")} *
                    </label>
                    <Input 
                      type="email"
                      placeholder={t("contactPage.form.emailPlaceholder")}
                      className="border-slate-200 focus:border-primary-500 h-12"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t("contactPage.form.inquiryType")} *
                    </label>
                    <Select>
                      <SelectTrigger className="border-slate-200 focus:border-primary-500 h-12">
                        <SelectValue placeholder={t("contactPage.form.inquiryTypePlaceholder")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="service">{t("contactPage.form.inquiryTypes.service")}</SelectItem>
                        <SelectItem value="referral">{t("contactPage.form.inquiryTypes.referral")}</SelectItem>
                        <SelectItem value="other">{t("contactPage.form.inquiryTypes.other")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t("contactPage.form.message")} *
                    </label>
                    <Textarea 
                      placeholder={t("contactPage.form.messagePlaceholder")}
                      rows={4}
                      className="border-slate-200 focus:border-primary-500"
                    />
                  </div>
                  
                  <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-lg transition-all duration-300 hover:scale-105">
                    {t("contactPage.form.submit")}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/image_asset/20250724_1119_医疗对话场景_remix_01k0ytffn2f68tgp5t2jpe0vry.webp"
                  alt="Healthcare consultation showing compassionate communication"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-200 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 