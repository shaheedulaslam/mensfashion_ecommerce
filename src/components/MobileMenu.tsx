/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MENUS = [
  { title: "Product", path: "/product" },
  { title: "Industries", path: "/industries" },
  { title: "Service", path: "/service" },
  { title: "Portfolio", path: "/portfolio" },
  { title: "Contact us", path: "/contact-us" },
  { title: "Other", path: "/other" },
];

export default function MobileMenuNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname()

  const handleKeyDownEscape = (event: any) => {
    if (event.key === "Escape") {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      <div
        enter-classname="opacity-0"
        enter-active-classname="ease-out transition-medium"
        enter-to-classname="opacity-100"
        leave-classname="opacity-100"
        leave-active-classname="ease-out transition-medium"
        leave-to-classname="opacity-0"
      >
        {mobileMenuOpen && (
          <button
            type="button"
            onKeyDown={handleKeyDownEscape}
            className="z-10 fixed inset-0 transition-opacity"
          >
            <button
              type="button"
              aria-label="backdrop"
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black opacity-30"
              tabIndex={0}
            />
          </button>
        )}
      </div>
      <aside
        className={`p-5 transform top-0 left-0 w-64 bg-white z-20 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30" ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="close">
          <button
            type="button"
            className="absolute top-0 right-0 mt-4 mr-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <XMarkIcon />
          </button>
        </div>

        {MENUS?.map((menu) => (
          <Link key={menu?.path} href={menu?.path}>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className={`lg:px-3 py-2  text-base  leading-6 duration-150 flex items-center" ${
                pathname === menu?.path ||
                (menu?.path !== "/" && pathname.includes(menu?.path))
                  ? "text-primary font-semibold"
                  : "text-primary-dark hover:text-[#020A55] font-light "
              }`}
            >
              {menu?.title}
            </button>
          </Link>
        ))}
      </aside>
    </>
  );
}
