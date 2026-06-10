import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube, ArrowUp, Send, Check, UtensilsCrossed, Sparkles } from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    
    // Simulate API registration
    setTimeout(() => {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-16 pb-8 border-t border-zinc-900 relative">
      {/* Back to top button */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={scrollToTop}
          className="p-3.5 bg-red-650 hover:bg-red-700 text-white rounded-full shadow-lg hover:shadow-red-950/50 hover:-translate-y-1 transition-all duration-200 cursor-pointer flex items-center justify-center group"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand details */}
          <div className="space-y-5">
            <a href="#home" className="flex items-center gap-2 group cursor-pointer">
              <span className="p-2 bg-red-650 rounded-xl text-white transition-transform group-hover:rotate-12">
                <UtensilsCrossed className="w-4 h-4" />
              </span>
              <span className="font-sans font-black text-lg tracking-tight text-white flex items-center">
                FastFood<span className="text-red-600 dark:text-yellow-405">Center</span>
              </span>
            </a>
            
            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
              FastFood Center is dedicated to providing fresh, tasty, and affordable fast-food experiences. We combine pure ingredients, expert chefs, and lightning dispatch speeds.
            </p>

            {/* Social icons */}
            <div className="flex gap-3.5 pt-2">
              <a href="#" className="p-2 bg-zinc-900 text-zinc-400 hover:bg-red-600 hover:text-white rounded-xl transition-all" aria-label="Find us on Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-zinc-900 text-zinc-400 hover:bg-red-600 hover:text-white rounded-xl transition-all" aria-label="Find us on Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-zinc-900 text-zinc-400 hover:bg-red-600 hover:text-white rounded-xl transition-all" aria-label="Find us on Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-zinc-900 text-zinc-400 hover:bg-red-600 hover:text-white rounded-xl transition-all" aria-label="Find us on YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div className="space-y-4">
            <h4 className="font-sans font-extrabold text-sm text-white uppercase tracking-wider">
              Quick Directory
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-red-500 transition-colors">Home Landing</a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-500 transition-colors">About Us Section</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-red-500 transition-colors">Popular Menu</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-red-500 transition-colors">Signature Gallery</a>
              </li>
              <li>
                <a href="#team" className="hover:text-red-500 transition-colors">Cooks & Team</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-500 transition-colors">Address / Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services info */}
          <div className="space-y-4">
            <h4 className="font-sans font-extrabold text-sm text-white uppercase tracking-wider">
              Popular Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-500">
              <li>Dine-In Family Restaurant</li>
              <li>Online Combo Customizer</li>
              <li>30-Min Fast Home Delivery</li>
              <li>Pre-Order Express Takeaway</li>
              <li>Large Party Platter Catering</li>
              <li>Corporate Executive Foods</li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="font-sans font-extrabold text-sm text-white uppercase tracking-wider">
              Join Our Newsletter
            </h4>
            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
              Get notified of weekend buy-1-get-1-free offers, discount coupon code releases and secret recipes!
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="name@gmail.com"
                  className="w-full text-xs sm:text-sm px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-red-500 text-white placeholder-zinc-650"
                />
                
                <button
                  type="submit"
                  title="Subscribe Now"
                  className="absolute inset-y-1.5 right-1.5 bg-red-655 hover:bg-red-700 text-white p-2 rounded-lg transition-all flex items-center justify-center cursor-pointer"
                >
                  {subscribed ? <Check className="w-4 h-4 text-emerald-400 stroke-[3.2]" /> : <Send className="w-4 h-4" />}
                </button>
              </div>
              
              {subscribed && (
                <p className="text-[11px] text-emerald-500 font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Subscribed successfully! Watch your mail.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Metadata bar */}
        <div className="pt-8 mt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-600 gap-4">
          <p>© 2026 FastFood Center. All rights reserved. Made under High-Quality standards.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Charter</a>
            <span>•</span>
            <a href="#" className="hover:underline">Terms of Hospitality</a>
            <span>•</span>
            <a href="#" className="hover:underline">Allergen Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
