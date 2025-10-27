import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

export type SupportedLanguage = 'ar' | 'en' | 'fr' | 'es';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
  t: (key: string, placeholders?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation keys and their values for each language
const translations = {
  ar: {
    // Welcome page
    'welcome.title': 'مرحباً بك في متجرنا',
    'welcome.description': 'متجرك المفضل على الإنترنت. تسوق المنتجات الطازجة واستلمها في منزلك.',
    'welcome.start': 'ابدأ',
    
    // Home page
    'home.searchPlaceholder': 'ماذا تبحث عن اليوم؟',
    'home.offers': 'العروض المميزة',
    'home.new': 'المنتجات الجديدة',
    'home.popular': 'الأكثر شعبية',
    
    // Banner
    'banner.viewMore': 'المزيد',
    
    // Bottom Navigation
    'nav.home': 'الرئيسية',
    'nav.search': 'بحث',
    'nav.categories': 'القائمة',
    'nav.cart': 'العربة',
    'nav.profile': 'الملف الشخصي',
    
    // Common
    'common.selectLanguage': 'اختر اللغة',
    'common.seeAll': 'عرض الكل',
    
    // Cart
    'cart.title': 'سلة التسوق',
    'cart.empty': 'سلة التسوق فارغة',
    'cart.total': 'المجموع',
    'cart.checkout': 'إتمام الشراء',
    'cart.addToCart': 'أضف للسلة',
    'cart.remove': 'حذف',
    'cart.products': 'منتجات',
    'cart.product': 'منتج',
    'cart.clearCart': 'إفراغ السلة',
    'cart.emptyMessage': 'أضف المنتجات لبدء التسوق',
    'cart.exploreProducts': 'استكشف المنتجات',
    'cart.subtotal': 'المجموع الفرعي',
    'cart.shipping': 'الشحن',
    'cart.free': 'مجاني',
    'cart.placeOrder': 'إتمام الطلب',
    
    // Product
    'product.addedToCart': 'تم إضافة المنتج',
    'product.updatedInCart': 'تم تحديث المنتج في السلة',
    'product.removedFromCart': 'تم حذف المنتج',
    
    // Search
    'search.noResults': 'لا توجد نتائج',
    'search.searchResults': 'نتائج البحث',
    'search.resultsFound': 'تم العثور على {count} نتائج لـ "{query}"',
    'search.noResultsFor': 'لم يتم العثور على نتائج لـ "{query}"',
    'search.searchHint': 'ابحث عن المنتجات بالاسم أو الفئة أو الوصف',
    
    // Categories  
    'categories.title': 'الفئات',
    'categories.allCategories': 'جميع الفئات',
    'categories.subtitle': 'اكتشف منتجاتنا حسب الفئة',
    
    // Category names
    'category.frutas-y-verduras': 'الفواكه والخضروات',
    'category.carnes-y-pescados': 'اللحوم والأسماك',
    'category.lacteos-y-huevos': 'منتجات الألبان والبيض',
    'category.panaderia-y-pasteleria': 'المخبوزات والحلويات',
    'category.bebidas': 'المشروبات',
    'category.limpieza': 'منتجات التنظيف',
    
    // Category Detail
    'categoryDetail.notFound': 'الفئة غير موجودة',
    'categoryDetail.backToCategories': 'العودة إلى الفئات',
    'categoryDetail.products': 'منتجات',
    'categoryDetail.sortBy': 'ترتيب حسب:',
    'categoryDetail.emptyState': 'لا توجد منتجات متاحة في هذه الفئة في الوقت الحالي.',
    'categoryDetail.sort.rating': 'التقييم',
    'categoryDetail.sort.priceAsc': 'السعر: من الأقل إلى الأعلى',
    'categoryDetail.sort.priceDesc': 'السعر: من الأعلى إلى الأقل',
    'categoryDetail.sort.name': 'الاسم',
    
    // Product Detail
    'productDetail.notFound': 'المنتج غير موجود',
    'productDetail.backToHome': 'العودة إلى الصفحة الرئيسية',
    'productDetail.pageTitle': 'تفاصيل المنتج',
    'productDetail.stockLimited': 'المخزون محدود',
    'productDetail.stockLimitMessage': 'لا يمكنك إضافة المزيد من وحدات هذا المنتج',
    'productDetail.productAdded': 'تمت إضافة المنتج',
    'productDetail.productAddedMessage': 'تمت إضافة ${name} إلى السلة (${quantity} ${unit})',
    'productDetail.description': 'الوصف',
    'productDetail.estimatedDelivery': 'وقت التوصيل المتوقع: 24-48 ساعة',
    'productDetail.available': 'متوفر',
    'productDetail.units': 'وحدات',
    'productDetail.unit': 'وحدة',
    'productDetail.addToCart': 'إضافة إلى السلة',
    'productDetail.reviews': 'مراجعة',
    
    // Profile
    'profile.userNotFound': 'المستخدم غير موجود',
    'profile.backToHome': 'العودة إلى الصفحة الرئيسية',
    'profile.personalInfo': 'المعلومات الشخصية',
    'profile.name': 'الاسم',
    'profile.phone': 'الهاتف',
    'profile.addresses': 'عناويني',
    'profile.addAddress': 'إضافة',
    'profile.mainAddress': 'الرئيسي',
    'profile.address': 'العنوان ${number}',
    'profile.orders': 'طلباتي',
    'profile.noOrders': 'لا توجد طلبات حديثة',
    'profile.exploreProducts': 'استكشاف المنتجات',
    'profile.logout': 'تسجيل الخروج',
    'profile.sessionClosed': 'تم إغلاق الجلسة',
    'profile.sessionClosedMessage': 'تم تسجيل الخروج بنجاح',
    'profile.status.confirmed': 'مؤكد',
    'profile.status.preparing': 'في التحضير',
    'profile.status.onWay': 'في الطريق',
    'profile.status.delivered': 'تم التوصيل',
  },
  en: {
    // Welcome page
    'welcome.title': 'Welcome to our store',
    'welcome.description': 'Your favorite online supermarket. Shop fresh products and get them delivered to your home.',
    'welcome.start': 'Start',
    
    // Home page
    'home.searchPlaceholder': 'What are you looking for today?',
    'home.offers': 'Featured Offers',
    'home.new': 'New Products',
    'home.popular': 'Most Popular',
    
    // Banner
    'banner.viewMore': 'View More',
    
    // Bottom Navigation
    'nav.home': 'Home',
    'nav.search': 'Search',
    'nav.categories': 'Categories',
    'nav.cart': 'Cart',
    'nav.profile': 'Profile',
    
    // Common
    'common.selectLanguage': 'Select language',
    'common.seeAll': 'See All',
    
    // Cart
    'cart.title': 'Shopping Cart',
    'cart.empty': 'Your cart is empty',
    'cart.total': 'Total',
    'cart.checkout': 'Checkout',
    'cart.addToCart': 'Add to Cart',
    'cart.remove': 'Remove',
    'cart.products': 'products',
    'cart.product': 'product',
    'cart.clearCart': 'Clear Cart',
    'cart.emptyMessage': 'Add products to start shopping',
    'cart.exploreProducts': 'Explore Products',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Shipping',
    'cart.free': 'Free',
    'cart.placeOrder': 'Place Order',
    
    // Product
    'product.addedToCart': 'Product added',
    'product.updatedInCart': 'Product updated in cart',
    'product.removedFromCart': 'Product removed',
    
    // Search
    'search.noResults': 'No results found',
    'search.searchResults': 'Search Results',
    'search.resultsFound': '{count} results found for "{query}"',
    'search.noResultsFor': 'No results found for "{query}"',
    'search.searchHint': 'Search products by name, category or description',
    
    // Categories  
    'categories.title': 'Categories',
    'categories.allCategories': 'All Categories',
    'categories.subtitle': 'Explore our products by category',
    
    // Category names
    'category.frutas-y-verduras': 'Fruits and Vegetables',
    'category.carnes-y-pescados': 'Meat and Fish',
    'category.lacteos-y-huevos': 'Dairy and Eggs',
    'category.panaderia-y-pasteleria': 'Bakery and Pastry',
    'category.bebidas': 'Beverages',
    'category.limpieza': 'Cleaning',
    
    // Category Detail
    'categoryDetail.notFound': 'Category not found',
    'categoryDetail.backToCategories': 'Back to categories',
    'categoryDetail.products': 'products',
    'categoryDetail.sortBy': 'Sort by:',
    'categoryDetail.emptyState': 'No products available in this category at the moment.',
    'categoryDetail.sort.rating': 'Rating',
    'categoryDetail.sort.priceAsc': 'Price: Low to High',
    'categoryDetail.sort.priceDesc': 'Price: High to Low',
    'categoryDetail.sort.name': 'Name',
    
    // Product Detail
    'productDetail.notFound': 'Product not found',
    'productDetail.backToHome': 'Back to home',
    'productDetail.pageTitle': 'Product Detail',
    'productDetail.stockLimited': 'Limited stock',
    'productDetail.stockLimitMessage': 'You cannot add more units of this product',
    'productDetail.productAdded': 'Product added',
    'productDetail.productAddedMessage': '${name} added to cart (${quantity} ${unit})',
    'productDetail.description': 'Description',
    'productDetail.estimatedDelivery': 'Estimated delivery: 24-48h',
    'productDetail.available': 'Available',
    'productDetail.units': 'units',
    'productDetail.unit': 'unit',
    'productDetail.addToCart': 'Add to cart',
    'productDetail.reviews': 'reviews',
    
    // Profile
    'profile.userNotFound': 'User not found',
    'profile.backToHome': 'Back to home',
    'profile.personalInfo': 'Personal Information',
    'profile.name': 'Name',
    'profile.phone': 'Phone',
    'profile.addresses': 'My Addresses',
    'profile.addAddress': 'Add',
    'profile.mainAddress': 'Main',
    'profile.address': 'Address ${number}',
    'profile.orders': 'My Orders',
    'profile.noOrders': 'No recent orders',
    'profile.exploreProducts': 'Explore products',
    'profile.logout': 'Logout',
    'profile.sessionClosed': 'Session closed',
    'profile.sessionClosedMessage': 'You have successfully logged out',
    'profile.status.confirmed': 'Confirmed',
    'profile.status.preparing': 'Preparing',
    'profile.status.onWay': 'On the way',
    'profile.status.delivered': 'Delivered',
  },
  fr: {
    // Welcome page
    'welcome.title': 'Bienvenue dans notre magasin',
    'welcome.description': 'Votre supermarché en ligne préféré. Achetez des produits frais et recevez-les à domicile.',
    'welcome.start': 'Commencer',
    
    // Home page
    'home.searchPlaceholder': "Que cherchez-vous aujourd'hui?",
    'home.offers': 'Offres en vedette',
    'home.new': 'Nouveaux produits',
    'home.popular': 'Les plus populaires',
    
    // Banner
    'banner.viewMore': 'Voir Plus',
    
    // Bottom Navigation
    'nav.home': 'Accueil',
    'nav.search': 'Recherche',
    'nav.categories': 'Catégories',
    'nav.cart': 'Panier',
    'nav.profile': 'Profil',
    
    // Common
    'common.selectLanguage': 'Choisir la langue',
    'common.seeAll': 'Voir tout',
    
    // Cart
    'cart.title': 'Panier',
    'cart.empty': 'Votre panier est vide',
    'cart.total': 'Total',
    'cart.checkout': 'Commander',
    'cart.addToCart': 'Ajouter au panier',
    'cart.remove': 'Supprimer',
    'cart.placeOrder': 'Passer la commande',
    'cart.clearCart': 'Vider le panier',
    'cart.emptyMessage': 'Ajoutez des produits pour commencer vos achats',
    'cart.exploreProducts': 'Explorer les produits',
    'cart.products': 'produits',
    
    // Product
    'product.addedToCart': 'Produit ajouté',
    'product.updatedInCart': 'Produit mis à jour dans le panier',
    'product.removedFromCart': 'Produit supprimé',
    
    // Search
    'search.noResults': 'Aucun résultat trouvé',
    'search.searchResults': 'Résultats de recherche',
    'search.resultsFound': '{count} résultats trouvés pour "{query}"',
    'search.noResultsFor': 'Aucun résultat trouvé pour "{query}"',
    'search.searchHint': 'Recherchez des produits par nom, catégorie ou description',
    
    // Categories  
    'categories.title': 'Catégories',
    'categories.allCategories': 'Toutes les catégories',
    'categories.subtitle': 'Découvrez nos produits par catégorie',
    
    // Category names
    'category.frutas-y-verduras': 'Fruits et Légumes',
    'category.carnes-y-pescados': 'Viandes et Poissons',
    'category.lacteos-y-huevos': 'Produits Laitiers et Œufs',
    'category.panaderia-y-pasteleria': 'Boulangerie et Pâtisserie',
    'category.bebidas': 'Boissons',
    'category.limpieza': 'Nettoyage',
    
    // Category Detail
    'categoryDetail.notFound': 'Catégorie non trouvée',
    'categoryDetail.backToCategories': 'Retour aux catégories',
    'categoryDetail.products': 'produits',
    'categoryDetail.sortBy': 'Trier par:',
    'categoryDetail.emptyState': 'Aucun produit disponible dans cette catégorie pour le moment.',
    'categoryDetail.sort.rating': 'Évaluation',
    'categoryDetail.sort.priceAsc': 'Prix: Croissant',
    'categoryDetail.sort.priceDesc': 'Prix: Décroissant',
    'categoryDetail.sort.name': 'Nom',
    
    // Product Detail
    'productDetail.notFound': 'Produit non trouvé',
    'productDetail.backToHome': "Retour à l'accueil",
    'productDetail.pageTitle': 'Détail du produit',
    'productDetail.stockLimited': 'Stock limité',
    'productDetail.stockLimitMessage': "Vous ne pouvez pas ajouter plus d'unités de ce produit",
    'productDetail.productAdded': 'Produit ajouté',
    'productDetail.productAddedMessage': '${name} ajouté au panier (${quantity} ${unit})',
    'productDetail.description': 'Description',
    'productDetail.estimatedDelivery': 'Livraison estimée: 24-48h',
    'productDetail.available': 'Disponible',
    'productDetail.units': 'unités',
    'productDetail.unit': 'unité',
    'productDetail.addToCart': 'Ajouter au panier',
    'productDetail.reviews': 'avis',
    
    // Profile
    'profile.userNotFound': 'Utilisateur non trouvé',
    'profile.backToHome': "Retour à l'accueil",
    'profile.personalInfo': 'Informations personnelles',
    'profile.name': 'Nom',
    'profile.phone': 'Téléphone',
    'profile.addresses': 'Mes adresses',
    'profile.addAddress': 'Ajouter',
    'profile.mainAddress': 'Principal',
    'profile.address': 'Adresse ${number}',
    'profile.orders': 'Mes commandes',
    'profile.noOrders': 'Aucune commande récente',
    'profile.exploreProducts': 'Explorer les produits',
    'profile.logout': 'Déconnexion',
    'profile.sessionClosed': 'Session fermée',
    'profile.sessionClosedMessage': 'Vous vous êtes déconnecté avec succès',
    'profile.status.confirmed': 'Confirmé',
    'profile.status.preparing': 'En préparation',
    'profile.status.onWay': 'En route',
    'profile.status.delivered': 'Livré',
  },
  es: {
    // Welcome page
    'welcome.title': 'Bienvenido a nuestra tienda',
    'welcome.description': 'Tu supermercado online favorito. Compra productos frescos y recíbelos en casa.',
    'welcome.start': 'Empezar',
    
    // Home page
    'home.searchPlaceholder': '¿Qué estás buscando hoy?',
    'home.offers': 'Ofertas destacadas',
    'home.new': 'Novedades',
    'home.popular': 'Los más populares',
    
    // Banner
    'banner.viewMore': 'Ver Más',
    
    // Bottom Navigation
    'nav.home': 'Inicio',
    'nav.search': 'Buscar',
    'nav.categories': 'Categorías',
    'nav.cart': 'Carrito',
    'nav.profile': 'Perfil',
    
    // Common
    'common.selectLanguage': 'Seleccionar idioma',
    'common.seeAll': 'Ver todo',
    
    // Cart
    'cart.title': 'Carrito de compras',
    'cart.empty': 'Tu carrito está vacío',
    'cart.total': 'Total',
    'cart.checkout': 'Finalizar compra',
    'cart.addToCart': 'Añadir al carrito',
    'cart.remove': 'Eliminar',
    'cart.placeOrder': 'Realizar pedido',
    'cart.clearCart': 'Vaciar carrito',
    'cart.emptyMessage': 'Añade productos para empezar tus compras',
    'cart.exploreProducts': 'Explorar productos',
    'cart.products': 'productos',
    
    // Product
    'product.addedToCart': 'Producto añadido',
    'product.updatedInCart': 'Producto actualizado en el carrito',
    'product.removedFromCart': 'Producto eliminado',
    
    // Search
    'search.noResults': 'No se encontraron resultados',
    'search.searchResults': 'Resultados de búsqueda',
    'search.resultsFound': '{count} resultados para "{query}"',
    'search.noResultsFor': 'No se encontraron resultados para "{query}"',
    'search.searchHint': 'Busca productos por nombre, categoría o descripción',
    
    // Categories  
    'categories.title': 'Categorías',
    'categories.allCategories': 'Todas las categorías',
    'categories.subtitle': 'Explora nuestros productos por categoría',
    
    // Category names
    'category.frutas-y-verduras': 'Frutas y Verduras',
    'category.carnes-y-pescados': 'Carnes y Pescados',
    'category.lacteos-y-huevos': 'Lácteos y Huevos',
    'category.panaderia-y-pasteleria': 'Panadería y Pastelería',
    'category.bebidas': 'Bebidas',
    'category.limpieza': 'Limpieza',
    
    // Category Detail
    'categoryDetail.notFound': 'Categoría no encontrada',
    'categoryDetail.backToCategories': 'Volver a categorías',
    'categoryDetail.products': 'productos',
    'categoryDetail.sortBy': 'Ordenar por:',
    'categoryDetail.emptyState': 'No hay productos disponibles en esta categoría en este momento.',
    'categoryDetail.sort.rating': 'Valoración',
    'categoryDetail.sort.priceAsc': 'Precio: menor a mayor',
    'categoryDetail.sort.priceDesc': 'Precio: mayor a menor',
    'categoryDetail.sort.name': 'Nombre',
    
    // Product Detail
    'productDetail.notFound': 'Producto no encontrado',
    'productDetail.backToHome': 'Volver al inicio',
    'productDetail.pageTitle': 'Detalle del producto',
    'productDetail.stockLimited': 'Stock limitado',
    'productDetail.stockLimitMessage': 'No puedes añadir más unidades de este producto',
    'productDetail.productAdded': 'Producto añadido',
    'productDetail.productAddedMessage': '${name} añadido al carrito (${quantity} ${unit})',
    'productDetail.description': 'Descripción',
    'productDetail.estimatedDelivery': 'Entrega estimada: 24-48h',
    'productDetail.available': 'Disponible',
    'productDetail.units': 'unidades',
    'productDetail.unit': 'unidad',
    'productDetail.addToCart': 'Añadir al carrito',
    'productDetail.reviews': 'reseñas',
    
    // Profile
    'profile.userNotFound': 'Usuario no encontrado',
    'profile.backToHome': 'Volver al inicio',
    'profile.personalInfo': 'Información personal',
    'profile.name': 'Nombre',
    'profile.phone': 'Teléfono',
    'profile.addresses': 'Mis direcciones',
    'profile.addAddress': 'Añadir',
    'profile.mainAddress': 'Principal',
    'profile.address': 'Dirección ${number}',
    'profile.orders': 'Mis pedidos',
    'profile.noOrders': 'No tienes pedidos recientes',
    'profile.exploreProducts': 'Explorar productos',
    'profile.logout': 'Cerrar sesión',
    'profile.sessionClosed': 'Sesión cerrada',
    'profile.sessionClosedMessage': 'Has cerrado sesión correctamente',
    'profile.status.confirmed': 'Confirmado',
    'profile.status.preparing': 'En preparación',
    'profile.status.onWay': 'En camino',
    'profile.status.delivered': 'Entregado',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>('en');

  // Load language from localStorage on initialization
  useEffect(() => {
    const savedLanguage = localStorage.getItem('heycarro-language') as SupportedLanguage;
    if (savedLanguage && ['ar', 'en', 'fr', 'es'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  const setLanguage = (newLanguage: SupportedLanguage) => {
    setLanguageState(newLanguage);
    localStorage.setItem('heycarro-language', newLanguage);
  };

  // Translation function
  const t = (key: string, placeholders?: Record<string, string | number>): string => {
    const langTranslations = translations[language];
    let translation = langTranslations[key] || key;
    
    // Replace placeholders if provided
    if (placeholders) {
      Object.entries(placeholders).forEach(([placeholder, value]) => {
        translation = translation.replace(`{${placeholder}}`, String(value));
      });
    }
    
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};