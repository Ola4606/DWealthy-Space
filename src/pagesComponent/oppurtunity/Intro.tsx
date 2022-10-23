import React from 'react'
import { ButtonAdvanced } from '../../components/Buttons'
import Logo from "../../images/logo.png"

function Intro() {
  return (
   <div className='flex justify-between items-start'>
     <div className='flex flex-col justify-center items-start w-[550px]'>
        <p className='text-lg text-blue-600 font-bold underline underline-offset-2 decoration-gray-600'>Opportunities</p>
        <p className='my-6 text-black text-5xl font-bold'>Here Are The Amazing Opportunities We Offer:</p>
        <div className='my-8'>
        <ButtonAdvanced
            text="Have Questions"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
            }
            isDark={true}
          />
        </div>
    </div>

    {/* <div className='bg-red-500 w-[440px] h-24'>

    </div> */}

    <img src={Logo} alt="Company Logo" className='w-[440px] rounded-lg' />
    
   </div>
  )
}

export default Intro