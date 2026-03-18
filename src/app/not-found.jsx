import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#05141d] flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-8xl font-bold text-orange-500">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
      <p className="mt-4 text-gray-400 text-center max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-500 transition-colors font-medium"
      >
        Back to Home
      </Link>
    </div>
  )
}
