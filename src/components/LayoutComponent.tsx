'use client';

import React, { ReactNode, useEffect } from 'react';
import 'aos/dist/aos.css';
import { ItMarkerzLogo, TranslateIcon } from './SvgComponents';
import useScroll from '../utils/useScroll';
import Footer from './Footer';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import MobileMenuNavbar from './MobileMenu';
import AOS from 'aos';

interface LayoutProps {
  children: ReactNode;
}

const MENUS = [
  { title: "Product", path: "/product" },
  { title: "Industries", path: "/industries" },
  { title: "Service", path: "/service" },
  { title: "Portfolio", path: "/portfolio" },
  { title: "Contact us", path: "/contact-us" },
  { title: "Other", path: "/other" },
];

const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  const scrollPosition = useScroll();
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div>
      <header
        className={`sticky top-0 z-50 duration-200 ${
          scrollPosition > 50 ? "shadow bg-white" : ""
        }`}
      >
        <nav
          className="container mx-auto px-3 md:px-5 flex items-center py-3"
          aria-label="Global"
        >
          <div className="flex flex-1">
            <Link href="/"><ItMarkerzLogo /></Link>
          </div>
          <div className="flex lg:hidden">
            <MobileMenuNavbar />
          </div>

          <div className="hidden lg:flex lg:gap-x-12 items-center">
            {MENUS?.map((menu) => (
              <Link key={menu?.path} href={menu?.path}>
                <p
                  className={`text-sbase leading-6 duration-150 " ${
                    pathname === menu?.path ||
                    (menu?.path !== "/" && pathname.includes(menu?.path))
                      ? "text-primary font-semibold opacity-100"
                      : "text-primary-dark hover:text-[#020A55] font-light opacity-80 "
                  }`}
                >
                  {menu?.title}
                </p>
              </Link>
            ))}
            <a
              href="#"
              className="text-sbase font-light text-primary-dark opacity-80"
            >
              <TranslateIcon />
            </a>
          </div>
        </nav>
      </header>
      <main className="flex flex-col">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutComponent;