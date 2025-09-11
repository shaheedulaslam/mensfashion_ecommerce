
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import LayoutComponent from '@/components/LayoutComponent';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const generalSans = localFont({
  src: [
    {
      path: '../../public/fonts/GeneralSans-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GeneralSans-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GeneralSans-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GeneralSans-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GeneralSans-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-general-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Your App Title',
  description: 'Your app description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={generalSans.variable}>
        <LayoutComponent>{children}</LayoutComponent>
      </body>
    </html>
  );
}