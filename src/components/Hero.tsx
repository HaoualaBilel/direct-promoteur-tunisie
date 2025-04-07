
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[600px] bg-mineral/90 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)',
        }}
      />
      
      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 container-custom">
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
