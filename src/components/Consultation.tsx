/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Consultation() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-6 bg-[#F2F5F8] py-10 md:py-5">
        <div className="">
          <img
            src="images/rocket.png"
            className="h-full w-full object-cover mt-0 lg:mt-5"
            alt="rocket"
          />
        </div>
        <div className="col-span-4 items-center justify-center">
          <p className="font-black text-[#020A55] text-4xl lg:text-[38px] text-center mt-10">
            Fuel your business growth.
          </p>
          <p className="text-lg md:text-xl lg:text-base font-normal text-[#415CA7] mt-5 text-center tracking-[2.5px]">
            Experience business elevation through the discovery of our
            cutting-edge digital solutions.
          </p>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="rounded-full py-3 md:py-3 px-8 md:px-8 text-sm md:text-base leading-6 md:leading-7 tracking-[0.5px] font-normal shadow-[0px 3px 4px -1px #762AFF] bg-[#762AFF] hover:bg-[#D9D0FF] hover:text-primary text-white mt-4 md:mt-7 duration-200"
            >
              Request Free Consultation
            </button>
          </div>
        </div>
        <div className="">
          <img
            src="images/puzzle.png"
            className="h-full w-full object-cover"
            alt="puzzle"
          />
        </div>
      </div>
    </>
  );
}
