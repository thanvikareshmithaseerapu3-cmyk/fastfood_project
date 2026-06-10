import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ChevronRight, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset after a while
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      title: 'Our Coordinates',
      value: '782 Flavor Boulevard, Suite 50, Food District NYC, USA',
      icon: MapPin,
    },
    {
      title: 'Reservations & Callouts',
      value: '+1 (555) 789-3210',
      icon: Phone,
    },
    {
      title: 'Electronic Mail-inbox',
      value: 'hello@fastfoodcenter.com',
      icon: Mail,
    },
    {
      title: 'Operating Hours',
      value: 'Monday - Sunday: 10:00 AM - 11:30 PM',
      icon: Clock,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-150/40 dark:border-zinc-805">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-brand-red dark:text-brand-yellow font-sans text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-brand-red/10 dark:bg-brand-yellow/10 px-4 py-1.5 rounded-full inline-block">
            Contact Us
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            Order Custom Catering or Share Your Review
          </h2>
          <p className="text-zinc-550 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
            Have questions about group orders or severe food allergies? Drop us a line of details, and we’ll coordinate back in 12 hours.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Block: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-sans font-extrabold text-xl text-zinc-900 dark:text-white mb-6">
              Get In Touch Directly
            </h3>

            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={idx}
                  className="p-5 bg-white dark:bg-zinc-850 rounded-2xl border border-zinc-150 dark:border-zinc-800 shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="p-3 rounded-xl bg-brand-red/10 text-brand-red dark:bg-brand-yellow/15 dark:text-brand-yellow flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-zinc-500 dark:text-zinc-400 text-xs uppercase tracking-wider mb-1">
                      {info.title}
                    </h4>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-relaxed">
                      {info.value}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Embedded maps placeholder */}
            <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-inner h-48 bg-zinc-200 dark:bg-zinc-800 relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373516542!3d40.69766374859187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%2520USA!5e0!3m2!1sen!2sin!4v1655456488347!5m2!1sen!2sin"
                className="w-full h-full border-none grayscale-[30%] dark:invert-[90%] dark:hue-rotate-180 opacity-90 hover:opacity-100 duration-200"
                allowFullScreen={false}
                loading="lazy"
                title="Mock Location google map"
              />
              <div className="absolute top-3 left-3 bg-zinc-900/85 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-1 rounded-md shadow flex items-center gap-1">
                📍 Manhattan Food Center
              </div>
            </div>
          </div>

          {/* Right Block: Dynamic Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-zinc-850 p-6 sm:p-10 rounded-3xl border border-zinc-150 dark:border-zinc-800 shadow-md">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-zinc-600 dark:text-zinc-300 uppercase tracking-widest mb-2">
                          Your Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Melisa Peterson"
                          className="w-full px-4.5 py-3 text-sm bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-brand-red focus:bg-white dark:focus:bg-zinc-900 text-zinc-805 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-zinc-600 dark:text-zinc-300 uppercase tracking-widest mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="mel@gmail.com"
                          className="w-full px-4.5 py-3 text-sm bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-brand-red focus:bg-white dark:focus:bg-zinc-900 text-zinc-805 dark:text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-600 dark:text-zinc-300 uppercase tracking-widest mb-2">
                        Mobile Number <span className="text-zinc-400 lowercase italic">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 019-3220"
                        className="w-full px-4.5 py-3 text-sm bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-brand-red focus:bg-white dark:focus:bg-zinc-900 text-zinc-805 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-600 dark:text-zinc-300 uppercase tracking-widest mb-2">
                        Your Message Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write details about your catering event, allergen requests or review..."
                        className="w-full px-4.5 py-3 text-sm bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-brand-red focus:bg-white dark:focus:bg-zinc-900 text-zinc-805 dark:text-white"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-red hover:bg-[#d62e3a] text-white font-bold text-sm py-4 px-6 rounded-xl hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-brand-red/20 dark:shadow-none transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Transmitting details...
                        </span>
                      ) : (
                        <>
                          Transmit Message <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="text-center py-10 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-450 flex items-center justify-center mx-auto mb-3 shadow-inner">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-sans font-black text-2xl text-zinc-900 dark:text-white">
                      Message Transmitted Successfully!
                    </h3>
                    <p className="text-sm text-zinc-550 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong className="font-bold text-zinc-800 dark:text-white">{formData.name}</strong>. Your coordinate logs was saved securely. Our hospitality lead will mail or coordinate call you very shortly!
                    </p>
                    <div className="pt-2">
                      <span className="text-[11px] font-bold text-zinc-400 bg-zinc-50 dark:bg-zinc-900 py-1.5 px-3 rounded-full">
                        Reference Hash ID: FFC-MSG-{Math.floor(1000 + Math.random() * 9000)}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
