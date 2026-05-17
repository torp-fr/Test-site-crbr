import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'CRBR Solutions - Entraînement Opérationnel Premium',
  description: 'Solutions modulaires d\'entraînement opérationnel pour forces de sécurité. Simulation laser, CQB, structures modulaires. Audit gratuit.',
  keywords: ['entraînement opérationnel', 'police', 'gendarmerie', 'simulation laser', 'CQB'],
  openGraph: {
    title: 'CRBR Solutions - Entraînement Opérationnel',
    description: 'Solutions d\'entraînement adaptées aux forces de sécurité',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="preload" as="style" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-off-white">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
