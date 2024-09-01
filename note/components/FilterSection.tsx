"use client"

import React, { useState, useRef, useEffect } from 'react';
import ProductGrid from './ProductGrid';

const tabs = ['Apps', 'Widgets', 'Templates', 'Creators'];

// This data should come from your Notion database in the future
const products = [
  { id: '1', title: 'Brain Buddy', parentCategory: 'Apps', category: 'Website Builders', image: '/images/placeholder.jpg', description: 'Streamline your projects, life, and productivity with Brain Buddy.' },
  { id: '2', title: 'Integration Hub', parentCategory: 'Apps', category: 'Integrations', image: '/images/placeholder.jpg', description: 'Connect all your tools seamlessly with Integration Hub.' },
  { id: '3', title: 'Power Booster', parentCategory: 'Apps', category: 'Plugins & Power-ups', image: '/images/placeholder.jpg', description: 'Supercharge your workflow with Power Booster.' },
  { id: '4', title: 'Chrome Master', parentCategory: 'Apps', category: 'Chrome Extensions', image: '/images/placeholder.jpg', description: 'Enhance your browsing experience with Chrome Master.' },
  { id: '5', title: 'Form Wizard', parentCategory: 'Apps', category: 'Forms', image: '/images/placeholder.jpg', description: 'Create powerful forms with ease using Form Wizard.' },
  // Add more products here for other parent categories (Widgets, Templates, Creators)
];

const categories = [
  { name: 'All', parentCategory: 'Apps' },
  { name: 'Integrations', parentCategory: 'Apps' },
  { name: 'Plugins & Power-ups', parentCategory: 'Apps' },
  { name: 'Website Builders', parentCategory: 'Apps' },
  { name: 'Chrome Extensions', parentCategory: 'Apps' },
  { name: 'Forms', parentCategory: 'Apps' },
  // Add categories for other parent categories (Widgets, Templates, Creators)
];

export default function FilterSection() {
  const [activeTab, setActiveTab] = useState('Apps');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sliderStyle, setSliderStyle] = useState({});
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const filteredCategories = categories.filter(cat => cat.parentCategory === activeTab);

  const categoryCounts = filteredCategories.reduce((acc, category) => {
    acc[category.name] = products.filter(p => p.category === category.name && p.parentCategory === activeTab).length;
    acc['All'] = products.filter(p => p.parentCategory === activeTab).length;
    return acc;
  }, {} as Record<string, number>);

  useEffect(() => {
    const activeTabIndex = tabs.indexOf(activeTab);
    const tabElement = tabRefs.current[activeTabIndex];
    if (tabElement) {
      setSliderStyle({
        width: `${tabElement.offsetWidth}px`,
        transform: `translateX(${tabElement.offsetLeft}px)`,
        transition: 'all 0.3s ease-in-out',
      });
    }
  }, [activeTab]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex justify-center mb-8 relative">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            ref={(el) => (tabRefs.current[index] = el)}
            className={`px-6 py-3 mx-4 font-semibold rounded-md z-10 relative ${
              activeTab === tab 
                ? 'text-white' 
                : 'text-black'
            } transition-colors duration-300`}
            onClick={() => {
              setActiveTab(tab);
              setActiveCategory('All');
            }}
          >
            {tab}
          </button>
        ))}
        <div 
          className="absolute bottom-0 left-0 h-full bg-violet-500 rounded-md transition-all duration-300 ease-in-out"
          style={sliderStyle}
        ></div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 pr-4 mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul>
            {filteredCategories.map((category) => (
              <li 
                key={category.name} 
                className={`mb-2 flex justify-between cursor-pointer ${activeCategory === category.name ? 'font-bold' : ''}`}
                onClick={() => setActiveCategory(category.name)}
              >
                <span>{category.name}</span>
                <span className="text-gray-500">{categoryCounts[category.name]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-3/4">
          <ProductGrid products={products} activeTab={activeTab} activeCategory={activeCategory} />
        </div>
      </div>
    </div>
  );
}