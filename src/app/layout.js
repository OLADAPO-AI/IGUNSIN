import './globals.css'

export const metadata = {
  title: 'CAYEF — Canada-Africa Youth Education Forum',
  description:
    'The Canada-Africa Youth Education Forum brings together education stakeholders, policymakers, diaspora communities, and young people from Canada and Africa.',
  openGraph: {
    title: 'CAYEF — Canada-Africa Youth Education Forum',
    description:
      'The Canada-Africa Youth Education Forum brings together education stakeholders, policymakers, diaspora communities, and young people from Canada and Africa.',
    url: 'https://cayef.org',
    siteName: 'CAYEF',
    type: 'website',
  },
  keywords: 'Canada, Africa, Youth, Education, Forum, CAYEF, Toronto, 2026',
  authors: [{ name: 'CAYEF' }],
  creator: 'CAYEF',
  publisher: 'CAYEF',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  )
}
