import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WhyAttend from "./components/WhyAttend"
import Schedule from "./components/Schedule"
import Speakers from "./components/Speakers"
import RegistrationForm from "./components/RegistrationForm"
import Footer from "./components/Footer"
import FloatingCTA from "./components/FloatingCTA"

gsap.registerPlugin(ScrollTrigger)

const App: React.FC = () => {
  const textContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words =
        textContainerRef.current?.querySelectorAll(".manifesto-word")

      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          {
            opacity: 0.2,
            color: "#4b5563",
          },
          {
            opacity: 1,
            color: "#ffffff",
            stagger: 0.1,
            scrollTrigger: {
              trigger: textContainerRef.current,
              start: "top 80%",
              end: "bottom 60%",
              scrub: 1,
            },
          }
        )
      }
    }, textContainerRef)

    return () => ctx.revert()
  }, [])

  const manifestoText =
    "İnsan dokunuşu olmadan yapay zeka sadece bir koddur. Yaratıcılık olmadan veri sadece sayılardır."

  return (
    <div
      className="min-h-screen text-white selection:bg-brand-accent selection:text-white overflow-x-hidden"
      style={{ backgroundColor: "#020010" }}
    >
      <Navbar />
      <main>
        <Hero />
        <WhyAttend />

        {/* About / Manifesto Section */}
        <section className="py-32 px-4 container mx-auto text-center relative z-10">
          <p className="text-neon-blue font-mono text-sm mb-8 tracking-[0.5em] uppercase opacity-80">
            Konsept
          </p>

          <div
            ref={textContainerRef}
            className="max-w-5xl mx-auto leading-tight"
          >
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-medium flex flex-wrap justify-center gap-x-3 md:gap-x-5 gap-y-2">
              {manifestoText.split(" ").map((word, i) => (
                <span
                  key={i}
                  className="manifesto-word transition-colors duration-200"
                >
                  {word}
                </span>
              ))}
            </h2>
          </div>

          <div className="mt-12 w-px h-24 bg-gradient-to-b from-neon-blue/0 via-neon-blue/50 to-neon-blue/0 mx-auto opacity-50"></div>
        </section>

        <Schedule />
        <Speakers />
        <RegistrationForm />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}

export default App
