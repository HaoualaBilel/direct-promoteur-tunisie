
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Building2, 
  ArrowRight, 
  Search, 
  Filter,
  Tag,
  Clock,
  MapPin,
  ChevronRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample data for promoter news
const promoterNewsData = [
  {
    id: '1',
    title: 'Lancement du nouveau projet Les Jardins de Carthage Phase 2',
    excerpt: 'Découvrez notre nouvelle phase de la résidence de haut standing aux Berges du Lac avec vue panoramique.',
    content: `
      <p>Nous sommes ravis d'annoncer le lancement de la deuxième phase de notre projet emblématique "Les Jardins de Carthage" situé aux Berges du Lac.</p>
      
      <p>Cette nouvelle phase comprendra 120 appartements de haut standing, allant du S+1 au S+4, avec des finitions de luxe et des vues imprenables sur le lac de Tunis. Les résidents bénéficieront d'espaces verts étendus, d'une piscine, d'une salle de sport et d'un service de sécurité 24h/24.</p>
      
      <p>Les travaux débuteront en septembre 2023 pour une livraison prévue début 2026. Les préventes seront lancées le mois prochain avec des offres spéciales pour les premiers acheteurs.</p>
      
      <p>Pour plus d'informations ou pour prendre rendez-vous pour une présentation du projet, n'hésitez pas à nous contacter.</p>
    `,
    date: '2023-07-15',
    imageUrl: 'https://images.unsplash.com/photo-1580216643062-cf460548a66a?auto=format&fit=crop&w=800',
    category: 'Lancement',
    promoterId: '1',
    promoterName: 'Immobilière Carthage',
    promoterLogo: 'https://images.unsplash.com/photo-1580216643062-cf460548a66a?auto=format&fit=crop&w=300',
    tags: ['lancement', 'Berges du Lac', 'appartements'],
    location: 'Tunis, Les Berges du Lac'
  },
  {
    id: '2',
    title: 'Ouverture du centre commercial Medina Mall à Sousse',
    excerpt: 'Le plus grand centre commercial du Sahel ouvre ses portes avec plus de 100 boutiques.',
    content: `
      <p>Nous sommes fiers d'annoncer l'ouverture officielle du centre commercial "Medina Mall" à Sousse, notre plus grand projet commercial à ce jour.</p>
      
      <p>Avec une superficie de 45 000 m², ce centre commercial moderne accueillera plus de 100 enseignes nationales et internationales, un hypermarché, un food court avec 15 restaurants, un cinéma multiplex et un espace de loisirs pour enfants.</p>
      
      <p>Situé à proximité de la zone touristique et facilement accessible depuis l'autoroute, Medina Mall deviendra rapidement un lieu incontournable pour le shopping et les loisirs dans la région du Sahel.</p>
      
      <p>L'inauguration officielle aura lieu le 28 février 2023 en présence des autorités locales. Des animations et promotions spéciales seront proposées pendant tout le week-end d'ouverture.</p>
    `,
    date: '2023-02-20',
    imageUrl: 'https://images.unsplash.com/photo-1519567770779-d1e24f1c686f?auto=format&fit=crop&w=800',
    category: 'Inauguration',
    promoterId: '2',
    promoterName: 'Groupe Azur',
    promoterLogo: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=300',
    tags: ['centre commercial', 'Sousse', 'ouverture'],
    location: 'Sousse, Centre Ville'
  },
  {
    id: '3',
    title: 'Journée portes ouvertes : Résidence Les Oliviers',
    excerpt: "Venez découvrir nos nouveaux appartements et bénéficiez d'offres exclusives ce weekend.",
    content: `
      <p>Nous vous invitons à notre journée portes ouvertes exceptionnelle pour découvrir la Résidence Les Oliviers à Hammamet Sud.</p>
      
      <p>Cette résidence de charme propose des appartements spacieux et lumineux dans un cadre verdoyant à seulement 5 minutes de la plage. Venez visiter nos appartements témoins entièrement meublés et aménagés pour vous projeter dans votre futur chez-vous.</p>
      
      <p>À cette occasion, bénéficiez d'offres exclusives :</p>
      <ul>
        <li>5% de remise sur le prix d'achat pour toute réservation effectuée pendant le weekend</li>
        <li>Cuisine équipée offerte</li>
        <li>Frais de notaire réduits</li>
      </ul>
      
      <p>Notre équipe commerciale sera présente pour répondre à toutes vos questions et vous accompagner dans votre projet d'acquisition.</p>
      
      <p>Rendez-vous les 10 et 11 mars 2023, de 10h à 18h, à la Résidence Les Oliviers, Route Touristique, Hammamet Sud.</p>
    `,
    date: '2023-03-05',
    imageUrl: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800',
    category: 'Événement',
    promoterId: '4',
    promoterName: 'Groupe Immobilier Méditerranée',
    promoterLogo: null,
    tags: ['portes ouvertes', 'Hammamet', 'promotion'],
    location: 'Hammamet, Sud'
  },
  {
    id: '4',
    title: 'Partenariat avec la Banque Nationale pour des offres de financement exclusives',
    excerpt: "Des conditions préférentielles pour l'acquisition d'un bien immobilier chez nos promoteurs partenaires.",
    content: `
      <p>Nous sommes heureux d'annoncer la signature d'un partenariat stratégique avec la Banque Nationale pour offrir des conditions de financement exceptionnelles à nos clients.</p>
      
      <p>Ce partenariat permettra aux acquéreurs de bénéficier :</p>
      <ul>
        <li>D'un taux préférentiel à partir de 5.75%</li>
        <li>D'une durée de remboursement allant jusqu'à 25 ans</li>
        <li>D'une période de grâce de 6 mois</li>
        <li>D'une réduction des frais de dossier de 50%</li>
      </ul>
      
      <p>Ces conditions s'appliquent à l'ensemble de nos projets immobiliers en cours de commercialisation, qu'il s'agisse de résidences principales, secondaires ou d'investissements locatifs.</p>
      
      <p>Pour plus d'informations, n'hésitez pas à contacter nos conseillers commerciaux qui vous accompagneront dans toutes les démarches, de la simulation de crédit jusqu'à la signature de l'acte de vente.</p>
    `,
    date: '2023-03-01',
    imageUrl: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=800',
    category: 'Partenariat',
    promoterId: '1',
    promoterName: 'Immobilière Carthage',
    promoterLogo: 'https://images.unsplash.com/photo-1580216643062-cf460548a66a?auto=format&fit=crop&w=300',
    tags: ['financement', 'banque', 'crédit immobilier'],
    location: 'Tunis'
  },
  {
    id: '5',
    title: 'Marina Bay View : 70% des unités déjà vendues',
    excerpt: "Notre projet phare à Port El Kantaoui connaît un succès commercial exceptionnel.",
    content: `
      <p>Nous sommes fiers d'annoncer que 70% des unités de notre projet emblématique Marina Bay View à Port El Kantaoui ont déjà trouvé preneurs, démontrant l'engouement pour cette résidence d'exception.</p>
      
      <p>Située face à la marina, avec une vue imprenable sur la mer Méditerranée, cette résidence de luxe propose des appartements du S+1 au S+3, tous dotés de finitions haut de gamme et de larges terrasses.</p>
      
      <p>Les travaux avancent conformément au planning, avec une livraison toujours prévue pour le quatrième trimestre 2023. Les acquéreurs pourront ainsi profiter de leur nouvelle résidence dès l'été 2024.</p>
      
      <p>Pour les unités restantes, nous vous invitons à contacter rapidement notre service commercial, car les derniers appartements disponibles, notamment ceux avec vue directe sur la mer, suscitent un intérêt croissant.</p>
    `,
    date: '2023-05-20',
    imageUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800',
    category: 'Avancement',
    promoterId: '2',
    promoterName: 'Groupe Azur',
    promoterLogo: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=300',
    tags: ['Sousse', 'ventes', 'succès'],
    location: 'Sousse, Port El Kantaoui'
  },
  {
    id: '6',
    title: 'Business Center Tunis : début des travaux de la tour de bureaux',
    excerpt: "Le chantier de notre complexe d'affaires au Centre Urbain Nord a officiellement démarré.",
    content: `
      <p>Nous avons le plaisir d'annoncer le début officiel des travaux de construction du Business Center Tunis, notre projet phare de bureaux au Centre Urbain Nord.</p>
      
      <p>Ce complexe d'affaires de dernière génération comprendra :</p>
      <ul>
        <li>Une tour de 15 étages offrant 25 000 m² de bureaux</li>
        <li>Un immeuble annexe de 5 étages dédié aux commerces et services</li>
        <li>Un parking souterrain de 300 places</li>
        <li>Des espaces verts et de détente</li>
      </ul>
      
      <p>Conçu selon les normes internationales les plus exigeantes, le Business Center Tunis vise la certification LEED (Leadership in Energy and Environmental Design) grâce à son approche éco-responsable intégrant panneaux solaires, récupération des eaux de pluie et matériaux durables.</p>
      
      <p>La commercialisation des espaces de bureaux est d'ores et déjà lancée, avec des possibilités d'aménagement sur mesure pour les entreprises souhaitant réserver des plateaux entiers.</p>
      
      <p>La livraison est prévue pour le premier trimestre 2025.</p>
    `,
    date: '2023-06-10',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800',
    category: 'Construction',
    promoterId: '3',
    promoterName: 'Delta Business',
    promoterLogo: null,
    tags: ['bureaux', 'construction', 'Tunis'],
    location: 'Tunis, Centre Urbain Nord'
  }
];

