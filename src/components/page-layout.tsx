"use client"

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import { DateCalendar } from "@/components/date-calendar"
import DrawerRight from "@/components/drawer-right"



interface PageLayoutProps {
  children: React.ReactNode
  breadcrumbs?: Array<{
    title: string
    href?: string
    isActive?: boolean
  }>
}

const getPageTitle = (pathname: string) => {
  const routes: Record<string, string> = {
    '/': 'Home',
    '/about': 'About Me',
    '/services': 'Services',
    '/portfolio': 'Portfolio',
    '/blogs': 'Blogs',
    '/contact': 'Contact Me'
  }
  return routes[pathname] || 'Page'
}

export function PageLayout({ children, breadcrumbs }: PageLayoutProps) {
  const pathname = usePathname()
  const pageTitle = getPageTitle(pathname)

  const defaultBreadcrumbs = [
    { title: 'Page', href: '/' },
    { title: pageTitle, isActive: true }
  ]

  const displayBreadcrumbs = breadcrumbs || defaultBreadcrumbs

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
             <Breadcrumb>
              <BreadcrumbList>
                {displayBreadcrumbs.map((breadcrumb, index) => (
                  <div key={index} className="flex items-center text-md italic">
                    {index > 0 && <BreadcrumbSeparator className="hidden md:block" />}
                    <BreadcrumbItem className="hidden md:block ">
                      {breadcrumb.isActive ? (
                        <BreadcrumbPage>{breadcrumb.title}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink href={breadcrumb.href || '#'} >
                          {breadcrumb.title}
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </div>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
            <main className="flex min-h-screen flex-col items-center justify-center p-4">
              <div className="flex w-full max-w-5xl flex-col items-center gap-8">

                <DateCalendar />
              </div>
            </main>
            <DrawerRight />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 ">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
