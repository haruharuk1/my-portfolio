import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/* Faux barcode strip */
export function Barcode({ className }: { className?: string }) {
  return <div className={cn("barcode h-8 w-full opacity-80", className)} aria-hidden="true" />
}

/* Thin diagonal hazard bar */
export function HazardBar({ className, muted }: { className?: string; muted?: boolean }) {
  return (
    <div
      className={cn("h-2 w-full", muted ? "hazard-muted" : "hazard", className)}
      aria-hidden="true"
    />
  )
}

/* Small mono label chip */
export function Tag({
  children,
  tone = "default",
  className,
}: {
  children: ReactNode
  tone?: "default" | "primary" | "warning" | "outline"
  className?: string
}) {
  const tones: Record<string, string> = {
    default: "bg-muted text-muted-foreground border-border",
    primary: "bg-primary text-primary-foreground border-primary",
    warning: "bg-warning/15 text-warning border-warning/40",
    outline: "bg-transparent text-foreground/80 border-border-strong",
  }
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 border px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-widest",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

/* Section eyebrow label like " // ABOUT ME " */
export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs text-primary">{"//"}</span>
      <h2 className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-foreground/90">
        {children}
      </h2>
      <span className="font-mono text-[10px] text-muted-foreground">{index}</span>
      <div className="hazard-muted h-1.5 flex-1 opacity-60" aria-hidden="true" />
    </div>
  )
}

/* Window / panel chrome header with fake controls */
export function PanelHeader({
  title,
  right,
}: {
  title: ReactNode
  right?: ReactNode
}) {
  return (
    <div className="flex items-center justify-between border-b border-border bg-panel-2 px-4 py-2.5">
      <div className="flex items-center gap-2">
        <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          {title}
        </span>
      </div>
      <div className="flex items-center gap-2">
        {right}
        <div className="flex items-center gap-1.5 pl-1">
          <span className="h-2.5 w-2.5 border border-border-strong" />
          <span className="h-2.5 w-2.5 border border-border-strong" />
          <span className="h-2.5 w-2.5 border border-primary bg-primary/20" />
        </div>
      </div>
    </div>
  )
}

/* The core layered card */
export function Panel({
  children,
  className,
  notch = false,
}: {
  children: ReactNode
  className?: string
  notch?: boolean
}) {
  return (
    <div
      className={cn(
        "panel-shadow relative border border-border bg-card",
        notch && "clip-notch",
        className,
      )}
    >
      {children}
    </div>
  )
}
