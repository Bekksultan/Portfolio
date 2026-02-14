"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Eye, Grid3x3 } from "lucide-react"

/* ================= TYPES ================= */

type Category =
  | "All"
  | "E-commerce"
  | "Business & Creative"
  | "Infomational"
  | "Automation & Integrations"

interface Project {
  id: number
  title: string
  subtitle?: string
  category: Category[]
  image: string
  link?: string
  size: "small" | "medium" | "large"
}

/* ================= DATA ================= */

const projects: Project[] = [
    {
    id: 1,
    title: "AI Podcast ",
    subtitle: "AI Podcast-n8n+UGC",
    category: ["Automation & Integrations"],
    image: "/assets/projects/AI-n8n-UGC-Podcast.png",
    link: "https://github.com/Bekksultan/n8n-WaveSpeed-AI-Podcast",
    size: "medium",
  },
  {
    id: 2,
    title: "AI Logo-to-Ad",
    subtitle: "Turning static logos into video ads",
    category: ["Automation & Integrations"],
    image: "/assets/projects/ai-n8n-logo-animate.png",
    link: "https://github.com/Bekksultan/Veo3-Logo-Animate",
    size: "medium",
  },
    {
    id: 3,
    title: "AI Agent seller-responder",
    subtitle: "Social media auto-responder",
    category: ["Automation & Integrations"],
    image: "/assets/projects/autorespond-n8n.png",
    link: "https://github.com/Bekksultan/AI-Auto-respond-n8n",
    size: "medium",
  },
   {
    id: 4,
    title: "AI autopost with Blotato",
    subtitle: "Automated social media posting",
    category: ["Automation & Integrations"],
    image: "/assets/projects/ AI-n8n-autopost.png",
    link: "https://github.com/Bekksultan/AI-Autopost-Social-media",
    size: "medium",
  },
  {
    id: 5,
    title: "AI assitant Alfred ",
    subtitle: "AI-powered assistant bot",
    category: ["Automation & Integrations"],
    image: "/assets/projects/n8n-Alfred-AI-Assistant.png",
    link: "https://github.com/Bekksultan/Alfred-AI-Assitant",
    size: "medium",
  },
    {
    id: 6,
    title: "Veo3 + Personal n8n",
    subtitle: "Personalized video ads with Veo3",
    category: ["Automation & Integrations"],
    image: "/assets/projects/personal-veo-n8n.png",
    link: "https://github.com/Bekksultan/Veo3-Personal-video",
    size: "medium",
  },
  {
    id: 7,
    title: "Veo3 + UGC adverb n8n",
    subtitle: "UGC ads generated with GPT Image",
    category: ["Automation & Integrations"],
    image: "/assets/projects/Veo3+UGC-adverb-n8n.png",
    link: "https://github.com/Bekksultan/Veo3-UGC-adverb.json",
    size: "medium",
  },
  {
    id: 8,
    title: "Veo3 + NANOBANA  n8n",
    subtitle: "UGC ads with Nanobana",
    category: ["Automation & Integrations"],
    image: "/assets/projects/nanobanana-adverb- n8n.png",
    link: "https://github.com/Bekksultan/Veo3-Nanobanana-adverb.json",
    size: "medium",
  },
   {
    id: 9,
    title: "Kosh Debe",
    subtitle: "Village government website",
    category: ["Infomational"],
    image: "/assets/projects/village-goverment.png",
    link: "https://nozo.bekca.in/",
    size: "medium",
  },
   {
    id: 10,
    title: "Saintgroup-Development",
    subtitle: "Software services company",
    category: ["Business & Creative"],
    image: "/assets/projects/saintgroup.png",
    link: "https://saintgroup-development.com/",
    size: "medium",
  },
    {
    id: 11,
    title: "Afyx-gaming",
    subtitle: "Game boosting platform",
    category: ["E-commerce"],
    image: "/assets/projects/afyx-gaming.png",
    link: "https://afyx-gaming.net/",
    size: "medium",
  },
  {
    id: 12,
    title: "Nozo-gaming",
    subtitle: "Game boosting platform",
    category: ["E-commerce"],
    image: "/assets/projects/nozogaming.png",
    link: "https://nozo.bekca.in/",
    size: "medium",
  },
  {
    id: 13,
    title: "Hydrix",
    subtitle: "Surfboard shop",
    category: ["E-commerce"],
    image: "/assets/projects/hydrix.png",
    link: "https://hydrix.bekca.in/",
    size: "medium",
  },
  {
    id: 14,
    title: "E-Learning App",
    subtitle: "IT company platform",
    category: ["Business & Creative"],
    image: "/assets/projects/itcompany.png",
    link: "https://rooftek.bekca.in/",
    size: "medium",
  },
  {
    id: 15,
    title: "Meikin Furniture",
    subtitle: "Furniture Manufacturing Site",
    category: ["Business & Creative"],
    image: "/assets/projects/meikin.png",
    link: "https://meikin.bekca.in/",
    size: "medium",
  },
  {
    id: 16,
    title: "Sound KG",
    subtitle: "Musical instrument shop",
    category: ["E-commerce"],
    image: "/assets/projects/soundkg.png",
    link: "https://sound.kg/",
    size: "medium",
  },
    {
    id: 17,
    title: "Malvamebel",
    subtitle: "Furniture store",
    category: ["E-commerce"],
    image: "/assets/projects/malvamebel.png",
    link: "https://malvamebel.ru/design/",
    size: "medium",
  },
     {
    id: 18,
    title: "Elitasmile",
    subtitle: "Dental Clinic Website",
    category: ["E-commerce"],
    image: "/assets/projects/elitasmile.png",
    link: "https://elitasmile.com/en/",
    size: "medium",
  },

  {
    id: 19,
    title: "Compentek",
    subtitle: "Brand identity design",
    category: ["Business & Creative"],
    image: "/assets/projects/compentek.png",
    link: "https://compentek.fi/",
    size: "medium",
  },
  {
    id: 20,
    title: "Tapio",
    subtitle: "Premium online store",
    category: ["E-commerce"],
    image: "/assets/projects/tapio.png",
    link: "https://tapio.bekca.in/",
    size: "medium",
  },
  {
    id: 21,
    title: "Topchange",
    subtitle: "Currency exchange platform",
    category: ["Infomational"],
    image: "/assets/projects/topchange.png",
    link: "https://topchange.cz/",
    size: "medium",
  },
  {
    id: 22,
    title: "Parhaat",
    subtitle: "Online marketplace",
    category: ["Business & Creative"],
    image: "/assets/projects/parhaat.png",
    link: "https://parhaatvaatekaupat.fi/",
    size: "medium",
  },
  {
    id: 23,
    title: "Solheds",
    subtitle: "Wellness for Pets & Horses",
    category: ["E-commerce"],
    image: "/assets/projects/solheds.png",
    link: "https://solheds.com/en/home/",
    size: "medium",
  },
  {
    id: 24,
    title: "Everlast",
    subtitle: "IT company website",
    category: ["Business & Creative"],
    image: "/assets/projects/everlast.png",
    link: "https://everlastit.bekca.in/",
    size: "medium",
  },
  {
    id: 25,
    title: "Tilvintys",
    subtitle: "Product photography brand",
    category: ["Business & Creative"],
    image: "/assets/projects/tilvintys.png",
    link: "https://www.tinttimaisterin.fi/",
    size: "medium",
  },
  {
    id: 26,
    title: "Kyrgyz Guide",
    subtitle: "Travel and tourism platform",
    category: ["Business & Creative"],
    image: "/assets/projects/kyrgyzguide.png",
    link: "https://kyrgyzguides.com/",
    size: "medium",
  },
  {
    id: 27,
    title: "We-Land",
    subtitle: "Real estate branding",
    category: ["Business & Creative"],
    image: "/assets/projects/we-land.png",
    link: "https://www.welendllc.com/",
    size: "medium",
  },
  {
    id: 28,
    title: "Toi Service",
    subtitle: "Event services marketplace",
    category: ["Business & Creative"],
    image: "/assets/projects/toiservice.png",
    link: "https://toiservice.kg/",
    size: "medium",
  },
  {
    id: 29,
    title: "KKGTK",
    subtitle: "Corporate website",
    category: ["Infomational"],
    image: "/assets/projects/kkgtk.png",
    link: "https://kkgtk.kg/",
    size: "medium",
  },
]

