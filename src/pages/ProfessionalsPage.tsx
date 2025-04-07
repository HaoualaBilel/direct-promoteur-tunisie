
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, Phone, Mail, ExternalLink, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Professional, ProfessionalCategory } from '@/types/models';

// Professional categories data
const professionalCategories: ProfessionalCategory[] = [
  { id: '1', name: 'Bâtiment & Gros œuvre', icon: 'building', description: 'Entreprises de construction et de fondation' },
  { id: '2', name: 'Second œuvre', icon: 'layoutGrid', description: 'Cloisons, plâtrerie, revêtements' },
  { id: '3', name: 'Installations techniques', icon: 'info', description: 'Électricité, plomberie, chauffage' },
  { id: '4', name: 'Menuiserie & fermetures', icon: 'doorClosed', description: 'Fenêtres, portes, menuiserie' },
  { id: '5', name: 'Aménagement intérieur', icon: 'home', description: 'Cuisine, décoration, aménagement' },
  { id: '6', name: 'Fermetures extérieures & sécurité', icon: 'doorClosed', description: 'Portes d\'entrée, surveillance' },
  { id: '7', name: 'Extérieurs & communs', icon: 'layoutGrid', description: 'Jardinage, clôtures, piscine' },
  { id: '8', name: 'Élévateurs & accessibilité', icon: 'arrowUp', description: 'Ascenseurs, accessibilité' },
  { id: '9', name: 'Finitions & nettoyage', icon: 'check', description: 'Nettoyage, signalétique' },
  { id: '10', name: 'Services administratifs', icon: 'fileText', description: 'Contrôle technique, études' },
  { id: '11', name: 'Signalétique et branding', icon: 'info', description: 'Enseignes, logo, communication' }
];

// Sample professionals data
const professionalsData: Professional[] = [
  {
    id: 'p1',
    name: 'Entreprise Générale El Bouniène',
    categoryId: '1',
    categoryName: 'Bâtiment & Gros œuvre',
    specialty: 'Entreprise de construction (gros œuvre)',
    description: 'Expert en construction de bâtiments résidentiels et commerciaux depuis plus de 30 ans. Spécialiste des structures en béton armé et des fondations.',
    location: 'Tunis, Tunisie',
    rating: 4.8,
    projectCount: 24,
    founded: 1988,
    contact: {
      phone: '+216 71 123 456',
      email: 'contact@elbouniene.tn',
      website: 'www.elbouniene.tn'
    },
    logo: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300',
    gallery: [
      'https://images.unsplash.com/photo-1580216643062-cf460548a66a?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800'
    ],
    projects: [
      { id: '1', name: 'Résidence Les Jardins de Carthage' },
      { id: '3', name: 'Business Center Tunis' }
    ]
  },
  {
    id: 'p2',
    name: 'Fondations Solides SARL',
    categoryId: '1',
    categoryName: 'Bâtiment & Gros œuvre',
    specialty: 'Entreprise de fondation profonde (pieux, radier…)',
    description: 'Spécialiste des fondations profondes et des technologies innovantes pour les sols difficiles. Intervention sur les grands projets d\'infrastructure.',
    location: 'Sousse, Tunisie',
    rating: 4.5,
    projectCount: 18,
    founded: 2005,
    contact: {
      phone: '+216 71 222 333',
      email: 'info@fondationssolides.tn'
    },
    gallery: [
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800'
    ],
    projects: [
      { id: '1', name: 'Résidence Les Jardins de Carthage' },
      { id: '2', name: 'Marina Bay View' }
    ]
  },
  {
    id: 'p3',
    name: 'Plâtrerie Moderne',
    categoryId: '2',
    categoryName: 'Second œuvre',
    specialty: 'Cloisons & Plâtrerie',
    description: 'Spécialiste en plâtrerie pour des finitions parfaites. Solutions acoustiques et esthétiques pour tous types de projets immobiliers.',
    location: 'Tunis, Tunisie',
    rating: 4.7,
    projectCount: 32,
    founded: 2010,
    contact: {
      phone: '+216 71 333 444',
      email: 'info@platrerie-moderne.tn',
      website: 'www.platrerie-moderne.tn'
    },
    gallery: [
      'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=800'
    ],
    projects: [
      { id: '1', name: 'Résidence Les Jardins de Carthage' }
    ]
  },
  {
    id: 'p6',
    name: 'Élec Tunisie',
    categoryId: '3',
    categoryName: 'Installations techniques',
    specialty: 'Électricité bâtiment (tableau, câblage, prises)',
    description: 'Installation électrique complète pour le résidentiel et le tertiaire. Certification aux normes internationales et solutions écoénergétiques.',
    location: 'Tunis, Tunisie',
    rating: 4.9,
    projectCount: 45,
    founded: 1995,
    contact: {
      phone: '+216 71 666 777',
      email: 'contact@electunisie.tn',
      website: 'www.electunisie.tn'
    },
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800'
    ],
    projects: [
      { id: '1', name: 'Résidence Les Jardins de Carthage' },
      { id: '2', name: 'Marina Bay View' },
      { id: '3', name: 'Business Center Tunis' }
    ]
  },
  {
    id: 'p8',
    name: 'Alu Fenêtres',
    categoryId: '4',
    categoryName: 'Menuiserie & fermetures',
    specialty: 'Menuiserie aluminium',
    description: 'Fabricant et installateur de menuiserie aluminium de haute qualité. Solutions sur mesure pour fenêtres, portes, vérandas et façades.',
    location: 'Sfax, Tunisie',
    rating: 4.6,
    projectCount: 29,
    founded: 2008,
    contact: {
      phone: '+216 71 888 999',
      email: 'contact@alufenetres.tn',
      website: 'www.alufenetres.tn'
    },
    gallery: [
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800'
    ],
    projects: [
      { id: '2', name: 'Marina Bay View' },
      { id: '3', name: 'Business Center Tunis' }
    ]
  }
];

