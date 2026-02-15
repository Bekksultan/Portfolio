"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code, 
  BookOpen, 
  Sparkles, 
  ChevronRight,
  Zap,
  Cpu,
  Palette,
  Database,
  Cloud,
  Terminal,
  Server,
  Globe,
  Layers,
  Workflow
} from "lucide-react"
import React from "react"

const skills = [
  { name: "WordPress Development", level: 95, category: "Core", icon: Globe },
  { name: "PHP & MySQL", level: 90, category: "Core", icon: Database },
  { name: "Custom Theme Development", level: 92, category: "Core", icon: Palette },
  { name: "Plugin Development", level: 81, category: "Core", icon: Layers },
  { name: "WooCommerce", level: 85, category: "E-Commerce", icon: Server },
  { name: "Shopify", level: 80, category: "E-Commerce", icon: Server },
  { name: "Elementor & Page Builders", level: 90, category: "Tools", icon: Cpu },
  { name: "BeBuilder & Page Builders", level: 80, category: "Tools", icon: Cpu },
  { name: "n8n ", level: 87, category: "Automation", icon: Zap },
  { name: "API Integration", level: 85, category: "Automation", icon: Workflow },
  { name: "Workflow Automation", level: 90, category: "Automation", icon: Sparkles },
  { name: "JavaScript & jQuery", level: 86, category: "Frontend", icon: Code },
  { name: "React & Next.js", level: 80, category: "Frontend", icon: Terminal },
  { name: "Tailwind & Bootstrap", level: 90, category: "Frontend", icon: Palette },
  { name: "REST API Development", level: 86, category: "Backend", icon: Cloud },
]

const categories = [
  { name: "Core", color: "bg-blue-500/20 text-blue-700 dark:text-blue-300" },
  { name: "Automation", color: "bg-purple-500/20 text-purple-700 dark:text-purple-300" },
  { name: "Frontend", color: "bg-green-500/20 text-green-700 dark:text-green-300" },
  { name: "Backend", color: "bg-orange-500/20 text-orange-700 dark:text-orange-300" },
  { name: "E-Commerce", color: "bg-pink-500/20 text-pink-700 dark:text-pink-300" },
  { name: "Tools", color: "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300" },
]

