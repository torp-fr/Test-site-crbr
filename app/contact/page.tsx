'use client'

import { useState } from 'react'
import Button from '@/app/components/Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sector: '',
    need: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In real app, send to backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-carbon to-graphite text-off-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Commençons !
          </h1>
          <p className="text-xl text-gray-300">
            Parlons de vos besoins opérationnels. Un audit gratuit, sans engagement.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="bg-off-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: 'Audit Gratuit',
                icon: '🎯',
                desc: '2-4 semaines d\'analyse terrain approfondie',
                detail: 'Diagnostic complet + recommandations + devis'
              },
              {
                title: 'Démonstration',
                icon: '📹',
                desc: 'Voir nos solutions en action',
                detail: 'Sur site ou vidéo 30 minutes avec nos experts'
              },
              {
                title: 'Contact Direct',
                icon: '📞',
                desc: 'Parlons directement',
                detail: 'Téléphone, email ou visio. Réponse 24h-48h'
              },
            ].map((option, i) => (
              <div key={i} className="bg-white rounded-lg p-8 border border-steel border-opacity-20 text-center hover:shadow-lg transition-all">
                <div className="text-5xl mb-4">{option.icon}</div>
                <h3 className="text-2xl font-bold text-carbon mb-3">{option.title}</h3>
                <p className="text-graphite mb-4">{option.desc}</p>
                <p className="text-sm text-steel">{option.detail}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-graphite bg-opacity-5 rounded-lg p-8 md:p-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-carbon mb-8">Formulaire de Contact</h2>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">✓</div>
                <h3 className="text-xl font-bold text-green-900 mb-2">Message envoyé !</h3>
                <p className="text-green-700">
                  Merci. Nous reviendrons vers vous dans les 24-48 heures.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-carbon mb-2">Nom</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded border border-steel border-opacity-30 focus:outline-none focus:border-tactical-orange transition"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-carbon mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded border border-steel border-opacity-30 focus:outline-none focus:border-tactical-orange transition"
                      placeholder="votre@email.fr"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-carbon mb-2">Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border border-steel border-opacity-30 focus:outline-none focus:border-tactical-orange transition"
                      placeholder="+33 (0)1 XX XX XX XX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-carbon mb-2">Secteur</label>
                    <select
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded border border-steel border-opacity-30 focus:outline-none focus:border-tactical-orange transition"
                    >
                      <option value="">-- Sélectionner --</option>
                      <option value="pm">Police Municipale</option>
                      <option value="pn">Police Nationale</option>
                      <option value="gend">Gendarmerie</option>
                      <option value="army">Forces Armées</option>
                      <option value="prison">Admin Pénitentiaire</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-carbon mb-2">Type de besoin</label>
                  <select
                    name="need"
                    value={formData.need}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded border border-steel border-opacity-30 focus:outline-none focus:border-tactical-orange transition"
                  >
                    <option value="">-- Sélectionner --</option>
                    <option value="training">Entraînement opérationnel</option>
                    <option value="structures">Structures modulaires</option>
                    <option value="audit">Audit terrain</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-carbon mb-2">Votre message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded border border-steel border-opacity-30 focus:outline-none focus:border-tactical-orange transition resize-none"
                    placeholder="Détails de votre demande..."
                  />
                </div>

                <div className="flex items-start gap-3 text-xs text-steel">
                  <input type="checkbox" required className="mt-1" />
                  <p>
                    J'accepte la <a href="#" className="text-tactical-orange hover:underline">politique de confidentialité</a> et je consens à recevoir des communications commerciales.
                  </p>
                </div>

                <Button type="submit" variant="primary" className="w-full py-4 text-base font-semibold">
                  Envoyer ma demande
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Direct Contact Info */}
      <section className="bg-carbon text-off-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Nous Contacter Directement</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Téléphone</h3>
              <a href="tel:+33123456789" className="text-2xl text-tactical-orange font-bold hover:opacity-80">
                +33 (0)1 XX XX XX XX
              </a>
              <p className="text-gray-400 mt-4">Lundi - Vendredi, 9h-18h (GMT+1)</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <a href="mailto:contact@crbr.fr" className="text-2xl text-tactical-orange font-bold hover:opacity-80">
                contact@crbr.fr
              </a>
              <p className="text-gray-400 mt-4">Réponse garantie dans les 24-48h</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
