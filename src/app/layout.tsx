import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import Navbar from './navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carl Saginsin | Software Engr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
    <body className={`${inter.className} bg-black text-white`}>  
    <Providers>
    {/* <Navbar /> */}
      {children}
      </Providers>
      </body>
    </html>
  );
}
