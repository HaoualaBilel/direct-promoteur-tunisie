
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Briefcase
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Professional } from '@/types/models';

interface ProfessionalListItemProps {
  professional: Professional;
}

const ProfessionalListItem: React.FC<ProfessionalListItemProps> = ({ professional }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
      <div className="w-full md:w-20 h-20">
        {professional.logo ? (
          <img 
            src={professional.logo} 
            alt={professional.name}
            className="w-full h-full object-cover rounded-md" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-mineral/10 rounded-md">
            <Building2 size={24} className="text-mineral/40" />
          </div>
        )}
      </div>
      
      <div className="flex-1">
        <div className="flex flex-wrap items-start justify-between mb-1">
          <h3 className="font-semibold text-mineral">
            <Link to={`/professionnels/${professional.id}`} className="hover:underline">
              {professional.name}
            </Link>
          </h3>
          
          <Badge className="bg-mineral/80 text-white text-xs">
            {professional.categoryName}
          </Badge>
        </div>
        
        <p className="text-sm text-gray-600 mb-2">{professional.specialty}</p>
        
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
          {professional.location && (
            <div className="flex items-center">
              <MapPin size={14} className="mr-1 text-mineral" />
              <span>{professional.location}</span>
            </div>
          )}
          
          {professional.contact?.phone && (
            <div className="flex items-center">
              <Phone size={14} className="mr-1 text-mineral" />
              <a href={`tel:${professional.contact.phone}`} className="hover:text-mineral transition-colors">
                {professional.contact.phone}
              </a>
            </div>
          )}
          
          {professional.contact?.email && (
            <div className="flex items-center">
              <Mail size={14} className="mr-1 text-mineral" />
              <a href={`mailto:${professional.contact.email}`} className="hover:text-mineral transition-colors">
                {professional.contact.email}
              </a>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex items-center md:items-end justify-end md:flex-col gap-2 mt-4 md:mt-0">
        {professional.projectCount && professional.projectCount > 0 && (
          <div className="flex items-center gap-1">
            <Badge variant="outline" className="flex items-center gap-1 bg-cream hover:bg-cream">
              <Briefcase size={16} className="text-mineral" />
              <span className="font-medium">{professional.projectCount} projets</span>
            </Badge>
          </div>
        )}
        
        <Link to={`/professionnels/${professional.id}`}>
          <Button size="sm" className="whitespace-nowrap">
            Voir profil
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProfessionalListItem;
