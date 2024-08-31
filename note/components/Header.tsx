import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">KnotNote</Link>
        <nav className="space-x-4">
          <Link href="/blog" className="hover:text-purple transition-colors">Blog</Link>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">Submit</button>
        </nav>
      </div>
    </header>
  )
}