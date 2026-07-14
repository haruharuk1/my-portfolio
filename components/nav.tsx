import { Menu, X } from "lucide-react"
import { useState } from "react"
import { assetUrl } from "@/components/dashboard/asset-url"
import { cn } from "@/lib/utils"

const links = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1540px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#hero" className="flex min-w-0 items-center gap-3">
          <img src={assetUrl("cats2.svg")} alt="" className="h-12 w-12 shrink-0" />
          <span className="min-w-0">
            <span className="block font-display text-3xl font-bold uppercase leading-none text-foreground">
              My-<span className="text-primary">Portfolio</span>
            </span>
            <span className="block truncate font-mono text-xs text-muted-foreground">This is my・portfolio</span>
          </span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "skew-x-[-10deg] border border-border bg-panel-2 px-6 py-3 font-display text-sm uppercase text-foreground transition-colors hover:border-primary hover:text-primary",
                index === 0 && "border-primary bg-primary text-primary-foreground hover:text-primary-foreground",
              )}
            >
              <span className="block skew-x-[10deg]">{link.label}</span>
            </a>
          ))}
          <div className="hazard ml-2 h-8 w-32 opacity-80" aria-hidden="true" />
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center border border-border text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="grid border-t border-border bg-background px-4 py-3 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-3 font-display text-lg uppercase text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
