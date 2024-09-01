import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  title: string;
  parentCategory: string;
  category: string;
  image: string;
  description: string;
}

interface ProductGridProps {
  products: Product[];
  activeTab: string;
  activeCategory: string;
}

export default function ProductGrid({ products, activeTab, activeCategory }: ProductGridProps) {
  const filteredProducts = products.filter(p => 
    p.parentCategory === activeTab && 
    (activeCategory === 'All' || p.category === activeCategory)
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredProducts.map((product) => (
        <Link href={`/products/${product.id}`} key={product.id} className="block">
          <div className="bg-gray-100 p-4 rounded-lg hover:shadow-md transition-shadow duration-300">
            <Image src={product.image} alt={product.title} width={300} height={200} className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="font-semibold mb-2">{product.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {product.category}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}