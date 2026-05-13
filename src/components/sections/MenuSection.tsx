'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Flame } from 'lucide-react'
import { menuItems, menuCategories, MenuItem, formatPrice } from '@/lib/menuData'
import MenuModal from '@/components/MenuModal'

function MenuCard({ item, onClick }: { item: MenuItem; onClick: () => void }) {
  const isBestSeller = item.isBestSeller

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      onClick={onClick}
      className={`relative cursor-pointer rounded-2xl overflow-hidden ${
        isBestSeller
          ? 'bestseller-glow bg-gradient-to-br from-[#3D1C0E] to-[#2C1810] col-span-1 sm:col-span-2 lg:col-span-2'
          : 'bg-white shadow-sm hover:shadow-md border border-[#E8D9B5]'
      }`}
    >
      {isBestSeller ? (
        /* Best seller — large card with real photo */
        <div className="flex flex-col sm:flex-row">
          {/* Photo */}
          <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
            {item.image ? (
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 192px"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[#4A2010]">
                <span className="text-6xl">{item.emoji}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#2C1810]/60 sm:block hidden" />
          </div>

          {/* Content */}
          <div className="flex-1 p-5 sm:p-6 relative">
            <span className="inline-flex items-center gap-1 bg-[#C0392B] text-white px-3 py-1 rounded-full text-xs font-bold mb-3 badge-float">
              <Star size={10} fill="white" /> BEST SELLER
            </span>
            <h3
              className="text-xl sm:text-2xl font-bold text-[#F5EDD6] mb-2 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {item.name}
            </h3>
            {item.description && (
              <p className="text-[#E8D9B5]/70 text-sm leading-relaxed mb-4 line-clamp-2">
                {item.description}
              </p>
            )}
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-[#F0A500]">{formatPrice(item.price)}</div>
              <div className="flex items-center gap-1">
                {Array.from({ length: item.spiceLevel || 0 }).map((_, i) => (
                  <Flame key={i} size={14} className="text-[#C0392B]" fill="#C0392B" />
                ))}
              </div>
            </div>
            <div className="absolute bottom-3 right-4 text-[#E8D9B5]/30 text-xs">Tap untuk detail →</div>
          </div>
        </div>
      ) : (
        /* Regular card */
        <div>
          {/* Photo */}
          <div className="relative h-36 overflow-hidden bg-[#E8D9B5]">
            {item.image ? (
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-4xl">{item.emoji}</span>
              </div>
            )}
            {/* Category badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Info */}
          <div className="p-3">
            <h4 className="font-semibold text-[#1A0F0A] text-sm mb-1 leading-tight line-clamp-2">{item.name}</h4>
            <div className="flex items-center justify-between mt-2">
              <span className="font-bold text-[#C0392B] text-sm">{formatPrice(item.price)}</span>
              {item.spiceLevel && item.spiceLevel > 0 ? (
                <div className="flex">
                  {Array.from({ length: Math.min(item.spiceLevel, 3) }).map((_, i) => (
                    <Flame key={i} size={10} className="text-orange-400" fill="currentColor" />
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('paket')
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  const filtered = menuItems.filter(item => item.category === activeCategory)

  return (
    <section id="menu" className="py-20 bg-[#F5EDD6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#C0392B]/10 text-[#C0392B] px-4 py-1.5 rounded-full text-xs font-semibold mb-4">
            🍽️ Daftar Menu Lengkap
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1A0F0A] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Menu Kantin Larasati
          </h2>
          <p className="text-[#5C3D2E]/70 max-w-xl mx-auto text-sm sm:text-base">
            Pilih menu favoritmu. Semua dimasak fresh setiap hari dengan bahan-bahan pilihan.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-[#4A7C59]/10 text-[#4A7C59] px-4 py-2 rounded-full text-xs font-medium">
            ✅ Sistem pesan — bukan prasmanan
          </div>
        </motion.div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 horizontal-scroll">
          {menuCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-[#C0392B] text-white shadow-md'
                  : 'bg-white text-[#5C3D2E] border border-[#E8D9B5] hover:border-[#C0392B]/40'
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map(item => (
              <MenuCard key={item.id} item={item} onClick={() => setSelectedItem(item)} />
            ))}
          </AnimatePresence>
        </motion.div>

        {activeCategory === 'paket' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 bg-[#F0A500]/15 text-[#8B5E3C] px-5 py-2.5 rounded-full text-sm font-medium border border-[#F0A500]/30">
              🧊 Tambah Es Teh untuk semua paket
            </div>
          </motion.div>
        )}
      </div>

      {selectedItem && (
        <MenuModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  )
}
