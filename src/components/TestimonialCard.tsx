import React from "react";
import Image, { StaticImageData } from "next/image";

interface imageProps {
  image: StaticImageData;
  name: string;
  description: string;
  bio: string;
}

export const TestimonialCard: React.FC<imageProps> = ({
  name,
  description,
  bio,
  image,
}) => {
  return (
    <div className="group relative rounded-3xl p-6 duration-300 py-4 bg-white hover:-translate-y-2">
      <div>
        <picture>
          <Image
            src={image}
            className="p-2 h-20 w-20 rounded-full"
            alt="testimonial people"
          />
        </picture>
        <p className="text-sm my-1 opacity-80 font-normal italic flex-wrap text-[#415CA7]">
          {description}
        </p>
        <div className="mt-10">
          <h1 className="text-[#334C8F] font-semibold text-lg">{name}</h1>
          <p className="font-normal text-sm opacity-80 text-[#333759]">{bio}</p>
        </div>
      </div>
    </div>
  );
};
