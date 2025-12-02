import React from "react"
import { MapPin, Mail, Instagram, Linkedin, Twitter } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="bg-brand-main border-t border-white/10 pt-20 pb-10"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              THE DIGITAL ME <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-main">
                2025
              </span>
            </h2>
            <p className="text-gray-400 max-w-md">
              Yapay zeka ve yaratıcılığın sınırlarını zorlayan, geleceğin
              iletişim dünyasını bugünden tasarlayan etkinlik.
            </p>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-white font-bold mb-4">Lokasyon</h3>
            <div className="flex gap-3 text-gray-400 mb-2">
              <MapPin className="shrink-0 text-brand-accent" size={20} />
              <address className="not-italic text-sm leading-relaxed">
                Nişantaşı Üniversitesi
                <br />
                NeoTech Kampüsü
                <br />
                Maslak, 1453 Söğütözü Sk. No:20
                <br />
                Sarıyer/İstanbul
              </address>
            </div>
            <div className="mt-4">
              <a
                href="https://maps.app.goo.gl/cZqC7uRDLqvNdLmv5"
                target="_blank"
                className="text-brand-accent text-sm underline hover:text-white transition-colors"
              >
                Haritada Gör
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">İletişim</h3>
            <div className="flex gap-3 text-gray-400 mb-6">
              <Mail className="shrink-0 text-brand-accent" size={20} />
              <a
                href="mailto:info@digitalme2025.com"
                className="text-sm hover:text-white transition-colors"
              >
                info@digitalme2025.com
              </a>
            </div>

            <h3 className="text-white font-bold mb-4">Takip Et</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-accent transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-accent transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2025 The Digital Me. Tüm hakları saklıdır.
          </p>
          <p className="text-gray-600 text-sm">
            Designed by NeoTech Design Team
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
