import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Mail, Phone, ExternalLink, MapPin, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import NewsCard from '@/components/NewsCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for promoters
const promotersData = [
  {
    id: '1',
    name: 'Immobilière Carthage',
    description: 'Fondée en 1995, Immobilière Carthage est un promoteur immobilier de premier plan en Tunisie, spécialisé dans la construction de résidences haut de gamme et de complexes commerciaux. Avec plus de 25 ans d\'expérience, nous nous engageons à offrir des espaces de vie et de travail innovants, durables et de grande qualité.',
    logoUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=300',
    email: 'contact@immobiliere-carthage.tn',
    phone: '+216 71 123 456',
    website: 'https://www.immobiliere-carthage.tn',
    address: 'Rue du Lac Turkana, Les Berges du Lac, Tunis, Tunisie',
    socialLinks: {
      facebook: 'https://facebook.com/immobilierecarthage',
      instagram: 'https://instagram.com/immobilierecarthage',
      linkedin: 'https://linkedin.com/company/immobiliere-carthage'
    },
    certifications: ['ISO 9001', 'Engagement Qualité Construction', 'Prix Excellence Immobilière 2022'],
    values: [
      'Qualité et fiabilité dans la construction',
      'Respect des délais de livraison',
      'Satisfaction client comme priorité',
      'Innovation architecturale',
      'Responsabilité environnementale'
    ]
  },
  {
    id: '2',
    name: 'Groupe Azur',
    description: "Le Groupe Azur est un acteur majeur de la promotion immobilière en Tunisie depuis 2003. Nous réalisons des projets résidentiels, commerciaux et touristiques d'envergure, en privilégiant l'emplacement, la qualité de construction et le respect de l'environnement. Notre objectif est de créer des espaces de vie et de travail harmonieux, adaptés aux besoins de nos clients.",
    logoUrl: 'https://images.unsplash.com/photo-1541419403457-ca9a37ca634c?auto=format&fit=crop&w=300',
    email: 'contact@groupeazur.tn',
    phone: '+216 73 456 789',
    website: 'https://www.groupeazur.tn',
    address: 'Avenue Habib Bourguiba, Sousse, Tunisie',
    socialLinks: {
      facebook: 'https://facebook.com/groupeazur',
      instagram: 'https://instagram.com/groupeazur',
      linkedin: 'https://linkedin.com/company/groupe-azur'
    },
    certifications: ['NF Habitat HQE', 'Label Performance Energétique', 'Trophée Innovation Bâtiment 2021'],
    values: [
      "Satisfaction client au cœur de nos préoccupations",
      "Transparence et éthique dans nos pratiques",
      "Qualité et durabilité de nos constructions",
      "Respect de l'environnement et économie d'énergie",
      "Innovation et design contemporain"
    ]
  },
  {
    id: '3',
    name: 'Delta Business',
    description: "Delta Business est un groupe spécialisé dans la promotion immobilière commerciale et tertiaire. Nous développons des centres d'affaires, des locaux commerciaux et des plateformes logistiques sur l'ensemble du territoire tunisien. Notre expertise nous permet de proposer des solutions immobilières adaptées aux besoins des entreprises, en termes d'emplacement, de modularité et de services.",
    logoUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300',
    email: 'contact@deltabusiness.tn',
    phone: '+216 71 987 654',
    website: 'https://www.deltabusiness.tn',
    address: 'Centre Urbain Nord, Tunis, Tunisie',
    socialLinks: {
      facebook: 'https://facebook.com/deltabusiness',
      linkedin: 'https://linkedin.com/company/delta-business'
    },
    certifications: ['HQE Bâtiments Tertiaires', 'ISO 14001', 'Green Building Award 2023'],
    values: [
      "Accompagnement personnalisé de nos clients",
      "Expertise et connaissance du marché immobilier",
      "Réactivité et flexibilité dans nos offres",
      "Qualité et performance de nos réalisations",
      "Respect des normes environnementales"
    ]
  },
  {
    id: '4',
    name: 'Groupe Immobilier Méditerranée',
    description: "Depuis 1988, le Groupe Immobilier Méditerranée est un acteur historique du marché immobilier tunisien. Nous sommes spécialisés dans la construction de logements collectifs, de maisons individuelles et de résidences de vacances. Notre longue expérience nous permet de maîtriser l'ensemble des étapes d'un projet immobilier, de la conception à la commercialisation.",
    logoUrl: 'https://images.unsplash.com/photo-1551291831-691b384ff99d?auto=format&fit=crop&w=300',
    email: 'contact@gim.tn',
    phone: '+216 71 234 567',
    website: 'https://www.gim.tn',
    address: 'Avenue de la Corniche, Hammamet, Tunisie',
    socialLinks: {
      facebook: 'https://facebook.com/gim',
      instagram: 'https://instagram.com/gim',
      linkedin: 'https://linkedin.com/company/groupe-immobilier-mediterranee'
    },
    certifications: ['Qualibat', 'Garantie Décennale', 'Prix Spécial Architecture Durable 2020'],
    values: [
      "Proximité et écoute de nos clients",
      "Qualité et pérennité de nos constructions",
      "Respect des engagements et des délais",
      "Valorisation du patrimoine architectural tunisien",
      "Intégration environnementale de nos projets"
    ]
  }
];

