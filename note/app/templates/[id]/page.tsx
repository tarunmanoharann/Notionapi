import { notFound } from 'next/navigation'
import Image from 'next/image'

// This function will be replaced with actual data fetching from Notion
const getTemplate = async (id: string) => {
  const templates = [
    { id: '1', title: 'Brain Buddy', category: 'Website Builders', description: 'Streamline your projects, life, and productivity with Brain Buddy.', image: '/images/placeholder.jpg', price: 29.99 },
    { id: '2', title: 'Integration Hub', category: 'Integrations', description: 'Connect all your tools seamlessly with Integration Hub.', image: '/images/integration-hub.jpg', price: 39.99 },
    // Add more templates here...
  ]
  return templates.find(t => t.id === id)
}

export default async function TemplatePage({ params }: { params: { id: string } }) {
  const template = await getTemplate(params.id)

  if (!template) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 pr-8">
          <Image src={template.image} alt={template.title} width={600} height={400} className="rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{template.title}</h1>
          <p className="text-gray-600 mb-4">{template.category}</p>
          <p className="mb-8">{template.description}</p>
          <p className="text-2xl font-bold mb-8">${template.price}</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Purchase Template
          </button>
        </div>
      </div>
    </div>
  )
}