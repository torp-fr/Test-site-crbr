import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-carbon text-off-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Col 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-tactical-orange rounded flex items-center justify-center">
                <span className="text-carbon font-bold text-lg">C</span>
              </div>
              <span className="font-bold text-lg">CRBR Solutions</span>
            </div>
            <p className="text-steel text-sm mb-4">
              Partenaires opérationnels des forces de sécurité.
            </p>
            <p className="text-steel text-sm">
              <span className="font-semibold">Téléphone:</span> +33 (0)1 XX XX XX XX<br />
              <span className="font-semibold">Email:</span> contact@crbr.fr
            </p>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h4 className="font-semibold mb-6 text-off-white">Solutions</h4>
            <ul className="space-y-3 text-sm text-steel">
              <li><Link href="/solutions" className="hover:text-tactical-orange transition">Entraînement opérationnel</Link></li>
              <li><Link href="/solutions" className="hover:text-tactical-orange transition">Structures modulaires</Link></li>
              <li><Link href="/solutions" className="hover:text-tactical-orange transition">Accompagnement</Link></li>
              <li><Link href="/solutions" className="hover:text-tactical-orange transition">Services maintenance</Link></li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="font-semibold mb-6 text-off-white">Ressources</h4>
            <ul className="space-y-3 text-sm text-steel">
              <li><Link href="/blog" className="hover:text-tactical-orange transition">Blog expertise</Link></li>
              <li><Link href="/etudes-de-cas" className="hover:text-tactical-orange transition">Études de cas</Link></li>
              <li><Link href="/secteurs" className="hover:text-tactical-orange transition">Secteurs</Link></li>
              <li><Link href="/contact" className="hover:text-tactical-orange transition">Contact</Link></li>
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div>
            <h4 className="font-semibold mb-6 text-off-white">Légal</h4>
            <ul className="space-y-3 text-sm text-steel">
              <li><Link href="/mentions-legales" className="hover:text-tactical-orange transition">Mentions légales</Link></li>
              <li><Link href="/politique-confidentialite" className="hover:text-tactical-orange transition">Politique confidentialité</Link></li>
              <li><Link href="/cgv" className="hover:text-tactical-orange transition">CGV</Link></li>
              <li><Link href="/rgpd" className="hover:text-tactical-orange transition">RGPD</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-graphite pt-8">
          <p className="text-center text-steel text-sm">
            © 2025 CRBR Solutions. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
