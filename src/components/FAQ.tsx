import React, { useState } from 'react';
import { FAQS } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>('faq1');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-zinc-950 border-t border-zinc-150/80 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-red-650 dark:text-red-500 font-sans text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-red-50 dark:bg-red-955/35 px-4 py-1.5 rounded-full inline-block">
            Frequently Asked Questions
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            Queries in the Basket? We Answered Them!
          </h2>
          <p className="text-zinc-550 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            Get instant assistance regarding gluten-free customizations, catering timelines, delivery limits.
          </p>
        </div>

        {/* Interactive Accordion columns */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-zinc-50 dark:bg-zinc-904 rounded-2xl border border-zinc-150 dark:border-zinc-805 overflow-hidden transition-shadow duration-150 hover:shadow-xs"
              >
                {/* Expand Click Trigger */}
                <button
                  type="button"
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isExpanded}
                >
                  <div className="flex gap-3">
                    <span className="p-1 rounded-lg bg-red-55 px-2 py-1 text-red-600 dark:text-yellow-405 font-mono text-xs font-black">
                      Q
                    </span>
                    <span className="font-sans font-bold text-sm sm:text-base text-zinc-850 dark:text-white leading-normal">
                      {faq.question}
                    </span>
                  </div>
                  
                  <span className={`p-1 text-zinc-500 hover:text-zinc-800 dark:hover:text-white transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5 flex-shrink-0" />
                  </span>
                </button>

                {/* Animated Dropdown Area (AnimatePresence) */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-zinc-200/50 dark:border-zinc-800/50 bg-white/50 dark:bg-zinc-900/30 overflow-hidden"
                    >
                      <div className="p-5 sm:p-6 text-xs sm:text-sm text-zinc-650 dark:text-zinc-350 leading-relaxed font-sans pl-14 flex gap-2 items-start">
                        <span>{faq.answer}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
