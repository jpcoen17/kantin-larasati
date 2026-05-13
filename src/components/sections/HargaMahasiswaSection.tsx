'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { formatPrice } from '@/lib/menuData'

const favorites = [
  {
    name: 'Nasi Jotos',
    price: 15000,
    note: 'Porsi gede, dompet aman!',
    image: '/images/menu/nasi-jotos.jpg',
    tag: 'Paling Murah',
  },
  {
    name: 'Nasi Tongkol Suwir Kemangi + Sayur',
    price: 17000,
    note: 'Best seller wajib coba!',
    image: '/images/menu/nasi-tongkol-suwir-kemangi-plus-1-sayur.jpg',
    tag: 'Paling Favorit',
  },
  {
    name: 'Nasi Ayam Suwir Kuning + Sayur',
    price: 17000,
    note: 'Rasa eyang banget',
    image: '/images/menu/nasi-ayam-suwir-kuning-plus-1-sayur.jpg',
    tag: 'Terasa Rumahan',
  },
  {
    name: 'Nasi Ayam Goreng + Sayur',
    price: 23000,
    note: 'Crispy & juicy, klasik!',
    image: '/images/menu/nasi-ayam-goreng-plus-1-sayur.jpg',
    tag: 'Paling Crispy',
  },
]

const notes = [
  { text: '"Rp17rb udah kenyang + enak + sambel. Worth it banget!"', color: '#FFF9C4', rotate: -2 },
  { text: '"Buka pas jam makan siang, antriannya ramai tapi cepet."', color: '#C8E6C9', rotate: 1.5 },
  { text: '"Tongkol suwirnya bikin kangen tiap hari."', color: '#FFCCBC', rotate: -1 },
]

export default function HargaMahasiswaSection() {
  return (
    <section id="harga" className="py-20 bg-[#FDF6E3] relative overflow-hidden">
      <div className="absolute inset-0 paper-texture opacity-60" />
      <div className="absolute left-16 top-0 bottom-0 w-px bg-[#C0392B]/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div
            className="text-[#C0392B] text-4xl sm:text-5xl font-bold mb-2"
            style={{ fontFamily: 'Caveat, cursive' }}
          >
            Enak gak harus mahal.
          </div>
          <p className="text-[#5C3D2E]/70 text-sm max-w-md mx-auto">
            Harga mahasiswa sejati. Dompet aman, perut kenyang, hati senang.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: pricing cards with real photos */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-[#8B5E3C]/60 uppercase tracking-widest mb-6 pl-2 border-l-2 border-[#C0392B]">
              Pilihan Favorit Anak Kos
            </div>

            {favorites.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E8D9B5] hover:border-[#C0392B]/40 transition-all group hover:shadow-md"
              >
                {/* Thumbnail */}
                <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="80px"
                  />
                </div>

                <div className="flex-1 min-w-0 py-3 pr-3">
                  <div className="font-semibold text-[#1A0F0A] text-sm leading-tight mb-1 line-clamp-1">{item.name}</div>
                  <div className="text-[#4A7C59] text-xs" style={{ fontFamily: 'Caveat, cursive' }}>
                    {item.note}
                  </div>
                </div>

                <div className="text-right flex-shrink-0 pr-4">
                  <div className="text-lg font-bold text-[#C0392B]">{formatPrice(item.price)}</div>
                  <div className="text-[10px] text-[#8B5E3C]/60 bg-[#F0A500]/10 px-2 py-0.5 rounded-full whitespace-nowrap mt-1">
                    {item.tag}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Combo highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Photo strip */}
              <div className="relative h-28 overflow-hidden">
                <Image
                  src="/images/menu/nasi-tongkol-suwir-kemangi-plus-1-sayur-plus-es-teh.jpg"
                  alt="Combo Tongkol + Es Teh"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#C0392B]/80 to-[#8B2020]/70" />
                <div className="absolute inset-0 flex items-center justify-between px-5">
                  <div>
                    <div className="text-white/90 text-xs mb-1">Combo Paling Worth It! 🔥</div>
                    <div
                      className="text-white text-xl font-bold"
                      style={{ fontFamily: 'Caveat, cursive' }}
                    >
                      Tongkol + Sayur + Es Teh
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                      ~Rp22rb
                    </div>
                    <div className="text-white/60 text-xs">estimasi total</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: sticky notes + price chart */}
          <div className="relative">
            <div className="text-xs font-semibold text-[#8B5E3C]/60 uppercase tracking-widest mb-6 pl-2 border-l-2 border-[#4A7C59]">
              Kata Teman-Teman
            </div>

            <div className="space-y-4">
              {notes.map((note, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: note.rotate }}
                  whileHover={{ rotate: 0, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, type: 'spring', stiffness: 200 }}
                  className="relative p-5 rounded-sm shadow-md"
                  style={{ background: note.color }}
                >
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-[#C0392B] rounded-full shadow-md" />
                  <p className="text-[#1A0F0A]/80 leading-relaxed" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.1rem' }}>
                    {note.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Price chart */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 bg-white rounded-2xl p-5 border border-[#E8D9B5]"
            >
              <div className="text-sm font-semibold text-[#1A0F0A] mb-4">Perbandingan Harga 🪙</div>
              {[
                { label: 'Kopi kekinian', price: 'Rp30rb+', bar: 85 },
                { label: 'Mie instant', price: 'Rp4rb', bar: 12 },
                { label: 'Kantin Larasati', price: 'Rp15–25rb', bar: 45, highlight: true },
              ].map(item => (
                <div key={item.label} className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className={item.highlight ? 'font-bold text-[#C0392B]' : 'text-[#5C3D2E]/70'}>{item.label}</span>
                    <span className={item.highlight ? 'font-bold text-[#C0392B]' : 'text-[#5C3D2E]/70'}>{item.price}</span>
                  </div>
                  <div className="h-2 bg-[#E8D9B5] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      style={{ width: `${item.bar}%`, transformOrigin: 'left' }}
                      className={`h-full rounded-full ${item.highlight ? 'bg-[#C0392B]' : 'bg-[#8B5E3C]/30'}`}
                    />
                  </div>
                </div>
              ))}
              <div className="text-xs text-[#4A7C59] mt-3" style={{ fontFamily: 'Caveat, cursive' }}>
                ✅ Kenyang + enak + harga dompet mahasiswa
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
