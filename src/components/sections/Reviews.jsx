'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function Reviews() {
  const reviews = [
    {
      name: 'Priya Sharma',
      role: 'Food Enthusiast',
      text: 'The ambiance, the service, and most importantly, the food—everything is perfect. I\'ve been here three times and each visit gets better.',
      rating: 5,
    },
    {
      name: 'Arjun Kapoor',
      role: 'Regular Customer',
      text: 'Best biryani in Jubilee Hills. The tandoori prawns are absolutely divine. Highly recommend for special occasions.',
      rating: 5,
    },
    {
      name: 'Neha Gupta',
      role: 'Food Blogger',
      text: 'Finally found a café that gets the balance right—modern yet warm, premium yet approachable. Love this place!',
      rating: 5,
    },
  ]

  return (
    <section id="reviews" className="py-20 bg-accent-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-500 font-medium tracking-widest uppercase text-sm mb-4">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-6">What Our Guests Say</h2>
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="fill-primary-500 text-primary-500" />
            ))}
          </div>
          <p className="text-lg text-dark/70">4.8/5 Average Rating • 416+ Reviews</p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary-500 text-primary-500" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-dark/80 mb-6 italic">"{review.text}"</p>

              {/* Author */}
              <div>
                <p className="font-semibold text-dark">{review.name}</p>
                <p className="text-dark/60 text-sm">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
