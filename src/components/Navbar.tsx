
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    if (openDropdown === menu) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(menu);
    }
  };

  const navItems = [
    {
      title: 'Projets',
      dropdown: true,
      items: [
        { name: 'Remise des clés 2026', href: '/projets/2026' },
        { name: 'Remise des clés 2025', href: '/projets/2025' },
        { name: 'Remise des clés immédiate', href: '/projets/immediate' },
        { name: 'Projets vendus', href: '/projets/vendus' },
        { name: 'Tous les projets', href: '/projets' }
      ]
    },
    {
      title: 'Promoteurs',
      dropdown: true,
      items: [
        { name: 'Promoteurs populaires', href: '/promoteurs/populaires' },
        { name: 'Tous les promoteurs', href: '/promoteurs' }
      ]
    },
    {
      title: 'Propriétés',
      dropdown: true,
      items: [
        { name: 'Habitations', href: '/proprietes/habitations' },
        { name: 'Commerciales', href: '/proprietes/commerciales' },
        { name: 'Estivales', href: '/proprietes/estivales' }
      ]
    },
    { title: 'Actu Promoteur', href: '/actu-promoteur' },
    { title: 'Guide pratique', href: '/guide-pratique' },
    { title: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="mr-8">
              <Logo />
            </Link>
            
            <div className="hidden lg:flex space-x-6">
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
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
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
            <Button asChild variant="outline" className="border-mineral text-mineral hover:bg-mineral/5">
              <Link to="/contact">Contactez-nous</Link>
            </Button>
          </div>

          <div className="lg:hidden">
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
        <div className="lg:hidden bg-white py-4 px-6 shadow-lg">
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
                <Link to="/contact" onClick={() => setIsOpen(false)}>Contactez-nous</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