type ProfessionalsPageProps = {
  searchMode?: boolean;
};

const ProfessionalsPage: React.FC<ProfessionalsPageProps> = ({ searchMode = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  // Get all specialties
  const specialties = Array.from(new Set(professionalsData.map(pro => pro.specialty)));
  // Get all locations
  const locations = Array.from(new Set(professionalsData.map(pro => pro.location)));

  // Filter professionals based on search and filters
  const filteredProfessionals = professionalsData.filter(pro => {
    const matchesSearch = searchTerm === '' || 
      pro.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pro.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pro.description?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === null || pro.categoryId === selectedCategory;
    const matchesSpecialty = selectedSpecialty === null || pro.specialty === selectedSpecialty;
    const matchesLocation = selectedLocation === null || pro.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesSpecialty && matchesLocation;
  });

  // Group professionals by category for category view
  const professionalsByCategory = professionalCategories.map(category => {
    const categoryProfessionals = professionalsData.filter(pro => pro.categoryId === category.id);
    return {
      ...category,
      professionals: categoryProfessionals
    };
  }).filter(category => category.professionals.length > 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-mineral/5 py-12">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-mineral mb-4">
                Trouvez les meilleurs professionnels pour votre projet
              </h1>
              <p className="text-gray-600 mb-8">
                Des experts qualifiés dans tous les métiers du bâtiment pour assurer la réussite de votre projet immobilier
              </p>
              
              <div className="relative max-w-xl mx-auto">
                <Input
                  type="text"
                  placeholder="Rechercher un professionnel par nom, spécialité ou mot-clé..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10 h-12 rounded-lg"
                />
                <Search className="absolute right-3 top-3 text-gray-400" size={20} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-custom py-8">
          <Tabs defaultValue={searchMode ? "search" : "categories"}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="categories">Par catégorie</TabsTrigger>
              <TabsTrigger value="search">Recherche avancée</TabsTrigger>
            </TabsList>
            
            {/* By Category Tab */}
            <TabsContent value="categories" className="space-y-10">
              {professionalsByCategory.map(category => (
                <div key={category.id} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-mineral flex items-center">
                      {category.name}
                    </h2>
                    
                    <Button variant="link" asChild>
                      <Link to={`/professionnels?category=${category.id}`}>
                        Voir tous ({category.professionals.length})
                      </Link>
                    </Button>
                  </div>
                  
                  <p className="text-gray-600">{category.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.professionals.slice(0, 3).map(professional => (
                      <ProfessionalCard key={professional.id} professional={professional} />
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>
            
            {/* Advanced Search Tab */}
            <TabsContent value="search">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
                  <select 
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-mineral focus:ring-mineral"
                    value={selectedCategory || ''}
                    onChange={(e) => setSelectedCategory(e.target.value || null)}
                  >
                    <option value="">Toutes les catégories</option>
                    {professionalCategories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Spécialité</label>
                  <select 
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-mineral focus:ring-mineral"
                    value={selectedSpecialty || ''}
                    onChange={(e) => setSelectedSpecialty(e.target.value || null)}
                  >
                    <option value="">Toutes les spécialités</option>
                    {specialties.map(specialty => (
                      <option key={specialty} value={specialty}>
                        {specialty}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Localisation</label>
                  <select 
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-mineral focus:ring-mineral"
                    value={selectedLocation || ''}
                    onChange={(e) => setSelectedLocation(e.target.value || null)}
                  >
                    <option value="">Toutes les localisations</option>
                    {locations.map(location => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-mineral mb-4">
                  {filteredProfessionals.length} professionnel{filteredProfessionals.length !== 1 ? 's' : ''} trouvé{filteredProfessionals.length !== 1 ? 's' : ''}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProfessionals.map(professional => (
                    <ProfessionalCard key={professional.id} professional={professional} />
                  ))}
                </div>
                
                {filteredProfessionals.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500">Aucun professionnel ne correspond à vos critères de recherche.</p>
                    <Button variant="outline" className="mt-4" onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory(null);
                      setSelectedSpecialty(null);
                      setSelectedLocation(null);
                    }}>
                      Réinitialiser les filtres
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const ProfessionalCard: React.FC<{ professional: Professional }> = ({ professional }) => {
  return (
    <Card className="overflow-hidden h-full hover:shadow-md transition-shadow group">
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
        
        <Badge className="absolute top-3 right-3 bg-mineral text-white">
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
          
          <Badge variant="outline" className="flex items-center gap-1 ml-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={`text-xs ${i < Math.floor(professional.rating || 0) ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
            ))}
          </Badge>
        </div>
        
        <p className="text-sm text-gray-600 mb-3">{professional.specialty}</p>
        
        <div className="flex items-center text-sm text-gray-600 mb-1">
          <MapPin size={14} className="mr-1 text-mineral" />
          <span>{professional.location}</span>
        </div>
        
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
            <Button variant="outline" size="sm" className="w-full">Voir le profil</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfessionalsPage;
