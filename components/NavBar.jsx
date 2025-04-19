'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaArrowRight } from 'react-icons/fa'

export default function NavBar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (href) => pathname === href

  return (
    <nav className="bg-gray-900 text-white shadow-md z-50 relative">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo */}
        <Link href="/" className="block w-20 h-20 relative">
          <Image
            src="/log.png"
            alt="Logo"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={`font-semibold hover:text-orange-700 ${
              isActive('/') ? 'text-orange-700' : ''
            }`}
          >
            Home
          </Link>
          <Link
            href="/event"
            className={`font-semibold hover:text-orange-700 ${
              isActive('/event') ? 'text-orange-700' : ''
            }`}
          >
            Event
          </Link>

          <Link
            href="/about"
            className={`font-semibold hover:text-orange-700 ${
              isActive('/about') ? 'text-orange-700' : ''
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`font-semibold hover:text-orange-700 ${
              isActive('/contact') ? 'text-orange-700' : ''
            }`}
          >
            Contact
          </Link>

          <Link href="/donate">
            <button className="ml-4 px-4 py-2 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-colors flex items-center">
              Donate Now <FaArrowRight className="ml-2" />
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-orange-500"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-gray-900 text-white transition-all duration-300">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`block font-semibold hover:text-orange-700 ${
              isActive('/') ? 'text-orange-700' : ''
            }`}
          >
            Home
          </Link>
          <Link
            href="/event"
            onClick={() => setIsOpen(false)}
            className={`block font-semibold hover:text-orange-700 ${
              isActive('/event') ? 'text-orange-700' : ''
            }`}
          >
            Event
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className={`block font-semibold hover:text-orange-700 ${
              pathname.startsWith('/about') ? 'text-orange-700' : ''
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`block font-semibold hover:text-orange-700 ${
              isActive('/contact') ? 'text-orange-700' : ''
            }`}
          >
            Contact
          </Link>
          <Link
            href="/donate"
            onClick={() => setIsOpen(false)}
            className="block font-semibold hover:text-orange-700"
          >
            Donate Now
          </Link>
        </div>
      )}
    </nav>
  )
}
