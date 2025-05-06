import React from 'react'
import Image from 'next/image'

function Comrades() {
  // Member data
  const members = [
    {
      id: 1,
      name: 'Oladapo Falusi',
      role: 'Chairman',
      image: '/images/ola.jpg',
    },
    {
      id: 2,
      name: 'Chibugo Illoh',
      role: 'Vice-Chairman',
      image: '/images/name1.jpg',
    },
    {
      id: 3,
      name: 'Praise Sunday',
      role: 'Secetary',
      image: '/images/name2.jpg',
    },
    {
      id: 4,
      name: 'Emediong Ebong',
      role: 'P.R.O',
      image: '/images/name3.jpg',
    },
    {
      id: 5,
      name: 'Peace Ewor',
      role: 'Finiancial Secretary',
      image: '/images/name4.jpg',
    },
  ]

  return (
    <section className="py-16 bg-[#05141d]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Forum Committee Members
        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {members.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full border-4 border-orange-400 p-1 mb-4">
                <Image
                  width={160}
                  height={160}
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-green-700">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button className="px-8 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
            See More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Comrades
