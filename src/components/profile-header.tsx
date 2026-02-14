"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TypewriterText } from "@/components/typewriter-text"
import { Card } from "@/components/ui/card"
import { CalendarCheck, GraduationCap, Mail, MapPin, Phone, ChevronsLeftRightEllipsis, Briefcase, Globe, Star, Users, MessageCircle } from "lucide-react"

// ----------------------
// Enhanced InfoItem Component
// ----------------------
function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-background to-accent/30 p-0.5 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="relative bg-card rounded-xl p-4 h-full">
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-primary/10 group-hover:border-b-primary/20 transition-colors"></div>
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider truncate">
              {label}
            </div>
            <div className="text-sm font-medium text-foreground mt-1 truncate">
              {value}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ----------------------
// ProfileHeader Component
// ----------------------
export function ProfileHeader({
  date = "27 October 1995",
  location = "Bishkek, Kyrgyz Republic",
  email = "bekca389@gmail.com",
  phone = "+996777746577",
  degree = "Bachelor",
  joinDate = "portfolio.bekca.in",
  department = "Available",
  skills = ["English, Russian, Turkish, Spanish",],
}: {
  date?:string
  email?: string
  phone?: string
  degree?: string
  location?: string
  joinDate?: string
  department?: string
  skills?: string[]
}) {
  return (
    <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-background to-secondary/20">
      {/* Animated Gradient Banner */}
<div className="relative h-64 bg-gradient-to-r from-primary/70 via-secondary/70 to-accent/70 md:h-64 bg-cover bg-center" style={{ backgroundImage: 'url(./assets/profile-back.jpg)' }}>
  <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
    Premium Member
  </div>
</div>



      {/* Profile Content */}
      <div className="relative px-6 pb-6">
        {/* Avatar */}
        <div className="flex flex-col items-center -mt-20 mb-4">
          <div className="relative">
            <Avatar className="h-36 w-36 border-4 border-card shadow-2xl ring-4 bg-primary ring-primary/20">
              <AvatarImage 
                src="./assets/profile-photo.jpg" 
                alt="Beksultan" 
                className="object-cover"
              />
              <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                BA
              </AvatarFallback>
            </Avatar>
            <div className="absolute bottom-2 right-2 bg-green-500 border-2 border-card rounded-full w-6 h-6 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Name + Title */}
          <div className="mt-4 text-center w-full">
            <h1 className="text-3xl font-bold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
              Beksultan Abdykalykov
            </h1>
            <div className="mt-1 text-primary font-semibold text-xl h-8 flex items-center justify-center">
              <TypewriterText
                texts={[
                  "WordPress Developer",
                  "Front End Developer",
                  "Automation Specialist",
                ]}
                typingSpeed={80}
                deletingSpeed={50}
                pauseDuration={2000}
              />
            </div>
          </div>
        </div>

        {/* Stats with Glowing Cards */}
<div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 mb-6 sm:mb-8">
  {/* Card 1 - Horizontal on mobile, vertical on desktop */}
  <div className="flex sm:flex-col items-center gap-3 sm:gap-2 bg-gradient-to-br from-primary/10 to-primary/10 dark:from-primary/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
    <div className="flex-shrink-0">
      <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 p-1.5 sm:p-2 rounded-lg sm:rounded-xl">
        <Star className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-yellow-500 fill-current" />
      </div>
    </div>
    <div className="flex-1 sm:text-center">
      <div className="flex sm:flex-col items-baseline sm:items-center gap-1 sm:gap-0">
        <span className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">100+</span>
        <span className="text-sm sm:text-lg text-muted-foreground ml-auto sm:ml-0">Projects Delivered</span>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="flex sm:flex-col items-center gap-3 sm:gap-2 bg-gradient-to-br from-primary/10 to-primary/10 dark:from-primary/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 border border-primary/10 hover:border-blue-400/30 transition-all duration-300 hover:shadow-md">
    <div className="flex-shrink-0">
      <div className="bg-gradient-to-br from-blue-400/20 to-blue-400/5 p-1.5 sm:p-2 rounded-lg sm:rounded-xl">
        <Users className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-blue-400" />
      </div>
    </div>
    <div className="flex-1 sm:text-center">
      <div className="flex sm:flex-col items-baseline sm:items-center gap-1 sm:gap-0">
        <span className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">50+</span>
        <span className="text-sm sm:text-lg text-muted-foreground ml-auto sm:ml-0">Happy Clients</span>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="flex sm:flex-col items-center gap-3 sm:gap-2 bg-gradient-to-br from-primary/10 to-primary/10 dark:from-primary/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 border border-primary/10 hover:border-purple-400/30 transition-all duration-300 hover:shadow-md">
    <div className="flex-shrink-0">
      <div className="bg-gradient-to-br from-purple-400/20 to-purple-400/5 p-1.5 sm:p-2 rounded-lg sm:rounded-xl">
        <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-purple-400" />
      </div>
    </div>
    <div className="flex-1 sm:text-center">
      <div className="flex sm:flex-col items-baseline sm:items-center gap-1 sm:gap-0">
        <span className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">4.9/5</span>
        <span className="text-sm sm:text-lg text-muted-foreground ml-auto sm:ml-0">Client Rating</span>
      </div>

    </div>

  </div>
</div>

        {/* About Section */}
        <div className="mt-4">
          <div className=" p-5 ">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <span className="h-2 w-2 bg-primary rounded-full"></span>
              About Me
            </h3>
            <p className="text-muted-foreground leading-relaxed italic">
              I’m a developer with a strong passion for creating seamless, high-performance digital experiences. I specialize in building dynamic WordPress websites, designing responsive front-end interfaces, and automating workflows to help businesses work smarter and more efficiently.

With a keen eye for detail and a commitment to clean, maintainable code, I focus on delivering custom solutions tailored to each client’s unique needs. Whether it’s crafting a user-friendly website that stands out online or optimizing internal processes to save time and resources, I ensure that every project not only meets but exceeds expectations.

My goal is to empower businesses by improving their digital presence and operational efficiency through intuitive design, functional development, and smart automation. I believe in the power of technology to drive growth, and I’m always exploring new ways to solve problems and create value.

Let’s work together to take your digital projects to the next level.
            </p>
          </div>
        </div>

        {/* Info Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <InfoItem icon={<CalendarCheck className="h-5 w-5" />} label="Birthday:" value={date} />
          <InfoItem icon={<MapPin className="h-5 w-5" />} label="City:" value={location} />
          <InfoItem icon={<Mail className="h-5 w-5" />} label="Email" value={email} />
          <InfoItem icon={<Phone className="h-5 w-5" />} label="Phone:" value={phone} />
          <InfoItem icon={<GraduationCap className="h-5 w-5" />} label="Degree:" value={degree} />
          <InfoItem icon={<ChevronsLeftRightEllipsis className="h-5 w-5" />} label="Website:" value={joinDate} />
          <InfoItem icon={<Briefcase className="h-5 w-5" />} label="Freelance:" value={department} />
          <InfoItem
            icon={<Globe className="h-5 w-5" />}
            label="Languages"
            value={skills?.join(", ") || "Not specified"}
          />
        </div>
      </div>
    </Card>
  )
}

