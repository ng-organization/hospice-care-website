"use client";

import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactSplitSection() {
  const t = useTranslations();

  return (
    <section className="w-full bg-white relative overflow-hidden">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] relative">
          
          {/* Blurred Border Between Sections */}
          <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-gray-200/60 to-transparent z-10 hidden lg:block"></div>
          <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-8 bg-gradient-to-r from-white/80 via-transparent to-white/80 backdrop-blur-sm z-10 hidden lg:block"></div>
          
          {/* Left Side - Contact Information */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-16 flex items-center relative animate-fade-in-left">
            <div className="w-full max-w-lg mx-auto animate-slide-up">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extralight text-slate-800 mb-16 leading-tight">
                <span className="block text-slate-700">Contact</span>
                <span className="font-normal text-primary-600 block">
                  Information
                </span>
              </h2>
              
              <div className="space-y-10">
                {/* Phone Contact */}
                <div className="group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 group-hover:scale-110 transition-all duration-300">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 mb-3 text-lg">
                        Phone
                      </h3>
                      <a 
                        href="tel:909-321-2255" 
                        className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors mb-2 block"
                      >
                        909-321-2255
                      </a>
                      <a 
                        href="tel:909-256-4705" 
                        className="text-slate-600 text-sm hover:text-slate-800 transition-colors block mb-3"
                      >
                        Backup: 909-256-4705
                      </a>
                      <p className="text-slate-600 text-sm">
                        Available 24/7 for hospice care needs
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email Contact */}
                <div className="group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-200 group-hover:scale-110 transition-all duration-300">
                      <Mail className="w-6 h-6 text-secondary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 mb-3 text-lg">
                        Email
                      </h3>
                      <a 
                        href="mailto:info@hospicecare.com" 
                        className="text-xl font-semibold text-secondary-600 hover:text-secondary-700 transition-colors mb-3 block"
                      >
                        info@hospicecare.com
                      </a>
                      <p className="text-slate-600 text-sm">
                        Response within 2-4 hours during business hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office Location */}
                <div className="group animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-200 group-hover:scale-110 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-accent-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 mb-3 text-lg">
                        Office Location
                      </h3>
                      <a 
                        href="https://maps.google.com/?q=600+N.+Mountain+Ave,+Suite+D105,+Upland,+CA+91786"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-700 hover:text-slate-900 transition-colors leading-relaxed block mb-3"
                      >
                        600 N. Mountain Ave, Suite D105<br />
                        Upland, CA 91786
                      </a>
                      <div className="flex items-center space-x-2 text-sm text-slate-600">
                        <Clock className="w-4 h-4" />
                        <span>Monday - Friday: 9:00 AM - 5:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Google Map */}
          <div className="bg-gray-100 relative animate-fade-in-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.8826524545847!2d-117.65453892453656!3d34.097639273152555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c335a0b6f6b5e1%3A0x7c5b8d5f8c5d5e6!2s600%20N%20Mountain%20Ave%20%23D105%2C%20Upland%2C%20CA%2091786!5e0!3m2!1sen!2sus!4v1643723456789!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "600px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hospice Care Office Location - 600 N. Mountain Ave, Suite D105, Upland, CA 91786"
              className="absolute inset-0 w-full h-full"
            ></iframe>
            
            {/* Map Overlay with Office Info */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-primary-600" />
                <h4 className="font-semibold text-slate-800">Our Office</h4>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                600 N. Mountain Ave, Suite D105<br />
                Upland, CA 91786
              </p>
              <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                <Clock className="w-3 h-3" />
                <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}