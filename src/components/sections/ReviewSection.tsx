'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    id: 1,
    text: 'Harga pelajar tapi rasanya rumah.',
    author: 'Mahasiswi UGM',
    detail: 'Tongkol suwirnya nagih banget. Udah hampir tiap hari makan di sini.',
    stars: 5,
    color: '#FFF9C4',
    rotate: -2.5,
  },
  {
    id: 2,
    text: 'Tongkol suwirnya nagih banget.',
    author: 'Kos-kosan Seturan',
    detail: 'Aroma kemanginya menguar dari pintu masuk. Baru masuk udah ngiler duluan!',
    stars: 5,
    color: '#FFCCBC',
    rotate: 1.5,
  },
  {
    id: 3,
    text: 'Kalau ke Jogja pasti makan sini lagi.',
    author: 'Alumni UNY',
    detail: 'Sudah wisuda tapi masih kangen tongkol suwirnya. Rasanya kayak balik ke kampus.',
    stars: 5,
    color: '#C8E6C9',
    rotate: -1,
  },
  {
    id: 4,
    text: 'Worth it banget buat anak kos.',
    author: 'Mahasiswa UPN',
    detail: 'Rp17rb sudah dapat nasi, lauk, sayur, dan kenyang sampai sore. Gak ada duanya.',
    stars: 5,
    color: '#D1C4E9',
    rotate: 2,
  },
  {
    id: 5,
    text: 'Ceker merconnya bikin nagih!',
    author: 'Pedagang Pasar Beringharjo',
    detail: 'Kalau mau yang pedas banget minta ceker mercon. Dijamin keringatan!',
    stars: 5,
    color: '#FFECB3',
    rotate: -1.5,
  },
  {
    id: 6,
    text: 'Suasananya bikin betah, kayak makan di rumah.',
    author: 'Mahasiswi ISI Jogja',
    detail: 'Penjualnya ramah, tempatnya bersih. Tiap hari antri tapi worth it banget.',
    stars: 5,
    color: '#B2EBF2',
    rotate: 1,
  },
]

export default function ReviewSection() {
  return (
    <section id="ulasan" className="py-20 bg-[#F5EDD6] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F0A500]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C0392B]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#F0A500]/15 text-[#8B5E3C] px-4 py-1.5 rounded-full text-xs font-semibold mb-4">
            💬 Kata Mereka
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1A0F0A] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Yang bikin kita
            <span className="text-[#C0392B] italic"> bangga</span>
          </h2>
          <p className="text-[#5C3D2E]/70 max-w-sm mx-auto text-sm">
            Bukan review berbayar. Ini kata-kata tulus dari pelanggan setia kami.
          </p>

          {/* Overall rating */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-3 shadow-sm border border-[#E8D9B5]">
            <div className="text-4xl font-bold text-[#1A0F0A]" style={{ fontFamily: 'Playfair Display, serif' }}>4.8</div>
            <div>
              <div className="flex">
                {Array.from({length: 5}).map((_, i) => (
                  <Star key={i} size={16} className="text-[#F0A500]" fill="#F0A500" />
                ))}
              </div>
              <div className="text-xs text-[#5C3D2E]/60">500+ ulasan di Google Maps</div>
            </div>
          </div>
        </motion.div>

        {/* Review cards — masonry-like grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: review.rotate }}
              whileHover={{ rotate: 0, scale: 1.03, y: -6 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                type: 'spring',
                stiffness: 200,
              }}
              className="relative p-5 sm:p-6 rounded-sm shadow-md cursor-default"
              style={{ background: review.color }}
            >
              {/* Pin */}
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#C0392B] rounded-full shadow-md z-10" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({length: review.stars}).map((_, i) => (
                  <Star key={i} size={12} className="text-[#F0A500]" fill="#F0A500" />
                ))}
              </div>

              {/* Main quote */}
              <blockquote
                className="text-xl sm:text-2xl font-bold text-[#1A0F0A] leading-tight mb-3"
                style={{ fontFamily: 'Caveat, cursive' }}
              >
                &ldquo;{review.text}&rdquo;
              </blockquote>

              {/* Detail */}
              <p className="text-[#5C3D2E]/80 text-xs leading-relaxed mb-3">
                {review.detail}
              </p>

              {/* Author */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#8B5E3C]/20 rounded-full flex items-center justify-center text-xs">
                  👤
                </div>
                <span className="text-xs font-semibold text-[#5C3D2E]">{review.author}</span>
              </div>

              {/* Tape decoration */}
              <div
                className="absolute -top-1 left-8 w-12 h-3 bg-white/50 rounded-sm"
                style={{ transform: 'rotate(-2deg)' }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA to Google Maps */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.google.com/maps/place/Kantin+Larasati/@-7.7551413,110.3965295"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#8B5E3C] underline underline-offset-4 hover:text-[#C0392B] transition-colors"
          >
            Baca semua ulasan di Google Maps →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
