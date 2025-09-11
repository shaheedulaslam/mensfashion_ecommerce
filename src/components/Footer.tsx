import React from "react";
import { SocialMedia } from "./SocialMedia";
import { FooterItMarkerzLogo, ShareButton } from "./SvgComponents";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#07102E]">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-12 lg:py-16">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              {/* Logo */}
              <FooterItMarkerzLogo />

              {/* Social Media Links */}
              <div className="text-[#F5F7FA] font-extralight text-sm space-y-1 mt-10">
                <p>Copyright © 2020 itmarkerz ltd.</p>
                <p>All rights reserved</p>
              </div>
              <div className="sm:flex sm:items-center sm:justify-between mt-10">
                <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                  <SocialMedia />
                </div>
              </div>
            </div>

            {/* Nav Links */}
            <div className="grid grid-cols-2 gap-10 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-3 text-lg font-semibold text-white">
                  Company
                </h2>
                <ul className="text-[#F5F7FA] font-extralight text-sbase">
                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      About us
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      Blog
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      Contact us
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      Pricing
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-3 text-lg font-semibold text-white">
                  Support
                </h2>
                <ul className="text-[#F5F7FA] font-extralight text-sbase">
                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      Help center
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      Terms of service
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      Legal
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      Privacy policy
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">
                      Status
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex items-start">
                <div>
                  <h2 className="mb-3 text-lg font-semibold text-white">
                    Stay up to date
                  </h2>
                  <div className="mb-6 bg-[#384059] rounded-lg px-3 flex items-center space-x-2">
                    <input
                      type="text"
                      className=" text-[#D9DBE1] text-sm bg-[#384059] py-2.5 focus:outline-none"
                      placeholder="Your email address"
                    />
                    <button>
                      <ShareButton />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
