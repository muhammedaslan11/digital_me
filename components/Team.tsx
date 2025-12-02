import React from "react"
import { TEAM_MEMBERS } from "../constants"
import MemberCard from "./MemberCard"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

const Team: React.FC = () => {
  const [closingRef, closingVisible] = useIntersectionObserver(0.3)

  return (
    <section id="team" className="bg-slate-950 relative z-10 overflow-x-hidden">
      {/* Grain overlay for cinematic feel */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 pb-32">
        <div className="relative pt-24">
          {TEAM_MEMBERS.map((member, index) => (
            <MemberCard
              key={member.id}
              member={member}
              index={index}
              total={TEAM_MEMBERS.length}
            />
          ))}
        </div>

        {/* Closing Statement */}
        <div
          ref={closingRef}
          className={`h-[50vh] flex items-center justify-center text-center transition-all duration-1000 ease-out ${
            closingVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div className="space-y-6">
            <p className="text-slate-500 text-lg uppercase tracking-widest">
              Sıradaki sensin mi?
            </p>
            <h3 className="text-5xl md:text-7xl font-bold text-white">
              Ekibe Katıl
            </h3>
            <button className="mt-8 px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
              Açık Pozisyonlar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
