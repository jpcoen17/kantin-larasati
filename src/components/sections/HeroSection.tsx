'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, ChevronDown, Star } from 'lucide-react'

function SteamParticle({ left, delay }: { left: string; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-white/50 blur-sm"
      style={{ width: 6, height: 28, left, bottom: '55%' }}
      animate={{
        y: [0, -50, -80],
        opacity: [0, 0.7, 0],
        scaleX: [1, 1.5, 0.8],
      }}
      transition={{
        duration: 2.8,
        repeat: Infinity,
        ease: 'easeOut',
        delay,
      }}
    />
  )
}

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen bg-[#1A0F0A] overflow-hidden flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3D1C0E] via-[#1A0F0A] to-[#0D0806]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C0392B]/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F0A500]/8 blur-[80px] rounded-full" />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#F0A500]/20"
          style={{
            width: 2 + (i % 3) * 2,
            height: 2 + (i % 3) * 2,
            left: `${(i * 17 + 5) % 100}%`,
            top: `${(i * 23 + 10) % 100}%`,
          }}
          animate={{ y: [-20, 20, -20], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-16"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-80px)]">

          {/* ── Text side ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-[#C0392B]/20 border border-[#C0392B]/30 text-[#F0A500] px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            >
              <span className="w-1.5 h-1.5 bg-[#F0A500] rounded-full animate-pulse" />
              ⭐ Menu Favorit Mahasiswa Jogja
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5EDD6] leading-tight mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Tongkol Suwir
              <span className="block text-[#C0392B] italic">yang bikin orang</span>
              <span className="block">balik lagi.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="text-[#E8D9B5]/70 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Kantin favorit mahasiswa Jogja dengan rasa rumahan dan harga bersahabat.
              Murah, hangat, ramai, dan bikin pengen balik lagi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <a
                href="#menu"
                className="px-6 py-3 bg-[#C0392B] text-white font-semibold rounded-full hover:bg-[#E74C3C] transition-all hover:scale-105 shadow-lg shadow-[#C0392B]/30 text-sm"
              >
                🍽️ Lihat Menu
              </a>
              <a
                href="https://www.google.com/maps/place/Kantin+Larasati/@-7.7551413,110.3965295"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-[#F0A500]/40 text-[#F0A500] font-semibold rounded-full hover:bg-[#F0A500]/10 transition-all text-sm flex items-center gap-2"
              >
                <MapPin size={14} /> Cari Rute
              </a>
              <a
                href="https://www.instagram.com/kantinlarasati/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-[#E8D9B5]/20 text-[#E8D9B5]/70 font-semibold rounded-full hover:bg-white/5 transition-all text-sm"
              >
                Pesan Sekarang
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex items-center gap-8 justify-center lg:justify-start"
            >
              {[
                { value: '2023', label: 'Berdiri Sejak' },
                { value: '500+', label: 'Ulasan Bintang 5' },
                { value: 'Rp15rb', label: 'Mulai dari' },
              ].map(s => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="text-xl font-bold text-[#F0A500]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {s.value}
                  </div>
                  <div className="text-xs text-[#E8D9B5]/50">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Food photo side ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#C0392B]/10 blur-3xl" />
            </div>

            {/* Photo frame */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-[#C0392B]/30 shadow-2xl shadow-[#C0392B]/20"
            >
              <Image
                src="/images/menu/nasi-tongkol-suwir-kemangi-plus-1-sayur.jpg"
                alt="Tongkol Suwir Kemangi — Menu Andalan Kantin Larasati"
                fill
                className="object-cover scale-110"
                priority
                sizes="(max-width: 640px) 288px, 384px"
              />
              {/* Warm cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A]/40 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#F0A500]/10 to-transparent mix-blend-overlay" />
            </motion.div>

            {/* Steam particles above photo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
              <SteamParticle left="42%" delay={0} />
              <SteamParticle left="50%" delay={0.6} />
              <SteamParticle left="58%" delay={1.2} />
              <SteamParticle left="46%" delay={1.8} />
              <SteamParticle left="54%" delay={0.9} />
            </div>

            {/* Badge: segar + harum */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 -right-2 sm:top-4 sm:-right-6 bg-[#4A7C59] text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap"
            >
              🌿 Segar + Harum
            </motion.div>

            {/* Badge: rating */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-2 -left-2 sm:bottom-8 sm:-left-8 bg-[#F0A500] text-[#1A0F0A] px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 whitespace-nowrap"
            >
              <Star size={12} fill="currentColor" /> 4.8 · 500+ ulasan
            </motion.div>

            {/* Badge: harga */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-12 -right-2 sm:-right-8 bg-[#C0392B] text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg whitespace-nowrap"
            >
              Mulai Rp17.000 🍽️
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 mt-4"
        >
          <span className="text-[#E8D9B5]/30 text-xs">Scroll ke bawah</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={18} className="text-[#E8D9B5]/30" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom fade to cream */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F5EDD6] to-transparent" />
    </section>
  )
}
