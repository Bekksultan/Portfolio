"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"
import { ScrollArea } from "@/components/ui/scroll-area"

interface BlogPost {
  id: number
  title: string
  date: string
  image: string
  excerpt: string
  content: string
}

interface BlogDialogProps {
  post: BlogPost | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function BlogDialog({ post, open, onOpenChange }: BlogDialogProps) {
  if (!post) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl max-h-[100vh] p-0 gap-0 bg-background border-border">
        <div className="relative h-[300px] w-full">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>
        <ScrollArea className="max-h-[calc(90vh-300px)]">
          <DialogHeader className="p-6 pb-4">
            <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
            <DialogTitle className="text-3xl font-bold text-foreground">{post.title}</DialogTitle>
          </DialogHeader>
          <div className="px-6 pb-6">
            <div className="prose prose-invert max-w-none">
              {post.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">
                      {paragraph.replace(/\*\*/g, "")}
                    </h3>
                  )
                }
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                )
              })}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
