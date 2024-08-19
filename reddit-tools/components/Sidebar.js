import Link from 'next/link';

const categories = [
  'All', 'Artificial intelligence', 'Productivity', 'Marketing', 'Developer tools',
  'Design', 'SEO', 'Chatbots', 'Social media', 'Content creation', 'No code',
  'Writing', 'Customer support', 'Sales', 'Blogging', 'Productized services',
  'iOS', 'Developer APIs', 'Website builders', 'Analytics'
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md">
      <nav className="mt-5">
        {categories.map((category, index) => (
          <Link key={index} href={`/category/${category.toLowerCase().replace(' ', '-')}`} className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            {category}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
