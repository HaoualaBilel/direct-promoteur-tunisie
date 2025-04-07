
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  Search, 
  Filter, 
  Star,
  TrendingUp,
  CheckCircle,
  Users
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
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
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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

  const getIconForCategory = (categoryId: string) => {
    switch (categoryId) {
      case '1': return <Building2 className="text-mineral" />;
      case '2': return <CheckCircle className="text-mineral" />;
      case '3': return <Filter className="text-mineral" />;
      case '4': return <Building2 className="text-mineral" />;
      case '5': return <Users className="text-mineral" />;
      default: return <Building2 className="text-mineral" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner with interactive elements */}
        <div className="bg-gradient-to-r from-mineral/20 to-sage/30 py-12">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-mineral mb-4 animate-fade-in">
                Trouvez les meilleurs professionnels pour votre projet
              </h1>
              <p className="text-gray-600 mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
                Des experts qualifiés dans tous les métiers du bâtiment pour assurer la réussite de votre projet immobilier
              </p>
              
              <div className="relative max-w-xl mx-auto shadow-lg rounded-lg overflow-hidden animate-scale-in" style={{animationDelay: "0.3s"}}>
                <Input
                  type="text"
                  placeholder="Rechercher un professionnel par nom, spécialité ou mot-clé..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10 h-14 rounded-lg border-sage focus:border-mineral"
                />
                <Search className="absolute right-3 top-4 text-sage" size={24} />
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 mt-6 animate-fade-in" style={{animationDelay: "0.4s"}}>
                <Badge variant="outline" className="bg-white hover:bg-cream cursor-pointer px-4 py-2 text-sm">Architecte</Badge>
                <Badge variant="outline" className="bg-white hover:bg-cream cursor-pointer px-4 py-2 text-sm">Électricien</Badge>
                <Badge variant="outline" className="bg-white hover:bg-cream cursor-pointer px-4 py-2 text-sm">Plombier</Badge>
                <Badge variant="outline" className="bg-white hover:bg-cream cursor-pointer px-4 py-2 text-sm">Menuisier</Badge>
                <Badge variant="outline" className="bg-white hover:bg-cream cursor-pointer px-4 py-2 text-sm">Décorateur</Badge>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-custom py-8">
          <Tabs defaultValue={searchMode ? "search" : "categories"}>
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2 mb-4 md:mb-0">
                <TabsTrigger value="categories">Par catégorie</TabsTrigger>
                <TabsTrigger value="search">Recherche avancée</TabsTrigger>
              </TabsList>
              
              <div className="flex items-center space-x-2">
                <Button 
                  variant={viewMode === 'grid' ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setViewMode('grid')}
                  className="w-10 h-10 p-0"
                >
                  <TrendingUp size={16} />
                </Button>
                <Button 
                  variant={viewMode === 'list' ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setViewMode('list')}
                  className="w-10 h-10 p-0"
                >
                  <Filter size={16} />
                </Button>
              </div>
            </div>
            
            {/* By Category Tab */}
            <TabsContent value="categories" className="space-y-12">
              {professionalsByCategory.map(category => (
                <div key={category.id} className="space-y-6">
                  <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
                    {getIconForCategory(category.id)}
                    <div>
                      <h2 className="text-2xl font-semibold text-mineral">
                        {category.name}
                      </h2>
                      <p className="text-gray-600 text-sm">{category.description}</p>
                    </div>
                    
                    <Button variant="link" asChild className="ml-auto">
                      <Link to={`/professionnels?category=${category.id}`}>
                        Voir tous ({category.professionals.length})
                      </Link>
                    </Button>
                  </div>
                  
                  <div className={viewMode === 'grid' 
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
                    : "space-y-4"
                  }>
                    {category.professionals.slice(0, viewMode === 'grid' ? 3 : 5).map(professional => (
                      viewMode === 'grid' 
                        ? <ProfessionalCard key={professional.id} professional={professional} /> 
                        : <ProfessionalListItem key={professional.id} professional={professional} />
                    ))}
                  </div>
                  
                  <div className="pt-4 text-center">
                    <Button variant="outline" asChild className="rounded-full px-6">
                      <Link to={`/professionnels?category=${category.id}`}>
                        Voir tous les {category.name.toLowerCase()}
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
              
              <div className="bg-cream rounded-lg p-6 shadow-sm mt-12">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-mineral mb-2">
                      Vous êtes un professionnel du bâtiment?
                    </h3>
                    <p className="text-gray-600">
                      Rejoignez notre réseau de professionnels et bénéficiez d'une visibilité auprès de nos utilisateurs.
                    </p>
                  </div>
                  <Button className="bg-mineral hover:bg-mineral/80 px-6">
                    Inscrivez-vous
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            {/* Advanced Search Tab */}
            <TabsContent value="search">
              <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
                <h3 className="text-lg font-medium text-mineral mb-4">Filtrer les professionnels</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
                    <Select
                      value={selectedCategory || ""}
                      onValueChange={(value) => setSelectedCategory(value || null)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Toutes les catégories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Toutes les catégories</SelectItem>
                        {professionalCategories.map(category => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Spécialité</label>
                    <Select
                      value={selectedSpecialty || ""}
                      onValueChange={(value) => setSelectedSpecialty(value || null)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Toutes les spécialités" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Toutes les spécialités</SelectItem>
                        {specialties.map(specialty => (
                          <SelectItem key={specialty} value={specialty}>
                            {specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Localisation</label>
                    <Select
                      value={selectedLocation || ""}
                      onValueChange={(value) => setSelectedLocation(value || null)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Toutes les localisations" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Toutes les localisations</SelectItem>
                        {locations.map(location => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <Button 
                    variant="outline" 
                    className="mr-2"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory(null);
                      setSelectedSpecialty(null);
                      setSelectedLocation(null);
                    }}
                  >
                    Réinitialiser
                  </Button>
                  <Button>
                    Appliquer les filtres
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-mineral mb-4 flex items-center gap-2">
                  <span>{filteredProfessionals.length} professionnel{filteredProfessionals.length !== 1 ? 's' : ''} trouvé{filteredProfessionals.length !== 1 ? 's' : ''}</span>
                  <div className="flex items-center ml-auto space-x-2">
                    <Button 
                      variant={viewMode === 'grid' ? "default" : "outline"} 
                      size="sm" 
                      onClick={() => setViewMode('grid')}
                      className="w-10 h-10 p-0"
                    >
                      <TrendingUp size={16} />
                    </Button>
                    <Button 
                      variant={viewMode === 'list' ? "default" : "outline"} 
                      size="sm" 
                      onClick={() => setViewMode('list')}
                      className="w-10 h-10 p-0"
                    >
                      <Filter size={16} />
                    </Button>
                  </div>
                </h2>
                
                <div className={viewMode === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
                  : "space-y-4"
                }>
                  {filteredProfessionals.map(professional => (
                    viewMode === 'grid' 
                      ? <ProfessionalCard key={professional.id} professional={professional} /> 
                      : <ProfessionalListItem key={professional.id} professional={professional} />
                  ))}
                </div>
                
                {filteredProfessionals.length === 0 && (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <Building2 size={48} className="mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500 mb-2">Aucun professionnel ne correspond à vos critères de recherche.</p>
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
              
              <Separator className="my-12" />
              
              <div className="bg-gradient-to-r from-mineral/10 to-sage/20 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-semibold text-mineral mb-4">Besoin d'un devis personnalisé?</h3>
                <p className="text-gray-600 max-w-xl mx-auto mb-6">
                  Décrivez votre projet et recevez des devis de plusieurs professionnels qualifiés
                </p>
                <Button className="bg-sage text-mineral hover:bg-sage/80 px-8 py-6 text-lg">
                  Demander des devis
                </Button>
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
          
          {professional.rating && (
            <Badge variant="outline" className="flex items-center gap-1 ml-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={`text-xs ${i < Math.floor(professional.rating || 0) ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
              ))}
            </Badge>
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

const ProfessionalListItem: React.FC<{ professional: Professional }> = ({ professional }) => {
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
        {professional.rating && (
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium">{professional.rating}</span>
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

export default ProfessionalsPage;
