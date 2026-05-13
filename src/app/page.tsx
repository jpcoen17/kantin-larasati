'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import MenuSection from '@/components/sections/MenuSection'
import HargaMahasiswaSection from '@/components/sections/HargaMahasiswaSection'
import SuasanaSection from '@/components/sections/SuasanaSection'
import ReviewSection from '@/components/sections/ReviewSection'
import LocationSection from '@/components/sections/LocationSection'
import CTASection from '@/components/sections/CTASection'
import FloatingOrderButton from '@/components/FloatingOrderButton'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Lenis smooth scroll init
    const initLenis = async () => {
      try {
        const Lenis = (await import('@studio-freight/lenis')).default
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        })
        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
      } catch (e) {
        // Lenis not critical
      }
    }
    initLenis()
  }, [])

  return (
    <main className="relative bg-cream overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <HargaMahasiswaSection />
      <SuasanaSection />
      <ReviewSection />
      <LocationSection />
      <CTASection />
      <Footer />
      <FloatingOrderButton />
    </main>
  )
}
