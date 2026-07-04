'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function About() {
  const features = [
    { icon: '🍽️', title: 'Premium Cuisine', description: 'Authentic Indian, Asian, and modern dishes' },
    { icon: '🌟', title: 'Exceptional Service', description: 'Warm, attentive, and personalized experience' },
    { icon: '✨', title: 'Elegant Ambiance', description: 'Modern interiors with comfortable seating' },
    { icon: '🎉', title: 'Perfect for All', description: 'Family dinners, dates, celebrations, and meetings' },
  ]

  return (
    <section id="about" className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-500 font-medium tracking-widest uppercase text-sm mb-4">About Us</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-6">More Than Just a Café</h2>
          <p className="text-lg text-dark/70 max-w-3xl mx-auto">
            Amay Bistro is your destination for premium dining in Jubilee Hills. We combine authentic flavors with modern sensibilities, creating an experience that stays with you long after your visit.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-accent-50 hover:bg-accent-100 transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-serif font-bold text-lg mb-2 text-dark">{feature.title}</h3>
              <p className="text-dark/70 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="p-8 bg-primary-50 rounded-lg">
            <h3 className="font-serif font-bold text-2xl text-primary-600 mb-2">4.5★</h3>
            <p className="text-dark/70">Rated by our customers across all platforms</p>
          </div>
          <div className="p-8 bg-primary-50 rounded-lg">
            <h3 className="font-serif font-bold text-2xl text-primary-600 mb-2">1000+</h3>
            <p className="text-dark/70">Happy customers every month</p>
          </div>
          <div className="p-8 bg-primary-50 rounded-lg">
            <h3 className="font-serif font-bold text-2xl text-primary-600 mb-2">Daily</h3>
            <p className="text-dark/70">Open 12 PM - 11:30 PM for your convenience</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
