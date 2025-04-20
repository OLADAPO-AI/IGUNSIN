import { FaRedditAlien, FaFacebookF, FaGithub } from 'react-icons/fa'
import Link from 'next/link'

const socialLinks = [
  { name: 'Reddit', icon: <FaRedditAlien /> },
  { name: 'Facebook', icon: <FaFacebookF /> },
  { name: 'Github', icon: <FaGithub /> },
]

export default function SocialIcons() {
  return (
    <div className="mt-6 flex space-x-4">
      {socialLinks.map(({ name, icon }) => (
        <Link
          href="#"
          key={name}
          aria-label={name}
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
        >
          <span className="sr-only">{name}</span>
          <span className="h-5 w-5">{icon}</span>
        </Link>
      ))}
    </div>
  )
}
