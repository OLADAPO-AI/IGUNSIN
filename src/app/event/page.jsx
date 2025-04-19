import Card from 'assets/card'

export default function Event() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-600 text-white">
      <h1 className="text-4xl font-bold mb-4">Events</h1>
      <p className="text-lg text-center max-w-2xl px-4">
        Join us for our upcoming events and activities. We have a variety of
        events planned, including workshops, seminars, and community gatherings.
        Stay tuned for more details!
      </p>
      <div className=" flex flex-row justify-between items-center align-middle">
        <Card link="/event/healthcare-outreach" />
        <Card link="/event/educational-programs" />
      </div>
    </div>
  )
}
