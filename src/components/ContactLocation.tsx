import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const ContactLocation: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const { dealership, whatsapp, map } = siteContent.contactLocation;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold">
            {siteContent.contactLocation.overline}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary tracking-tight mt-2 font-heading">
            {siteContent.contactLocation.headline}
          </h2>
          <p className="text-lg text-muted mt-4">
            {siteContent.contactLocation.subtext}
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-surface rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2 font-heading">
                    {dealership.name}
                  </h3>
                  <p className="text-text">
                    {dealership.address.street}
                    <br />
                    {dealership.address.city}, {dealership.address.state}{' '}
                    {dealership.address.zip}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-surface rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2 font-heading">
                    Call us
                  </h3>
                  <a
                    href={`tel:${dealership.phone}`}
                    className="text-text hover:text-primary transition-colors"
                  >
                    {dealership.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-surface rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2 font-heading">
                    Email us
                  </h3>
                  <a
                    href={`mailto:${dealership.email}`}
                    className="text-text hover:text-primary transition-colors"
                  >
                    {dealership.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-surface rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-3 font-heading">
                    Hours
                  </h3>
                  <div className="space-y-2">
                    {dealership.hours.map((schedule, index) => (
                      <div key={index} className="flex justify-between text-text">
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-muted">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${whatsapp.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-success hover:bg-success/90 text-white rounded-2xl p-6 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <MessageCircle className="w-6 h-6" />
                  <span className="text-lg font-semibold">{whatsapp.text}</span>
                </div>
                <span className="text-2xl">→</span>
              </div>
            </a>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border h-[600px]">
            <iframe
              src={map.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dealership location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
