import React from 'react';
import { Eye, Target, Medal, CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      title: 'Our Clean Kitchen Mission',
      description: 'Maintaining hospital-grade hygiene is our highest daily priority while creating delightful, fast food.',
      icon: Target,
      color: 'bg-brand-red/10 text-brand-red dark:bg-brand-red/20 dark:text-brand-orange',
    },
    {
      title: 'Expert Preparation Quality',
      description: 'Every recipe is built by culinary scholars, choosing cheese and meats processed under premium rules.',
      icon: Medal,
      color: 'bg-brand-yellow/10 text-brand-orange dark:bg-brand-yellow/20 dark:text-brand-yellow',
    },
    {
      title: 'Rapid & Secure Serving',
      description: 'Speed doesn’t sacrifice flavor. Your order is delivered sizzling or packed premium for takeaway within minutes.',
      icon: Eye,
      color: 'bg-brand-orange/10 text-brand-orange dark:bg-brand-orange/20 dark:text-brand-orange',
    },
  ];

  return (
    <section id="about" className="py-20 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-100 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Creative Left Side Collage representation */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative aspect-6/7 rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white dark:border-zinc-805 bg-zinc-200">
              <img
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80"
                alt="FastFood Center Kitchen Crafting Burgers"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 right-6 z-10 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md p-4 rounded-2xl shadow-xl max-w-[210px] border border-zinc-100 dark:border-zinc-800">
                <p className="font-sans font-black text-3xl text-brand-red dark:text-brand-yellow">100%</p>
                <p className="font-semibold text-zinc-850 dark:text-zinc-100 text-xs mt-1">Sustainably Sourced Pure Angus Beef Patties</p>
              </div>
            </div>
          </div>

          {/* Right Side Content Block */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-7">
            <div className="space-y-3">
              <span className="text-brand-red dark:text-brand-orange font-sans text-xs sm:text-sm font-extrabold uppercase tracking-widest block">
                Who We Are
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
                Crafting Memorably Fresh, Fast & Affordable Meals Since 2021
              </h2>
            </div>

            <p className="font-sans text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              FastFood Center is dedicated to providing fresh, tasty, and affordable fast-food experiences. We combine quality ingredients, expert preparation, and fast service to ensure every customer enjoys a memorable meal.
            </p>

            {/* Highlights Grid */}
            <div className="space-y-4 pt-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-zinc-850 shadow-xs border border-zinc-100/60 dark:border-zinc-800/60 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className={`p-3 rounded-xl flex-shrink-0 flex items-center justify-center ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-sm sm:text-base text-zinc-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quality checklist */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> USDA Grade Premium Meats
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Locally Sourced Vegetables
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Zero Preservatives Policy
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Eco-Friendly Packing Packs
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
