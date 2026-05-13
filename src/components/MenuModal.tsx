'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Star, Flame } from 'lucide-react'
import { MenuItem, formatPrice } from '@/lib/menuData'

function SpiceIndicator({ level = 0 }: { level?: number }) {
  const labels = ['Tidak pedas', 'Pedas ringan', 'Pedas ringan', 'Pedas', 'Pedas banget', '🔥 SUPER PEDAS']
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Flame
          key={i}
          size={14}
          className={i < level ? 'text-[#C0392B]' : 'text-gray-200'}
          fill={i < level ? '#C0392B' : 'transparent'}
        />
      ))}
      <span className="text-xs text-gray-500 ml-1">{labels[level]}</span>
    </div>
  )
}

export default function MenuModal({ item, onClose }: { item: MenuItem; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="bg-[#F5EDD6] rounded-t-3xl sm:rounded-2xl w-full sm:max-w-lg overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header image */}
          <div className="relative h-56 sm:h-64 overflow-hidden">
            {item.image ? (
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 512px"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#8B3A2A] via-[#A04030] to-[#5C3D2E] flex items-center justify-center">
                <span className="text-7xl">{item.emoji}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A]/60 via-transparent to-transparent" />
            {item.isBestSeller && (
              <div className="absolute top-4 left-4 bg-[#C0392B] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                <Star size={10} fill="white" /> BEST SELLER
              </div>
            )}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors"
            >
              <X size={16} />
            </button>
            <div className="absolute bottom-4 right-4 bg-[#C0392B] text-white px-4 py-1.5 rounded-full font-bold text-base shadow-lg">
              {formatPrice(item.price)}
            </div>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6">
            <h3
              className="text-xl sm:text-2xl font-bold text-[#1A0F0A] leading-tight mb-2"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {item.name}
            </h3>
            {item.description && (
              <p className="text-[#5C3D2E]/80 text-sm leading-relaxed mb-4">{item.description}</p>
            )}
            {typeof item.spiceLevel === 'number' && item.spiceLevel > 0 && (
              <div className="mb-4">
                <div className="text-xs font-semibold text-[#5C3D2E]/60 mb-1.5 uppercase tracking-wide">Tingkat Kepedasan</div>
                <SpiceIndicator level={item.spiceLevel} />
              </div>
            )}
            {item.pairing && (
              <div className="bg-[#4A7C59]/10 border border-[#4A7C59]/20 rounded-xl p-3 mb-4">
                <div className="text-xs font-semibold text-[#4A7C59] mb-1">💡 Rekomendasi Pasangan</div>
                <p className="text-sm text-[#5C3D2E]">{item.pairing}</p>
              </div>
            )}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/kantinlarasati/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-[#C0392B] text-white font-semibold rounded-xl text-center text-sm hover:bg-[#E74C3C] transition-colors"
              >
                🍽️ Pesan Sekarang
              </a>
              <button
                onClick={onClose}
                className="px-5 py-3 border border-[#8B5E3C]/30 text-[#8B5E3C] font-semibold rounded-xl text-sm hover:bg-[#8B5E3C]/10 transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
