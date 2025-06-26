import React from 'react'
import HeroSection from '../sections/HeroSection'
import TopSection from '../sections/TopSection'
import FeaturedSection from '../sections/FeaturedSection'

const LandingPage = () => {
  return (
    <div className='w-screen min-h-screen '>
        
    <HeroSection/>
    <TopSection/>
    <FeaturedSection/>
    </div>
  )
}

export default LandingPage