"use client";

/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/Container";
import { ProductCard } from "@/components/ProductCard";
import { ProductCard2, ShowMoreArrow } from "@/components/SvgComponents";
import React from "react";
import prod1 from "../../../public/images/prod1.svg";
import prod2 from "../../../public/images/prod2.svg";
import prod3 from "../../../public/images/prod3.svg";
import prod4 from "../../../public/images/prod4.svg";
import prod5 from "../../../public/images/prod5.svg";
import prod6 from "../../../public/images/prod6.svg";
import prod7 from "../../../public/images/prod7.svg";
import prod8 from "../../../public/images/prod8.svg";
import prod9 from "../../../public/images/prod9.svg";
import Consultation from "@/components/Consultation";

const PRODUCTS = [
  {
    id: "1",
    thumb: prod1,
    color: "#F6B940",
    title: "",
    description: "",
  },
  {
    id: "2",
    thumb: prod2,
    color: "#E64A43",
    title: "",
    description: "",
  },
  {
    id: "3",
    thumb: prod3,
    color: "#1FB56A",
    title: "",
    description: "",
  },
  {
    id: "4",
    thumb: prod4,
    color: "#406DF6",
    title: "",
    description: "",
  },
  {
    id: "5",
    thumb: prod5,
    color: "#E64A43",
    title: "",
    description: "",
  },
  {
    id: "6",
    thumb: prod6,
    color: "#6F57E1",
    title: "",
    description: "",
  },
  {
    id: "7",
    thumb: prod7,
    color: "#2566BC",
    title: "",
    description: "",
  },
  {
    id: "8",
    thumb: prod8,
    color: "#1F1F1F",
    title: "",
    description: "",
  },
  {
    id: "9",
    thumb: prod9,
    color: "#FAD448",
    title: "",
    description: "",
  },
];

export default function Portfolio() {
  return (
    <>
      <section>
        <Container>
          <div
            className="text-center my-20 md:my-10 w-full"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <p className="text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark-indigo from-30% via-dark-blue-lotus via-50% to-helio-purple to-70%">
              Mobile app and Web <br />
              Development Portfolio
            </p>
            <p className="text-lg md:text-xl lg:text-2xl font-normal text-[#415CA7] mt-5 leading-relaxed">
              Get your project done!Whatever your business need or budget, we'll
              help get done.
            </p>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="flex items-center justify-center my-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:flex md:items-center md:justify-center">
              <button className="py-3 lg:py-4 px-0 lg:px-3 bg-[#F5F7FF] text-sm font-medium hover:bg-[#762AFF] hover:text-white text-[#415CA7] rounded-full">
                Web Development
              </button>
              <button className="py-4 px-3 lg:px-3 bg-[#F5F7FF] text-sm font-medium hover:bg-[#762AFF] hover:text-white text-[#415CA7] rounded-full">
                Mobile App Development
              </button>
              <button className="py-4 px-8 bg-[#F5F7FF] text-sm font-medium hover:bg-[#762AFF] hover:text-white text-[#415CA7] rounded-full">
                Others
              </button>
            </div>
          </div>
          <div className="grid gap-5 lg:gap-8 lg:mb-0 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {PRODUCTS?.map((product, index) => (
              <ProductCard
                index={index}
                key={product?.id}
                image={product?.thumb}
                cardLogo={<ProductCard2 color={product?.color} />}
                bgcolors={`bg-[${product?.color}]`}
              />
            ))}
          </div>
          <div className="flex justify-center items-center my-12">
            <button
              type="button"
              className="text-[#415CA7] gap-2 bg-[#F2F5F8] hover:text-white hover:bg-[#762AFF] font-medium rounded-full text-sm px-5 py-3 text-center inline-flex items-center mr-2 mb-2"
            >
              Show more
            <ShowMoreArrow/>
            </button>
          </div>
        </Container>
      </section>

      <section>
    <Consultation/>
      </section>


    </>
  );
}
