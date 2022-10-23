import React from 'react'

function WorkingHours() {
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="flex justify-center items-center w-full">
        <p className="my-6 text-black text-5xl font-title font-bold">
          Our {<span className="text-blue-600">Working Hours</span>}.
        </p>
      </div>

      <span className="text-black text-lg font-casual font-bold text-center mt-8">
       Monday - Friday: <span className='font-medium'>8A.M. - 5P.M.</span>
      </span>

      <span className="text-black text-lg font-casual font-bold text-center mt-4">
       Saturday: <span className='font-medium'>10P.M. - 3P.M.</span>
      </span>

      <span className="text-black text-lg font-casual font-bold text-center mt-4">
       Sunday: <span className='font-medium'>Closed</span>
      </span>
    </div>
  )
}

export default WorkingHours