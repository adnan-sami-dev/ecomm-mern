import React from 'react'
import Hero from '../components/layout/Hero'
import HeroTransitionOverlay from '../components/layout/HeroTransitionOverlay'
import Hook from '../components/layout/Hook'
import Collections from '../components/products/Collections'

const Home = () => {
  return (
    <div>
        <Hero />
        <HeroTransitionOverlay />

        <Hook />

        <Collections />
    </div>
  )
}

export default Home