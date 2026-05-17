'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-off-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-tactical-orange rounded flex items-center justify-center">
            <span className="text-off-white font-bold text-lg">C</span>
          </div>
          <span className="font-bold text-carbon hidden md:inline">CRBR</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/solutions" className="text-graphite hover:text-tactical-orange transition">
            Solutions
          </Link>
          <Link href="/secteurs" className="text-graphite hover:text-tactical-orange transition">
            Secteurs
          </Link>
          <Link href="/qui-sommes-nous" className="text-graphite hover:text-tactical-orange transition">
            À Propos
          </Link>
          <Link href="/contact" className="btn-primary">
            Nous contacter
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={`h-0.5 w-6 bg-carbon transition ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`h-0.5 w-6 bg-carbon transition ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`h-0.5 w-6 bg-carbon transition ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-20 left-0 right-0 bg-off-white border-b border-gray-200 md:hidden">
            <div className="px-4 py-4 space-y-4">
              <Link href="/solutions" className="block text-graphite hover:text-tactical-orange">
                Solutions
              </Link>
              <Link href="/secteurs" className="block text-graphite hover:text-tactical-orange">
                Secteurs
              </Link>
              <Link href="/qui-sommes-nous" className="block text-graphite hover:text-tactical-orange">
                À Propos
              </Link>
              <Link href="/contact" className="block btn-primary">
                Nous contacter
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
