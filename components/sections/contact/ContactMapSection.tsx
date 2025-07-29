"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Award, Shield, Users, Star, MapPin, Building, Clock } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/motion";

export function ContactMapSection() {
  const t = useTranslations();

  const trustIndicators = [
    {
      icon: Award,
      title: "Licensed & Certified",
      description: "State-licensed hospice care provider with full Medicare certification",
      bgColor: "from-amber-50 to-amber-100/50",
      iconColor: "text-amber-600"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Your privacy and health information are protected with the highest security standards",
      bgColor: "from-blue-50 to-blue-100/50",
      iconColor: "text-blue-600"
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Over 15 years of providing dignified, family-centered hospice care",
      bgColor: "from-red-50 to-red-100/50",
      iconColor: "text-red-600"
    },
    {
      icon: Users,
      title: "24/7 Support Team",
      description: "Round-the-clock availability with experienced healthcare professionals",
      bgColor: "from-green-50 to-green-100/50",
      iconColor: "text-green-600"
    }
  ];

  const testimonials = [
    {
      quote: "The care team treated my mother with such dignity and respect. They made her final months peaceful and comfortable.",
      author: "Maria S.",
      relationship: "Daughter",
      image: "/image_asset/20250724_1034_Realistic Care Interaction_remix_01k11a9631e8rv6vmsdb2qbgkh.webp"
    },
    {
      quote: "Professional, compassionate, and always available when we needed them. They supported our entire family through this difficult time.",
      author: "Robert T.",
      relationship: "Husband",
      image: "/image_asset/20250724_1452_Realistic Caring Interaction_remix_01k0z6m6yke1av5srhgz6j4c9c.webp"
    },
    {
      quote: "From the first consultation to the final goodbye, they were there for us. Their expertise and kindness made all the difference.",
      author: "Jennifer L.",
      relationship: "Son",
      image: "/image_asset/20250724_1137_Quilting Companions in Detail_remix_01k0yvf6vvfjs87kafjp4gsnqs.webp"
    }
  ];

  const communityPresence = [
    {
      title: "Upland Community",
      description: "Proudly serving families in Upland and surrounding areas since 2008",
      detail: "600 N. Mountain Ave, Suite D105"
    },
    {
      title: "Local Partnerships",
      description: "Collaborating with area hospitals, physicians, and healthcare facilities",
      detail: "Network of 15+ partner facilities"
    },
    {
      title: "Community Events",
      description: "Regular grief support groups and community education programs",
      detail: "Monthly community workshops"
    }
  ];

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-secondary-50/20 observe-section">
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <StaggerContainer className="text-center mb-20">
            <StaggerItem>
              <Badge className="bg-accent-100 text-accent-800 px-6 py-3 rounded-full text-lg font-medium mb-6">
                Community & Trust
              </Badge>
            </StaggerItem>
            <StaggerItem>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                Trusted in Our
                <br />
                <span className="font-semibold text-accent-600">
                  Community
                </span>
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                For over 15 years, we&apos;ve been a trusted partner to families in the Upland area, providing compassionate hospice care when it matters most.
              </p>
            </StaggerItem>
          </StaggerContainer>

          {/* Trust Indicators */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {trustIndicators.map((indicator, index) => (
              <StaggerItem key={index}>
                <Card className={`border-0 bg-gradient-to-br ${indicator.bgColor} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center`}>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <indicator.icon className={`w-8 h-8 ${indicator.iconColor}`} />
                    </div>
                    <h3 className="font-semibold text-slate-800 mb-2 text-lg">
                      {indicator.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {indicator.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Community Testimonials */}
          <StaggerContainer className="mb-20">
            <StaggerItem>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-light text-slate-800 mb-4">
                  What Families <span className="font-semibold text-primary-600">Are Saying</span>
                </h3>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Real stories from families we&apos;ve had the privilege to serve
                </p>
              </div>
            </StaggerItem>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <StaggerItem key={index}>
                  <Card className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-slate-700 italic mb-6 leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img
                            src={testimonial.image}
                            alt={`${testimonial.author}, ${testimonial.relationship}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800">
                            {testimonial.author}
                          </p>
                          <p className="text-slate-600 text-sm">
                            {testimonial.relationship}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          {/* Community Presence */}
          <StaggerContainer className="mb-16">
            <StaggerItem>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-light text-slate-800 mb-4">
                  Our <span className="font-semibold text-secondary-600">Community Impact</span>
                </h3>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Deeply rooted in the Upland community and surrounding areas
                </p>
              </div>
            </StaggerItem>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {communityPresence.map((item, index) => (
                <StaggerItem key={index}>
                  <Card className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <CardContent className="p-8">
                      <h4 className="font-semibold text-slate-800 text-xl mb-3">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      <p className="text-secondary-600 font-medium text-sm">
                        {item.detail}
                      </p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          {/* Interactive Map Area */}
          <StaggerItem>
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="relative h-96 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                <div className="text-center text-slate-700 relative z-10">
                  <MapPin className="w-16 h-16 mx-auto mb-6 text-primary-600" />
                  <h4 className="text-2xl font-semibold mb-4">Visit Our Office</h4>
                  <p className="text-lg mb-2">600 N. Mountain Ave, Suite D105</p>
                  <p className="text-lg mb-6">Upland, CA 91786</p>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <Clock className="w-5 h-5 text-secondary-600" />
                    <span className="font-medium">Monday - Friday: 9:00 AM - 5:00 PM</span>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=600+N.+Mountain+Ave,+Suite+D105,+Upland,+CA+91786"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300">
                      Get Directions
                    </Button>
                  </a>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-20 h-20 bg-white/20 rounded-full opacity-50"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-secondary-300/30 rounded-full opacity-50"></div>
                <div className="absolute top-1/2 right-8 w-12 h-12 bg-primary-300/40 rounded-full opacity-60"></div>
              </div>
            </Card>
          </StaggerItem>

        </div>
      </div>
    </section>
  );
} 