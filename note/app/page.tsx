import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Newsletter from '@/components/Newsletter'
import FilterSection from '@/components/FilterSection'
import Footer from '@/components/Footer'

import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <FilterSection />
          </div>
        </div>
      </main>
      <Newsletter />
      <Footer />
      <Analytics/>
    </div>
  )
}