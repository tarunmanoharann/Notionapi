export default function Newsletter() {
    return (
      <section className="bg-gradient-to-r from-purple to-blue-600 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Get the latest resources, weekly.</h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Discover the best digital resources used by start-ups and companies, and get inspired.
          </p>
          <form className="flex flex-col sm:flex-row justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 w-full sm:w-2/3 rounded-l-md border-t border-b border-l text-black focus:outline-none focus:ring-2 focus:ring-[#774EE0]"
            />
            <button
              type="submit"
              className="bg-violet-600 text-white px-6 py-3 rounded-r-md hover:bg-purple-700 transition-colors w-full sm:w-1/3 mt-2 sm:mt-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    );
  }
  