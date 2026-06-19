import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          isScrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo */}
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-secondary font-heading">
                {siteContent.header.logo}
              </span>
              <span className="text-sm text-muted hidden md:block">
                {siteContent.header.tagline}
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {siteContent.header.nav.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-base font-medium text-secondary hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => scrollToSection('#booking')}
                className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-accent transform hover:scale-105 transition-all shadow-lg hidden md:flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                {siteContent.header.cta.text}
              </button>

              {/* Mobile CTA */}
              <button
                onClick={() => scrollToSection('#booking')}
                className="md:hidden bg-primary text-white px-4 py-2 rounded-full font-semibold hover:bg-accent transition-colors flex items-center gap-2 text-sm"
              >
                <Calendar className="w-4 h-4" />
                {siteContent.header.cta.mobileText}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden text-secondary p-2"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-secondary">
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white p-2"
                  aria-label="Close menu"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col items-center justify-center gap-8">
                {siteContent.header.nav.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-2xl font-semibold text-white hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
