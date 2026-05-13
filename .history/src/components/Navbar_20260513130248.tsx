'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MapPin, Instagram, ShoppingBag } from 'lucide-react'

const navLinks = [
  { href: '#menu', label: 'Menu' },
  { href: '#harga', label: 'Harga' },
  { href: '#suasana', label: 'Suasana' },
  { href: '#ulasan', label: 'Ulasan' },
  { href: '#lokasi', label: 'Lokasi' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#1A0F0A]/90 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
{/* Logo */}
<a href="#" className="flex items-center gap-3 group">
  <div className="w-10 h-10 rounded-full overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300">
    <img
      src="/images/logo-larasati.jpg"
      alt="Kantin Larasati Logo"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="leading-none">
    <div
      className="text-[#F5EDD6] font-bold text-base tracking-wide"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      Kantin Larasati
    </div>

    <div
      className="text-[#F0A500] text-[10px] font-medium mt-1"
      style={{ fontFamily: "Caveat, cursive" }}
    >
      Sejak 2023 · Jogja
    </div>
  </div>
</a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm text-[#E8D9B5]/80 hover:text-[#F0A500] transition-colors font-medium rounded-full hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://www.instagram.com/kantinlarasati/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#E8D9B5]/70 hover:text-[#F0A500] transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#menu"
              className="flex items-center gap-1.5 px-4 py-2 bg-[#C0392B] text-white text-sm font-semibold rounded-full hover:bg-[#E74C3C] transition-colors shadow-md"
            >
              <ShoppingBag size={14} />
              Pesan
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#F5EDD6] p-2"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-40 bg-[#1A0F0A] flex flex-col pt-20 px-6"
          >
            <nav className="flex flex-col gap-2 mt-6">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="text-2xl font-bold text-[#F5EDD6] py-3 border-b border-white/10"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="https://www.instagram.com/kantinlarasati/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#F0A500] font-semibold"
              >
                <Instagram size={18} /> @kantinlarasati
              </a>
              <a
                href="https://www.google.com/maps/place/Kantin+Larasati"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#E8D9B5]/70 text-sm"
              >
                <MapPin size={16} /> Lihat di Google Maps
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
