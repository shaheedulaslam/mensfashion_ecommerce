import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface imageProps {
  image: StaticImageData;
  cardLogo: React.ReactNode;
  bgcolors: React.ReactNode;
  index: number;
}

export const ProductCard: React.FC<imageProps> = ({
  image,
  cardLogo,
  bgcolors,
  index,
}) => {
  const [slide, setSlide] = useState(false);

  return (
    <>
      <div className="relative my-1">
        <div
          className="overflow-hidden rounded-[40px]"
          onMouseOver={() => setSlide(true)}
          onMouseLeave={() => setSlide(false)}
          data-aos="fade-up"
          data-aos-delay={`${index * 50}`}
        >
          <picture>
            <Image
              src={image}
              alt="city"
              className="hover:scale-110 duration-300"
            />
          </picture>
          <div className="absolute bottom-0 mx-3 z-50">{cardLogo}</div>
          <div
            className={`absolute top-0 w-[80%] h-full ${
              slide ? "" : "-translate-x-96"
            } duration-700 ${bgcolors} opacity-90 flex flex-col justify-center text-white`}
          >
            <h1 className="font-bold text-4xl mx-5">Travello</h1>
            <p className="font-extralight text-lg mx-5">
              Lorem ipsum dolor sit amet consectetur. Suscipit quis nunc viverra
              pulvinar.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
