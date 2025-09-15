"use client";

/* eslint-disable @next/next/no-img-element */
import { CardGrid } from "@/components/ServiceCard";
import { SocialMedia } from "@/components/SocialMedia";
import {
  HeroMask,
  HeroArrow,
  ProductCard2,
  HeroSectionMan,
  LandingPageSoftware,
} from "@/components/SvgComponents";
import { cardData } from "@/data/ServiceCardData";
import prod1 from "../../public/images/prod1.svg";
import prod2 from "../../public/images/prod2.svg";
import prod3 from "../../public/images/prod3.svg";
import prod4 from "../../public/images/prod4.svg";
import prod5 from "../../public/images/prod5.svg";
import prod6 from "../../public/images/prod6.svg";
import { ProductCard } from "@/components/ProductCard";
import { faqData1, faqData2 } from "@/data/FaqData";
import { FaqSection } from "@/components/FaqSection";
import TestimonialSection from "@/components/TestimonialPagination";
import Container from "@/components/Container";
import ServiceBenefitCard from "@/components/ServiceBenefitCard";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { WebPageJsonLd } from "@/components/seo/WebPageJsonLd";
import { BreadcrumbsJsonLd } from "@/components/seo/BreadcrumbsJsonLd";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

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
];

export default function Home() {
  const url = "https://itmarkerz.co.in/";

  return (
    <>
      <LocalBusinessJsonLd />
      <WebPageJsonLd
        name="itmarkerz Technologies — Web & Mobile App Development in India"
        url={url}
        description="Laravel, PHP outsourcing, React, Next.js, React Native, Expo, iOS & Android deve"
      />

      <BreadcrumbsJsonLd items={[{ name: "Home", item: url }]} />

      <div className=" -translate-y-20">
        <section className="bg-[#F2F5F8] py-20 pb-10 lg:pb-0 relative overflow-hidden">
          <Container>
            <div className="relative">
              <div className="absolute -top-10 object-contain w-full h-auto lg:ml-[-10%] opacity-50">
                <HeroMask />
              </div>
              <div className="grid grid-cols-11">
                <div className="lg:col-span-5 col-span-12 flex flex-col items-start justify-center z-20 order-2 lg:order-1">
                  <h1
                    data-aos="fade-right"
                    className="text-4xl md:text-5xl lg:text-6xl font-semibold text-dark-blue mt-10 lg:mt-0 leading-16"
                  >
                    <span className="text-[#762BFF]">Building Scalable</span>{" "}
                    Web & Mobile Experiences
                  </h1>
                  <p
                    data-aos="fade-right"
                    data-aos-delay="100"
                    className="text-[#333759] text-lg md:text-xl my-3 mt-6 leading-8"
                  >
                    From idea to launch — we design, develop, and scale digital
                    solutions that grow with your business.
                  </p>
                  <button
                    type="button"
                    className="rounded-full py-3 px-7 text-sm lg:text-base shadow-[0_4px_6px_-1px_#762AFF] bg-primary hover:bg-dark-blue hover:text-white text-white mt-7 duration-200"
                  >
                    Explore More
                  </button>

                  <div className="flex items-center gap-2 mt-20">
                    <p className="text-[#414784]">Follow us on</p>
                    <HeroArrow />
                    <SocialMedia />
                  </div>
                </div>
                <div className="lg:col-span-6 col-span-12 relative order-1 lg:order-2">
                  <HeroSectionMan />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <div className="text-center my-12 w-full max-w-3xl mx-auto">
              <h1
                className="text-2xl md:text-5xl lg:text-6xl font-bold flex items-center justify-center gap-3"
                style={{
                  background:
                    "linear-gradient(91.38deg, #714EFF 19.98%, #0D51FF 54.71%, #E64EFF 89.44%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Idea
                <ArrowRightIcon className="w-8 h-8 md:w-10 md:h-10 text-[#020A55] mt-2" />
                Impact
              </h1>

              <p className="text-[#415CA7] font-light text-lg md:text-xl mt-5 leading-relaxed">
                Structured discovery, thoughtful design, scalable builds, and
                smart growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-y-0 gap-y-16 mt-28">
              {cardData.map((card, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                  className={`${index % 2 !== 0 ? "mt-0" : "lg:mt-10"}`}
                  key={index}
                >
                  <CardGrid
                    title={card.title}
                    description={card.description}
                    logo={card.logo}
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center mt-8">
              <button
                type="button"
                className="mt-8 rounded-full py-3 px-8 text-sm md:text-base font-medium shadow-[0px_3px_6px_-1px_rgba(118,42,255,0.6)] bg-[#762AFF] hover:bg-[#5A1FCC] hover:text-white text-white transition duration-200"
              >
                Schedule a meeting
              </button>
            </div>
          </Container>
        </section>

        <section className="bg-[#061548] my-20">
          <div className="grid grid-cols-12">
            <div className=" lg:col-span-6 col-span-12">
              <div className="h-full">
                <img
                  src="/images/homeFuelBusiness.png"
                  alt="Itmarkers home section three"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12 flex flex-col lg:items-end items-center lg:pr-20 px-4 mt-8 p-8">
              <h1 className="text-white text-4xl text-center lg:text-right  md:text-5xl font-semibold mb-2 md:mb-5">
                Build faster. Grow smarter.
              </h1>
              <p className="tracking-widest text-[#D9D0FF] text-center lg:text-right text-sbase font-light text-sm md:text-lg">
                Launch high-performing web, mobile, and AI solutions—designed to
                move real business metrics.
              </p>
              <button
                type="button"
                className="rounded-full py-3 md:py-4 px-8 md:px-8 text-sm md:text-base leading-6 md:leading-7 tracking-[0.5px] font-normal shadow-[0px 3px 4px -1px #762AFF] bg-[#762AFF] hover:bg-[#D9D0FF] hover:text-primary text-white mt-4 md:mt-7 duration-200"
              >
                Schedule a free consultation
              </button>
            </div>
          </div>
        </section>

        <section className="lg:pb-0">
          <Container>
            <div className="grid grid-cols-12">
              <div className="lg:col-span-5 col-span-12 flex flex-col justify-center lg:order-1 order-2">
                <h1
                  data-aos="fade-right"
                  className="text-4xl md:text-5xl text-[#020A55] font-bold !leading-tight"
                >
                  Software that powers real industries.
                </h1>
                <p
                  data-aos="fade-right"
                  data-aos-delay="100"
                  className="text-lg md:text-xl lg:text-lg font-light text-[#415CA7] mt-6 leading-relaxed"
                >
                  From healthcare to telecom to insurance—we build production
                  systems that handle sensitive data, heavy volumes, and real
                  business outcomes.
                </p>
              </div>
              <div className="lg:col-span-7 col-span-12 lg:order-2 order-1">
                <LandingPageSoftware />
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#F2F5F8] my-28 mt-0 py-16">
          <Container>
            <p className=" !leading-loose space-x-4 text-center text-2xl md:text-4xl text-[#334C8F] font-semibold lg:px-48">
              <span>Exceptional Experiences That Epitomize</span>
              <img
                src="/images/text1.png"
                className="rounded-full h-10 inline-block"
                alt="Text 1"
              />
              <span className="">Our Unwavering Commitment to</span>
              <img
                src="/images/text4.png"
                className="h-10 inline-block rounded-full"
                alt="Text 2"
              />
              <span className="">Delivering</span>
              <img
                src="/images/text3.png"
                className="h-10 rounded-full inline-block"
                alt="Text 3"
              />
              <span>Excellence in Every Aspect</span>
            </p>
            <div className="mt-12">
              <TestimonialSection />
            </div>
          </Container>
        </section>

        <section className="mb-28">
          <Container>
            <div className="flex flex-col">
              <div className="w-full lg:w-3/4 space-y-4 mb-10">
                <p className="mr-3 text-[#020A55] font-bold !leading-tight text-3xl md:text-4xl xl:text-5xl">
                  The Stakeholders of Futuristic Technology Solutions
                </p>
                <p className="text-[#415CA7] font-normal text-base md:text-xl my-2">
                  Your Ideas, Our Expertise = Maximum Customer Success
                </p>
              </div>
            </div>
            <ServiceBenefitCard />
          </Container>
        </section>

        <section>
          <div className="w-full bg-[#714EFF] md:py-20 py-10 ">
            <Container>
              <div className="flex flex-col lg:flex-row md:items-center items-start justify-between gap-5 mb-12">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
                  Designed & Developed 100+ products
                </h1>
                <button
                  type="button"
                  className="rounded-full py-2 px-6 lg:py-3 text-sm font-medium text-[#762AFF] bg-white hover:text-white hover:bg-[#762AFF] transition duration-200"
                >
                  Browse Our Portfolio
                </button>
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
            </Container>
          </div>
        </section>

        <section className="my-24">
          <Container>
            <h1 className="font-bold text-4xl lg:text-4xl text-[#020A55]">
              Benefits with our app development services
            </h1>
            <div className="grid gap-5 lg:gap-10 lg:grid-cols-3 mt-12">
              <div>
                <h2 className="text-[#24ABF5] font-semibold text-xl mb-1">
                  Agile process
                </h2>
                <p className="text-[#333759]">
                  Lorem ipsum dolor sit amet consectetur. Morbi quisque
                  habitasse vulputate blandit.
                </p>
              </div>
              <div>
                <h2 className="text-[#24ABF5] font-semibold text-xl mb-1">
                  Less time to market
                </h2>
                <p className="text-[#333759]">
                  Lorem ipsum dolor sit amet consectetur. Eu eu arcu tincidunt
                  tristique. Praesent eu dolor eleifend sagittis convallis.
                </p>
              </div>
              <div>
                <h2 className="text-[#24ABF5] font-semibold text-xl mb-1">
                  Project Management
                </h2>
                <p className="text-[#333759]">
                  Lorem ipsum dolor sit amet consectetur. Sit in aliquet in
                  augue pulvinar.
                </p>
              </div>
              <div>
                <h2 className="text-[#24ABF5] font-semibold text-xl mb-1">
                  Flexible engagement model
                </h2>
                <p className="text-[#333759]">
                  Lorem ipsum dolor sit amet consectetur. Ac non vulputate sit
                  amet consectetur.
                </p>
              </div>
              <div>
                <h2 className="text-[#24ABF5] font-semibold text-xl mb-1">
                  24/7 support
                </h2>
                <p className="text-[#333759]">
                  Lorem ipsum dolor sit amet consectetur. Ac non vulputate sit
                  amet consectetur.
                </p>
              </div>
            </div>
          </Container>
        </section>
        <section className=" bg-[#E9F4FF] py-16">
          <Container>
            <div className="grid grid-cols-12 lg:gap-12 gap-y-10">
              <div className="lg:col-span-3 col-span-12">
                <img
                  src="images/laptop.svg"
                  alt="itMakers Benefits with our app development services"
                  className="h-auto w-full"
                />
              </div>
              <div className="lg:col-span-9 col-span-12 flex flex-col justify-center">
                <h1 className="font-bold text-4xl lg:text-4xl text-[#334C8F] lg:w-[80%] !leading-snug">
                  Benefits with our app development services
                </h1>
                <div className="grid gap-5 lg:gap-10 lg:grid-cols-2 mt-12">
                  <div>
                    <h2 className="text-[#24ABF5] font-semibold text-xl mb-1">
                      Agile process
                    </h2>
                    <p className="text-[#333759]">
                      Lorem ipsum dolor sit amet consectetur. Morbi quisque
                      habitasse vulputate blandit.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-[#24ABF5] font-semibold text-xl mb-1">
                      Less time to market
                    </h2>
                    <p className="text-[#333759]">
                      Lorem ipsum dolor sit amet consectetur. Eu eu arcu
                      tincidunt tristique. Praesent eu dolor eleifend sagittis
                      convallis.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-[#24ABF5] font-semibold text-xl mb-1">
                      Project Management
                    </h2>
                    <p className="text-[#333759]">
                      Lorem ipsum dolor sit amet consectetur. Sit in aliquet in
                      augue pulvinar.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-[#24ABF5] font-semibold text-xl mb-1">
                      Flexible engagement model
                    </h2>
                    <p className="text-[#333759]">
                      Lorem ipsum dolor sit amet consectetur. Ac non vulputate
                      sit amet consectetur.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-[#24ABF5] font-semibold text-xl mb-1">
                      24/7 support
                    </h2>
                    <p className="text-[#333759]">
                      Lorem ipsum dolor sit amet consectetur. Ac non vulputate
                      sit amet consectetur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="my-20">
          <Container>
            <h2 className="mb-10 text-4xl font-extrabold text-[#020A55]">
              Frequently asked questions
            </h2>
            <div className="grid lg:gap-16 lg:grid-cols-2">
              <div className=" space-y-3">
                {faqData1.map((item, index) => (
                  <FaqSection
                    key={index}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
              <div className=" space-y-3">
                {faqData2.map((item, index) => (
                  <FaqSection
                    key={index}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
