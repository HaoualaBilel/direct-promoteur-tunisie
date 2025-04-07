import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  Eye, 
  Home, 
  Building2, 
  Umbrella, 
  Check, 
  ExternalLink,
  Bed,
  DoorClosed,
  LayoutGrid,
  FileText,
  ArrowUp,
  ArrowDown,
  Info,
  Phone,
  Mail
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Project, ProjectUnit, Professional, ProfessionalCategory } from '@/types/models';

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

// Enhanced mock data for demonstration
const projectsData: Project[] = [
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
      { 
        id: '1-1',
        type: 'S+1', 
        area: '75 m²', 
        price: 'À partir de 250 000 DT', 
        planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
        floor: 1,
        rooms: 2,
        bathrooms: 1,
        orientation: 'Sud-Est',
        balcony: true,
        availability: 'Disponible',
        variants: [
          {
            id: '1-1-1',
            name: 'S+1 Type A',
            area: '75 m²',
            floor: 1,
            price: '250 000 DT',
            planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
            orientation: 'Sud-Est',
            features: ['Balcon', 'Vue sur jardin']
          },
          {
            id: '1-1-2',
            name: 'S+1 Type B',
            area: '78 m²',
            floor: 2,
            price: '265 000 DT',
            planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
            orientation: 'Nord-Est',
            features: ['Balcon', 'Vue sur piscine']
          },
          {
            id: '1-1-3',
            name: 'S+1 Type C',
            area: '70 m²',
            floor: 3,
            price: '245 000 DT',
            planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
            orientation: 'Sud-Ouest',
            features: ['Balcon', 'Cuisine américaine']
          }
        ]
      },
      { 
        id: '1-2',
        type: 'S+2', 
        area: '100 m²', 
        price: 'À partir de 350 000 DT', 
        planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
        floor: 2,
        rooms: 3,
        bathrooms: 1,
        orientation: 'Sud-Ouest',
        balcony: true,
        availability: 'Disponible',
        variants: [
          {
            id: '1-2-1',
            name: 'S+2 Type A',
            area: '100 m²',
            floor: 2,
            price: '350 000 DT',
            planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
            orientation: 'Sud-Ouest',
            features: ['Double balcon', 'Suite parentale']
          },
          {
            id: '1-2-2',
            name: 'S+2 Type B',
            area: '105 m²',
            floor: 4,
            price: '375 000 DT',
            planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
            orientation: 'Nord-Ouest',
            features: ['Terrasse', 'Dressing', 'Vue panoramique']
          }
        ]
      },
      { 
        id: '1-3',
        type: 'S+3', 
        area: '130 m²', 
        price: 'À partir de 450 000 DT', 
        planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
        floor: 3,
        rooms: 4,
        bathrooms: 2,
        orientation: 'Nord-Est',
        balcony: true,
        availability: 'Réservé',
        variants: [
          {
            id: '1-3-1',
            name: 'S+3 Type Luxe',
            area: '135 m²',
            floor: 5,
            price: '495 000 DT',
            planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
            orientation: 'Sud',
            features: ['Double terrasse', '2 salles de bain', 'Cuisine séparée']
          }
        ]
      }
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
    virtualTourUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    professionals: [
      {
        id: 'p1',
        name: 'Entreprise Générale El Bouniène',
        categoryId: '1',
        categoryName: 'Bâtiment & Gros œuvre',
        specialty: 'Entreprise de construction (gros œuvre)',
        contact: {
          phone: '+216 71 123 456',
          email: 'contact@elbouniene.tn'
        },
        logo: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300'
      },
      {
        id: 'p2',
        name: 'Fondations Solides SARL',
        categoryId: '1',
        categoryName: 'Bâtiment & Gros œuvre',
        specialty: 'Entreprise de fondation profonde (pieux, radier…)',
        contact: {
          phone: '+216 71 222 333'
        }
      },
      {
        id: 'p3',
        name: 'Plâtrerie Moderne',
        categoryId: '2',
        categoryName: 'Second œuvre',
        specialty: 'Cloisons & Plâtrerie',
        contact: {
          phone: '+216 71 333 444',
          email: 'info@platrerie-moderne.tn'
        }
      },
      {
        id: 'p4',
        name: 'Carrelages & Céramiques du Sud',
        categoryId: '2',
        categoryName: 'Second œuvre',
        specialty: 'Carrelage',
        contact: {
          phone: '+216 71 444 555'
        }
      },
      {
        id: 'p5',
        name: 'Parquets El Menzeh',
        categoryId: '2',
        categoryName: 'Second œuvre',
        specialty: 'Parquet / Stratifié',
        contact: {
          phone: '+216 71 555 666'
        }
      },
      {
        id: 'p6',
        name: 'Élec Tunisie',
        categoryId: '3',
        categoryName: 'Installations techniques',
        specialty: 'Électricité bâtiment (tableau, câblage, prises)',
        contact: {
          phone: '+216 71 666 777',
          email: 'contact@electunisie.tn'
        }
      },
      {
        id: 'p7',
        name: 'Smart Buildings',
        categoryId: '3',
        categoryName: 'Installations techniques',
        specialty: 'Domotique (gestion lumière, volets, clim…)',
        contact: {
          phone: '+216 71 777 888',
          website: 'www.smartbuildings.tn'
        }
      },
      {
        id: 'p8',
        name: 'Alu Fenêtres',
        categoryId: '4',
        categoryName: 'Menuiserie & fermetures',
        specialty: 'Menuiserie aluminium',
        contact: {
          phone: '+216 71 888 999'
        }
      }
    ]
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
      { 
        id: '2-1',
        type: 'S+1', 
        area: '60 m²', 
        price: 'À partir de 200 000 DT', 
        planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
        floor: 1,
        rooms: 2,
        bathrooms: 1,
        orientation: 'Sud-Est',
        balcony: true,
        availability: 'Disponible',
        variants: [
          {
            id: '2-1-1',
            name: 'S+1 Type A',
            area: '60 m²',
            floor: 1,
            price: '200 000 DT',
            planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
            orientation: 'Sud-Est',
            features: ['Balcon', 'Vue sur jardin']
          },
          {
            id: '2-1-2',
            name: 'S+1 Type B',
            area: '63 m²',
            floor: 2,
            price: '215 000 DT',
            planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
            orientation: 'Nord-Est',
            features: ['Balcon', 'Vue sur piscine']
          },
          {
            id: '2-1-3',
            name: 'S+1 Type C',
            area: '58 m²',
            floor: 3,
            price: '195 000 DT',
            planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
            orientation: 'Sud-Ouest',
            features: ['Balcon', 'Cuisine américaine']
          }
        ]
      },
      { 
        id: '2-2',
        type: 'S+2', 
        area: '85 m²', 
        price: 'À partir de 300 000 DT', 
        planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
        floor: 2,
        rooms: 3,
        bathrooms: 1,
        orientation: 'Sud-Ouest',
        balcony: true,
        availability: 'Disponible',
        variants: [
          {
            id: '2-2-1',
            name: 'S+2 Type A',
            area: '85 m²',
            floor: 2,
            price: '300 000 DT',
            planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
            orientation: 'Sud-Ouest',
            features: ['Double balcon', 'Suite parentale']
          },
          {
            id: '2-2-2',
            name: 'S+2 Type B',
            area: '90 m²',
            floor: 4,
            price: '325 000 DT',
            planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
            orientation: 'Nord-Ouest',
            features: ['Terrasse', 'Dressing', 'Vue panoramique']
          }
        ]
      },
      { 
        id: '2-3',
        type: 'S+3', 
        area: '110 m²', 
        price: 'À partir de 400 000 DT', 
        planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
        floor: 3,
        rooms: 4,
        bathrooms: 2,
        orientation: 'Nord-Est',
        balcony: true,
        availability: 'Réservé',
        variants: [
          {
            id: '2-3-1',
            name: 'S+3 Type Luxe',
            area: '115 m²',
            floor: 5,
            price: '445 000 DT',
            planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
            orientation: 'Sud',
            features: ['Double terrasse', '2 salles de bain', 'Cuisine séparée']
          }
        ]
      }
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
    virtualTourUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    professionals: [
      {
        id: 'p9',
        name: 'Alu Fenêtres',
        categoryId: '4',
        categoryName: 'Menuiserie & fermetures',
        specialty: 'Menuiserie aluminium',
        contact: {
          phone: '+216 71 888 999'
        }
      }
    ]
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
      { 
        id: '3-1',
        type: 'Bureau', 
        area: '30 m²', 
        price: 'À partir de 150 000 DT', 
        planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
        floor: 1,
        rooms: 1,
        bathrooms: 1,
        orientation: 'Sud-Est',
        balcony: false,
        availability: 'Disponible',
        variants: [
          {
            id: '3-1-1',
            name: 'Bureau Type A',
            area: '30 m²',
            floor: 1,
            price: '150 000 DT',
            planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
            orientation: 'Sud-Est',
            features: ['Climatisation', 'Vue sur jardin']
          },
          {
            id: '3-1-2',
            name: 'Bureau Type B',
            area: '33 m²',
            floor: 2,
            price: '165 000 DT',
            planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
            orientation: 'Nord-Est',
            features: ['Climatisation', 'Vue sur piscine']
          },
          {
            id: '3-1-3',
            name: 'Bureau Type C',
            area: '28 m²',
            floor: 3,
            price: '145 000 DT',
            planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
            orientation: 'Sud-Ouest',
            features: ['Climatisation', 'Cuisine américaine']
          }
        ]
      },
      { 
        id: '3-2',
        type: 'Plateau', 
        area: '100 m²', 
        price: 'À partir de 500 000 DT', 
        planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
        floor: 2,
        rooms: 3,
        bathrooms: 1,
        orientation: 'Sud-Ouest',
        balcony: true,
        availability: 'Disponible',
        variants: [
          {
            id: '3-2-1',
            name: 'Plateau Type A',
            area: '100 m²',
            floor: 2,
            price: '500 000 DT',
            planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
            orientation: 'Sud-Ouest',
            features: ['Double balcon', 'Suite parentale']
          },
          {
            id: '3-2-2',
            name: 'Plateau Type B',
            area: '105 m²',
            floor: 4,
            price: '525 000 DT',
            planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
            orientation: 'Nord-Ouest',
            features: ['Terrasse', 'Dressing', 'Vue panoramique']
          }
        ]
      },
      { 
        id: '3-3',
        type: 'Salle de réunion', 
        area: '20 m²', 
        price: 'Sur demande', 
        planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
        floor: 3,
        rooms: 4,
        bathrooms: 2,
        orientation: 'Nord-Est',
        balcony: true,
        availability: 'Réservé',
        variants: [
          {
            id: '3-3-1',
            name: 'Salle de réunion Type Luxe',
            area: '25 m²',
            floor: 5,
            price: 'Sur demande',
            planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
            orientation: 'Sud',
            features: ['Double terrasse', '2 salles de bain', 'Cuisine séparée']
          }
        ]
      }
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
    virtualTourUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    professionals: [
      {
        id: 'p10',
        name: 'Alu Fenêtres',
        categoryId: '4',
        categoryName: 'Menuiserie & fermetures',
        specialty: 'Menuiserie aluminium',
        contact: {
          phone: '+216 71 888 999'
        }
      }
    ]
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
      { 
        id: '4-1',
        type: 'S+1', 
        area: '55 m²', 
        price: 'À partir de 180 000 DT', 
        planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
        floor: 1,
        rooms: 2,
        bathrooms: 1,
        orientation: 'Sud-Est',
        balcony: true,
        availability: 'Disponible',
        variants: [
          {
            id: '4-1-1',
            name: 'S+1 Type A',
            area: '55 m²',
            floor: 1,
            price: '180 000 DT',
            planImage: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&w=800',
            orientation: 'Sud-Est',
            features:
