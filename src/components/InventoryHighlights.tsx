import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Gauge, Palette } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const InventoryHighlights: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      return () => {
        container.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        direction === 'left'
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="inventory"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold">
            {siteContent.inventoryHighlights.overline}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary tracking-tight mt-2 font-heading">
            {siteContent.inventoryHighlights.headline}
          </h2>
          <p className="text-lg text-muted mt-4">
            {siteContent.inventoryHighlights.subtext}
          </p>
        </div>

        {/* Scroll Controls */}
        <div className="flex justify-end gap-2 mb-6">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`p-3 rounded-full border-2 transition-all ${
              canScrollLeft
                ? 'border-secondary text-secondary hover:bg-secondary hover:text-white'
                : 'border-gray-300 text-gray-300 cursor-not-allowed'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`p-3 rounded-full border-2 transition-all ${
              canScrollRight
                ? 'border-secondary text-secondary hover:bg-secondary hover:text-white'
                : 'border-gray-300 text-gray-300 cursor-not-allowed'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {siteContent.inventoryHighlights.vehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className={`flex-shrink-0 w-80 bg-surface border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Image */}
              <div className="relative aspect-video bg-white overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={`${vehicle.year} ${vehicle.model}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {/* Badge */}
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    vehicle.badge === 'New'
                      ? 'bg-primary text-white'
                      : 'bg-success text-white'
                  }`}
                >
                  {vehicle.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary font-heading">
                  {vehicle.year} {vehicle.model}
                </h3>

                {/* Price */}
                <p className="text-2xl font-bold text-primary mt-2">{vehicle.price}</p>

                {/* Details */}
                <div className="mt-4 space-y-2 text-sm text-text">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-muted" />
                    <span>{vehicle.mileage}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-muted" />
                    <span>{vehicle.color}</span>
                  </div>
                  <div className="text-muted">{vehicle.transmission}</div>
                </div>

                {/* CTA */}
                <button className="mt-6 w-full bg-secondary text-white py-3 rounded-full font-semibold hover:bg-primary transition-colors">
                  View details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
