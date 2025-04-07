
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface FilterBarProps {
  onFilter?: (filters: any) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilter }) => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [filters, setFilters] = useState({
    remise: '',
    type: '',
    ville: '',
    statut: '',
    standing: ''
  });

  const updateFilter = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    if (onFilter) onFilter(newFilters);
  };

  const resetFilters = () => {
    const resetFilters = {
      remise: '',
      type: '',
      ville: '',
      statut: '',
      standing: ''
    };
    setFilters(resetFilters);
    if (onFilter) onFilter(resetFilters);
  };

  return (
    <div className="bg-white shadow-md rounded-lg mb-12 overflow-hidden">
      <div className="p-4 lg:p-6 border-b border-soft-gray">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Rechercher un projet, une localisation..."
              className="pl-10 h-12"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          
          <div className="lg:hidden">
            <Button 
              variant="outline" 
              className="w-full flex items-center gap-2"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              <Filter size={18} />
              Filtres
            </Button>
          </div>
          
          <div className={`lg:flex gap-2 lg:gap-4 ${showMobileFilters ? 'flex flex-col' : 'hidden'}`}>
            <Select value={filters.remise} onValueChange={(value) => updateFilter('remise', value)}>
              <SelectTrigger className="h-12 w-full lg:w-40">
                <SelectValue placeholder="Remise des clés" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="2026">2026</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="immediate">Immédiate</SelectItem>
                <SelectItem value="vendu">Vendu</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={filters.type} onValueChange={(value) => updateFilter('type', value)}>
              <SelectTrigger className="h-12 w-full lg:w-40">
                <SelectValue placeholder="Type de bien" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="habitation">Habitation</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="estivale">Estivale</SelectItem>
                <SelectItem value="mixte">Mixte</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={filters.ville} onValueChange={(value) => updateFilter('ville', value)}>
              <SelectTrigger className="h-12 w-full lg:w-40">
                <SelectValue placeholder="Localisation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes</SelectItem>
                <SelectItem value="tunis">Tunis</SelectItem>
                <SelectItem value="sousse">Sousse</SelectItem>
                <SelectItem value="sfax">Sfax</SelectItem>
                <SelectItem value="hammamet">Hammamet</SelectItem>
                <SelectItem value="nabeul">Nabeul</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={filters.statut} onValueChange={(value) => updateFilter('statut', value)}>
              <SelectTrigger className="h-12 w-full lg:w-40">
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="sur-plan">Sur plan</SelectItem>
                <SelectItem value="en-cours">En cours</SelectItem>
                <SelectItem value="termine">Terminé</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={filters.standing} onValueChange={(value) => updateFilter('standing', value)}>
              <SelectTrigger className="h-12 w-full lg:w-40">
                <SelectValue placeholder="Standing" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous</SelectItem>
                <SelectItem value="economique">Économique</SelectItem>
                <SelectItem value="moyen">Moyen</SelectItem>
                <SelectItem value="haut">Haut standing</SelectItem>
                <SelectItem value="luxe">Très haut standing</SelectItem>
              </SelectContent>
            </Select>
            
            <Button 
              variant="outline" 
              className="h-12 lg:min-w-[100px]"
              onClick={resetFilters}
            >
              Réinitialiser
            </Button>
          </div>
        </div>
      </div>
      
      <div className="p-4 lg:px-6 flex flex-wrap gap-2">
        <Button 
          variant="ghost" 
          className={`rounded-full px-4 py-2 ${filters.remise === '' ? 'bg-mineral text-white hover:bg-mineral/90' : ''}`}
          onClick={() => updateFilter('remise', '')}
        >
          Tous
        </Button>
        <Button 
          variant="ghost" 
          className={`rounded-full px-4 py-2 ${filters.remise === '2026' ? 'bg-mineral text-white hover:bg-mineral/90' : ''}`}
          onClick={() => updateFilter('remise', '2026')}
        >
          Remise des clés 2026
        </Button>
        <Button 
          variant="ghost" 
          className={`rounded-full px-4 py-2 ${filters.remise === '2025' ? 'bg-mineral text-white hover:bg-mineral/90' : ''}`}
          onClick={() => updateFilter('remise', '2025')}
        >
          Remise des clés 2025
        </Button>
        <Button 
          variant="ghost" 
          className={`rounded-full px-4 py-2 ${filters.remise === 'immediate' ? 'bg-mineral text-white hover:bg-mineral/90' : ''}`}
          onClick={() => updateFilter('remise', 'immediate')}
        >
          Remise immédiate
        </Button>
        <Button 
          variant="ghost" 
          className={`rounded-full px-4 py-2 ${filters.remise === 'vendu' ? 'bg-mineral text-white hover:bg-mineral/90' : ''}`}
          onClick={() => updateFilter('remise', 'vendu')}
        >
          Vendu
        </Button>
      </div>
    </div>
  );
};

export default FilterBar;
