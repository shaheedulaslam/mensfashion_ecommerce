'use client';

import React from "react";
import { UpArrow } from "./SvgComponents";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

interface FaqItemProps {
  question: string;
  answer: string;
}

export const FaqSection: React.FC<FaqItemProps> = ({ question, answer }) => {
  return (
    <Disclosure as="div" className="border-b border-gray-200 pb-4">
      {({ open }: { open: boolean }) => (
        <>
          <DisclosureButton className="flex items-center justify-between w-full text-left cursor-pointer">
            <h3 className="text-base flex-1 font-medium text-[#333759]">
              {question}
            </h3>
            <div
              className={`transform transition-transform duration-200 ${
                open ? "rotate-0" : "rotate-180"
              }`}
            >
              <UpArrow />
            </div>
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-[#333759] text-sbase">
            {answer}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};