import Hero from "@/components/hero"
import Expertise from "@/components/expertise"
import TechStack from "@/components/tech-stack"
import SelectedWork from "@/components/selected-work"
//import Stats from "@/components/stats"
import About from "@/components/about"
import Contact from "@/components/contact"
import Scene3D from "@/components/3d-scene"
import MouseFollower from "@/components/mouse-follower"

export default function HomePage() {
  return (
    <>
      <Scene3D />
      <MouseFollower />
      <main className="min-h-screen">
        <Hero />
        <Expertise />
        <TechStack />
        <SelectedWork />
        <About />
        <Contact />
      </main>
    </>
  )
}
