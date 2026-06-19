export const siteContent = {
  meta: {
    title: 'Toyota Dealership | Book Your Test Drive Today',
    description: 'Experience the Toyota difference. Book a test drive in 60 seconds and find your perfect vehicle from our extensive inventory of sedans, SUVs, and trucks.',
  },
  
  header: {
    logo: 'TOYOTA',
    tagline: 'Local Dealership',
    nav: [
      { label: 'Models', href: '#models' },
      { label: 'Inventory', href: '#inventory' },
      { label: 'Trade-In', href: '#trade-in' },
      { label: 'Financing', href: '#financing' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: {
      text: 'Book test drive',
      mobileText: 'Book',
    },
  },

  hero: {
    badge: {
      text: 'New 2024 Models Available',
    },
    headline: {
      line1: 'Drive the Toyota',
      line2: "you've been thinking about",
    },
    subtext: "Book a test drive in 60 seconds. Feel the difference behind the wheel before you decide. No pressure, just the perfect match for your lifestyle.",
    cta: {
      primary: 'Book a test drive',
      secondary: 'Browse inventory →',
    },
    trust: {
      rating: 5,
      text: 'Trusted by 2,400+ local drivers',
    },
    images: [
      'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1600&q=80',
    ],
    floatingBadge: '20+ models in stock',
  },

  featuredModels: {
    overline: 'Popular Models',
    headline: 'Find your perfect Toyota',
    subtext: 'From fuel-efficient sedans to adventure-ready SUVs',
    models: [
      {
        id: 'camry',
        name: 'Camry',
        tagline: 'Refined sedan for every journey',
        image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80',
        specs: {
          fuel: 'Up to 32 MPG',
          seating: '5 seats',
          type: 'Sedan',
        },
        price: 'Starting at $28,400',
        available: true,
      },
      {
        id: 'rav4',
        name: 'RAV4',
        tagline: 'Adventure-ready compact SUV',
        image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=800&q=80',
        specs: {
          fuel: 'Up to 30 MPG',
          seating: '5 seats',
          type: 'SUV',
        },
        price: 'Starting at $29,200',
        available: true,
      },
      {
        id: 'tacoma',
        name: 'Tacoma',
        tagline: 'Built for work and weekend adventure',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
        specs: {
          fuel: 'Up to 24 MPG',
          seating: '5 seats',
          type: 'Truck',
        },
        price: 'Starting at $30,800',
        available: true,
      },
      {
        id: 'highlander',
        name: 'Highlander',
        tagline: 'Spacious family SUV with comfort',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80',
        specs: {
          fuel: 'Up to 27 MPG',
          seating: '8 seats',
          type: 'SUV',
        },
        price: 'Starting at $38,500',
        available: true,
      },
      {
        id: 'corolla',
        name: 'Corolla',
        tagline: 'Legendary reliability meets efficiency',
        image: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?auto=format&fit=crop&w=800&q=80',
        specs: {
          fuel: 'Up to 38 MPG',
          seating: '5 seats',
          type: 'Sedan',
        },
        price: 'Starting at $22,050',
        available: true,
      },
      {
        id: 'tundra',
        name: 'Tundra',
        tagline: 'Full-size power for any challenge',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
        specs: {
          fuel: 'Up to 22 MPG',
          seating: '6 seats',
          type: 'Truck',
        },
        price: 'Starting at $42,500',
        available: true,
      },
    ],
  },

  whyTestDrive: {
    overline: 'Why Test Drive',
    headline: 'Experience before you commit',
    subtext: "A test drive is more than just a ride - it's your chance to ensure the perfect fit",
    benefits: [
      {
        icon: 'Gauge',
        title: 'Feel the performance',
        description: 'Experience responsive handling, smooth acceleration, and advanced safety features on real roads.',
      },
      {
        icon: 'CheckCircle2',
        title: 'No-pressure experience',
        description: "Take your time. Ask questions. Make sure it's the right Toyota for your lifestyle and budget.",
      },
      {
        icon: 'Clock',
        title: 'Book in 60 seconds',
        description: "Choose your model, pick a time that works for you, and we'll have everything ready when you arrive.",
      },
    ],
  },

  inventoryHighlights: {
    overline: 'Current Inventory',
    headline: 'Ready to drive home today',
    subtext: 'Certified pre-owned and new vehicles with transparent pricing',
    vehicles: [
      {
        id: '1',
        year: '2024',
        model: 'Camry XSE',
        image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=600&q=80',
        price: '$31,500',
        mileage: '12 miles',
        color: 'Celestial Silver',
        transmission: 'Automatic',
        badge: 'New',
      },
      {
        id: '2',
        year: '2023',
        model: 'RAV4 Adventure',
        image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=600&q=80',
        price: '$33,900',
        mileage: '8,400 miles',
        color: 'Blueprint',
        transmission: 'Automatic',
        badge: 'Certified',
      },
      {
        id: '3',
        year: '2024',
        model: 'Tacoma TRD Sport',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80',
        price: '$38,200',
        mileage: '45 miles',
        color: 'Supersonic Red',
        transmission: 'Automatic',
        badge: 'New',
      },
      {
        id: '4',
        year: '2024',
        model: 'Highlander Hybrid',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=600&q=80',
        price: '$43,800',
        mileage: '28 miles',
        color: 'Predawn Grey',
        transmission: 'CVT',
        badge: 'New',
      },
      {
        id: '5',
        year: '2023',
        model: 'Corolla Hybrid',
        image: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?auto=format&fit=crop&w=600&q=80',
        price: '$26,200',
        mileage: '11,200 miles',
        color: 'Wind Chill Pearl',
        transmission: 'CVT',
        badge: 'Certified',
      },
      {
        id: '6',
        year: '2024',
        model: 'Tundra Limited',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80',
        price: '$51,900',
        mileage: '150 miles',
        color: 'Magnetic Grey',
        transmission: 'Automatic',
        badge: 'New',
      },
    ],
  },

  bookingSection: {
    overline: 'Book Your Test Drive',
    headline: 'Choose your model and preferred time',
    subtext: "We'll confirm your appointment within 2 hours",
    form: {
      modelLabel: 'Select Model',
      modelPlaceholder: 'Choose a Toyota model',
      nameLabel: 'Full Name',
      namePlaceholder: 'John Smith',
      emailLabel: 'Email',
      emailPlaceholder: 'john@example.com',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '(555) 123-4567',
      dateLabel: 'Preferred Date',
      timeLabel: 'Preferred Time',
      notesLabel: 'Additional Notes (Optional)',
      notesPlaceholder: 'Any specific questions or requests?',
      submitButton: 'Confirm test drive',
    },
    features: [
      {
        icon: 'Clock',
        title: 'Quick scheduling',
        description: 'Book in 60 seconds',
      },
      {
        icon: 'CheckCircle2',
        title: 'No commitment',
        description: 'Pressure-free experience',
      },
      {
        icon: 'Shield',
        title: 'Safe & secure',
        description: 'Your data protected',
      },
    ],
  },

  contactLocation: {
    overline: 'Visit Us',
    headline: 'Come see us in person',
    subtext: 'Our team is ready to help you find your perfect Toyota',
    dealership: {
      name: 'Toyota Dealership',
      address: {
        street: '123 Main Street',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
      },
      phone: '(555) 123-4567',
      email: 'sales@toyotadealership.com',
      hours: [
        { day: 'Monday - Friday', time: '9:00 AM - 8:00 PM' },
        { day: 'Saturday', time: '9:00 AM - 6:00 PM' },
        { day: 'Sunday', time: '10:00 AM - 5:00 PM' },
      ],
    },
    whatsapp: {
      number: '5551234567',
      text: 'Chat with us on WhatsApp',
    },
    map: {
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086345429382!2d-122.41941548468197!3d37.77492977975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
    },
  },

  footer: {
    tagline: 'Your trusted local Toyota dealership. Experience the difference with transparent pricing, expert service, and a commitment to finding your perfect vehicle.',
    social: [
      { platform: 'Facebook', icon: 'Facebook', url: 'https://facebook.com' },
      { platform: 'Instagram', icon: 'Instagram', url: 'https://instagram.com' },
      { platform: 'Twitter', icon: 'Twitter', url: 'https://twitter.com' },
      { platform: 'Youtube', icon: 'Youtube', url: 'https://youtube.com' },
    ],
    links: {
      company: [
        { label: 'About Us', href: '#about' },
        { label: 'Careers', href: '#careers' },
        { label: 'Contact', href: '#contact' },
        { label: 'Blog', href: '#blog' },
      ],
      services: [
        { label: 'New Vehicles', href: '#new' },
        { label: 'Pre-Owned', href: '#pre-owned' },
        { label: 'Service & Parts', href: '#service' },
        { label: 'Financing', href: '#financing' },
      ],
      resources: [
        { label: 'FAQ', href: '#faq' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Trade-In Value', href: '#trade-in' },
        { label: 'Warranties', href: '#warranties' },
      ],
    },
    copyright: '© 2024 Toyota Dealership. All rights reserved.',
    legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Accessibility', href: '#accessibility' },
    ],
  },
};
