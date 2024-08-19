export default function ToolCard({ tool }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <img src={tool.icon} alt={tool.name} className="w-12 h-12 mb-2" />
        <h3 className="font-semibold text-lg mb-1">{tool.name}</h3>
        <p className="text-sm text-gray-600">{tool.description}</p>
        {tool.isNew && (
          <span className="inline-block bg-purple-200 text-purple-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide mt-2">
            New
          </span>
        )}
      </div>
    )
  }