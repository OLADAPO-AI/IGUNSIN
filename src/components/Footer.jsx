'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const popularLinks = [
  { href: '#about', label: 'About the Event' },
  { href: '#program', label: 'Program' },
  { href: '#speakers', label: 'Speakers' },
  { href: '#register', label: 'Register' },
]

const eventDetails = [
  'May 21–23, 2026',
  'Bram & Bluma Appel Salon',
  'Toronto, ON (Canada)',
]

const socials = [
  { label: 'Twitter / X', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[#05141d] border-t border-white/10" id="contact">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link href="/" className="text-3xl font-bold text-orange-500 tracking-wider">
                CAYEF
              </Link>
              <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xs">
                Canada-Africa Youth Education Forum — bridging educational
                opportunities between Canada and Africa.
              </p>
              {/* Socials */}
              <div className="mt-6 flex gap-3">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-orange-600 hover:text-white transition-colors text-xs font-bold"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {s.label[0]}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Popular Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold uppercase text-xs tracking-widest mb-5">
              Popular Links
            </h4>
            <ul className="space-y-3">
              {popularLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-semibold uppercase text-xs tracking-widest mb-5">
              Event Details
            </h4>
            <ul className="space-y-3">
              {eventDetails.map((detail) => (
                <li key={detail} className="text-gray-400 text-sm">
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-white font-semibold uppercase text-xs tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@cayef.org"
                  className="text-gray-400 text-sm hover:text-orange-400 transition-colors"
                >
                  info@cayef.org
                </a>
              </li>
              <li className="text-gray-400 text-sm">Toronto, Ontario, Canada</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>CAYEF — Copyright © {new Date().getFullYear()}</p>
          <p className="text-gray-600 text-xs">
            Canada-Africa Youth Education Forum
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
