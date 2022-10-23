import React from "react";

const infoBannerItemsData = [
  {
    svgPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-14 h-14 text-gray-200"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
    itemTitle: "Our Location",
    itemText: "The Buckingham Palace",
  },
  {
    svgPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-14 h-14 text-gray-200"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),

    itemTitle: "Our Working Times",
    itemText: <span>Weekdays: 8A.M. - 5P.M.<br/>Saturday: 10A.M. - 3P.M.<br/>Sunday: Closed</span>,
  },
  {
    svgPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-14 h-14 text-gray-200"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
        />
      </svg>
    ),
    itemTitle: "Our Hotline",
    itemText: "+000 0000 000",
  },
];

const infoBannerElements = infoBannerItemsData.map((i) => {
  return <InfoBannerItems itemData={i} />;
});

function InfoBanner() {
  return (
    <div className="w-full mt-32 bg-gradient-to-br from-black to-gray-800 rounded-lg py-8">
      <p className="text-white text-xl font-title font-bold text-center">
        ~ Home of Life Changing Financial Oppurtunites ~
      </p>
      <div className="grid justify-center items-start grid-cols-3">
        {infoBannerElements}
      </div>
    </div>
  );
}

export default InfoBanner;

function InfoBannerItems({
  itemData,
}: {
  itemData: { svgPath: any; itemTitle: string; itemText: any };
}) {
  return (
    <div className="flex flex-col justify-center items-center m-8">
      {itemData.svgPath}
      <p className="text-white text-xl font-title font-bold mt-2 text-center">
        {itemData.itemTitle}
      </p>
      <p className="text-gray-200 text-base font-casual font-normal mt-2 text-center">
        {itemData.itemText}
      </p>
    </div>
  );
}
