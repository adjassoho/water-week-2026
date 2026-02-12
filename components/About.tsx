export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            À propos de l&apos;événement
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Objectifs de la Semaine de l&apos;Eau
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Le Centre d&apos;Excellence d&apos;Afrique pour l&apos;Eau et l&apos;Assainissement (C2EA) de l&apos;Institut National de l&apos;Eau (INE/UAC),
              en collaboration avec l&apos;Association Internationale des Sciences Hydrologiques (IAHS) et le réseau FRIEND AOC,
              organise la deuxième édition de la Semaine de l&apos;Eau et de l&apos;Assainissement du 3 au 5 juin 2026.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cette édition se concentre sur la thématique : <span className="font-semibold text-cyan-700">de la Recherche à l&apos;Innovation et au Transfert de Technologies</span>.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Informations clés</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-3 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                3-5 juin 2026
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-3 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Palais des Congrès, Cotonou
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-3 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                Experts internationaux
              </li>
            </ul>
          </div>
        </div>

        <div id="call-papers" className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Appel à communications
          </h3>
          <p className="text-lg mb-6 text-cyan-50">
            Chercheurs, Enseignants-Chercheurs, Professionnels et Étudiants sont invités à soumettre leurs résumés de communication.
          </p>
          <p className="text-xl font-semibold mb-8">
            📅 Date limite : 20 mai 2026
          </p>
          <a
            href="#call-papers"
            className="inline-block bg-white text-cyan-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold shadow-lg hover:scale-105 transform duration-200"
          >
            Soumettre un résumé
          </a>
        </div>
      </div>
    </section>
  );
}
