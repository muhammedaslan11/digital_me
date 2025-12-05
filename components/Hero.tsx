import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowDown, Calendar, MapPin } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)
  const subTextRef = useRef<HTMLDivElement>(null)
  const countdownRef = useRef<HTMLDivElement>(null)

  // Countdown Logic
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-12-15T09:00:00")
    const difference = +eventDate - +new Date()

    if (difference > 0) {
      return {
        gün: Math.floor(difference / (1000 * 60 * 60 * 24)),
        saat: Math.floor((difference / (1000 * 60 * 60)) % 24),
        dakika: Math.floor((difference / 1000 / 60) % 60),
        saniye: Math.floor((difference / 1000) % 60),
      }
    }
    return { gün: 0, saat: 0, dakika: 0, saniye: 0 }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Animation
      const tl = gsap.timeline()

      tl.from(textRef.current?.querySelectorAll(".char") || [], {
        y: 100,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          subTextRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          countdownRef.current?.children || [],
          {
            scale: 0.5,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.5"
        )

      // Parallax Effect
      gsap.to(".hero-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  // Split text helper
  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ))
  }

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-deep-black"
    >
      {/* Background Elements */}
      <div className="hero-bg absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#121c4e] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#121c4e] rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-6 px-4 py-1.5 rounded-full border border-neon-blue/30 bg-[#37487b] backdrop-blur-md">
          <span className="text-[neon-blue] text-xs font-mono tracking-widest uppercase">
            15 Aralık 2025 • Nişantaşı Üni.
          </span>
        </div>

        {/* Main Title */}
        <h1
          ref={textRef}
          className="font-display font-bold text-5xl md:text-7xl lg:text-9xl tracking-tighter leading-none mb-6 text-white mix-blend-screen"
        >
          <div className="overflow-hidden">{splitText("THE DIGITAL ME")}</div>
          <div className="overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-[#37487b] to-[#121c4e] pb-2">
            {splitText("ME 2025")}
          </div>
        </h1>

        {/* Subtitle */}
        <div ref={subTextRef} className="max-w-2xl mx-auto space-y-4 mb-12">
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
            İletişim dünyasının liderlerini sahnemizde{" "}
            <br className="hidden md:block" /> ağırlamaktan gurur duyuyoruz.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#37487b]" />
              <span>15 Aralık 2025</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#37487b]"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#37487b]" />
              <span>Nişantaşı Üniversitesi NeoTech Kampüs</span>
            </div>
          </div>
        </div>

        {/* Countdown */}
        <div
          ref={countdownRef}
          className="grid grid-cols-4 gap-2 md:gap-6 w-full max-w-3xl mx-auto mb-12"
        >
          {Object.entries(timeLeft).map(([label, value]) => (
            <div
              key={label}
              className="flex flex-col items-center p-3 md:p-6 bg-glass border border-white/5 rounded-2xl backdrop-blur-sm"
            >
              <span className="font-display text-2xl md:text-5xl font-bold text-white tabular-nums">
                {String(value).padStart(2, "0")}
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 mt-2">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ArrowDown className="text-white w-6 h-6" />
      </div>
    </div>
  )
}

export default Hero
