
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-mineral text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and brief description */}
          <div className="mb-6 md:mb-0">
            <Logo variant="white" />
            <p className="mt-4 text-white/80 text-sm">
              DirectPromoteur.tn, votre plateforme dédiée à la promotion immobilière en Tunisie.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61561010999349" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sage transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/directpromoteur.tn/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sage transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sage transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/channel/UCb1cgFpuZ_pPzvBCObjPTFw" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sage transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://x.com/DirectPromoteur" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sage transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-sage">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-sage transition-colors">Accueil</Link>
              </li>
              <li>
                <Link to="/projets" className="text-white/80 hover:text-sage transition-colors">Projets</Link>
              </li>
              <li>
                <Link to="/promoteurs" className="text-white/80 hover:text-sage transition-colors">Promoteurs</Link>
              </li>
              <li>
                <Link to="/actu-promoteur" className="text-white/80 hover:text-sage transition-colors">Actu-Promoteur</Link>
              </li>
              <li>
                <Link to="/carte" className="text-white/80 hover:text-sage transition-colors">Carte interactive</Link>
              </li>
              <li>
                <Link to="/guide-pratique" className="text-white/80 hover:text-sage transition-colors">Guide pratique</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-sage transition-colors">Contactez-nous</Link>
              </li>
            </ul>
          </div>
          
          {/* Legal information */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-sage">Informations légales</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/mentions-legales" className="text-white/80 hover:text-sage transition-colors">Mentions légales</Link>
              </li>
              <li>
                <Link to="/confidentialite" className="text-white/80 hover:text-sage transition-colors">Politique de confidentialité</Link>
              </li>
              <li>
                <Link to="/conditions" className="text-white/80 hover:text-sage transition-colors">Conditions générales d'utilisation</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact information */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-sage">Contactez-nous</h3>
            <address className="not-italic">
              <p className="text-white/80 mb-2">
                Rue Omar Ibnou Abdelaziz, Sousse, Tunisie
              </p>
              <p className="text-white/80 mb-2">
                <a href="tel:+21655606303" className="hover:text-sage transition-colors">+216 55 606 303</a>
              </p>
              <p className="text-white/80">
                <a href="mailto:contact@directpromoteur.tn" className="hover:text-sage transition-colors">contact@directpromoteur.tn</a>
              </p>
            </address>
          </div>
        </div>
        
        <hr className="my-8 border-white/20" />
        
        <div className="text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} DirectPromoteur.tn. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
