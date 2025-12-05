import React from "react"

const Sponsors: React.FC = () => {
  const logos = [
    {
      name: "The Digital Me",
      logo: "/medias/tdm_logo.png",
    },
    {
      name: "Nev & Hirk",
      logo: "/medias/nev_and_hirk.JPG",
    },
  ]

  return (
    <section className="py-16 relative overflow-hidden" style={{ backgroundColor: "#020010" }}>
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden py-8">
          <div className="flex animate-scroll">
            {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map(
              (item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-12 flex items-center justify-center transition-all duration-300"
                  style={{ width: "200px", height: "100px" }}
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-w-full max-h-full object-contain filter brightness-90 opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
          display: flex;
          width: max-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default Sponsors
