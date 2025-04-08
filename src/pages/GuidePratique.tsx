
import React from 'react';
import { ChevronRight, Building, PiggyBank, Award, TrendingUp, BookOpen, Landmark, FileCheck, Wallet, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GuidePratique: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 container-custom py-12">
        <div className="text-center mb-12">
          <h1 className="section-title mb-4">Guide Pratique</h1>
          <p className="section-subtitle mx-auto">
            Découvrez tout ce que vous devez savoir pour investir dans l'immobilier neuf en Tunisie
          </p>
        </div>
        
        <div className="mb-16 bg-mineral/5 p-8 rounded-xl border border-mineral/10">
          <h2 className="text-2xl font-semibold text-mineral mb-6">Pourquoi acheter via Direct Promoteur ?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white border-mineral/10">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-full bg-mineral/10 mr-4">
                    <Award className="h-6 w-6 text-mineral" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Sans Intermédiaires</h3>
                    <p className="text-sm text-gray-600">
                      Achetez directement auprès des promoteurs immobiliers pour éviter les frais d'agence et les commissions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-mineral/10">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-full bg-mineral/10 mr-4">
                    <PiggyBank className="h-6 w-6 text-mineral" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Meilleurs Prix</h3>
                    <p className="text-sm text-gray-600">
                      Bénéficiez des meilleurs tarifs en achetant en direct et profitez des offres exclusives des promoteurs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-mineral/10">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-full bg-mineral/10 mr-4">
                    <TrendingUp className="h-6 w-6 text-mineral" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Investissement Sûr</h3>
                    <p className="text-sm text-gray-600">
                      L'immobilier neuf constitue un placement sécurisé avec un potentiel de plus-value intéressant.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-mineral mb-6">Étapes pour acheter un bien immobilier neuf</h2>
          
          <div className="relative">
            <div className="hidden md:block absolute top-0 bottom-0 left-[42px] w-1 bg-mineral/20"></div>
            
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex items-center justify-center w-[85px]">
                  <div className="flex items-center justify-center w-[85px] h-[85px] rounded-full bg-mineral text-white text-xl font-bold">1</div>
                </div>
                <div className="md:ml-8 mt-4 md:mt-0">
                  <h3 className="text-xl font-semibold mb-2">Définissez votre projet immobilier</h3>
                  <p className="text-gray-600 mb-4">
                    Déterminez votre budget, la localisation souhaitée, le type de bien (appartement, villa, commerce), et la superficie adaptée à vos besoins.
                  </p>
                  <div className="bg-cream p-4 rounded-md">
                    <p className="text-sm text-mineral italic">
                      "Prenez le temps de lister vos critères indispensables et vos préférences secondaires pour affiner votre recherche."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex items-center justify-center w-[85px]">
                  <div className="flex items-center justify-center w-[85px] h-[85px] rounded-full bg-mineral text-white text-xl font-bold">2</div>
                </div>
                <div className="md:ml-8 mt-4 md:mt-0">
                  <h3 className="text-xl font-semibold mb-2">Explorez les projets disponibles</h3>
                  <p className="text-gray-600 mb-4">
                    Naviguez à travers notre plateforme pour découvrir les projets immobiliers qui correspondent à vos critères. Utilisez notre carte interactive pour visualiser les emplacements.
                  </p>
                  <div className="bg-cream p-4 rounded-md">
                    <p className="text-sm text-mineral italic">
                      "Consultez les dates de livraison des projets pour anticiper votre planning d'acquisition."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex items-center justify-center w-[85px]">
                  <div className="flex items-center justify-center w-[85px] h-[85px] rounded-full bg-mineral text-white text-xl font-bold">3</div>
                </div>
                <div className="md:ml-8 mt-4 md:mt-0">
                  <h3 className="text-xl font-semibold mb-2">Contactez les promoteurs</h3>
                  <p className="text-gray-600 mb-4">
                    Prenez directement contact avec les promoteurs pour obtenir des informations complémentaires, planifier des visites ou recevoir des brochures détaillées.
                  </p>
                  <div className="bg-cream p-4 rounded-md">
                    <p className="text-sm text-mineral italic">
                      "N'hésitez pas à poser toutes vos questions techniques concernant les matériaux, finitions et options disponibles."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex items-center justify-center w-[85px]">
                  <div className="flex items-center justify-center w-[85px] h-[85px] rounded-full bg-mineral text-white text-xl font-bold">4</div>
                </div>
                <div className="md:ml-8 mt-4 md:mt-0">
                  <h3 className="text-xl font-semibold mb-2">Financez votre acquisition</h3>
                  <p className="text-gray-600 mb-4">
                    Étudiez les différentes options de financement disponibles, comparez les offres bancaires et préparez votre dossier de prêt immobilier.
                  </p>
                  <div className="bg-cream p-4 rounded-md">
                    <p className="text-sm text-mineral italic">
                      "Anticiper la préparation de votre financement vous permettra de saisir rapidement les meilleures opportunités."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex items-center justify-center w-[85px]">
                  <div className="flex items-center justify-center w-[85px] h-[85px] rounded-full bg-mineral text-white text-xl font-bold">5</div>
                </div>
                <div className="md:ml-8 mt-4 md:mt-0">
                  <h3 className="text-xl font-semibold mb-2">Signez et suivez votre projet</h3>
                  <p className="text-gray-600 mb-4">
                    Finalisez l'achat par la signature du contrat de réservation, puis suivez l'avancement de la construction jusqu'à la livraison de votre bien.
                  </p>
                  <div className="bg-cream p-4 rounded-md">
                    <p className="text-sm text-mineral italic">
                      "Demandez un calendrier détaillé des paiements et des étapes de construction pour mieux planifier votre projet."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-mineral mb-6">Les avantages de l'immobilier neuf en Tunisie</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  <Building className="h-5 w-5 mr-2 text-mineral" />
                  Qualité de construction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Les projets neufs bénéficient des dernières normes de construction et offrent des garanties contre les vices cachés.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  <Landmark className="h-5 w-5 mr-2 text-mineral" />
                  Fiscalité avantageuse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Profitez d'avantages fiscaux spécifiques à l'achat dans le neuf, notamment des réductions de frais d'enregistrement.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  <FileCheck className="h-5 w-5 mr-2 text-mineral" />
                  Personnalisation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Possibilité de personnaliser votre bien selon vos goûts et besoins spécifiques avant la livraison.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  <Wallet className="h-5 w-5 mr-2 text-mineral" />
                  Paiement échelonné
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Les promoteurs proposent généralement des paiements échelonnés selon l'avancement des travaux, facilitant votre investissement.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  <Users className="h-5 w-5 mr-2 text-mineral" />
                  Réseau de professionnels
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Accédez à notre réseau de professionnels qualifiés pour vous accompagner dans toutes les étapes de votre projet.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  <BookOpen className="h-5 w-5 mr-2 text-mineral" />
                  Transparence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Notre plateforme garantit la transparence des informations sur les projets et les promoteurs pour une décision éclairée.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="bg-mineral text-white p-8 rounded-xl mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-4">Besoin d'accompagnement personnalisé ?</h2>
            <p className="max-w-2xl mx-auto">
              Notre équipe d'experts est à votre disposition pour vous guider dans votre projet d'investissement immobilier en Tunisie.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Link to="/contact">
              <Button className="bg-white text-mineral hover:bg-cream transition-colors">
                Contactez nos conseillers
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-mineral mb-6">Professionnels de l'immobilier</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-600">
            Découvrez notre réseau de professionnels qualifiés qui peuvent vous accompagner tout au long de votre projet immobilier.
          </p>
          
          <Link to="/professionnels">
            <Button variant="outline" className="border-mineral text-mineral hover:bg-mineral hover:text-white transition-colors">
              Consulter l'annuaire des professionnels
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GuidePratique;
