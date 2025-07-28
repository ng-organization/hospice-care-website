"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Mail, Video, Clock, User, Heart, Users } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/motion";

export function DirectCommunicationHub() {
  const t = useTranslations();

  const communicationMethods = [
    {
      icon: Phone,
      title: "Call Us Directly",
      description: "Speak with our compassionate team immediately",
      primary: "909-321-2255",
      secondary: "Main line - Available 24/7",
      href: "tel:909-321-2255",
      bgColor: "bg-gradient-to-br from-primary-50 to-primary-100/50",
      iconColor: "text-primary-600",
      buttonStyle: "bg-primary-600 hover:bg-primary-700"
    },
    {
      icon: MessageCircle,
      title: "Text Message",
      description: "Send us a text for quick questions",
      primary: "909-321-2255",
      secondary: "Text messaging available",
      href: "sms:909-321-2255",
      bgColor: "bg-gradient-to-br from-secondary-50 to-secondary-100/50",
      iconColor: "text-secondary-600",
      buttonStyle: "bg-secondary-600 hover:bg-secondary-700"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Detailed inquiries and documentation",
      primary: "info@hospicecare.com",
      secondary: "Response within 2-4 hours",
      href: "mailto:info@hospicecare.com",
      bgColor: "bg-gradient-to-br from-accent-50 to-accent-100/50",
      iconColor: "text-accent-600",
      buttonStyle: "bg-accent-600 hover:bg-accent-700"
    },
    {
      icon: Video,
      title: "Video Consultation",
      description: "Schedule a virtual meeting with our team",
      primary: "Schedule Now",
      secondary: "Secure, HIPAA-compliant video calls",
      href: "tel:909-321-2255",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100/50",
      iconColor: "text-green-600",
      buttonStyle: "bg-green-600 hover:bg-green-700"
    }
  ];

  const staffMembers = [
    {
      name: "Haydee Agojo",
      role: "Care Manager",
      specialty: "Family Support & Care Planning",
      image: "/image_asset/20250724_1445_Realistic Healthcare Portrait_remix_01k0z67dw8f99s2362jmy2mf9p.webp",
      contact: "Direct: 909-321-2255"
    },
    {
      name: "Care Team",
      role: "24/7 Support",
      specialty: "Emergency & Urgent Care",
      image: "/image_asset/20250724_1452_Realistic Caring Interaction_remix_01k0z6m6yke1av5srhgz6j4c9c.webp",
      contact: "Emergency: 909-321-2255"
    }
  ];

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-primary-50/20 observe-section">
      <div className="w-full px-4 md:px-8 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <StaggerContainer className="text-center mb-20">
            <StaggerItem>
              <Badge className="bg-primary-100 text-primary-800 px-6 py-3 rounded-full text-lg font-medium mb-6">
                Direct Communication
              </Badge>
            </StaggerItem>
            <StaggerItem>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                Connect With Us
                <br />
                <span className="font-semibold text-primary-600">
                  Right Now
                </span>
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                No forms, no waiting. Choose the way that feels most comfortable for you to reach out to our compassionate care team.
              </p>
            </StaggerItem>
          </StaggerContainer>

          {/* Communication Methods Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {communicationMethods.map((method, index) => (
              <StaggerItem key={index}>
                <Card className={`border-0 ${method.bgColor} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group`}>
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className={`w-8 h-8 ${method.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-800 mb-2 text-xl">
                          {method.title}
                        </h3>
                        <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                          {method.description}
                        </p>
                        <p className="text-2xl font-bold text-slate-800 mb-1">
                          {method.primary}
                        </p>
                        <p className="text-slate-500 text-sm mb-6">
                          {method.secondary}
                        </p>
                        <a href={method.href} className="block">
                          <Button className={`w-full ${method.buttonStyle} text-white py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg`}>
                            Connect Now
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Staff Section */}
          <StaggerContainer className="mb-16">
            <StaggerItem>
              <div className="text-center mb-12">
                <h3 className="text-3xl font-light text-slate-800 mb-4">
                  Meet Our <span className="font-semibold text-primary-600">Care Team</span>
                </h3>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Real people who understand and care about your family's journey
                </p>
              </div>
            </StaggerItem>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {staffMembers.map((member, index) => (
                <StaggerItem key={index}>
                  <Card className="border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="flex">
                        <div className="w-24 h-24 flex-shrink-0">
                          <img
                            src={member.image}
                            alt={`${member.name}, ${member.role}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6 flex-1">
                          <h4 className="font-semibold text-slate-800 text-lg mb-1">
                            {member.name}
                          </h4>
                          <p className="text-primary-600 font-medium text-sm mb-2">
                            {member.role}
                          </p>
                          <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                            {member.specialty}
                          </p>
                          <div className="flex items-center text-sm text-slate-500">
                            <Phone className="w-4 h-4 mr-2" />
                            {member.contact}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          {/* Emergency Contact Highlight */}
          <StaggerItem>
            <Card className="border-0 bg-gradient-to-r from-red-50 to-pink-50 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                  Emergency Support Available 24/7
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                  For medical emergencies, always call 911 first. For urgent hospice care needs, our team is here around the clock.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="bg-red-100 px-6 py-4 rounded-lg">
                    <p className="text-sm text-slate-600 mb-1">Medical Emergency</p>
                    <p className="text-3xl font-bold text-red-600">911</p>
                  </div>
                  <div className="bg-primary-50 px-6 py-4 rounded-lg">
                    <p className="text-sm text-slate-600 mb-1">Hospice Emergency</p>
                    <a href="tel:909-321-2255" className="text-3xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
                      909-321-2255
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>

        </div>
      </div>
    </section>
  );
}