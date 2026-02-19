import FooterSection from '@/components/FooterSection';

const infoCards = [
  {
    icon: (
      <svg className="w-8 h-8 text-[#058332]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
      </svg>
    ),
    title: 'Conditions de visa',
    text: "Les participants sont responsables de vérifier s'ils ont besoin d'un visa pour entrer au Bénin. Veuillez consulter les sources officielles (ambassades, consulats ou sites gouvernementaux) bien avant votre voyage.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#058332]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    title: 'Se rendre à Cotonou',
    text: "L'aéroport international de Cotonou-Cadjehoun (COO) est situé à environ 5 km du centre-ville, avec des connexions vers les principales villes africaines et européennes.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#058332]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Hébergement',
    text: "Cotonou offre un large choix d'hébergements : hôtels de luxe, maisons d'hôtes et appartements. Réservez selon vos préférences et votre budget via des plateformes de confiance. Le comité organisateur pourra partager des tarifs hôteliers négociés ultérieurement.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#058332]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: 'Se rendre au site',
    text: "Le Palais des Congrès de Cotonou est situé au cœur de la ville, sur le Boulevard de la Marina. Il est accessible en taxi, en moto-taxi (zémidjan) ou à pied selon la distance de votre hébergement.",
  },
];

export default function VenuePage() {
  return (
    <div className="min-h-screen font-sans bg-white">

      {/* ===== Hero ===== */}
      <div
        className="py-16"
        style={{ background: 'linear-gradient(to right, #02345e 0%, #058332 100%)' }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-wider"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            LIEU
          </h1>
        </div>
      </div>

      {/* ===== Main Content: 2 columns ===== */}
      <div className="py-14 bg-[#f4f7f9]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-5 gap-8 items-start">

            {/* LEFT — info cards */}
            <div className="md:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h2
                className="text-2xl md:text-3xl font-extrabold text-[#02345e] mb-8"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Visa, Voyage &amp; Hébergement
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {infoCards.map((card, i) => (
                  <div key={i} className="space-y-2">
                    {card.icon}
                    <h3 className="font-bold text-[#02345e] text-base" style={{ fontFamily: 'var(--font-heading)' }}>
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-[1.7]">{card.text}</p>
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <p className="mt-8 text-center text-gray-400 text-xs italic border-t border-gray-100 pt-4">
                Les participants sont priés d&apos;organiser eux-mêmes leur visa, transport, hébergement et déplacements locaux.
                (Le comité organisateur pourra partager des tarifs hôteliers négociés ultérieurement.)
              </p>
            </div>

            {/* RIGHT — city photo */}
            <div className="md:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-sm h-full min-h-[400px] relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/56/Cotonou_Centre_ville.jpg"
                  alt="Cotonou Centre Ville, Bénin"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '400px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Venue photo ===== */}
      <div className="bg-white">
        <div className="container mx-auto px-4 max-w-6xl py-10">
          <div className="rounded-2xl overflow-hidden shadow-sm relative h-72 md:h-96">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Palais_des_congr%C3%A8s_de_Cotonou_B%C3%A9nin_02.jpg"
              alt="Palais des Congrès de Cotonou"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h2 className="text-white font-extrabold text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>
                Palais des Congrès de Cotonou
              </h2>
              <p className="text-white/70 text-sm">Boulevard de la Marina, Cotonou, Bénin</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Google Map ===== */}
      <div className="bg-[#f4f7f9] pb-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1!2d2.4242!3d6.3654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a9b8b97a70b3%3A0x2c37ad40e7e0e8c8!2sPalais%20des%20Congr%C3%A8s%20de%20Cotonou!5e0!3m2!1sfr!2sbj!4v1700000000000!5m2!1sfr!2sbj"
              className="w-full h-72 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Palais des Congrès de Cotonou"
            />
            {/* Address bar below map */}
            <div className="bg-white px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: 'linear-gradient(to br, #02345e, #058332)' }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#02345e] text-sm">Palais des Congrès de Cotonou</p>
                  <p className="text-gray-400 text-xs">Boulevard de la Marina, Cotonou, Bénin</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Palais+des+Congres+de+Cotonou"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full bg-[#058332] text-white text-sm font-semibold hover:bg-[#046c2a] transition-colors flex items-center gap-2"
              >
                Itinéraire
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
