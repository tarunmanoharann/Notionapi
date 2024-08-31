export default function HeroSection() {
    return (
      <section className="bg-gradient-to-r from-purple to-blue-600 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The best resources & tools used by top companies around the globe.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover the best digital resources used by start-up and companies, and get inspired.
          </p>
          <button className="bg-white text-purple px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    )
  }