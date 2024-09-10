import React from 'react'
import Banners from './Banners'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import LocationSprade from './LocationSprade'
import AboutUs from './AboutUs'
import Appsection from './Appsection'
import Sponsor from './Sponsor'


function Home() {
  return (
    <div>
        <Banners/>
        <HomeCategory/>
        <CategoryShowCase/>
        <Register/>
        <LocationSprade/>
        <AboutUs/>
        <Appsection/>
        <Sponsor/>
    
    </div>
  )
}

export default Home