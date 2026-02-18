'use client';

export default function VenueSection() {
  return (
    <section id="venue" className="py-24 font-sans" style={{ backgroundColor: '#f0f4f8' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Big VENUE Title */}
        <h2
          className="text-center mb-10 uppercase"
          style={{
            color: '#003366',
            fontSize: '48px',
            fontWeight: 900,
            letterSpacing: '0.1em',
          }}
        >
          Lieu
        </h2>

        {/* Google Maps Embed */}
        <div className="rounded-xl overflow-hidden shadow-lg" style={{ border: '1px solid #e2e8f0' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2441!2d2.4!3d6.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjInMTIuMCJOIDLCsDI0JzAwLjAiRQ!5e0!3m2!1sfr!2sbj!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lieu de la conférence"
          />
        </div>
      </div>
    </section>
  );
}
