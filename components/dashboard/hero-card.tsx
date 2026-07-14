import { Activity, AlertTriangle, Cpu, MapPin } from "lucide-react"
import type { ReactNode } from "react"
import { assetUrl } from "@/components/dashboard/asset-url"
import { Barcode, Tag } from "@/components/primitives"

export function HeroCard() {
  return (
    <section id="hero" className="panel-shadow relative overflow-hidden rounded-md border border-border bg-card lg:h-[500px]">
      <div className="absolute inset-y-0 left-0 hidden w-20 border-r border-border bg-primary/90 text-background lg:block">
        <div className="flex h-full flex-col items-center justify-between py-5">
          <span className="font-display text-5xl font-bold uppercase [writing-mode:vertical-rl]">Dev</span>
          <AlertTriangle className="h-7 w-7" />
          <Barcode className="h-28 w-10 rotate-90 opacity-80" />
        </div>
      </div>

      <div className="grid min-h-[440px] lg:ml-20 lg:h-full lg:min-h-0 lg:grid-cols-[0.78fr_1fr]">
        <div className="relative z-10 flex flex-col justify-between bg-foreground px-5 py-5 text-background sm:px-8">
          <div>
            <h1 className="headline text-7xl uppercase sm:text-8xl xl:text-[7.5rem]">Haruki</h1>
            <div className="mt-5 space-y-4 border-t border-background/20 pt-5">
              <InfoBlock icon={<Activity className="h-4 w-4" />} label="Status">
                Building things <br />
                <span className="text-primary">and getting fun</span>
              </InfoBlock>
              <InfoBlock icon={<Cpu className="h-4 w-4" />} label="Role">
                Fullstack developer
                <br />
                Game dev enthusiast
                <br />
                Explorer
              </InfoBlock>
              <InfoBlock icon={<MapPin className="h-4 w-4" />} label="Location">
                Somewhere
              </InfoBlock>
            </div>
          </div>
          
          <div className="mt-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm uppercase tracking-widest text-primary">Dev</span>
              <div className="hazard h-2 flex-1" />
            </div>
            <p className="mt-1 font-mono text-xs text-background/70">My portfolio</p>
          </div>
        </div>

        <div className="relative min-h-[380px] overflow-hidden bg-panel-2">
          <div className="absolute left-6 top-6 z-20">
            <p className="font-display text-4xl font-bold uppercase">はるきいー</p>
            <p className="font-display text-xl font-bold uppercase ">Developer Profile</p>
          </div>
          <img
            src={assetUrl("photo1.jpg")}
            alt="Haruki profile artwork"
            className="absolute inset-0 h-full w-full object-cover"
            crossOrigin="anonymous"
          />
          <div className="absolute bottom-8 left-8 z-20 rotate-[-7deg] border border-background bg-foreground px-4 py-3 text-background shadow-xl">
            <p className="font-mono text-sm uppercase">Access ID: HRK-8686</p>
            <Barcode className="mt-2 h-9 w-48 opacity-80" />
          </div>
          <div className="absolute bottom-6 right-6 z-20 rounded-md border border-primary bg-background/80 px-4 py-2 font-display text-xl font-bold uppercase text-primary backdrop-blur">
            Haruki
          </div>
          <span className="absolute right-5 top-4 z-20 font-mono text-sm">(1/1)</span>
        </div>
      </div>
    </section>
  )
}

function InfoBlock({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div>
      <Tag tone="primary" className="bg-background text-foreground">
        {icon}
        {label}
      </Tag>
      <p className="mt-2 font-display text-lg font-bold uppercase leading-tight">{children}</p>
    </div>
  )
}
