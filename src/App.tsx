import { Footer } from "@/components/footer"
import { Nav } from "@/components/nav"
import { HeroCard } from "@/components/dashboard/hero-card"
import { ProjectsPanel } from "@/components/dashboard/projects-panel"
import {
  AboutPanel,
  ContactPanel,
  NowPlayingPanel,
  SkillsPanel,
  StatusPanel,
} from "@/components/dashboard/profile-panels"

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <Nav />

      <main className="relative mx-auto grid max-w-[1540px] gap-5 px-4 pb-4 pt-20 sm:px-6 lg:grid-cols-[minmax(0,1.72fr)_minmax(390px,0.98fr)]">
        <div className="grid gap-5">
          <HeroCard />

          <div className="grid gap-5 xl:grid-cols-[0.9fr_1.06fr]">
            <AboutPanel />
            <SkillsPanel />
          </div>

          <div className="grid gap-5 xl:grid-cols-[0.8fr_0.68fr_0.68fr]">
            <ContactPanel />
            <StatusPanel />
            <NowPlayingPanel />
          </div>
        </div>

        <ProjectsPanel />
      </main>

      <Footer />
    </div>
  )
}

export default App
