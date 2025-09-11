import React from "react";

export default function ServiceBenefitCard() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        <div
          data-aos="fade-down"
          className=" border-b md:border-r border-[#C7B9FF] pb-10 pr-10 border-dashed hover:bg-[#C7B9FF10] duration-500 bg-white"
        >
          <h1 className="text-[#24ABF5] underline text-2xl  font-bold">IoT</h1>
          <p className="text-[#333759] opacity-80 font-normal leading-loose text-sbase py-4">
            We understand the importance of a well-executed plan. We have
            experienced business analysts who conceptualize innovative app ideas
            to ensure success.
          </p>
        </div>

        <div
          data-aos="fade-down"
          data-aos-delay="50"
          className=" border-b lg:border-r border-[#C7B9FF] pb-10 md:px-10 pt-10 md:pt-0 border-dashed hover:bg-[#C7B9FF10] duration-500 bg-white"
        >
          <h1 className="text-[#33DB9F] text-2xl  font-bold">
            ArtificialIntelligence
          </h1>
          <p className="text-[#333759] opacity-80 font-normal leading-loose  text-sbase py-4">
            We understand the importance of a well-executed plan. We have
            experienced business analysts who conceptualize innovative app ideas
            to ensure success.
          </p>
        </div>

        <div
          data-aos="fade-down"
          data-aos-delay="100"
          className=" border-b lg:border-r-0 md:border-r border-[#C7B9FF] pb-10 lg:px-10 pt-10 lg:pt-0 pr-10 border-dashed hover:bg-[#C7B9FF10] duration-500 bg-white"
        >
          <h1 className="text-[#24ABF5] text-2xl  font-bold">
            Native iOS App Development
          </h1>
          <p className="text-[#333759] opacity-80 font-normal leading-loose  text-sbase py-4">
            We understand the importance of a well-executed plan. We have
            experienced business analysts who conceptualize innovative app ideas
            to ensure success.
          </p>
        </div>

        <div
          data-aos="fade-down"
          data-aos-delay="150"
          className=" lg:border-r border-[#C7B9FF] border-b lg:border-b-0 pt-10 lg:pr-10 md:pl-10 lg:pl-0 border-dashed hover:bg-[#C7B9FF10] duration-500 bg-white"
        >
          <h1 className="text-[#33DB9F] text-2xl  font-bold">
            Enterprise iOS App Development
          </h1>
          <p className="text-[#333759] opacity-80 font-normal leading-loose  text-sbase py-4">
            We understand the importance of a well-executed plan. We have
            experienced business analysts who conceptualize innovative app ideas
            to ensure success.
          </p>
        </div>

        <div
          data-aos="fade-down"
          data-aos-delay="200"
          className=" md:border-r border-b md:border-b-0 border-[#C7B9FF] pt-10 lg:px-10 pr-10 border-dashed hover:bg-[#C7B9FF10] duration-500 bg-white"
        >
          <h1 className="text-[#24ABF5] text-2xl  font-bold">
            Hybrid iOS App Development
          </h1>
          <p className="text-[#333759] opacity-80 font-normal leading-loose  text-sbase py-4">
            We understand the importance of a well-executed plan. We have
            experienced business analysts who conceptualize innovative app ideas
            to ensure success.
          </p>
        </div>

        <div
          data-aos="fade-down"
          data-aos-delay="220"
          className=" lg:border-r border-[#C7B9FF] pt-10 md:px-10 border-dashed hover:bg-[#C7B9FF10] duration-500 bg-white"
        >
          <h1 className="text-[#33DB9F] text-2xl  font-bold">
            iOS App UI/UX Designing
          </h1>
          <p className="text-[#333759] opacity-80 font-normal leading-loose  text-sbase py-4">
            We understand the importance of a well-executed plan. We have
            experienced business analysts who conceptualize innovative app ideas
            to ensure success.
          </p>
        </div>
      </div>
    </>
  );
}
