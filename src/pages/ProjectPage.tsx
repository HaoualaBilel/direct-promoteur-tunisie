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
            features: ['Balcon', 'Vue sur jardin']
          }
        ]
      }
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
                
                {project.gallery && project.gallery.length > 1 && (
                  <div className="grid grid-cols-4 gap-2 p-2">
                    {project.gallery.slice(1, 5).map((img, index) => (
                      <div key={index} className="aspect-[4/3] overflow-hidden rounded-md">
                        <img 
                          src={img} 
                          alt={`${project.title} - image ${index + 2}`} 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Description */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-xl font-semibold text-mineral mb-4">Description</h2>
                <p className="text-gray-700">{project.description}</p>
                
                {/* Property specs */}
                <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Type</p>
                    <p className="font-medium">{project.propertySpecs.type}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Ascenseurs</p>
                    <p className="font-medium">{project.propertySpecs.elevators}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Sous-sol</p>
                    <p className="font-medium">{project.propertySpecs.basement}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Standing</p>
                    <p className="font-medium">{project.propertySpecs.standing}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Construction</p>
                    <p className="font-medium">{project.propertySpecs.constructionYear}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Statut</p>
                    <p className="font-medium">{project.propertySpecs.status}</p>
                  </div>
                </div>
              </div>
              
              {/* Units */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-xl font-semibold text-mineral mb-6">Biens disponibles</h2>
                
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="all">Tous</TabsTrigger>
                    <TabsTrigger value="available">Disponibles</TabsTrigger>
                    <TabsTrigger value="reserved">Réservés</TabsTrigger>
                    <TabsTrigger value="sold">Vendus</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all" className="pt-4">
                    <div className="space-y-6">
                      {project?.units.map((unit) => (
                        <Card key={unit.id} className="overflow-hidden">
                          <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/4 bg-blue-50 flex items-center justify-center p-4">
                              <div className="text-center">
                                <div className="font-semibold text-mineral mb-2">{unit.type}</div>
                                <div className="text-sm text-gray-600 mb-1">{unit.area}</div>
                                <div className="text-xs bg-mineral/10 p-1 rounded">Voir les plans</div>
                              </div>
                            </div>
                            
                            <CardContent className="flex-1 p-4 md:p-6">
                              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div>
                                  <h3 className="font-semibold text-lg text-mineral">{unit.type}</h3>
                                  <p className="text-gray-600 mb-2">{unit.area} | {unit.price}</p>
                                  
                                  <div className="flex flex-wrap gap-2 mt-2">
                                    {unit.floor && (
                                      <Badge variant="outline" className="flex items-center gap-1">
                                        <Building2 size={12} />
                                        Étage {unit.floor}
                                      </Badge>
                                    )}
                                    
                                    {unit.rooms && (
                                      <Badge variant="outline" className="flex items-center gap-1">
                                        <Bed size={12} />
                                        {unit.rooms} pièce{unit.rooms > 1 ? 's' : ''}
                                      </Badge>
                                    )}
                                    
                                    {unit.bathrooms && (
                                      <Badge variant="outline" className="flex items-center gap-1">
                                        <Umbrella size={12} />
                                        {unit.bathrooms} SDB
                                      </Badge>
                                    )}
                                    
                                    {unit.orientation && (
                                      <Badge variant="outline" className="flex items-center gap-1">
                                        <MapPin size={12} />
                                        {unit.orientation}
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                                
                                <div className="text-right">
                                  {unit.availability && (
                                    <Badge className={`${
                                      unit.availability === 'Disponible' ? 'bg-green-100 text-green-800 hover:bg-green-200' :
                                      unit.availability === 'Réservé' ? 'bg-amber-100 text-amber-800 hover:bg-amber-200' :
                                      'bg-red-100 text-red-800 hover:bg-red-200'
                                    }`}>
                                      {unit.availability}
                                    </Badge>
                                  )}
                                  
                                  {unit.variants && unit.variants.length > 0 && (
                                    <p className="text-sm text-mineral mt-2">
                                      {unit.variants.length} variante{unit.variants.length > 1 ? 's' : ''} disponible{unit.variants.length > 1 ? 's' : ''}
                                    </p>
                                  )}
                                </div>
                              </div>
                              
                              {/* Unit variants */}
                              {unit.variants && unit.variants.length > 0 && (
                                <div className="mt-4 border-t pt-4">
                                  <p className="text-sm font-medium mb-2">Variantes disponibles</p>
                                  
                                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {unit.variants.map((variant) => (
                                      <div key={variant.id} className="border rounded-md p-3 hover:shadow-md transition-shadow group">
                                        <div className="aspect-[4/3] bg-gray-100 mb-2 overflow-hidden rounded">
                                          <img 
                                            src={variant.planImage} 
                                            alt={`Plan ${variant.name}`} 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                          />
                                        </div>
                                        <h4 className="font-medium text-mineral">{variant.name}</h4>
                                        <p className="text-sm text-gray-600">{variant.area} | Étage {variant.floor}</p>
                                        <p className="text-sm font-medium mt-1">{variant.price}</p>
                                        
                                        {variant.features && (
                                          <div className="mt-2 flex flex-wrap gap-1">
                                            {variant.features.map((feature, index) => (
                                              <Badge key={index} variant="secondary" className="text-xs">
                                                {feature}
                                              </Badge>
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                              
                              <div className="mt-4 flex justify-end">
                                <Button variant="outline" size="sm" className="text-mineral border-mineral hover:bg-mineral/5">
                                  Plus de détails
                                </Button>
                              </div>
                            </CardContent>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="available" className="pt-4">
                    <div className="space-y-6">
                      {project.units.filter(unit => unit.availability === 'Disponible').map((unit) => (
                        <Card key={unit.id}>
                          <CardContent className="p-4">
                            <h3>{unit.type}</h3>
                          </CardContent>
                        </Card>
                      ))}
                      
                      {project.units.filter(unit => unit.availability === 'Disponible').length === 0 && (
                        <p className="text-center text-gray-500 py-8">Aucun bien disponible pour ce projet.</p>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="reserved" className="pt-4">
                    {/* ... keep existing code (similar to "available" tab but for reserved units) */}
                  </TabsContent>
                  
                  <TabsContent value="sold" className="pt-4">
                    {/* ... keep existing code (similar to "available" tab but for sold units) */}
                  </TabsContent>
                </Tabs>
              </div>
              
              {/* Features */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-xl font-semibold text-mineral mb-4">Prestations</h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check size={16} className="text-sage mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Nearby facilities */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-xl font-semibold text-mineral mb-4">À proximité</h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {project.nearbyFacilities.map((facility, index) => (
                    <div key={index} className="flex items-start">
                      <Check size={16} className="text-sage mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Professionals */}
              {project.professionals && project.professionals.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                  <h2 className="text-xl font-semibold text-mineral mb-6">Professionnels du projet</h2>
                  
                  <Tabs defaultValue={professionalCategories[0].id} className="w-full">
                    <TabsList className="grid w-full grid-cols-3 h-auto">
                      {professionalCategories
                        .filter(cat => project.professionals?.some(pro => pro.categoryId === cat.id))
                        .map(category => (
                          <TabsTrigger key={category.id} value={category.id} className="text-xs py-2 px-1">
                            {category.name}
                          </TabsTrigger>
                      ))}
                    </TabsList>
                    
                    {professionalCategories
                      .filter(cat => project.professionals?.some(pro => pro.categoryId === cat.id))
                      .map(category => (
                        <TabsContent key={category.id} value={category.id} className="pt-4">
                          <div className="space-y-4">
                            {project.professionals
                              ?.filter(pro => pro.categoryId === category.id)
                              .map(professional => (
                                <Card key={professional.id}>
                                  <CardContent className="p-4 flex flex-col sm:flex-row gap-4 items-start">
                                    {professional.logo ? (
                                      <div className="w-16 h-16 shrink-0">
                                        <img 
                                          src={professional.logo} 
                                          alt={professional.name}
                                          className="w-full h-full object-contain" 
                                        />
                                      </div>
                                    ) : (
                                      <div className="w-16 h-16 bg-gray-100 flex items-center justify-center shrink-0 rounded-md">
                                        <Building2 size={24} className="text-gray-400" />
                                      </div>
                                    )}
                                    
                                    <div className="flex-1">
                                      <h3 className="font-semibold text-mineral">{professional.name}</h3>
                                      <p className="text-sm text-gray-600">{professional.specialty}</p>
                                      
                                      {professional.contact && (
                                        <div className="mt-2 space-y-1">
                                          {professional.contact.phone && (
                                            <div className="flex items-center text-sm">
                                              <Phone size={14} className="mr-2 text-mineral" />
                                              <a href={`tel:${professional.contact.phone}`} className="hover:text-sage transition-colors">
                                                {professional.contact.phone}
                                              </a>
                                            </div>
                                          )}
                                          
                                          {professional.contact.email && (
                                            <div className="flex items-center text-sm">
                                              <Mail size={14} className="mr-2 text-mineral" />
                                              <a href={`mailto:${professional.contact.email}`} className="hover:text-sage transition-colors">
                                                {professional.contact.email}
                                              </a>
                                            </div>
                                          )}
                                          
                                          {professional.contact.website && (
                                            <div className="flex items-center text-sm">
                                              <ExternalLink size={14} className="mr-2 text-mineral" />
                                              <a 
                                                href={professional.contact.website.startsWith('http') ? professional.contact.website : `https://${professional.contact.website}`} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="hover:text-sage transition-colors"
                                              >
                                                {professional.contact.website}
                                              </a>
                                            </div>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  </CardContent>
                                </Card>
                            ))}
                          </div>
                        </TabsContent>
                    ))}
                  </Tabs>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Location */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-mineral mb-4">Emplacement</h2>
                
                <div className="aspect-[4/3] bg-gray-100 mb-4 rounded overflow-hidden">
                  {/* Placeholder for map */}
                  <div className="w-full h-full flex items-center justify-center">
                    <MapPin size={32} className="text-gray-400" />
                  </div>
                </div>
                
                <p className="text-sm mb-4">{project.fullAddress}</p>
                
                <Button className="w-full">Voir sur la carte</Button>
              </div>
              
              {/* Contact */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-mineral mb-4">Contacter le promoteur</h2>
                
                <div className="flex items-center mb-6">
                  <div className="bg-white border rounded-lg p-2 w-12 h-12 flex items-center justify-center mr-4">
                    <Building2 size={24} className="text-mineral" />
                  </div>
                  <div>
                    <p className="font-medium">{project.promoter}</p>
                    <Link to={`/promoteurs/${project.promoterId}`} className="text-sm text-mineral hover:text-sage transition-colors">
                      Voir le profil
                    </Link>
                  </div>
                </div>
                
                <Button className="w-full mb-2">Contacter</Button>
                <Button variant="outline" className="w-full">Demander une brochure</Button>
              </div>
              
              {/* Media */}
              {(project.videoUrl || project.virtualTourUrl) && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-mineral mb-4">Médias</h2>
                  
                  <div className="space-y-4">
                    {project.videoUrl && (
                      <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                        <Eye size={18} />
                        Voir la vidéo
                      </Button>
                    )}
                    
                    {project.virtualTourUrl && (
                      <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                        <Eye size={18} />
                        Visite virtuelle
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectPage;
