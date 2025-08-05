import React from 'react';
import { ChefHat, Clock, Star } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Authentic
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-dragon-orange to-dragon-gold">
              Pan-Asian
            </span>
            Experience
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Journey through the diverse flavors of Asia with our carefully crafted dishes, 
            made with traditional techniques and the finest ingredients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('menu')}
              className="bg-gradient-to-r from-dragon-red to-dragon-orange text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-xl transform hover:scale-105 transition-all animate-pulse hover:animate-none"
            >
              Explore Menu
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white hover:text-dragon-dark transition-all"
            >
              Make Reservation
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-float">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ChefHat className="text-dragon-gold" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-2">Master Chefs</h3>
              <p className="text-white/80">Expert chefs with decades of experience in Asian cuisine</p>
            </div>

            <div className="text-center animate-float" style={{ animationDelay: '2s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="text-dragon-gold" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-2">Fresh Daily</h3>
              <p className="text-white/80">All ingredients sourced fresh daily for authentic flavors</p>
            </div>

            <div className="text-center animate-float" style={{ animationDelay: '4s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="text-dragon-gold" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-2">Award Winning</h3>
              <p className="text-white/80">Recognized for excellence in Asian cuisine and service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;