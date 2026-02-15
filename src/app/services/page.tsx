"use client"

import { PageLayout } from "@/components/page-layout"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Palette,
  Code,
  Smartphone,
  Search,
  Zap,
  Lightbulb,
  ArrowUpRight,
  CheckCircle,
  Clock,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Complete user interface and user experience design for web and mobile applications.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "from-purple-500 to-pink-500",
    duration: "2-4 weeks",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom website development using modern technologies and frameworks.",
    features: ["Responsive Design", "Performance Optimization", "CMS Integration", "E-commerce"],
    color: "from-blue-500 to-cyan-500",
    duration: "3-6 weeks",
  },
  {
    icon: Smartphone,
    title: "Mobile App Design",
    description: "Native and cross-platform mobile application design and development.",
    features: ["iOS & Android", "App Store Optimization", "Push Notifications", "Analytics"],
    color: "from-green-500 to-emerald-500",
    duration: "4-8 weeks",
  },
{
  icon: Zap,
  title: "Automation Services",
  description: "Custom business process automation to save time, reduce costs, and eliminate repetitive tasks.",
  features: [
    "Workflow Automation",
    "CRM & API Integrations",
    "No-Code / Low-Code Automation",
    "AI-Powered Automation"
  ],
  color: "from-rose-500 to-red-500",
  duration: "1-3 weeks",
},
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Search engine optimization to improve your website's visibility and rankings.",
    features: ["Keyword Research", "On-page SEO", "Technical SEO", "Performance Audits"],
    color: "from-indigo-500 to-purple-500",
    duration: "1-2 weeks",
  },
  {
    icon: Lightbulb,
    title: "Consultation",
    description: "Strategic consultation on design, development, and digital transformation.",
    features: ["Strategy Planning", "Technology Assessment", "Design Review", "Project Planning"],
    color: "from-yellow-500 to-orange-500",
    duration: "Flexible",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Understanding your business goals, target audience, and project requirements through detailed discussions.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Developing a comprehensive strategy and project roadmap based on your specific needs and objectives.",
  },
  {
    step: "03",
    title: "Design",
    description: "Creating wireframes, mockups, and prototypes to visualize the final product before development.",
  },
  {
    step: "04",
    title: "Development",
    description: "Building your project using modern technologies and best practices for optimal performance.",
  },
  {
    step: "05",
    title: "Launch",
    description: "Deploying your project and providing training and support for a smooth transition.",
  },
]

const testimonials = [
  {
    name: "Anssi Karppinen",
    company: "AFRY, Qide ",
    role: "CEO",
    avatar: "/assets/testimonials/1584944997840.jpeg",
    content:
      "Beksultan has solid experience with Elementor and WordPress. He improved the layout of my pages and adjusted the design where needed. The structure is now clearer and easier for visitors to use. I’m satisfied with the final outcome.",
    rating: 5,
  },
  {
    name: "Suhrob Abdurahmanov",
    company: "Froxy Labs",
    role: "Senior UX/UI Designer",
    avatar: "/assets/testimonials/1756298970138.jpeg",
    content:
      "I had several problems on my WordPress website that were affecting its functionality. Beksultan carefully reviewed the site and identified the root causes. He fixed the issues without breaking anything else. After his work, the website started working smoothly again.",
    rating: 5,
  },
  {
    name: "Viktor Osmanov",
    company: "Creative Studio",
    role: "Marketing Manager",
    avatar: "/assets/testimonials/victor.jpeg",
    content:
      "Beksultan is a skilled WordPress developer who communicates effectively and builds clean, high-quality functionality. Professional, reliable, and easy to work with. The final result exceeded expectations.",
    rating: 5,
  },
]

