"use client"

import type React from "react";
import { PageLayout } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import {
  Mail,
  Phone,
  Send,
  MapPin,
  Clock,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      label: "Phone",
      value: "+996777746577",
      href: "tel:+996777746577",
      icon: <Phone className="w-5 h-5" />,
      description: "24/7 Response",
    },
    {
      label: "Email",
      value: "bekca389@gmail.com",
      href: "bekca389@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      description: "24/7 Response",
    },
    {
      label: "Location",
      value: "Bishkek, Kyrgyz Republic",
      href: "#",
      icon: <MapPin className="w-5 h-5" />,
      description: "Available Worldwide",
    },
    {
      label: "Response Time",
      value: "24-48 Hours",
      href: "#",
      icon: <Clock className="w-5 h-5" />,
      description: "Typically",
    },
  ];

const socials = [
  {
    href: "https://www.instagram.com/bekca7727/",
    label: "Instagram",
    icon: "/instagram.png",
    lightBg: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500",
    darkBg: "dark:bg-gradient-to-br dark:from-purple-600 dark:via-pink-600 dark:to-orange-600",
  },
  {
    href: "https://www.facebook.com/jsbenzema.benzema.5/",
    label: "Facebook",
    icon: "/facebook.png",
    lightBg: "bg-gradient-to-br from-blue-600 to-blue-700",
    darkBg: "dark:bg-gradient-to-br dark:from-blue-700 dark:to-blue-800",
  },
  {
    href: "https://www.linkedin.com/in/beksultan-abdykalykov-7575a3147/",
    label: "LinkedIn",
    icon: "/linkedin.png",
    lightBg: "bg-gradient-to-br from-blue-500 to-blue-600",
    darkBg: "dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-700",
  },
  {
    href: "https://www.reddit.com/user/Witty_Resolution_750/",
    label: "Reddit",
    icon: "/reddit.png",
    lightBg: "bg-gradient-to-br from-orange-500 to-orange-600",
    darkBg: "dark:bg-gradient-to-br dark:from-orange-600 dark:to-orange-700",
  },
  {
    href: "https://github.com/Bekksultan",
    label: "GitHub",
    icon: "/github.png",
    lightBg: "bg-gradient-to-br from-gray-800 to-gray-900",
    darkBg: "dark:bg-gradient-to-br dark:from-gray-950 dark:to-black",
  },
  {
    href: "https://x.com/BBekca389",
    label: "Twitter / X",
    icon: "/twitter.png",
    lightBg: "bg-gradient-to-br from-gray-900 to-black",
    darkBg: "dark:bg-gradient-to-br dark:from-gray-900 dark:to-black",
  },
]

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 py-12 md:py-20 max-w-7xl">
          {/* Header Section */}
          <div className="mb-16 md:mb-20 text-center">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary uppercase tracking-widest">
                Lets Connect
              </span>
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                Get in{" "}
              </span>
              <span className="relative">
                <span className="text-primary">Touch</span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get in touch to discuss product design, creative collaborations, or simply connect for a friendly conversation.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact Information - Left Column */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-8">
                <div className="bg-card backdrop-blur-sm border border-border rounded-3xl p-8 shadow-xl shadow-primary/5">
                  <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    {contactInfo.map((item, idx) => (
                      <div
                        key={idx}
                        className="group p-4 rounded-2xl hover:bg-muted/30 transition-all duration-300 hover:scale-[1.02]"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                              {item.label}
                            </p>
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300"
                            >
                              {item.value}
                            </a>
                            <p className="text-sm text-muted-foreground mt-1">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="bg-card backdrop-blur-sm border border-border rounded-3xl p-8 shadow-xl shadow-primary/5">
                  <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    Connect With Me
                  </h3>
<div className="flex items-start justify-start gap-3 sm:gap-3 pt-6 px-2 flex-wrap">
  {socials.map((social, idx) => (
    <Button
      key={idx}
      variant="ghost"
      size="icon"
      className={`
        group relative rounded-2xl p-0
        transition-all duration-300 ease-out
        bg-gradient-to-br from-gray-50 to-gray-100/70 
        dark:from-gray-900/60 dark:to-gray-800/50
        hover:from-gray-100 hover:to-gray-200
        dark:hover:from-gray-800 dark:hover:to-gray-700
        border border-gray-300/80 dark:border-gray-700/70
        hover:border-gray-300/90 dark:hover:border-gray-600/90
        shadow-lg hover:shadow-xl hover:shadow-gray-200/50
        dark:shadow-gray-900/30 dark:hover:shadow-gray-800/40
        hover:scale-110 active:scale-95
        overflow-hidden
        backdrop-blur-md
        w-12 h-12 sm:w-14 sm:h-14
        before:absolute before:inset-0 before:rounded-2xl
        before:bg-gradient-to-br before:from-white/50 before:to-transparent
        before:dark:from-white/10 before:dark:to-transparent
        before:opacity-0 before:group-hover:opacity-100
        before:transition-opacity before:duration-500
      `}
      asChild
    >
      <a
        href={social.href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label={social.label}
        className="block focus:outline-none focus:ring-3 focus:ring-offset-2 focus:ring-current/30 focus:ring-offset-white dark:focus:ring-offset-gray-900 rounded-2xl"
      >
        {/* Animated gradient background */}
        <span 
          className={`
            absolute inset-0 rounded-2xl
            ${social.lightBg} ${social.darkBg}
            opacity-0 group-hover:opacity-100 group-hover:scale-105
            transition-all duration-500 ease-out
            mix-blend-overlay
          `} 
        />
        
        {/* Shimmer effect */}
        <span className="
          absolute -inset-[100%] rotate-12
          bg-gradient-to-r from-transparent via-white/20 to-transparent
          dark:via-white/10
          opacity-0 group-hover:opacity-100
          transition-opacity duration-700
          group-hover:animate-shimmer
        " />
        
        {/* Subtle outer glow */}
        <span className={`
          absolute -inset-1 rounded-2xl
          opacity-0 group-hover:opacity-70
          transition-opacity duration-500
          blur-md
          ${social.lightBg.replace('bg-', 'bg-').replace('dark:bg-', 'dark:bg-')}
        `} />
        
        {/* Icon container with floating effect */}
        <div className="relative z-10 p-3 sm:p-4">
          <div className="
            relative w-6 h-6 sm:w-8 sm:h-8
            flex items-center justify-center
            transition-all duration-500 ease-out
            group-hover:scale-110 group-hover:translate-y-[-2px]
          ">
            <Image
              src={social.icon}
              alt=""
              width={35}
              height={35}
              className="
                w-full h-full
                object-contain
                transition-all duration-300
                group-hover:brightness-110 group-hover:contrast-110
                drop-shadow-md
                filter group-hover:drop-shadow-lg
              "
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        
        {/* Enhanced Tooltip */}
        <span className="
          absolute -top-11 left-1/2 
          -translate-x-1/2 
          px-3 py-1.5
          bg-gray-900/95 dark:bg-gray-800/95
          text-white dark:text-gray-100
          text-xs font-semibold
          rounded-lg
          opacity-0 group-hover:opacity-100 group-hover:-top-12
          transition-all duration-300 ease-out
          whitespace-nowrap
          shadow-2xl
          pointer-events-none
          z-50
          backdrop-blur-sm
          before:content-['']
          before:absolute before:left-1/2 before:top-full
          before:-translate-x-1/2
          before:border-4
          before:border-transparent
          before:border-t-gray-900/95 dark:before:border-t-gray-800/95
          group-hover:delay-300
        ">
          {social.label}
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-current rounded-full opacity-60" />
        </span>
        
        {/* Click indicator ring */}
        <span className="
          absolute inset-0
          rounded-2xl
          ring-3 ring-current/20
          opacity-0 group-focus:opacity-100
          transition-opacity duration-200
          pointer-events-none
          scale-105
        " />
        
        {/* Ripple effect on click */}
        <span className="
          absolute inset-0 rounded-2xl
          bg-current opacity-0
          group-active:opacity-10
          group-active:scale-125
          transition-all duration-300
          pointer-events-none
        " />
      </a>
    </Button>
  ))}
</div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Column */}
            <div className="lg:col-span-3">
              <div className="bg-card backdrop-blur-sm border border-border rounded-3xl p-8 md:p-10 shadow-xl shadow-primary/5">
                <div className="mb-8">
                  <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    Send a Message
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Have a project in mind or just want to say hello? Fill out the form below
                    and I will get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2 h-14 rounded-2xl border border-border bg-background px-6 text-foreground placeholder:text-muted-foreground placeholder:text-sm
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus:border-primary
                          transition-all duration-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2 h-14 rounded-2xl border border-border bg-background px-6 text-foreground placeholder:text-muted-foreground placeholder:text-sm
                          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus:border-primary
                          transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, ideas, or questions..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-2 min-h-[180px] rounded-2xl border border-border bg-background px-6 py-4 text-foreground placeholder:text-muted-foreground placeholder:text-sm
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus:border-primary
                        transition-all duration-300 resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="group relative w-full md:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white dark:text-slate-950 rounded-2xl px-10 h-14 text-base font-semibold uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <> {/* Increased Send icon size */}
                            <Send className="w-12 h-12 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                            Send Message
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </Button>

                  </div>
                </form>
              </div>


            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}