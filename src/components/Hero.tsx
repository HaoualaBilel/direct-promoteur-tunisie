
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

// Array of banner images for rotation
const bannerImages = [
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000",
  "https://images.unsplash.com/photo-1580216643062-cf460548a66a?auto=format&fit=crop&w=2000",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000",
  "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=2000"
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Rotate through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % bannerImages.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[600px] bg-mineral/90 overflow-hidden">
      {/* Background images with transition */}
      {bannerImages.map((image, index) => (
        <div 
          key={index}
          className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out" 
          style={{
            backgroundImage: `url("${image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)',
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}
      
      {/* Banner indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentImageIndex ? 'bg-white' : 'bg-white/40'
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 container-custom">
        <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs text-white">
          Espace publicitaire
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl animate-fade-in">
          Découvrez les meilleurs projets immobiliers en Tunisie
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-slide-in">
          Connectez-vous directement avec les promoteurs de confiance pour trouver votre bien immobilier idéal
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="bg-sage text-mineral hover:bg-sage/90 px-8 py-6 text-lg">
            <Link to="/projets">Explorer les projets</Link>
          </Button>
          <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
            <Link to="/contact">Contactez-nous</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
