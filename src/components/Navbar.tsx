
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Logo from './Logo';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { t, language } = useLanguage();

  const toggleDropdown = (menu: string) => {
    if (openDropdown === menu) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(menu);
    }
  };

  const navItems = [
    {
      title: t('Projets'),
      dropdown: true,
      items: [
        { name: t('Remise des clés 2026'), href: '/projets/2026' },
        { name: t('Remise des clés 2025'), href: '/projets/2025' },
        { name: t('Remise des clés immédiate'), href: '/projets/immediate' },
        { name: t('Projets vendus'), href: '/projets/vendus' },
        { name: t('Tous les projets'), href: '/projets' }
      ]
    },
    {
      title: t('Promoteurs'),
      dropdown: true,
      items: [
        { name: t('Promoteurs populaires'), href: '/promoteurs/populaires' },
        { name: t('Tous les promoteurs'), href: '/promoteurs' }
      ]
    },
    {
      title: t('Propriétés'),
      dropdown: true,
      items: [
        { name: t('Habitations'), href: '/proprietes/habitations' },
        { name: t('Commerciales'), href: '/proprietes/commerciales' },
        { name: t('Estivales'), href: '/proprietes/estivales' },
        { name: t('Garages & parking'), href: '/proprietes/garages' },
        { name: t('Locaux mixtes'), href: '/proprietes/mixtes' }
      ]
    },
    {
      title: t('Professionnels'),
      dropdown: true,
      items: [
        { name: t('Par catégorie'), href: '/professionnels' },
        { name: t('Recherche avancée'), href: '/professionnels/recherche' },
        { name: t('Ajouter votre entreprise'), href: '/professionnels/inscription' }
      ]
    },
    { title: t('Actu Promoteur'), href: '/actu-promoteur' },
    { title: t('Guide pratique'), href: '/guide-pratique' },
    { title: t('Contact'), href: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="mr-8">
              <Logo />
            </Link>
            
            <div className="hidden lg:flex space-x-6" dir={language === 'ar' ? 'rtl' : 'ltr'}>
              {navItems.map((item) => (
                item.dropdown ? (
                  <div key={item.title} className="relative group">
                    <button 
                      className="flex items-center text-mineral hover:text-sage transition-colors focus:outline-none"
                      onClick={() => toggleDropdown(item.title)}
                    >
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {openDropdown === item.title && (
                      <div className={`absolute ${language === 'ar' ? 'right-0' : 'left-0'} mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10`}>
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-mineral hover:bg-cream transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.title}
                    to={item.href as string}
                    className="text-mineral hover:text-sage transition-colors"
                  >
                    {item.title}
                  </Link>
                )
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <LanguageToggle />
            <Button asChild variant="outline" className="border-mineral text-mineral hover:bg-mineral/5">
              <Link to="/contact">{t('Contactez-nous')}</Link>
            </Button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-mineral p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white py-4 px-6 shadow-lg" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.title}>
                {item.dropdown ? (
                  <div>
                    <button
                      className="flex items-center text-mineral hover:text-sage transition-colors focus:outline-none w-full justify-between"
                      onClick={() => toggleDropdown(item.title)}
                    >
                      {item.title}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${openDropdown === item.title ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {openDropdown === item.title && (
                      <div className="mt-2 ml-4 space-y-2">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block py-1 text-sm text-mineral hover:text-sage transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href as string}
                    className="block text-mineral hover:text-sage transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="pt-4">
              <Button asChild className="w-full bg-mineral text-white hover:bg-mineral/90">
                <Link to="/contact" onClick={() => setIsOpen(false)}>{t('Contactez-nous')}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
