import React from "react";

type ButtonPropType = {
  text: string;
  icon: any;
  isDark: boolean;
};

export function ButtonAdvanced({ text, icon, isDark }: ButtonPropType) {
  return (
    <div className= { isDark ? "bg-gradient-to-br from-black to-gray-800 text-white rounded-md py-2 px-5 flex justify-center items-center text-base font-casual font-semibold transform duration-300 ease-in-out hover:scale-105 cursor-pointer": "bg-gradient-to-br from-white to-gray-400 text-black rounded-md py-2 px-5 flex justify-center items-center text-base font-casual font-semibold transform duration-300 ease-in-out hover:scale-105 cursor-pointer"}>
      <p>{text}</p>
      {icon}
    </div>
  );
}
