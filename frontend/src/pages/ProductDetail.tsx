import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ChevronLeft, Star, Plus, Minus, Heart, Truck } from 'lucide-react';
import { products } from '@/data/sampleData';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const { t } = useLanguage();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-gray-500">{t('productDetail.notFound')}</p>
        <button
          className="text-heycarro-blue mt-2"
          onClick={() => navigate('/home')}
        >
          {t('productDetail.backToHome')}
        </button>
      </div>
    );
  }

  // Calcular precio con descuento si existe
  const finalPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(prev => prev + 1);
    } else {
      toast({
        title: t('productDetail.stockLimited'),
        description: t('productDetail.stockLimitMessage'),
      });
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    const unit = quantity > 1 ? t('productDetail.units') : t('productDetail.unit');
    toast({
      title: t('productDetail.productAdded'),
      description: t('productDetail.productAddedMessage', {
        name: product.name,
        quantity: quantity.toString(),
        unit
      }),
    });
  };

  return (
    <div className="flex flex-col h-full pb-20 animate-fade-in">
      {/* Header */}
      <div className="bg-white p-4 flex items-center justify-between sticky top-0 z-10">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft size={24} className="text-gray-500" />
        </button>
        <h1 className="text-lg font-medium font-poppins">
          {t('productDetail.pageTitle')}
        </h1>
        <div className="flex items-center space-x-4">
          <LanguageSelector />
          <button>
            <Heart size={24} className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* Product Image */}
      <div className="relative bg-gray-50 p-4 flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-60 object-contain"
        />

        {product.discount && (
          <div className="absolute top-4 right-4 bg-heycarro-orange text-white text-sm font-bold px-3 py-1 rounded-full">
            -{product.discount}%
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 bg-white flex-1">
        <div className="flex items-center space-x-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map(star => (
              <Star
                key={star}
                size={16}
                className={`${
                  star <= Math.round(product.rating || 0)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({Math.floor((product.rating || 0) * 10)} {t('productDetail.reviews')})
          </span>
        </div>

        <h1 className="text-xl font-medium mt-2">{product.name}</h1>

        <div className="mt-3 flex items-end space-x-2">
          <span className="text-2xl font-bold">{finalPrice.toFixed(2)}€</span>
          {product.discount && (
            <span className="text-gray-400 line-through mb-0.5">
              {product.price.toFixed(2)}€
            </span>
          )}
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-medium mb-2">
            {t('productDetail.description')}
          </h2>
          <p className="text-gray-600">{product.description}</p>
        </div>

        <div className="mt-4 flex items-center space-x-2 text-sm text-gray-600">
          <Truck size={16} className="text-heycarro-blue" />
          <span>{t('productDetail.estimatedDelivery')}</span>
        </div>

        <div className="mt-4 py-3 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center border rounded-lg">
              <button
                className="px-3 py-2 text-gray-600"
                onClick={decreaseQuantity}
              >
                <Minus size={18} />
              </button>
              <span className="px-4 py-2 text-center min-w-[40px]">
                {quantity}
              </span>
              <button
                className="px-3 py-2 text-gray-600"
                onClick={increaseQuantity}
              >
                <Plus size={18} />
              </button>
            </div>

            <div className="text-sm text-right">
              <div className="text-gray-600">
                {t('productDetail.available')}
              </div>
              <div className="text-heycarro-blue">
                {product.stock} {t('productDetail.units')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Add to Cart Button */}
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t p-4 flex justify-center max-w-md mx-auto">
        <Button
          className="w-full bg-heycarro-blue hover:bg-heycarro-orange text-white"
          size="lg"
          onClick={handleAddToCart}
        >
          {t('productDetail.addToCart')} • {(finalPrice * quantity).toFixed(2)}€
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
