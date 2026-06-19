import React, { useState, useEffect } from 'react';
import { Sparkles, Star } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % siteContent.hero.images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-white to-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              {siteContent.hero.badge.text}
            </div>

            {/* Headline */}
            <h1 className="mt-6 font-heading font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none">
              <span className="text-secondary">{siteContent.hero.headline.line1}</span>
              <br />
              <span className="text-primary">{siteContent.hero.headline.line2}</span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-lg md:text-xl text-text leading-relaxed max-w-xl">
              {siteContent.hero.subtext}
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('#booking')}
                className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent transform hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {siteContent.hero.cta.primary}
              </button>
              <button
                onClick={() => scrollToSection('#inventory')}
                className="border-2 border-secondary text-secondary px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary hover:text-white transition-all duration-300"
              >
                {siteContent.hero.cta.secondary}
              </button>
            </div>

            {/* Trust Indicator */}
            <div className="mt-12 flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(siteContent.hero.trust.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted">{siteContent.hero.trust.text}</span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-2 relative">
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Image Crossfade */}
              {siteContent.hero.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Toyota vehicle ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                {siteContent.hero.floatingBadge}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