export default function ServicesPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <PageLayout>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
              What I Can{" "}
            </span>
            <span className="relative inline-block">
              <span className="text-primary">Do For You</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto w-20 sm:w-24" />
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            I offer WordPress development, automation, and design services to build efficient, scalable, and user-friendly digital solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 px-2 sm:px-0">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative bg-muted overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`} />
              <CardHeader className="pb-2 sm:pb-3 lg:pb-4">
                <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                  <div className={`p-2 sm:p-2.5 lg:p-3 rounded-lg bg-gradient-to-r ${service.color} text-white flex-shrink-0`}>
                    <service.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <CardTitle className="text-sm sm:text-base lg:text-lg truncate">{service.title}</CardTitle>
                    <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
                      <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3 lg:h-4 lg:w-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-muted-foreground truncate">{service.duration}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 lg:space-y-4 flex-1">
                <CardDescription className="text-sm sm:text-sm line-clamp-2 sm:line-clamp-3 font-medium">
                  {service.description}
                </CardDescription>
                <div className="space-y-1.5 sm:space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 sm:gap-2">
                      <CheckCircle className="h-4 w-4 sm:h-4 sm:w-4 lg:h-4 lg:w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-sm break-words">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-12 px-2 sm:px-0">
          <div className="text-center space-y-2 sm:space-y-3 lg:space-y-4 max-w-3xl mx-auto">
            <Badge variant="outline" className="text-sm bg-fo sm:text-sm">Process</Badge>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">How I Work</h2>
            <p className="text-base sm:text-base text-muted-foreground px-4 sm:px-0">
              My proven 5-step process ensures that every project is delivered on time, within budget, and exceeds
              expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-5 lg:gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center space-y-2 sm:space-y-3 lg:space-y-4 px-2 sm:px-0">
                <div className="relative inline-block">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-base sm:text-lg lg:text-xl font-bold text-primary">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-7 lg:top-8 left-16 w-[calc(100%+1rem)] h-0.5 bg-border" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-[280px] sm:max-w-none mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-0">
          {[
            { icon: Users, value: "50+", label: "Happy Clients", color: "text-primary" },
            { icon: CheckCircle, value: "100+", label: "Projects Completed", color: "text-green-500" },
            { icon: Clock, value: "5+", label: "Years Experience", color: "text-blue-500" }
          ].map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="py-3 sm:py-4 lg:py-6 px-2 sm:px-4">
                <div className="flex items-center justify-center mb-1 sm:mb-2">
                  <stat.icon className={`h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 ${stat.color}`} />
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold">{stat.value}</div>
                <p className="text-sm sm:text-base text-muted-foreground font-medium mt-0.5 sm:mt-1">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10 px-2 sm:px-0">
          <div className="text-center space-y-2 sm:space-y-3 lg:space-y-4 max-w-3xl mx-auto">
            <Badge variant="outline" className="text-sm sm:text-sm">Testimonials</Badge>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">What Clients Say</h2>
            <p className="text-sm sm:text-base text-muted-foreground px-4 sm:px-0">
              Don&apos;t just take my word for it - hear from some of the amazing clients I have had the pleasure to work with.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-4">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2 sm:px-3 lg:px-4">
                    <Card className="bg-gradient-to-br from-background via-muted/30 to-background border-2 shadow-lg">
                      <CardContent className="py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
                        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                          {/* Quote Icon */}
                          <div className="flex justify-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-primary/10 flex items-center justify-center">
                              <svg
                                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                              </svg>
                            </div>
                          </div>

                          {/* Rating Stars */}
                          <div className="flex gap-1 justify-center">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400 fill-current"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                              </svg>
                            ))}
                          </div>

                          {/* Testimonial Content */}
                          <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed italic text-center text-pretty text-foreground/90 px-2 sm:px-4">
                            &ldquo;{testimonial.content}&rdquo;
                          </p>

                          {/* Author Info with Avatar */}
                          <div className="flex flex-col items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t">
                            <div className="relative">
                              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden ring-4 ring-primary/10">
                                <Image
                                  src={testimonial.avatar || "/placeholder.svg"}
                                  alt={testimonial.name}
                                  width={80}
                                  height={80}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                                <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-white" />
                              </div>
                            </div>
                            <div className="text-center space-y-0.5 sm:space-y-1">
                              <div className="font-bold text-sm sm:text-base lg:text-lg">{testimonial.name}</div>
                              <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">{testimonial.role}</div>
                              <div className="text-xs sm:text-sm text-primary font-medium">{testimonial.company}</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons - Hidden on mobile, shown on tablet/desktop */}
            <Button
              variant="outline"
              size="icon"
              className="hidden sm:flex absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 rounded-full shadow-xl bg-background hover:bg-muted hover:text-primary hover:border-primary dark:hover:border-primary transition-all duration-300 h-9 w-9 lg:h-11 lg:w-11 border-2"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4 lg:h-5 lg:w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hidden sm:flex absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 rounded-full shadow-xl bg-background hover:bg-muted hover:text-primary hover:border-primary dark:hover:border-primary transition-all duration-300 h-9 w-9 lg:h-11 lg:w-11 border-2"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5" />
            </Button>

            {/* Mobile Navigation Buttons - Shown only on mobile */}
            <div className="flex sm:hidden justify-between items-center mt-6 px-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-9 w-9 border-2"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-9 w-9 border-2"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6 sm:mt-8 lg:mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "w-6 sm:w-8 lg:w-10 bg-primary shadow-lg shadow-primary/50"
                      : "w-1.5 sm:w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 mx-2 sm:mx-0">
          <CardContent className="text-center py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4 text-balance">
              Ready to Start Your Project?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-5 lg:mb-6 max-w-2xl mx-auto px-4 sm:px-0">
              Let&apos;s discuss your ideas and create something amazing together. I am here to help bring your vision to
              life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Button size="lg" className="rounded-full w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8">
                <a href="/contact">Get Free Quote</a>
                <ArrowUpRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full bg-transparent w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8"
              >
                <a href="https://wa.me/996777746577">Schedule Call</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}
