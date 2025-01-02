import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="bg-gray-800 text-white p-4">
      {/* Desktop layout */}
      <div className="hidden md:flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">Sovereign Strength</a>
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-gray-300">{link.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black text-white z-50 p-8">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-gray-300 block" onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
