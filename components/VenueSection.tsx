'use client';

import AnimatedSection from './AnimatedSection';

const venueInfo = [
  {
    icon: '📍',
    title: 'Venue',
    text: 'Palais des Congrès de Cotonou, Boulevard de la Marina, Cotonou, Benin',
  },
  {
    icon: '✈️',
    title: 'Nearest Airport',
    text: 'Cotonou-Cadjehoun International Airport (COO) — ~5 km from city centre',
  },
  {
    icon: '🗓️',
    title: 'Conference Dates',
    text: 'October 20–22, 2026',
  },
  {
    icon: '🌍',
    title: 'Country',
    text: 'Republic of Benin, West Africa',
  },
];

export default function VenueSection() {
  return (
    <section id="venue" className="relative overflow-hidden py-24 font-sans" style={{ backgroundColor: '#f0f4f8' }}>
      {/* Background Glow Bubbles */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#058332]/[0.02] rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-20 left-0 w-[350px] h-[350px] bg-[#02345e]/[0.02] rounded-full blur-[90px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <AnimatedSection direction="up" duration={600} className="text-center mb-12">
          <div className="section-kicker">
            <span></span> Conference Venue
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#003366' }}>
            Venue &amp; <span className="font-accent italic font-medium">Location</span>
          </h2>
          <div className="section-divider"></div>
        </AnimatedSection>

        {/* Info cards — staggered */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {venueInfo.map((info, i) => (
            <AnimatedSection
              key={i}
              direction="up"
              duration={500}
              delay={i * 100}
              threshold={0.08}
            >
              <div
                className="premium-card text-center p-5 h-full"
              >
                <div className="text-3xl mb-2">{info.icon}</div>
                <div className="font-bold text-sm mb-1" style={{ color: '#003366' }}>{info.title}</div>
                <div className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{info.text}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Google Maps Embed — fades in last */}
        <AnimatedSection direction="up" duration={700} delay={300} threshold={0.08}>
          <div className="rounded-xl overflow-hidden shadow-lg" style={{ border: '1px solid #e2e8f0' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1!2d2.4242!3d6.3654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a9b8b97a70b3%3A0x2c37ad40e7e0e8c8!2sPalais%20des%20Congr%C3%A8s%20de%20Cotonou!5e0!3m2!1sfr!2sbj!4v1700000000000!5m2!1sfr!2sbj"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Conference Venue — Palais des Congrès de Cotonou"
            />
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
