import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../data';
import { useApp } from '../context/AppContext';
import { Search, Flame, Leaf, ShoppingCart, Check, SlidersHorizontal, Eye, X, HelpCircle, Utensils } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MenuItem } from '../types';

export default function Menu() {
  const { addToCart, cart } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [onlyVeg, setOnlyVeg] = useState(false);
  const [onlyPopular, setOnlyPopular] = useState(false);
  
  // Quick Feedback Tracker
  const [addedItemRef, setAddedItemRef] = useState<string | null>(null);

  // Detail Modal State
  const [activeDetailItem, setActiveDetailItem] = useState<MenuItem | null>(null);

  const categories = ['All', 'Burgers', 'Pizza', 'French Fries', 'Sandwiches', 'Fried Chicken', 'Beverages', 'Desserts'];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesVeg = !onlyVeg || item.isVeg;
      const matchesPopular = !onlyPopular || item.isPopular;

      return matchesSearch && matchesCategory && matchesVeg && matchesPopular;
    });
  }, [searchQuery, selectedCategory, onlyVeg, onlyPopular]);

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
    setAddedItemRef(item.id);
    setTimeout(() => {
      setAddedItemRef(null);
    }, 1200);
  };

  return (
    <section id="menu" className="py-20 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-brand-red dark:text-brand-yellow font-sans text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-brand-red/10 dark:bg-brand-yellow/10 px-4 py-1.5 rounded-full inline-block">
            Our Menu
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            Explore Our Sizzling Popular Menu Items
          </h2>
          <p className="text-zinc-550 dark:text-zinc-400 text-sm sm:text-base">
            Satisfy your supreme cravings! Filter by categories or search your favorite ingredients directly.
          </p>
        </div>

        {/* Toolbar: Search, Filters, Badges */}
        <div className="bg-white dark:bg-zinc-850 p-5 rounded-3xl border border-zinc-150 dark:border-zinc-800 shadow-md space-y-4 mb-10">
          
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400 dark:text-zinc-500">
                <Search className="w-5 h-5" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search burger, pizza, fries..."
                className="w-full pl-10 pr-4 py-3 text-sm bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-white border border-zinc-200 dark:border-zinc-800 rounded-2xl focus:outline-hidden focus:ring-1 focus:ring-brand-red focus:bg-white dark:focus:bg-zinc-900 transition-all placeholder-zinc-400 dark:placeholder-zinc-500"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-zinc-650 dark:hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Toggle filters */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-center md:justify-end">
              <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1.5 mr-1">
                <SlidersHorizontal className="w-4 h-4" /> Filters:
              </span>
              
              <button
                onClick={() => setOnlyVeg(!onlyVeg)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                  onlyVeg
                    ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-650 dark:text-emerald-400'
                    : 'border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-805 text-zinc-650 dark:text-zinc-300'
                }`}
              >
                <Leaf className="w-3.5 h-3.5 fill-current" /> Vegetarian
              </button>

              <button
                onClick={() => setOnlyPopular(!onlyPopular)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                  onlyPopular
                    ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/20 text-yellow-650 dark:text-amber-400'
                    : 'border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-805 text-zinc-650 dark:text-zinc-300'
                }`}
              >
                <Flame className="w-3.5 h-3.5 fill-current" /> Best Seller
              </button>
            </div>
          </div>

          {/* Category Filter Horizontal Scroll */}
          <div className="border-t border-zinc-100 dark:border-zinc-800 pt-4 flex gap-2 overflow-x-auto no-scrollbar scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-brand-red text-white shadow-md shadow-brand-red/20 dark:shadow-none'
                    : 'bg-zinc-50 dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const inCartCount = cart.find(c => c.menuItem.id === item.id)?.quantity || 0;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25 }}
                  key={item.id}
                  className="bg-white dark:bg-zinc-850 rounded-3xl border border-zinc-150 dark:border-zinc-800 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  
                  {/* Card Media Header */}
                  <div className="relative aspect-4/3 overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-350"
                    />
                    
                    {/* Floating pill tags in corners */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                      {item.isPopular && (
                        <span className="bg-amber-500 text-zinc-950 font-sans text-[10px] font-extrabold uppercase px-2 py-1 rounded-lg flex items-center gap-0.5 shadow-sm">
                          🔥 Best Seller
                        </span>
                      )}
                      {item.isSpicy && (
                        <span className="bg-brand-red text-white font-sans text-[10px] font-extrabold uppercase px-2 py-1 rounded-lg flex items-center gap-0.5 shadow-sm">
                          🌶️ Spicy
                        </span>
                      )}
                      {item.isVeg && (
                        <span className="bg-emerald-600 text-white font-sans text-[10px] font-extrabold uppercase px-2 py-1 rounded-lg flex items-center gap-0.5 shadow-sm">
                          🥦 Veg
                        </span>
                      )}
                    </div>
                    
                    {/* View Details Icon Overlay */}
                    <button
                      onClick={() => setActiveDetailItem(item)}
                      className="absolute inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer text-white"
                      title="Inspect Ingredients"
                    >
                      <div className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-transform hover:scale-110">
                        <Eye className="w-5 h-5 text-white" />
                      </div>
                    </button>
                    
                    {/* Calories Indicator tag */}
                    {item.calories && (
                      <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white font-mono text-[9px] font-black px-1.5 py-0.5 rounded">
                        {item.calories} kCal
                      </span>
                    )}
                  </div>

                  {/* Card Content & Details */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-sans font-black text-sm sm:text-base text-zinc-900 dark:text-white line-clamp-1 group-hover:text-brand-red transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-zinc-100/60 dark:border-zinc-800/60">
                      {/* Price Display */}
                      <span className="font-mono text-base sm:text-lg font-black text-brand-red dark:text-brand-yellow">
                        ₹{item.price}
                      </span>

                      {/* Interactive Button */}
                      <button
                        onClick={() => handleAddToCart(item)}
                        className={`px-3 py-2 sm:px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                          addedItemRef === item.id
                            ? 'bg-emerald-600 text-white scale-[0.98]'
                            : 'bg-brand-red hover:bg-[#d62e3a] text-white shadow-sm hover:shadow-md'
                        }`}
                      >
                        {addedItemRef === item.id ? (
                          <>
                            <Check className="w-3.5 h-3.5" /> Added
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-3.5 h-3.5" />
                            <span>Add</span>
                            {inCartCount > 0 && (
                              <span className="ml-0.5 bg-white/20 text-white text-[10px] font-black font-mono w-4 h-4 rounded-full flex items-center justify-center">
                                {inCartCount}
                              </span>
                            )}
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty Search Fallback */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-zinc-850 rounded-3xl border border-zinc-150 dark:border-zinc-800/80 p-8">
            <span className="text-4xl">🦖</span>
            <h3 className="font-sans font-black text-lg text-zinc-850 dark:text-white mt-4">No delicious items match filters</h3>
            <p className="text-sm text-zinc-505 dark:text-zinc-405 mt-2 max-w-sm mx-auto">
              We couldn't locate any dishes with "{searchQuery}". Try searching for categories like "Burger" or adjust active quick dietary filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setOnlyVeg(false);
                setOnlyPopular(false);
              }}
              className="bg-red-650 hover:bg-red-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-xs mt-5 transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Ingredient Lightbox Modal popup */}
      <AnimatePresence>
        {activeDetailItem && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDetailItem(null)}
              className="fixed inset-0 bg-black/60"
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-zinc-905 rounded-3xl max-w-md w-full overflow-hidden shadow-2xl relative z-10 border border-zinc-150 dark:border-zinc-800"
            >
              {/* Media image */}
              <div className="relative aspect-video">
                <img
                  src={activeDetailItem.image}
                  alt={activeDetailItem.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveDetailItem(null)}
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Text metadata */}
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-extrabold text-red-600 dark:text-yellow-400 capitalize">
                    {activeDetailItem.category} Range
                  </span>
                  <h3 className="font-sans font-black text-xl text-zinc-900 dark:text-white">
                    {activeDetailItem.name}
                  </h3>
                </div>

                <p className="text-sm text-zinc-550 dark:text-zinc-400 leading-relaxed">
                  {activeDetailItem.description}
                </p>

                {/* Dietary properties checklist */}
                <div className="bg-zinc-50 dark:bg-zinc-850 p-4 rounded-2xl flex flex-wrap gap-4 text-xs font-bold text-zinc-650 dark:text-zinc-300 border border-zinc-150/50 dark:border-zinc-800">
                  {activeDetailItem.calories && <span>🔥 {activeDetailItem.calories} kCal Calories</span>}
                  {activeDetailItem.isVeg && <span>🥦 100% Vegetarian</span>}
                  {activeDetailItem.isSpicy && <span>🌶️ Sichuan Spiciness Level</span>}
                  <span>✓ Halal Certified Sourcing</span>
                </div>

                {/* Card CTA actions */}
                <div className="flex items-center justify-between pt-2">
                  <span className="font-mono text-2xl font-black text-brand-red dark:text-brand-yellow">
                    ₹{activeDetailItem.price}
                  </span>
                  
                  <button
                    onClick={() => {
                      handleAddToCart(activeDetailItem);
                      setActiveDetailItem(null);
                    }}
                    className="bg-brand-red hover:bg-[#d62e3a] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    Add to Cart <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
