'use client'

import Image from 'next/image'
import { Instagram, MapPin, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1A0F0A] border-t border-white/5 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-full overflow-hidden bg-white flex-shrink-0">
                <Image src="/images/logo-larasati.jpg" alt="Logo Kantin Larasati" width={36} height={36} className="object-cover w-full h-full" />
              </div>
              <div
                className="text-[#F5EDD6] font-bold text-lg"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Kantin Larasati
              </div>
            </div>
            <p className="text-[#E8D9B5]/50 text-xs leading-relaxed max-w-48">
              Tongkol Suwir Kemangi khas Jogja. Murah, hangat, dan bikin kangen.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-[#E8D9B5]/30 text-xs uppercase tracking-wider mb-3 font-semibold">Menu</div>
            <div className="flex flex-col gap-1.5">
              {['Paket Hemat', 'Sayur & Lauk', 'Snack', 'Minuman'].map(item => (
                <a
                  key={item}
                  href="#menu"
                  className="text-[#E8D9B5]/60 text-sm hover:text-[#F0A500] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="text-[#E8D9B5]/30 text-xs uppercase tracking-wider mb-3 font-semibold">Temukan Kami</div>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.instagram.com/kantinlarasati/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#E8D9B5]/60 hover:text-[#F0A500] transition-colors text-sm"
              >
                <Instagram size={14} /> @kantinlarasati
              </a>
              <a
                href="https://www.google.com/maps/place/Kantin+Larasati/@-7.7551413,110.3965295"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#E8D9B5]/60 hover:text-[#F0A500] transition-colors text-sm"
              >
                <MapPin size={14} /> Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[#E8D9B5]/30 text-xs">
            © 2025 Kantin Larasati · Yogyakarta, Indonesia
          </div>
          <div className="flex items-center gap-1 text-[#E8D9B5]/30 text-xs">
            Dibuat dengan <Heart size={10} className="text-[#C0392B] mx-1" fill="#C0392B" /> untuk Jogja
          </div>
        </div>
      </div>
    </footer>
  )
}
