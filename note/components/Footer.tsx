import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-2">
              <Image src="/images/placeholder.jpg" alt="Knotnote Logo" width={32} height={32} />
              <span className="ml-2 text-xl font-semibold">Knotnote</span>
            </div>
            <p className="text-sm text-gray-600">Built by Tarun.</p>
            <p className="text-sm text-gray-600">Powered by Tarun.</p>
          </div>
          
          <div className="flex-grow flex justify-center">
            <div className="grid grid-cols-2 gap-8 text-xs">
              <div>
                <h3 className="font-semibold mb-2 text-sm">Pages</h3>
                <ul className="space-y-1">
                  <li><a href="#" className="text-gray-600 hover:text-[#774EE0]">Homepage</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#774EE0]">About</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#774EE0]">Submit</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#774EE0]">Contact</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#774EE0]">Terms & Conditions</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#774EE0]">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-sm">Admin</h3>
                <ul className="space-y-1">
                  <li><a href="#" className="text-gray-600 hover:text-[#774EE0]">Style Guide</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#774EE0]">Licenses</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#774EE0]">Instructions</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#774EE0]">Password</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#774EE0]">404</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-0">
            <h3 className="font-semibold mb-4 text-lg">Subscribe</h3>
            <p className="text-sm text-gray-600 mb-4">Discover the best digital resources used by start-up and companies, and get inspired.</p>
            <div className="flex">
              <input type="email" placeholder="Enter your email" className="flex-grow px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#774EE0]" />
              <button className="bg-[#774EE0] text-white px-4 py-2 text-sm rounded-r-md hover:bg-[#5f3eb3] transition-colors">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">&copy; 2023 Knotnote Template. All screenshots © of their respective owners.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-[#774EE0]"><FaLinkedin size={24} /></a>
            <a href="#" className="text-gray-600 hover:text-[#774EE0]"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-600 hover:text-[#774EE0]"><FaInstagram size={24} /></a>
            <a href="#" className="text-gray-600 hover:text-[#774EE0]"><FaFacebook size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}