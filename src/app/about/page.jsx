import Image from 'next/image'
import Link from 'next/link'

const values = [
  {
    title: 'Education',
    description:
      'We believe education is the foundation of lasting change. Our programs equip youth with knowledge and skills to thrive in a rapidly changing world.',
    icon: '📚',
  },
  {
    title: 'Innovation',
    description:
      'We encourage creative thinking and problem-solving, empowering young people to develop solutions that address real community challenges.',
    icon: '💡',
  },
  {
    title: 'Community',
    description:
      'We foster a spirit of togetherness, collaboration, and mutual support — building bonds that strengthen our community from the ground up.',
    icon: '🤝',
  },
]

export default function About() {
  return (
    <main className="bg-[#05141d] text-white">
      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          About <span className="text-orange-500">Igunsin Youth Forum</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
          Igunsin Youth Forum is a community-based organisation rooted in
          Igunsin, Akure North, Ondo State, Nigeria. We are dedicated to
          empowering young people through education, innovation, and community
          development.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#092f46] py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              To create a vibrant platform where young people in Igunsin can
              grow, collaborate, and lead. We run programs that address
              healthcare access, educational gaps, environmental awareness, and
              youth leadership — turning ideas into impact.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-300 leading-relaxed">
              A future where every young person in our community has the
              resources, mentorship, and opportunity to reach their full
              potential and contribute meaningfully to society.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          What We Stand For
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-[#092f46] rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <span className="text-4xl">{value.icon}</span>
              <h3 className="text-xl font-semibold mt-4 mb-2 text-orange-400">
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h2>
        <p className="text-orange-100 mb-6">
          Join us and be part of the change in our community.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-colors"
        >
          Get Involved
        </Link>
      </section>
    </main>
  )
}
