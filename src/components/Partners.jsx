'use client'

import { motion } from 'framer-motion'

const partners = [
  { name: 'University of Toronto', abbr: 'UofT', color: 'bg-blue-900 text-white' },
  { name: 'Seneca Polytechnic', abbr: 'Seneca', color: 'bg-red-700 text-white' },
  { name: 'Wilfrid Laurier University', abbr: 'WLU', color: 'bg-yellow-600 text-white' },
  { name: 'Ontario Tech University', abbr: 'OTU', color: 'bg-indigo-700 text-white' },
  { name: 'Conestoga College', abbr: 'CC', color: 'bg-green-700 text-white' },
  { name: 'NorQuest College', abbr: 'NQC', color: 'bg-teal-700 text-white' },
  { name: 'Durham College', abbr: 'DC', color: 'bg-purple-700 text-white' },
  { name: 'St. Lawrence College', abbr: 'SLC', color: 'bg-orange-700 text-white' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateX: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

export default function Partners() {
  return (
    <section className="bg-gray-50 py-24" id="partners" style={{ perspective: '1200px' }}>
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 28, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="text-orange-600 text-sm font-semibold uppercase tracking-widest">
            Our Partners
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Institutions Driving Change
          </h2>
          <p className="mt-3 text-gray-500 max-w-md mx-auto text-sm">
            Leading Canadian universities and colleges partnering to bridge education across two continents.
          </p>
        </motion.div>

        {/* Partner grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05, rotateY: -5 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 cursor-default group"
            >
              {/* Abbreviation badge */}
              <motion.div
                className={`w-16 h-16 rounded-xl ${partner.color} flex items-center justify-center text-sm font-bold mb-4 shadow`}
                whileHover={{ rotate: 6, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {partner.abbr}
              </motion.div>
              <p className="text-gray-700 text-sm font-medium leading-snug group-hover:text-orange-600 transition-colors">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
