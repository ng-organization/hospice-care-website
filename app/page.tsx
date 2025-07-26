"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Shield,
  Clock,
  Users,
  Phone,
  Mail,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  CheckCircle,
  Award,
  Stethoscope,
} from "lucide-react"

export default function HospiceCareWebsite() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Intersection Observer for animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll(".observe-section")
    sections.forEach((section) => observerRef.current?.observe(section))

    return () => observerRef.current?.disconnect()
  }, [])

  const testimonials = [
    {
      name: "Sarah Johnson",
      relation: "Daughter",
      content:
        "The compassionate care provided to my mother during her final months was extraordinary. The team made a difficult time bearable with their kindness and professionalism.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      relation: "Son",
      content:
        "I cannot express enough gratitude for the 24/7 support and comfort care. They treated my father with dignity and respect, making his final days peaceful.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      relation: "Wife",
      content:
        "The entire family felt supported throughout this journey. Their expertise in pain management and emotional support was invaluable during our most difficult time.",
      rating: 5,
    },
  ]

  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Comfort Care",
      description: "Comprehensive pain and symptom management focused on quality of life and dignity.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock medical support and emergency care available whenever needed.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Support",
      description: "Emotional and spiritual support for both patients and their loved ones throughout the journey.",
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Medical Equipment",
      description: "All necessary medical equipment and supplies provided and maintained in your home.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm border-b border-white/10 transition-all duration-300">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-white" />
              <span className="text-xl font-semibold text-white">Serenity Hospice</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-white hover:text-gray-300 transition-all duration-300">
                Services
              </a>
              <a href="#about" className="text-white hover:text-gray-300 transition-all duration-300">
                About
              </a>
              <a href="#testimonials" className="text-white hover:text-gray-300 transition-all duration-300">
                Testimonials
              </a>
              <a href="#contact" className="text-white hover:text-gray-300 transition-all duration-300">
                Contact
              </a>
              <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-4 space-y-4">
              <a href="#services" className="block text-white hover:text-gray-300 transition-colors">
                Services
              </a>
              <a href="#about" className="block text-white hover:text-gray-300 transition-colors">
                About
              </a>
              <a href="#testimonials" className="block text-white hover:text-gray-300 transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="block text-white hover:text-gray-300 transition-colors">
                Contact
              </a>
              <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Wrapper */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen w-full bg-gray-200 animate-pulse bg-cover bg-center bg-no-repeat flex items-center justify-center">
          {/* Background Image Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-800/90 to-accent-900/80"></div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-accent-800/60"></div>

          {/* Hero Content */}
          <div className="relative z-10 w-full px-4 md:px-8 lg:px-16 text-center">
            <div className="space-y-8 animate-fade-in">
              <Badge className="bg-white/20 text-white border border-white/30 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                Compassionate Care • 24/7 Support
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white leading-tight">
                Comfort and Dignity
                <br />
                <span className="font-semibold">When It Matters Most</span>
              </h1>

              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Providing compassionate hospice care that honors life's journey with professional medical support,
                emotional guidance, and unwavering dignity for patients and families.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-white text-slate-800 hover:bg-white/90 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Immediate Support
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg transition-all duration-300 bg-transparent backdrop-blur-sm"
                >
                  Learn More About Our Services
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/80 pt-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span>Medicare Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-white" />
                  <span>Licensed Professionals</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-white" />
                  <span>24/7 Availability</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float-delayed"></div>
        </section>

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>

        {/* Services Section */}
        <section id="services" className="min-h-screen w-full bg-white observe-section">
          <div className="w-full px-4 md:px-8 lg:px-16 py-24">
            <div className="text-center mb-16">
              <Badge className="bg-primary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Our Services
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                Comprehensive Care
                <br />
                <span className="font-semibold text-primary-600">Tailored to Your Needs</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Our interdisciplinary team provides personalized care plans designed to enhance comfort, manage
                symptoms, and support both patients and families throughout their journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-primary-50/30 hover:scale-105 hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-all duration-300 group-hover:scale-110">
                      <div className="text-primary-600">{service.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>

        {/* About Section */}
        <section id="about" className="min-h-screen w-full bg-gradient-to-br from-secondary-50/30 to-white observe-section">
          <div className="w-full px-4 md:px-8 lg:px-16 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
              <div className="space-y-8">
                <div>
                  <Badge className="bg-secondary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    About Serenity Hospice
                  </Badge>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                    Dedicated to
                    <br />
                    <span className="font-semibold text-secondary-600">Compassionate Excellence</span>
                  </h2>
                </div>

                <p className="text-xl text-slate-600 leading-relaxed">
                  For over 15 years, Serenity Hospice has been providing exceptional end-of-life care with a focus on
                  comfort, dignity, and family support. Our team of licensed healthcare professionals is committed to
                  ensuring that every patient receives personalized care in the comfort of their own home.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                    <div className="text-slate-600 font-medium">Families Served</div>
                  </div>
                  <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                    <div className="text-slate-600 font-medium">Years Experience</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
                    Meet Our Team
                  </Button>
                  <Button
                    variant="outline"
                    className="border-secondary-300 text-secondary-700 hover:bg-secondary-50 px-8 py-4 rounded-full text-lg bg-transparent transition-all duration-300"
                  >
                    View Credentials
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/placeholder.svg?height=600&width=600&text=Professional+hospice+care+team"
                    alt="Professional hospice care team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-200/50 rounded-full blur-xl"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-secondary-200/50 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>

        {/* Testimonials Section */}
        <section id="testimonials" className="min-h-[60vh] w-full bg-white observe-section">
          <div className="w-full px-4 md:px-8 lg:px-16 py-24">
            <div className="text-center mb-16">
              <Badge className="bg-primary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Testimonials
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                Words from
                <br />
                <span className="font-semibold text-primary-600">Grateful Families</span>
              </h2>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <Card className="border-0 bg-gradient-to-br from-primary-50/50 to-white shadow-2xl">
                <CardContent className="p-12 text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-2xl text-slate-700 leading-relaxed mb-8 italic font-light">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  <div>
                    <div className="font-semibold text-slate-800 text-xl">{testimonials[currentTestimonial].name}</div>
                    <div className="text-slate-500 text-lg">{testimonials[currentTestimonial].relation}</div>
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
                        index === currentTestimonial ? "bg-primary-600 scale-125" : "bg-primary-200 hover:bg-primary-300"
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
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen w-full bg-gradient-to-br from-secondary-50/30 to-white observe-section"
        >
          <div className="w-full px-4 md:px-8 lg:px-16 py-24">
            <div className="text-center mb-16">
              <Badge className="bg-secondary-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Contact Us
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-800 mb-6">
                We're Here to Help
                <br />
                <span className="font-semibold text-primary-600">24 Hours a Day</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Reach out to our compassionate team for immediate support, questions about our services, or to schedule
                a consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
              {/* Contact Form */}
              <Card className="border-0 bg-white shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-6">Send us a message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">First Name</label>
                        <Input className="border-secondary-200 focus:border-primary-400 rounded-lg h-12" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700">Last Name</label>
                        <Input className="border-secondary-200 focus:border-primary-400 rounded-lg h-12" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Email</label>
                      <Input type="email" className="border-secondary-200 focus:border-primary-400 rounded-lg h-12" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Phone</label>
                      <Input type="tel" className="border-secondary-200 focus:border-primary-400 rounded-lg h-12" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Message</label>
                      <Textarea
                        rows={4}
                        className="border-secondary-200 focus:border-primary-400 rounded-lg resize-none"
                        placeholder="How can we help you today?"
                      />
                    </div>

                    <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-6">Get in touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-lg">24/7 Support Line</h4>
                        <p className="text-slate-600 text-lg">(555) 123-4567</p>
                        <p className="text-sm text-slate-500">Available around the clock</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-lg">Email</h4>
                        <p className="text-slate-600 text-lg">info@serenityhospice.com</p>
                        <p className="text-sm text-slate-500">We'll respond within 2 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 text-lg">Office Location</h4>
                        <p className="text-slate-600 text-lg">
                          123 Compassion Drive
                          <br />
                          Peaceful Valley, CA 90210
                        </p>
                        <p className="text-sm text-slate-500">Mon-Fri 8AM-6PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <Card className="border-2 border-red-200 bg-red-50/50">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-red-800 mb-2 text-lg">Emergency Support</h4>
                    <p className="text-red-700 mb-4">
                      For immediate medical emergencies, call 911. For urgent hospice-related concerns:
                    </p>
                    <Button className="bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:scale-105">
                      <Phone className="w-4 h-4 mr-2" />
                      Emergency Line: (555) 911-HELP
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Footer */}
      <footer className="mt-auto w-full bg-slate-800 text-white">
        <div className="w-full px-4 md:px-8 lg:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Heart className="w-8 h-8 text-primary-400" />
                <span className="text-xl font-semibold">Serenity Hospice</span>
              </div>
              <p className="text-slate-300 mb-6 max-w-md text-lg leading-relaxed">
                Providing compassionate hospice care with dignity, comfort, and professional excellence for over 15
                years.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-primary-600 text-white px-4 py-2">Medicare Certified</Badge>
                <Badge className="bg-secondary-600 text-white px-4 py-2">Licensed Professionals</Badge>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Services</h4>
              <ul className="space-y-3 text-slate-300">
                <li>
                  <a href="#" className="hover:text-primary-400 transition-colors">
                    Comfort Care
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-400 transition-colors">
                    Pain Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-400 transition-colors">
                    Family Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-400 transition-colors">
                    Bereavement Care
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Contact</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="text-lg">(555) 123-4567</li>
                <li>info@serenityhospice.com</li>
                <li>
                  123 Compassion Drive
                  <br />
                  Peaceful Valley, CA 90210
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400">© {new Date().getFullYear()} Serenity Hospice. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                HIPAA Notice
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          size="lg"
          className="bg-primary-600 hover:bg-primary-700 text-white rounded-full w-16 h-16 shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <Phone className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}
