import React from "react";
import { ButtonAdvanced } from "../../components/Buttons";
import financialOppurtunitiesData from "../../data/financialOpportunitiesData";

const opportunitiesElements = financialOppurtunitiesData.map((data, index) => {
  return <Opportunities count={index + 1} data={data} />;
});

function Opportunities(props: any) {
  return (
    <div className="w-full flex flex-col justify-start items-start mb-20">
      <p className="mb-12 text-black text-5xl font-title font-bold">
        {<span className="text-blue-600">#{props.count}&nbsp;</span>}{" "}
        {props.data.name}
      </p>
      <div className="flex justify-between items-center">
        <div className="max-w-[400px] max-h-[240px] min-w-[400px] min-h-[240px]  overflow-hidden rounded-md">
          <img src={props.data.image} alt="" className="w-full h-full" />
        </div>

        <div className="flex flex-col ml-8">
          <span className="text-black text-lg font-casual font-medium text-justify">
            {props.data.shortDescription}
          </span>

          <div className="flex justify-start items-center mt-8">
            <ButtonAdvanced
              text="Learn More"
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
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              }
              isDark={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default opportunitiesElements;
