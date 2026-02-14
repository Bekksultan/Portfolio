"use client"

import { PageLayout } from "@/components/page-layout"
import { ProjectsGrid } from "@/components/projects-grid"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function ProjectsPage() {
  return (
     <PageLayout>
    <div className="flex min-h-screen bg-background">
      <main className="flex-1">
        <div className="max-w-[1400px] mx-auto px-8 ">

          <ProjectsGrid />
        </div>
        <ScrollToTop />
      </main>
    </div>
    </PageLayout>
  )
}
