import { cards } from 'dummy-data'
import Link from 'next/link' // Ensure you're importing Link from 'next/link'

export default function Event() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#05141d] text-white">
      <h1 className="text-4xl font-bold mb-4 mt-4">Events</h1>
      <p className="text-lg text-center max-w-2xl px-4">
        Join us for our upcoming events and activities. We have a variety of
        events planned, including workshops, seminars, and community gatherings.
        Stay tuned for more details!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
        {cards.map((card) => (
          <article
            key={card.id}
            className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25"
          >
            <img
              alt={card.title}
              src={card.image}
              className="h-56 w-full object-cover"
            />
            <div className="p-4 sm:p-6">
              <Link href={card.link}>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white hover:underline">
                  {card.title}
                </h3>
              </Link>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                {card.description}
              </p>
              <Link
                href={`/event/${card.slug}`}
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-600"
              >
                Find out more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
