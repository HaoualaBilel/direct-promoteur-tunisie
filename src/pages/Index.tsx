
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FilterBar from '@/components/FilterBar';
import PropertyCard from '@/components/PropertyCard';
import NewsCard from '@/components/NewsCard';
import MapSection from '@/components/MapSection';
import PartnerSlider from '@/components/PartnerSlider';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, MapPin, Users, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

// Mock data for demonstration
const projectsData = [
  {
    id: '1',
    title: 'Résidence Les Jardins de Carthage',
    promoter: 'Immobilière Carthage',
    promoterId: '1',
    location: 'Tunis, Les Berges du Lac',
    handoverDate: '2026',
    propertyType: 'habitation',
    imageUrl: 'https://images.unsplash.com/photo-1580216643062-cf460548a66a?auto=format&fit=crop&w=800'
  },
  {
    id: '2',
    title: 'Marina Bay View',
    promoter: 'Groupe Azur',
    promoterId: '2',
    location: 'Sousse, Port El Kantaoui',
    handoverDate: 'Immédiate',
    propertyType: 'estivale',
    imageUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800'
  },
  {
    id: '3',
    title: 'Business Center Tunis',
    promoter: 'Delta Business',
    promoterId: '3',
    location: 'Tunis, Centre Urbain Nord',
    handoverDate: '2025',
    propertyType: 'commercial',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800'
  },
  {
    id: '4',
    title: 'Résidence Les Oliviers',
    promoter: 'Groupe Immobilier Méditerranée',
    promoterId: '4',
    location: 'Hammamet, Sud',
    handoverDate: 'Vendu',
    propertyType: 'habitation',
    imageUrl: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800'
  },
  {
    id: '5',
    title: 'Parc Résidentiel El Ghazela',
    promoter: 'Immobilière Carthage',
    promoterId: '1',
    location: 'Ariana, El Ghazela',
    handoverDate: '2026',
    propertyType: 'habitation',
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800'
  },
  {
    id: '6',
    title: 'Tour Crystal',
    promoter: 'Groupe Azur',
    promoterId: '2',
    location: 'Tunis, Les Berges du Lac',
    handoverDate: '2025',
    propertyType: 'mixte',
    imageUrl: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=800'
  },
  {
    id: '7',
    title: 'Dunes Dorées',
    promoter: 'Delta Business',
    promoterId: '3',
    location: 'Djerba, Zone Touristique',
    handoverDate: 'Immédiate',
    propertyType: 'estivale',
    imageUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800'
  },
  {
    id: '8',
    title: 'Centre Commercial Médina',
    promoter: 'Groupe Immobilier Méditerranée',
    promoterId: '4',
    location: 'Sousse, Centre Ville',
    handoverDate: '2025',
    propertyType: 'commercial',
    imageUrl: 'https://images.unsplash.com/photo-1535981767287-35259dbf7d0e?auto=format&fit=crop&w=800'
  }
];

