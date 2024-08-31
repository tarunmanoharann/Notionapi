import Image from 'next/image'

export default function TemplateGrid() {
  const templates = [
    { id: 1, title: 'Template 1', category: 'Website Builders', image: '/placeholder.jpg' },
    { id: 2, title: 'Template 2', category: 'Forms', image: '/placeholder.jpg' },
    { id: 3, title: 'Template 3', category: 'Website Builders', image: '/placeholder.jpg' },
    { id: 4, title: 'Template 4', category: 'Forms', image: '/placeholder.jpg' },
    { id: 5, title: 'Template 5', category: 'Website Builders', image: '/placeholder.jpg' },
    { id: 6, title: 'Template 6', category: 'Forms', image: '/placeholder.jpg' },
  ]

  return (
    <div className="w-3/4">
      <div className="grid grid-cols-3 gap-6">
        {templates.map((template) => (
          <div key={template.id} className="border rounded-lg overflow-hidden shadow-md">
            <Image src={template.image} alt={template.title} width={400} height={200} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{template.title}</h3>
              <p className="text-gray-600">{template.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}