
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
        
        <div className="bg-white rounded-lg overflow-hidden shadow-md p-4 lg:p-0">
          <div className="lg:flex">
            {/* Left side - Map preview */}
            <div className="lg:w-2/3 relative h-[400px] lg:h-auto bg-soft-gray/20 flex items-center justify-center">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: 'url("https://i.imgur.com/ZVD7kc8.png")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Map markers */}
                <div className="absolute top-1/4 left-1/3 animate-pulse">
                  <MapPin size={24} className="text-mineral" fill="#A3B18A" />
                </div>
                <div className="absolute top-1/3 left-1/2 animate-pulse">
                  <MapPin size={24} className="text-mineral" fill="#A3B18A" />
                </div>
                <div className="absolute top-1/2 left-1/4 animate-pulse">
                  <MapPin size={24} className="text-mineral" fill="#A3B18A" />
                </div>
                <div className="absolute bottom-1/3 right-1/3 animate-pulse">
                  <MapPin size={24} className="text-mineral" fill="#A3B18A" />
                </div>
              </div>
              
              <div className="absolute inset-0 bg-mineral/40 flex items-center justify-center">
                <Button asChild className="bg-sage text-mineral hover:bg-sage/90">
                  <Link to="/carte">
                    Voir la carte interactive complète
                  </Link>
                </Button>
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
