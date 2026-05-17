import Button from '@/app/components/Button'

export default function Solutions() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-carbon to-graphite text-off-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Solutions d'Entraînement Opérationnel
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Simulation sans munitions réelles, impact réel. Solutions modulaires adaptées à votre contexte opérationnel.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-off-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-carbon mb-16">Nos Trois Domaines</h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Simulation Laser',
                desc: 'Sans munitions réelles, avec impacts réalistes et feedback immédiat',
                features: [
                  'Système laser professionnel',
                  'Feedback immédiat en temps réel',
                  'Statistiques d\'engagement détaillées',
                  'Intégration vidéo et analyse',
                  'Équipements de qualité militaire'
                ]
              },
              {
                title: 'CQB Tactique',
                desc: 'Combat rapproché, décision dans l\'urgence avec scénarios réalistes',
                features: [
                  'Configurations modulaires infinies',
                  'Obstacles multiples réalistes',
                  'Simulation de menace progressive',
                  'Protocoles d\'engagement adaptés',
                  'Formations spécialisées'
                ]
              },
              {
                title: 'Scénarios Immersifs',
                desc: 'Décision opérationnel dans le contexte réel avec montée progressive',
                features: [
                  'Multiples scénarios tactiques',
                  'Montée progressive de la complexité',
                  'Évaluation décisionnelle en temps réel',
                  'Debrief structuré et feedback',
                  'Adaptation aux besoins spécifiques'
                ]
              },
            ].map((solution, i) => (
              <div key={i} className="bg-white rounded-lg p-10 border border-steel border-opacity-20 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-carbon mb-4">{solution.title}</h3>
                <p className="text-graphite mb-8">{solution.desc}</p>
                <ul className="space-y-3 mb-8">
                  {solution.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-tactical-orange font-bold mt-1">✓</span>
                      <span className="text-graphite text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button href="/contact" variant="primary">
                  En découvrir plus
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="bg-graphite bg-opacity-5 py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-carbon mb-12">Pourquoi Ça Fonctionne</h2>

          <div className="space-y-8">
            {[
              {
                title: 'Réalisme Opérationnel',
                desc: 'Simulation fidèle des conditions réelles sans les risques, pour une préparation authentique.'
              },
              {
                title: 'Mesurabilité',
                desc: 'Suivi précis de la progression de chaque opérateur avec données objectives et KPIs.'
              },
              {
                title: 'Modularité',
                desc: 'S\'adapte à tous les budgets, contextes et calendriers. Vrai sur-mesure opérationnel.'
              },
              {
                title: 'Accompagnement',
                desc: 'Nos experts restent à vos côtés pour optimisation continue et évolution future.'
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-8 border-l-4 border-tactical-orange">
                <h3 className="text-xl font-bold text-carbon mb-3">{item.title}</h3>
                <p className="text-graphite">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-carbon py-20 md:py-28 px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-off-white mb-6">
            Prêt à explorer nos solutions ?
          </h2>
          <p className="text-gray-300 mb-10 text-lg">
            Contactez-nous pour un audit gratuit de vos besoins opérationnel.
          </p>
          <Button href="/contact" variant="primary" className="px-8 py-4 text-base">
            Demander un audit
          </Button>
        </div>
      </section>
    </div>
  )
}
