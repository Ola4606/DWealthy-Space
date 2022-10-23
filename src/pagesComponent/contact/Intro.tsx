import React from "react";
import { ButtonAdvanced } from "../../components/Buttons";
import Contact from "../../images/contact.png";

function Intro() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col justify-center items-start w-[550px]">
        <p className="text-lg text-blue-600 font-title font-bold underline underline-offset-2 decoration-gray-600">
          Contact
        </p>
        <p className="my-6 text-black text-5xl font-title font-bold">
          Contact {<span className="text-blue-600">Us</span>}.
        </p>
        <p className="text-gray-700 text-3xl font-title font-bold">
          Do you have questions? Do you need some clarifications? Or you need a one-on-one explanation of our services? Contact Us, we will get back to you as soon as possible.
        </p>
        <div className="my-8">
        <ButtonAdvanced
          text="Contact Us"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-white ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          }
          isDark={true}
        />
        </div>
      </div>

      {/* <div className='bg-red-500 w-[440px] h-24'>

    </div> */}

      <img src={Contact} alt="Contact" className="w-[340px] rounded-lg" />
    </div>
  );
}

export default Intro;
