import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { getBanners } from '@/data/sampleData';
import { useLanguage } from '@/context/LanguageContext';

const BannerCarousel = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  
  // Get banners for current language
  const banners = getBanners(language);

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {banners.map(banner => (
          <CarouselItem key={banner.id}>
            <div
              className="relative h-48 rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              onClick={() => navigate(banner.link)}
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white font-bold text-2xl mb-2 drop-shadow-lg">
                    {banner.title}
                  </h3>
                  <p className="text-white/95 text-sm font-medium drop-shadow-md">
                    {banner.subtitle}
                  </p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-xs font-semibold">
                      {t('banner.viewMore')} →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 bg-white/80 hover:bg-white text-gray-800 border-0 shadow-lg" />
      <CarouselNext className="right-4 bg-white/80 hover:bg-white text-gray-800 border-0 shadow-lg" />
    </Carousel>
  );
};

export default BannerCarousel;
