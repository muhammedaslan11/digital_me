import React from "react"
import { SPEAKERS_DATA } from "../constants"
import MemberCard from "./MemberCard"

const Speakers: React.FC = () => {
  return (
    <section
      id="speakers"
      className="bg-slate-950 relative z-10 overflow-x-hidden"
    >
      {/* Grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 pb-32">
        {/* Header */}
        <div className="text-center py-24">
          <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-2 block">
            Vizyonerler
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            Konuşmacılar
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sektörün önde gelen liderleri ve inovasyon öncüleri
          </p>
        </div>

        <div className="relative">
          {SPEAKERS_DATA.map((speaker, index) => (
            <MemberCard
              key={speaker.id}
              member={speaker}
              index={index}
              total={SPEAKERS_DATA.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Speakers
