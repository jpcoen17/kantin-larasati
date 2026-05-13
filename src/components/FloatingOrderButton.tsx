'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, X } from 'lucide-react'

export default function FloatingOrderButton() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-6 right-4 sm:right-6 z-50"
        >
          {/* Expanded menu */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className="absolute bottom-16 right-0 bg-[#1A0F0A] rounded-2xl p-4 min-w-48 shadow-2xl border border-white/10"
              >
                <div className="text-xs text-[#E8D9B5]/50 mb-3 font-semibold uppercase tracking-wider">Pesan via</div>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://www.instagram.com/kantinlarasati/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#F5EDD6] hover:text-[#F0A500] transition-colors"
                    onClick={() => setExpanded(false)}
                  >
                    📱 Instagram DM
                  </a>
                  <a
                    href="https://www.google.com/maps/place/Kantin+Larasati/@-7.7551413,110.3965295"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#F5EDD6] hover:text-[#F0A500] transition-colors"
                    onClick={() => setExpanded(false)}
                  >
                    📍 Kunjungi Langsung
                  </a>
                  <a
                    href="#menu"
                    className="flex items-center gap-2 text-sm text-[#F5EDD6] hover:text-[#F0A500] transition-colors"
                    onClick={() => setExpanded(false)}
                  >
                    🍽️ Lihat Menu
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main button */}
          <motion.button
            onClick={() => setExpanded(!expanded)}
            animate={{ scale: expanded ? 1 : [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: expanded ? 0 : Infinity }}
            className="w-14 h-14 bg-[#C0392B] text-white rounded-full shadow-lg shadow-[#C0392B]/40 flex items-center justify-center hover:bg-[#E74C3C] transition-colors"
          >
            {expanded ? <X size={22} /> : <ShoppingBag size={22} />}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
