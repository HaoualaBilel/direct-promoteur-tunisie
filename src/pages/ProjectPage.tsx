
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Eye, Home, Building2, Umbrella, Check, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for demonstration
const projectsData = [
  {
    id: '1',
    title: 'Résidence Les Jardins de Carthage',
    promoter: 'Immobilière Carthage',
    promoterId: '1',
    location: 'Tunis, Les Berges du Lac',
    fullAddress: '15 Rue du Lac, Les Berges du Lac, Tunis, Tunisie',
    handoverDate: '2026',
    propertyType: 'habitation',
    imageUrl: 'https://images.unsplash.com/photo-1580216643062-cf460548a66a?auto=format&fit=crop&w=800',
    description: 'Cette résidence de haut standing est située dans l\'un des quartiers les plus prisés de Tunis. Profitez d\'un cadre exceptionnel avec des appartements spacieux, lumineux et dotés de finitions de haute qualité. La résidence dispose également d\'espaces verts, d\'une piscine et d\'une salle de sport pour le confort des résidents.',
    features: [
      'Piscine', 'Ascenseur', 'Parking sous-sol', 'Gardiennage', 'Vidéosurveillance', 
      'Espaces verts', 'Salle de sport', 'Interphone'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1580216643062-cf460548a66a?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800'
    ],
    units: [
      { type: 'S+1', area: '75 m²', price: 'À partir de 250 000 DT', planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800' },
      { type: 'S+2', area: '100 m²', price: 'À partir de 350 000 DT', planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800' },
      { type: 'S+3', area: '130 m²', price: 'À partir de 450 000 DT', planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800' }
    ],
    propertySpecs: {
      type: 'Habitation',
      elevators: 2,
      basement: 'Oui, 1 niveau',
      standing: 'Haut standing',
      constructionYear: '2023-2026',
      status: 'En construction'
    },
    nearbyFacilities: [
      'Centre commercial à 500m', 'École à 1km', 'Clinique à 2km', 'Accès autoroute à 3km'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    virtualTourUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '2',
    title: 'Marina Bay View',
    promoter: 'Groupe Azur',
    promoterId: '2',
    location: 'Sousse, Port El Kantaoui',
    fullAddress: 'Zone Touristique, Port El Kantaoui, Sousse, Tunisie',
    handoverDate: 'Immédiate',
    propertyType: 'estivale',
    imageUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800',
    description: 'Située au cœur de Port El Kantaoui, cette résidence offre une vue imprenable sur la marina. Les appartements sont conçus pour offrir un maximum de confort et de luxe, avec des finitions modernes et des équipements haut de gamme. Profitez d\'un accès direct à la plage, aux restaurants et aux commerces de la marina.',
    features: [
      'Piscine à débordement', 'Accès direct à la plage', 'Parking privé', 'Sécurité 24h/24',
      'Terrasses avec vue sur mer', 'Climatisation centralisée', 'Cuisine équipée'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=800'
    ],
    units: [
      { type: 'S+1', area: '60 m²', price: 'À partir de 200 000 DT', planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800' },
      { type: 'S+2', area: '85 m²', price: 'À partir de 300 000 DT', planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800' },
      { type: 'S+3', area: '110 m²', price: 'À partir de 400 000 DT', planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800' }
    ],
    propertySpecs: {
      type: 'Estivale',
      elevators: 1,
      basement: 'Non',
      standing: 'Luxe',
      constructionYear: '2022-Immédiate',
      status: 'Livré'
    },
    nearbyFacilities: [
      'Plage à 50m', 'Restaurants à 100m', 'Commerces à 200m', 'Golf à 5km'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    virtualTourUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '3',
    title: 'Business Center Tunis',
    promoter: 'Delta Business',
    promoterId: '3',
    location: 'Tunis, Centre Urbain Nord',
    fullAddress: 'Avenue des Nations Unies, Centre Urbain Nord, Tunis, Tunisie',
    handoverDate: '2025',
    propertyType: 'commercial',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800',
    description: 'Un espace de travail moderne et fonctionnel au cœur du Centre Urbain Nord de Tunis. Ce centre d\'affaires offre des bureaux équipés, des salles de réunion, un espace de coworking et des services de domiciliation pour les entreprises de toutes tailles. Profitez d\'un emplacement stratégique avec un accès facile aux transports en commun et aux principaux axes routiers.',
    features: [
      'Bureaux équipés', 'Salles de réunion', 'Espace de coworking', 'Services de domiciliation',
      'Fibre optique', 'Climatisation', 'Parking sécurisé'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800'
    ],
    units: [
      { type: 'Bureau', area: '30 m²', price: 'À partir de 150 000 DT', planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800' },
      { type: 'Plateau', area: '100 m²', price: 'À partir de 500 000 DT', planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800' },
      { type: 'Salle de réunion', area: '20 m²', price: 'Sur demande', planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800' }
    ],
    propertySpecs: {
      type: 'Commercial',
      elevators: 4,
      basement: 'Oui, 2 niveaux',
      standing: 'Moderne',
      constructionYear: '2024-2025',
      status: 'En construction'
    },
    nearbyFacilities: [
      'Banques à 100m', 'Restaurants à 200m', 'Centre commercial à 500m', 'Accès autoroute à 1km'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    virtualTourUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '4',
    title: 'Résidence Les Oliviers',
    promoter: 'Groupe Immobilier Méditerranée',
    promoterId: '4',
    location: 'Hammamet, Sud',
    fullAddress: 'Route Touristique, Hammamet Sud, Nabeul, Tunisie',
    handoverDate: 'Vendu',
    propertyType: 'habitation',
    imageUrl: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800',
    description: 'Une résidence de charme située dans un quartier calme et résidentiel de Hammamet Sud. Les appartements sont conçus pour offrir un maximum de confort et de tranquillité, avec des finitions soignées et des équipements modernes. Profitez d\'un cadre verdoyant avec des jardins paysagers, une piscine et un espace de jeux pour enfants.',
    features: [
      'Piscine', 'Jardins paysagers', 'Espace de jeux pour enfants', 'Parking',
      'Sécurité 24h/24', 'Climatisation', 'Chauffage central'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800'
    ],
    units: [
      { type: 'S+1', area: '55 m²', price: 'À partir de 180 000 DT', planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800' },
      { type: 'S+2', area: '75 m²', price: 'À partir de 250 000 DT', planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800' },
      { type: 'S+3', area: '95 m²', price: 'À partir de 320 000 DT', planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800' }
    ],
    propertySpecs: {
      type: 'Habitation',
      elevators: 1,
      basement: 'Non',
      standing: 'Moyen standing',
      constructionYear: '2020-Vendu',
      status: 'Vendu'
    },
    nearbyFacilities: [
      'Plage à 500m', 'Commerces à 200m', 'Restaurants à 300m', 'Centre ville à 2km'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    virtualTourUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '5',
    title: 'Parc Résidentiel El Ghazela',
    promoter: 'Immobilière Carthage',
    promoterId: '1',
    location: 'Ariana, El Ghazela',
    fullAddress: 'Avenue de l\'UMA, El Ghazela, Ariana, Tunisie',
    handoverDate: '2026',
    propertyType: 'habitation',
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800',
    description: 'Un nouveau parc résidentiel à El Ghazela, offrant un cadre de vie moderne et agréable. Les appartements sont conçus pour répondre aux besoins des familles, avec des espaces de vie spacieux et lumineux. Profitez d\'un environnement calme et sécurisé, avec des espaces verts, une aire de jeux pour enfants et un parking souterrain.',
    features: [
      'Espaces verts', 'Aire de jeux pour enfants', 'Parking souterrain', 'Sécurité 24h/24',
      'Ascenseur', 'Chauffage central', 'Climatisation'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800'
    ],
    units: [
      { type: 'S+1', area: '65 m²', price: 'À partir de 220 000 DT', planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800' },
      { type: 'S+2', area: '90 m²', price: 'À partir de 330 000 DT', planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800' },
      { type: 'S+3', area: '120 m²', price: 'À partir de 440 000 DT', planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800' }
    ],
    propertySpecs: {
      type: 'Habitation',
      elevators: 2,
      basement: 'Oui',
      standing: 'Haut standing',
      constructionYear: '2024-2026',
      status: 'En construction'
    },
    nearbyFacilities: [
      'École à 500m', 'Commerces à 1km', 'Centre commercial à 2km', 'Accès autoroute à 3km'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    virtualTourUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '6',
    title: 'Tour Crystal',
    promoter: 'Groupe Azur',
    promoterId: '2',
    location: 'Tunis, Les Berges du Lac',
    fullAddress: 'Rue du Lac Victoria, Les Berges du Lac, Tunis, Tunisie',
    handoverDate: '2025',
    propertyType: 'mixte',
    imageUrl: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=800',
    description: 'Un projet mixte combinant des espaces résidentiels et commerciaux, situé dans le quartier prestigieux des Berges du Lac à Tunis. La Tour Crystal offre une vue panoramique sur le lac et les environs, avec des appartements de luxe, des bureaux modernes et des commerces de proximité. Profitez d\'un emplacement privilégié avec un accès facile aux commodités et aux transports.',
    features: [
      'Appartements de luxe', 'Bureaux modernes', 'Commerces de proximité', 'Piscine',
      'Salle de sport', 'Parking souterrain', 'Sécurité 24h/24'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800'
    ],
    units: [
      { type: 'Appartement', area: '80 m²', price: 'À partir de 400 000 DT', planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800' },
      { type: 'Bureau', area: '50 m²', price: 'À partir de 250 000 DT', planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800' },
      { type: 'Commerce', area: '30 m²', price: 'Sur demande', planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800' }
    ],
    propertySpecs: {
      type: 'Mixte',
      elevators: 6,
      basement: 'Oui, 3 niveaux',
      standing: 'Luxe',
      constructionYear: '2023-2025',
      status: 'En construction'
    },
    nearbyFacilities: [
      'Commerces à 50m', 'Restaurants à 100m', 'Banques à 200m', 'Accès autoroute à 1km'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    virtualTourUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '7',
    title: 'Dunes Dorées',
    promoter: 'Delta Business',
    promoterId: '3',
    location: 'Djerba, Zone Touristique',
    fullAddress: 'Zone Touristique, Djerba, Medenine, Tunisie',
    handoverDate: 'Immédiate',
    propertyType: 'estivale',
    imageUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800',
    description: 'Un complexe résidentiel de vacances situé dans la zone touristique de Djerba, offrant un accès direct à la plage et une vue imprenable sur la mer. Les appartements sont entièrement équipés et décorés avec goût, offrant un confort optimal pour des vacances inoubliables. Profitez d\'une piscine, d\'un restaurant, d\'un bar et de nombreuses activités de loisirs.',
    features: [
      'Accès direct à la plage', 'Piscine', 'Restaurant', 'Bar',
      'Activités de loisirs', 'Climatisation', 'Balcon ou terrasse'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800'
    ],
    units: [
      { type: 'Studio', area: '40 m²', price: 'À partir de 150 000 DT', planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800' },
      { type: 'Appartement', area: '60 m²', price: 'À partir de 220 000 DT', planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800' },
      { type: 'Suite', area: '80 m²', price: 'À partir de 300 000 DT', planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800' }
    ],
    propertySpecs: {
      type: 'Estivale',
      elevators: 1,
      basement: 'Non',
      standing: 'Moyen standing',
      constructionYear: '2022-Immédiate',
      status: 'Livré'
    },
    nearbyFacilities: [
      'Plage à 50m', 'Restaurants à 100m', 'Commerces à 200m', 'Casino à 500m'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    virtualTourUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '8',
    title: 'Centre Commercial Médina',
    promoter: 'Groupe Immobilier Méditerranée',
    promoterId: '4',
    location: 'Sousse, Centre Ville',
    fullAddress: 'Avenue Habib Bourguiba, Sousse, Tunisie',
    handoverDate: '2025',
    propertyType: 'commercial',
    imageUrl: 'https://images.unsplash.com/photo-1535981767287-35259dbf7d0e?auto=format&fit=crop&w=800',
    description: 'Un centre commercial moderne et dynamique situé au cœur de Sousse, offrant une grande variété de boutiques, de restaurants et de services. Le Centre Commercial Médina est un lieu de shopping et de divertissement incontournable, avec un parking spacieux, une sécurité 24h/24 et une ambiance conviviale.',
    features: [
      'Boutiques de mode', 'Restaurants', 'Cafés', 'Supermarché',
      'Parking', 'Sécurité 24h/24', 'Aire de jeux pour enfants'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1535981767287-35259dbf7d0e?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800'
    ],
    units: [
      { type: 'Boutique', area: '40 m²', price: 'Sur demande', planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800' },
      { type: 'Restaurant', area: '80 m²', price: 'Sur demande', planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800' },
      { type: 'Kiosque', area: '10 m²', price: 'Sur demande', planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800' }
    ],
    propertySpecs: {
      type: 'Commercial',
      elevators: 4,
      basement: 'Oui',
      standing: 'Moderne',
      constructionYear: '2024-2025',
      status: 'En construction'
    },
    nearbyFacilities: [
      'Banques à 50m', 'Hôtels à 100m', 'Transports en commun à 200m', 'Plage à 500m'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    virtualTourUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the project with the matching ID
  const project = projectsData.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container-custom py-12">
          <h1 className="text-2xl font-bold text-mineral">Projet non trouvé</h1>
          <p className="mt-4">Le projet que vous recherchez n'existe pas ou a été supprimé.</p>
          <Button asChild className="mt-6">
            <Link to="/projets">Voir tous les projets</Link>
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
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div>
                <h1 className="text-3xl font-bold text-mineral">{project.title}</h1>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {project.propertyType === 'habitation' ? 'Habitation' : 
                    project.propertyType === 'commercial' ? 'Commercial' : 
                    project.propertyType === 'estivale' ? 'Estivale' : 'Mixte'}
                  </span>
                  
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    project.handoverDate === 'Immédiate' ? 'bg-green-100 text-green-800' :
                    project.handoverDate === 'Vendu' ? 'bg-red-100 text-red-800' :
                    project.handoverDate.includes('2025') ? 'bg-amber-100 text-amber-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {project.handoverDate === 'Immédiate' ? 'Clés immédiate' :
                     project.handoverDate === 'Vendu' ? 'Vendu' : 
                     `Clés ${project.handoverDate}`}
                  </span>
                </div>
                
                <div className="flex items-center mt-4 text-sm text-gray-600">
                  <MapPin size={16} className="mr-1 text-mineral" />
                  <span>{project.location}</span>
                </div>
              </div>
              
              <div className="flex items-center">
                <Link to={`/promoteurs/${project.promoterId}`} className="flex items-center">
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Promoteur</p>
                    <p className="font-medium text-mineral hover:text-sage transition-colors">{project.promoter}</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Gallery */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
                {project.gallery && project.gallery.length > 0 && (
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img 
                      src={project.gallery[0]} 
                      alt={project.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                )}
              </div>
              
              {/* Description */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-xl font-bold text-mineral mb-4">Description</h2>
                <p className="text-gray-700">{project.description}</p>
              </div>
              
              {/* Features */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-xl font-bold text-mineral mb-4">Caractéristiques</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check size={18} className="text-sage mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Units */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-xl font-bold text-mineral mb-4">Unités disponibles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.units.map((unit, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="text-center mb-2">
                          <h3 className="font-bold text-lg">{unit.type}</h3>
                          <p className="text-sm text-gray-600">{unit.area}</p>
                        </div>
                        <div className="aspect-[4/3] relative overflow-hidden rounded-md mb-2">
                          <img 
                            src={unit.planImage} 
                            alt={`Plan ${unit.type}`} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <p className="text-center font-medium text-mineral">{unit.price}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Property Specs */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-mineral mb-4">Spécifications</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Type de bien</span>
                      <span className="font-medium">{project.propertySpecs.type}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ascenseurs</span>
                      <span className="font-medium">{project.propertySpecs.elevators}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sous-sol</span>
                      <span className="font-medium">{project.propertySpecs.basement}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Standing</span>
                      <span className="font-medium">{project.propertySpecs.standing}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Construction</span>
                      <span className="font-medium">{project.propertySpecs.constructionYear}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Statut</span>
                      <span className="font-medium">{project.propertySpecs.status}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Address */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-mineral mb-4">Adresse</h2>
                  
                  <div className="flex items-start mb-4">
                    <MapPin size={18} className="text-mineral mr-2 mt-1 flex-shrink-0" />
                    <span>{project.fullAddress}</span>
                  </div>
                  
                  {/* Simple map placeholder - in a real app, integrate Google Maps or similar */}
                  <div className="bg-gray-200 aspect-[16/9] rounded-md flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Carte interactive</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* Nearby Facilities */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-mineral mb-4">À proximité</h2>
                  
                  <ul className="space-y-2">
                    {project.nearbyFacilities.map((facility, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={18} className="text-sage mr-2 mt-0.5 flex-shrink-0" />
                        <span>{facility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Contact Button */}
              <Button className="w-full bg-mineral text-white hover:bg-mineral/90 mb-4">
                Contacter le promoteur
              </Button>
              
              <Button variant="outline" className="w-full border-mineral text-mineral hover:bg-mineral/5">
                Demander un rendez-vous
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectPage;
