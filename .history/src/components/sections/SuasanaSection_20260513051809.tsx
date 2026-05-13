'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const scenes = [
  {
    id: 1,
    title: 'Jam Makan Siang',
    subtitle: 'Ramai tapi tetap terasa nyaman',
    image: '/images/menu/nasi-tongkol-suwir-kemangi-plus-1-sayur.jpg',
    description: 'Waktu yang paling ditunggu. Aroma nasi dan lauk menguar dari dapur, kursi-kursi mulai terisi, dan suara sendok garpu berpadu dengan obrolan seru.',
    detail: '11.00 – 13.00',
    accent: 'from-[#8B3A1A]/80',
  },
  {
    id: 2,
    title: 'Menu Andalan',
    subtitle: 'Tongkol Suwir Kemangi',
    image: '/images/menu/tongkol-suwir-kemangi.jpeg',
    description: 'Ikan tongkol segar disuwir halus, ditumis kemangi dan rempah khas. Harum dari jauh, nagih dari suapan pertama. Ini alasan orang balik lagi.',
    detail: 'Best Seller ⭐',
    accent: 'from-[#4A2010]/80',
  },
  {
    id: 3,
    title: 'Lauk Pilihan',
    subtitle: 'Fresh dimasak setiap hari',
    image: '/images/menu/ayam-goreng.jpg',
    description: 'Semua lauk dimasak segar setiap hari. Dari ayam goreng crispy, paru balado, sampai cumi cabe ijo — pilih sesukamu.',
    detail: 'Fresh tiap hari',
    accent: 'from-[#3A2A0A]/80',
  },
  {
    id: 4,
    title: 'Minuman Segar',
    subtitle: 'Pas buat nemenin makan siang',
    image: '/images/menu/es-teh-kampul.jpg',
    description: 'Es Teh Kampul segar dengan perasan jeruk nipis. Atau Es Setup tradisional yang menyegarkan. Pelengkap sempurna makan siang di Larasati.',
    detail: 'Mulai Rp5.000',
    accent: 'from-[#0D3A2A]/80',
  },
]

export default function SuasanaSection() {
  return (
    <section id="suasana" className="py-20 bg-[#1A0F0A] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-[#C0392B]/5 blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#F0A500]/10 text-[#F0A500] px-4 py-1.5 rounded-full text-xs font-semibold mb-4">
            🎬 Suasana Kantin
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#F5EDD6] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Tempat yang bikin
            <span className="text-[#F0A500] italic"> kangen</span>
          </h2>
          <p className="text-[#E8D9B5]/60 max-w-md mx-auto text-sm">
            Bukan soal mewah. Tapi soal perasaan hangat yang sulit dijelaskan kata-kata.
          </p>
        </motion.div>

        {/* Scene cards grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {scenes.map((scene, i) => (
            <motion.div
              key={scene.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="relative rounded-2xl overflow-hidden cursor-default group"
              style={{ minHeight: 260 }}
            >
              {/* Real photo background */}
              <Image
                src={scene.image}
                alt={scene.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, 50vw"
              />

              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${scene.accent} to-transparent via-black/20`} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0806]/90 via-[#0D0806]/30 to-transparent" />

              {/* Time badge */}
              <div className="absolute top-4 right-4 bg-black/40 text-white/80 text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                {scene.detail}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <h3
                  className="text-xl sm:text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {scene.title}
                </h3>
                <div className="text-white/60 text-sm mb-2" style={{ fontFamily: 'Caveat, cursive' }}>
                  {scene.subtitle}
                </div>
                <p className="text-white/75 text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                  {scene.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info strips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { icon: '☀️', label: 'Buka setiap hari', sub: 'Senin – Minggu' },
            { icon: '⏰', label: 'Jam Operasional', sub: '08.00 – 22.00' },
            { icon: '🪑', label: 'Tempat duduk', sub: 'Indoor & outdoor' },
            { icon: '🅿️', label: 'Parkir', sub: 'Tersedia gratis' },
          ].map(item => (
            <div
              key={item.label}
              className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-[#F5EDD6] text-xs font-semibold">{item.label}</div>
              <div className="text-[#E8D9B5]/50 text-xs mt-0.5">{item.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
