import React from 'react'
import Intro from './Intro'
import opportunitiesElements from './Opportunities'

function MainOppurtunityPage() {
  return (
    <div className='my-20'>
      <Intro />
      <div className='mt-24'>
        {opportunitiesElements}
      </div>
    </div>
  )
}

export default MainOppurtunityPage