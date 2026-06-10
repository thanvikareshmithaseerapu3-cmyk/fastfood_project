import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Trash2, Plus, Minus, ShoppingBag, Percent, Truck, Check, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    cartTotal,
    removeFromCart,
    updateQuantity,
    applyPromo,
    isPromoApplied,
    discountAmount,
    clearCart,
  } = useApp();

  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState(false);
  
  const [orderMethod, setOrderMethod] = useState<'delivery' | 'takeaway'>('delivery');
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
  });
  const [isOrdering, setIsOrdering] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [completedOrderNum, setCompletedOrderNum] = useState('');

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    
    const success = applyPromo(promoInput);
    if (success) {
      setPromoSuccess(true);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try "FAST15"');
      setPromoSuccess(false);
    }
  };

  const pureTotal = cart.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);
  const deliveryFee = orderMethod === 'delivery' && pureTotal < 499 ? 49 : 0;
  const finalPayTotal = cartTotal + deliveryFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    if (orderMethod === 'delivery') {
      if (!deliveryDetails.name || !deliveryDetails.phone || !deliveryDetails.address) {
        alert('Please fill out all required fields for delivery.');
        return;
      }
    }

    setIsOrdering(true);

    // Simulate database / order network call
    setTimeout(() => {
      const orderNum = 'FFC-' + Math.floor(100000 + Math.random() * 900000);
      setCompletedOrderNum(orderNum);
      setIsOrdering(false);
      setOrderCompleted(true);
    }, 1500);
  };

  const getWhatsAppLink = () => {
    const space = '%20';
    const breakLine = '%0A';
    
    let orderDetailsText = `🍔 *FastFood Center - New Order #${completedOrderNum}* ${breakLine}${breakLine}`;
    orderDetailsText += `*Customer Details:*${breakLine}`;
    orderDetailsText += `👤 Name: ${deliveryDetails.name || 'Value Customer'}${breakLine}`;
    orderDetailsText += `📞 Phone: ${deliveryDetails.phone || 'N/A'}${breakLine}`;
    if (orderMethod === 'delivery') {
      orderDetailsText += `📍 Address: ${deliveryDetails.address}${breakLine}`;
    }
    orderDetailsText += `🏷️ Method: ${orderMethod.toUpperCase()}${breakLine}${breakLine}`;
    
    orderDetailsText += `*Selected Items:*${breakLine}`;
    cart.forEach(item => {
      orderDetailsText += `- ${item.quantity}x ${item.menuItem.name} (₹${(item.menuItem.price * item.quantity).toFixed(2)})${breakLine}`;
    });
    
    orderDetailsText += `${breakLine}*Financial Summary:*${breakLine}`;
    orderDetailsText += `Subtotal: ₹${pureTotal.toFixed(2)}${breakLine}`;
    if (isPromoApplied) {
      orderDetailsText += `Promo Code Used: FAST15 (-15% discount)${breakLine}`;
    }
    if (deliveryFee > 0) {
      orderDetailsText += `Delivery Fee: ₹${deliveryFee.toFixed(2)}${breakLine}`;
    }
    orderDetailsText += `*Total Amount To Pay: ₹${finalPayTotal.toFixed(2)}*${breakLine}${breakLine}`;
    
    if (deliveryDetails.notes) {
      orderDetailsText += `📝 *Notes:* ${deliveryDetails.notes}${breakLine}`;
    }
    
    orderDetailsText += `Thank you for choosing FastFood Center!`;
    
    // Using simple WhatsApp URL
    return `https://wa.me/15557893210?text=${orderDetailsText}`;
  };

  const handleCloseSuccessModal = () => {
    setOrderCompleted(false);
    clearCart();
    setIsCartOpen(false);
    // Reset inputs
    setDeliveryDetails({
      name: '',
      phone: '',
      address: '',
      notes: '',
    });
    setPromoInput('');
    setPromoSuccess(false);
  };

  return (
    <>
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
            />

            {/* Sidebar Shell */}
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="pointer-events-auto w-screen max-w-md bg-white dark:bg-zinc-900 border-l border-zinc-100 dark:border-zinc-800 shadow-xl flex flex-col h-full"
              >
                {/* Header */}
                <div className="p-5 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="font-sans font-bold text-lg text-zinc-900 dark:text-white">Your Food Basket</h2>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">{cart.length} unique items selected</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-1 px-2.5 py-2.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition-colors duration-150"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Main Body */}
                <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
                  {cart.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                      <div className="w-20 h-20 rounded-full bg-zinc-50 dark:bg-zinc-800/50 flex items-center justify-center text-zinc-300 dark:text-zinc-600">
                        <ShoppingBag className="w-10 h-10" />
                      </div>
                      <h3 className="font-sans font-bold text-zinc-800 dark:text-zinc-100 text-lg">Your Basket is Empty</h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs">
                        Browse our delicious categories inside the popular section and add juicy burgers, hot pizza or desserts to start your checkout.
                      </p>
                      <button
                        onClick={() => setIsCartOpen(false)}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-6 py-2.5 rounded-xl shadow-md shadow-red-200 dark:shadow-none hover:-translate-y-0.5 transition-all duration-150 cursor-pointer"
                      >
                        Explore Popular Menu
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Cart Items */}
                      <div className="space-y-3">
                        {cart.map((item) => (
                          <div
                            key={item.menuItem.id}
                            className="flex gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/40 rounded-xl border border-zinc-100 dark:border-zinc-800/50"
                          >
                            <img
                              src={item.menuItem.image}
                              alt={item.menuItem.name}
                              referrerPolicy="no-referrer"
                              className="w-16 h-16 rounded-lg object-cover bg-zinc-200 dark:bg-zinc-800 flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0 flex flex-col justify-between">
                              <div className="flex justify-between items-start gap-1">
                                <h4 className="font-sans font-bold text-xs sm:text-sm text-zinc-900 dark:text-white truncate">
                                  {item.menuItem.name}
                                </h4>
                                <button
                                  onClick={() => removeFromCart(item.menuItem.id)}
                                  className="text-zinc-400 hover:text-red-500 p-0.5 rounded transition-all"
                                  title="Delete item"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                                ₹{item.menuItem.price.toFixed(2)} each
                              </p>
                              
                              <div className="flex justify-between items-center mt-1">
                                <div className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 overflow-hidden">
                                  <button
                                    onClick={() => updateQuantity(item.menuItem.id, item.quantity - 1)}
                                    className="p-1 px-2.5 text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                                  >
                                    <Minus className="w-3 h-3" />
                                  </button>
                                  <span className="text-xs font-bold text-zinc-800 dark:text-white font-mono px-1">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => updateQuantity(item.menuItem.id, item.quantity + 1)}
                                    className="p-1 px-2.5 text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                                  >
                                    <Plus className="w-3 h-3" />
                                  </button>
                                </div>
                                <span className="font-mono text-xs sm:text-sm font-bold text-zinc-900 dark:text-yellow-400">
                                  ₹{(item.menuItem.price * item.quantity).toFixed(2)}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Promocode Apply */}
                      <form onSubmit={handleApplyPromo} className="pt-2">
                        <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5 flex justify-between">
                          <span>Promo Code</span>
                          <span className="text-zinc-400 lowercase italic">Use FAST15 for -15%</span>
                        </label>
                        <div className="flex gap-2">
                          <div className="relative flex-1">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
                              <Percent className="w-4 h-4" />
                            </span>
                            <input
                              type="text"
                              value={promoInput}
                              onChange={(e) => setPromoInput(e.target.value)}
                              placeholder="Enter coupon code"
                              disabled={isPromoApplied}
                              className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-brand-red disabled:opacity-50 dark:text-white"
                            />
                          </div>
                          <button
                            type="submit"
                            disabled={isPromoApplied}
                            className="bg-zinc-800 dark:bg-zinc-700 hover:bg-zinc-900 dark:hover:bg-zinc-600 text-white text-xs font-bold px-4 rounded-xl transition-all cursor-pointer disabled:bg-emerald-600 disabled:opacity-100"
                          >
                            {isPromoApplied ? <Check className="w-4 h-4" /> : 'Apply'}
                          </button>
                        </div>
                        {promoError && (
                          <p className="text-xs text-red-500 font-medium mt-1">{promoError}</p>
                        )}
                        {isPromoApplied && (
                          <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1 flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" /> Coupon code applied successfully! (-15%)
                          </p>
                        )}
                      </form>

                      {/* Fulfillment Method Selection */}
                      <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
                        <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                          Fulfillment Method
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setOrderMethod('delivery')}
                            className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                              orderMethod === 'delivery'
                                ? 'border-brand-red bg-brand-red/10 dark:bg-brand-red/25 text-brand-red dark:text-brand-yellow'
                                : 'border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                            }`}
                          >
                            <Truck className="w-4 h-4" />
                            <span className="text-xs font-bold">Courier Delivery</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setOrderMethod('takeaway')}
                            className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                              orderMethod === 'takeaway'
                                ? 'border-red-500 bg-red-50/50 dark:bg-red-950/20 text-red-650 dark:text-red-400'
                                : 'border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                            }`}
                          >
                            <ShoppingBag className="w-4 h-4" />
                            <span className="text-xs font-bold">Counter Pickup</span>
                          </button>
                        </div>
                      </div>

                      {/* Delivery Address Details Form */}
                      <form id="order-form" onSubmit={handlePlaceOrder} className="space-y-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                        <h4 className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">
                          {orderMethod === 'delivery' ? 'Delivery Information' : 'Pickup Credentials'}
                        </h4>
                        
                        <div className="space-y-2.5">
                          <div>
                            <input
                              type="text"
                              required
                              placeholder="Your full name"
                              value={deliveryDetails.name}
                              onChange={(e) => setDeliveryDetails({ ...deliveryDetails, name: e.target.value })}
                              className="w-full px-3 py-2 text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-red-500 dark:text-white"
                            />
                          </div>
                          <div>
                            <input
                              type="tel"
                              required
                              placeholder="Mobile number (e.g. +1 555-0199)"
                              value={deliveryDetails.phone}
                              onChange={(e) => setDeliveryDetails({ ...deliveryDetails, phone: e.target.value })}
                              className="w-full px-3 py-2 text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-red-500 dark:text-white"
                            />
                          </div>
                          {orderMethod === 'delivery' && (
                            <div>
                              <textarea
                                required={orderMethod === 'delivery'}
                                rows={2}
                                placeholder="Complete street address & apartment/suite number"
                                value={deliveryDetails.address}
                                onChange={(e) => setDeliveryDetails({ ...deliveryDetails, address: e.target.value })}
                                className="w-full px-3 py-2 text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-red-500 dark:text-white"
                              />
                            </div>
                          )}
                          <div>
                            <input
                              type="text"
                              placeholder="Special request notes (optional)"
                              value={deliveryDetails.notes}
                              onChange={(e) => setDeliveryDetails({ ...deliveryDetails, notes: e.target.value })}
                              className="w-full px-3 py-2 text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-red-500 dark:text-white"
                            />
                          </div>
                        </div>
                      </form>
                    </>
                  )}
                </div>

                {/* Sticky Checkout Bottom */}
                {cart.length > 0 && (
                  <div className="p-5 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/60 space-y-4">
                    <div className="space-y-1.5 text-sm">
                      <div className="flex justify-between text-zinc-500 dark:text-zinc-400 text-xs">
                        <span>Items Subtotal</span>
                        <span className="font-mono">₹{pureTotal.toFixed(2)}</span>
                      </div>
                      {isPromoApplied && (
                        <div className="flex justify-between text-emerald-600 dark:text-emerald-400 text-xs">
                          <span>Promo Discount (-15%)</span>
                          <span className="font-mono">-₹{discountAmount.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-zinc-500 dark:text-zinc-400 text-xs">
                        <span>Fulfillment Method</span>
                        <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                          {orderMethod === 'delivery' ? 'Delivery Courier' : 'Self Pickup'}
                        </span>
                      </div>
                      {orderMethod === 'delivery' && (
                        <div className="flex justify-between text-zinc-500 dark:text-zinc-400 text-xs">
                          <span>Delivery Fee</span>
                          <span className="font-mono">
                            {deliveryFee > 0 ? `₹${deliveryFee.toFixed(2)}` : 'FREE'}
                          </span>
                        </div>
                      )}
                      
                      <div className="flex justify-between text-zinc-900 dark:text-white font-bold text-base pt-2 border-t border-zinc-200 dark:border-zinc-800">
                        <span>Amount To Pay</span>
                        <span className="font-mono text-red-600 dark:text-yellow-400">₹{finalPayTotal.toFixed(2)}</span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      form="order-form"
                      disabled={isOrdering}
                      className="w-full bg-brand-red hover:bg-[#d62e3a] text-white text-sm font-bold py-3.5 px-4 rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 dark:bg-brand-red dark:hover:bg-[#d62e3a]"
                    >
                      {isOrdering ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing Kitchen Order...
                        </span>
                      ) : (
                        `Place Order - ₹${finalPayTotal.toFixed(2)}`
                      )}
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Order Completed Successful Popup Modal */}
      <AnimatePresence>
        {orderCompleted && (
          <div className="fixed inset-0 z-55 overflow-y-auto flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseSuccessModal}
              className="fixed inset-0 bg-black/70 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 max-w-md w-full relative z-10 text-center shadow-2xl border border-zinc-150 dark:border-zinc-800"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-450 flex items-center justify-center mx-auto mb-5 shadow-inner">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              
              <h3 className="font-sans font-extrabold text-2xl text-zinc-900 dark:text-white mb-2">
                Order Received Sizzling Hot!
              </h3>
              
              <p className="text-sm text-zinc-500 dark:text-zinc-450 mb-4">
                Thank you for choosing FastFood Center. Your delicious treats are already loaded in our ovens!
              </p>

              <div className="bg-zinc-50 dark:bg-zinc-800/60 p-4 rounded-2xl mb-6 text-left space-y-2.5 border border-zinc-100 dark:border-zinc-800">
                <div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-400">
                  <span>Order Reference:</span>
                  <span className="font-mono font-bold text-zinc-800 dark:text-yellow-400">{completedOrderNum}</span>
                </div>
                <div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-400">
                  <span>Fulfillment Style:</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-300 capitalize">{orderMethod}</span>
                </div>
                {orderMethod === 'delivery' && (
                  <div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-400">
                    <span>Est. Delivery Duration:</span>
                    <span className="font-semibold text-zinc-800 dark:text-zinc-300">20 - 30 mins max</span>
                  </div>
                )}
                <div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-400">
                  <span>Total Bill Amount:</span>
                  <span className="font-bold text-red-650 dark:text-red-400">₹{finalPayTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* CTA and WhatsApp Integration */}
              <div className="space-y-3">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-bold py-3 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition-transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.11 1.5 4.967 1.501 5.347.002 9.7-4.347 9.703-9.697.002-2.593-1.007-5.032-2.843-6.868-1.837-1.836-4.279-2.845-6.87-2.847-5.353 0-9.708 4.348-9.71 9.699-.001 1.968.513 3.89 1.488 5.6l-.975 3.563 3.655-.959zm12.39-4.48c-.243-.122-1.439-.71-1.662-.79-.222-.081-.384-.122-.546.122-.162.243-.628.79-.769.95-.141.163-.283.183-.526.062-.243-.122-1.026-.379-1.954-1.206-.721-.643-1.208-1.438-1.349-1.68-.141-.243-.015-.374.106-.495.11-.11.243-.284.364-.426.121-.142.162-.243.243-.406.081-.162.041-.304-.02-.426-.062-.122-.546-1.316-.749-1.8-.197-.474-.397-.41-.546-.418-.141-.008-.304-.01-.466-.01s-.426.061-.649.304c-.222.243-.85.83-.85 2.025s.871 2.35 1.012 2.512c.142.162 1.714 2.617 4.151 3.67.58.25 1.033.4 1.385.513.582.185 1.112.159 1.531.097.467-.069 1.439-.588 1.642-1.156.203-.568.203-1.054.142-1.156-.061-.101-.223-.162-.466-.284z"/>
                  </svg>
                  Finish via WhatsApp Direct
                </a>
                
                <button
                  type="button"
                  onClick={handleCloseSuccessModal}
                  className="w-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-sm font-bold py-2.5 px-4 rounded-xl cursor-pointer transition-colors"
                >
                  Add More Items
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
