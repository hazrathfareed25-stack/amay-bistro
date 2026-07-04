'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Gallery() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1504674900968-a85b05acb041?w=600&h=400&fit=crop',
      title: 'Premium Coffee Service',
    },
    {
      url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop',
      title: 'Gourmet Plating',
    },
    {
      url: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=600&h=400&fit=crop',
      title: 'Modern Interior',
    },
    {
      url: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&h=400&fit=crop',
      title: 'Culinary Artistry',
    },
    {
      url: 'https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=600&h=400&fit=crop',
      title: 'Fine Dining Setup',
    },
    {
      url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop',
      title: 'Delicious Desserts',
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-500 font-medium tracking-widest uppercase text-sm mb-4">Visual Journey</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-6">Gallery</h2>
          <p className="text-lg text-dark/70 max-w-3xl mx-auto">
            Step into our world through images that capture the essence of Amay Bistro.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-64 md:h-80 rounded-lg overflow-hidden group cursor-pointer shadow-lg"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-end p-6">
                <h3 className="font-serif text-white text-xl font-bold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
