'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function Comrades() {
  const members = [
    {
      id: 1,
      name: 'Oladapo Falusi',
      role: 'Chairman',
      image: '/images/ola.jpg',
    },
    {
      id: 2,
      name: 'Chibugo Illoh',
      role: 'Vice-Chairman',
      image: '/images/name1.jpg',
    },
    {
      id: 3,
      name: 'Praise Sunday',
      role: 'Secretary',
      image: '/images/name2.jpg',
    },
    {
      id: 4,
      name: 'Emediong Ebong',
      role: 'P.R.O',
      image: '/images/name3.jpg',
    },
    {
      id: 5,
      name: 'Peace Ewor',
      role: 'Financial Secretary',
      image: '/images/name4.jpg',
    },
  ]

  return (
    <section className="py-16 bg-[#05141d]" style={{ perspective: '1200px' }}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, rotateX: 20, y: 30 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Forum Committee Members
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              className="flex flex-col items-center"
              initial={{ opacity: 0, rotateX: 30, y: 50 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              whileHover={{ rotateY: 10, scale: 1.08 }}
            >
              <div className="w-40 h-40 rounded-full border-4 border-orange-400 p-1 mb-4">
                <Image
                  width={160}
                  height={160}
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-green-700">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.button
            className="px-8 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
            whileHover={{ scale: 1.05, rotateX: -5 }}
            whileTap={{ scale: 0.97 }}
          >
            See More
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Comrades