const experiences = [
{
    title: "Automation & Web Integration Specialist",
    company: "7-neiro AI",
    period: "2025 - Present",
    location: "Bishkek, Kyrgyz Republic",
    time: "Part time, Remote",
    description: "Design and implement intelligent automation workflows that connect websites, e-commerce platforms, and business tools. Specialize in reducing manual work, improving efficiency, and integrating WordPress/WooCommerce and Shopify with AI-powered processes using n8n and custom scripts.",
    achievements: [
    "Integrated AI-powered tools and automation solutions with WordPress sites to enhance functionality and user experience.",
    "Built automation pipelines connecting websites, CRMs, and marketing platforms, reducing manual data entry by 90%",
    "Orchestrated full-lifecycle website automations, integrating complex APIs that reduced manual data entry by 15 hours per week.",
    "Developed AI-driven solutions to assist sales and support, increasing lead-to-deal conversion by 25%",
    "Initiated internal automation framework reducing repetitive dev setup time by 40%"
    ],
    technologies: ["n8n", "JavaScript", "OpenAI API", "WordPress", "WooCommerce", "REST API", "Docker"],
    icon: Sparkles,
},
{
    title: "Health System Specialist",
    company: "Commodimex s.r.o",
    period: "2022 - 2025",
    location: "Prague, Czech Republic",
    time: "Full time, Remote",
    description: "Overseeing technical system integrity, specializing in IP surveillance management for exchange offices and real-time financial data synchronization for corporate web platforms.",
    achievements: [
      "Deployed and managed advanced IP camera systems across exchange offices to monitor foot traffic and ensure operational security.",
      "Developed a real-time exchange rate synchronization system for the company website, ensuring 100% accuracy with live market data.",
      "Optimized WordPress architecture to handle high-frequency data updates without compromising server performance or page speed.",
      "Engineered an AI-driven sales agent for a furniture company that handles customer inquiries and autonomously facilitates sales.",
      "Implemented secure data logging protocols for surveillance feeds, improving audit readiness and internal oversight.",
    ],
    technologies: ["IP Surveillance", "WordPress", "Real-time Data API", "PHP", "Network Security", "JavaScript"],
    icon: Sparkles,
  },

{
    title: "Web Developer",
    company: "Qide Ltd ",
    period: "2019 - 2025",
    location: "Helsinki, Finland",
    time: "Part time, Remote",
    description: "Designed and developed responsive websites for Finnish clients using both WordPress and modern front-end technologies. Worked on full website builds, UI/UX improvements, and custom feature development, combining business needs with clean and maintainable code.",
    achievements: [
      "Developed responsive websites using WordPress, React.js, and custom front-end solutions",
      "Built dynamic and interactive UI components with React and Tailwind CSS",
      "Customized WooCommerce stores with custom checkout flows, product filtering, and multi-language support.",
      "Created and customized WordPress themes and layouts tailored to client branding",
      "Collaborated directly with clients to translate business requirements into functional web solutions",
      "Improved website performance and Core Web Vitals through front-end optimization and structured asset management",
      "Maintained and enhanced existing websites by implementing new features and resolving technical issues"
    ],
    technologies: ["WordPress", "PHP", "Elementor", "ACF", "HTML5/CSS3", "JavaScript", "React.js",  "WooCommerce", "MySQL", "Tailwind", "Git", "REST API"],
    icon: Layers,
  },
   {
    title: "WordPress Developer",
    company: "EverlastIT",
    period: "2020 - 2022",
    location: "Prague, Czech Republic",
    time: "Part time, Remote",
  "description": "Developed, customized, and maintained WordPress websites for client projects. Handled full website builds as well as feature enhancements, bug fixes, and performance improvements, ensuring reliable and user-friendly solutions.",
  "achievements": [
    "Built new WordPress websites from concept to deployment based on client requirements",
    "Customized themes and extended functionality using PHP, JavaScript, and WooCommerce",
    "Diagnosed and resolved technical issues related to plugins, layouts, and integrations",
    "Improved website speed and responsiveness through optimization techniques and code cleanup",
    "Maintained and updated websites to ensure security, stability, and compatibility",
    "Communicated directly with clients to understand needs and deliver practical solutions"
  ],
    technologies: ["WordPress", "PHP", "WooCommerce", "Elementor", "MySQL", "JavaScript", "HTML/CSS", "Bootstrap", "Git"],
    icon: Sparkles,
  },
{
    title: "WordPress Developer (Intern)",
    company: "ItRestart",
    period: "2019 - 2020",
    location: "Bishkek, Kyrgyz Republic",
    time: "Full time",
    description: "Started my career journey by learning the fundamentals of web development and mastering page builders to support the agency's design team.",
    achievements: [
      "Mastered Elementor and WordPress basics to build and maintain landing pages for agency clients.",
      "Assisted senior developers in styling website elements using custom CSS and HTML to match design mockups.",
      "Learned to manage content updates and basic troubleshooting for various WordPress websites.",
      "Helped ensure all website layouts were fully responsive and functioned correctly on mobile devices.",
      "Gained hands-on experience in the professional development lifecycle, from local environment setup to live deployment.",
    ],
    technologies: ["WordPress", "Elementor", "MySQL", "HTML5/CSS3", "JavaScript", "Bootstrap", "Basic UI/UX"],
    icon: Code,
  },
]

