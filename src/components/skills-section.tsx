import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "WordPress Development", level: 95, category: "Core" },
  { name: "PHP & MySQL", level: 90, category: "Core" },
  { name: "Custom Theme Development", level: 92, category: "Core" },
  { name: "Plugin Development", level: 88, category: "Core" },
  { name: "WooCommerce", level: 85, category: "E-Commerce" },
  { name: "Elementor & Page Builders", level: 90, category: "Tools" },
  { name: "Zapier & Make.com", level: 87, category: "Automation" },
  { name: "API Integration", level: 85, category: "Automation" },
  { name: "Workflow Automation", level: 90, category: "Automation" },
  { name: "JavaScript & jQuery", level: 82, category: "Frontend" },
  { name: "React & Next.js", level: 78, category: "Frontend" },
  { name: "REST API Development", level: 88, category: "Backend" },
]

const categories = ["Core", "Automation", "Frontend", "Backend", "E-Commerce", "Tools"]

export function SkillsSection() {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Technical Skills</h2>
        <p className="mt-2 text-muted-foreground">
          Proficiency levels across WordPress development and automation technologies
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((category) => {
          const categorySkills = skills.filter((skill) => skill.category === category)
          if (categorySkills.length === 0) return null

          return (
            <Card key={category} className="p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{category}</h3>
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
