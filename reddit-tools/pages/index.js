import Layout from '../components/Layout'
import ToolCard from '../components/ToolCard'
import '../src/app/globals.css'

export default function Home() {
  // This is where you'd fetch data from your backend API
  const tools = [
    { name: "Osum Market Research", description: "Instant access to competitive research, SWOT analysis, buyer...", icon: "/icons/osum.png", isNew: false },
    { name: "Launchable Studio", description: "Get MVP in 2-4 weeks. Grow it with monthly subscription.", icon: "/icons/launchable.png", isNew: false },
    // ... add more tools
  ]

  return (
    <Layout>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">An exclusive list of the 1000 best tools.</h2>
        <p className="text-gray-600">Carefully vetted and maintained by humans.</p>
        <div className="mt-4">
          <button className="bg-black text-white px-4 py-2 rounded mr-2">+ Submit tool</button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded border border-gray-300">Subscribe</button>
        </div>
      </div>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tools.map((tool, index) => (
          <ToolCard key={index} tool={tool} />
        ))}
      </div>
    </Layout>
  )
}