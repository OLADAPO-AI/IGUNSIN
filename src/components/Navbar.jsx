'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#awards', label: 'Awards' },
  { href: '#program', label: 'Program' },
  { href: '#speakers', label: 'Speakers' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      className="bg-[#05141d] text-white shadow-lg z-50 sticky top-0"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/" className="text-2xl font-bold tracking-wider text-orange-500">
            CAYEF
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i + 0.3 }}
            >
              <Link
                href={link.href}
                className="font-medium text-gray-300 hover:text-orange-400 transition-colors text-sm uppercase tracking-wide"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <Link href="#register">
              <motion.span
                className="ml-2 px-5 py-2 bg-orange-600 text-white rounded-full text-sm font-semibold hover:bg-orange-500 transition-colors inline-block"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
              >
                Register
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-orange-500"
          whileTap={{ scale: 0.85 }}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden px-6 pb-5 space-y-3 bg-[#05141d] overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {[...navLinks, { href: '#register', label: 'Register' }].map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-medium text-gray-300 hover:text-orange-400 transition-colors py-1"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
