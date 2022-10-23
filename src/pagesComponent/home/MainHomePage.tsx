import React from 'react'
import InfoBanner from '../../components/InfoBanner'
import Intro from './Intro'
import LittleAbout from './LittleAbout'
import WhatWeDo from './WhatWeDo'
import WhyChooseUs from './WhyChooseUs'

function MainHomePage() {
  return (
    <div className='mt-20'>
      <Intro />
      <LittleAbout />
      <WhatWeDo />
      <WhyChooseUs />
      <InfoBanner />
    </div>
  )
}

export default MainHomePage