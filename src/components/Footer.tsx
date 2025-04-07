
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Send, TiktokIcon, Twitter, Youtube } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from './Logo';

const Footer = () => {
  const year = new Date().getFullYear();

  // Custom TikTok icon since it's not in Lucide by default
  const TikTok = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
    </svg>
  );
  
  return (
    <footer className="bg-mineral text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-300 mb-6">
              Votre partenaire de confiance pour trouver le projet immobilier idéal en Tunisie.
              Des promoteurs de qualité, des projets haut standing, et un accompagnement personnalisé.
            </p>
          </div>

          {/* Column 2 - Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/projets" className="text-gray-300 hover:text-white transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link to="/promoteurs" className="text-gray-300 hover:text-white transition-colors">
                  Promoteurs
                </Link>
              </li>
              <li>
                <Link to="/actu-promoteur" className="text-gray-300 hover:text-white transition-colors">
                  Actu Promoteur
                </Link>
              </li>
              <li>
                <Link to="/carte" className="text-gray-300 hover:text-white transition-colors">
                  Carte interactive
                </Link>
              </li>
              <li>
                <Link to="/guide-pratique" className="text-gray-300 hover:text-white transition-colors">
                  Guide pratique
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contactez-nous
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">
                <span className="block">Rue Omar Ibnou Abdelaziz,</span>
                <span className="block">Sousse, Tunisia</span>
              </li>
              <li>
                <a href="tel:+21655606303" className="text-gray-300 hover:text-white transition-colors">
                  +216 55 606 303
                </a>
              </li>
              <li>
                <a href="mailto:contact@directpromoteur.tn" className="text-gray-300 hover:text-white transition-colors">
                  contact@directpromoteur.tn
                </a>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold mt-8 mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61561010999349" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sage transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/directpromoteur.tn/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sage transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sage transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.tiktok.com/@directpromoteur.tn" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sage transition-colors">
                <TikTok />
              </a>
              <a href="https://x.com/DirectPromoteur" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sage transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.youtube.com/channel/UCb1cgFpuZ_pPzvBCObjPTFw" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sage transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Inscrivez-vous à notre newsletter pour recevoir les dernières actualités et offres.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Votre email" 
                className="bg-mineral/90 border-gray-600 focus:border-sage text-white" 
              />
              <Button variant="secondary" size="icon">
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {year} DirectPromoteur.tn - Tous droits réservés
            </div>
            <div className="flex space-x-4 text-sm">
              <Link to="/mentions-legales" className="text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link to="/confidentialite" className="text-gray-400 hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/conditions" className="text-gray-400 hover:text-white transition-colors">
                CGU
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