// Extract unique categories and tags
const categories = Array.from(new Set(promoterNewsData.map(news => news.category)));
const allTags = Array.from(new Set(promoterNewsData.flatMap(news => news.tags)));
const promoters = Array.from(new Set(promoterNewsData.map(news => news.promoterName)))
  .map(name => {
    const news = promoterNewsData.find(n => n.promoterName === name);
    return {
      id: news?.promoterId,
      name,
      logo: news?.promoterLogo
    };
  });

const PromoterNewsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPromoter, setSelectedPromoter] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  // Filter news based on search, category, promoter and tags
  const filteredNews = promoterNewsData.filter(news => {
    const matchesSearch = searchTerm === '' || 
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === null || news.category === selectedCategory;
    const matchesPromoter = selectedPromoter === null || news.promoterId === selectedPromoter;
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => news.tags.includes(tag));
    
    return matchesSearch && matchesCategory && matchesPromoter && matchesTags;
  });
  
  // Toggle tag selection
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  // Sort news by date (most recent first)
  const sortedNews = [...filteredNews].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  // Get featured news (most recent ones)
  const featuredNews = sortedNews.slice(0, 1);
  const regularNews = sortedNews.slice(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-mineral/30 to-sage/20 py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-mineral mb-4 animate-fade-in">
                Actualités des Promoteurs
              </h1>
              <p className="text-gray-600 md:text-lg animate-fade-in" style={{animationDelay: "0.2s"}}>
                Restez informé des dernières nouvelles, lancements de projets et événements du secteur immobilier
              </p>
              
              <div className="relative max-w-xl mx-auto mt-8 animate-fade-in" style={{animationDelay: "0.3s"}}>
                <Input
                  type="text"
                  placeholder="Rechercher des actualités..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10 h-12 rounded-lg border-sage focus:border-mineral"
                />
                <Search className="absolute right-3 top-3 text-gray-400" size={20} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar with filters */}
            <div className="order-2 lg:order-1 lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 lg:sticky lg:top-24">
                <h2 className="text-xl font-semibold text-mineral mb-6">Filtres</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-mineral mb-3 flex items-center">
                      <Filter size={16} className="mr-2" />
                      Catégories
                    </h3>
                    <div className="space-y-2">
                      <div 
                        className={`cursor-pointer p-2 rounded-md ${selectedCategory === null ? 'bg-mineral text-white' : 'hover:bg-cream'}`}
                        onClick={() => setSelectedCategory(null)}
                      >
                        Toutes les catégories
                      </div>
                      {categories.map(category => (
                        <div 
                          key={category}
                          className={`cursor-pointer p-2 rounded-md ${selectedCategory === category ? 'bg-mineral text-white' : 'hover:bg-cream'}`}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium text-mineral mb-3 flex items-center">
                      <Building2 size={16} className="mr-2" />
                      Promoteurs
                    </h3>
                    <div className="space-y-2">
                      <div 
                        className={`cursor-pointer p-2 rounded-md ${selectedPromoter === null ? 'bg-mineral text-white' : 'hover:bg-cream'}`}
                        onClick={() => setSelectedPromoter(null)}
                      >
                        Tous les promoteurs
                      </div>
                      {promoters.map(promoter => (
                        <div 
                          key={promoter.id}
                          className={`cursor-pointer p-2 rounded-md ${selectedPromoter === promoter.id ? 'bg-mineral text-white' : 'hover:bg-cream'}`}
                          onClick={() => setSelectedPromoter(promoter.id)}
                        >
                          {promoter.name}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium text-mineral mb-3 flex items-center">
                      <Tag size={16} className="mr-2" />
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {allTags.slice(0, 15).map(tag => (
                        <Badge 
                          key={tag}
                          variant={selectedTags.includes(tag) ? "default" : "outline"}
                          className={`cursor-pointer ${selectedTags.includes(tag) ? 'bg-mineral' : 'hover:bg-cream'}`}
                          onClick={() => toggleTag(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory(null);
                      setSelectedPromoter(null);
                      setSelectedTags([]);
                    }}
                  >
                    Réinitialiser les filtres
                  </Button>
                </div>
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-mineral/10 to-sage/10 p-6 rounded-lg">
                <h3 className="font-medium text-mineral mb-4">Recevez nos actualités</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Inscrivez-vous à notre newsletter pour recevoir les dernières actualités des promoteurs immobiliers.
                </p>
                <div className="space-y-3">
                  <Input 
                    type="email" 
                    placeholder="Votre adresse email"
                    className="w-full" 
                  />
                  <Button className="w-full">S'abonner</Button>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="order-1 lg:order-2 lg:col-span-3">
              {filteredNews.length > 0 ? (
                <>
                  {/* Featured News */}
                  {featuredNews.length > 0 && (
                    <div className="mb-12">
                      <h2 className="text-2xl font-semibold text-mineral mb-6">À la une</h2>
                      
                      <Card className="overflow-hidden">
                        <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
                          <img 
                            src={featuredNews[0].imageUrl} 
                            alt={featuredNews[0].title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        
                        <CardContent className="p-6">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <Badge className="bg-mineral text-white">
                              {featuredNews[0].category}
                            </Badge>
                            
                            <div className="flex items-center text-gray-500 text-sm">
                              <Calendar size={14} className="mr-1" />
                              <span>
                                {new Date(featuredNews[0].date).toLocaleDateString('fr-FR', {
                                  day: 'numeric',
                                  month: 'long',
                                  year: 'numeric'
                                })}
                              </span>
                            </div>
                            
                            <Link 
                              to={`/promoteurs/${featuredNews[0].promoterId}`}
                              className="flex items-center text-gray-500 text-sm hover:text-mineral transition-colors"
                            >
                              <Building2 size={14} className="mr-1" />
                              <span>{featuredNews[0].promoterName}</span>
                            </Link>
                          </div>
                          
                          <h3 className="text-2xl font-semibold text-mineral mb-3">
                            <Link to={`/actu-promoteur/${featuredNews[0].id}`} className="hover:text-sage transition-colors">
                              {featuredNews[0].title}
                            </Link>
                          </h3>
                          
                          <p className="text-gray-600 mb-4">
                            {featuredNews[0].excerpt}
                          </p>
                          
                          <div className="flex flex-wrap items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {featuredNews[0].tags.map(tag => (
                                <Badge 
                                  key={tag} 
                                  variant="outline"
                                  className="bg-cream hover:bg-sage/20 cursor-pointer"
                                  onClick={() => toggleTag(tag)}
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            
                            <Link to={`/actu-promoteur/${featuredNews[0].id}`}>
                              <Button className="mt-3 sm:mt-0">
                                Lire l'article
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                  
                  {/* Recent News */}
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-semibold text-mineral">Actualités récentes</h2>
                      
                      <div className="text-gray-500 text-sm">
                        {regularNews.length} article{regularNews.length !== 1 ? 's' : ''}
                      </div>
                    </div>
                    
                    <Tabs defaultValue="grid">
                      <div className="flex justify-between items-center mb-6">
                        <TabsList>
                          <TabsTrigger value="grid" className="px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="3" width="7" height="7"></rect>
                              <rect x="14" y="3" width="7" height="7"></rect>
                              <rect x="14" y="14" width="7" height="7"></rect>
                              <rect x="3" y="14" width="7" height="7"></rect>
                            </svg>
                          </TabsTrigger>
                          <TabsTrigger value="list" className="px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="21" y1="6" x2="3" y2="6"></line>
                              <line x1="21" y1="12" x2="3" y2="12"></line>
                              <line x1="21" y1="18" x2="3" y2="18"></line>
                            </svg>
                          </TabsTrigger>
                        </TabsList>
                      </div>
                      
                      <TabsContent value="grid">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {regularNews.map(news => (
                            <Card key={news.id} className="overflow-hidden h-full hover:shadow-md transition-shadow">
                              <div className="aspect-[16/9] overflow-hidden">
                                <img 
                                  src={news.imageUrl} 
                                  alt={news.title}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                              
                              <CardContent className="p-5">
                                <div className="flex flex-wrap items-center gap-2 mb-3">
                                  <Badge className="bg-mineral/90 text-white text-xs">
                                    {news.category}
                                  </Badge>
                                  
                                  <div className="flex items-center text-gray-500 text-xs">
                                    <Calendar size={12} className="mr-1" />
                                    <span>
                                      {new Date(news.date).toLocaleDateString('fr-FR', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                      })}
                                    </span>
                                  </div>
                                </div>
                                
                                <h3 className="text-lg font-semibold text-mineral mb-2 line-clamp-2">
                                  <Link to={`/actu-promoteur/${news.id}`} className="hover:text-sage transition-colors">
                                    {news.title}
                                  </Link>
                                </h3>
                                
                                <Link 
                                  to={`/promoteurs/${news.promoterId}`}
                                  className="flex items-center text-gray-500 text-sm hover:text-mineral transition-colors mb-3"
                                >
                                  <Building2 size={14} className="mr-1" />
                                  <span>{news.promoterName}</span>
                                </Link>
                                
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                  {news.excerpt}
                                </p>
                                
                                <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100">
                                  <div className="flex gap-1">
                                    {news.tags.slice(0, 2).map(tag => (
                                      <Badge 
                                        key={tag} 
                                        variant="outline"
                                        className="text-xs bg-cream hover:bg-sage/20 cursor-pointer"
                                        onClick={() => toggleTag(tag)}
                                      >
                                        {tag}
                                      </Badge>
                                    ))}
                                    {news.tags.length > 2 && (
                                      <Badge variant="outline" className="text-xs">
                                        +{news.tags.length - 2}
                                      </Badge>
                                    )}
                                  </div>
                                  
                                  <Link 
                                    to={`/actu-promoteur/${news.id}`}
                                    className="text-mineral hover:text-sage transition-colors text-sm font-medium flex items-center"
                                  >
                                    Lire
                                    <ChevronRight size={16} />
                                  </Link>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="list">
                        <div className="space-y-6">
                          {regularNews.map(news => (
                            <div key={news.id} className="flex flex-col md:flex-row gap-6 p-5 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                              <div className="md:w-1/4 shrink-0">
                                <div className="aspect-[4/3] overflow-hidden rounded-md">
                                  <img 
                                    src={news.imageUrl} 
                                    alt={news.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                  />
                                </div>
                              </div>
                              
                              <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                  <Badge className="bg-mineral/90 text-white">
                                    {news.category}
                                  </Badge>
                                  
                                  <div className="flex items-center text-gray-500 text-sm">
                                    <Calendar size={14} className="mr-1" />
                                    <span>
                                      {new Date(news.date).toLocaleDateString('fr-FR', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                      })}
                                    </span>
                                  </div>
                                  
                                  <Link 
                                    to={`/promoteurs/${news.promoterId}`}
                                    className="flex items-center text-gray-500 text-sm hover:text-mineral transition-colors"
                                  >
                                    <Building2 size={14} className="mr-1" />
                                    <span>{news.promoterName}</span>
                                  </Link>
                                </div>
                                
                                <h3 className="text-xl font-semibold text-mineral mb-2">
                                  <Link to={`/actu-promoteur/${news.id}`} className="hover:text-sage transition-colors">
                                    {news.title}
                                  </Link>
                                </h3>
                                
                                <p className="text-gray-600 mb-4">
                                  {news.excerpt}
                                </p>
                                
                                <div className="flex flex-wrap justify-between items-center">
                                  <div className="flex flex-wrap gap-2">
                                    {news.tags.map(tag => (
                                      <Badge 
                                        key={tag} 
                                        variant="outline"
                                        className="bg-cream hover:bg-sage/20 cursor-pointer"
                                        onClick={() => toggleTag(tag)}
                                      >
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                  
                                  <Link 
                                    to={`/actu-promoteur/${news.id}`}
                                    className="text-mineral hover:text-sage transition-colors font-medium flex items-center ml-auto mt-4 md:mt-0"
                                  >
                                    Lire l'article
                                    <ChevronRight size={16} />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <Search size={48} className="mx-auto text-gray-300 mb-4" />
                  <h3 className="text-xl font-medium text-mineral mb-2">Aucun résultat trouvé</h3>
                  <p className="text-gray-500 mb-6">
                    Aucune actualité ne correspond à vos critères de recherche.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory(null);
                      setSelectedPromoter(null);
                      setSelectedTags([]);
                    }}
                  >
                    Réinitialiser les filtres
                  </Button>
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

export default PromoterNewsPage;