const categories: Category[] = [
   "All",
   "E-commerce",
   "Business & Creative",
   "Infomational",
   "Automation & Integrations"
]

/* ================= COMPONENT ================= */

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<Category>("All")

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects
    return projects.filter((project) =>
      project.category.includes(activeFilter)
    )
  }, [activeFilter])

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* HEADER */}
        <div className="mb-14 md:mb-16 text-center">
   
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
               Portfolio {" "}
              </span>
              <span className="relative">
                <span className="text-primary">Showcase</span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore a curated collection of work across industries and digital platforms, showcasing creativity and real-world results.
            </p>
          </div>

{/* FILTERS - PROFESSIONAL GRADE, SINGLE ROW, CRYSTAL CLEAR */}
<div className="flex flex-nowrap items-center gap-1 sm:gap-2 mb-6 overflow-x-auto pb-2 ">
  {categories.map((category) => {
    const active = activeFilter === category
    const count =
      category === "All"
        ? projects.length
        : projects.filter((p) => p.category.includes(category)).length

    return (
      <button
        key={category}
        onClick={() => setActiveFilter(category)}
        className={`
          flex-shrink-0 inline-flex items-center gap-1.5
          px-4 py-2 text-base sm:text-base font-semibold
          rounded-full transition-all duration-150
          ${
            active
              ? // LIGHT MODE: BOLD PRIMARY - GUARANTEED VISIBILITY
                "bg-primary text-white border border-primary " +
                "shadow-md shadow-primary/40 " +
                // DARK MODE: EQUALLY BOLD
                "dark:bg-primary dark:text-neutral-950 dark:border-primary/80 " +
                "dark:shadow-lg dark:shadow-primary/50"
              : // LIGHT MODE: CLEAN, HIGH CONTRAST
                "bg-white text-gray-800 border border-gray-300 " +
                "hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900 " +
                "shadow-sm " +
                // DARK MODE: PERFECTLY VISIBLE
                "dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 " +
                "dark:hover:bg-gray-800 dark:hover:border-gray-600 dark:hover:text-white"
          }
        `}
      >
        <span className="whitespace-nowrap">{category}</span>
        <span
          className={`
            inline-flex items-center justify-center
            px-2 py-0.5 text-xs font-bold rounded-full
            min-w-[26px]
            ${
              active
                ? "bg-white/30 text-white " +
                  "dark:bg-black/30 dark:text-neutral-950"
                : "bg-gray-300 text-gray-800 " +
                  "dark:bg-gray-700 dark:text-gray-200"
            }
          `}
        >
          {count}
        </span>
      </button>
    )
  })}
