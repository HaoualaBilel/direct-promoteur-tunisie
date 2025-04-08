
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Briefcase
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Professional } from '@/types/models';

interface ProfessionalCardProps {
  professional: Professional;
}

const ProfessionalCard: React.FC<ProfessionalCardProps> = ({ professional }) => {
  return (
    <Card className="overflow-hidden h-full hover:shadow-md transition-shadow group border-gray-100">
      <div className="h-40 bg-gray-100 relative">
        {professional.logo ? (
          <img 
            src={professional.logo} 
            alt={professional.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-mineral/10">
            <Building2 size={48} className="text-mineral/40" />
          </div>
        )}
        
        <Badge className="absolute top-3 right-3 bg-mineral/80 text-white">
          {professional.categoryName}
        </Badge>
      </div>
      
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-mineral">
            <Link to={`/professionnels/${professional.id}`} className="hover:underline">
              {professional.name}
            </Link>
          </h3>
          
          {professional.projectCount && professional.projectCount > 0 && (
            <div className="flex items-center gap-1 ml-2">
              <Badge variant="outline" className="flex items-center gap-1 bg-cream hover:bg-cream">
                <Briefcase size={14} className="text-mineral" />
                <span className="font-medium">{professional.projectCount}</span>
              </Badge>
            </div>
          )}
        </div>
        
        <p className="text-sm text-gray-600 mb-3">{professional.specialty}</p>
        
        {professional.location && (
          <div className="flex items-center text-sm text-gray-600 mb-1">
            <MapPin size={14} className="mr-1 text-mineral" />
            <span>{professional.location}</span>
          </div>
        )}
        
        {professional.contact?.phone && (
          <div className="flex items-center text-sm text-gray-600 mb-1">
            <Phone size={14} className="mr-1 text-mineral" />
            <a href={`tel:${professional.contact.phone}`} className="hover:text-mineral transition-colors">
              {professional.contact.phone}
            </a>
          </div>
        )}
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Link to={`/professionnels/${professional.id}`}>
            <Button variant="outline" size="sm" className="w-full hover:bg-mineral hover:text-white transition-colors">
              Voir le profil
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfessionalCard;
