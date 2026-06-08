import React from 'react'
import Hero from '../components/layout/Hero'
import HeroTransitionOverlay from '../components/layout/HeroTransitionOverlay'
import Hook from '../components/layout/Hook'

const Home = () => {
  return (
    <div>
        <Hero />
        <HeroTransitionOverlay />

        <Hook />
    </div>
  )
}

export default Home