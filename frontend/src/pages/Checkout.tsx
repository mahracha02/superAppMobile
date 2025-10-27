import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CreditCard, Banknote, ChevronLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { paymentMethods } from '@/data/sampleData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, cartTotal, clearCart, addOrder, userData } = useCart();
  const { toast } = useToast();
  const [language, setLanguage] = useState('ar');

  const [formData, setFormData] = useState({
    name: userData?.name || '',
    phone: userData?.phone || '',
    address: userData?.addresses?.[0] || '',
    notes: '',
    paymentMethod: 'card' as 'card' | 'cash',
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
  };

  const translations = {
    ar: {
      title: 'إتمام الشراء',
      contactInfo: 'معلومات الاتصال',
      fullName: 'الاسم الكامل*',
      phone: 'رقم الهاتف*',
      deliveryAddress: 'عنوان التوصيل',
      fullAddress: 'العنوان الكامل*',
      additionalNotes: 'ملاحظات إضافية',
      notesPlaceholder: 'تعليمات التوصيل، الطابق، إلخ.',
      paymentMethod: 'طريقة الدفع',
      creditCard: 'بطاقة ائتمان/خصم',
      cashOnDelivery: 'الدفع عند الاستلام',
      orderSummary: 'ملخص الطلب',
      products: 'المنتجات',
      shipping: 'الشحن',
      free: 'مجاني',
      total: 'الإجمالي',
      processOrder: 'إتمام الشراء',
      processing: 'جاري المعالجة...',
      formError: 'خطأ في النموذج',
      formErrorDescription: 'يرجى إكمال جميع الحقول المطلوبة',
      orderSuccess: 'تم تقديم الطلب بنجاح!',
      orderSuccessDescription: 'تم تأكيد طلبك',
    },
    en: {
      title: 'Checkout',
      contactInfo: 'Contact Information',
      fullName: 'Full Name*',
      phone: 'Phone*',
      deliveryAddress: 'Delivery Address',
      fullAddress: 'Full Address*',
      additionalNotes: 'Additional Notes',
      notesPlaceholder: 'Delivery instructions, floor, etc.',
      paymentMethod: 'Payment Method',
      creditCard: 'Credit/Debit Card',
      cashOnDelivery: 'Cash on Delivery',
      orderSummary: 'Order Summary',
      products: 'Products',
      shipping: 'Shipping',
      free: 'Free',
      total: 'Total',
      processOrder: 'Complete Purchase',
      processing: 'Processing...',
      formError: 'Form Error',
      formErrorDescription: 'Please complete all required fields',
      orderSuccess: 'Order Placed Successfully!',
      orderSuccessDescription: 'Your order has been confirmed',
    },
    fr: {
      title: 'Finaliser la commande',
      contactInfo: 'Informations de contact',
      fullName: 'Nom complet*',
      phone: 'Téléphone*',
      deliveryAddress: 'Adresse de livraison',
      fullAddress: 'Adresse complète*',
      additionalNotes: 'Notes supplémentaires',
      notesPlaceholder: 'Instructions de livraison, étage, etc.',
      paymentMethod: 'Méthode de paiement',
      creditCard: 'Carte de crédit/débit',
      cashOnDelivery: 'Paiement à la livraison',
      orderSummary: 'Résumé de la commande',
      products: 'Produits',
      shipping: 'Livraison',
      free: 'Gratuit',
      total: 'Total',
      processOrder: 'Finaliser la commande',
      processing: 'Traitement en cours...',
      formError: 'Erreur de formulaire',
      formErrorDescription: 'Veuillez remplir tous les champs obligatoires',
      orderSuccess: 'Commande passée avec succès!',
      orderSuccessDescription: 'Votre commande a été confirmée',
    },
    es: {
      title: 'Finalizar compra',
      contactInfo: 'Datos de contacto',
      fullName: 'Nombre completo*',
      phone: 'Teléfono*',
      deliveryAddress: 'Dirección de entrega',
      fullAddress: 'Dirección completa*',
      additionalNotes: 'Notas adicionales',
      notesPlaceholder: 'Instrucciones para la entrega, piso, etc.',
      paymentMethod: 'Método de pago',
      creditCard: 'Tarjeta de crédito/débito',
      cashOnDelivery: 'Pago contra entrega',
      orderSummary: 'Resumen del pedido',
      products: 'Productos',
      shipping: 'Envío',
      free: 'Gratis',
      total: 'Total',
      processOrder: 'Finalizar compra',
      processing: 'Procesando...',
      formError: 'Error en el formulario',
      formErrorDescription: 'Por favor completa todos los campos obligatorios',
      orderSuccess: '¡Pedido realizado con éxito!',
      orderSuccessDescription: 'Tu pedido ha sido confirmado',
    },
  };

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación simple
    if (!formData.name || !formData.phone || !formData.address) {
      toast({
        variant: 'destructive',
        title: translations[language].formError,
        description: translations[language].formErrorDescription,
      });
      return;
    }

    setIsProcessing(true);

    // Simulamos procesamiento del pedido
    setTimeout(() => {
      // Crear nuevo pedido
      const newOrder = {
        id: `ORD-${Date.now()}`,
        items: [...cart],
        total: cartTotal,
        date: new Date(),
        address: formData.address,
        status: 'Confirmado' as const,
        paymentMethod:
          formData.paymentMethod === 'card' ? 'tarjeta' : 'contra-entrega',
      };

      // Añadir al historial de pedidos
      addOrder(newOrder);

      // Limpiar carrito
      clearCart();

      // Mostrar confirmación
      toast({
        title: translations[language].orderSuccess,
        description: translations[language].orderSuccessDescription,
      });

      // Redirigir a la página de confirmación
      navigate(`/order-status/${newOrder.id}`);

      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="pb-16 animate-fade-in">
      {/* Header */}
      <div className="bg-white p-4 flex items-center justify-between border-b">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="mr-3">
            <ChevronLeft size={24} className="text-gray-500" />
          </button>
          <h1 className="text-lg font-medium font-poppins">
            {translations[language].title}
          </h1>
        </div>
        <Select value={language} onValueChange={handleLanguageChange}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ar">العربية</SelectItem>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="fr">Français</SelectItem>
            <SelectItem value="es">Español</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <form onSubmit={handleSubmit} className="p-4 space-y-6">
        {/* Datos de contacto */}
        <div>
          <h2 className="text-lg font-medium mb-3">
            {translations[language].contactInfo}
          </h2>
          <div className="space-y-3">
            <div>
              <Label htmlFor="name">{translations[language].fullName}</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">{translations[language].phone}</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Dirección de entrega */}
        <div>
          <h2 className="text-lg font-medium mb-3">
            {translations[language].deliveryAddress}
          </h2>
          <div className="space-y-3">
            <div>
              <Label htmlFor="address">
                {translations[language].fullAddress}
              </Label>
              <Textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="resize-none"
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="notes">
                {translations[language].additionalNotes}
              </Label>
              <Textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder={translations[language].notesPlaceholder}
                className="resize-none"
                rows={2}
              />
            </div>
          </div>
        </div>

        {/* Método de pago */}
        <div>
          <h2 className="text-lg font-medium mb-3">
            {translations[language].paymentMethod}
          </h2>
          <RadioGroup
            defaultValue={formData.paymentMethod}
            onValueChange={value =>
              setFormData(prev => ({
                ...prev,
                paymentMethod: value as 'card' | 'cash',
              }))
            }
          >
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3 border rounded-md p-3">
                <RadioGroupItem value="card" id="card" />
                <Label
                  htmlFor="card"
                  className="flex items-center cursor-pointer"
                >
                  <CreditCard size={20} className="mr-2 text-heycarro-blue" />
                  <span>{translations[language].creditCard}</span>
                </Label>
              </div>
              <div className="flex items-center space-x-3 border rounded-md p-3">
                <RadioGroupItem value="cash" id="cash" />
                <Label
                  htmlFor="cash"
                  className="flex items-center cursor-pointer"
                >
                  <Banknote size={20} className="mr-2 text-heycarro-orange" />
                  <span>{translations[language].cashOnDelivery}</span>
                </Label>
              </div>
            </div>
          </RadioGroup>
        </div>

        {/* Resumen del pedido */}
        <div>
          <h2 className="text-lg font-medium mb-3">
            {translations[language].orderSummary}
          </h2>
          <div className="bg-gray-50 rounded-md p-3">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  {translations[language].products} ({cart.length})
                </span>
                <span>{cartTotal.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  {translations[language].shipping}
                </span>
                <span>{translations[language].free}</span>
              </div>
              <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between font-bold">
                <span>{translations[language].total}</span>
                <span className="text-heycarro-blue">
                  {cartTotal.toFixed(2)}€
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Botón de finalizar compra */}
        <Button
          type="submit"
          className="w-full bg-heycarro-blue hover:bg-heycarro-orange text-white"
          size="lg"
          disabled={isProcessing}
        >
          {isProcessing
            ? translations[language].processing
            : translations[language].processOrder}
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
