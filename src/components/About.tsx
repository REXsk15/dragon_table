import React from 'react';
import { Heart, Globe, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Restaurant interior"
                className="w-full h-96 object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-dragon-red text-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-dragon-dark mb-6">
                Our Story of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-dragon-orange to-dragon-red">
                  Culinary Excellence
                </span>
              </h2>
              <p className="font-body text-lg text-gray-600 leading-relaxed mb-6">
                Dragon's Table began as a dream to bring the authentic flavors of Asia to our community. 
                Founded by Chef Ming Wei, who trained in the kitchens of Hong Kong, Bangkok, and Tokyo, 
                our restaurant represents a harmonious blend of traditional techniques and modern presentation.
              </p>
              <p className="font-body text-lg text-gray-600 leading-relaxed">
                Every dish tells a story of our heritage, crafted with passion and served with pride. 
                We source the finest ingredients and honor the time-tested recipes that have been 
                passed down through generations.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Heart className="text-dragon-red mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-dragon-dark">10k+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Globe className="text-dragon-orange mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-dragon-dark">8</div>
                <div className="text-sm text-gray-600">Asian Countries</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Users className="text-dragon-gold mx-auto mb-2" size={32} />
                <div className="text-2xl font-bold text-dragon-dark">15</div>
                <div className="text-sm text-gray-600">Expert Chefs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;