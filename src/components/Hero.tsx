import React from 'react';
import { Play, ArrowRight, Clock, Star, Flame } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-[120px] pb-16 md:pt-[160px] md:pb-24 overflow-hidden bg-radial from-red-50/20 via-white to-white dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950"
    >
      {/* Decorative colored ambient blobs */}
      <div className="absolute top-[20%] -left-40 w-[400px] h-[400px] rounded-full bg-red-100/30 dark:bg-red-950/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] -right-40 w-[400px] h-[400px] rounded-full bg-yellow-105/30 dark:bg-yellow-950/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Presentation Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-red/10 dark:bg-brand-red/20 text-brand-red dark:text-brand-orange font-sans text-xs font-extrabold uppercase tracking-widest animate-pulse">
              <Flame className="w-4 h-4 fill-brand-red dark:fill-brand-orange" /> Craving Sizzling Goodness?
            </div>
            
            <h1 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-zinc-900 dark:text-white leading-[1.1] tracking-tight">
              Fresh, Fast & <br/>
              <span className="text-brand-red bg-linear-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">Delicious</span> Food <br/>
              Delivered to Your Door
            </h1>

            <p className="font-sans text-base sm:text-lg text-zinc-550 dark:text-zinc-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Serving mouth-watering burgers, pizzas, fries, sandwiches, and beverages with quality ingredients and exceptional service.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#menu"
                className="w-full sm:w-auto text-center bg-brand-red hover:bg-[#d62e3a] text-white font-bold text-sm px-8 py-4 rounded-2xl shadow-lg shadow-brand-red/20 dark:shadow-none hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
              >
                Order Now <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#menu"
                className="w-full sm:w-auto text-center bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-white font-bold text-sm px-8 py-4 rounded-2xl transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
              >
                View Menu
              </a>
            </div>

            {/* Micro proof counts */}
            <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/20 text-yellow-500">
                  <Star className="w-5 h-5 fill-yellow-500" />
                </div>
                <div>
                  <p className="text-sm font-black text-zinc-900 dark:text-white">4.9 / 5.0 Rating</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Over 8,000+ happy reviews</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-450">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-black text-zinc-900 dark:text-white">30 Min Delivery</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Or its absolutely free</p>
                </div>
              </div>
            </div>
          </div>

          {/* Large Floating Hero Food Graphic Column */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px]">
              {/* Outer Glowing Accents */}
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-red-500 rounded-full blur-2xl opacity-15 dark:opacity-20 animate-pulse" />
              
              {/* Giant Stacked Food Picture */}
              <div className="relative z-10 aspect-square rounded-full border-[8px] sm:border-[12px] border-white dark:border-zinc-900 shadow-2xl overflow-hidden bg-zinc-100">
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=85"
                  alt="Famous FastFood Center Supreme Burger Stack"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Promo Badges */}
              <div className="absolute -top-3 -right-3 z-20 bg-brand-yellow text-slate-900 font-sans p-4 rounded-2xl shadow-xl flex flex-col items-center justify-center rotate-12 scale-90 sm:scale-100">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-800">Only</span>
                <span className="font-mono text-xl sm:text-2xl font-black">₹349</span>
                <span className="text-[10px] font-bold">Limited Time</span>
              </div>

              <div className="absolute -bottom-4 -left-4 z-20 bg-white dark:bg-zinc-850 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-zinc-100 dark:border-zinc-805 scale-90 sm:scale-100">
                <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 font-extrabold text-sm flex items-center justify-center animate-pulse">
                  ✓
                </div>
                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Hygienic standard</p>
                  <p className="text-sm font-black text-zinc-900 dark:text-white">100% Organic Meat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
