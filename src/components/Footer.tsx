import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  Facebook: Facebook,
  Instagram: Instagram,
  Twitter: Twitter,
  Youtube: Youtube,
};

export const Footer: React.FC = () => {
  const { footer } = siteContent;

  return (
    <footer className="bg-secondary text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 font-heading">
              {siteContent.header.logo}
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              {footer.tagline}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {footer.social.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                    aria-label={social.platform}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Company</h4>
            <ul className="space-y-3">
              {footer.links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Services</h4>
            <ul className="space-y-3">
              {footer.links.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Resources</h4>
            <ul className="space-y-3">
              {footer.links.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-white/60 text-sm">{footer.copyright}</p>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {footer.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/60 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