const education = [
 {
    degree: "Bachelor of Science in Computer Science",
    institution: "International University of Kyrgyz Republic",
    period: "2013 - 2017",
    location: "Bishkek, Kyrgyz Republic",
    description: "Studied the core foundations of programming, focusing on web development and how databases work.",
    highlights: [
      "Top student with a high GPA (3.8/4.0).",
      "Successfully built a custom Content Management System (CMS) using PHP and MySQL for my final project.",
      "Active member of the university's Computer Science club.",
      "Consistently recognized for academic excellence throughout all four years."
    ],
  },
{
  degree: "English for Professional & Cross-Cultural Communication",
  institution: "Language House",
  period: "2016 - 2017",
  location: "Kuala Lumpur, Malaysia",
  description: "Intensive program focused on English proficiency, cultural awareness, and effective communication in an international environment.",
  highlights: [
    "Advanced English communication skills",
    "Cross-cultural understanding and global communication",
    "Academic and professional English usage",
    "Teamwork with international students",
  ],
},


]

const getCertIcon = (type: string) => {
  switch (type) {
    case "Course":
      return BookOpen
    case "Certificate":
      return Award
    default:
      return Sparkles
  }
}


const certifications = [
  {
    title: "n8n Automation Specialist",
    issuer: "RoboNuggets",
    date: "2025",
    type: "Course",
  },
  {
    title: "React & Tailwind Front-End Course",
    issuer: "JavaScriptMastery",
    date: "2022",
    type: "Course",
  },
  {
    title: "Web Designer Course",
    issuer: "WAYUP UX/UI",
    date: "2018",
    type: "Course"
  },
  {
    title: "PHP & MySQL Back-End Course",
    issuer: "itProger",
    date: "2018",
    type: "Certificate"
  },
]


