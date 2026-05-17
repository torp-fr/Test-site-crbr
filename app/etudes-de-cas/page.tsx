import Button from '@/app/components/Button'

export default function CaseStudies() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-carbon to-graphite text-off-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Études de Cas
          </h1>
          <p className="text-xl text-gray-300">
            Projets réels, résultats mesurables, accompagnement complet
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-off-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {[
              {
                title: 'Police Municipale Région Parisienne',
                sector: 'Police Municipale',
                challenge: 'Moderniser l\'entraînement avec budget limité et espace contraint',
                solution: 'Zone CQB mobile modulaire + simulation laser intégrée',
                results: '150 agents formés • 8 semaines • Progression +35%',
              },
              {
                title: 'Gendarmerie de Borderie',
                sector: 'Gendarmerie',
                challenge: 'Formation décisionnelle pour unités de montagne',
                solution: 'Scénarios immersifs adaptés terrain montagneux',
                results: '300 gendarmes • Déploiement mobile • Satisfaction 92%',
              },
              {
                title: 'Administration Pénitentiaire - Prison Régionale',
                sector: 'Admin Pénitentiaire',
                challenge: 'Préparation équipes gestion crise en milieu fermé',
                solution: 'Simulation haute tension, protocoles d\'engagement adaptés',
                results: '200 agents • Réduction incidents +40% • ROI 3 mois',
              },
            ].map((study, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden border border-steel border-opacity-20 hover:shadow-xl transition-all">
                <div className="bg-gradient-to-r from-tactical-orange to-orange-600 h-2"></div>
                <div className="p-8 md:p-12">
                  <div className="flex items-start justify-between gap-6 mb-6">
                    <div>
                      <p className="text-tactical-orange font-semibold text-sm mb-2">{study.sector}</p>
                      <h3 className="text-3xl font-bold text-carbon">{study.title}</h3>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold text-carbon mb-2 text-sm">DÉFI</h4>
                      <p className="text-graphite">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-carbon mb-2 text-sm">SOLUTION</h4>
                      <p className="text-graphite">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-carbon mb-2 text-sm">RÉSULTATS</h4>
                      <p className="text-graphite">{study.results}</p>
                    </div>
                  </div>

                  <div className="border-t border-steel border-opacity-20 pt-8">
                    <Button href="/contact" variant="secondary">
                      En savoir plus sur ce projet
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-carbon py-20 md:py-28 px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-off-white mb-6">
            Un projet similaire au vôtre ?
          </h2>
          <p className="text-gray-300 mb-10 text-lg">
            Parlons de comment nous pouvons reproduire ce succès pour votre unité.
          </p>
          <Button href="/contact" variant="primary" className="px-8 py-4 text-base">
            Demander un audit gratuit
          </Button>
        </div>
      </section>
    </div>
  )
}
