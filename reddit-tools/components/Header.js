import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">1000</h1>
        <div className="flex items-center">
          <span className="text-green-500 mr-4">• 43 spots left</span>
          <Link href="/analytics" className="text-gray-500 hover:text-gray-700 mr-4">
            Analytics
          </Link>
          <Link href="/submit" className="text-gray-500 hover:text-gray-700 mr-4">
            Submit
          </Link>
          <Link href="/login" className="text-gray-500 hover:text-gray-700">
            Log in
          </Link>
        </div>
      </div>
    </header>
  );
}
