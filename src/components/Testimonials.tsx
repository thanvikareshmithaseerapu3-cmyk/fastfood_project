import React from 'react';
import { TESTIMONIALS } from '../data';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-brand-red dark:text-brand-yellow font-sans text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-brand-red/10 dark:bg-brand-yellow/10 px-4 py-1.5 rounded-full inline-block">
            Testimonials
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            Here Is What Our Loving Food Critics Speak
          </h2>
          <p className="text-zinc-550 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            Rated 4.9/5 stars over average local guest logs. Read firsthand reviews of our burger, fries and delivery timing.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testi) => (
            <div
              key={testi.id}
              className="relative p-6 sm:p-8 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-150 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              {/* Float styled Quote icon background */}
              <div className="absolute top-6 right-6 text-zinc-200/60 dark:text-zinc-805 pointer-events-none">
                <Quote className="w-10 h-10 stroke-[1.2] fill-current" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* 5 Stars display */}
                <div className="flex gap-1 text-brand-yellow">
                  {Array.from({ length: testi.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current stroke-[2.2]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-sm sm:text-base text-zinc-650 dark:text-zinc-300 leading-relaxed italic">
                  "{testi.review}"
                </p>
              </div>

              {/* User Bio and Avatar */}
              <div className="flex items-center gap-4.5 mt-6 pt-5 border-t border-zinc-150/50 dark:border-zinc-805">
                <img
                  src={testi.avatar}
                  alt={testi.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-zinc-155 dark:border-zinc-700 bg-zinc-100"
                />
                <div>
                  <h4 className="font-sans font-black text-sm text-zinc-900 dark:text-white leading-none">
                    {testi.name}
                  </h4>
                  <span className="text-[11px] font-bold text-zinc-450 dark:text-zinc-455 mt-1.5 inline-block">
                    {testi.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
