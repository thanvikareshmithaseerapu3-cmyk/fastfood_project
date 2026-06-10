import React from 'react';
import { TEAM } from '../data';
import { ChefHat, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Team() {
  return (
    <section id="team" className="py-20 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-150 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-red-650 dark:text-red-500 font-sans text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-red-50 dark:bg-red-955/35 px-4 py-1.5 rounded-full inline-block">
            Our Team
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            Meet the Culinary Heroes Behind FastFood Center
          </h2>
          <p className="text-zinc-550 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            From our Head Chef crafting proprietary seasonings to our driver champions, flavor safety remains absolute.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member) => (
            <div
              key={member.id}
              className="bg-white dark:bg-zinc-850 rounded-3xl border border-zinc-150 dark:border-zinc-800 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Media image container */}
              <div className="relative aspect-square overflow-hidden bg-zinc-100 flex-shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform duration-500 group-hover:scale-105"
                />
                
                {/* Float social links overlay on hover */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a href="#" className="p-2.5 rounded-full bg-white text-zinc-900 hover:bg-red-600 hover:text-white transition-all transform hover:scale-110">
                    <Twitter className="w-4 h-4 text-xs" />
                  </a>
                  <a href="#" className="p-2.5 rounded-full bg-white text-zinc-900 hover:bg-red-600 hover:text-white transition-all transform hover:scale-110">
                    <Linkedin className="w-4 h-4 text-xs" />
                  </a>
                  <a href="#" className="p-2.5 rounded-full bg-white text-zinc-900 hover:bg-red-600 hover:text-white transition-all transform hover:scale-110">
                    <Facebook className="w-4 h-4 text-xs" />
                  </a>
                </div>
              </div>

              {/* Bio description card */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <h3 className="font-sans font-black text-base sm:text-lg text-zinc-900 dark:text-white group-hover:text-red-655 transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-xs font-extrabold text-red-600 dark:text-yellow-455 text-zinc-500 flex items-center gap-1">
                    <ChefHat className="w-3.5 h-3.5" /> {member.role}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans line-clamp-3">
                  {member.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
