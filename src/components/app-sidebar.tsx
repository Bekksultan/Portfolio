"use client"

import type * as React from "react"

import Image from 'next/image'
import {
  House,
  CircleUserRound,
  CircleUser as FileUser,
  Settings,
  BriefcaseBusiness,
  Rss,
  PhoneCall,
} from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// This is sample data.
const menuItems = [
  {
    title: "Home",
    url: "/",
    icon: House,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: CircleUserRound,
  },
  {
    title: "Services",
    url: "/services",
    icon: Settings,
  },
  {
    title: "Resume",
    url: "/resume",
    icon: FileUser,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: BriefcaseBusiness,
  },
  {
    title: "Blogs",
    url: "/blogs",
    icon: Rss,
  },
  {
    title: "Contact Me",
    url: "/contact",
    icon: PhoneCall,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" {...props} className="border-double border-neutral-400">
      <SidebarHeader className="border-b border-double border-neutral-400">
        <div className="flex items-center gap-3 px-4 py-6 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
          <div className="relative w-14 h-14 flex-shrink-0 transition-all duration-200 group-data-[collapsible=icon]:w-10 group-data-[collapsible=icon]:h-10">
            <Link href="./" className="block relative w-full h-full">
              <Image 
                src="/assets/bek-logo.png" 
                alt="logo" 
                fill
                sizes="(max-width: 768px) 40px, 56px"
                className="object-contain"
                priority
              />
            </Link>
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-lg font-bold text-foreground">BA Portfolio</span>
            <span className="text-xs text-muted-foreground">Creative Developer</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mx-auto text-xl text-primary font-bold italic my-5">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    className="hover:bg-accent hover:text-accent-foreground data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
                  >
                    <Link href={item.url} className="flex items-center space-x-1 my-1.5 ml-0.5">
                      <item.icon
                        size={30}
                        className={pathname === item.url ? "text-primary-foreground" : "text-primary"}
                      />
                      <span className="text-md uppercase font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
