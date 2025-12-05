import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BrainCircuit, Fingerprint, Network } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface Reason {
  icon: React.ElementType
  title: string
  description: string
}

const WhyAttend: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const leftContentRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const reasons: Reason[] = [
    {
      icon: BrainCircuit,
      title: "Yapay Zeka Kullanmayı Öğren",
      description:
        "AI sadece bir araç değil, yeni bir uzvumuz. Yaratıcılığını yapay zeka ile nasıl melezleyeceğini keşfet.",
    },
    {
      icon: Fingerprint,
      title: "Katılım Belgesi",
      description:
        "Yıldızların bir araya geldiği bu etkinlikte kendi yörüngeni keşfederken katılım belgeni almayı unutma.",
    },
    {
      icon: Network,
      title: "Elit Networking",
      description:
        "Sektörü yöneten %1'lik dilim burada. Gelecekteki ortağın, yatırımcın veya mentörünle kahve molasında tanış.",
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      )

      // Left content animation
      gsap.fromTo(
        leftContentRef.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftContentRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      )

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll(".reason-card")
      if (cards) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 relative overflow-hidden"
      style={{ backgroundColor: "#020010" }}
    >
      {/* Decorative line at top */}
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent" />

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side: Story */}
          <div ref={leftContentRef}>
            <div ref={titleRef} className="mb-8">
              <span className="text-brand-accent font-mono text-sm mb-4 tracking-[0.2em] uppercase block">
                Manifesto
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">
                  The Digital Me 2025 Yıldızların Yörüngesini Bulduğu Yolculuk
                </span>
              </h2>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              İstanbul Nişantaşı Üniversitesi Halkla İlişkiler ve Reklamcılık
              Kulübü olarak düzenlediğimiz The Digital Me 2025, bir etkinlikten
              çok daha fazlası…
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Bu konsepti, bir galaksi yolculuğu olarak tasarladık. Çünkü bize
              göre bu etkinliğe gelen her öğrenci, içindeki ışığıyla
              keşfedilmeyi bekleyen özel bir yıldız. The Digital Me 2025, her
              bir yıldızın kendi yolculuğunda güçlenmesine, ilham bulmasına ve
              geleceğine daha umutla bakmasına vesile olmak için var.
            </p>
          </div>

          {/* Right Side: Value Cards */}
          <div ref={cardsRef} className="space-y-6">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="reason-card group bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-brand-accent/10 hover:border-brand-accent/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-brand-accent/20 rounded-lg text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors flex-shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                      {item.description}
                    </p>
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

export default WhyAttend
