import HeroSegment from 'components/HeroSegment'
import About from 'components/About'

import Comrades from 'components/Comrades'
import Contact from 'components/Contact'
import Footer from 'components/Footer'

function page() {
  return (
    <div>
      <section>
        <HeroSegment />
        <About />

        <Comrades />
        <Contact />
        <Footer />
      </section>
    </div>
  )
}

export default page
