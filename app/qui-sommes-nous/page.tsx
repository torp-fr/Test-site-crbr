import Button from '@/app/components/Button'

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-carbon to-graphite text-off-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            CRBR Solutions
          </h1>
          <p className="text-xl text-gray-300">
            Partenaires opérationnels de vos forces de sécurité depuis plus de 20 ans.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-off-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-carbon mb-6">Notre Mission</h2>
              <p className="text-lg text-graphite mb-4">
                Intégrer l'entraînement dans votre unité.
              </p>
              <p className="text-graphite mb-6">
                CRBR Solutions n'est pas un simple vendeur de produits. Nous sommes des partenaires opérationnels qui comprennent vos contraintes terrain et construisent des solutions d'entraînement intégrées, modulaires et adaptées à vos besoins spécifiques.
              </p>
              <p className="text-graphite">
                Pour nous, chaque projet est unique. Nous analysons, concevons et déployons avec vous, pas pour vous.
              </p>
            </div>
            <div className="bg-gradient-to-br from-tactical-orange to-orange-600 rounded-lg h-96 flex items-center justify-center text-off-white">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <p className="text-lg font-semibold">20+ ans d'expertise opérationnel</p>
              </div>
            </div>
          </div>

          {/* Values */}
          <h2 className="text-4xl font-bold text-carbon mb-12 text-center">Nos Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { title: 'Précision', desc: 'Exactitude technique et opérationnel dans chaque détail' },
              { title: 'Pragmatisme', desc: 'Solutions concrètes sans jargon marketing' },
              { title: 'Fiabilité', desc: 'Systèmes et accompagnement à la hauteur de vos attentes' },
              { title: 'Engagement', desc: 'Nous ne disparaissons pas après la signature' },
              { title: 'Discrétion', desc: 'Approche professionnelle, réservée, confidentielle' },
              { title: 'Progression', desc: 'Amélioration continue de vos capacités opérationnel' },
            ].map((value, i) => (
              <div key={i} className="card text-center">
                <h3 className="text-2xl font-bold text-carbon mb-3">{value.title}</h3>
                <p className="text-graphite">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-graphite bg-opacity-5 py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-carbon text-center mb-16">Notre Histoire</h2>

          <div className="space-y-8 md:space-y-12">
            {[
              { year: '2003', title: 'Fondation', desc: 'CRBR Solutions créée par des experts terrain avec 30+ ans d\'expérience cumulée' },
              { year: '2008', title: 'Expansion', desc: 'Premiers déploiements structures modulaires pour forces nationales' },
              { year: '2015', title: 'Innovation', desc: 'Intégration systèmes simulation laser nouvelle génération' },
              { year: '2020', title: 'Accélération', desc: 'Multiplication des solutions mobiles, 50+ projets par an' },
              { year: '2025', title: 'Aujourd\'hui', desc: 'Leader des solutions d\'entraînement opérationnel en France' },
            ].map((milestone, i) => (
              <div key={i} className="flex gap-6 md:gap-12">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-tactical-orange rounded-full flex items-center justify-center text-off-white font-bold text-lg">
                    {milestone.year.slice(-2)}
                  </div>
                  {i < 4 && <div className="w-1 h-20 bg-tactical-orange mt-2"></div>}
                </div>
                <div className="pb-8 flex-1">
                  <h3 className="text-2xl font-bold text-carbon mb-2">{milestone.title}</h3>
                  <p className="text-graphite text-lg">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-off-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-carbon text-center mb-16">Leadership</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { name: 'Nicolas Dupont', title: 'Fondateur & Directeur Général', bio: '25+ ans en entraînement opérationnel, ancien commandant spécialisé' },
              { name: 'Stéphanie Martin', title: 'Directrice Opérations', bio: '18+ ans en gestion projets défense, chef de 50+ déploiements' },
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-lg p-8 border border-steel border-opacity-20">
                <div className="w-20 h-20 bg-gradient-to-br from-graphite to-carbon rounded-full mb-6 flex items-center justify-center text-off-white text-3xl">
                  👤
                </div>
                <h3 className="text-2xl font-bold text-carbon mb-2">{member.name}</h3>
                <p className="text-tactical-orange font-semibold mb-4">{member.title}</p>
                <p className="text-graphite">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-carbon text-off-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { stat: '22', label: 'Années d\'expérience' },
              { stat: '500+', label: 'Projets déployés' },
              { stat: '100K+', label: 'Opérateurs formés' },
              { stat: '60', label: 'Clients institutionnels' },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-5xl md:text-6xl font-bold text-tactical-orange mb-4">{item.stat}</div>
                <p className="text-gray-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-off-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-carbon mb-6">Envie de nous connaître mieux ?</h2>
          <p className="text-lg text-graphite mb-10">
            Parlons de votre projet. Un audit gratuit, sans engagement.
          </p>
          <Button href="/contact" variant="primary" className="px-8 py-4 text-base">
            Nous contacter
          </Button>
        </div>
      </section>
    </div>
  )
}
