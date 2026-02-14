"use client"

import * as React from "react";
import { Moon, Sun, RotateCcw, Check } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { colorVariables } from "@/lib/themes";

const colors = [
  { name: "Standard", value: "standard", className: "bg-neutral-950 dark:bg-neutral-50" },
  { name: "Gray", value: "gray", className: "bg-(--gray)" },
  { name: "Brown", value: "brown", className: "bg-(--brown)" },
  { name: "Red", value: "red", className: "bg-(--red)" },
  { name: "Scarlet", value: "scarlet", className: "bg-(--scarlet)" },
  { name: "Rose", value: "rose", className: "bg-(--rose)" },
  { name: "Yellow", value: "yellow", className: "bg-(--yellow)" },
  { name: "Orange", value: "orange", className: "bg-(--orange)" },
  { name: "Lime", value: "lime", className: "bg-(--lime)" },
  { name: "Green", value: "green", className: "bg-(--green)" },
  { name: "Teal", value: "teal", className: "bg-(--teal)" },
  { name: "Blue", value: "blue", className: "bg-(--blue)" },
  { name: "Navi", value: "navi", className: "bg-(--navi)" },
  { name: "Purple", value: "purple", className: "bg-(--purple)" },
  { name: "Fuchsia", value: "fuchsia", className: "bg-(--fuchsia)" },

]

const radiusOptions = [
  { name: "0", value: "0" },
  { name: "0.3", value: "0.3" },
  { name: "0.5", value: "0.5" },
  { name: "0.75", value: "0.75" },
  { name: "1.0", value: "1.0" },
]

interface ThemeConfig {
  style: "default" | "new-york"
  color: string
  radius: string
}



export function ThemeCustomizer() {
  const { theme, setTheme } = useTheme()
  const [config, setConfig] = React.useState<ThemeConfig>({
    style: "new-york",
    color: "blue",
    radius: "0.5",
  })

  // Helper function to apply CSS variables
  const applyThemeVariables = React.useCallback((themeConfig: ThemeConfig, themeMode: string) => {
    const root = document.documentElement
    const currentTheme = themeMode === "dark" ? "dark" : "light"
    const colorConfig = colorVariables[themeConfig.color as keyof typeof colorVariables]

    if (colorConfig) {
      const modeConfig = colorConfig[currentTheme]
      
      // Apply all CSS variables with proper HSL format
      Object.entries(modeConfig).forEach(([key, value]) => {
        root.style.setProperty(key, value)
      })
    }

    // Set border radius
    root.style.setProperty("--radius", `${themeConfig.radius}rem`)
  }, [])

  // Apply theme changes to CSS variables
  React.useEffect(() => {
    applyThemeVariables(config, theme || "light")
  }, [config, theme, applyThemeVariables])

  const resetTheme = () => {
    const resetConfig = {
      style: "default" as const,
      color: "zinc",
      radius: "0",
    }
    
    // Set theme to light first
    setTheme("light")
    
    // Then update config and apply variables immediately
    setConfig(resetConfig)
    
    // Apply the reset theme variables immediately with light mode
    setTimeout(() => {
      applyThemeVariables(resetConfig, "light")
    }, 0)
  }

  return (
        <div className="bg-background">
        {/* Style Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">Style</Label>
            <Button
              variant="ghost"
              size="sm"
              onClick={resetTheme}
              className="h-6 px-2 text-xs text-black dark:text-white hover:text-foreground"
            >
              <RotateCcw className="h-3 w-3 mr-1 text-black dark:text-white" />
              Reset
            </Button>
          </div>
          <RadioGroup
            value={config.style}
            onValueChange={(value: "default" | "new-york") => setConfig({ ...config, style: value })}
            className="flex gap-4 "
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="default" />
              <Label htmlFor="default" className="text-sm cursor-pointer">
                Default
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="new-york" id="new-york" />
              <Label htmlFor="new-york" className="text-sm cursor-pointer">
                New York
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Color Section */}
        <div className="space-y-2 my-6">
          <Label className="text-sm font-medium">Color</Label>
          <div className="grid grid-cols-3 gap-2">
            {colors.map((color) => (
              <button
                key={color.value}
                onClick={() => setConfig({ ...config, color: color.value })}
                className={cn(
                  "relative flex items-center gap-2.5 rounded-md border border-neutral-500 ring p-2 my-1 mx-1 text-sm hover:bg-accent hover:text-accent-foreground transition-colors",
                  config.color === color.value && "border-primary bg-accent ring-primary",
                )}
              >
                <div className={cn("h-5 w-5 rounded-md border", color.className)} >
                {config.color === color.value && (
                  <Check className="h-3.5 w-3.5 left-0.5 relative top-2.5  transform -translate-y-1/2 text-white dark:text-black" />
                )}
                </div>
                <span className="truncate text-xs">{color.name}</span>
               
              </button>
            ))}
          </div>
        </div>



        {/* Radius Section */}
        <div className="space-y-2 my-6">
          <Label className="text-sm font-medium">Radius</Label>
          <div className="flex gap-2">
            {radiusOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setConfig({ ...config, radius: option.value })}
                className={cn(
                  "flex h-10 w-12 items-center justify-center mx-1 rounded-md border border-neutral-500 ring text-sm hover:bg-accent hover:text-accent-foreground transition-colors",
                  config.radius === option.value && "border-primary bg-accent ring ring-primary",
                )}
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>


        {/* Mode Section */}
        <div className="space-y-2 my-6">
          <Label className="text-sm font-medium">Mode</Label>
          <div className="flex gap-2">
            <button
              onClick={() => setTheme("light")}
              className={cn(
                "flex items-center mx-1 gap-2 rounded-md border border-neutral-500 ring px-5 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors",
                theme === "light" && "border-primary bg-accent ring ring-primary",
              )}
            >
              <Sun className="h-5 w-5" />
              Light
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={cn(
                "flex items-center gap-2 rounded-md border border-neutral-500 ring  px-5 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors",
                theme === "dark" && "border-primary bg-accent ring ring-primary",
              )}
            >
              <Moon className="h-5 w-5" />
              Dark
            </button>
          </div>
        </div>
       </div>
  )
}