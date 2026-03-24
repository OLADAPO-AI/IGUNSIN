'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const days = [
  {
    day: 'Day 1',
    date: 'May 21, 2026',
    sessions: [
      { time: '9:00 AM', title: 'Opening Ceremony & Welcome Address', type: 'Plenary' },
      { time: '10:30 AM', title: 'Keynote: The Future of Canada-Africa Education Partnerships', type: 'Keynote' },
      { time: '12:00 PM', title: 'Complimentary Lunch & Networking', type: 'Networking' },
      { time: '2:00 PM', title: 'Panel: Student Mobility — Barriers & Opportunities', type: 'Panel' },
      { time: '4:00 PM', title: 'Breakout Sessions', type: 'Workshop' },
    ],
  },
  {
    day: 'Day 2',
    date: 'May 22, 2026',
    sessions: [
      { time: '9:00 AM', title: 'Keynote: Research Networks & Intercultural Cooperation', type: 'Keynote' },
      { time: '10:30 AM', title: 'Panel: Policy Impact in Cross-Continental Education', type: 'Panel' },
      { time: '12:00 PM', title: 'Complimentary Lunch & Networking', type: 'Networking' },
      { time: '2:00 PM', title: 'Ministerial Dialogue Session', type: 'Plenary' },
      { time: '7:00 PM', title: 'Global Awards Ceremony & Gala Dinner', type: 'Gala' },
    ],
  },
  {
    day: 'Day 3',
    date: 'May 23, 2026',
    sessions: [
      { time: '9:00 AM', title: 'Youth Leadership Showcase', type: 'Plenary' },
      { time: '10:30 AM', title: 'Institutional Innovation Forum', type: 'Panel' },
      { time: '12:00 PM', title: 'Complimentary Lunch & Networking', type: 'Networking' },
      { time: '2:00 PM', title: 'Closing Keynote & Communiqué', type: 'Keynote' },
      { time: '3:30 PM', title: 'Closing Ceremony & Farewell Networking', type: 'Networking' },
    ],
  },
]

const typeColors = {
  Keynote: 'bg-orange-100 text-orange-700',
  Panel: 'bg-blue-100 text-blue-700',
  Networking: 'bg-green-100 text-green-700',
  Workshop: 'bg-purple-100 text-purple-700',
  Plenary: 'bg-gray-100 text-gray-700',
  Gala: 'bg-yellow-100 text-yellow-700',
}

export default function Program() {
  return (
    <section className="bg-[#05141d] py-24" id="program" style={{ perspective: '1400px' }}>
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30, rotateX: 12 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
            Event Schedule
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-white">
            Event <span className="text-orange-500">Program</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-gray-400 text-base">
            Keynotes, plenary sessions, an awards ceremony, gala dinner, and
            networking opportunities over three days.
          </p>
        </motion.div>

        {/* Day columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {days.map((dayData, di) => (
            <motion.div
              key={dayData.day}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 50, rotateY: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: di * 0.15 }}
              whileHover={{ scale: 1.02, borderColor: 'rgba(249,115,22,0.3)' }}
            >
              {/* Day header */}
              <div className="bg-orange-600 px-6 py-4">
                <p className="text-orange-100 text-xs font-semibold uppercase tracking-widest">
                  {dayData.day}
                </p>
                <p className="text-white font-bold text-lg">{dayData.date}</p>
              </div>

              {/* Sessions */}
              <div className="divide-y divide-white/5">
                {dayData.sessions.map((session, si) => (
                  <motion.div
                    key={si}
                    className="px-6 py-4 hover:bg-white/5 transition-colors"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: di * 0.1 + si * 0.06 }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-orange-400 text-xs font-medium mb-1">{session.time}</p>
                        <p className="text-white text-sm font-medium leading-snug">{session.title}</p>
                      </div>
                      <span className={`shrink-0 mt-0.5 px-2 py-0.5 rounded-full text-xs font-medium ${typeColors[session.type]}`}>
                        {session.type}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="#register">
            <motion.span
              className="inline-block px-8 py-3.5 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-500 transition-colors"
              whileHover={{ scale: 1.06, rotateX: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 280 }}
            >
              View the Program
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
