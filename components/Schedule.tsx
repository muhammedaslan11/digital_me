import React, { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SCHEDULE } from "../constants"
import { Clock, User, Users } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const Schedule: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. The Line Animation (The "Laser" filling up)
      if (lineRef.current && trackRef.current) {
        gsap.fromTo(
          lineRef.current,
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: trackRef.current,
              start: "top center", // Start drawing when top of list hits center of screen
              end: "bottom center", // Finish when bottom of list hits center
              scrub: 0.5,
            },
          }
        )
      }

      // 2. Cards Animation & Dot Activation
      const cards = gsap.utils.toArray(".schedule-card")

      cards.forEach((card: any, index) => {
        // Fade up card
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        })

        // Activate Dot when the line passes it
        const dot = card.querySelector(".timeline-dot")
        if (dot) {
          gsap.to(dot, {
            backgroundColor: "#37487b", // brand-accent
            boxShadow: "0 0 15px #37487b",
            scale: 1.5,
            scrollTrigger: {
              trigger: card,
              start: "top center", // When the card hits the center (where the line tip is)
              end: "bottom center",
              toggleActions: "play reverse play reverse", // Turn on/off as you scroll past
            },
          })
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="program"
      ref={containerRef}
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#020010" }}
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="mb-20 max-w-3xl">
          <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-2 block">
            Akış
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Etkinlik Programı
          </h2>
          <p className="text-gray-400">
            Geleceği şekillendiren fikirler ve stratejiler.
          </p>
        </div>

        <div className="relative pl-4 md:pl-8">
          {/* Timeline Track System */}
          <div
            ref={trackRef}
            className="absolute left-[23px] md:left-[39px] top-2 bottom-10 w-[2px] bg-gray-800"
          >
            {/* The Dynamic Line (Laser) */}
            <div
              ref={lineRef}
              className="w-full bg-gradient-to-b from-brand-accent via-brand-accent to-brand-accent shadow-[0_0_15px_rgba(55,72,123,0.5)]"
              style={{ height: "0%" }}
            ></div>
          </div>

          <div className="space-y-12">
            {SCHEDULE.map((session, index) => (
              <div
                key={session.id}
                className="schedule-card relative pl-12 md:pl-16 group"
              >
                {/* Timeline Dot (Station) */}
                <div
                  className={`timeline-dot absolute left-[18px] md:left-[34px] top-2 w-3 h-3 rounded-full border-2 border-deep-black transition-all duration-300 z-10 ${
                    session.type === "break" ? "bg-gray-700" : "bg-gray-800"
                  }`}
                ></div>

                <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-brand-accent/30 transition-all duration-500 backdrop-blur-sm">
                  {/* Time */}
                  <div className="min-w-[140px]">
                    <div className="inline-flex items-center gap-2 text-white font-mono font-bold bg-brand-accent/20 px-4 py-2 rounded-lg border border-brand-accent/40 group-hover:bg-brand-accent/30 transition-colors">
                      <Clock size={18} className="text-brand-accent" />
                      <span className="text-base">{session.time}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                      {session.title}
                    </h3>
                    {session.description && (
                      <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                        {session.description}
                      </p>
                    )}

                    {session.chair && (
                      <div className="mb-4 inline-flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 border border-white/5">
                        <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                          Moderatör
                        </span>
                        <span className="text-sm font-medium text-white">
                          {session.chair}
                        </span>
                      </div>
                    )}

                    {session.speakers && session.speakers.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-white/5">
                        <div className="flex flex-wrap gap-3">
                          {session.speakers.map((speaker) => (
                            <div
                              key={speaker.id}
                              className="flex items-center gap-3 group/speaker cursor-pointer"
                            >
                              <div className="relative">
                                <img
                                  src={speaker.image}
                                  alt={speaker.name}
                                  className="w-10 h-10 rounded-full object-cover grayscale group-hover/speaker:grayscale-0 ring-2 ring-transparent group-hover/speaker:ring-brand-accent transition-all duration-300"
                                />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm font-semibold text-white group-hover/speaker:text-brand-accent transition-colors">
                                  {speaker.name}
                                </span>
                                <span className="text-xs text-gray-400 group-hover/speaker:text-brand-accent/80 transition-colors">
                                  {speaker.title}
                                  {speaker.company && ` • ${speaker.company}`}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule
