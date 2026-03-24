'use client'

import { motion } from 'framer-motion'

const details = [
  { icon: '📅', label: 'Dates', value: 'May 21–23, 2026' },
  { icon: '📍', label: 'Location', value: 'Toronto, ON (Canada)' },
  { icon: '🏛️', label: 'Venue', value: 'Bram & Bluma Appel Salon' },
  { icon: '🗺️', label: 'Address', value: '789 Yonge St, Toronto, ON M4W 2M9' },
]

export default function Venue() {
  return (
    <section className="bg-[#05141d] py-24" id="venue" style={{ perspective: '1200px' }}>
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
            Event Location
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-white">
            The <span className="text-orange-500">Venue</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Venue card */}
          <motion.div
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
            initial={{ opacity: 0, x: -50, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.02, borderColor: 'rgba(249,115,22,0.3)' }}
          >
            {/* Map placeholder */}
            <motion.div
              className="relative h-56 bg-gradient-to-br from-[#0a2233] to-[#05141d] flex items-center justify-center overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {/* Decorative map grid */}
              <div className="absolute inset-0 opacity-10">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="absolute border-gray-400 border-dashed"
                    style={{
                      left: `${(i % 4) * 25}%`,
                      top: `${Math.floor(i / 4) * 50}%`,
                      width: '25%',
                      height: '50%',
                      border: '1px solid rgba(255,255,255,0.2)',
                    }}
                  />
                ))}
              </div>
              {/* Pin */}
              <motion.div
                className="relative z-10 flex flex-col items-center"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              >
                <div className="text-5xl">📍</div>
                <div className="mt-2 px-4 py-1.5 bg-orange-600 text-white text-sm font-semibold rounded-full shadow-lg">
                  Bram & Bluma Appel Salon
                </div>
              </motion.div>
            </motion.div>

            {/* Details */}
            <div className="p-8">
              <h3 className="text-white text-2xl font-bold mb-1">Bram & Bluma Appel Salon</h3>
              <p className="text-gray-400 text-sm mb-6">Toronto Reference Library, 2nd floor</p>

              <div className="space-y-3">
                {details.map((d, i) => (
                  <motion.div
                    key={d.label}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i + 0.4 }}
                  >
                    <span className="text-lg shrink-0 mt-0.5">{d.icon}</span>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wide">{d.label}</p>
                      <p className="text-gray-200 text-sm font-medium">{d.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="https://maps.google.com/?q=789+Yonge+St+Toronto+ON"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-500 transition-colors text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                Get Directions →
              </motion.a>
            </div>
          </motion.div>

          {/* Info panels */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            {[
              {
                icon: '✈️',
                title: 'Getting There',
                body: 'The Toronto Reference Library is easily accessible via the TTC subway — take Line 1 to Bloor-Yonge Station. Parking is also available nearby.',
              },
              {
                icon: '🏨',
                title: 'Accommodation',
                body: 'Toronto\'s Bloor-Yorkville neighbourhood offers a range of hotels and short-term rentals within walking distance of the venue.',
              },
              {
                icon: '🇨🇦',
                title: 'About Toronto',
                body: 'Toronto is Canada\'s largest and most multicultural city, making it the ideal host for a forum dedicated to building bridges between Canada and Africa.',
              },
            ].map((panel, i) => (
              <motion.div
                key={panel.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.3 }}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl shrink-0">{panel.icon}</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{panel.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{panel.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
