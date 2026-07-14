import { Mail, Pause, Play, SkipBack, SkipForward } from "lucide-react"
import { DiscordIcon, GithubIcon } from "@/components/brand-icons"
import { assetUrl } from "@/components/dashboard/asset-url"
import { skills } from "@/components/dashboard/data"
import { PanelTitle } from "@/components/dashboard/panel-title"

export function AboutPanel() {
  return (
    <section id="about" className="panel-shadow rounded-md border border-border bg-card">
      <PanelTitle>About Me</PanelTitle>
      <div className="grid gap-5 p-5 sm:grid-cols-[1fr_110px]">
        <p className="text-sm leading-relaxed text-foreground/85">
          I am a final-semester Informatics Engineering student with a background as a Programming Technician. I focus on web and software development.
          I have worked on school and personal projects using Laravel, PHP, JavaScript, SQL, Docker, Firebase, Supabase, AWS, and Azure. I love learning new tools and solving real-world problems with practical solutions.
        </p>
        <img src={assetUrl("cat-png.png")} alt="Haruki avatar" className="h-28 w-full  object-cover" />
      </div>
    </section>
  )
}

export function SkillsPanel() {
  return (
    <section id="skills" className="panel-shadow rounded-md border border-border bg-card">
      <PanelTitle>Skills &amp; Tools</PanelTitle>
      <div className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-5">
        {skills.map((skill) => (
          <div key={skill} className="grid min-h-16 place-items-center rounded border border-border bg-panel-2 px-2 text-center">
            <span className="font-mono text-xs">{skill}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 px-5 pb-4 font-mono text-xs uppercase text-muted-foreground">
        <span className="text-primary">+</span>
        Learning more...
        <div className="h-1 flex-1 bg-muted">
          <div className="h-full w-1/3 bg-primary" />
        </div>
      </div>
    </section>
  )
}

export function ContactPanel() {
  const socials = [
    { icon: GithubIcon, label: "GitHub", href: "https://github.com/haruharuk1" },
    { icon: DiscordIcon, label: "Discord", href: "#contact"  },
    //{ icon: LinkedinIcon, label: "LinkedIn" },
    { icon: Mail, label: "Email", href: "#contact" },
  ]

  return (
    <section id="contact" className="panel-shadow rounded-md border border-border bg-card">
      <PanelTitle>Connect</PanelTitle>
      <div className="grid grid-cols-4 gap-3 p-4">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href ?? "#contact"}
            className="grid min-h-20 place-items-center rounded border border-border bg-panel-2 text-center transition-colors hover:border-primary"
          >
            <social.icon className="h-7 w-7 text-foreground" />
            <span className="font-mono text-[10px] uppercase text-muted-foreground">{social.label}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export function StatusPanel() {
  return (
    <section className="panel-shadow rounded-md border border-border bg-card">
      <PanelTitle>Current Status</PanelTitle>
      <div className="flex items-center justify-between gap-4 p-5">
        <div className="font-mono text-xs uppercase leading-6 text-muted-foreground">
          <p>&gt; Try.</p>
          <p>&gt; Fail.</p>
          <p>&gt; Learn.</p>
          <p>&gt; Repeat.</p>
        </div>
      </div>
    </section>
  )
}

export function NowPlayingPanel() {
  return (
    <section className="panel-shadow rounded-md border border-border bg-card">
      <PanelTitle>Now Playing</PanelTitle>
      <div className="flex items-center gap-4 p-4">
        <img src={assetUrl("cat.jpg")} alt="Now playing cover" className="h-20 w-20 rounded border border-primary object-cover" />
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-xl font-bold uppercase">Testing</p>
          <p className="truncate font-mono text-xs text-muted-foreground"></p>
          <div className="mt-3 flex items-center gap-3 text-foreground">
            <SkipBack className="h-4 w-4" />
            <Pause className="h-4 w-4" />
            <Play className="h-4 w-4" />
            <SkipForward className="h-4 w-4" />
          </div>
        </div>
      </div>
    </section> 
  )
}
