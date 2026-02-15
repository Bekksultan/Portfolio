"use client"

import { PageLayout } from "@/components/page-layout"
import { BlogGrid } from "@/components/blog-grid"

export default function BlogPage() {
  return (
    <PageLayout>
    <div className="flex min-h-screen bg-background dark">
      <main className="flex-1 p-8">
        <div className="mb-16 md:mb-20 text-center">
   
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
               Thoughts  {" "}
              </span>
              <span className="relative">
                <span className="text-primary"> & Ideas</span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Read insights, ideas, and reflections on design, creativity, and building meaningful digital products.
            </p>
          </div>
        <BlogGrid />
      </main>
    </div>
    </PageLayout>
  )
}
