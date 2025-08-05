import React, { useState } from 'react';
import { Flame, Leaf } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const categories = [
    { id: 'appetizers', name: 'Appetizers', icon: '🥟' },
    { id: 'mains', name: 'Main Dishes', icon: '🍜' },
    { id: 'noodles', name: 'Noodles & Rice', icon: '🍝' },
    { id: 'desserts', name: 'Desserts', icon: '🍮' },
  ];

  const menuItems = {
    appetizers: [
      {
        name: 'Dragon Dumplings',
        description: 'Handmade pork and shrimp dumplings with ginger soy sauce',
        price: '120',
        spicy: false,
        vegetarian: false,
        image: 'https://images.pexels.com/photos/8601135/pexels-photo-8601135.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      },
      {
        name: 'Crispy Spring Rolls',
        description: 'Fresh vegetables wrapped in golden pastry, served with sweet chili sauce',
        price: '100',
        spicy: false,
        vegetarian: true,
        image: 'https://images.pexels.com/photos/6419752/pexels-photo-6419752.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      },
      {
        name: 'Szechuan Chicken Wings',
        description: 'Spicy wings with Szechuan peppercorns and chili oil',
        price: '$14',
        spicy: true,
        vegetarian: false,
        image: 'https://images.pexels.com/photos/17768885/pexels-photo-17768885/free-photo-of-chicken-wings-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      },
    ],
    mains: [
      {
        name: 'Peking Duck',
        description: 'Traditional roasted duck with pancakes, scallions, and hoisin sauce',
        price: '280',
        spicy: false,
        vegetarian: false,
        image: 'https://images.pexels.com/photos/15832879/pexels-photo-15832879/free-photo-of-roasted-duck-with-vegetables.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      },
      {
        name: 'Thai Green Curry',
        description: 'Aromatic curry with coconut milk, Thai basil, and jasmine rice',
        price: '220',
        spicy: true,
        vegetarian: true,
        image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      },
      {
        name: 'Korean BBQ Bulgogi',
        description: 'Marinated beef with Korean spices, served with kimchi and rice',
        price: '260',
        spicy: true,
        vegetarian: false,
        image: 'https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      },
    ],
    noodles: [
      {
        name: 'Dragon Ramen',
        description: 'Rich tonkotsu broth with chashu pork, soft egg, and nori',
        price: '180',
        spicy: false,
        vegetarian: false,
        image: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      },
      {
        name: 'Pad Thai',
        description: 'Stir-fried rice noodles with tamarind, fish sauce, and peanuts',
        price: '160',
        spicy: true,
        vegetarian: false,
        image: 'https://images.pexels.com/photos/4220990/pexels-photo-4220990.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      },
      {
        name: 'Yangzhou Fried Rice',
        description: 'Classic fried rice with shrimp, eggs, and mixed vegetables',
        price: '150',
        spicy: false,
        vegetarian: false,
        image: 'https://images.pexels.com/photos/725998/pexels-photo-725998.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      },
    ],
    desserts: [
      {
        name: 'Mango Sticky Rice',
        description: 'Sweet coconut sticky rice topped with fresh mango slices',
        price: '90',
        spicy: false,
        vegetarian: true,
        image: 'https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      },
      {
        name: 'Matcha Ice Cream',
        description: 'Premium Japanese green tea ice cream with red bean',
        price: '80',
        spicy: false,
        vegetarian: true,
        image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
      },
    ],
  };

  return (
    <section id="menu" className="py-20 bg-dragon-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Our Signature
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-dragon-orange to-dragon-gold">
              Menu
            </span>
          </h2>
          <p className="font-body text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the authentic flavors of Asia, carefully crafted by our master chefs
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-dragon-orange to-dragon-red text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  {item.spicy && (
                    <div className="bg-dragon-red text-white p-1 rounded-full">
                      <Flame size={16} />
                    </div>
                  )}
                  {item.vegetarian && (
                    <div className="bg-dragon-green text-white p-1 rounded-full">
                      <Leaf size={16} />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-xl font-semibold text-dragon-dark">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-dragon-orange">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <button className="w-full bg-gradient-to-r from-dragon-orange to-dragon-red text-white py-2 px-4 rounded-full font-medium hover:shadow-lg transition-all">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;