</div>

      {/* RESULTS INFO */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
        <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
          <Grid3x3 className="h-4 w-4" />
          <span>
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filteredProjects.length}
            </span>{" "}
            of {projects.length} projects
          </span>
        </div>

        {activeFilter !== "All" && (
          <button
            onClick={() => setActiveFilter("All")}
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Clear filter
          </button>
        )}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          const card = (
            <div className="group relative overflow-hidden rounded-xl border-2 border-primary/80 bg-gradient-to-b from-white/5 to-transparent transition-all duration-500 hover:scale-[1.02] hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 flex flex-col">
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 text-xs rounded-full bg-black/80 text-white">
                    {project.category[0]}
                  </span>
                </div>

                {project.link && (
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-lg">
                      <ExternalLink className="h-4 w-4 text-black" />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.subtitle}
                  </p>
                )}

                <div className="mt-auto pt-3 opacity-0 group-hover:opacity-100 transition">
                  <div className="flex items-center gap-2 border-t border-white/10 pt-3">
                    <Eye className="h-3.5 w-3.5 text-primary" />
                    <span className="text-xs text-muted-foreground">
                      View live project
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )

          return project.link ? (
            <Link
              key={project.id}
              href={project.link}
              target="_blank"
              className="focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
            >
              {card}
            </Link>
          ) : (
            <div key={project.id}>{card}</div>
          )
        })}
      </div>
    </section>
  )
}
