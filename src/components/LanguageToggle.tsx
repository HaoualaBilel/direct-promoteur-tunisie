
import React from 'react';
import { Globe } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'ar' : 'fr');
  };

  return (
    <Toggle 
      aria-label="Toggle language" 
      pressed={language === 'ar'} 
      onPressedChange={toggleLanguage}
      className="flex items-center gap-1 px-2 h-9"
    >
      <Globe className="h-4 w-4" />
      <span>{language === 'fr' ? 'العربية' : 'Français'}</span>
    </Toggle>
  );
};

export default LanguageToggle;
