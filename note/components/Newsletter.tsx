export default function Newsletter() {
    return (
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">Get the latest resources, weekly.</h2>
          <p className="mb-6">Discover the best digital resources used by start-up and companies, and get inspired.</p>
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-64 rounded-l-md border-t border-b border-l"
            />
            <button type="submit" className="bg-[#774EE0] text-white px-6 py-2 rounded-r-md">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    )
  }