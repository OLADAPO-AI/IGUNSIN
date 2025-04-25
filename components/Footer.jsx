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
                links: ['Programs', 'Community', 'Careers'],
              },
              {
                title: 'Blog',
                links: ['Latest Posts', 'Guides', 'News'],
              },

              {
                title: 'Contact',
                links: ['+234 7063580336', 'info@igunsinyouthforum.org'],
                isTextOnly: true,
              },
            ].map(({ title, links, isTextOnly }) => (
              <div key={title}>
                <h3 className="uppercase text-white font-semibold">{title}</h3>
                {links.map((link, idx) =>
                  isTextOnly ? (
                    <span
                      key={idx}
                      className="block mt-2 text-sm text-gray-400"
                    >
                      {link}
                    </span>
                  ) : (
                    <Link
                      key={idx}
                      href="#"
                      className="block mt-2 text-sm text-gray-400 hover:underline"
                    >
                      {link}
                    </Link>
                  )
                )}
              </div>
            ))}
          </div>
        </div>

        <hr className="my-6 border-t border-gray-700" />

        <p className="text-center text-gray-400">
          © Youth-Of-Igunsin {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
    </footer>
  )
}
