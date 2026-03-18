import Link from 'next/link'
import Image from 'next/image'

function HeroSegment() {
  return (
    <div className="bg-[#05141d]">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-semibold text-white lg:text-5xl">
            Your Ideas,<span className="text-orange-700"> Our Community,</span>{' '}
            Real Impact
          </h1>
          <p className="mt-6 text-2xl font-sans text-gray-300">
            Join a movement of young leaders committed to positive change
          </p>
          <Link href="/contact">
            <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-orange-600 rounded-lg hover:bg-orange-500 lg:mx-0 lg:w-auto focus:outline-none">
              Connect with Us
            </button>
          </Link>
        </div>

        <div className="flex justify-center mt-10">
          <div className="relative w-full h-96 lg:w-4/5 rounded-xl overflow-hidden">
            <Image
              src="/hero.png"
              alt="Igunsin Youth Forum community"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSegment
