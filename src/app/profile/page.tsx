"use client"

import { PageLayout } from "@/components/page-layout"
import { ProfileHeader } from "@/components/profile-header"
import  GridUI from "@/components/grid-it-ui"


export default function AboutPage() {
  return (
    <PageLayout>
      <div className="max-w-full mx-auto space-y-12 py-8 p-1 md:p-2 lg:p-4">
        {/* Hero Section */}
        <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-full ">
          <ProfileHeader />
        </div>
      </div>

        {/* Skills Section */}
        <GridUI />
      </div>
    </PageLayout>
  )
}
