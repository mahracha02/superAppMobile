export const categories = [
  {
    id: 'frutas-y-verduras',
    name: 'Frutas y Verduras',
    icon: 'Apple',
    description: 'Productos frescos de temporada',
    image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400',
  },
  {
    id: 'carnes-y-pescados',
    name: 'Carnes y Pescados',
    icon: 'Sparkles',
    description: 'Carnes frescas y pescados del día',
    image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=400',
  },
  {
    id: 'lacteos-y-huevos',
    name: 'Lácteos y Huevos',
    icon: 'Flag',
    description: 'Leche, quesos, yogures y huevos',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400',
  },
  {
    id: 'panaderia-y-pasteleria',
    name: 'Panadería y Pastelería',
    icon: 'Home',
    description: 'Pan fresco y dulces artesanales',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400',
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    icon: 'Coffee',
    description: 'Refrescos, aguas, vinos y bebidas',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400',
  },
  {
    id: 'limpieza',
    name: 'Limpieza',
    icon: 'Brush',
    description: 'Productos de limpieza para el hogar',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400',
  },
];

export const products = [
  // FRUTAS Y VERDURAS
  {
    id: '1',
    name: 'Tomates Cherry',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=400',
    description: 'Tomates cherry dulces y jugosos. Perfectos para ensaladas. 500g.',
    category: 'frutas-y-verduras',
    stock: 45,
    discount: 15,
    rating: 4.7,
    brand: 'Del Huerto',
    origin: 'España',
    nutritionalInfo: {
      calories: 18,
      protein: 0.9,
      carbs: 3.9,
      fat: 0.2,
      fiber: 1.2
    }
  },
  {
    id: '2',
    name: 'Plátanos',
    price: 1.89,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400',
    description: 'Plátanos maduros de Canarias. Ricos en potasio. 1kg.',
    category: 'frutas-y-verduras',
    stock: 80,
    rating: 4.5,
    brand: 'Canarias Premium',
    origin: 'Islas Canarias',
    nutritionalInfo: {
      calories: 89,
      protein: 1.1,
      carbs: 22.8,
      fat: 0.3,
      fiber: 2.6
    }
  },
  {
    id: '3',
    name: 'Lechuga Iceberg',
    price: 1.25,
    image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400',
    description: 'Lechuga iceberg fresca y crujiente. Ideal para ensaladas. 1 pieza.',
    category: 'frutas-y-verduras',
    stock: 35,
    isNew: true,
    rating: 4.3,
    brand: 'Verduras Frescas',
    origin: 'Murcia',
    nutritionalInfo: {
      calories: 14,
      protein: 0.9,
      carbs: 2.9,
      fat: 0.1,
      fiber: 1.2
    }
  },
  {
    id: '4',
    name: 'Zanahorias',
    price: 0.99,
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400',
    description: 'Zanahorias frescas y dulces. Ricas en vitamina A. 1kg.',
    category: 'frutas-y-verduras',
    stock: 60,
    rating: 4.6,
    brand: 'Campo Verde',
    origin: 'Valencia',
    nutritionalInfo: {
      calories: 41,
      protein: 0.9,
      carbs: 9.6,
      fat: 0.2,
      fiber: 2.8
    }
  },
  {
    id: '5',
    name: 'Aguacates',
    price: 3.95,
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400',
    description: 'Aguacates Hass maduros. Perfectos para guacamole. 3 piezas.',
    category: 'frutas-y-verduras',
    stock: 25,
    discount: 20,
    rating: 4.8,
    brand: 'Tropical Select',
    origin: 'Perú',
    nutritionalInfo: {
      calories: 160,
      protein: 2,
      carbs: 8.5,
      fat: 14.7,
      fiber: 6.7
    }
  },
  {
    id: '6',
    name: 'Fresas',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400',
    description: 'Fresas dulces y aromáticas de temporada. 500g.',
    category: 'frutas-y-verduras',
    stock: 30,
    isNew: true,
    rating: 4.9,
    brand: 'Berries Premium',
    origin: 'Huelva',
    nutritionalInfo: {
      calories: 32,
      protein: 0.7,
      carbs: 7.7,
      fat: 0.3,
      fiber: 2
    }
  },

  // CARNES Y PESCADOS
  {
    id: '7',
    name: 'Pechuga de Pollo',
    price: 6.95,
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400',
    description: 'Pechuga de pollo fresca sin piel. Perfecta para plancha. 500g.',
    category: 'carnes-y-pescados',
    stock: 40,
    rating: 4.7,
    brand: 'Pollo del Campo',
    origin: 'España',
    nutritionalInfo: {
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6,
      fiber: 0
    }
  },
  {
    id: '8',
    name: 'Salmón Noruego',
    price: 12.95,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400',
    description: 'Filete de salmón fresco de Noruega. Rico en Omega-3. 400g.',
    category: 'carnes-y-pescados',
    stock: 20,
    discount: 10,
    rating: 4.8,
    brand: 'Nordic Fish',
    origin: 'Noruega',
    nutritionalInfo: {
      calories: 208,
      protein: 20,
      carbs: 0,
      fat: 13,
      fiber: 0
    }
  },
  {
    id: '9',
    name: 'Ternera Picada',
    price: 8.49,
    image: 'https://plus.unsplash.com/premium_photo-1669986145776-22292fc25252?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774',
    description: 'Carne picada de ternera fresca. Ideal para hamburguesas. 500g.',
    category: 'carnes-y-pescados',
    stock: 30,
    rating: 4.6,
    brand: 'Carne Premium',
    origin: 'Castilla y León',
    nutritionalInfo: {
      calories: 250,
      protein: 26,
      carbs: 0,
      fat: 15,
      fiber: 0
    }
  },
  {
    id: '10',
    name: 'Merluza',
    price: 9.95,
    image: 'https://plus.unsplash.com/premium_photo-1756988925815-120c47a933d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740',
    description: 'Filetes de merluza fresca sin espinas. Pescado blanco. 600g.',
    category: 'carnes-y-pescados',
    stock: 25,
    rating: 4.5,
    brand: 'Pescados del Norte',
    origin: 'Galicia',
    nutritionalInfo: {
      calories: 90,
      protein: 17,
      carbs: 0,
      fat: 2,
      fiber: 0
    }
  },

  // LÁCTEOS Y HUEVOS
  {
    id: '11',
    name: 'Leche Entera',
    price: 1.19,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400',
    description: 'Leche entera UHT de vacas de pastoreo. 1 litro.',
    category: 'lacteos-y-huevos',
    stock: 100,
    rating: 4.4,
    brand: 'Lácteos del Valle',
    origin: 'Asturias',
    nutritionalInfo: {
      calories: 42,
      protein: 3.4,
      carbs: 5,
      fat: 1,
      fiber: 0
    }
  },
  {
    id: '12',
    name: 'Yogur Griego Natural',
    price: 2.89,
    image: 'https://images.unsplash.com/photo-1589828910786-1ca6da0c7682?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=928',
    description: 'Yogur griego cremoso natural sin azúcar añadido. Pack 4x125g.',
    category: 'lacteos-y-huevos',
    stock: 60,
    discount: 15,
    rating: 4.7,
    brand: 'Griego Auténtico',
    origin: 'Grecia',
    nutritionalInfo: {
      calories: 59,
      protein: 10,
      carbs: 3.6,
      fat: 0.4,
      fiber: 0
    }
  },
  {
    id: '13',
    name: 'Queso Manchego',
    price: 8.95,
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400',
    description: 'Queso manchego semicurado DOP. Sabor intenso. 250g.',
    category: 'lacteos-y-huevos',
    stock: 35,
    rating: 4.9,
    brand: 'Quesos La Mancha',
    origin: 'Castilla-La Mancha',
    nutritionalInfo: {
      calories: 376,
      protein: 25,
      carbs: 1.3,
      fat: 30,
      fiber: 0
    }
  },
  {
    id: '14',
    name: 'Huevos Camperos',
    price: 2.75,
    image: 'https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=400',
    description: 'Huevos de gallinas camperas. Tamaño L. Docena.',
    category: 'lacteos-y-huevos',
    stock: 80,
    isNew: true,
    rating: 4.8,
    brand: 'Granja Feliz',
    origin: 'Navarra',
    nutritionalInfo: {
      calories: 155,
      protein: 13,
      carbs: 1.1,
      fat: 11,
      fiber: 0
    }
  },
  {
    id: '15',
    name: 'Mantequilla',
    price: 1.99,
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400',
    description: 'Mantequilla sin sal de nata fresca. 250g.',
    category: 'lacteos-y-huevos',
    stock: 45,
    rating: 4.5,
    brand: 'Mantequillas Real',
    origin: 'Cantabria',
    nutritionalInfo: {
      calories: 717,
      protein: 0.9,
      carbs: 0.1,
      fat: 81,
      fiber: 0
    }
  },

  // PANADERÍA Y PASTELERÍA
  {
    id: '16',
    name: 'Pan de Molde Integral',
    price: 1.89,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400',
    description: 'Pan de molde integral con semillas. Alto en fibra. 750g.',
    category: 'panaderia-y-pasteleria',
    stock: 40,
    rating: 4.3,
    brand: 'Panadería Artesana',
    origin: 'España',
    nutritionalInfo: {
      calories: 247,
      protein: 13,
      carbs: 41,
      fat: 4.2,
      fiber: 7
    }
  },
  {
    id: '17',
    name: 'Croissants',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1681072368184-a5a906887cf2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774',
    description: 'Croissants de mantequilla recién horneados. Pack de 6.',
    category: 'panaderia-y-pasteleria',
    stock: 25,
    isNew: true,
    rating: 4.6,
    brand: 'Bollería Francesa',
    origin: 'España',
    nutritionalInfo: {
      calories: 406,
      protein: 8.2,
      carbs: 45,
      fat: 21,
      fiber: 2.6
    }
  },
  {
    id: '18',
    name: 'Magdalenas',
    price: 1.95,
    image: 'https://images.unsplash.com/photo-1593199970393-10f0f82e2e47?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFnZGFsZW5hc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
    description: 'Magdalenas esponjosas caseras con limón. Pack de 8.',
    category: 'panaderia-y-pasteleria',
    stock: 30,
    discount: 25,
    rating: 4.4,
    brand: 'Dulces Tradicionales',
    origin: 'España',
    nutritionalInfo: {
      calories: 186,
      protein: 3.1,
      carbs: 23,
      fat: 9.1,
      fiber: 0.8
    }
  },

  // BEBIDAS
  {
    id: '19',
    name: 'Agua Mineral',
    price: 0.89,
    image: 'https://images.unsplash.com/photo-1741518516096-e97558f07693?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740',
    description: 'Agua mineral natural de manantial. 1.5 litros.',
    category: 'bebidas',
    stock: 150,
    rating: 4.2,
    brand: 'Manantial Puro',
    origin: 'Pirineos',
    nutritionalInfo: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0
    }
  },
  {
    id: '20',
    name: 'Zumo de Naranja',
    price: 2.25,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400',
    description: 'Zumo de naranja natural exprimida. Sin azúcar añadido. 1L.',
    category: 'bebidas',
    stock: 70,
    rating: 4.6,
    brand: 'Cítricos Valencia',
    origin: 'Valencia',
    nutritionalInfo: {
      calories: 45,
      protein: 0.7,
      carbs: 10.4,
      fat: 0.2,
      fiber: 0.5
    }
  },
  {
    id: '21',
    name: 'Schweppes Limón',
    price: 1.75,
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400',
    description: 'Refresco de limón clásico. Botella de vidrio. 500ml.',
    category: 'bebidas',
    stock: 90,
    discount: 10,
    rating: 4.5,
    brand: 'Schweppes',
    origin: 'España',
    nutritionalInfo: {
      calories: 42,
      protein: 0,
      carbs: 10.6,
      fat: 0,
      fiber: 0
    }
  },

  // LIMPIEZA
  {
    id: '24',
    name: 'Detergente Lavadora',
    price: 8.95,
    image: 'https://images.unsplash.com/photo-1624372635310-01d078c05dd9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=928',
    description: 'Detergente líquido concentrado para lavadora. 40 lavados. 2L.',
    category: 'limpieza',
    stock: 50,
    discount: 20,
    rating: 4.4,
    brand: 'LimpiaMax',
    origin: 'España',
    features: ['Concentrado', 'Anti-manchas', 'Ropa de color']
  },
  {
    id: '25',
    name: 'Lavavajillas',
    price: 2.89,
    image: 'https://plus.unsplash.com/premium_photo-1664372899205-7cccbe1ad0b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=776',
    description: 'Líquido lavavajillas ultra desengrasante. Aroma limón. 750ml.',
    category: 'limpieza',
    stock: 75,
    rating: 4.3,
    brand: 'VajiClean',
    origin: 'España',
    features: ['Ultra desengrasante', 'Aroma limón', 'Biodegradable']
  },
  {
    id: '26',
    name: 'Papel Higiénico',
    price: 3.95,
    image: 'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740',
    description: 'Papel higiénico triple capa extra suave. Pack 12 rollos.',
    category: 'limpieza',
    stock: 40,
    rating: 4.5,
    brand: 'SuavePlus',
    origin: 'España',
    features: ['Triple capa', 'Extra suave', '12 rollos']
  },
  {
    id: '27',
    name: 'Limpiador Multiusos',
    price: 1.99,
    image: 'https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740',
    description: 'Limpiador multiusos desinfectante. Elimina 99.9% bacterias. 1L.',
    category: 'limpieza',
    stock: 65,
    isNew: true,
    rating: 4.6,
    brand: 'TodoLimpio',
    origin: 'España',
    features: ['Desinfectante', 'Elimina 99.9% bacterias', 'Multiusos']
  },

  // PRODUCTOS ADICIONALES
  {
    id: '28',
    name: 'Aceite de Oliva Virgen Extra',
    price: 12.95,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400',
    description: 'Aceite de oliva virgen extra primera prensada en frío. 1L.',
    category: 'frutas-y-verduras',
    stock: 30,
    discount: 15,
    rating: 4.9,
    brand: 'Olivar Premium',
    origin: 'Jaén',
    nutritionalInfo: {
      calories: 884,
      protein: 0,
      carbs: 0,
      fat: 100,
      fiber: 0
    }
  },
  {
    id: '29',
    name: 'Pasta Fusilli',
    price: 1.49,
    image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=400',
    description: 'Pasta fusilli de trigo duro. Tiempo de cocción 8-10 min. 500g.',
    category: 'panaderia-y-pasteleria',
    stock: 85,
    rating: 4.2,
    brand: 'Pasta Italiana',
    origin: 'Italia',
    nutritionalInfo: {
      calories: 371,
      protein: 13,
      carbs: 74,
      fat: 1.5,
      fiber: 3
    }
  },
  {
    id: '30',
    name: 'Atún en Aceite',
    price: 3.25,
    image: 'https://plus.unsplash.com/premium_photo-1695304030270-ec988d7b267e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774',
    description: 'Atún en aceite de oliva. Rico en proteínas. Pack 3 latas 80g.',
    category: 'carnes-y-pescados',
    stock: 55,
    rating: 4.4,
    brand: 'Conservas del Mar',
    origin: 'España',
    nutritionalInfo: {
      calories: 198,
      protein: 25,
      carbs: 0,
      fat: 10,
      fiber: 0
    }
  },
  {
    id: '31',
    name: 'Café Molido',
    price: 4.89,
    image: 'https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=898',
    description: 'Café molido natural tueste medio. Aroma intenso. 500g.',
    category: 'bebidas',
    stock: 45,
    discount: 12,
    rating: 4.7,
    brand: 'Café Premium',
    origin: 'Colombia',
    features: ['Tueste medio', 'Aroma intenso', '100% arábica']
  },
  {
    id: '32',
    name: 'Miel Natural',
    price: 6.95,
    image: 'https://images.unsplash.com/photo-1694457331480-b709d8496b1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1pZWwlMjBuYXR1cmFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
    description: 'Miel natural de flores silvestres. Pura y sin procesar. 500g.',
    category: 'panaderia-y-pasteleria',
    stock: 25,
    isNew: true,
    rating: 4.8,
    brand: 'Mieles de España',
    origin: 'Sierra de Gredos',
    nutritionalInfo: {
      calories: 304,
      protein: 0.3,
      carbs: 82.4,
      fat: 0,
      fiber: 0.2
    }
  }
];

