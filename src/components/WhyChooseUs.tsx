import React from 'react';
import { WHY_CHOOSE_US } from '../data';
import { Leaf, Zap, DollarSign, ShieldCheck, UserCheck, Heart } from 'lucide-react';

const iconMap: Record<string, typeof Leaf> = {
  Leaf,
  Zap,
  DollarSign,
  ShieldCheck,
  UserCheck,
  Heart,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-red dark:text-brand-yellow font-sans text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-brand-red/10 dark:bg-brand-yellow/10 px-4 py-1.5 rounded-full inline-block">
            Why Choose Us
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            We Maintain Elite FastFood Hospitality Benchmarks
          </h2>
          <p className="text-zinc-550 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            FastFood Center doesn’t just deliver snacks; we engineer flavor experiences powered by strict cleanliness standards and friendly service.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item) => {
            const IconComponent = iconMap[item.icon] || Heart;
            return (
              <div
                key={item.id}
                className="group p-6 sm:p-8 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-150/60 dark:border-zinc-800/60 hover:bg-white dark:hover:bg-zinc-850 hover:shadow-xl transition-all duration-300"
              >
                {/* Custom Icon wrapper with double circle borders on hover */}
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 text-brand-orange dark:bg-brand-orange/20 dark:text-brand-yellow flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white mb-6">
                  <IconComponent className="w-6 h-6 stroke-[2.2]" />
                </div>

                <div className="space-y-2.5">
                  <h3 className="font-sans font-extrabold text-lg sm:text-xl text-zinc-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Extra Promotional Block inside Why Choose Us */}
        <div className="mt-16 bg-linear-to-r from-brand-red via-brand-orange to-brand-yellow rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[300px] h-[300px] bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[200px] h-[200px] bg-black/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-center lg:text-left">
            <div className="lg:col-span-8 space-y-3.5">
              <span className="bg-white/20 text-white rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider inline-block">
                Hot Dynamic Deal
              </span>
              <h3 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl leading-tight">
                Get 15% Off Your Very First Checkout Basket
              </h3>
              <p className="text-xs sm:text-sm text-yellow-100 max-w-xl">
                Enter promocode <strong className="font-mono bg-brand-yellow text-brand-red px-1.5 py-0.5 rounded font-black">FAST15</strong> directly inside your checkout drawer. Applicable for burger combos, hot pizza ranges and more.
              </p>
            </div>
            
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <a
                href="#menu"
                className="bg-white text-brand-red hover:bg-brand-yellow hover:text-slate-900 font-extrabold text-sm px-8 py-4 rounded-2xl transition-all hover:scale-[1.03] active:scale-[0.97] shadow-xl cursor-pointer"
              >
                Claim My Offer
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
