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
    return text.slice(0, maxLength) + "...";
  };

  const shouldTruncate = description.length > maxLength;
  const displayText = expanded
    ? description
    : truncateText(description, maxLength);

  return (
    <div className="group relative rounded-3xl p-6 duration-300 py-4 bg-white hover:-translate-y-2 h-full flex flex-col space-y-3">
      <div className="flex-grow">
        <div className="flex items-center mb-4">
          <Image
            src={image}
            className="h-20 w-20 rounded-full mr-4"
            alt="testimonial people"
          />
        </div>
 <p
  className="flex-wrap text-[#415CA7] text-sm"
  style={{
    fontFamily: "General Sans, sans-serif",
    fontWeight: 200,
    fontStyle: "italic",
    letterSpacing: "0px",
    verticalAlign: "middle",
  }}
>
  {displayText}
</p>

      </div>
      {shouldTruncate && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#762AFF] text-sm font-medium self-start hover:underline focus:outline-none"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}

      <div className="mt-5">
        <h1 className="text-[#334C8F] font-semibold text-lg">{name}</h1>
        <p className="font-normal text-sm opacity-80 text-[#333759]">{bio}</p>
      </div>
    </div>
  );
};
