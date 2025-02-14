import Hero from '../../components/home/Hero'

import Work from '../../components/home/work'
import About from '../../components/home/About'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <About />
      <Work />
    </div>
  )
}
