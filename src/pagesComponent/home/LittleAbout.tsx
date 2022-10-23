import React from "react";
import { ButtonAdvanced } from "../../components/Buttons";

function LittleAbout() {
  return (
    <div className="mt-24">
      <p className="text-black text-lg font-casual font-medium text-center">
        Dwealthy Space is a registered Nigerian company that provides
        individuals with Life changing opportunities. We lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Duis suscipit elit id metus
        malesuada, ac tempor enim fringilla. Morbi semper mauris ac eros
        iaculis, sit amet hendrerit tellus sodales. Etiam sit amet ipsum lorem.
        Suspendisse potenti. Cras in justo quis arcu mattis aliquet. Maecenas
        malesuada mi et ornare elementum.
      </p>
      <div className="mt-8 flex justify-center items-center">
        <ButtonAdvanced
          text="Start Now"
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
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
          isDark={true}
        />
      </div>
    </div>
  );
}

export default LittleAbout;
