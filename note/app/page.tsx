import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import TemplateGrid from '@/components/TemplateGrid'
import CategoryList from '@/components/CategoryList'
import Newsletter from '@/components/Newsletter'
import FilterSection from '@/components/FilterSection'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <FilterSection />
            <div className="flex flex-col lg:flex-row gap-8 mt-8">
              <CategoryList />
              <TemplateGrid />
            </div>
          </div>
        </div>
      </main>
      <Newsletter />
    </div>
  )
}