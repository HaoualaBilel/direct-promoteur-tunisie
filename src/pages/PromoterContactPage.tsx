
import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Phone, Mail, ExternalLink, Building2, Send, Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Sample promoters data - this would typically come from your data source
const promotersData = [
  {
    id: '1',
    name: 'Immobilière Carthage',
    logo: 'https://images.unsplash.com/photo-1580216643062-cf460548a66a?auto=format&fit=crop&w=300',
    description: 'Promoteur immobilier de référence en Tunisie, spécialisé dans les résidences haut de gamme et les complexes résidentiels.',
    founded: 1995,
    projects: 48,
    location: 'Tunis, Les Berges du Lac',
    contact: {
      address: '25 Rue du Lac, Les Berges du Lac, Tunis',
      phone: '+216 71 123 456',
      email: 'contact@immobiliere-carthage.tn',
      website: 'www.immobiliere-carthage.tn'
    },
    social: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    },
    activeProjects: [
      { id: '1', name: 'Résidence Les Jardins de Carthage' },
      { id: '5', name: 'Parc Résidentiel El Ghazela' }
    ],
    completedProjects: [
      { id: '9', name: 'Tour Hannibal' },
      { id: '10', name: 'Résidence Carthage Gardens' },
      { id: '11', name: 'Business Park Tunis' }
    ]
  },
  {
    id: '2',
    name: 'Groupe Azur',
    logo: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=300',
    description: 'Développeur immobilier spécialisé dans les propriétés balnéaires et projets touristiques de luxe sur la côte tunisienne.',
    founded: 2003,
    projects: 32,
    location: 'Sousse, Centre',
    contact: {
      address: '10 Avenue Habib Bourguiba, Sousse',
      phone: '+216 73 222 333',
      email: 'info@groupeazur.tn',
      website: 'www.groupeazur.tn'
    },
    social: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    },
    activeProjects: [
      { id: '2', name: 'Marina Bay View' },
      { id: '6', name: 'Tour Crystal' }
    ],
    completedProjects: [
      { id: '12', name: 'Azur Beach Residences' },
      { id: '13', name: 'Palm Gardens' }
    ]
  }
];

