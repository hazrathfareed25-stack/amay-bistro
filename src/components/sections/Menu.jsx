'use client'

import { motion } from 'framer-motion'

export default function Menu() {
  const menuCategories = [
    {
      name: 'Appetizers',
      items: [
        { name: 'Tandoori Prawns', description: 'Succulent prawns marinated in aromatic spices', price: '₹450' },
        { name: 'Chicken Tikka', description: 'Tender chicken pieces with yogurt and spices', price: '₹380' },
        { name: 'Paneer Tikka', description: 'Grilled cottage cheese with Indian spices', price: '₹320' },
      ],
    },
    {
      name: 'Main Course',
      items: [
        { name: 'Butter Chicken Masala', description: 'Classic creamy curry with tender chicken', price: '₹520' },
        { name: 'Hyderabadi Biryani', description: 'Aromatic rice with succulent meat', price: '₹480' },
        { name: 'Paneer Butter Masala', description: 'Soft paneer in rich tomato-based gravy', price: '₹420' },
      ],
    },
    {
      name: 'Beverages',
      items: [
        { name: 'Specialty Coffee', description: 'Freshly brewed with premium beans', price: '₹180' },
        { name: 'Herbal Tea', description: 'Soothing blend of aromatic herbs', price: '₹150' },
        { name: 'Fresh Juices', description: 'Seasonal fresh fruit juices', price: '₹200' },
      ],
    },
  ]

  return (
    <section id="menu" className="py-20 bg-accent-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-500 font-medium tracking-widest uppercase text-sm mb-4">Culinary Excellence</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-6">Our Menu</h2>
          <p className="text-lg text-dark/70 max-w-3xl mx-auto">
            Carefully crafted dishes that blend traditional recipes with modern techniques.
          </p>
        </motion.div>

        {/* Menu Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {menuCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-serif text-2xl font-bold text-dark border-b-2 border-primary-500 pb-3">
                {category.name}
              </h3>
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-dark group-hover:text-primary-500 transition">
                      {item.name}
                    </h4>
                    <span className="text-primary-500 font-bold whitespace-nowrap ml-4">{item.price}</span>
                  </div>
                  <p className="text-dark/60 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="btn btn-primary text-lg">
            View Full Menu
          </button>
        </motion.div>
      </div>
    </section>
  )
}
