import { ArrowUpRight, Code2 } from "lucide-react"
import { projects } from "@/components/dashboard/data"
import { PanelTitle } from "@/components/dashboard/panel-title"
import { Tag } from "@/components/primitives"

export function ProjectsPanel() {
  return (
    <aside id="projects" className="panel-shadow rounded-md border border-border bg-card lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-hidden">
      <PanelTitle>Featured Projects</PanelTitle>
      <div className="space-y-4 p-4">
        {projects.map((project) => (
          <article key={project.title} className="group grid gap-4 rounded border border-border bg-background/40 p-3 transition-colors hover:border-primary sm:grid-cols-[170px_1fr]">
            <img src={project.image} alt={`${project.title} preview`} className="h-32 w-full rounded border border-primary object-cover" />
            <div className="flex min-w-0 flex-col">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-2xl font-bold uppercase tracking-wide">{project.title}</h3>
                    <Tag tone={project.status === "LIVE" ? "warning" : "primary"}>{project.status}</Tag>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{project.desc}</p>
                </div>
                <a 
                  href={project.href ?? "#contact"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="grid h-10 w-10 shrink-0 place-items-center border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-auto flex flex-wrap gap-2 pt-3">
                {project.tags.map((tag) => (
                  <Tag key={tag} tone="outline">
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mx-4 mb-4 flex items-center gap-3 rounded border border-border bg-background/60 px-4 py-3 font-display text-lg font-bold uppercase text-primary">
        <Code2 className="h-5 w-5" />
        View All Projects
        <div className="hazard h-2 flex-1 opacity-70" />
      </div>
    </aside>
  )
}
