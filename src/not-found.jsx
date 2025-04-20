'use client'
import { useRouter } from 'next/navigation'

function Notfound() {
  const router = useRouter()
  const handleBack = () => {
    router.push('/')
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#05141d] text-white text-center p-6">
      <h1 className="text-3xl font-bold mb-4">🚧 Not Found 🚧</h1>
      <p className="text-lg opacity-80 mb-6">
        The requested resource could not be found!
      </p>
      <button
        className="font-semibold px-6 py-3  shadow-md  text-center text-white capitalize bg-orange-600 rounded-lg hover:bg-orange-500 lg:mx-0 lg:w-auto focus:outline-none transition duration-300"
        onClick={handleBack}
      >
        🔙 Back to Home
      </button>
    </div>
  )
}

export default Notfound
