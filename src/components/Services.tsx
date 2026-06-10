import React from 'react';
import { SERVICES } from '../data';
import { Utensils, Smartphone, Truck, ShoppingBag, Gift, Briefcase, HeartHandshake } from 'lucide-react';

const iconMap: Record<string, typeof Utensils> = {
  Utensils,
  Smartphone,
  Truck,
  ShoppingBag,
  Gift,
  Briefcase,
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-red dark:text-brand-yellow font-sans text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-brand-red/10 dark:bg-brand-yellow/10 px-4 py-1.5 rounded-full inline-block">
            What We Do
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            Comprehensive Gastronomic Services Tailored to You
          </h2>
          <p className="text-zinc-550 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            From relaxed ambient family dine-ins to speedy corporate lunches, we operate with maximum hygiene and unmatched speed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || HeartHandshake;
            return (
              <div
                key={service.id}
                className="group p-6 sm:p-8 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-100 dark:border-zinc-800 hover:border-brand-red/30 dark:hover:border-brand-yellow/30 hover:bg-white dark:hover:bg-zinc-850 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon Shell */}
                  <div className="w-12 h-12 rounded-2xl bg-brand-red/10 text-brand-red dark:bg-brand-yellow/10 dark:text-brand-yellow flex items-center justify-center transition-all duration-350 group-hover:bg-brand-red group-hover:text-white group-hover:-translate-y-1 group-hover:rotate-6">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-sans font-extrabold text-lg sm:text-xl text-zinc-900 dark:text-white group-hover:text-brand-red dark:group-hover:text-brand-yellow transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Micro Action link */}
                <div className="mt-6 pt-4 border-t border-zinc-150/40 dark:border-zinc-800/40 flex items-center justify-between text-xs font-bold text-brand-red dark:text-brand-yellow group-hover:underline transition-all">
                  <span>Explore Details</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
