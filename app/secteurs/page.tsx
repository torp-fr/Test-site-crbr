import Button from '@/app/components/Button'
import Link from 'next/link'

export default function Sectors() {
  const sectors = [
    {
      name: 'Police Municipale',
      slug: 'police-municipale',
      icon: '🚔',
      desc: 'Solutions adaptées aux contraintes budgétaires et d\'espace des PM'
    },
    {
      name: 'Police Nationale',
      slug: 'police-nationale',
      icon: '🛡️',
      desc: 'Entraînement spécialisé pour unités nationales'
    },
    {
      name: 'Gendarmerie',
      slug: 'gendarmerie',
      icon: '⚔️',
      desc: 'Modules adaptés aux besoins gendarmerie'
    },
    {
      name: 'Forces Armées',
      slug: 'forces-armees',
      icon: '🎖️',
      desc: 'Solutions déploiement opérationnel complète'
    },
    {
      name: 'Administration Pénitentiaire',
      slug: 'administration-penitentiaire',
      icon: '🔐',
      desc: 'Entraînement gestion crise en milieu fermé'
    },
    {
      name: 'Unités Spécialisées',
      slug: 'unites-specialisees',
      icon: '🎯',
      desc: 'Solutions haut niveau pour unités spécialisées'
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-carbon to-graphite text-off-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Secteurs d'Intervention
          </h1>
          <p className="text-xl text-gray-300">
            Solutions adaptées à chaque contexte opérationnel
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="bg-off-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, i) => (
              <Link key={i} href={`/secteurs/${sector.slug}`}>
                <div className="bg-white rounded-lg p-8 border border-steel border-opacity-20 hover:shadow-xl hover:border-tactical-orange transition-all duration-300 h-full cursor-pointer">
                  <div className="text-5xl mb-4">{sector.icon}</div>
                  <h3 className="text-2xl font-bold text-carbon mb-3">{sector.name}</h3>
                  <p className="text-graphite">{sector.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sectored Approach */}
      <section className="bg-graphite bg-opacity-5 py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-carbon mb-12 text-center">
            Pourquoi Une Approche Sectorielle
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-carbon mb-4">Chaque secteur a des besoins uniques</h3>
              <p className="text-graphite mb-6">
                Contraintes budgétaires, problématiques terrain, configurations d'espace, calendriers de déploiement : chaque secteur a sa propre réalité opérationnel.
              </p>
              <p className="text-graphite">
                Nous avons développé une expertise spécifique pour répondre aux défis précis de chacun.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-carbon mb-4">Solutions vraiment adaptées</h3>
              <p className="text-graphite mb-6">
                Pas de catalogue standard. Nos solutions sont pensées FROM le contexte de votre secteur, pour votre secteur.
              </p>
              <p className="text-graphite">
                Cela signifie : meilleur ROI, déploiement plus rapide, adoption plus forte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-carbon py-20 md:py-28 px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-off-white mb-6">
            Votre secteur vous intéresse ?
          </h2>
          <p className="text-gray-300 mb-10 text-lg">
            Explorez les solutions dédiées à votre contexte opérationnel.
          </p>
          <Button href="/contact" variant="primary" className="px-8 py-4 text-base">
            Nous contacter
          </Button>
        </div>
      </section>
    </div>
  )
}
