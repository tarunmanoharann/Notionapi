import { notFound } from 'next/navigation'

// This will be replaced with actual data fetching from Notion
const getTemplate = async (id: string) => {
  // Simulate API call
  const templates = [
    { id: '1', title: 'Template 1', description: 'Description 1' },
    { id: '2', title: 'Template 2', description: 'Description 2' },
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
      <h1 className="text-3xl font-bold mb-4">{template.title}</h1>
      <p className="mb-8">{template.description}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Purchase Template
      </button>
    </div>
  )
}