// Mock project data
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

// Mock news data
const newsData = [
  {
    id: '1',
    title: 'Nouveau projet résidentiel de luxe à Tunis',
    excerpt: "Découvrez notre nouvelle résidence de haut standing aux Berges du Lac avec vue panoramique.",
    date: '2023-03-15',
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800',
    category: 'Habitation',
    tags: ['luxe', 'tunis', 'appartements'],
    promoterId: '1'
  },
  {
    id: '2',
    title: 'Partenariat avec la Banque Nationale pour des offres de financement exclusives',
    excerpt: "Des conditions préférentielles pour l'acquisition d'un bien immobilier chez nos promoteurs partenaires.",
    date: '2023-03-05',
    imageUrl: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=800',
    category: 'Partenaire',
    tags: ['financement', 'banque', 'crédit immobilier'],
    promoterId: '1'
  },
  {
    id: '3',
    title: 'Ouverture du centre commercial Medina Mall à Sousse',
    excerpt: 'Le plus grand centre commercial du Sahel ouvre ses portes avec plus de 100 boutiques.',
    date: '2023-02-28',
    imageUrl: 'https://images.unsplash.com/photo-1519567770779-d1e24f1c686f?auto=format&fit=crop&w=800',
    category: 'Commercial',
    tags: ['centre commercial', 'sousse', 'ouverture'],
    promoterId: '2'
  },
  {
    id: '4',
    title: 'Soirée de lancement du nouveau complexe résidentiel Azur City',
    excerpt: "Venez découvrir en avant-première notre nouveau projet immobilier à Sousse.",
    date: '2023-03-20',
    imageUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800',
    category: 'Evenement',
    tags: ['lancement', 'sousse', 'résidence'],
    promoterId: '2'
  },
  {
    id: '5',
    title: 'Delta Business signe un partenariat avec une multinationale',
    excerpt: "Un accord stratégique pour l'implantation d'un nouveau centre de services à Tunis.",
    date: '2023-03-12',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800',
    category: 'Partenaire',
    tags: ['partenariat', 'tunis', 'centre affaires'],
    promoterId: '3'
  },
  {
    id: '6',
    title: 'Inauguration du nouveau siège de Delta Business au Centre Urbain Nord',
    excerpt: "Un espace moderne et fonctionnel pour accueillir nos équipes et nos clients.",
    date: '2023-03-01',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800',
    category: 'Evenement',
    tags: ['inauguration', 'tunis', 'siège social'],
    promoterId: '3'
  },
  {
    id: '7',
    title: 'Le Groupe Immobilier Méditerranée lance une nouvelle gamme de maisons écologiques',
    excerpt: "Des habitations respectueuses de l'environnement et économes en énergie.",
    date: '2023-03-18',
    imageUrl: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800',
    category: 'Habitation',
    tags: ['écologie', 'hammamet', 'maisons'],
    promoterId: '4'
  },
  {
    id: '8',
    title: 'Le Groupe Immobilier Méditerranée reçoit le prix de la meilleure résidence de vacances',
    excerpt: "Une récompense pour notre engagement en faveur du tourisme durable.",
    date: '2023-03-07',
    imageUrl: 'https://images.unsplash.com/photo-1551291831-691b384ff99d?auto=format&fit=crop&w=800',
    category: 'Récompense',
    tags: ['prix', 'hammamet', 'résidence vacances'],
    promoterId: '4'
  }
];

const PromoterPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the promoter with the matching ID
  const promoter = promotersData.find(p => p.id === id);
  
  // Filter projects for this promoter
  const promoterProjects = projectsData.filter(p => p.promoterId === id);
  
  // Filter news for this promoter
  const promoterNews = newsData.filter(n => n.promoterId === id);
  
  if (!promoter) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container-custom py-12">
          <h1 className="text-2xl font-bold text-mineral">Promoteur non trouvé</h1>
          <p className="mt-4">Le promoteur que vous recherchez n'existe pas ou a été supprimé.</p>
          <Button asChild className="mt-6">
            <Link to="/promoteurs">Voir tous les promoteurs</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-mineral/5 py-8">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm max-w-[180px]">
                <img 
                  src={promoter.logoUrl} 
                  alt={promoter.name} 
                  className="w-full h-auto object-contain" 
                />
              </div>
              
              <div>
                <h1 className="text-3xl font-bold text-mineral">{promoter.name}</h1>
                <div className="mt-4 flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <div className="flex items-center text-mineral">
                    <Mail size={16} className="mr-2" />
                    <a href={`mailto:${promoter.email}`} className="hover:text-sage transition-colors">
                      {promoter.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center text-mineral">
                    <Phone size={16} className="mr-2" />
                    <a href={`tel:${promoter.phone}`} className="hover:text-sage transition-colors">
                      {promoter.phone}
                    </a>
                  </div>
                  
                  {promoter.website && (
                    <div className="flex items-center text-mineral">
                      <ExternalLink size={16} className="mr-2" />
                      <a href={promoter.website} target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors">
                        Site web
                      </a>
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
              {/* About */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-mineral mb-4">À propos</h2>
                  <p className="text-gray-700">{promoter.description}</p>
                </CardContent>
              </Card>
              
              {/* Values and Commitments */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Values */}
                {promoter.values && promoter.values.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold text-mineral mb-4">Nos valeurs</h2>
                      
                      <ul className="space-y-2">
                        {promoter.values.map((value, index) => (
                          <li key={index} className="flex items-start">
                            <Check size={18} className="text-sage mr-2 mt-0.5 flex-shrink-0" />
                            <span>{value}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
                
                {/* Certifications */}
                {promoter.certifications && promoter.certifications.length > 0 && (
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold text-mineral mb-4">Certifications</h2>
                      
                      <ul className="space-y-2">
                        {promoter.certifications.map((cert, index) => (
                          <li key={index} className="flex items-start">
                            <Check size={18} className="text-sage mr-2 mt-0.5 flex-shrink-0" />
                            <span>{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
              
              {/* Projects */}
              {promoterProjects.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-mineral mb-6">Nos projets immobiliers</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {promoterProjects.map((project) => (
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
                </div>
              )}
              
              {/* News */}
              {promoterNews.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-mineral mb-6">Actualités</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {promoterNews.map((news) => (
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
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Information */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-mineral mb-4">Informations de contact</h2>
                  
                  {promoter.address && (
                    <div className="flex items-start mb-4">
                      <MapPin size={18} className="text-mineral mr-2 mt-1 flex-shrink-0" />
                      <span>{promoter.address}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <Mail size={18} className="text-mineral mr-2 flex-shrink-0" />
                    <a href={`mailto:${promoter.email}`} className="hover:text-sage transition-colors">
                      {promoter.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <Phone size={18} className="text-mineral mr-2 flex-shrink-0" />
                    <a href={`tel:${promoter.phone}`} className="hover:text-sage transition-colors">
                      {promoter.phone}
                    </a>
                  </div>
                  
                  {promoter.website && (
                    <div className="flex items-center">
                      <ExternalLink size={18} className="text-mineral mr-2 flex-shrink-0" />
                      <a href={promoter.website} target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors overflow-hidden text-ellipsis">
                        {promoter.website.replace(/^https?:\/\//, '')}
                      </a>
                    </div>
                  )}
                  
                  {/* Social Media */}
                  {promoter.socialLinks && (
                    <div className="mt-6">
                      <h3 className="text-sm font-medium mb-3">Réseaux sociaux</h3>
                      <div className="flex gap-3">
                        {promoter.socialLinks.facebook && (
                          <a href={promoter.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                            </svg>
                          </a>
                        )}
                        
                        {promoter.socialLinks.instagram && (
                          <a href={promoter.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                            </svg>
                          </a>
                        )}
                        
                        {promoter.socialLinks.linkedin && (
                          <a href={promoter.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 1
