'use client'

import { motion } from 'framer-motion'
import { MapPin, Instagram, ExternalLink, Clock, Phone } from 'lucide-react'

export default function LocationSection() {
  return (
    <section id="lokasi" className="py-20 bg-[#E8D9B5] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(139,94,60,0.05) 40px, rgba(139,94,60,0.05) 41px)`
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#4A7C59]/15 text-[#4A7C59] px-4 py-1.5 rounded-full text-xs font-semibold mb-4">
            📍 Temukan Kami
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1A0F0A] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Di sini kami menunggu
          </h2>
          <p className="text-[#5C3D2E]/70 text-sm max-w-sm mx-auto">
            Mudah dijangkau dari berbagai penjuru Jogja. Dekat kampus, dekat kos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Info cards */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8D9B5]"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C0392B]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-[#C0392B]" />
                </div>
                <div>
                  <div className="font-semibold text-[#1A0F0A] mb-1">Alamat</div>
                  <div className="text-[#5C3D2E]/70 text-sm leading-relaxed">
                    Kantin Larasati, Yogyakarta<br />
                    Area Kampus, Sleman, DIY
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8D9B5]"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F0A500]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-[#F0A500]" />
                </div>
                <div>
                  <div className="font-semibold text-[#1A0F0A] mb-1">Jam Buka</div>
                  <div className="text-[#5C3D2E]/70 text-sm leading-relaxed">
                    Senin – Minggu: 08.00 – 22.00 WIB<br />
                    
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              <a
                href="https://www.google.com/maps/place/Kantin+Larasati/@-7.7551413,110.3965295"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-[#C0392B] text-white font-semibold rounded-xl text-sm hover:bg-[#E74C3C] transition-colors"
              >
                <MapPin size={14} /> Google Maps
              </a>
              <a
                href="https://www.instagram.com/kantinlarasati/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl text-sm hover:opacity-90 transition-opacity"
              >
                <Instagram size={14} /> Instagram
              </a>
              <a
                href="https://www.instagram.com/kantinlarasati/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-[#4A7C59] text-white font-semibold rounded-xl text-sm hover:bg-[#5A9068] transition-colors"
              >
                <ExternalLink size={14} /> Pesan Online
              </a>
            </motion.div>

            {/* Tips */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-[#F0A500]/10 border border-[#F0A500]/30 rounded-xl p-4"
            >
              <div
                className="text-[#8B5E3C] text-sm leading-relaxed"
                style={{ fontFamily: 'Caveat, cursive', fontSize: '1rem' }}
              >
                💡 Tips: Datang sebelum jam 12 siang kalau mau dapat tongkol suwir fresh! Habis cepet.
              </div>
            </motion.div>
          </div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-[#E8D9B5] h-80 lg:h-full min-h-64"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.7055978!2d110.3965295!3d-7.7551413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59313a148b4f%3A0xd70bcb90423017a!2sKantin%20Larasati!5e0!3m2!1sen!2sid!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kantin Larasati Google Maps"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
