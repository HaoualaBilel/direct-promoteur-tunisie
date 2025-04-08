
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  Calendar,
  Briefcase,
  Check,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Professional } from '@/types/models';

// Sample professionals data (same as in ProfessionalsPage)
const professionalsData: Professional[] = [
  {
    id: 'p1',
    name: 'Entreprise Générale El Bouniène',
    categoryId: '1',
    categoryName: 'Bâtiment & Gros œuvre',
    specialty: 'Entreprise de construction (gros œuvre)',
    description: 'Expert en construction de bâtiments résidentiels et commerciaux depuis plus de 30 ans. Spécialiste des structures en béton armé et des fondations.',
    location: 'Tunis, Tunisie',
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
    ],
    services: [
      'Construction de gros œuvre',
      'Structures en béton armé',
      'Fondations spéciales',
      'Rénovation de bâtiments',
      'Coordination de chantier'
    ],
    certifications: [
      'Certification ISO 9001',
      'Agrément technique BTP Classe A'
    ],
    social: {
      facebook: 'https://facebook.com/elbouniene',
      linkedin: 'https://linkedin.com/company/elbouniene'
    }
  },
  {
    id: 'p2',
    name: 'Fondations Solides SARL',
    categoryId: '1',
    categoryName: 'Bâtiment & Gros œuvre',
    specialty: 'Entreprise de fondation profonde (pieux, radier…)',
    description: 'Spécialiste des fondations profondes et des technologies innovantes pour les sols difficiles. Intervention sur les grands projets d\'infrastructure.',
    location: 'Sousse, Tunisie',
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
    ],
    services: [
      'Fondations profondes',
      'Pieux forés',
      'Radiers',
      'Soutènement',
      'Étude des sols'
    ],
    certifications: [
      'Certification ISO 14001',
      'Agrément technique BTP Classe B'
    ],
    social: {
      facebook: 'https://facebook.com/fondationssolides',
      instagram: 'https://instagram.com/fondationssolides'
    }
  },
  {
    id: 'p3',
    name: 'Plâtrerie Moderne',
    categoryId: '2',
    categoryName: 'Second œuvre',
    specialty: 'Cloisons & Plâtrerie',
    description: 'Spécialiste en plâtrerie pour des finitions parfaites. Solutions acoustiques et esthétiques pour tous types de projets immobiliers.',
    location: 'Tunis, Tunisie',
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
    ],
    social: {
      twitter: 'https://twitter.com/platreriemodern'
    }
  },
  {
    id: 'p6',
    name: 'Élec Tunisie',
    categoryId: '3',
    categoryName: 'Installations techniques',
    specialty: 'Électricité bâtiment (tableau, câblage, prises)',
    description: 'Installation électrique complète pour le résidentiel et le tertiaire. Certification aux normes internationales et solutions écoénergétiques.',
    location: 'Tunis, Tunisie',
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
    ],
    social: {
      facebook: 'https://facebook.com/electunisie',
      instagram: 'https://instagram.com/electunisie',
      linkedin: 'https://linkedin.com/company/electunisie'
    }
  },
  {
    id: 'p8',
    name: 'Alu Fenêtres',
    categoryId: '4',
    categoryName: 'Menuiserie & fermetures',
    specialty: 'Menuiserie aluminium',
    description: 'Fabricant et installateur de menuiserie aluminium de haute qualité. Solutions sur mesure pour fenêtres, portes, vérandas et façades.',
    location: 'Sfax, Tunisie',
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
    ],
    social: {
      facebook: 'https://facebook.com/alufenetres',
      instagram: 'https://instagram.com/alufenetres'
    }
  }
];

// Sample related professionals
const getRelatedProfessionals = (categoryId: string, currentId: string) => {
  return professionalsData.filter(pro => pro.categoryId === categoryId && pro.id !== currentId).slice(0, 3);
};

const ProfessionalPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the professional with the matching ID
  const professional = professionalsData.find(p => p.id === id);
  
  if (!professional) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container-custom py-12">
          <h1 className="text-2xl font-bold text-mineral">Professionnel non trouvé</h1>
          <p className="mt-4">Le professionnel que vous recherchez n'existe pas ou a été supprimé.</p>
          <Button asChild className="mt-6">
            <Link to="/professionnels">Voir tous les professionnels</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }
  
  const relatedProfessionals = getRelatedProfessionals(professional.categoryId, professional.id);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-mineral/5 py-8">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="relative h-40 w-40 md:h-48 md:w-48 rounded-lg overflow-hidden bg-white p-2 shadow-sm">
                  {professional.logo ? (
                    <img 
                      src={professional.logo} 
                      alt={professional.name}
                      className="w-full h-full object-contain" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-mineral/10 rounded-lg">
                      <Building2 size={64} className="text-mineral/40" />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="md:w-3/4">
                <Badge className="mb-3 bg-mineral text-white">{professional.categoryName}</Badge>
                <h1 className="text-3xl font-bold text-mineral mb-2">{professional.name}</h1>
                <p className="text-gray-600 mb-4">{professional.specialty}</p>
                
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-sm">
                    <MapPin size={16} className="mr-1 text-mineral" />
                    <span>{professional.location}</span>
                  </div>
                  
                  {professional.founded && (
                    <div className="flex items-center text-sm">
                      <Calendar size={16} className="mr-1 text-mineral" />
                      <span>Fondée en {professional.founded}</span>
                    </div>
                  )}
                  
                  {professional.projectCount && (
                    <div className="flex items-center text-sm">
                      <Briefcase size={16} className="mr-1 text-mineral" />
                      <Link to={`/professionnels/${professional.id}?tab=projects`} className="font-medium hover:text-sage transition-colors">
                        {professional.projectCount} projets réalisés
                      </Link>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Button asChild>
                    <a href={`tel:${professional.contact?.phone}`}>Contacter</a>
                  </Button>
                  
                  {professional.contact?.website && (
                    <Button variant="outline" asChild>
                      <a 
                        href={professional.contact.website.startsWith('http') ? professional.contact.website : `https://${professional.contact.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        Site web
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </Button>
                  )}
                  
                  {/* Social Media Buttons */}
                  {professional.social && (
                    <div className="flex gap-1 ml-1">
                      {professional.social.facebook && (
                        <Button variant="ghost" size="icon" asChild className="h-9 w-9 rounded-full bg-mineral/5">
                          <a href={professional.social.facebook} target="_blank" rel="noopener noreferrer">
                            <Facebook size={18} className="text-mineral" />
                          </a>
                        </Button>
                      )}
                      {professional.social.instagram && (
                        <Button variant="ghost" size="icon" asChild className="h-9 w-9 rounded-full bg-mineral/5">
                          <a href={professional.social.instagram} target="_blank" rel="noopener noreferrer">
                            <Instagram size={18} className="text-mineral" />
                          </a>
                        </Button>
                      )}
                      {professional.social.linkedin && (
                        <Button variant="ghost" size="icon" asChild className="h-9 w-9 rounded-full bg-mineral/5">
                          <a href={professional.social.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin size={18} className="text-mineral" />
                          </a>
                        </Button>
                      )}
                      {professional.social.twitter && (
                        <Button variant="ghost" size="icon" asChild className="h-9 w-9 rounded-full bg-mineral/5">
                          <a href={professional.social.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter size={18} className="text-mineral" />
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="about">
                <TabsList className="mb-6">
                  <TabsTrigger value="about">À propos</TabsTrigger>
                  <TabsTrigger value="services">Services</TabsTrigger>
                  <TabsTrigger value="projects">Projets</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="space-y-8">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold text-mineral mb-4">Présentation</h2>
                      <p className="text-gray-700 leading-relaxed">{professional.description}</p>
                      
                      {professional.certifications && professional.certifications.length > 0 && (
                        <>
                          <h3 className="text-lg font-medium text-mineral mt-6 mb-3">Certifications & Agréments</h3>
                          <ul className="space-y-2">
                            {professional.certifications.map((cert, index) => (
                              <li key={index} className="flex items-start">
                                <Check size={18} className="text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{cert}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </CardContent>
                  </Card>
                  
                  {professional.gallery && professional.gallery.length > 0 && (
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-xl font-semibold text-mineral mb-4">Galerie</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {professional.gallery.map((image, index) => (
                            <div key={index} className="relative aspect-video rounded-md overflow-hidden">
                              <img 
                                src={image} 
                                alt={`${professional.name} - Galerie ${index + 1}`} 
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                              />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
                
                <TabsContent value="services" className="space-y-8">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold text-mineral mb-4">Nos services</h2>
                      
                      {professional.services && professional.services.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {professional.services.map((service, index) => (
                            <div key={index} className="flex items-start p-3 bg-mineral/5 rounded-md">
                              <Check size={18} className="text-mineral mr-2 flex-shrink-0 mt-0.5" />
                              <span>{service}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500">Aucun service spécifique listé. Contactez directement le professionnel pour plus d'informations.</p>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="projects" className="space-y-8">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold text-mineral mb-4">
                        Projets réalisés
                        {professional.projectCount && (
                          <span className="ml-2 text-sm font-normal text-gray-500">
                            ({professional.projectCount} au total)
                          </span>
                        )}
                      </h2>
                      
                      {professional.projects && professional.projects.length > 0 ? (
                        <div className="space-y-4">
                          {professional.projects.map((project, index) => (
                            <Link 
                              key={index} 
                              to={`/projets/${project.id}`}
                              className="flex items-center justify-between p-4 bg-mineral/5 rounded-md hover:bg-mineral/10 transition-colors"
                            >
                              <span className="font-medium">{project.name}</span>
                              <ArrowRight size={16} className="text-mineral" />
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500">Aucun projet listé. Contactez directement le professionnel pour connaître ses références.</p>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact information */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-mineral mb-4">Coordonnées</h2>
                  
                  <div className="space-y-4">
                    {professional.contact?.phone && (
                      <div className="flex items-start">
                        <Phone size={18} className="text-mineral mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Téléphone</p>
                          <a href={`tel:${professional.contact.phone}`} className="text-gray-600 hover:text-mineral transition-colors">
                            {professional.contact.phone}
                          </a>
                        </div>
                      </div>
                    )}
                    
                    {professional.contact?.email && (
                      <div className="flex items-start">
                        <Mail size={18} className="text-mineral mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Email</p>
                          <a href={`mailto:${professional.contact.email}`} className="text-gray-600 hover:text-mineral transition-colors break-all">
                            {professional.contact.email}
                          </a>
                        </div>
                      </div>
                    )}
                    
                    {professional.contact?.website && (
                      <div className="flex items-start">
                        <ExternalLink size={18} className="text-mineral mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Site web</p>
                          <a 
                            href={professional.contact.website.startsWith('http') ? professional.contact.website : `https://${professional.contact.website}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-mineral transition-colors break-all"
                          >
                            {professional.contact.website}
                          </a>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-start">
                      <MapPin size={18} className="text-mineral mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Adresse</p>
                        <p className="text-gray-600">{professional.location}</p>
                      </div>
                    </div>
                    
                    {professional.social && Object.values(professional.social).some(value => value) && (
                      <div className="pt-2">
                        <p className="font-medium mb-2">Réseaux sociaux</p>
                        <div className="flex gap-2">
                          {professional.social.facebook && (
                            <a 
                              href={professional.social.facebook} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-mineral/5 p-2 rounded-md hover:bg-mineral/10 transition-colors"
                            >
                              <Facebook size={18} className="text-mineral" />
                            </a>
                          )}
                          {professional.social.instagram && (
                            <a 
                              href={professional.social.instagram} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-mineral/5 p-2 rounded-md hover:bg-mineral/10 transition-colors"
                            >
                              <Instagram size={18} className="text-mineral" />
                            </a>
                          )}
                          {professional.social.linkedin && (
                            <a 
                              href={professional.social.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-mineral/5 p-2 rounded-md hover:bg-mineral/10 transition-colors"
                            >
                              <Linkedin size={18} className="text-mineral" />
                            </a>
                          )}
                          {professional.social.twitter && (
                            <a 
                              href={professional.social.twitter} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-mineral/5 p-2 rounded-md hover:bg-mineral/10 transition-colors"
                            >
                              <Twitter size={18} className="text-mineral" />
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <Button className="w-full">Contacter</Button>
                </CardContent>
              </Card>
              
              {/* Related professionals */}
              {relatedProfessionals.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-mineral mb-4">Professionnels similaires</h2>
                    
                    <div className="space-y-4">
                      {relatedProfessionals.map((pro) => (
                        <div key={pro.id} className="flex items-start gap-3 pb-3 border-b last:border-none">
                          <div className="w-12 h-12 bg-mineral/10 rounded-md flex items-center justify-center">
                            {pro.logo ? (
                              <img 
                                src={pro.logo} 
                                alt={pro.name}
                                className="w-full h-full object-contain rounded-md" 
                              />
                            ) : (
                              <Building2 size={24} className="text-mineral/40" />
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="font-medium text-mineral">
                              <Link to={`/professionnels/${pro.id}`} className="hover:underline">
                                {pro.name}
                              </Link>
                            </h3>
                            <p className="text-sm text-gray-600 flex items-center mt-1">
                              <Briefcase size={14} className="mr-1 text-mineral/60" />
                              <span>{pro.projectCount} projets</span>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="outline" asChild className="w-full mt-4">
                      <Link to="/professionnels">
                        Voir tous les professionnels
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfessionalPage;
