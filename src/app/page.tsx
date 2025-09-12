"use client";

/* eslint-disable @next/next/no-img-element */
import { CardGrid } from "@/components/ServiceCard";
import { SocialMedia } from "@/components/SocialMedia";
import {
  HeroMask,
  HeroArrow,
  ProductCard2,
  HeroSectionMan,
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
                <HeroSectionMan />
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
                <img
                  data-aos="zoom-out"
                  src="/images/homeSection4.png"
                  alt="itmakerz Crafting the Future of Digital Innovation"
                  className="h-full w-full"
                />
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

      <style jsx global>{`
        @keyframes float-slow {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes float-medium {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes float-fast {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes rotate-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.7;
          }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
          transform-origin: center;
        }

        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

<svg
  width="966"
  height="667"
  viewBox="0 0 966 667"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
>
  <rect
    x="295.25"
    width="399"
    height="389"
    rx="10"
    fill="url(#pattern0_1_359)"
  />
  <g filter="url(#filter0_d_1_359)">
    <rect
      x="184.75"
      y="315"
      width="294"
      height="110"
      rx="20"
      fill="white"
      shape-rendering="crispEdges"
    />
    <rect x="204.75" y="335" width="70" height="70" rx="35" fill="#09BF94" />
    <path
      d="M254.688 381.875H231.312C230.401 381.875 229.526 381.513 228.882 380.868C228.237 380.224 227.875 379.349 227.875 378.438V355.062C227.875 354.515 227.658 353.991 227.271 353.604C226.884 353.217 226.36 353 225.812 353C225.265 353 224.741 353.217 224.354 353.604C223.967 353.991 223.75 354.515 223.75 355.062V378.438C223.752 380.443 224.55 382.365 225.967 383.783C227.385 385.2 229.307 385.998 231.312 386H254.688C255.235 386 255.759 385.783 256.146 385.396C256.533 385.009 256.75 384.485 256.75 383.938C256.75 383.39 256.533 382.866 256.146 382.479C255.759 382.092 255.235 381.875 254.688 381.875Z"
      fill="white"
    />
    <path
      d="M254.727 358H250.564C250.297 358 250.036 358.084 249.814 358.242C249.593 358.4 249.42 358.624 249.318 358.887C249.216 359.149 249.189 359.438 249.241 359.716C249.293 359.995 249.421 360.251 249.61 360.452L250.599 361.503L245.76 366.652C245.697 366.719 245.623 366.772 245.541 366.808C245.459 366.844 245.371 366.863 245.283 366.863C245.194 366.863 245.106 366.844 245.024 366.808C244.942 366.772 244.868 366.719 244.805 366.652L244.576 366.408C243.676 365.493 242.481 364.983 241.237 364.983C239.993 364.983 238.798 365.493 237.898 366.408L232.368 372.296C232.174 372.495 232.02 372.733 231.914 372.995C231.808 373.258 231.752 373.541 231.75 373.827C231.748 374.113 231.799 374.397 231.901 374.661C232.002 374.926 232.153 375.167 232.343 375.369C232.533 375.571 232.759 375.731 233.007 375.84C233.256 375.948 233.522 376.002 233.791 376C234.06 375.997 234.325 375.938 234.572 375.825C234.819 375.712 235.042 375.548 235.229 375.342L240.76 369.454C240.822 369.387 240.897 369.334 240.979 369.298C241.061 369.261 241.148 369.243 241.237 369.243C241.326 369.243 241.414 369.261 241.496 369.298C241.578 369.334 241.652 369.387 241.715 369.454L241.944 369.698C242.843 370.612 244.039 371.122 245.283 371.122C246.526 371.122 247.722 370.612 248.621 369.698L253.459 364.549L254.446 365.602C254.635 365.803 254.875 365.94 255.137 365.996C255.399 366.052 255.67 366.023 255.917 365.915C256.164 365.806 256.375 365.622 256.523 365.385C256.671 365.149 256.75 364.871 256.75 364.586V360.154C256.75 359.583 256.537 359.035 256.157 358.631C255.778 358.227 255.263 358 254.727 358Z"
      fill="white"
    />
    <path
      d="M299.958 365H292.998V353.512H294.758V363.416H299.958V365ZM304.875 365.16C302.475 365.16 300.715 363.272 300.715 360.76C300.715 358.248 302.475 356.36 304.875 356.36C307.275 356.36 309.035 358.248 309.035 360.76C309.035 363.272 307.275 365.16 304.875 365.16ZM304.875 363.736C306.267 363.736 307.371 362.616 307.371 360.76C307.371 358.904 306.267 357.8 304.875 357.8C303.483 357.8 302.395 358.904 302.395 360.76C302.395 362.616 303.483 363.736 304.875 363.736ZM312.299 360.664V365H310.683V356.52H312.187V358.312C312.779 357.144 314.059 356.408 315.451 356.408V358.088C313.627 357.992 312.299 358.792 312.299 360.664ZM320.186 365.16C317.738 365.16 316.09 363.384 316.09 360.712C316.09 358.2 317.802 356.36 320.138 356.36C322.666 356.36 324.346 358.408 324.058 361.16H317.738C317.866 362.888 318.73 363.896 320.154 363.896C321.354 363.896 322.186 363.24 322.458 362.136H324.058C323.642 364.024 322.186 365.16 320.186 365.16ZM320.106 357.576C318.81 357.576 317.93 358.504 317.754 360.088H322.346C322.266 358.52 321.418 357.576 320.106 357.576ZM327.392 365H325.776V356.52H327.28V357.928C327.856 356.952 328.768 356.36 329.936 356.36C331.184 356.36 332.128 357 332.512 358.12C333.104 357.032 334.08 356.36 335.376 356.36C337.12 356.36 338.24 357.496 338.24 359.512V365H336.624V360.024C336.624 358.616 336 357.784 334.816 357.784C333.712 357.784 332.816 358.712 332.816 360.136V365H331.2V360.024C331.2 358.616 330.576 357.784 329.392 357.784C328.272 357.784 327.392 358.712 327.392 360.136V365ZM345.713 354.552C345.713 355.16 345.233 355.624 344.545 355.624C343.857 355.624 343.361 355.16 343.361 354.552C343.361 353.928 343.857 353.48 344.545 353.48C345.233 353.48 345.713 353.928 345.713 354.552ZM345.361 365H343.745V356.52H345.361V365ZM355.7 360.76C355.7 363.32 354.228 365.16 351.956 365.16C350.804 365.16 349.828 364.584 349.22 363.56V368.088H347.604V356.52H349.108V358.072C349.716 356.984 350.756 356.36 351.956 356.36C354.212 356.36 355.7 358.2 355.7 360.76ZM354.02 360.76C354.02 358.856 353.012 357.784 351.62 357.784C350.276 357.784 349.22 358.856 349.22 360.76C349.22 362.632 350.26 363.72 351.62 363.72C353.012 363.72 354.02 362.664 354.02 360.76ZM364.059 362.472C364.059 364.136 362.763 365.16 360.507 365.16C358.267 365.16 356.939 364.056 356.779 362.232H358.331C358.395 363.288 359.243 363.944 360.539 363.944C361.675 363.944 362.427 363.544 362.427 362.744C362.427 362.04 361.995 361.736 360.939 361.528L359.563 361.272C357.995 360.968 357.115 360.168 357.115 358.888C357.115 357.4 358.411 356.36 360.379 356.36C362.411 356.36 363.787 357.448 363.931 359.192H362.379C362.283 358.168 361.531 357.576 360.395 357.576C359.371 357.576 358.683 358.008 358.683 358.744C358.683 359.432 359.115 359.752 360.139 359.944L361.579 360.216C363.259 360.52 364.059 361.256 364.059 362.472ZM371.119 361.512V356.52H372.735V365H371.231V363.656C370.783 364.536 369.791 365.16 368.639 365.16C366.927 365.16 365.743 364.152 365.743 361.976V356.52H367.359V361.656C367.359 363.128 368.095 363.736 369.151 363.736C370.239 363.736 371.119 362.84 371.119 361.512ZM376.595 365H374.979V356.52H376.483V357.928C377.059 356.952 377.971 356.36 379.139 356.36C380.387 356.36 381.331 357 381.715 358.12C382.307 357.032 383.283 356.36 384.579 356.36C386.323 356.36 387.443 357.496 387.443 359.512V365H385.827V360.024C385.827 358.616 385.203 357.784 384.019 357.784C382.915 357.784 382.019 358.712 382.019 360.136V365H380.403V360.024C380.403 358.616 379.779 357.784 378.595 357.784C377.475 357.784 376.595 358.712 376.595 360.136V365ZM392.34 360.76C392.34 358.184 393.812 356.36 396.1 356.36C397.236 356.36 398.228 356.936 398.82 357.976V353.512H400.436V365H398.932V363.48C398.324 364.552 397.3 365.16 396.1 365.16C393.812 365.16 392.34 363.304 392.34 360.76ZM394.02 360.76C394.02 362.648 395.012 363.72 396.42 363.72C397.796 363.72 398.82 362.6 398.82 360.728C398.82 358.824 397.764 357.784 396.42 357.784C395.012 357.784 394.02 358.84 394.02 360.76ZM406.235 365.16C403.835 365.16 402.075 363.272 402.075 360.76C402.075 358.248 403.835 356.36 406.235 356.36C408.635 356.36 410.395 358.248 410.395 360.76C410.395 363.272 408.635 365.16 406.235 365.16ZM406.235 363.736C407.627 363.736 408.731 362.616 408.731 360.76C408.731 358.904 407.627 357.8 406.235 357.8C404.843 357.8 403.755 358.904 403.755 360.76C403.755 362.616 404.843 363.736 406.235 363.736ZM413.674 365H412.042V353.512H413.674V365ZM419.469 365.16C417.069 365.16 415.309 363.272 415.309 360.76C415.309 358.248 417.069 356.36 419.469 356.36C421.869 356.36 423.629 358.248 423.629 360.76C423.629 363.272 421.869 365.16 419.469 365.16ZM419.469 363.736C420.861 363.736 421.965 362.616 421.965 360.76C421.965 358.904 420.861 357.8 419.469 357.8C418.077 357.8 416.989 358.904 416.989 360.76C416.989 362.616 418.077 363.736 419.469 363.736ZM426.892 360.664V365H425.276V356.52H426.78V358.312C427.372 357.144 428.652 356.408 430.044 356.408V358.088C428.22 357.992 426.892 358.792 426.892 360.664ZM441.387 362.472C441.387 364.136 440.091 365.16 437.835 365.16C435.595 365.16 434.267 364.056 434.107 362.232H435.659C435.723 363.288 436.571 363.944 437.867 363.944C439.003 363.944 439.755 363.544 439.755 362.744C439.755 362.04 439.323 361.736 438.267 361.528L436.891 361.272C435.323 360.968 434.443 360.168 434.443 358.888C434.443 357.4 435.739 356.36 437.707 356.36C439.739 356.36 441.115 357.448 441.259 359.192H439.707C439.611 358.168 438.859 357.576 437.723 357.576C436.699 357.576 436.011 358.008 436.011 358.744C436.011 359.432 436.443 359.752 437.467 359.944L438.907 360.216C440.587 360.52 441.387 361.256 441.387 362.472ZM445.119 354.552C445.119 355.16 444.639 355.624 443.951 355.624C443.263 355.624 442.767 355.16 442.767 354.552C442.767 353.928 443.263 353.48 443.951 353.48C444.639 353.48 445.119 353.928 445.119 354.552ZM444.767 365H443.151V356.52H444.767V365ZM451.795 363.432V364.856C451.299 365.08 450.867 365.16 450.355 365.16C448.787 365.16 447.699 364.312 447.699 362.44V357.896H445.827V356.52H447.699V354.008H449.315V356.52H451.875V357.896H449.315V362.072C449.315 363.24 449.875 363.656 450.739 363.656C451.123 363.656 451.459 363.592 451.795 363.432ZM298.006 387V385.688C297.478 386.632 296.534 387.16 295.286 387.16C293.526 387.16 292.374 386.152 292.374 384.6C292.374 382.936 293.702 382.072 296.23 382.072C296.726 382.072 297.126 382.088 297.814 382.168V381.544C297.814 380.328 297.158 379.64 296.038 379.64C294.854 379.64 294.134 380.344 294.086 381.528H292.614C292.694 379.624 294.054 378.36 296.038 378.36C298.134 378.36 299.35 379.544 299.35 381.56V387H298.006ZM293.91 384.552C293.91 385.432 294.566 386.008 295.606 386.008C296.966 386.008 297.814 385.16 297.814 383.864V383.176C297.19 383.096 296.742 383.08 296.326 383.08C294.71 383.08 293.91 383.56 293.91 384.552ZM303.127 387H301.511V378.52H303.015V379.928C303.591 378.952 304.503 378.36 305.671 378.36C306.919 378.36 307.863 379 308.247 380.12C308.839 379.032 309.815 378.36 311.111 378.36C312.855 378.36 313.975 379.496 313.975 381.512V387H312.359V382.024C312.359 380.616 311.735 379.784 310.551 379.784C309.447 379.784 308.551 380.712 308.551 382.136V387H306.935V382.024C306.935 380.616 306.311 379.784 305.127 379.784C304.007 379.784 303.127 380.712 303.127 382.136V387ZM319.624 387.16C317.176 387.16 315.528 385.384 315.528 382.712C315.528 380.2 317.24 378.36 319.576 378.36C322.104 378.36 323.784 380.408 323.496 383.16H317.176C317.304 384.888 318.168 385.896 319.592 385.896C320.792 385.896 321.624 385.24 321.896 384.136H323.496C323.08 386.024 321.624 387.16 319.624 387.16ZM319.544 379.576C318.248 379.576 317.368 380.504 317.192 382.088H321.784C321.704 380.52 320.856 379.576 319.544 379.576ZM329.967 385.432V386.856C329.471 387.08 329.039 387.16 328.527 387.16C326.959 387.16 325.871 386.312 325.871 384.44V379.896H323.998V378.52H325.871V376.008H327.487V378.52H330.047V379.896H327.487V384.072C327.487 385.24 328.047 385.656 328.911 385.656C329.295 385.656 329.631 385.592 329.967 385.432ZM338.277 387.176C335.957 387.176 334.325 385.352 334.325 382.76C334.325 380.2 335.989 378.36 338.277 378.36C340.373 378.36 341.892 379.752 342.197 381.96H340.501C340.325 380.6 339.477 379.784 338.293 379.784C336.901 379.784 335.989 380.968 335.989 382.76C335.989 384.568 336.901 385.736 338.293 385.736C339.493 385.736 340.325 384.936 340.517 383.56H342.197C341.909 385.8 340.405 387.176 338.277 387.176ZM347.297 387.16C344.897 387.16 343.137 385.272 343.137 382.76C343.137 380.248 344.897 378.36 347.297 378.36C349.697 378.36 351.457 380.248 351.457 382.76C351.457 385.272 349.697 387.16 347.297 387.16ZM347.297 385.736C348.689 385.736 349.793 384.616 349.793 382.76C349.793 380.904 348.689 379.8 347.297 379.8C345.905 379.8 344.817 380.904 344.817 382.76C344.817 384.616 345.905 385.736 347.297 385.736ZM354.72 382.216V387H353.104V378.52H354.608V379.928C355.184 378.984 356.144 378.36 357.312 378.36C359.056 378.36 360.208 379.48 360.208 381.512V387H358.592V382.056C358.592 380.6 357.952 379.784 356.752 379.784C355.648 379.784 354.72 380.712 354.72 382.216ZM369.074 384.472C369.074 386.136 367.778 387.16 365.522 387.16C363.282 387.16 361.954 386.056 361.794 384.232H363.346C363.41 385.288 364.258 385.944 365.554 385.944C366.69 385.944 367.442 385.544 367.442 384.744C367.442 384.04 367.01 383.736 365.954 383.528L364.578 383.272C363.01 382.968 362.13 382.168 362.13 380.888C362.13 379.4 363.426 378.36 365.394 378.36C367.426 378.36 368.802 379.448 368.946 381.192H367.394C367.298 380.168 366.546 379.576 365.41 379.576C364.386 379.576 363.698 380.008 363.698 380.744C363.698 381.432 364.13 381.752 365.154 381.944L366.594 382.216C368.274 382.52 369.074 383.256 369.074 384.472ZM374.327 387.16C371.879 387.16 370.231 385.384 370.231 382.712C370.231 380.2 371.943 378.36 374.279 378.36C376.807 378.36 378.487 380.408 378.199 383.16H371.879C372.007 384.888 372.871 385.896 374.295 385.896C375.495 385.896 376.327 385.24 376.599 384.136H378.199C377.783 386.024 376.327 387.16 374.327 387.16ZM374.247 379.576C372.951 379.576 372.071 380.504 371.895 382.088H376.487C376.407 380.52 375.559 379.576 374.247 379.576ZM383.105 387.176C380.785 387.176 379.153 385.352 379.153 382.76C379.153 380.2 380.817 378.36 383.105 378.36C385.201 378.36 386.721 379.752 387.025 381.96H385.329C385.153 380.6 384.305 379.784 383.121 379.784C381.729 379.784 380.817 380.968 380.817 382.76C380.817 384.568 381.729 385.736 383.121 385.736C384.321 385.736 385.153 384.936 385.345 383.56H387.025C386.737 385.8 385.233 387.176 383.105 387.176ZM393.435 385.432V386.856C392.939 387.08 392.507 387.16 391.995 387.16C390.427 387.16 389.339 386.312 389.339 384.44V379.896H387.467V378.52H389.339V376.008H390.955V378.52H393.515V379.896H390.955V384.072C390.955 385.24 391.515 385.656 392.379 385.656C392.763 385.656 393.099 385.592 393.435 385.432ZM398.311 387.16C395.863 387.16 394.215 385.384 394.215 382.712C394.215 380.2 395.927 378.36 398.263 378.36C400.791 378.36 402.471 380.408 402.183 383.16H395.863C395.991 384.888 396.855 385.896 398.279 385.896C399.479 385.896 400.311 385.24 400.583 384.136H402.183C401.767 386.024 400.311 387.16 398.311 387.16ZM398.231 379.576C396.935 379.576 396.055 380.504 395.879 382.088H400.471C400.391 380.52 399.543 379.576 398.231 379.576ZM408.654 385.432V386.856C408.158 387.08 407.726 387.16 407.214 387.16C405.646 387.16 404.558 386.312 404.558 384.44V379.896H402.686V378.52H404.558V376.008H406.174V378.52H408.734V379.896H406.174V384.072C406.174 385.24 406.734 385.656 407.598 385.656C407.982 385.656 408.318 385.592 408.654 385.432ZM415.572 383.512V378.52H417.188V387H415.684V385.656C415.236 386.536 414.244 387.16 413.092 387.16C411.38 387.16 410.196 386.152 410.196 383.976V378.52H411.812V383.656C411.812 385.128 412.548 385.736 413.604 385.736C414.692 385.736 415.572 384.84 415.572 383.512ZM421.049 382.664V387H419.433V378.52H420.937V380.312C421.529 379.144 422.809 378.408 424.201 378.408V380.088C422.377 379.992 421.049 380.792 421.049 382.664ZM426.718 385.848C426.718 386.568 426.222 387.08 425.486 387.08C424.766 387.08 424.254 386.568 424.254 385.848C424.254 385.096 424.766 384.584 425.486 384.584C426.222 384.584 426.718 385.096 426.718 385.848Z"
      fill="#334C8F"
    />
  </g>
  <g filter="url(#filter1_d_1_359)">
    <rect
      x="517.25"
      y="195"
      width="273"
      height="283.884"
      rx="20"
      fill="white"
      shape-rendering="crispEdges"
    />
    <path
      d="M568.039 261.026H564.945V258.204C560.457 257.626 557.669 254.77 557.363 250.588H562.089C562.157 253.002 563.755 254.498 566.577 254.498C568.923 254.498 570.725 253.444 570.725 251.574C570.725 250.112 569.535 249.262 567.801 248.888L564.333 248.174C561.035 247.426 558.213 245.862 558.213 241.782C558.213 238.11 560.967 235.356 564.945 234.778V231.922H568.039V234.778C572.221 235.322 575.145 238.11 575.451 242.258H570.725C570.589 240.014 568.991 238.518 566.645 238.518C564.469 238.518 563.007 239.64 563.007 241.408C563.007 242.972 564.401 243.686 565.931 243.992L569.331 244.706C573.343 245.556 575.757 247.494 575.757 250.962C575.757 255.008 572.867 257.898 568.039 258.272V261.026ZM585.838 258.306C580.874 258.306 577.372 255.382 577.338 251.234H581.928C582.064 253.308 583.56 254.566 585.906 254.566C588.354 254.566 589.782 253.342 589.782 251.302C589.782 249.296 588.116 248.106 585.294 248.106H582.812V244.366H585.022C587.334 244.366 588.728 243.21 588.728 241.34C588.728 239.538 587.538 238.416 585.566 238.416C583.628 238.416 582.404 239.64 582.37 241.646H577.78C577.814 237.668 581.282 234.676 585.804 234.676C590.632 234.676 593.59 237.294 593.59 241C593.59 243.108 592.366 244.774 590.156 245.93C593.012 246.848 594.644 248.684 594.644 251.166C594.644 255.416 591.108 258.306 585.838 258.306ZM611.522 237.77L603.022 258H597.956L606.286 239.232H595.372V235.016H611.522V237.77ZM616.307 254.974C616.307 256.844 615.015 258.17 613.145 258.17C611.275 258.17 609.949 256.844 609.949 254.974C609.949 253.07 611.275 251.744 613.145 251.744C615.015 251.744 616.307 253.07 616.307 254.974ZM626.766 258.34C621.87 258.34 618.164 255.28 618.028 250.996H622.754C623.026 253.002 624.59 254.124 626.732 254.124C629.52 254.124 630.574 252.356 630.574 250.486C630.574 248.684 629.384 246.848 626.596 246.848C624.76 246.848 623.4 247.596 622.686 249.16L618.81 247.902L620.816 235.016H634.11V239.232H624.25L623.536 243.924C624.692 243.176 626.018 242.836 627.378 242.836C632.852 242.836 635.47 246.61 635.47 250.486C635.47 254.43 632.546 258.34 626.766 258.34ZM643.436 258H638.268V233.588H643.436V244.332L652.31 233.588H658.226L648.536 245.284L658.498 258H652.14L643.436 246.848V258Z"
      fill="#2B3674"
    />
    <path
      d="M561.425 281.884H559.885V273.218H556.609V271.832H564.701V273.218H561.425V281.884ZM567.794 282.024C565.694 282.024 564.154 280.372 564.154 278.174C564.154 275.976 565.694 274.324 567.794 274.324C569.894 274.324 571.434 275.976 571.434 278.174C571.434 280.372 569.894 282.024 567.794 282.024ZM567.794 280.778C569.012 280.778 569.978 279.798 569.978 278.174C569.978 276.55 569.012 275.584 567.794 275.584C566.576 275.584 565.624 276.55 565.624 278.174C565.624 279.798 566.576 280.778 567.794 280.778ZM576.644 280.512V281.758C576.21 281.954 575.832 282.024 575.384 282.024C574.012 282.024 573.06 281.282 573.06 279.644V275.668H571.422V274.464H573.06V272.266H574.474V274.464H576.714V275.668H574.474V279.322C574.474 280.344 574.964 280.708 575.72 280.708C576.056 280.708 576.35 280.652 576.644 280.512ZM582.278 281.884V280.736C581.816 281.562 580.99 282.024 579.898 282.024C578.358 282.024 577.35 281.142 577.35 279.784C577.35 278.328 578.512 277.572 580.724 277.572C581.158 277.572 581.508 277.586 582.11 277.656V277.11C582.11 276.046 581.536 275.444 580.556 275.444C579.52 275.444 578.89 276.06 578.848 277.096H577.56C577.63 275.43 578.82 274.324 580.556 274.324C582.39 274.324 583.454 275.36 583.454 277.124V281.884H582.278ZM578.694 279.742C578.694 280.512 579.268 281.016 580.178 281.016C581.368 281.016 582.11 280.274 582.11 279.14V278.538C581.564 278.468 581.172 278.454 580.808 278.454C579.394 278.454 578.694 278.874 578.694 279.742ZM586.492 281.884H585.064V271.832H586.492V281.884ZM598.283 278.944C598.283 280.694 596.883 282.024 594.447 282.024C592.025 282.024 590.555 280.694 590.429 278.692H591.997C592.067 279.966 592.879 280.792 594.419 280.792C595.693 280.792 596.645 280.19 596.645 279.154C596.645 278.314 596.099 277.894 594.937 277.642L593.481 277.362C592.067 277.082 590.779 276.368 590.779 274.66C590.779 272.966 592.263 271.692 594.349 271.692C596.435 271.692 598.017 272.966 598.143 274.968H596.575C596.491 273.764 595.623 272.924 594.363 272.924C593.061 272.924 592.347 273.694 592.347 274.562C592.347 275.514 593.173 275.85 594.111 276.046L595.595 276.34C597.317 276.69 598.283 277.446 598.283 278.944ZM606.758 278.174C606.758 280.414 605.47 282.024 603.482 282.024C602.474 282.024 601.62 281.52 601.088 280.624V284.586H599.674V274.464H600.99V275.822C601.522 274.87 602.432 274.324 603.482 274.324C605.456 274.324 606.758 275.934 606.758 278.174ZM605.288 278.174C605.288 276.508 604.406 275.57 603.188 275.57C602.012 275.57 601.088 276.508 601.088 278.174C601.088 279.812 601.998 280.764 603.188 280.764C604.406 280.764 605.288 279.84 605.288 278.174ZM610.963 282.024C608.821 282.024 607.379 280.47 607.379 278.132C607.379 275.934 608.877 274.324 610.921 274.324C613.133 274.324 614.603 276.116 614.351 278.524H608.821C608.933 280.036 609.689 280.918 610.935 280.918C611.985 280.918 612.713 280.344 612.951 279.378H614.351C613.987 281.03 612.713 282.024 610.963 282.024ZM610.893 275.388C609.759 275.388 608.989 276.2 608.835 277.586H612.853C612.783 276.214 612.041 275.388 610.893 275.388ZM616.989 277.698V281.884H615.575V274.464H616.891V275.696C617.395 274.87 618.235 274.324 619.257 274.324C620.783 274.324 621.791 275.304 621.791 277.082V281.884H620.377V277.558C620.377 276.284 619.817 275.57 618.767 275.57C617.801 275.57 616.989 276.382 616.989 277.698ZM627.547 280.512V281.758C627.113 281.954 626.735 282.024 626.287 282.024C624.915 282.024 623.963 281.282 623.963 279.644V275.668H622.325V274.464H623.963V272.266H625.377V274.464H627.617V275.668H625.377V279.322C625.377 280.344 625.867 280.708 626.623 280.708C626.959 280.708 627.253 280.652 627.547 280.512Z"
      fill="#A3AED0"
    />
    <path
      d="M654.586 280.761H653.026V278.541H650.806V277.101H653.026V274.881H654.586V277.101H656.806V278.541H654.586V280.761ZM663.768 280.425V281.913H658.104V280.965L660.564 278.445C661.5 277.485 661.896 276.981 661.896 276.273C661.896 275.613 661.452 275.169 660.744 275.169C659.964 275.169 659.484 275.661 659.484 276.453H657.864C657.864 274.833 659.088 273.681 660.828 273.681C662.448 273.681 663.636 274.701 663.636 276.069C663.636 277.053 663.276 277.677 661.86 279.105L660.636 280.425H663.768ZM666.856 280.845C666.856 281.505 666.4 281.973 665.74 281.973C665.08 281.973 664.612 281.505 664.612 280.845C664.612 280.173 665.08 279.705 665.74 279.705C666.4 279.705 666.856 280.173 666.856 280.845ZM674.013 280.317H672.873V281.913H671.217V280.317H667.365V279.081L671.553 273.801H672.873V278.865H674.013V280.317ZM669.189 278.865H671.217V276.189L669.189 278.865ZM677.573 282.033C675.845 282.033 674.537 280.953 674.489 279.441H676.157C676.253 280.149 676.805 280.545 677.561 280.545C678.545 280.545 678.917 279.921 678.917 279.261C678.917 278.625 678.497 277.977 677.513 277.977C676.865 277.977 676.385 278.241 676.133 278.793L674.765 278.349L675.473 273.801H680.165V275.289H676.685L676.433 276.945C676.841 276.681 677.309 276.561 677.789 276.561C679.721 276.561 680.645 277.893 680.645 279.261C680.645 280.653 679.613 282.033 677.573 282.033ZM683.66 278.769C682.148 278.769 681.032 277.629 681.032 276.249C681.032 274.857 682.148 273.729 683.66 273.729C685.16 273.729 686.288 274.857 686.288 276.249C686.288 277.629 685.16 278.769 683.66 278.769ZM685.652 281.913H684.32L688.928 273.801H690.26L685.652 281.913ZM683.66 277.593C684.344 277.593 684.92 277.137 684.92 276.249C684.92 275.361 684.344 274.905 683.66 274.905C682.988 274.905 682.388 275.361 682.388 276.249C682.388 277.137 682.988 277.593 683.66 277.593ZM691.124 282.021C689.612 282.021 688.496 280.881 688.496 279.501C688.496 278.109 689.612 276.981 691.124 276.981C692.636 276.981 693.752 278.109 693.752 279.501C693.752 280.881 692.636 282.021 691.124 282.021ZM691.124 280.833C691.808 280.833 692.396 280.389 692.396 279.501C692.396 278.601 691.808 278.157 691.124 278.157C690.452 278.157 689.852 278.601 689.852 279.501C689.852 280.389 690.452 280.833 691.124 280.833Z"
      fill="#05CD99"
    />
    <g clip-path="url(#clip0_1_359)">
      <path
        d="M634.213 278.38L638.405 274.641L642.598 278.38H634.213Z"
        fill="#05CD99"
      />
    </g>
    <rect x="718.157" y="225" width="33" height="33" rx="10" fill="#F4F7FE" />
    <g clip-path="url(#clip1_1_359)">
      <path
        d="M729.557 239.2H729.757C730.527 239.2 731.157 239.83 731.157 240.6V247.6C731.157 248.37 730.527 249 729.757 249H729.557C728.787 249 728.157 248.37 728.157 247.6V240.6C728.157 239.83 728.787 239.2 729.557 239.2ZM735.157 235C735.927 235 736.557 235.63 736.557 236.4V247.6C736.557 248.37 735.927 249 735.157 249C734.387 249 733.757 248.37 733.757 247.6V236.4C733.757 235.63 734.387 235 735.157 235ZM740.757 243C741.527 243 742.157 243.63 742.157 244.4V247.6C742.157 248.37 741.527 249 740.757 249C739.987 249 739.357 248.37 739.357 247.6V244.4C739.357 243.63 739.987 243 740.757 243Z"
        fill="#4318FF"
      />
    </g>
    <g clip-path="url(#clip2_1_359)">
      <g filter="url(#filter2_d_1_359)">
        <path
          d="M548.881 402.128C555.905 400.287 572.343 397.156 581.908 399.366C593.863 402.128 597.599 412.754 607.014 409.566C616.428 406.379 636.902 383.853 651.098 392.991C665.295 402.128 669.928 426.141 687.562 409.566C705.196 392.991 703.701 384.278 718.346 385.978C732.992 387.678 757.051 393.416 765.719 385.978"
          stroke="#4318FF"
          stroke-width="1.7094"
          stroke-linecap="round"
        />
      </g>
      <path
        d="M548.881 426.69C555.905 424.85 565.17 415.353 574.734 417.561C586.69 420.321 591.771 438.582 601.185 435.397C610.6 432.213 635.744 413.78 651.098 417.561C670.077 422.234 667.387 443.249 685.021 426.69C702.655 410.13 713.415 420.111 728.06 421.81C742.705 423.508 757.051 417.985 765.719 410.555"
        stroke="#6AD2FF"
        stroke-width="1.7094"
        stroke-linecap="round"
      />
      <ellipse
        cx="644.287"
        cy="390.897"
        rx="2.98326"
        ry="3.4188"
        fill="#4318FF"
      />
      <ellipse
        cx="644.287"
        cy="390.897"
        rx="1.86453"
        ry="2.13675"
        fill="white"
      />
      <path
        d="M617.25 353.769C617.25 350.455 619.936 347.769 623.25 347.769H670.136C673.45 347.769 676.136 350.455 676.136 353.769V370.4C676.136 373.714 673.45 376.4 670.136 376.4H656.441C653.015 376.4 649.772 377.951 647.621 380.617C647.144 381.209 646.242 381.209 645.765 380.617C643.614 377.951 640.371 376.4 636.945 376.4H623.25C619.936 376.4 617.25 373.714 617.25 370.4V353.769Z"
        fill="#4318FF"
      />
      <path
        d="M628.362 365.932V365.085C627.651 365.005 627.071 364.755 626.624 364.337C626.177 363.919 625.946 363.358 625.931 362.654H627.416C627.431 362.948 627.519 363.204 627.68 363.424C627.849 363.644 628.076 363.795 628.362 363.875V361.554C628.296 361.532 628.226 361.51 628.153 361.488C628.087 361.466 628.017 361.444 627.944 361.422C627.35 361.217 626.895 360.953 626.58 360.63C626.272 360.308 626.118 359.879 626.118 359.343C626.111 358.713 626.316 358.207 626.734 357.825C627.152 357.437 627.695 357.213 628.362 357.154V356.263H629.099V357.165C629.759 357.231 630.291 357.462 630.694 357.858C631.105 358.247 631.321 358.749 631.343 359.365H629.836C629.829 359.153 629.759 358.958 629.627 358.782C629.502 358.599 629.326 358.471 629.099 358.397V360.443C629.158 360.465 629.216 360.487 629.275 360.509C629.334 360.524 629.392 360.542 629.451 360.564C629.832 360.696 630.181 360.85 630.496 361.026C630.811 361.202 631.064 361.437 631.255 361.73C631.446 362.016 631.541 362.387 631.541 362.841C631.541 363.223 631.446 363.578 631.255 363.908C631.072 364.238 630.797 364.513 630.43 364.733C630.071 364.946 629.627 365.067 629.099 365.096V365.932H628.362ZM627.592 359.244C627.592 359.479 627.662 359.67 627.801 359.816C627.94 359.956 628.127 360.077 628.362 360.179V358.353C628.135 358.397 627.948 358.496 627.801 358.65C627.662 358.804 627.592 359.002 627.592 359.244ZM630.045 362.94C630.045 362.647 629.957 362.416 629.781 362.247C629.605 362.079 629.378 361.936 629.099 361.818V363.908C629.392 363.864 629.623 363.758 629.792 363.589C629.961 363.421 630.045 363.204 630.045 362.94ZM633.385 364.975V358.881L632.12 359.178V358.1L633.979 357.275H634.848V364.975H633.385ZM639.278 365.107C638.567 365.107 637.958 364.942 637.452 364.612C636.946 364.275 636.554 363.809 636.275 363.215C636.004 362.614 635.868 361.917 635.868 361.125C635.868 360.341 636.004 359.648 636.275 359.046C636.554 358.445 636.946 357.979 637.452 357.649C637.958 357.312 638.567 357.143 639.278 357.143C639.99 357.143 640.598 357.312 641.104 357.649C641.61 357.979 641.999 358.445 642.27 359.046C642.549 359.648 642.688 360.341 642.688 361.125C642.688 361.917 642.549 362.614 642.27 363.215C641.999 363.809 641.61 364.275 641.104 364.612C640.598 364.942 639.99 365.107 639.278 365.107ZM639.278 363.842C639.858 363.842 640.331 363.6 640.697 363.116C641.064 362.632 641.247 361.969 641.247 361.125C641.247 360.282 641.064 359.618 640.697 359.134C640.331 358.65 639.858 358.408 639.278 358.408C638.692 358.408 638.215 358.65 637.848 359.134C637.489 359.618 637.309 360.282 637.309 361.125C637.309 361.969 637.489 362.632 637.848 363.116C638.215 363.6 638.692 363.842 639.278 363.842ZM646.428 365.107C645.9 365.107 645.423 365.016 644.998 364.832C644.573 364.642 644.232 364.374 643.975 364.029C643.726 363.685 643.601 363.285 643.601 362.83C643.601 362.361 643.722 361.95 643.964 361.598C644.213 361.246 644.54 360.993 644.943 360.839C644.591 360.685 644.312 360.465 644.107 360.179C643.902 359.886 643.799 359.56 643.799 359.2C643.799 358.834 643.898 358.496 644.096 358.188C644.294 357.873 644.587 357.62 644.976 357.429C645.372 357.239 645.856 357.143 646.428 357.143C647 357.143 647.48 357.239 647.869 357.429C648.258 357.62 648.551 357.873 648.749 358.188C648.947 358.496 649.046 358.834 649.046 359.2C649.046 359.552 648.94 359.879 648.727 360.179C648.522 360.473 648.247 360.693 647.902 360.839C648.313 360.993 648.639 361.246 648.881 361.598C649.123 361.95 649.244 362.361 649.244 362.83C649.244 363.285 649.119 363.685 648.87 364.029C648.621 364.374 648.28 364.642 647.847 364.832C647.422 365.016 646.949 365.107 646.428 365.107ZM646.428 360.421C646.809 360.421 647.11 360.322 647.33 360.124C647.55 359.926 647.66 359.673 647.66 359.365C647.66 359.028 647.55 358.764 647.33 358.573C647.117 358.383 646.817 358.287 646.428 358.287C646.032 358.287 645.728 358.383 645.515 358.573C645.302 358.764 645.196 359.028 645.196 359.365C645.196 359.681 645.302 359.937 645.515 360.135C645.735 360.326 646.039 360.421 646.428 360.421ZM646.428 363.93C646.897 363.93 647.253 363.817 647.495 363.589C647.737 363.355 647.858 363.061 647.858 362.709C647.858 362.321 647.73 362.016 647.473 361.796C647.224 361.576 646.875 361.466 646.428 361.466C645.981 361.466 645.625 361.576 645.361 361.796C645.104 362.016 644.976 362.321 644.976 362.709C644.976 363.061 645.097 363.355 645.339 363.589C645.588 363.817 645.951 363.93 646.428 363.93ZM650.981 365.052C650.724 365.052 650.512 364.972 650.343 364.81C650.182 364.649 650.101 364.455 650.101 364.227C650.101 363.993 650.182 363.795 650.343 363.633C650.512 363.472 650.724 363.391 650.981 363.391C651.238 363.391 651.447 363.472 651.608 363.633C651.777 363.795 651.861 363.993 651.861 364.227C651.861 364.455 651.777 364.649 651.608 364.81C651.447 364.972 651.238 365.052 650.981 365.052ZM655.548 365.107C654.837 365.107 654.228 364.942 653.722 364.612C653.216 364.275 652.824 363.809 652.545 363.215C652.274 362.614 652.138 361.917 652.138 361.125C652.138 360.341 652.274 359.648 652.545 359.046C652.824 358.445 653.216 357.979 653.722 357.649C654.228 357.312 654.837 357.143 655.548 357.143C656.259 357.143 656.868 357.312 657.374 357.649C657.88 357.979 658.269 358.445 658.54 359.046C658.819 359.648 658.958 360.341 658.958 361.125C658.958 361.917 658.819 362.614 658.54 363.215C658.269 363.809 657.88 364.275 657.374 364.612C656.868 364.942 656.259 365.107 655.548 365.107ZM655.548 363.842C656.127 363.842 656.6 363.6 656.967 363.116C657.334 362.632 657.517 361.969 657.517 361.125C657.517 360.282 657.334 359.618 656.967 359.134C656.6 358.65 656.127 358.408 655.548 358.408C654.961 358.408 654.485 358.65 654.118 359.134C653.759 359.618 653.579 360.282 653.579 361.125C653.579 361.969 653.759 362.632 654.118 363.116C654.485 363.6 654.961 363.842 655.548 363.842ZM663.138 365.107C662.426 365.107 661.818 364.942 661.312 364.612C660.806 364.275 660.413 363.809 660.135 363.215C659.863 362.614 659.728 361.917 659.728 361.125C659.728 360.341 659.863 359.648 660.135 359.046C660.413 358.445 660.806 357.979 661.312 357.649C661.818 357.312 662.426 357.143 663.138 357.143C663.849 357.143 664.458 357.312 664.964 357.649C665.47 357.979 665.858 358.445 666.13 359.046C666.408 359.648 666.548 360.341 666.548 361.125C666.548 361.917 666.408 362.614 666.13 363.215C665.858 363.809 665.47 364.275 664.964 364.612C664.458 364.942 663.849 365.107 663.138 365.107ZM663.138 363.842C663.717 363.842 664.19 363.6 664.557 363.116C664.923 362.632 665.107 361.969 665.107 361.125C665.107 360.282 664.923 359.618 664.557 359.134C664.19 358.65 663.717 358.408 663.138 358.408C662.551 358.408 662.074 358.65 661.708 359.134C661.348 359.618 661.169 360.282 661.169 361.125C661.169 361.969 661.348 362.632 661.708 363.116C662.074 363.6 662.551 363.842 663.138 363.842Z"
        fill="white"
      />
    </g>
  </g>
  <defs>
    <pattern
      id="pattern0_1_359"
      patternContentUnits="objectBoundingBox"
      width="1"
      height="1"
    >
      <use
        xlinkHref="#image0_1_359"
        transform="matrix(0.00073183 0 0 0.000750643 0 -0.000678663)"
      />
    </pattern>
    <filter
      id="filter0_d_1_359"
      x="0.75"
      y="135"
      width="662"
      height="478"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="4" />
      <feGaussianBlur stdDeviation="92" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0.0467882 0 0 0 0 0.183811 0 0 0 0 0.320833 0 0 0 0.16 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_1_359"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_1_359"
        result="shape"
      />
    </filter>
    <filter
      id="filter1_d_1_359"
      x="333.25"
      y="15"
      width="641"
      height="651.884"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="4" />
      <feGaussianBlur stdDeviation="92" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0.0467882 0 0 0 0 0.183811 0 0 0 0 0.320833 0 0 0 0.16 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_1_359"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_1_359"
        result="shape"
      />
    </filter>
    <filter
      id="filter2_d_1_359"
      x="539.052"
      y="381.495"
      width="236.496"
      height="49.1453"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="5.55556" />
      <feGaussianBlur stdDeviation="4.48718" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0.262745 0 0 0 0 0.0941176 0 0 0 0 1 0 0 0 0.25 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_1_359"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_1_359"
        result="shape"
      />
    </filter>
    <clipPath id="clip0_1_359">
      <rect
        width="20.1242"
        height="17.948"
        fill="white"
        transform="translate(628.343 267.91)"
      />
    </clipPath>
    <clipPath id="clip1_1_359">
      <rect
        width="24"
        height="24"
        fill="white"
        transform="translate(723.157 230)"
      />
    </clipPath>
    <clipPath id="clip2_1_359">
      <rect
        width="213"
        height="150"
        fill="white"
        transform="translate(547.25 298.884)"
      />
    </clipPath>

    {/* image */}
  </defs>
</svg>;
