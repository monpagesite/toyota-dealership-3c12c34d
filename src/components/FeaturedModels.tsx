import React, { useEffect, useRef, useState } from 'react';
import { Fuel, Users, Car } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const FeaturedModels: React.FC = () => {
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

  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="models"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold">
            {siteContent.featuredModels.overline}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary tracking-tight mt-2 font-heading">
            {siteContent.featuredModels.headline}
          </h2>
          <p className="text-lg text-muted mt-4">
            {siteContent.featuredModels.subtext}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {siteContent.featuredModels.models.map((model, index) => (
            <div
              key={model.id}
              className={`bg-surface border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Image */}
              <div className="aspect-video bg-white relative overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {model.available && (
                  <div className="absolute top-4 right-4 bg-success text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Available
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-secondary font-heading">
                  {model.name}
                </h3>
                <p className="text-sm text-muted mt-1">{model.tagline}</p>

                {/* Specs */}
                <div className="flex gap-4 mt-4 text-sm text-text">
                  <div className="flex items-center gap-1">
                    <Fuel className="w-4 h-4" />
                    <span>{model.specs.fuel}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{model.specs.seating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Car className="w-4 h-4" />
                    <span>{model.specs.type}</span>
                  </div>
                </div>

                {/* Price */}
                <p className="text-lg font-semibold text-secondary mt-4">
                  {model.price}
                </p>

                {/* CTA */}
                <button
                  onClick={scrollToBooking}
                  className="mt-6 w-full bg-primary text-white py-3 rounded-full font-semibold hover:bg-accent transition-colors"
                >
                  Book test drive
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