// Banner translations for all supported languages
export const bannerTranslations = {
  ar: [
    {
      id: '1',
      title: 'عروض الأسبوع!',
      subtitle: 'وفر حتى 30% على المنتجات المختارة',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=400&fit=crop&crop=center',
      link: '/categories',
      backgroundColor: '#FF6B35',
      textColor: '#FFFFFF'
    },
    {
      id: '2',
      title: 'منتجات طازجة',
      subtitle: 'فواكه وخضروات موسمية',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1200&h=400&fit=crop&crop=center',
      link: '/category/frutas-y-verduras',
      backgroundColor: '#2E7D32',
      textColor: '#FFFFFF'
    },
    {
      id: '3',
      title: 'توصيل مجاني',
      subtitle: 'للطلبات أكثر من 25€',
      image: 'https://images.unsplash.com/photo-1584824388178-1defc3484ce3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774',
      link: '/home',
      backgroundColor: '#1976D2',
      textColor: '#FFFFFF'
    },
    {
      id: '4',
      title: 'لحوم مميزة',
      subtitle: 'أفضل جودة بأفضل سعر',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1200&h=400&fit=crop&crop=center',
      link: '/category/carnes-y-pescados',
      backgroundColor: '#8B0000',
      textColor: '#FFFFFF'
    },
    {
      id: '5',
      title: 'مخبز حرفي',
      subtitle: 'خبز طازج يُخبز يومياً',
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=1200&h=400&fit=crop&crop=center',
      link: '/category/panaderia-y-pasteleria',
      backgroundColor: '#D2691E',
      textColor: '#FFFFFF'
    },
    {
      id: '6',
      title: 'منتجات عضوية',
      subtitle: 'اعتني بصحتك والبيئة',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&h=400&fit=crop&crop=center',
      link: '/category/frutas-y-verduras',
      backgroundColor: '#4CAF50',
      textColor: '#FFFFFF'
    }
  ],
  en: [
    {
      id: '1',
      title: 'Weekly Deals!',
      subtitle: 'Save up to 30% on selected products',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=400&fit=crop&crop=center',
      link: '/categories',
      backgroundColor: '#FF6B35',
      textColor: '#FFFFFF'
    },
    {
      id: '2',
      title: 'Fresh Products',
      subtitle: 'Seasonal fruits and vegetables',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1200&h=400&fit=crop&crop=center',
      link: '/category/frutas-y-verduras',
      backgroundColor: '#2E7D32',
      textColor: '#FFFFFF'
    },
    {
      id: '3',
      title: 'Free Delivery',
      subtitle: 'On orders over €25',
      image: 'https://images.unsplash.com/photo-1584824388178-1defc3484ce3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774',
      link: '/home',
      backgroundColor: '#1976D2',
      textColor: '#FFFFFF'
    },
    {
      id: '4',
      title: 'Premium Meat',
      subtitle: 'Best quality at the best price',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1200&h=400&fit=crop&crop=center',
      link: '/category/carnes-y-pescados',
      backgroundColor: '#8B0000',
      textColor: '#FFFFFF'
    },
    {
      id: '5',
      title: 'Artisan Bakery',
      subtitle: 'Fresh bread baked daily',
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=1200&h=400&fit=crop&crop=center',
      link: '/category/panaderia-y-pasteleria',
      backgroundColor: '#D2691E',
      textColor: '#FFFFFF'
    },
    {
      id: '6',
      title: 'Organic Products',
      subtitle: 'Take care of your health and the environment',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&h=400&fit=crop&crop=center',
      link: '/category/frutas-y-verduras',
      backgroundColor: '#4CAF50',
      textColor: '#FFFFFF'
    }
  ],
  fr: [
    {
      id: '1',
      title: 'Offres de la Semaine!',
      subtitle: 'Économisez jusqu\'à 30% sur les produits sélectionnés',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=400&fit=crop&crop=center',
      link: '/categories',
      backgroundColor: '#FF6B35',
      textColor: '#FFFFFF'
    },
    {
      id: '2',
      title: 'Produits Frais',
      subtitle: 'Fruits et légumes de saison',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1200&h=400&fit=crop&crop=center',
      link: '/category/frutas-y-verduras',
      backgroundColor: '#2E7D32',
      textColor: '#FFFFFF'
    },
    {
      id: '3',
      title: 'Livraison Gratuite',
      subtitle: 'Sur les commandes de plus de 25€',
      image: 'https://images.unsplash.com/photo-1584824388178-1defc3484ce3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774',
      link: '/home',
      backgroundColor: '#1976D2',
      textColor: '#FFFFFF'
    },
    {
      id: '4',
      title: 'Viandes Premium',
      subtitle: 'La meilleure qualité au meilleur prix',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1200&h=400&fit=crop&crop=center',
      link: '/category/carnes-y-pescados',
      backgroundColor: '#8B0000',
      textColor: '#FFFFFF'
    },
    {
      id: '5',
      title: 'Boulangerie Artisanale',
      subtitle: 'Pain frais cuit chaque jour',
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=1200&h=400&fit=crop&crop=center',
      link: '/category/panaderia-y-pasteleria',
      backgroundColor: '#D2691E',
      textColor: '#FFFFFF'
    },
    {
      id: '6',
      title: 'Produits Biologiques',
      subtitle: 'Prenez soin de votre santé et de l\'environnement',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&h=400&fit=crop&crop=center',
      link: '/category/frutas-y-verduras',
      backgroundColor: '#4CAF50',
      textColor: '#FFFFFF'
    }
  ],
  es: [
    {
      id: '1',
      title: '¡Ofertas de la Semana!',
      subtitle: 'Ahorra hasta un 30% en productos seleccionados',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=400&fit=crop&crop=center',
      link: '/categories',
      backgroundColor: '#FF6B35',
      textColor: '#FFFFFF'
    },
    {
      id: '2',
      title: 'Productos Frescos',
      subtitle: 'Frutas y verduras de temporada',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1200&h=400&fit=crop&crop=center',
      link: '/category/frutas-y-verduras',
      backgroundColor: '#2E7D32',
      textColor: '#FFFFFF'
    },
    {
      id: '3',
      title: 'Entrega Gratuita',
      subtitle: 'En pedidos superiores a 25€',
      image: 'https://images.unsplash.com/photo-1584824388178-1defc3484ce3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774',
      link: '/home',
      backgroundColor: '#1976D2',
      textColor: '#FFFFFF'
    },
    {
      id: '4',
      title: 'Carnes Premium',
      subtitle: 'La mejor calidad al mejor precio',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1200&h=400&fit=crop&crop=center',
      link: '/category/carnes-y-pescados',
      backgroundColor: '#8B0000',
      textColor: '#FFFFFF'
    },
    {
      id: '5',
      title: 'Panadería Artesanal',
      subtitle: 'Pan recién horneado cada día',
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=1200&h=400&fit=crop&crop=center',
      link: '/category/panaderia-y-pasteleria',
      backgroundColor: '#D2691E',
      textColor: '#FFFFFF'
    },
    {
      id: '6',
      title: 'Productos Ecológicos',
      subtitle: 'Cuida tu salud y el medio ambiente',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&h=400&fit=crop&crop=center',
      link: '/category/frutas-y-verduras',
      backgroundColor: '#4CAF50',
      textColor: '#FFFFFF'
    }
  ]
};

