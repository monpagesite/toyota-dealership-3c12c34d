import React, { useEffect, useRef, useState } from 'react';
import { Gauge, CheckCircle2, Clock } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  Gauge: Gauge,
  CheckCircle2: CheckCircle2,
  Clock: Clock,
};

export const WhyTestDrive: React.FC = () => {
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

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold">
            {siteContent.whyTestDrive.overline}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary tracking-tight mt-2 font-heading">
            {siteContent.whyTestDrive.headline}
          </h2>
          <p className="text-lg text-muted mt-4">
            {siteContent.whyTestDrive.subtext}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {siteContent.whyTestDrive.benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-2xl mb-6">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-secondary mb-4 font-heading">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-base text-text leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