const newsData = [
  {
    id: '1',
    title: 'Nouveau projet résidentiel de luxe à Tunis',
    excerpt: 'Découvrez notre nouvelle résidence de haut standing aux Berges du Lac avec vue panoramique.',
    date: '2023-03-15',
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800',
    category: 'Habitation',
    tags: ['luxe', 'tunis', 'appartements']
  },
  {
    id: '2',
    title: 'Ouverture du centre commercial Medina Mall à Sousse',
    excerpt: 'Le plus grand centre commercial du Sahel ouvre ses portes avec plus de 100 boutiques.',
    date: '2023-02-28',
    imageUrl: 'https://images.unsplash.com/photo-1519567770779-d1e24f1c686f?auto=format&fit=crop&w=800',
    category: 'Commercial',
    tags: ['centre commercial', 'sousse', 'ouverture']
  },
  {
    id: '3',
    title: 'Journée portes ouvertes : Résidence Les Oliviers',
    excerpt: "Venez découvrir nos nouveaux appartements et bénéficiez d'offres exclusives ce weekend.",
    date: '2023-03-10',
    imageUrl: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800',
    category: 'Evenement',
    tags: ['portes ouvertes', 'hammamet', 'promotion']
  },
  {
    id: '4',
    title: 'Partenariat avec la Banque Nationale pour des offres de financement exclusives',
    excerpt: "Des conditions préférentielles pour l'acquisition d'un bien immobilier chez nos promoteurs partenaires.",
    date: '2023-03-05',
    imageUrl: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=800',
    category: 'Partenaire',
    tags: ['financement', 'banque', 'crédit immobilier']
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Projects Section */}
        <section className="section-padding bg-cream">
          <div className="container-custom">
            <FilterBar />
            
            <h2 className="section-title">Projets à Livraison 2026</h2>
            <p className="section-subtitle">
              Découvrez les projets immobiliers qui seront livrés en 2026, réservez dès maintenant pour bénéficier des meilleures offres.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectsData.slice(0, 4).map((project) => (
                <PropertyCard 
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  promoter={project.promoter}
                  promoterId={project.promoterId}
                  location={project.location}
                  handoverDate={project.handoverDate}
                  propertyType={project.propertyType}
                  imageUrl={project.imageUrl}
                />
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button asChild variant="outline" className="inline-flex items-center gap-2">
                <Link to="/projets">
                  Voir tous les projets
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Map Section - Moved before News Section */}
        <MapSection />
        
        {/* News Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="section-title">Actualités Immobilières</h2>
            <p className="section-subtitle">
              Restez informé des dernières actualités, nouveaux projets et événements du secteur immobilier.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {newsData.map((news) => (
                <NewsCard 
                  key={news.id}
                  id={news.id}
                  title={news.title}
                  excerpt={news.excerpt}
                  date={news.date}
                  imageUrl={news.imageUrl}
                  category={news.category}
                  tags={news.tags}
                />
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button asChild variant="outline" className="inline-flex items-center gap-2">
                <Link to="/actu-promoteur">
                  Voir toutes les actualités
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Professionals Section - New section */}
        <section className="section-padding bg-gradient-to-r from-mineral/5 to-sage/10">
          <div className="container-custom">
            <h2 className="section-title">Professionnels du Bâtiment</h2>
            <p className="section-subtitle">
              Trouvez les meilleurs experts pour vous accompagner dans votre projet immobilier, de la conception à la réalisation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <Card className="hover:shadow-md transition-shadow border-none">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-mineral/10 rounded-full mb-6">
                    <Building2 size={32} className="text-mineral" />
                  </div>
                  <h3 className="text-xl font-semibold text-mineral mb-3">Entreprises de construction</h3>
                  <p className="text-gray-600 mb-6">
                    Des entreprises spécialisées dans le gros œuvre, les fondations et la structure de votre bien immobilier.
                  </p>
                  <Badge className="mb-2">Bâtiment & Gros œuvre</Badge>
                  <Button asChild variant="outline" className="mt-4">
                    <Link to="/professionnels?category=1">
                      Découvrir
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow border-none">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-mineral/10 rounded-full mb-6">
                    <Wrench size={32} className="text-mineral" />
                  </div>
                  <h3 className="text-xl font-semibold text-mineral mb-3">Artisans et second œuvre</h3>
                  <p className="text-gray-600 mb-6">
                    Des professionnels qualifiés pour les finitions, l'aménagement intérieur et les installations techniques.
                  </p>
                  <Badge className="mb-2">Électricité, Plomberie, Menuiserie</Badge>
                  <Button asChild variant="outline" className="mt-4">
                    <Link to="/professionnels?category=3">
                      Découvrir
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow border-none">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-mineral/10 rounded-full mb-6">
                    <Users size={32} className="text-mineral" />
                  </div>
                  <h3 className="text-xl font-semibold text-mineral mb-3">Services et conseils</h3>
                  <p className="text-gray-600 mb-6">
                    Des experts pour vous accompagner dans vos démarches administratives, financières et juridiques.
                  </p>
                  <Badge className="mb-2">Études, Contrôle, Services</Badge>
                  <Button asChild variant="outline" className="mt-4">
                    <Link to="/professionnels?category=10">
                      Découvrir
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-16 bg-white p-8 rounded-lg shadow-sm flex flex-col md:flex-row items-center justify-between">
              <div className="md:max-w-xl mb-6 md:mb-0">
                <h3 className="text-2xl font-semibold text-mineral mb-3">
                  Trouvez tous les professionnels pour votre projet
                </h3>
                <p className="text-gray-600">
                  Que vous recherchiez un architecte, un électricien, un plombier ou un décorateur d'intérieur, 
                  nos professionnels certifiés sont là pour vous aider à concrétiser votre projet immobilier.
                </p>
              </div>
              
              <Button asChild size="lg" className="px-6 py-6 text-lg">
                <Link to="/professionnels">
                  Voir tous les professionnels
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Partners Section */}
        <PartnerSlider />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
