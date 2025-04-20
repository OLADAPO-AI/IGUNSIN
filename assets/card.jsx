import Link from 'next/link'

export default function Card({ link }) {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
      <img
        alt="Healthcare Outreach"
        src={`/event/event1.png`}
        className="h-56 w-full object-cover"
      />

      <div className="p-4 sm:p-6">
        <Link href="#">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            Healthcare Outreach Initiatives
          </h3>
        </Link>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
          Our healthcare outreach programs aim to provide essential health
          services and education to underserved communities, ensuring everyone
          has access to the care they need.
        </p>

        <Link
          href={link}
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
  )
}
