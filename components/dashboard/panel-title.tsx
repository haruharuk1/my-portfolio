import type { ReactNode } from "react"

export function PanelTitle({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 border-b border-border px-5 py-3">
      <span className="font-mono text-base font-bold text-primary">//</span>
      <h2 className="font-display text-lg font-bold uppercase tracking-wide text-primary">{children}</h2>
      <div className="hazard h-2 flex-1 opacity-70" />
    </div>
  )
}