// Helper function to get banners for current language
export const getBanners = (language: 'ar' | 'en' | 'fr' | 'es' = 'es') => {
  return bannerTranslations[language] || bannerTranslations.es;
};

// Default export for backward compatibility
export const banners = bannerTranslations.es;

// Promociones especiales y ofertas flash
export const specialOffers = [
  {
    id: 'flash-1',
    title: 'Oferta Flash',
    description: '50% descuento en frutas',
    validUntil: '2025-10-30T23:59:59',
    products: ['1', '5', '6'], // IDs de productos en oferta
    discountPercent: 50
  },
  {
    id: 'combo-1',
    title: 'Combo Desayuno',
    description: 'Llévate todo por 9.99€',
    products: ['16', '15', '32'], // Pan + Mantequilla + Miel
    comboPrice: 9.99,
    originalPrice: 11.83
  },
  {
    id: 'weekly-1',
    title: 'Oferta Semanal',
    description: '3x2 en productos de limpieza',
    products: ['24', '25', '27'],
    offerType: '3x2'
  }
];

// Información nutricional detallada para algunos productos
export const nutritionalCategories = [
  {
    name: 'Sin Gluten',
    icon: '🌾',
    description: 'Productos libres de gluten',
    productIds: ['19', '20', '28', '32'] // Agua, zumo, aceite, miel
  },
  {
    name: 'Vegano',
    icon: '🌱',
    description: 'Productos 100% vegetales',
    productIds: ['1', '2', '3', '4', '5', '6', '19', '20', '28', '29', '32']
  },
  {
    name: 'Ecológico',
    icon: '🍃',
    description: 'Productos de agricultura ecológica',
    productIds: ['6', '14', '28', '32'] // Fresas, huevos camperos, aceite, miel
  },
  {
    name: 'Proteína',
    icon: '💪',
    description: 'Alto contenido en proteínas',
    productIds: ['7', '8', '9', '10', '12', '13', '14', '30'] // Carnes, pescados, lácteos
  }
];

