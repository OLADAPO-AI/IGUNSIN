'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const stats = [
  { value: '3', label: 'Days' },
  { value: '8+', label: 'Speakers' },
  { value: '2', label: 'Continents' },
  { value: '8+', label: 'Partners' },
]

export default function About() {
  return (
    <section className="bg-[#05141d] py-24" id="about" style={{ perspective: '1200px' }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.span
              className="text-orange-500 text-sm font-semibold uppercase tracking-widest"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              About the Forum
            </motion.span>

            <motion.h2
              className="mt-3 text-3xl md:text-4xl font-bold text-white leading-snug"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Bridging Education Across{' '}
              <span className="text-orange-500">Two Continents</span>
            </motion.h2>

            <motion.p
              className="mt-6 text-gray-300 text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              The Canada-Africa Youth Education Forum brings together education
              stakeholders, policymakers, diaspora communities, and young people
              from Canada and Africa. The forum fosters dialogue on the state of
              education and student mobility, exploring strategies to enhance
              opportunities between the two regions.
            </motion.p>

            <motion.p
              className="mt-4 text-gray-400 text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              Participants exchange ideas, experiences, and best practices to
              identify opportunities and challenges in student mobility, research
              networks, and intercultural cooperation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <Link href="#register">
                <motion.span
                  className="mt-8 inline-block px-7 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-500 transition-colors"
                  whileHover={{ scale: 1.05, rotateX: -4 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 280 }}
                >
                  Learn More
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
                initial={{ opacity: 0, scale: 0.85, rotateX: 15 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 * i + 0.3 }}
                whileHover={{ scale: 1.06, borderColor: 'rgba(249,115,22,0.5)' }}
              >
                <p className="text-5xl font-bold text-orange-500">{stat.value}</p>
                <p className="mt-2 text-gray-400 text-sm uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
