import React from 'react';
import { Input } from '@/components/ui/input';
import { Search, Bell } from 'lucide-react';
import Logo from '@/components/Logo';
import BannerCarousel from '@/components/BannerCarousel';
import CategoryList from '@/components/CategoryList';
import ProductList from '@/components/ProductList';
import { products } from '@/data/sampleData';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';

const Home = () => {
  const navigate = useNavigate();
  const { setSearchQuery } = useCart();
  const { t } = useLanguage();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim()) {
      navigate('/search');
    }
  };

  const handleSearchFocus = () => {
    navigate('/search');
  };

  // Filtrar productos con descuento
  const discountedProducts = products.filter(product => product.discount);

  // Filtrar productos nuevos
  const newProducts = products.filter(product => product.isNew);

  // Productos mejor valorados
  const topRatedProducts = [...products]
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 6);

  return (
    <div className="pb-16 animate-fade-in">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 flex items-center justify-between">
        <Logo size="small" />
        <div className="flex items-center space-x-4">
          <LanguageSelector />
          <Bell size={24} className="text-gray-600" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          <Input
            type="search"
            placeholder={t('home.searchPlaceholder')}
            className="pl-10 pr-4 py-6 rounded-full bg-gray-100 border-gray-200"
            onChange={handleSearchChange}
            onFocus={handleSearchFocus}
          />
        </div>
      </div>

      {/* Banners */}
      <div className="px-4 mb-4">
        <BannerCarousel />
      </div>

      {/* Categories */}
      <CategoryList />

      {/* Discounted Products */}
      <ProductList
        title={t('home.offers')}
        products={discountedProducts}
        showSeeAll
        onSeeAllClick={() => navigate('/offers')}
      />

      {/* New Products */}
      <ProductList
        title={t('home.new')}
        products={newProducts}
        showSeeAll
        onSeeAllClick={() => navigate('/new')}
      />

      {/* Top Rated Products */}
      <ProductList
        title={t('home.popular')}
        products={topRatedProducts}
        showSeeAll
        onSeeAllClick={() => navigate('/popular')}
      />
    </div>
  );
};

export default Home;