const PromoterContactPage = () => {
  const { id } = useParams<{ id: string }>();
  const promoter = promotersData.find(p => p.id === id);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };
  
  if (!promoter) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container-custom py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-mineral mb-4">Promoteur non trouvé</h1>
            <p className="text-gray-600 mb-6">Le promoteur que vous recherchez n'existe pas ou a été supprimé.</p>
            <Button asChild>
              <a href="/promoteurs">Retour à la liste des promoteurs</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner with promoter info */}
        <div className="bg-gradient-to-r from-mineral/10 to-cream py-12">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
                {promoter.logo ? (
                  <img 
                    src={promoter.logo} 
                    alt={promoter.name}
                    className="max-w-full max-h-full object-contain" 
                  />
                ) : (
                  <Building2 size={64} className="text-mineral/40" />
                )}
              </div>
              
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-mineral mb-2">
                  Contact {promoter.name}
                </h1>
                <p className="text-gray-600 max-w-2xl mb-4">
                  {promoter.description}
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Badge variant="outline" className="bg-white px-3 py-1">
                    <Building2 size={16} className="mr-1" />
                    <span>{promoter.projects} projets</span>
                  </Badge>
                  
                  <Badge variant="outline" className="bg-white px-3 py-1">
                    <span>Fondé en {promoter.founded}</span>
                  </Badge>
                  
                  {promoter.contact?.website && (
                    <a 
                      href={`https://${promoter.contact.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-mineral hover:text-sage transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>{promoter.contact.website}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="order-2 lg:order-1 lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24">
                <h2 className="text-xl font-semibold text-mineral mb-6">Informations de contact</h2>
                
                <div className="space-y-6">
                  {promoter.contact?.address && (
                    <div className="flex">
                      <div className="flex-shrink-0 mr-3 mt-1">
                        <MapPin className="h-5 w-5 text-mineral" />
                      </div>
                      <div>
                        <h3 className="font-medium text-mineral mb-1">Adresse</h3>
                        <p className="text-gray-600">{promoter.contact.address}</p>
                      </div>
                    </div>
                  )}
                  
                  {promoter.contact?.phone && (
                    <div className="flex">
                      <div className="flex-shrink-0 mr-3 mt-1">
                        <Phone className="h-5 w-5 text-mineral" />
                      </div>
                      <div>
                        <h3 className="font-medium text-mineral mb-1">Téléphone</h3>
                        <a href={`tel:${promoter.contact.phone}`} className="text-gray-600 hover:text-mineral transition-colors">
                          {promoter.contact.phone}
                        </a>
                      </div>
                    </div>
                  )}
                  
                  {promoter.contact?.email && (
                    <div className="flex">
                      <div className="flex-shrink-0 mr-3 mt-1">
                        <Mail className="h-5 w-5 text-mineral" />
                      </div>
                      <div>
                        <h3 className="font-medium text-mineral mb-1">Email</h3>
                        <a href={`mailto:${promoter.contact.email}`} className="text-gray-600 hover:text-mineral transition-colors">
                          {promoter.contact.email}
                        </a>
                      </div>
                    </div>
                  )}
                  
                  {promoter.contact?.website && (
                    <div className="flex">
                      <div className="flex-shrink-0 mr-3 mt-1">
                        <ExternalLink className="h-5 w-5 text-mineral" />
                      </div>
                      <div>
                        <h3 className="font-medium text-mineral mb-1">Site web</h3>
                        <a 
                          href={`https://${promoter.contact.website}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-mineral transition-colors"
                        >
                          {promoter.contact.website}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                
                {promoter.social && (
                  <div className="mt-8">
                    <h3 className="font-medium text-mineral mb-3">Réseaux sociaux</h3>
                    <div className="flex space-x-4">
                      {promoter.social.facebook && (
                        <a 
                          href={promoter.social.facebook}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-mineral/10 p-2 rounded-full hover:bg-mineral hover:text-white transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                          </svg>
                        </a>
                      )}
                      
                      {promoter.social.instagram && (
                        <a 
                          href={promoter.social.instagram}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-mineral/10 p-2 rounded-full hover:bg-mineral hover:text-white transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                          </svg>
                        </a>
                      )}
                      
                      {promoter.social.linkedin && (
                        <a 
                          href={promoter.social.linkedin}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-mineral/10 p-2 rounded-full hover:bg-mineral hover:text-white transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                )}
                
                <div className="mt-8">
                  <h3 className="font-medium text-mineral mb-4">Projets actifs</h3>
                  <div className="space-y-3">
                    {promoter.activeProjects.map(project => (
                      <a 
                        key={project.id}
                        href={`/projets/${project.id}`}
                        className="flex items-center p-2 hover:bg-cream rounded-md transition-colors"
                      >
                        <Building2 size={16} className="mr-2 text-mineral" />
                        <span className="text-gray-600 hover:text-mineral transition-colors">
                          {project.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    <Download size={16} />
                    Télécharger la brochure
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Contact Options */}
            <div className="order-1 lg:order-2 lg:col-span-2">
              <Tabs defaultValue="message">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="message">Envoyer un message</TabsTrigger>
                  <TabsTrigger value="rdv">Demander un rendez-vous</TabsTrigger>
                </TabsList>
                
                {/* Message Form */}
                <TabsContent value="message">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold text-mineral mb-6">Contacter {promoter.name}</h2>
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                              Nom complet *
                            </label>
                            <Input 
                              id="name" 
                              type="text" 
                              required 
                              placeholder="Votre nom"
                              className="w-full"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                              Email *
                            </label>
                            <Input 
                              id="email" 
                              type="email" 
                              required 
                              placeholder="votre@email.com"
                              className="w-full"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                              Téléphone
                            </label>
                            <Input 
                              id="phone" 
                              type="tel" 
                              placeholder="+216 XX XXX XXX"
                              className="w-full"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-1">
                              Projet concerné
                            </label>
                            <Select>
                              <SelectTrigger id="project">
                                <SelectValue placeholder="Sélectionnez un projet" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="all">Tous les projets</SelectItem>
                                {promoter.activeProjects.map(project => (
                                  <SelectItem key={project.id} value={project.id}>
                                    {project.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message *
                          </label>
                          <Textarea 
                            id="message" 
                            required 
                            placeholder="Détaillez votre demande..."
                            className="w-full min-h-[150px]"
                          />
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="privacy"
                              type="checkbox"
                              required
                              className="h-4 w-4 text-mineral border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="privacy" className="text-gray-600">
                              J'accepte que mes données soient partagées avec {promoter.name} conformément à la <a href="/confidentialite" className="text-mineral hover:underline">politique de confidentialité</a>
                            </label>
                          </div>
                        </div>
                        
                        <div>
                          <Button type="submit" className="w-full md:w-auto px-8 py-2 flex items-center gap-2">
                            Envoyer le message
                            <Send size={18} />
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Appointment Form */}
                <TabsContent value="rdv">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold text-mineral mb-6">Prendre rendez-vous avec {promoter.name}</h2>
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name-rdv" className="block text-sm font-medium text-gray-700 mb-1">
                              Nom complet *
                            </label>
                            <Input 
                              id="name-rdv" 
                              type="text" 
                              required 
                              placeholder="Votre nom"
                              className="w-full"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="email-rdv" className="block text-sm font-medium text-gray-700 mb-1">
                              Email *
                            </label>
                            <Input 
                              id="email-rdv" 
                              type="email" 
                              required 
                              placeholder="votre@email.com"
                              className="w-full"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="phone-rdv" className="block text-sm font-medium text-gray-700 mb-1">
                              Téléphone *
                            </label>
                            <Input 
                              id="phone-rdv" 
                              type="tel"
                              required
                              placeholder="+216 XX XXX XXX"
                              className="w-full"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="project-rdv" className="block text-sm font-medium text-gray-700 mb-1">
                              Projet à visiter *
                            </label>
                            <Select required>
                              <SelectTrigger id="project-rdv">
                                <SelectValue placeholder="Sélectionnez un projet" />
                              </SelectTrigger>
                              <SelectContent>
                                {promoter.activeProjects.map(project => (
                                  <SelectItem key={project.id} value={project.id}>
                                    {project.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                              Date souhaitée *
                            </label>
                            <Input 
                              id="date" 
                              type="date" 
                              required 
                              className="w-full"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                              Heure souhaitée *
                            </label>
                            <Input 
                              id="time" 
                              type="time" 
                              required 
                              className="w-full"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                            Notes ou questions
                          </label>
                          <Textarea 
                            id="notes" 
                            placeholder="Questions ou besoins spécifiques pour la visite..."
                            className="w-full"
                          />
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="privacy-rdv"
                              type="checkbox"
                              required
                              className="h-4 w-4 text-mineral border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="privacy-rdv" className="text-gray-600">
                              J'accepte que mes données soient partagées avec {promoter.name} conformément à la <a href="/confidentialite" className="text-mineral hover:underline">politique de confidentialité</a>
                            </label>
                          </div>
                        </div>
                        
                        <div>
                          <Button type="submit" className="w-full md:w-auto px-8 py-2 flex items-center gap-2">
                            Demander un rendez-vous
                            <Send size={18} />
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              
              <div className="mt-8 bg-cream rounded-lg p-6">
                <h3 className="text-xl font-medium text-mineral mb-4">Documents disponibles</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="bg-white hover:shadow-md transition-shadow">
                    <CardContent className="p-4 flex items-center">
                      <div className="bg-mineral/10 p-3 rounded-full mr-4">
                        <Download className="h-5 w-5 text-mineral" />
                      </div>
                      <div>
                        <h4 className="font-medium text-mineral">Brochure entreprise</h4>
                        <p className="text-sm text-gray-500">PDF, 4.2 MB</p>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-auto">
                        Télécharger
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white hover:shadow-md transition-shadow">
                    <CardContent className="p-4 flex items-center">
                      <div className="bg-mineral/10 p-3 rounded-full mr-4">
                        <Download className="h-5 w-5 text-mineral" />
                      </div>
                      <div>
                        <h4 className="font-medium text-mineral">Catalogue des projets</h4>
                        <p className="text-sm text-gray-500">PDF, 8.7 MB</p>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-auto">
                        Télécharger
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PromoterContactPage;
