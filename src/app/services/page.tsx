"use client";

import Consultation from "@/components/Consultation";
import Container from "@/components/Container";
import ServiceBenefitCard from "@/components/ServiceBenefitCard";
import { ServiceItMarkerzLogo } from "@/components/SvgComponents";
import React from "react";

export default function ServicePage() {
  return (
    <>
      <section className="">
        <Container className="p-11">
          <div className="lg:grid grid-cols-7 flex flex-col">
            <div className="col-span-3">
              <h1
                data-aos="fade-right"
                className="text-4xl md:text-5xl text-[#020A55] font-extrabold !leading-tight"
              >
                iOS App Development Company
              </h1>
              <p
                data-aos="fade-right"
                data-aos-delay="100"
                className="text-lg md:text-xl lg:text-2xl font-semibold text-[#334C8F] mt-6 leading-relaxed"
              >
                Delivering Result-Driven iOS App Development Services
              </p>
              <p className="text-[#333759] opacity-80 font-normal leading-relaxed text-sm text-sbase py-4">
                we build next-generation iOS apps designed to meet the highest
                quality standards. We utilize cutting-edge iOS app development
                services to deliver top-notch products. Our skilled iOS app
                developers possess extensive knowledge in creating
                feature-packed, reliable,& scalable iOS app development
                solutions for all Apple devices.
              </p>
              <button
                type="button"
                className="hover:text-[#415CA7] gap-2 hover:bg-[#F2F5F8] shadow-[0_4px_6px_-1px_#762AFF] text-white bg-[#762AFF] font-medium rounded-full text-sm px-6 py-4 text-center mr-2 mb-2"
              >
                Talk to our experts
              </button>
            </div>
            <div className="col-end-8 col-span-2 mt-0 lg:-mt-20">
              <div className="relative -bottom-20 -left-10">
                <svg
                  width="50"
                  height="full"
                  viewBox="0 0 61 123"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.9"
                    d="M0 0C16.1782 -1.94504e-07 31.6938 6.47944 43.1335 18.0129C54.5732 29.5464 61 45.1892 61 61.5C61 77.8108 54.5732 93.4536 43.1335 104.987C31.6938 116.521 16.1782 123 1.06656e-05 123L0 0Z"
                    fill="#24ABF5"
                  />
                </svg>
              </div>
              <div className="group lg:w-80 w-full rounded-xl p-6 duration-300 py-4 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] bg-white">
                <div>
                  <ul className="my-3">
                    <li className="text-sm my-4 opacity-80 font-medium gap-2 flex-wrap text-[#415CA7] inline-flex items-center justify-center">
                      <ServiceItMarkerzLogo />
                      iPhone App Development
                    </li>
                    <li className="text-sm my-4 opacity-80 font-medium gap-2 flex-wrap text-[#415CA7] inline-flex items-center justify-center">
                      <ServiceItMarkerzLogo />
                      iPad App Development
                    </li>
                    <li className="text-sm my-4 opacity-80 font-medium gap-2 flex-wrap text-[#415CA7] inline-flex items-center justify-center">
                      <ServiceItMarkerzLogo />
                      iPhone App Development
                    </li>
                    <li className="text-sm my-4 opacity-80 font-medium gap-2 flex-wrap text-[#415CA7] inline-flex items-center justify-center">
                      <ServiceItMarkerzLogo />
                      Apple Watch App Development
                    </li>
                    <li className="text-sm my-4 opacity-80 font-medium gap-2 flex-wrap text-[#415CA7] inline-flex items-center justify-center">
                      <ServiceItMarkerzLogo />
                      Apple TV App Development
                    </li>
                    <li className="text-sm my-4 opacity-80 font-medium gap-2 flex-wrap text-[#415CA7] inline-flex items-center justify-center">
                      <ServiceItMarkerzLogo />
                      iOS UI/UX Designing
                    </li>
                    <li className="text-sm my-4 opacity-80 font-medium gap-2 flex-wrap text-[#415CA7] inline-flex items-center justify-center">
                      <ServiceItMarkerzLogo />
                      iOS Wearable App Development
                    </li>
                  </ul>
                </div>
                <div className="flex items-end justify-end lg:-mr-16 -mr-8 -mb-8">
                  <svg
                    width="80"
                    height="46"
                    viewBox="0 0 91 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.9"
                      d="M91 46C91 33.8 86.2063 22.0998 77.6734 13.4731C69.1405 4.84642 57.5674 9.21071e-07 45.5 0C33.4327 -9.21071e-07 21.8596 4.84641 13.3266 13.4731C4.79374 22.0998 1.82212e-06 33.8 0 46L91 46Z"
                      fill="#4AEBB1"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="lg:py-12 py-4">
        <Container>
          <h1 className="font-bold text-4xl lg:text-5xl text-[#020A55]">
            Benefits with our app development services
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className="text-lg md:text-xl lg:text-2xl font-normal text-[#415CA7] my-4"
          >
            Lorem ipsum dolor sit amet consectetur. Ac non vulputate eget lectus
            duis rhoncus faucibus blandit.
          </p>
          <div className="mt-0 lg:mt-14">
            <ServiceBenefitCard />
          </div>
        </Container>
      </section>

      <section className="mt-2 lg:mt-20">
        <Consultation />
      </section>
    </>
  );
}
