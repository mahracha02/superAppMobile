import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface LanguageSelectorProps {
  className?: string;
  width?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  className = '',
  width = 'w-[120px]' 
}) => {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (value: string) => {
    setLanguage(value as 'ar' | 'en' | 'fr' | 'es');
  };

  return (
    <Select value={language} onValueChange={handleLanguageChange}>
      <SelectTrigger className={`${width} ${className}`}>
        <SelectValue placeholder={t('common.selectLanguage')} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ar">العربية</SelectItem>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="fr">Français</SelectItem>
        <SelectItem value="es">Español</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;