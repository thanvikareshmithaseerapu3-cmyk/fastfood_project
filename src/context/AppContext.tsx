import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, CartItem } from '../types';

interface AppContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  cartTotal: number;
  cartCount: number;
  promoCode: string;
  setPromoCode: (code: string) => void;
  applyPromo: (code: string) => boolean;
  isPromoApplied: boolean;
  discountAmount: number;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('fastfood_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('fastfood_dark');
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem('fastfood_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('fastfood_dark', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const addToCart = (menuItem: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.menuItem.id === menuItem.id);
      if (existing) {
        return prev.map((item) =>
          item.menuItem.id === menuItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { menuItem, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.menuItem.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.menuItem.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setIsPromoApplied(false);
    setPromoCode('');
  };

  const applyPromo = (code: string) => {
    if (code.trim().toUpperCase() === 'FAST15') {
      setIsPromoApplied(true);
      return true;
    }
    return false;
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const pureTotal = cart.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);
  const discountAmount = isPromoApplied ? pureTotal * 0.15 : 0;
  const cartTotal = pureTotal - discountAmount;
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        cartTotal,
        cartCount,
        promoCode,
        setPromoCode,
        applyPromo,
        isPromoApplied,
        discountAmount,
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
