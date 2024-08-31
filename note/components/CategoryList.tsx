export default function CategoryList() {
    const categories = [
      { name: 'Integrations', count: 22 },
      { name: 'Plugins & Power-ups', count: 5 },
      { name: 'Website Builders', count: 6 },
      { name: 'Chrome Extensions', count: 7 },
      { name: 'Forms', count: 1 },
    ]
  
    return (
      <aside className="w-1/4">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span>{category.name}</span>
              <span className="text-gray-500">{category.count}</span>
            </li>
          ))}
        </ul>
      </aside>
    )
  }