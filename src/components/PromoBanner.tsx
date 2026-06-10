import React, { useState } from 'react';
import { Sparkles, Gift, X, ChevronRight } from 'lucide-react';

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div id="promo-banner" className="bg-linear-to-r from-brand-red via-brand-orange to-brand-yellow text-white py-2 px-4 relative z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-center gap-2">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
          <span className="bg-white/20 text-white rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-brand-yellow fill-brand-yellow" /> Offer
          </span>
          <span>Get FREE delivery on all orders over <strong className="font-bold text-brand-yellow font-black">₹499!</strong> Plus, use code <strong className="bg-brand-yellow text-brand-red px-1.5 py-0.5 rounded font-mono text-xs font-black">FAST15</strong> for 15% off.</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#menu"
            className="text-xs font-bold text-yellow-100 hover:text-white flex items-center gap-0.5 underline decoration-2 underline-offset-2 transition-colors cursor-pointer"
          >
            Claim Discount Now <ChevronRight className="w-3 h-3" />
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-yellow-100 p-1 rounded-full hover:bg-white/12 transition-colors duration-150 absolute right-2 top-1/2 -translate-y-1/2 sm:static sm:translate-y-0"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
