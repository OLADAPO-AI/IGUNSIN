import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Igunsin Youth Forum',
  description:
    'Igunsin Youth Forum is a community-based organization dedicated to empowering youth through education, innovation, and community development.',
  openGraph: {
    title: 'Igunsin Youth Forum',
    description:
      'Igunsin Youth Forum is a community-based organization dedicated to empowering youth through education, innovation, and community development.',
    url: 'https://igunsinyouthforum.org',
    siteName: 'Igunsin Youth Forum',

    type: 'website',
  },
  description: 'Community website',
  keywords: 'Oladapo, Commiunity',
  authors: [{ name: 'Oladapo' }],
  creator: 'Oladapo',
  publisher: 'Oladapo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
