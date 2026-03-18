import { cards } from 'dummy-data'
import { notFound } from 'next/navigation'
import Image from 'next/image'

export default async function EventDetailsPage({ params }) {
  const { slug } = await params
  const event = cards.find((card) => card.slug === slug)

  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#092f46] py-10 px-4">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        <div className="relative w-full h-64">
          <Image
            src={event.image}
            alt={event.alt}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {event.title}
          </h3>
          <p className="text-gray-600">{event.blog}</p>
        </div>
      </article>
    </div>
  )
}
