import React, { useState, useMemo } from 'react';
import { GALLERY } from '../data';
import { Maximize2, X, ChevronLeft, ChevronRight, Hash } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  // Lightbox index tracker
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = ['All', 'Signature Dishes', 'Restaurant Interior', 'Food Preparation', 'Customer Experiences', 'Catering Events'];

  const filteredGallery = useMemo(() => {
    if (selectedFilter === 'All') return GALLERY;
    return GALLERY.filter(item => item.category === selectedFilter);
  }, [selectedFilter]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const prevIndex = lightboxIndex === 0 ? filteredGallery.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIndex);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const nextIndex = lightboxIndex === filteredGallery.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(nextIndex);
  };

  return (
    <section id="gallery" className="py-20 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-150 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-brand-red dark:text-brand-yellow font-sans text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-brand-red/10 dark:bg-brand-yellow/10 px-4 py-1.5 rounded-full inline-block">
            Our Gallery
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            Snapshot Moments of Quality & Satisfaction
          </h2>
          <p className="text-zinc-505 dark:text-zinc-400 text-sm sm:text-base">
            Peek inside our dynamic diner kitchen, catering platters, and joyful visitor dining experiences.
          </p>
        </div>

        {/* Filter Toolbar Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 pb-2 border-b border-zinc-200/50 dark:border-zinc-800/50">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-brand-red text-white shadow-md shadow-brand-red/25'
                  : 'bg-white dark:bg-zinc-850 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry / Bento grid representation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ duration: 0.25 }}
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative rounded-3xl overflow-hidden aspect-4/3 cursor-pointer border border-zinc-150 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all bg-zinc-250 dark:bg-zinc-800"
              >
                {/* Photo media */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform duration-500 group-hover:scale-106"
                />

                {/* Overlaid Cover details on Hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-end p-5 sm:p-6 text-white text-left">
                  <div className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md absolute top-4 right-4 text-white hover:scale-110 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                  
                  <span className="text-[10px] uppercase font-black tracking-widest text-[#FFC300] bg-black/40 px-2 py-0.5 rounded inline-block w-max mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="font-sans font-bold text-sm sm:text-base text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Interactive Lightbox Overlay Panel (AnimatePresence) */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 z-55 flex flex-col items-center justify-center p-4">
              {/* Backing dimmer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxIndex(null)}
                className="fixed inset-0 bg-black/95 backdrop-blur-md"
              />

              {/* Header inside lightbox */}
              <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between text-white md:px-8">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-zinc-400 bg-zinc-800/60 p-2 rounded-xl">
                    {lightboxIndex + 1} / {filteredGallery.length}
                  </span>
                  <span className="hidden sm:inline-block font-sans text-xs text-yellow-405 font-bold">
                    {filteredGallery[lightboxIndex].category}
                  </span>
                </div>
                
                {/* Close Button top-right */}
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-2 bg-zinc-850/80 hover:bg-zinc-800 text-white rounded-full cursor-pointer transition-colors"
                  aria-label="Close Lightbox"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Lightbox frame */}
              <div className="relative w-full max-w-4xl aspect-4/3 sm:aspect-16/10 flex items-center justify-center z-10">
                
                {/* Prev Button */}
                <button
                  onClick={handlePrev}
                  className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full cursor-pointer absolute left-2 md:-left-16 z-20 transition-all hover:scale-105"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Sized Photo panel */}
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  src={filteredGallery[lightboxIndex].image}
                  alt={filteredGallery[lightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain rounded-2xl max-h-[70vh] shadow-2xl"
                />

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full cursor-pointer absolute right-2 md:-right-16 z-20 transition-all hover:scale-105"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Bottom Caption Inside lightbox */}
              <div className="absolute bottom-6 text-center z-10 text-white px-6 w-full max-w-xl">
                <p className="font-sans font-bold text-sm sm:text-base text-zinc-100">
                  {filteredGallery[lightboxIndex].title}
                </p>
                <p className="text-zinc-505 text-xs mt-1 lowercase italic">
                  Category: {filteredGallery[lightboxIndex].category}
                </p>
              </div>

            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
