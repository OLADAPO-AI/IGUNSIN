'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#05141d]"
      id="hero"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#05141d] via-[#0a2233] to-[#05141d]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/8 rounded-full blur-3xl" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 text-center"
        style={{ y: textY, opacity: textOpacity }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-400 text-sm font-medium mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          May 21–23, 2026 · Toronto, Canada
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40, rotateX: 15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          style={{ perspective: '1000px' }}
        >
          Canada-Africa{' '}
          <span className="text-orange-500">Youth Education</span>{' '}
          Forum
        </motion.h1>

        {/* Venue */}
        <motion.p
          className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          Bram &amp; Bluma Appel Salon (Toronto Reference Library)&nbsp;·&nbsp;May 21–23, 2026
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Link href="#register">
            <motion.span
              className="inline-block px-8 py-3.5 bg-orange-600 text-white font-semibold rounded-full text-base hover:bg-orange-500 transition-colors"
              whileHover={{ scale: 1.06, rotateX: -4 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Register Now
            </motion.span>
          </Link>
          <Link href="#about">
            <motion.span
              className="inline-block px-8 py-3.5 border border-gray-500 text-gray-300 font-semibold rounded-full text-base hover:border-orange-500 hover:text-orange-400 transition-colors"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Learn More
            </motion.span>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-20 flex flex-col items-center gap-2 text-gray-500 text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          />
          <span>Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
