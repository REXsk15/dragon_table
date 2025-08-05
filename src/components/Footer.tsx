import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-dragon-red to-dragon-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">龍</span>
              </div>
              <h3 className="font-display text-2xl font-bold">Dragon's Table</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Experience the authentic flavors of Asia in a warm, welcoming atmosphere. 
              Where tradition meets innovation, and every meal is a celebration.
            </p>
            <div className="flex space-x-4">
              <div className="bg-gray-800 p-3 rounded-full hover:bg-dragon-orange transition-colors cursor-pointer">
                <Facebook size={20} />
              </div>
              <div className="bg-gray-800 p-3 rounded-full hover:bg-dragon-orange transition-colors cursor-pointer">
                <Instagram size={20} />
              </div>
              <div className="bg-gray-800 p-3 rounded-full hover:bg-dragon-orange transition-colors cursor-pointer">
                <Twitter size={20} />
              </div>
              <div className="bg-gray-800 p-3 rounded-full hover:bg-dragon-orange transition-colors cursor-pointer">
                <Youtube size={20} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-dragon-orange transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-dragon-orange transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-dragon-orange transition-colors">Menu</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-dragon-orange transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-dragon-orange transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>123 Asian Street</p>
              <p>Food District, FC 12345</p>
              <p>(555) 123-4567</p>
              <p>info@dragonstable.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Dragon's Table. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="text-dragon-red" size={16} fill="currentColor" />
              <span>for food lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;