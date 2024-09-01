import { notFound } from 'next/navigation'
import Image from 'next/image'

// This function will be replaced with actual data fetching from Notion
const getProduct = async (id: string) => {
  const products = [
    { id: '1', title: 'Brain Buddy', parentCategory: 'Apps', category: 'Website Builders', description: 'Streamline your projects, life, and productivity with Brain Buddy.', image: '/images/placeholder.jpg', price: 29.99 },
    { id: '2', title: 'Integration Hub', parentCategory: 'Apps', category: 'Integrations', description: 'Connect all your tools seamlessly with Integration Hub.', image: '/images/placeholder.jpg', price: 39.99 },
    // Add more products here...
  ]
  return products.find(p => p.id === id)
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-4">
            <Image src={product.image} alt={product.title} width={500} height={300} className="w-full h-auto rounded-lg" />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-600 mb-4">{product.category}</p>
            <p className="text-lg mb-4">{product.description}</p>
            <p className="text-2xl font-bold mb-4">${product.price}</p>
            <button className="bg-violet-500 text-white px-6 py-2 rounded-md hover:bg-violet-600 transition-colors duration-300">
              Purchase Product
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}