export default function FilterSection() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Filter Templates</h2>
        <div className="flex flex-wrap gap-4">
          <select className="border rounded-md px-3 py-2 w-full sm:w-auto">
            <option>Category</option>
            <option>Website Builders</option>
            <option>Forms</option>
            <option>Integrations</option>
          </select>
          <select className="border rounded-md px-3 py-2 w-full sm:w-auto">
            <option>Price Range</option>
            <option>Free</option>
            <option>$1 - $50</option>
            <option>$51 - $100</option>
          </select>
          <input
            type="text"
            placeholder="Search templates"
            className="border rounded-md px-3 py-2 w-full sm:w-auto"
          />
          <button className="bg-purple text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors w-full sm:w-auto">
            Apply Filters
          </button>
        </div>
      </div>
    )
  }