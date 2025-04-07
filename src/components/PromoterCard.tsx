
import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Mail, Phone, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface PromoterCardProps {
  id: string;
  name: string;
  logoUrl: string;
  projectCount: number;
  email: string;
  phone: string;
  website?: string;
}

const PromoterCard: React.FC<PromoterCardProps> = ({
  id,
  name,
  logoUrl,
  projectCount,
  email,
  phone,
  website
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
      <div className="p-6 flex items-center justify-center bg-soft-gray/20 border-b">
        <Link to={`/promoteurs/${id}`} className="block">
          <img 
            src={logoUrl} 
            alt={name} 
            className="h-20 w-auto object-contain" 
          />
        </Link>
      </div>
      
      <div className="p-4 flex-grow">
        <Link to={`/promoteurs/${id}`}>
          <h3 className="text-lg font-medium text-mineral hover:text-sage transition-colors text-center mb-4">{name}</h3>
        </Link>
        
        <div className="text-center mb-4">
          <span className="inline-block px-3 py-1 text-sm bg-mineral/10 text-mineral rounded-full">
            <Building size={14} className="inline-block mr-1" />
            {projectCount} projets
          </span>
        </div>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <Mail size={16} className="mr-2 text-mineral" />
            <a href={`mailto:${email}`} className="hover:text-sage transition-colors">{email}</a>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Phone size={16} className="mr-2 text-mineral" />
            <a href={`tel:${phone}`} className="hover:text-sage transition-colors">{phone}</a>
          </div>
          
          {website && (
            <div className="flex items-center text-sm text-gray-600">
              <ExternalLink size={16} className="mr-2 text-mineral" />
              <a href={website} target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors">
                Site web
              </a>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-4 border-t">
        <Button asChild className="w-full bg-mineral text-white hover:bg-mineral/90">
          <Link to={`/promoteurs/${id}`}>
            Voir les projets
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PromoterCard;
