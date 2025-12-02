import React, { useRef } from "react"
import { TeamMember } from "../types"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

interface MemberCardProps {
  member: TeamMember
  index: number
  total: number
}

const MemberCard: React.FC<MemberCardProps> = ({ member, index, total }) => {
  const [ref, isVisible] = useIntersectionObserver(0.2)
  const cardRef = useRef<HTMLDivElement>(null)

  // Calculate top position for sticky stacking effect
  // Each card sticks slightly lower than the previous one to create a stack
  const topOffset = 80 + index * 40

  // Dynamic scale calculation based on index to simulate depth (cards behind look smaller)
  // In a real parallax lib we'd use scroll position, here we use CSS Sticky + Index visual hierarchy
  const scale = 1 - (total - index - 1) * 0.05

  return (
    <div
      className="sticky mb-24 min-h-[80vh] w-full flex items-center justify-center px-2 sm:px-4 md:px-8 perspective-1000"
      style={{ top: `${topOffset}px` }}
    >
      <div
        ref={ref}
        className={`
          relative w-full max-w-6xl overflow-hidden rounded-3xl bg-slate-900 border border-slate-700/50 shadow-2xl
          transition-all duration-1000 ease-out transform
          ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-24 scale-95"
          }
        `}
        style={{
          // Subtle shadow difference per card
          boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.5)`,
        }}
      >
        <div className="flex flex-col lg:flex-row h-full">
          {/* Image Section */}
          <div className="lg:w-1/2 relative h-[400px] lg:h-[600px] overflow-hidden group">
            <div
              className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60`}
            />
            <div
              className={`absolute inset-0 ${member.accentColor} mix-blend-overlay opacity-20 group-hover:opacity-40 transition-opacity duration-700`}
            />

            <img
              src={member.image}
              alt={member.name}
              className={`
                w-full h-full object-cover object-center
                transition-transform duration-[1.5s] ease-in-out
                ${isVisible ? "scale-100" : "scale-110"}
                group-hover:scale-105
              `}
            />

            {/* Floating Badge */}
            <div className="absolute top-6 left-6 z-20">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold tracking-wider">
                0{index + 1} <span className="mx-2 opacity-50">/</span> 0{total}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center relative bg-gradient-to-br from-slate-800 to-slate-900">
            {/* Decorative Elements */}
            <div
              className={`absolute top-0 right-0 w-64 h-64 ${member.accentColor} rounded-full blur-[120px] opacity-20 pointer-events-none`}
            ></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-[2px] ${member.accentColor}`}></div>
                <span
                  className={`text-sm font-bold tracking-widest uppercase text-slate-400`}
                >
                  {member.company}
                </span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-2 leading-tight">
                {member.name}
              </h2>
              <p
                className={`text-xl font-medium mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400`}
              >
                {member.role}
              </p>

              <p className="text-slate-400 text-lg leading-relaxed mb-8 border-l-2 border-slate-700 pl-6">
                "{member.bio}"
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3 mb-10">
                {member.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 text-sm hover:border-slate-500 hover:text-white transition-colors"
                  >
                    #{skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <button
                  className={`
                    group px-8 py-4 rounded-full bg-white text-slate-900 font-bold 
                    transition-all duration-300 hover:bg-slate-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
                    flex items-center gap-2
                 `}
                >
                  Profilini İncele
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>

                <button className="p-4 rounded-full border border-slate-700 hover:border-white text-slate-400 hover:text-white transition-all">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberCard
