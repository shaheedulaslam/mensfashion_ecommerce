import React, { useState } from "react";
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
  const [expanded, setExpanded] = useState(false);
  const maxLength = 150; // Character limit before truncation

  // Function to truncate text
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  const shouldTruncate = description.length > maxLength;
  const displayText = expanded ? description : truncateText(description, maxLength);

  return (
    <div className="group relative rounded-3xl p-6 duration-300 py-4 bg-white hover:-translate-y-2 h-full flex flex-col">
      <div className="flex-grow">
        <div className="flex items-center mb-4">
          <Image
            src={image}
            className="h-20 w-20 rounded-full mr-4"
            alt="testimonial people"
          />
          <div>
            <h1 className="text-[#334C8F] font-semibold text-lg">{name}</h1>
            <p className="font-normal text-sm opacity-80 text-[#333759]">{bio}</p>
          </div>
        </div>
        <p className="text-sm my-1 opacity-80 font-normal text-[#415CA7] flex-wrap">
          {displayText}
        </p>
      </div>
      {shouldTruncate && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#762AFF] text-sm font-medium mt-2 self-start hover:underline focus:outline-none"
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </div>
  );
};