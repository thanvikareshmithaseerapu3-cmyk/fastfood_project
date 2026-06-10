import React from 'react';
import { Users, Utensils, Award, CalendarDays } from 'lucide-react';

export default function Statistics() {
  const statsList = [
    {
      metric: '10,000+',
      label: 'Happy Customers',
      description: 'Satisfied local food fans',
      icon: Users,
      color: 'text-brand-red bg-brand-red/15 dark:bg-brand-red/20 dark:text-brand-orange',
    },
    {
      metric: '50+',
      label: 'Unique Sides & Menu Items',
      description: 'Handcrafted recipe styles',
      icon: Utensils,
      color: 'text-brand-yellow bg-brand-yellow/15 dark:bg-brand-yellow/20 dark:text-brand-yellow',
    },
    {
      metric: '5 Years',
      label: 'Gourmet Kitchen Experience',
      description: 'Top ratings guaranteed',
      icon: Award,
      color: 'text-brand-orange bg-brand-orange/15 dark:bg-brand-orange/20 dark:text-brand-orange',
    },
    {
      metric: '500+',
      label: 'Successful Catering Events',
      description: 'Corporate meetings & birthdays',
      icon: CalendarDays,
      color: 'text-brand-yellow bg-zinc-900 dark:text-brand-yellow',
    },
  ];

  return (
    <section className="relative py-16 bg-zinc-950 text-white overflow-hidden">
      {/* Decorative colored grid pattern in the background */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#303030_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {statsList.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="space-y-3 group">
                {/* Icon wrapper badge */}
                <div className={`w-12 h-12 rounded-2xl mx-auto flex items-center justify-center transition-all duration-300 group-hover:rotate-12 ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                {/* Metric count */}
                <h3 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
                  {stat.metric}
                </h3>
                
                {/* Labels */}
                <div className="space-y-0.5">
                  <p className="font-sans font-bold text-sm sm:text-base text-zinc-200">
                    {stat.label}
                  </p>
                  <p className="text-[11px] sm:text-xs text-zinc-400">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
