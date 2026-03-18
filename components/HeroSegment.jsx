'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function HeroSegment() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Image moves up slower than scroll = depth/parallax
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  // Image subtly scales down as you scroll
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  // Text drifts upward faster
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <div ref={ref} className="bg-[#05141d] overflow-hidden" style={{ perspective: '1000px' }}>
      <div className="container px-6 py-16 mx-auto text-center">
        <motion.div
          className="max-w-lg mx-auto"
          style={{ y: textY, opacity: textOpacity }}
          initial={{ opacity: 0, rotateX: 20, y: 40 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h1 className="text-3xl font-semibold text-white lg:text-5xl">
            Your Ideas,<span className="text-orange-700"> Our Community,</span>{' '}
            Real Impact
          </h1>
          <p className="mt-6 text-2xl font-sans text-gray-300">
            Join a movement of young leaders committed to positive change
          </p>
          <Link href="/contact">
            <motion.button
              className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-orange-600 rounded-lg hover:bg-orange-500 lg:mx-0 lg:w-auto focus:outline-none"
              whileHover={{ scale: 1.05, rotateX: -5 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Connect with Us
            </motion.button>
          </Link>
        </motion.div>

        <div className="flex justify-center mt-10" style={{ perspective: '800px' }}>
          <motion.div
            className="relative w-full h-96 lg:w-4/5 rounded-xl overflow-hidden"
            style={{ y: imageY, scale: imageScale }}
            initial={{ opacity: 0, rotateX: 12, y: 60 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
          >
            <Image
              src="/hero.png"
              alt="Igunsin Youth Forum community"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HeroSegment
