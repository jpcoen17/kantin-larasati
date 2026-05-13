'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Instagram } from 'lucide-react'

// Fixed rain drop positions — no Math.random() on server
const RAIN_DROPS = Array.from({ length: 30 }, (_, i) => ({
  left: `${((i * 37 + 11) % 97) + 1}%`,
  duration: 1.5 + (i % 5) * 0.4,
  delay: (i % 7) * 0.45,
}))

function RainDrop({ left, duration, delay }: { left: string; duration: number; delay: number }) {
  return (
    <motion.div
      className="absolute w-px bg-white/10 rounded-full"
      style={{ height: 60, left, top: -60 }}
      animate={{ y: [0, 1200], opacity: [0, 0.5, 0] }}
      transition={{ duration, repeat: Infinity, delay, ease: 'linear' }}
    />
  )
}

export default function CTASection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section className="relative py-28 sm:py-36 bg-[#0D0806] overflow-hidden">
      {/* Rain — only after client mount to avoid hydration mismatch */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {RAIN_DROPS.map((drop, i) => (
            <RainDrop key={i} {...drop} />
          ))}
        </div>
      )}

      {/* Warm lamp glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-[#F0A500]/8 blur-[80px] rounded-full" />
      <div className="absolute top-0 left-1/4 w-48 h-48 bg-[#C0392B]/6 blur-[60px] rounded-full" />
      <div className="absolute top-0 right-1/4 w-48 h-48 bg-[#F0A500]/6 blur-[60px] rounded-full" />

      {/* Ambient dots — fixed positions */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-[#F0A500]/40 rounded-full"
          style={{
            left: `${10 + i * 11}%`,
            bottom: `${15 + (i % 3) * 8}%`,
          }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
        />
      ))}

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl mb-8"
        >
          🏮
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5EDD6] leading-tight mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Kadang yang dicari
          <span className="block text-[#F0A500] italic">cuma makan enak</span>
          dan tempat nyaman.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="text-[#E8D9B5]/60 text-base sm:text-lg mb-10 max-w-md mx-auto leading-relaxed"
        >
          Dan kami sudah ada di sini untuk kamu. Tongkol Suwir Kemangi sudah menunggu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://www.google.com/maps/place/Kantin+Larasati/@-7.7551413,110.3965295"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#C0392B] text-white font-bold rounded-full hover:bg-[#E74C3C] transition-all hover:scale-105 shadow-lg shadow-[#C0392B]/30 text-sm"
          >
            🚗 Kunjungi Sekarang
          </a>
          <a
            href="https://www.google.com/maps/place/Kantin+Larasati/@-7.7551413,110.3965295"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border border-[#F0A500]/40 text-[#F0A500] font-bold rounded-full hover:bg-[#F0A500]/10 transition-all text-sm"
          >
            <MapPin size={16} /> Lihat Maps
          </a>
          <a
            href="https://www.instagram.com/kantinlarasati/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border border-white/10 text-[#E8D9B5]/70 font-bold rounded-full hover:bg-white/5 transition-all text-sm"
          >
            <Instagram size={16} /> Follow Instagram
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <div
            className="text-[#E8D9B5]/30 text-xl"
            style={{ fontFamily: 'Caveat, cursive' }}
          >
            "Murah, hangat, ramai, dan bikin pengen balik lagi."
          </div>
          <div className="text-[#E8D9B5]/20 text-sm mt-2">— Kantin Larasati, Yogyakarta</div>
        </motion.div>
      </div>
    </section>
  )
}
