import Image from 'next/image'

function About() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            About <span className=" text-orange-700 ">Our Community,</span>
          </h1>

          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Our forum is a vibrant space dedicated to empowering young voices
            and fostering meaningful connections. Join us in shaping a brighter
            future together.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 mt-8 pb-6 px-6 lg:px-16">
        {/* Card 1: Healthcare Outreach */}
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img
            alt="Healthcare Outreach"
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Healthcare Outreach Initiatives
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Our healthcare outreach programs aim to provide essential health
              services and education to underserved communities, ensuring
              everyone has access to the care they need.
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>

        {/* Card 2: Educational Program */}
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img
            alt="Educational Program"
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Innovative Educational Programs
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              We offer a range of educational programs designed to inspire and
              equip young people with the knowledge and skills they need to
              succeed in a rapidly changing world.
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>

        {/* Card 3: Youth Empowerment */}
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
          <img
            alt="Youth Empowerment"
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Empowering the Next Generation
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
              Our youth empowerment initiatives focus on building confidence,
              leadership skills, and opportunities for young people to make a
              positive impact in their communities.
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default About
