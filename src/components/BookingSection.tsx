import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export const BookingSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    model: '',
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you! We will confirm your test drive appointment within 2 hours.');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="booking"
      ref={sectionRef}
      className="py-20 md:py-28 bg-surface"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold">
            {siteContent.bookingSection.overline}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary tracking-tight mt-2 font-heading">
            {siteContent.bookingSection.headline}
          </h2>
          <p className="text-lg text-muted mt-4">
            {siteContent.bookingSection.subtext}
          </p>
        </div>

        {/* Form Container */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Model Select */}
              <div>
                <label
                  htmlFor="model"
                  className="block text-sm font-medium text-secondary mb-2"
                >
                  {siteContent.bookingSection.form.modelLabel}
                </label>
                <select
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">
                    {siteContent.bookingSection.form.modelPlaceholder}
                  </option>
                  {siteContent.featuredModels.models.map((model) => (
                    <option key={model.id} value={model.id}>
                      {model.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-secondary mb-2"
                >
                  {siteContent.bookingSection.form.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={siteContent.bookingSection.form.namePlaceholder}
                  required
                  className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondary mb-2"
                  >
                    {siteContent.bookingSection.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={siteContent.bookingSection.form.emailPlaceholder}
                    required
                    className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-secondary mb-2"
                  >
                    {siteContent.bookingSection.form.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={siteContent.bookingSection.form.phonePlaceholder}
                    required
                    className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-secondary mb-2"
                  >
                    {siteContent.bookingSection.form.dateLabel}
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-secondary mb-2"
                  >
                    {siteContent.bookingSection.form.timeLabel}
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label
                  htmlFor="notes"
                  className="block text-sm font-medium text-secondary mb-2"
                >
                  {siteContent.bookingSection.form.notesLabel}
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder={siteContent.bookingSection.form.notesPlaceholder}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-full text-lg font-semibold hover:bg-accent transform hover:scale-[1.02] transition-all shadow-lg"
              >
                {siteContent.bookingSection.form.submitButton}
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-secondary text-white rounded-2xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold mb-6 font-heading">
                {siteContent.bookingSection.sidebar.title}
              </h3>
              <div className="space-y-4">
                {siteContent.bookingSection.sidebar.steps.map((step, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <p className="text-sm">
                    No obligation. Test drive multiple models to find your perfect fit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
