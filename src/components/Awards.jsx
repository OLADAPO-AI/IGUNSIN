'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const categories = [
  { icon: '🏆', title: 'Youth Leadership', description: 'Honouring young leaders driving transformational change in education.' },
  { icon: '🏛️', title: 'Institutional Innovation', description: 'Celebrating institutions pioneering new models of cross-continental learning.' },
  { icon: '📋', title: 'Policy Impact', description: 'Recognising policymakers whose work has advanced student mobility and cooperation.' },
]

export default function Awards() {
  return (
    <section className="bg-white py-24" id="awards" style={{ perspective: '1200px' }}>
      <div className="container mx-auto px-6">

        {/* New badge */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-semibold">
            <span className="text-base">★</span> New This Year
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30, rotateX: 12 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Global <span className="text-orange-600">Awards</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-gray-500 text-base leading-relaxed">
            An awards ceremony and gala dinner celebrating leaders who have
            fostered meaningful change in the education ecosystem across Canada
            and Africa. Recognizing excellence in youth leadership, institutional
            innovation, and policy impact.
          </p>
        </motion.div>

        {/* Award categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="relative border border-gray-100 rounded-2xl p-8 bg-gray-50 text-center overflow-hidden group"
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: i * 0.15 }}
              whileHover={{ y: -6, scale: 1.03 }}
            >
              {/* Decorative corner */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-orange-500/5 rounded-bl-full"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.4 }}
              />

              <motion.div
                className="text-5xl mb-5"
                whileHover={{ rotate: 10, scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {cat.icon}
              </motion.div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                {cat.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{cat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="#register">
            <motion.span
              className="inline-block px-8 py-3.5 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-500 transition-colors"
              whileHover={{ scale: 1.06, rotateX: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 280 }}
            >
              Learn More
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
