
import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const MapSection = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <h2 className="section-title text-center">Carte Interactive</h2>
        <p className="section-subtitle text-center">
          Explorez les projets immobiliers à travers la Tunisie. Cliquez sur les marqueurs pour découvrir les détails de chaque projet.
        </p>
        
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="lg:flex">
            {/* Left side - Google Map iframe */}
            <div className="lg:w-2/3 relative h-[400px] lg:h-[550px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204726.8840417404!2d10.028764387976162!3d36.794682704434536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis!5e0!3m2!1sfr!2stn!4v1712605646813!5m2!1sfr!2stn" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte interactive des projets" 
                className="absolute inset-0"
              />
              
              {/* Overlay with call to action */}
              <div className="absolute inset-0 bg-mineral/20 flex items-center justify-center">
                <Button asChild className="bg-sage text-mineral hover:bg-sage/90">
                  <Link to="/carte">
                    Voir la carte interactive complète
                  </Link>
                </Button>
              </div>
              
              {/* Custom map pins */}
              <div className="absolute top-1/4 left-1/3 z-10 animate-bounce">
                <div className="relative">
                  <MapPin size={32} className="text-mineral" fill="#A3B18A" />
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md text-xs whitespace-nowrap">
                    Résidence Jasmin
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 z-10 animate-bounce">
                <div className="relative">
                  <MapPin size={32} className="text-mineral" fill="#A3B18A" />
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md text-xs whitespace-nowrap">
                    Business Tower
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Featured projects */}
            <div className="lg:w-1/3 p-4 lg:p-6">
              <h3 className="text-xl font-medium text-mineral mb-4">Projets Populaires</h3>
              
              <div className="space-y-4">
                {/* Project items */}
                <div className="flex items-start p-3 rounded-md hover:bg-cream transition-colors">
                  <div className="flex-shrink-0 mr-3">
                    <MapPin size={20} className="text-mineral" />
                  </div>
                  <div>
                    <Link to="/projets/residence-jasmin" className="font-medium text-mineral hover:text-sage transition-colors">
                      Résidence Jasmin
                    </Link>
                    <p className="text-sm text-gray-600">Tunis, La Marsa</p>
                    <span className="text-xs text-green-600">Remise immédiate</span>
                  </div>
                </div>
                
                <div className="flex items-start p-3 rounded-md hover:bg-cream transition-colors">
                  <div className="flex-shrink-0 mr-3">
                    <MapPin size={20} className="text-mineral" />
                  </div>
                  <div>
                    <Link to="/projets/eden-garden" className="font-medium text-mineral hover:text-sage transition-colors">
                      Eden Garden
                    </Link>
                    <p className="text-sm text-gray-600">Sousse, Kantaoui</p>
                    <span className="text-xs text-amber-600">Clés 2025</span>
                  </div>
                </div>
                
                <div className="flex items-start p-3 rounded-md hover:bg-cream transition-colors">
                  <div className="flex-shrink-0 mr-3">
                    <MapPin size={20} className="text-mineral" />
                  </div>
                  <div>
                    <Link to="/projets/azure-residences" className="font-medium text-mineral hover:text-sage transition-colors">
                      Azure Résidences
                    </Link>
                    <p className="text-sm text-gray-600">Hammamet, Centre</p>
                    <span className="text-xs text-blue-600">Clés 2026</span>
                  </div>
                </div>
                
                <div className="flex items-start p-3 rounded-md hover:bg-cream transition-colors">
                  <div className="flex-shrink-0 mr-3">
                    <MapPin size={20} className="text-mineral" />
                  </div>
                  <div>
                    <Link to="/projets/business-tower" className="font-medium text-mineral hover:text-sage transition-colors">
                      Business Tower
                    </Link>
                    <p className="text-sm text-gray-600">Tunis, Les Berges du Lac</p>
                    <span className="text-xs text-purple-600">Commercial</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/projets">
                    Voir tous les projets
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
