"use client"

import { PageLayout } from "@/components/page-layout"
import { TypewriterText } from "@/components/typewriter-text"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Download, Mail, Phone } from "lucide-react"
import Link from "next/link"

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
export default function HomePage() {
  return (
    <PageLayout>
      <div className="min-h-screen flex items-center justify-center overflow-hidden bg-background">
        <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0">
          <div className="my-auto space-y-6">
            <div className="space-y-2">
              <p className="text-muted-foreground text-xl md:text-2xl lg:text-3xl">Hello, I am </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                Beksultan Abdykalykov
              </h2>
              <div className="text-primary font-medium italic text-2xl h-8">
                <TypewriterText
                  texts={["WordPress Developer", "Front End Developer", "Automation Specialist"]}
                  typingSpeed={80}
                  deletingSpeed={50}
                  pauseDuration={2000}
                />
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-[60ch] leading-relaxed italic">
              I specialize in building dynamic WordPress websites, crafting responsive front-end experiences, and
              automating workflows to boost productivity. With a passion for clean code and efficient solutions, I help
              businesses establish their digital presence and streamline their operations.
            </p>

 <div className="flex flex-col sm:flex-row gap-4 pt-6">
  {/* Download Button - Shine 3D */}

  <Button size="lg"
    className="group relative  rounded-xl backdrop-blur-xl border-2 border-primary bg-gradient-to-br from-indigo-900/40 via-black-900/60 to-black/80 shadow-2xl hover:shadow-primary-500/30 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-primary overflow-hidden"
  >
    <div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
    ></div>

    <div
      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-indigo-400/20 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    ></div>

    <div className="relative z-10 flex items-center gap-4">

         <Download className=" h-6 w-6 text-white group-hover:text-indigo-300 transition-all duration-300 group-hover:scale-110 drop-shadow-lg" />
      <div className="">
        <a href="./Beksultan-CV-20260214.pdf" target="_blank" 
  rel="noopener noreferrer" className="text-white font-bold text-md uppercase group-hover:text-indigo-300 transition-colors duration-300 drop-shadow-sm">
         Download CV
        </a>
      </div>

    </div>
  </Button>




  {/* Contact Button - Outline Shine 3D */}
  <Button
    variant="secondary"
    size="lg"
    className="relative py-2.5 px-5 text-sm rounded-xl border-2 bg-primary/20 border-primary text-primary/100 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-primary hover:text-white dark:hover:text-slate-950"
    asChild
  >
    <Link href="/contact">
      <span className="relative z-10 flex items-center transition-colors duration-300 drop-shadow-sm">
        <Mail className="mr-3 h-8 w-8" />
         <p className="font-medium text-md uppercase transition-colors duration-300 drop-shadow-sm">
        Contact Me
        </p>
      </span>
      <span className="absolute inset-0 z-0 bg-white/30 blur-lg opacity-10" />
    </Link>
  </Button>

</div>

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

            <div className="flex items-center gap-4 pt-6 text-md text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+996 777746577</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>bekca389@gmail.com</span>
              </div>
            </div>
          </div>

<div className="relative flex items-center justify-center lg:justify-end -mt-16">
  <div className="relative group">
    {/* Main tech glow - darker for contrast */}
    <div className="absolute  scale-125" />
    
    {/* Animated code-like rings */}
    <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700 animate-spin-slow" style={{animationDuration: '20s'}} />
    
    {/* Pulsing border effect */}
    <div className="absolute -inset-1 border-2 border-dashed border-blue-400/30 rounded-full animate-pulse"></div>
    
    {/* Main image container with coding theme */}
    <div className="relative rounded-full border-2 border-gray-700 shadow-2xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
      <div className="relative h-[280px] w-[280px] sm:h-[320px] sm:w-[320px] md:h-[380px] md:w-[380px] lg:h-[420px] lg:w-[420px]">
        <Avatar className="w-full h-full rounded-full transform group-hover:scale-105 transition-transform duration-500">
          <AvatarImage 
            src="./main-photo.png" 
            alt="Beksultan Abdykalykov" 
            className="object-cover w-full h-full"
          />
          <AvatarFallback className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
            BA
          </AvatarFallback>
        </Avatar>
        
        {/* Code overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
      </div>
      
      {/* Available badge - moved up and styled like terminal */}
      <div className="absolute bottom-4 right-4 left-4 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 text-green-400 font-mono font-semibold px-4 py-3 rounded-lg shadow-2xl flex items-center justify-center gap-3 group-hover:scale-105 transition-all duration-300 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
          </div>
          <span className="text-sm tracking-wider">$ STATUS</span>
        </div>
        <span className="text-green-300 font-bold text-sm">AVAILABLE</span>
      </div>
    </div>
    
    {/* Coding-themed floating elements */}
    <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg rotate-45 animate-float shadow-lg">
      <div className="absolute inset-1 bg-blue-900/20 rounded-lg"></div>
    </div>
    
    <div className="absolute -bottom-6 right-6 w-6 h-6 bg-gradient-to-br from-indigo-500 to-pink-400 rounded-lg animate-float" style={{animationDelay: '1.5s'}}>
      <div className="absolute inset-1 bg-indigo-900/20 rounded-lg"></div>
    </div>
    
    <div className="absolute top-1/3 -right-6 w-7 h-7 bg-gradient-to-br from-green-500 to-emerald-400 rounded-lg animate-float" style={{animationDelay: '0.8s'}}>
      <div className="absolute inset-1 bg-green-900/20 rounded-lg"></div>
    </div>
    
    {/* Binary code animation overlay */}
    <div className="absolute inset-0 overflow-hidden rounded-full opacity-10 pointer-events-none">
      <div className="absolute top-0 left-0 text-blue-400 text-xs font-mono animate-marquee whitespace-nowrap">
        10101010 01010101 11110000 00001111 10101010 01010101
      </div>
      <div className="absolute bottom-0 right-0 text-green-400 text-xs font-mono animate-marquee-reverse whitespace-nowrap">
        11001100 00110011 10101010 01010101 11001100 00110011
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </PageLayout>
  )
}
