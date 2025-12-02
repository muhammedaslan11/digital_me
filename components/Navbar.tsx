import React, { useState, useEffect } from "react"
import { Menu, X, Ticket } from "lucide-react"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Program", href: "#program" },
    { name: "Konuşmacılar", href: "#speakers" },
    { name: "Kayıt", href: "#register" },
    { name: "Konum", href: "#footer" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-main/80 backdrop-blur-lg border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="z-50">
          <img
            src="/medias/tdm_logo.png"
            alt="Digital Me Logo"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-bold text-sm hover:bg-brand-accent hover:text-white transition-all transform hover:scale-105"
          >
            <Ticket size={16} />
            Kayıt Ol
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-brand-main flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-display font-bold text-white hover:text-brand-accent"
            >
              {link.name}
            </a>
          ))}
          <button className="mt-8 flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded-full font-bold text-lg">
            <Ticket size={20} />
            Kayıt Ol
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