// Horarios de entrega
export const deliverySlots = [
  { time: '09:00-11:00', available: true, price: 3.99 },
  { time: '11:00-13:00', available: true, price: 3.99 },
  { time: '13:00-15:00', available: false, price: 3.99 },
  { time: '15:00-17:00', available: true, price: 3.99 },
  { time: '17:00-19:00', available: true, price: 4.99 },
  { time: '19:00-21:00', available: true, price: 4.99 }
];

// Zonas de entrega
export const deliveryZones = [
  {
    name: 'Centro',
    postcodes: ['28001', '28002', '28003', '28004', '28005'],
    deliveryFee: 2.99,
    freeDeliveryThreshold: 25,
    deliveryTime: '30-60 min'
  },
  {
    name: 'Norte',
    postcodes: ['28006', '28010', '28016', '28020', '28034'],
    deliveryFee: 3.99,
    freeDeliveryThreshold: 30,
    deliveryTime: '45-75 min'
  },
  {
    name: 'Sur',
    postcodes: ['28025', '28026', '28041', '28042', '28045'],
    deliveryFee: 3.99,
    freeDeliveryThreshold: 30,
    deliveryTime: '45-75 min'
  },
  {
    name: 'Extrarradio',
    postcodes: ['28100', '28200', '28300'],
    deliveryFee: 5.99,
    freeDeliveryThreshold: 40,
    deliveryTime: '60-90 min'
  }
];

