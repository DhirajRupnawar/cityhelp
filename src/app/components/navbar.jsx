'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X, Home, Briefcase, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white backdrop-blur-sm bg-opacity-80 border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center shadow-sm group-hover:rotate-6 transition-transform duration-300">
              <span className="text-white font-bold text-lg">CH</span>
            </div>
            <span className="ml-3 text-2xl font-semibold text-black tracking-tight">
              City<span className="text-yellow-600">Help</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="/" icon={<Home className="w-4 h-4" />}>
              Home
            </NavLink>
            <NavLink href="/ServicesPage" icon={<Briefcase className="w-4 h-4" />}>
              Services
            </NavLink>
            <NavLink href="/account" icon={<User className="w-4 h-4" />}>
              Account
            </NavLink>
            
            <div className="w-px h-6 bg-gray-200 mx-2"></div>
            
            <CartButton count={3} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <CartButton count={3} mobile />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-700 hover:text-yellow-600 hover:bg-yellow-50 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-4 space-y-1">
              <MobileNavLink 
                href="/" 
                icon={<Home className="w-5 h-5" />}
                onClick={toggleMenu}
              >
                Home
              </MobileNavLink>
              <MobileNavLink 
                href="/services" 
                icon={<Briefcase className="w-5 h-5" />}
                onClick={toggleMenu}
              >
                Services
              </MobileNavLink>
              <MobileNavLink 
                href="/account" 
                icon={<User className="w-5 h-5" />}
                onClick={toggleMenu}
              >
                Account
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Reusable NavLink component
const NavLink = ({ href, icon, children }) => (
  <Link
    href={href}
    className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600 px-4 py-2 rounded-lg transition-all duration-200 group"
  >
    <span className="group-hover:scale-110 transition-transform">
      {icon}
    </span>
    <span className="font-medium text-sm tracking-wide">{children}</span>
  </Link>
);

// Reusable MobileNavLink component
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

// Reusable CartButton component
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

export default Navbar;