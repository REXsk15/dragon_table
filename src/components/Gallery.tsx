import React, { useState } from 'react';
import { Instagram, Camera } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Signature dish presentation'
    },
    {
      url: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Thai green curry'
    },
    {
      url: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Ramen bowl'
    },
    {
      url: 'https://images.pexels.com/photos/8601135/pexels-photo-8601135.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Dumplings'
    },
    {
      url: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Restaurant atmosphere'
    },
    {
      url: 'https://images.pexels.com/photos/725998/pexels-photo-725998.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Fried rice'
    },
    {
      url: 'https://images.pexels.com/photos/4220990/pexels-photo-4220990.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Pad Thai'
    },
    {
      url: 'https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Mango sticky rice'
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-dragon-dark mb-6">
            Food
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dragon-orange to-dragon-red ml-3">
              Gallery
            </span>
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            A visual feast of our culinary creations and dining experience
          </p>
          <div className="flex justify-center items-center space-x-4">
            <Instagram className="text-dragon-orange" size={24} />
            <span className="font-body text-gray-600">Follow @dragonstable for more delicious updates</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 group-hover:rotate-2 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <Camera className="text-white" size={20} />
                    <button className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg animate-slide-up"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}
        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-dragon-orange to-dragon-red text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transform hover:scale-105 hover:rotate-2 transition-all">
            Visit Our Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;