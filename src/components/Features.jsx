'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '🤝',
    title: 'Networking',
    description: 'Connect with international education leaders, policymakers, and changemakers from Canada and Africa.',
  },
  {
    icon: '🍽️',
    title: 'Food & Drinks',
    description: 'Complimentary breakfast and lunch served throughout the three-day forum.',
  },
  {
    icon: '🎤',
    title: 'Great Speakers',
    description: 'Inspiring keynotes and panels from top-tier ministers, academics, and innovators.',
  },
  {
    icon: '💡',
    title: 'Enriching Experience',
    description: 'Informative panel discussions exploring student mobility, research networks, and intercultural cooperation.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 12 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
}

export default function Features() {
  return (
    <section className="bg-white py-20" id="features" style={{ perspective: '1200px' }}>
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="text-orange-600 text-sm font-semibold uppercase tracking-widest">
            What to Expect
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            An Unmissable Experience
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.03, rotateY: -4 }}
              className="group bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 cursor-default"
            >
              <motion.div
                className="text-5xl mb-5"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
