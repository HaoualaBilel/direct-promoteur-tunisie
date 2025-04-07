
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const partners = [
  { id: '1', name: 'Promoteur Alpha', logoUrl: 'https://via.placeholder.com/200x80?text=Logo+1' },
  { id: '2', name: 'Groupe Immobilier Beta', logoUrl: 'https://via.placeholder.com/200x80?text=Logo+2' },
  { id: '3', name: 'Immobilière Gamma', logoUrl: 'https://via.placeholder.com/200x80?text=Logo+3' },
  { id: '4', name: 'Delta Construction', logoUrl: 'https://via.placeholder.com/200x80?text=Logo+4' },
  { id: '5', name: 'Epsilon Développement', logoUrl: 'https://via.placeholder.com/200x80?text=Logo+5' },
  { id: '6', name: 'Zeta Habitation', logoUrl: 'https://via.placeholder.com/200x80?text=Logo+6' },
  { id: '7', name: 'Eta Promoteur', logoUrl: 'https://via.placeholder.com/200x80?text=Logo+7' },
  { id: '8', name: 'Theta Properties', logoUrl: 'https://via.placeholder.com/200x80?text=Logo+8' },
];

const PartnerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 4; // Number of items to show at once
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate next index, wrapping around to the beginning if needed
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % (partners.length - itemsPerSlide + 1)
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Nos Promoteurs Partenaires</h2>
        <p className="section-subtitle text-center">
          Découvrez les promoteurs immobiliers de confiance avec lesquels nous collaborons pour vous offrir les meilleurs projets.
        </p>
        
        <div className="relative overflow-hidden mt-10">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}
          >
            {partners.map((partner) => (
              <div 
                key={partner.id}
                className="min-w-[25%] px-4 flex items-center justify-center"
              >
                <Link 
                  to={`/promoteurs/${partner.id}`}
                  className="block p-6 bg-cream rounded-lg border border-soft-gray hover:border-sage transition-colors"
                >
                  <img 
                    src={partner.logoUrl} 
                    alt={partner.name} 
                    className="h-16 w-auto mx-auto object-contain grayscale hover:grayscale-0 transition-all" 
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/promoteurs"
            className="inline-block py-2 px-4 text-mineral hover:text-sage transition-colors border-b-2 border-sage"
          >
            Voir tous nos promoteurs partenaires
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnerSlider;
