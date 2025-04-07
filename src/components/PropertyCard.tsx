
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Eye, Heart, BarChart2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  id: string;
  title: string;
  promoter: string;
  promoterId: string;
  location: string;
  handoverDate: string;
  propertyType: string;
  imageUrl: string;
  badges?: { text: string; color: string }[];
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  promoter,
  promoterId,
  location,
  handoverDate,
  propertyType,
  imageUrl,
  badges
}) => {
  // Handle badge display colors
  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'habitation':
        return 'bg-blue-100 text-blue-800';
      case 'commercial':
        return 'bg-purple-100 text-purple-800';
      case 'estivale':
        return 'bg-orange-100 text-orange-800';
      case 'mixte':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getHandoverColor = (date: string) => {
    if (date === 'Immédiate') return 'bg-green-100 text-green-800';
    if (date === 'Vendu') return 'bg-red-100 text-red-800';
    if (date.includes('2025')) return 'bg-amber-100 text-amber-800';
    if (date.includes('2026')) return 'bg-blue-100 text-blue-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="property-card group">
      <div className="relative overflow-hidden">
        {/* Image */}
        <Link to={`/projets/${id}`}>
          <img 
            src={imageUrl} 
            alt={title} 
            className="property-card-image transition-transform duration-500 group-hover:scale-105" 
          />
        </Link>
        
        {/* Actions overlay */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <Button size="icon" variant="secondary" className="rounded-full w-8 h-8 opacity-90">
            <Heart size={16} />
          </Button>
          <Button size="icon" variant="secondary" className="rounded-full w-8 h-8 opacity-90">
            <BarChart2 size={16} />
          </Button>
        </div>
        
        {/* Type badge */}
        <div className="absolute top-4 left-4">
          <span className={`property-card-badge ${getBadgeColor(propertyType)}`}>
            {propertyType === 'habitation' ? 'Habitation' : 
             propertyType === 'commercial' ? 'Commercial' : 
             propertyType === 'estivale' ? 'Estivale' : 'Mixte'}
          </span>
        </div>
        
        {/* Handover date badge */}
        <div className="absolute bottom-4 left-4">
          <span className={`property-card-badge ${getHandoverColor(handoverDate)}`}>
            {handoverDate === 'Immédiate' ? 'Clés immédiate' :
             handoverDate === 'Vendu' ? 'Vendu' : 
             `Clés ${handoverDate}`}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        {/* Title */}
        <Link to={`/projets/${id}`}>
          <h3 className="property-card-title">{title}</h3>
        </Link>
        
        {/* Promoter */}
        <Link to={`/promoteurs/${promoterId}`} className="text-sm text-sage hover:underline">
          {promoter}
        </Link>
        
        {/* Location */}
        <div className="property-card-location mt-2">
          <MapPin size={16} className="text-mineral" />
          <span>{location}</span>
        </div>
        
        {/* View details button */}
        <div className="mt-4 flex justify-between items-center">
          <Button asChild variant="outline" size="sm" className="flex items-center gap-1">
            <Link to={`/projets/${id}`}>
              <Eye size={16} />
              <span>Voir détails</span>
            </Link>
          </Button>
          
          {/* Custom badges if provided */}
          {badges && badges.length > 0 && (
            <div className="flex gap-1">
              {badges.map((badge, index) => (
                <span 
                  key={index}
                  className={`property-card-badge ${badge.color}`}
                >
                  {badge.text}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
