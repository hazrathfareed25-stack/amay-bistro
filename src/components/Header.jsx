'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MapPin } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-light shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <span className="font-serif text-xl font-bold text-dark hidden sm:block">Amay Bistro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#menu" className="text-dark hover:text-primary-500 transition">
              Menu
            </Link>
            <Link href="#about" className="text-dark hover:text-primary-500 transition">
              About
            </Link>
            <Link href="#gallery" className="text-dark hover:text-primary-500 transition">
              Gallery
            </Link>
            <Link href="#contact" className="text-dark hover:text-primary-500 transition">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+917207265544"
              className="flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium"
            >
              <Phone size={20} />
              <span className="hidden lg:inline">+91 7207 265544</span>
            </a>
            <button className="btn btn-primary">
              Reserve
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-dark"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-6 space-y-4">
            <Link href="#menu" className="block text-dark hover:text-primary-500 transition">
              Menu
            </Link>
            <Link href="#about" className="block text-dark hover:text-primary-500 transition">
              About
            </Link>
            <Link href="#gallery" className="block text-dark hover:text-primary-500 transition">
              Gallery
            </Link>
            <Link href="#contact" className="block text-dark hover:text-primary-500 transition">
              Contact
            </Link>
            <a href="tel:+917207265544" className="block text-primary-500 font-medium">
              +91 7207 265544
            </a>
            <button className="btn btn-primary w-full">
              Reserve
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