export default function ResumePage() {
  const [activeTab, setActiveTab] = useState<"skills" | "experience" | "education">("skills")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12 lg:px-8">
          {/* Header */}
          <header className="relative mb-12 overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 backdrop-blur-sm">
            <div className="relative z-10 space-y-6 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">5+ Years of Experience</span>
              </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
               Background{" "}
              </span>
              <span className="relative">
                <span className="text-primary"> & Skills</span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            WordPress Developer & Automation Specialist crafting digital experiences
            </p>
            </div>
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />
          </header>

          {/* Tab Navigation */}
          <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">

          <button
              onClick={() => setActiveTab("education")}
              className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
                activeTab === "education"
                  ? "border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 shadow-xl shadow-primary/10"
                  : "border-border bg-card hover:border-primary/20 hover:shadow-lg"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`rounded-xl p-3 transition-all duration-300 ${
                  activeTab === "education"
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/10 text-primary group-hover:scale-110"
                }`}>
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold">Education</h3>
                  <p className={`text-sm transition-colors ${
                    activeTab === "education" ? "text-primary/80" : "text-muted-foreground"
                  }`}>
                    Academic background
                  </p>
                </div>
              </div>
              {activeTab === "education" && (
                <div className="absolute bottom-0 right-0 h-2 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-20" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
                activeTab === "experience"
                  ? "border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 shadow-xl shadow-primary/10"
                  : "border-border bg-card hover:border-primary/20 hover:shadow-lg"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`rounded-xl p-3 transition-all duration-300 ${
                  activeTab === "experience"
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/10 text-primary group-hover:scale-110"
                }`}>
                  <Briefcase className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold">Experience</h3>
                  <p className={`text-sm transition-colors ${
                    activeTab === "experience" ? "text-primary/80" : "text-muted-foreground"
                  }`}>
                    Professional journey
                  </p>
                </div>
              </div>
              {activeTab === "experience" && (
                <div className="absolute bottom-0 right-0 h-2 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-20" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
                activeTab === "skills"
                  ? "border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 shadow-xl shadow-primary/10"
                  : "border-border bg-card hover:border-primary/20 hover:shadow-lg"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`rounded-xl p-3 transition-all duration-300 ${
                  activeTab === "skills"
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/10 text-primary group-hover:scale-110"
                }`}>
                  <Code className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold">Skills</h3>
                  <p className={`text-sm transition-colors ${
                    activeTab === "skills" ? "text-primary/80" : "text-muted-foreground"
                  }`}>
                    Technical expertise
                  </p>
                </div>
              </div>
              {activeTab === "skills" && (
                <div className="absolute bottom-0 right-0 h-2 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-20" />
              )}
            </button>
          </div>

          {/* Content Sections */}
          <main className="space-y-12">
            {/* Skills Section */}
            {activeTab === "skills" && (
              <section className="animate-in fade-in duration-500">
                <div className="mb-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                        Technical Skills
                      </h2>
                      <p className="mt-1 text-muted-foreground">
                        Proficiency across WordPress development and automation technologies
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {categories.map((category) => {
                    const categorySkills = skills.filter((skill) => skill.category === category.name)
                    if (categorySkills.length === 0) return null

                    return (
                      <Card key={category.name} className="overflow-hidden border-0 bg-gradient-to-b from-card to-card/50 shadow-lg">
                        <div className="border-b border-border/50 p-6">
                          <div className="flex items-center justify-between">
                            <h3 className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold uppercase tracking-wider ${category.color}`}>
                              {category.name}
                            </h3>
                            <span className="text-sm font-medium text-muted-foreground">
                              {categorySkills.length} skills
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="space-y-6">
                            {categorySkills.map((skill) => {
                              const Icon = skill.icon
                              return (
                                <div
                                  key={skill.name}
                                  className="group relative space-y-3"
                                  onMouseEnter={() => setHoveredSkill(skill.name)}
                                  onMouseLeave={() => setHoveredSkill(null)}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <div className={`rounded-lg p-2 transition-all duration-300 ${
                                        hoveredSkill === skill.name
                                          ? "bg-primary text-primary-foreground scale-110"
                                          : "bg-primary/10 text-primary"
                                      }`}>
                                        <Icon className="h-4 w-4" />
                                      </div>
                                      <span className="font-medium text-foreground">{skill.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <span className={`text-sm font-bold transition-all duration-300 ${
                                        hoveredSkill === skill.name ? "text-primary scale-110" : "text-primary"
                                      }`}>
                                        {skill.level}%
                                      </span>
                                      {hoveredSkill === skill.name && (
                                        <ChevronRight className="h-4 w-4 text-primary animate-in slide-in-from-right-2" />
                                      )}
                                    </div>
                                  </div>
                                  <div className="relative h-2 overflow-hidden rounded-full bg-muted">
                                    <div
                                      className={`h-full rounded-full transition-all duration-700 ${
                                        hoveredSkill === skill.name
                                          ? "bg-gradient-to-r from-primary to-primary/80"
                                          : "bg-primary"
                                      }`}
                                      style={{ width: `${skill.level}%` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </Card>
                    )
                  })}
                </div>
              </section>
            )}

            {/* Experience Section */}
            {activeTab === "experience" && (
              <section className="animate-in fade-in duration-500">
                <div className="mb-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                        Work Experience
                      </h2>
                      <p className="mt-1 text-muted-foreground">
                        Professional journey in WordPress development and automation
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative space-y-8">
                  {/* Vertical Timeline Line */}
                  <div className="absolute left-0 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-transparent md:left-12 md:block" />

                  {experiences.map((exp, index) => {
                    const Icon = exp.icon
                    return (
                      <div key={index} className="relative md:pl-24">
                        {/* Timeline Node */}
                        <div className="absolute left-0 top-6 hidden h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/20 md:left-8 md:flex">
                          <Icon className="h-4 w-4 text-primary-foreground" />
                        </div>


                        <Card className="overflow-hidden border bg-gradient-to-br from-card to-card/50 shadow-xl transition-all duration-300 hover:shadow-2xl dark:shadow-slate-800">
                          <div className="p-8">
                            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                              <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                  <div className="rounded-lg bg-primary/10 p-2 md:hidden">
                                    <Icon className="h-5 w-5 text-primary" />
                                  </div>
                                  <div>
                                    <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                                    <div className="mt-2 flex flex-wrap items-center gap-2">
                                      <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                                        {exp.company}
                                      </span>
                                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                        📍 {exp.location}
                                      </span>
                                    </div>
                                    <h3 className="text-md ml-1 mt-3 text-foreground ">⏰ {exp.time}</h3>
                                    
                                  </div>
                                </div>
                              </div>
                              <div className="rounded-lg bg-muted/50 px-4 py-2">
                                <span className="text-sm font-semibold text-foreground">{exp.period}</span>
                              </div>
                            </div>

                            <p className="mb-6 leading-relaxed text-muted-foreground">{exp.description}</p>

                            <div className="mb-6 space-y-3">
                              {exp.achievements.map((achievement, i) => (
                                <div key={i} className="flex gap-3">
                                  <div className="mt-1.5 flex h-2 w-2 flex-shrink-0 items-center justify-center">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                  </div>
                                  <p className="leading-relaxed text-foreground">{achievement}</p>
                                </div>
                              ))}
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs backdrop-blur-sm"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </Card>
                      </div>
                    )
                  })}
                </div>
              </section>
            )}

            {/* Education & Certifications Section */}
            {activeTab === "education" && (
              <section className="animate-in fade-in duration-500">
                <div className="mb-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                        Education & Certifications
                      </h2>
                      <p className="mt-1 text-muted-foreground">
                        Academic background and professional certifications
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education Timeline */}
                  <div className="relative space-y-8">
                    <div className="absolute left-0 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-transparent md:left-12 md:block" />

                    {education.map((edu, index) => (
                      <div key={index} className="relative md:pl-24">
                        <div className="absolute left-0 top-6 hidden h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/20 md:left-8 md:flex">
                          <GraduationCap className="h-4 w-4 text-primary-foreground" />
                        </div>

                        <Card className="overflow-hidden border bg-gradient-to-br from-card to-card/50 shadow-xl transition-all duration-300 hover:shadow-2xl dark:shadow-slate-800">
                          <div className="p-8">
                            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                              <div className="space-y-3">
                                <h3 className="text-2xl font-bold text-foreground">{edu.degree}</h3>
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                                    {edu.institution}
                                  </span>
                                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                    📍 {edu.location}
                                  </span>
                                </div>
                              </div>
                              <div className="rounded-lg bg-muted/50 px-4 py-2">
                                <span className="text-sm font-semibold text-foreground">{edu.period}</span>
                              </div>
                            </div>

                            <p className="mb-6 leading-relaxed text-muted-foreground">{edu.description}</p>

                            <div className="space-y-3">
                              {edu.highlights.map((highlight, i) => (
                                <div key={i} className="flex gap-3">
                                  <div className="mt-1.5 flex h-2 w-2 flex-shrink-0 items-center justify-center">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                  </div>
                                  <p className="leading-relaxed text-foreground">{highlight}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Card>
                      </div>
                    ))}
                  </div>

{/* Certifications & Courses Grid */}
<div className="relative mt-16 space-y-8">
  <h3 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-foreground">
    <Award className="h-6 w-6 text-primary" />
    Professional Certifications & Courses
  </h3>

  <div className="grid gap-6 md:grid-cols-2">
    {certifications.map((cert, index) => (
      <Card
        key={index}
        className="group overflow-hidden border bg-gradient-to-br from-card to-card/50 p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:shadow-slate-800"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-2">
<div className="rounded-lg bg-primary/10 p-2">
  {React.createElement(getCertIcon(cert.type), { className: "h-4 w-4 text-primary" })}
</div>

              <Badge variant="outline" className="rounded-full">
                {cert.date}
              </Badge>
            </div>
            <h4 className="mb-2 text-lg font-semibold text-foreground">{cert.title}</h4>
            <p className="mb-3 text-sm font-medium text-primary">{cert.issuer}</p>
            {cert.type && (
              <p className="text-xs text-muted-foreground">Type: {cert.type}</p>
            )}

          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
        </div>
      </Card>
    ))}
  </div>
</div>

              </section>
            )}
          </main>
        </div>
      </div>
    </PageLayout>
  )
}
