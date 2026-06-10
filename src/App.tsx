/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider } from './context/AppContext';
import PromoBanner from './components/PromoBanner';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Menu from './components/Menu';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

function MainAppContent() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-200">
      {/* Top Discount Offer Promotional Banner */}
      <PromoBanner />

      {/* Primary Sticky Header */}
      <Header />

      {/* Page Sections */}
      <main>
        {/* Hero Banner Section */}
        <Hero />

        {/* About Company Section */}
        <About />

        {/* Services Showcase Section */}
        <Services />

        {/* Popular Culinary Menu Grid Section (With Search & Category filtering) */}
        <Menu />

        {/* Why Choose Us trust badges Section */}
        <WhyChooseUs />

        {/* Signature dishes, preparation & venue Image Gallery (with lightbox slider) */}
        <Gallery />

        {/* Dynamic Metric counters Section */}
        <Statistics />

        {/* Customer Star Testimonials Section */}
        <Testimonials />

        {/* Kitchen Chefs and Delivery Coordinators Team Section */}
        <Team />

        {/* Frequently Asked Q&A accordions Section */}
        <FAQ />

        {/* Interactive email transmission Contact Form & Location Map Section */}
        <Contact />
      </main>

      {/* Compact Interactive Footer */}
      <Footer />

      {/* Slide-out Shopping Basket DrawerOverlay */}
      <CartDrawer />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}
