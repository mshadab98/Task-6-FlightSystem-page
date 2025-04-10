import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plane, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Plane className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">SkyWay</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-blue-600 font-medium hover:text-blue-700">Home</Link>
            <Link to="/flights" className="text-gray-500 hover:text-blue-600 font-medium">Flights</Link>
            <Link to="/offers" className="text-gray-500 hover:text-blue-600 font-medium">Offers</Link>
            <Link to="/support" className="text-gray-500 hover:text-blue-600 font-medium">Support</Link>
            <Link to="/contact" className="text-gray-500 hover:text-blue-600 font-medium">Contact</Link>
            <Link to="/auth" className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <User size={20} />
              <span>Sign In</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-blue-600 font-medium">Home</Link>
            <Link to="/flights" className="block px-3 py-2 text-gray-500 hover:text-blue-600 font-medium">Flights</Link>
            <Link to="/offers" className="block px-3 py-2 text-gray-500 hover:text-blue-600 font-medium">Offers</Link>
            <Link to="/support" className="block px-3 py-2 text-gray-500 hover:text-blue-600 font-medium">Support</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-500 hover:text-blue-600 font-medium">Contact</Link>
            <Link to="/auth" className="flex items-center space-x-2 px-3 py-2 text-blue-600 font-medium">
              <User size={20} />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
