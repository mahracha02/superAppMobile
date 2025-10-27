import { toast } from '@/components/ui/use-toast';
import { useLanguage } from '@/context/LanguageContext';

export const useTranslatedToast = () => {
  const { t } = useLanguage();

  const showToast = (titleKey: string, descriptionKey?: string, productName?: string) => {
    const description = descriptionKey 
      ? `${productName || ''} ${t(descriptionKey)}`.trim()
      : undefined;

    toast({
      title: t(titleKey),
      description,
    });
  };

  return { showToast };
};