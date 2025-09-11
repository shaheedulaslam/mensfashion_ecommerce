/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export const CardGrid = ({ title, description, logo }: any) => {
  return (
    <>
      <div className="group relative rounded-3xl py-4 px-2 bg-gradient-to-br from-[#F4F7FF] from-700 via-[#F4F7FF] via-700 to-[#FFFFFF] to-950  hover:bg-gray-100 flex items-start justify-center">
        <div className="text-left m-2">
          <h1 className="text-2xl font-semibold my-2 text-[#334C8F]">
            {title}
          </h1>
          <p className="text-[#333759] font-light opacity-80 text-sbase leading-relaxed">
            {description}
          </p>
        </div>
        <div className="absolute -top-12 right-24">{logo}</div>
      </div>
    </>
  );
};
