'use client';

import React from "react";
import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X, Home, Briefcase, User, DollarSign } from 'lucide-react';

// Main Page Component
export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState('buy');
  
  // Sample services data
  const services = {
    buy: [
      { id: 1, title: 'Home Purchase Consultation', price: '₹5,000' },
      { id: 2, title: 'Property Valuation', price: '₹3,500' },
      { id: 3, title: 'Legal Assistance', price: '₹7,000' }
    ],
    sell: [
      { id: 4, title: 'Home Staging', price: '₹8,000' },
      { id: 5, title: 'Photography Services', price: '₹4,500' },
      { id: 6, title: 'Listing Optimization', price: '₹2,500' }
    ],
    rent: [
      { id: 7, title: 'Rental Agreement', price: '₹2,000' },
      { id: 8, title: 'Tenant Screening', price: '₹3,000' },
      { id: 9, title: 'Property Management', price: '₹6,000/mo' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navbar /> Removed Navbar */}
      <main>
        <CategoryFilter activeCategory={activeFilter} onFilterChange={setActiveFilter} />
        
        <div className="max-w-7xl mx-auto px-5 py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services[activeFilter].map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

// Category Filter Component
const CategoryFilter = ({ activeCategory, onFilterChange }) => {
  const categories = [
    { id: 'buy', label: 'Buy', icon: <DollarSign className="w-4 h-4" /> },
    { id: 'sell', label: 'Sell', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'rent', label: 'Rent', icon: <Home className="w-4 h-4" /> }
  ];

  return (
    <div className="max-w-7xl mx-auto px-5 py-8 bg-white">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-black mb-6 tracking-tight">
          Explore <span className="text-yellow-600">Services</span>
        </h2>
        
        <div className="relative w-full max-w-md">
          <div 
            className={`absolute top-0 h-full bg-yellow-50 rounded-lg transition-all duration-300 ease-in-out ${
              activeCategory === 'buy' ? 'left-0 w-1/3' : 
              activeCategory === 'sell' ? 'left-1/3 w-1/3' : 
              'left-2/3 w-1/3'
            }`}
          />
          
          <div className="relative grid grid-cols-3 gap-1 bg-gray-50 rounded-lg p-1 border border-gray-100 shadow-inner">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onFilterChange(category.id)}
                className={`flex flex-col items-center justify-center py-3 px-4 rounded-md transition-all duration-200 ${
                  activeCategory === category.id 
                    ? 'text-yellow-600 font-medium' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                <span className="mb-1.5">
                  {React.cloneElement(category.icon, {
                    className: `${category.icon.props.className} ${
                      activeCategory === category.id ? 'scale-110' : ''
                    } transition-transform`
                  })}
                </span>
                <span className="text-sm tracking-wide">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="h-40 bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center">
        <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white">
          <Briefcase className="w-5 h-5" />
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-gray-800 mb-2">{service.title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-yellow-600 font-medium">{service.price}</span>
          <button className="text-sm bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const NavLink = ({ href, icon, children }) => (
  <Link
    href={href}
    className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600 px-4 py-2 rounded-lg transition-all duration-200 group"
  >
    <span className="group-hover:scale-110 transition-transform">{icon}</span>
    <span className="font-medium text-sm tracking-wide">{children}</span>
  </Link>
);

const MobileNavLink = ({ href, icon, children, onClick }) => (
  <Link
    href={href}
    className="flex items-center space-x-3 text-gray-700 hover:text-yellow-600 block px-4 py-3 rounded-lg transition-all duration-200 hover:bg-yellow-50"
    onClick={onClick}
  >
    {icon}
    <span className="font-medium">{children}</span>
  </Link>
);

const CartButton = ({ count, mobile = false }) => (
  <Link
    href="/cart"
    className={`relative ${mobile ? 'p-2' : 'p-2.5'} text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-all duration-200 group`}
  >
    <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
    {count > 0 && (
      <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
        {count}
      </span>
    )}
  </Link>
);