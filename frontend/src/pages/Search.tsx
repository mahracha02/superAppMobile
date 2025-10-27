import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Search as SearchIcon, X } from 'lucide-react';
import { products } from '@/data/sampleData';
import { Product } from '@/context/CartContext';
import ProductCard from '@/components/ProductCard';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import LanguageSelector from '@/components/LanguageSelector';

const Search = () => {
  const { searchQuery, setSearchQuery } = useCart();
  const { t } = useLanguage();
  const [query, setQuery] = useState(searchQuery);
  const [results, setResults] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setQuery(searchQuery);
    if (searchQuery.trim()) {
      searchProducts(searchQuery);
    }
  }, [searchQuery]);

  const searchProducts = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    const filtered = products.filter(
      product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filtered);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setSearchQuery(value);
    searchProducts(value);
  };

  const clearSearch = () => {
    setQuery('');
    setSearchQuery('');
    setResults([]);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="pb-16 animate-fade-in">
      {/* Search Header */}
      <div className="p-4 flex items-center space-x-3 border-b">
        <button onClick={goBack}>
          <X size={24} className="text-gray-500" />
        </button>
        <div className="relative flex-1">
          <SearchIcon
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <Input
            type="search"
            placeholder={t('home.searchPlaceholder')}
            className="pl-10 pr-10 py-5 rounded-full bg-gray-100 border-gray-200"
            value={query}
            onChange={handleInputChange}
            autoFocus
          />
          {query && (
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              onClick={clearSearch}
            >
              <X size={18} />
            </button>
          )}
        </div>
        <LanguageSelector />
      </div>

      {/* Results */}
      <div className="p-4">
        {query && (
          <p className="text-sm text-gray-500 mb-4">
            {results.length > 0
              ? t('search.resultsFound', { count: results.length, query })
              : t('search.noResultsFor', { query })}
          </p>
        )}

        {!query && (
          <div className="text-center py-8">
            <SearchIcon size={48} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">{t('search.searchHint')}</p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          {results.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
