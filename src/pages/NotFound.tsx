
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { HomeIcon } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-6 bg-cream">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-mineral mb-4">404</h1>
          <p className="text-xl text-text-dark mb-6">
            Oups ! La page que vous recherchez n'existe pas.
          </p>
          <p className="text-gray-600 mb-8">
            Il semble que vous ayez suivi un lien qui n'est plus actif ou que la page a été déplacée.
          </p>
          
          <Button asChild className="bg-mineral text-white hover:bg-mineral/90 inline-flex items-center gap-2">
            <Link to="/">
              <HomeIcon size={18} />
              Retour à l'accueil
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
