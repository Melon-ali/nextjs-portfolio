import Hero from '../../components/home/Hero'

import Work from '../../components/home/work'
import About from './about/About'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Work />
      <About />
    </div>
  )
}
