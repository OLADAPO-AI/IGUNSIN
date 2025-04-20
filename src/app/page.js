import HeroSegment from 'components/HeroSegment'
import About from 'components/About'

import Comrades from 'components/Comrades'
import Contact from 'components/Contact'

function page() {
  return (
    <div>
      <section>
        <HeroSegment />
        <About />

        <Comrades />
        <Contact />
      </section>
    </div>
  )
}

export default page
