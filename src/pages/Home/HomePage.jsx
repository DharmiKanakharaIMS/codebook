import Hero from './Hero'
import FeaturedProduct from './FeaturedProduct'
import Testimonial from './Testimonial'
import Faq from './Faq'
import useTitle from '../../hooks/useTitle'

function Home() {
  useTitle('Access Latest Computer Science eBooks')
  return (
    <main>
      <Hero/>
      <FeaturedProduct/>
      <Testimonial/>
      <Faq/>
    </main>
  )
}

export default Home