export const paymentMethods = [
  {
    id: 'card',
    name: 'Tarjeta de crédito/débito',
    icon: 'CreditCard',
    description: 'Visa, Mastercard, American Express',
    fee: 0,
    processingTime: 'Inmediato'
  },
  {
    id: 'paypal',
    name: 'PayPal',
    icon: 'Wallet',
    description: 'Pago seguro con PayPal',
    fee: 0,
    processingTime: 'Inmediato'
  },
  {
    id: 'apple-pay',
    name: 'Apple Pay',
    icon: 'Smartphone',
    description: 'Pago rápido con Touch ID',
    fee: 0,
    processingTime: 'Inmediato'
  },
  {
    id: 'google-pay',
    name: 'Google Pay',
    icon: 'Smartphone',
    description: 'Pago con tu cuenta de Google',
    fee: 0,
    processingTime: 'Inmediato'
  },
  {
    id: 'cash',
    name: 'Pago contra entrega',
    icon: 'Banknote',
    description: 'Paga en efectivo al recibir',
    fee: 1.99,
    processingTime: 'En entrega'
  },
  {
    id: 'bizum',
    name: 'Bizum',
    icon: 'Smartphone',
    description: 'Pago móvil instantáneo',
    fee: 0,
    processingTime: 'Inmediato'
  }
];

