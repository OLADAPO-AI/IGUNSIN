'use client'

import { motion } from 'framer-motion'

const speakers = [
  {
    name: 'Dr. Amina Diallo',
    role: 'Minister of Education',
    org: 'Republic of Senegal',
    initials: 'AD',
    color: 'from-orange-600 to-orange-400',
  },
  {
    name: 'Prof. James Okafor',
    role: 'Director of International Relations',
    org: 'University of Toronto',
    initials: 'JO',
    color: 'from-blue-700 to-blue-500',
  },
  {
    name: 'Hon. Grace Mensah',
    role: 'Deputy Minister of Trade',
    org: 'Republic of Ghana',
    initials: 'GM',
    color: 'from-green-700 to-green-500',
  },
  {
    name: 'David Thompson',
    role: 'CEO',
    org: 'Global Education Initiative',
    initials: 'DT',
    color: 'from-purple-700 to-purple-500',
  },
  {
    name: 'Dr. Fatima Nkosi',
    role: 'Immigration Policy Advisor',
    org: '',
    initials: 'FN',
    color: 'from-rose-700 to-rose-500',
  },
  {
    name: 'Michael Adebayo',
    role: 'Managing Partner',
    org: 'Africa Ventures',
    initials: 'MA',
    color: 'from-amber-700 to-amber-500',
  },
  {
    name: 'Sarah Kimathi',
    role: 'Founder',
    org: 'EduBridge Africa',
    initials: 'SK',
    color: 'from-teal-700 to-teal-500',
  },
  {
    name: 'Robert Leclerc',
    role: 'Special Envoy for International Cooperation',
    org: '',
    initials: 'RL',
    color: 'from-indigo-700 to-indigo-500',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
}

export default function Speakers() {
  return (
    <section className="bg-white py-24" id="speakers" style={{ perspective: '1300px' }}>
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30, rotateX: 12 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="text-orange-600 text-sm font-semibold uppercase tracking-widest">
            Featured Voices
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
            Our <span className="text-orange-600">Speakers</span>
          </h2>
        </motion.div>

        {/* Speaker grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {speakers.map((speaker) => (
            <motion.div
              key={speaker.name}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.04, rotateY: -4 }}
              className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:shadow-lg hover:border-orange-200 transition-all duration-300 cursor-default"
            >
              {/* Avatar */}
              <motion.div
                className={`w-20 h-20 rounded-full bg-gradient-to-br ${speaker.color} flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 shadow-md`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {speaker.initials}
              </motion.div>

              <h3 className="text-gray-900 font-bold text-sm leading-snug group-hover:text-orange-600 transition-colors">
                {speaker.name}
              </h3>
              <p className="mt-1 text-gray-500 text-xs leading-relaxed">
                {speaker.role}
                {speaker.org && (
                  <>
                    <br />
                    <span className="text-gray-400">{speaker.org}</span>
                  </>
                )}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
