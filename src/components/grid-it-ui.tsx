'use client'

import Image from 'next/image'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const iconsDev: Record<string, string> = {
  html5: "/assets/fb-icons/Html5.png",
  css3: "/assets/fb-icons/Css3.png",
  javascript: "/assets/fb-icons/Javascript.png",
  nodejs: "/assets/fb-icons/Nodejs.png",
  jquery: "/assets/fb-icons/Jquery.png",
  react: "/assets/fb-icons/FileTypeReactjs.png",
  vue: "/assets/fb-icons/Vuejs.png",
  svelte: "/assets/fb-icons/Svelte.png",
  next: "/assets/fb-icons/Nextjs.png",
  typescript: "/assets/fb-icons/Typescript.png",
  vite: "/assets/fb-icons/Vitejs.png",
  expo: "/assets/fb-icons/expo.png",
  php: "/assets/fb-icons/Php.png",
  python: "/assets/fb-icons/Python.png",
  sass: "/assets/fb-icons/Sass.png",
  bootstrap: "/assets/fb-icons/Bootstrap.png",
  tailwind: "/assets/fb-icons/Tailwindcss.png",
  uikit: "/assets/fb-icons/Uikit.png",
  figma: "/assets/fb-icons/Figma.png",
  postgres: "/assets/fb-icons/Postgresql.png",
  mysql: "/assets/fb-icons/Mysql.png",
  mongodb: "/assets/fb-icons/Mongodb.png",
  firebase: "/assets/fb-icons/Firebase.png",
  supabase: "/assets/fb-icons/Supabase.png",
  git: "/assets/fb-icons/Git.png",
  docker: "/assets/fb-icons/DockerWordmark.png",
  wordpress: "/assets/fb-icons/Wordpress.png",
  woocommerce: "/assets/fb-icons/Woocommerce.png",
  shopify: "/assets/fb-icons/Shopify.png",
  webpack: "/assets/fb-icons/Webpack.png",
  unrealengine: "/assets/fb-icons/unreal-engine.png",
  unity: "/assets/fb-icons/Unity.png",
}

const iconsAI: Record<string, string> = {
  n8n: "/assets/ai-icons/n8n.png",
  make: "/assets/ai-icons/make.png",
  zapier: "/assets/ai-icons/Zapier.png",
  power: "/assets/ai-icons/power-automate.png",
  notion: "/assets/ai-icons/Notion.png", // Note: This seems like a ChatGPT icon, maybe rename the key?
  canva: "/assets/ai-icons/1691829400logo-canva-png.png",
  freepik: "/assets/ai-icons/freepik.png",
  mobirise: "/assets/ai-icons/mobirise.png",
  airtable: "/assets/ai-icons/Airtable.png",
  antigravity: "/assets/ai-icons/antigravity.png",
  cursor: "/assets/ai-icons/CursorAI.png",
  
}

export default function GridUI() {
  return (
    <div>
      {/* Icon Grid Cards Section */}
      <div className="mt-2 grid gap-6">
        {/* Programming Languages Card */}
        <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-background to-secondary/20">
          <div className="relative border-b border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-4"> {/* Changed border color */}
            <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:20px_20px]"></div>
            <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 bg-primary rounded-full animate-pulse"></span>
                  IT Programming Languages
                </h3>
                <p className="text-sm text-muted-foreground">Core development technologies</p>
              </div>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 self-start">
                {Object.keys(iconsDev).length} Tools
              </Badge>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 p-5">
            {Object.entries(iconsDev).map(([name, src]) => (
              <div
                key={name}
                className="group relative flex aspect-square items-center justify-center rounded-xl bg-gradient-to-br from-card to-muted border border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden" /* Changed border color */
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 p-3">
                  <Image
                    src={src}
                    alt={name}
                    width={50}
                    height={50}
                    className="object-contain transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-full left-0 right-0 bg-gradient-to-r from-primary/80 to-secondary/80 p-2 text-center text-xs text-white font-medium rounded-t-lg transition-all duration-300 group-hover:bottom-0">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Automation & AI Card */}
      <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-background to-secondary/20">
          <div className="relative border-b border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-4"> {/* Changed border color */}
            <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:20px_20px]"></div>
            <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <span className="h-3 w-3 bg-primary rounded-full animate-pulse"></span>
                  Automation & AI Tools
                </h3>
                <p className="text-sm text-muted-foreground">Workflow automation & intelligence</p>
              </div>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 self-start">
                  {Object.keys(iconsAI).length} Tools
              </Badge>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 p-5">
             {Object.entries(iconsAI).map(([name, src]) => (
              <div
                key={name}
                className="group relative flex aspect-square items-center justify-center rounded-xl bg-gradient-to-br from-card to-muted border border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden" /* Changed border color */
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 p-3">
                  <Image
                    src={src}
                    alt={name}
                    width={50}
                    height={50}
                    className="object-contain transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-full left-0 right-0 bg-gradient-to-r from-primary/80 to-secondary/80 p-2 text-center text-xs text-white font-medium rounded-t-lg transition-all duration-300 group-hover:bottom-0">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </div>
              </div>
            ))}
          </div>
        </Card>
 
      </div>
    </div>
  )
}