// Información de la tienda
export const storeInfo = {
  name: 'Holasalam Supermarket',
  description: 'Tu supermercado online de confianza',
  phone: '+34 900 123 456',
  email: 'contacto@holasalam.com',
  address: 'Calle Mayor 123, 28001 Madrid',
  hours: {
    monday: '08:00-22:00',
    tuesday: '08:00-22:00',
    wednesday: '08:00-22:00',
    thursday: '08:00-22:00',
    friday: '08:00-23:00',
    saturday: '09:00-23:00',
    sunday: '10:00-21:00'
  },
  socialMedia: {
    facebook: 'https://facebook.com/holasalam',
    instagram: 'https://instagram.com/holasalam',
    twitter: 'https://twitter.com/holasalam'
  }
};

// Reviews de clientes
export const customerReviews = [
  {
    id: '1',
    productId: '1',
    customerName: 'María García',
    rating: 5,
    comment: 'Tomates muy frescos y sabrosos. Llegaron en perfecto estado.',
    date: '2025-10-25',
    verified: true
  },
  {
    id: '2',
    productId: '8',
    customerName: 'José Martínez',
    rating: 5,
    comment: 'Salmón de excelente calidad. Muy fresco y bien empaquetado.',
    date: '2025-10-24',
    verified: true
  },
  {
    id: '3',
    productId: '13',
    customerName: 'Ana López',
    rating: 5,
    comment: 'El mejor queso manchego que he probado. Sabor auténtico.',
    date: '2025-10-23',
    verified: true
  },
  {
    id: '4',
    productId: '22',
    customerName: 'Carlos Ruiz',
    rating: 4,
    comment: 'Buen vino para el precio. Perfecto para cenas.',
    date: '2025-10-22',
    verified: true
  }
];

// Recetas sugeridas
export const suggestedRecipes = [
  {
    id: '1',
    name: 'Ensalada Mediterránea',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400',
    ingredients: ['1', '3', '28'], // Tomates cherry, lechuga, aceite
    difficulty: 'Fácil',
    time: '15 min',
    servings: 4
  },
  {
    id: '2',
    name: 'Salmón a la Plancha',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400',
    ingredients: ['8', '28'], // Salmón, aceite
    difficulty: 'Media',
    time: '20 min',
    servings: 2
  },
  {
    id: '3',
    name: 'Tostadas con Aguacate',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400',
    ingredients: ['16', '5'], // Pan integral, aguacates
    difficulty: 'Fácil',
    time: '10 min',
    servings: 2
  }
];
