import Button from './components/Button'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-gradient-to-br from-carbon to-graphite flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-40 w-72 h-72 bg-tactical-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-96 h-96 bg-tactical-orange rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center md:text-left md:w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-off-white leading-tight">
                Intégrer l'entraînement opérationnel à votre unité
              </h1>
              <p className="text-lg text-gray-300 max-w-xl">
                Solutions modulaires, pragmatiques, déployables immédiatement pour les forces de sécurité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button href="/solutions" variant="primary">
                  Découvrir les solutions
                </Button>
                <Button href="/contact" variant="secondary" className="border-off-white text-off-white hover:bg-off-white hover:bg-opacity-10">
                  Demander un audit gratuit
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-graphite to-carbon border border-tactical-orange border-opacity-20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <p className="text-off-white opacity-70">Préparation opérationelle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="bg-off-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-carbon text-center mb-16">
            CRBR Solutions en 4 points
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Crédibilité Terrain', desc: '20+ années d\'expérience opérationnel', icon: '🎯' },
              { title: 'Modularité Totale', desc: 'Adaptable à tous les budgets et contextes', icon: '🧩' },
              { title: 'Déploiement Rapide', desc: 'Opérationnel en quelques semaines', icon: '🚀' },
              { title: 'Accompagnement', desc: 'Support technique et optimisation continus', icon: '👥' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-8 border border-steel border-opacity-20 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-carbon mb-2">{item.title}</h3>
                <p className="text-graphite text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-graphite bg-opacity-5 py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-carbon text-center mb-4">
            Nos Domaines d'Excellence
          </h2>
          <p className="text-center text-graphite mb-16 max-w-2xl mx-auto">
            Solutions intégrées pour chaque besoin opérationnel
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Entraînement Opérationnel',
                icon: '💼',
                items: ['Simulation laser sans munitions', 'Scénarios immersifs décisionnels', 'CQB tactique intégré', 'Adaptation progressive'],
                link: '/solutions'
              },
              {
                title: 'Structures Modulaires',
                icon: '🏗️',
                items: ['Shooting houses modulaires', 'Zones CQB mobiles', 'Installations customisées', 'Configuration flexible'],
                link: '/solutions'
              },
              {
                title: 'Accompagnement Complet',
                icon: '🤝',
                items: ['Audit terrain gratuit', 'Formation personnalisée', 'Support technique 24/5', 'Optimisation continue'],
                link: '/contact'
              },
            ].map((solution, i) => (
              <div key={i} className="card">
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-carbon mb-6">{solution.title}</h3>
                <ul className="space-y-3 mb-8">
                  {solution.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-tactical-orange font-bold mt-1">•</span>
                      <span className="text-graphite">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button href={solution.link} variant="tertiary">
                  En savoir plus →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROCHE */}
      <section className="bg-off-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-carbon text-center mb-16">
            Notre Approche
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {[
              {
                step: 1,
                title: 'COMPRÉHENSION',
                desc: 'Audit des besoins, contraintes, budget, calendrier',
                duration: '2-4 semaines',
              },
              {
                step: 2,
                title: 'CONCEPTION',
                desc: 'Design de la solution adaptée, validation client',
                duration: '4-8 semaines',
              },
              {
                step: 3,
                title: 'DÉPLOIEMENT',
                desc: 'Intégration, formation, suivi, optimisation',
                duration: 'Ongoing',
              },
            ].map((phase, i) => (
              <div key={i}>
                <div className="bg-white rounded-lg p-8 border border-steel border-opacity-20 h-full">
                  <div className="w-12 h-12 rounded-full bg-tactical-orange text-off-white flex items-center justify-center font-bold text-lg mb-6">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-carbon mb-3">{phase.title}</h3>
                  <p className="text-graphite text-sm mb-6">{phase.desc}</p>
                  <p className="text-tactical-orange text-xs font-semibold">{phase.duration}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:flex justify-center py-6">
                    <div className="text-2xl text-tactical-orange">↓</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTEURS */}
      <section className="bg-graphite bg-opacity-5 py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-carbon text-center mb-16">
            Nos Clients Sectoriels
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: 'Police Municipale', icon: '🚔' },
              { name: 'Police Nationale', icon: '🛡️' },
              { name: 'Gendarmerie', icon: '⚔️' },
              { name: 'Forces Armées', icon: '🎖️' },
              { name: 'Administration Pénitentiaire', icon: '🔐' },
              { name: 'Unités Spécialisées', icon: '🎯' },
            ].map((sector, i) => (
              <Link key={i} href={`/secteurs/${sector.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="bg-white rounded-lg p-8 border border-steel border-opacity-20 hover:shadow-lg hover:border-tactical-orange transition-all duration-300 cursor-pointer text-center">
                  <div className="text-4xl mb-4">{sector.icon}</div>
                  <h3 className="font-semibold text-carbon">{sector.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="bg-off-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-carbon mb-6">
                Cas d'Étude : Police Municipale
              </h2>
              <p className="text-graphite mb-6">
                Une Police Municipale de région parisienne avait besoin de moderniser son entraînement opérationnel avec des contraintes budgétaires strictes et un espace limité en caserne.
              </p>
              <p className="text-graphite mb-8">
                <span className="font-semibold">Notre solution :</span> Déploiement d'une zone CQB mobile modulaire, intégration simulation laser, formation complète. Résultat : 150 agents formés en 8 semaines, progression mesurée de 35%.
              </p>
              <Button href="/etudes-de-cas" variant="primary">
                Lire l'étude complète
              </Button>
            </div>
            <div className="bg-gradient-to-br from-graphite to-carbon rounded-lg overflow-hidden h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-off-white">Cas d'usage réel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-carbon py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-off-white mb-6">
            Prêt à transformer votre entraînement ?
          </h2>
          <p className="text-gray-300 text-lg mb-12">
            Parlons de vos besoins opérationnel. Un audit gratuit, sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" className="px-8 py-4 text-base">
              Demander un audit gratuit
            </Button>
            <Button href="tel:+33123456789" variant="secondary" className="border-off-white text-off-white px-8 py-4 text-base">
              Nous appeler
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
