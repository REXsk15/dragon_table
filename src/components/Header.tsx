import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Menu', href: 'menu' },
    { name: 'Gallery', href: 'gallery' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className={`${isScrolled ? 'hidden' : 'block'} bg-dragon-red text-white py-2`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone size={14} />
                <span>91919191</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin size={14} />
                <span>potheri,food district, SRM</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Open Daily: 11:00 AM - 10:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-dragon-red to-dragon-orange rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">龍</span>
            </div>
            <h1 className={`font-display text-2xl font-bold ${
              isScrolled ? 'text-dragon-dark' : 'text-white'
            }`}>
              Dragon's Table
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-body font-medium hover:text-dragon-orange transition-colors ${
                  isScrolled ? 'text-dragon-dark' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-dragon-orange to-dragon-red text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Reserve Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-dragon-dark' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-dragon-dark hover:bg-gray-50 hover:text-dragon-orange transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="px-4 pt-2">
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-dragon-orange to-dragon-red text-white px-6 py-3 rounded-full font-medium"
              >
                Reserve Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;