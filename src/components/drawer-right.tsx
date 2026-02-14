"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeCustomizer } from "@/components/theme-customizer"

export default function DrawerFromRight() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
    <Button
      onClick={() => setIsOpen(true)}
      className="fixed top-4 right-4 z-30 rounded-full w-10.5 h-10.5 p-0 flex items-center justify-center border-4 border-double border-primary dark:border-primary bg-accent shadow-primary shadow-md"
      aria-label="Open settings"
      title="Open settings"
      size="icon"
      variant="outline"
    >
     <Settings className="size-5.5! text-primary"  />
    </Button>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-96 bg-background shadow-lg transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Costumize</h2>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5 text-black dark:text-white" />
          </Button>
        </div>

        <div className="p-4 px-auto">
          <ThemeCustomizer />
        </div>
      </div>
    </div>
  )
}
