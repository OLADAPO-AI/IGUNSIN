// components/Footer.tsx
import Image from 'next/image'
import Link from 'next/link'
import SocialIcons from './social-links'

export default function Footer() {
  return (
    <footer className="bg-[#05141d] ">
      <div className="container mx-auto px-6 py-8">
        <div className="lg:flex">
          <div className="w-full lg:w-2/5 mb-6 lg:mb-0">
            <Link href="/" className="inline-block">
              <Image
                src="/log.png"
                alt="Logo"
                width={100}
                height={100}
                style={{ objectFit: 'contain' }}
                priority
              />
            </Link>

            <div className="mt-6 flex space-x-4">
              <SocialIcons />
            </div>
          </div>

          <div className="lg:flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'About',
                links: ['Company', 'Community', 'Careers'],
              },
              {
                title: 'Blog',
                links: ['Tech', 'Music', 'Videos'],
              },
              {
                title: 'Products',
                links: ['Mega Cloud', 'Aperion UI', 'Meraki UI'],
              },
              {
                title: 'Contact',
                links: ['+1 526 654 8965', 'example@email.com'],
                isTextOnly: true,
              },
            ].map(({ title, links, isTextOnly }) => (
              <div key={title}>
                <h3 className="uppercase text-gray-700 dark:text-white font-semibold">
                  {title}
                </h3>
                {links.map((link, idx) =>
                  isTextOnly ? (
                    <span
                      key={idx}
                      className="block mt-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      {link}
                    </span>
                  ) : (
                    <Link
                      key={idx}
                      href="#"
                      className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                    >
                      {link}
                    </Link>
                  )
                )}
              </div>
            ))}
          </div>
        </div>

        <hr className="my-6 border-t border-gray-200 dark:border-gray-700" />

        <p className="text-center text-gray-500 dark:text-gray-400">
          © Youth-Of-Igunsin {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
    </footer>
  )
}
