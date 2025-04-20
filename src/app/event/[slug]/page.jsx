import { cards } from 'dummy-data'
import Notfound from '@/not-found'
export default function EventDetailsPage({ params }) {
  const eventSlug = params.slug
  const newEventSlug = cards.find((card) => card.slug === eventSlug)
  if (!newEventSlug) {
    return (
      <div>
        <Notfound />
      </div>
    )
  }

  return (
    <div>
      <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        <img
          src={newEventSlug.image}
          alt={newEventSlug.alt}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            <a href={newEventSlug.link} className="hover:underline">
              {newEventSlug.title}
            </a>
          </h3>
        </div>
      </article>
      <div>
        <p className="text-white mt-6 p-5">{newEventSlug.blog}</p>
      </div>
    </div>
  )
}
