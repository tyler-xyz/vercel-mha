import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Montserrat } from 'next/font/google';

export const sfPro = localFont({
  src: "./SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
// Define Montserrat font
export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: [ '100', '200', '300', '400','500', '600', '700'],
//  display: 'swap',
  variable: "--font-mont"
});
