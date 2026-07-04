'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-500">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Premium Dining?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Visit Amay Bistro today or reserve your table now
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="tel:+917207265544"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-light transition"
            >
              <Phone size={20} />
              Call +91 7207 265544
            </a>
            <a
              href="https://www.google.com/maps/place/Amay+Bistro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition"
            >
              <MapPin size={20} />
              Get Directions
            </a>
          </div>
        </motion.div>

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-white"
        >
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">📍 Location</p>
            <p className="text-white/90 text-sm">4th & 5th Floor, Venkatagiri, Road 10, Jubilee Hills, Hyderabad</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">⏰ Hours</p>
            <p className="text-white/90 text-sm">Lunch: 12:00 PM - 3:30 PM</p>
            <p className="text-white/90 text-sm">Dinner: 7:00 PM - 11:30 PM</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">📞 Contact</p>
            <p className="text-white/90 text-sm">+91 7207 265544</p>
            <p className="text-white/90 text-sm">info@amaybistro.com</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
