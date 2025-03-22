import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import NextTopLoader from 'nextjs-toploader';
import { Suspense } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Linktree Clone",
  description: "Generated your custom linktree",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Suspense fallback={<div className="w-[80vw] h-[8vh] z-10 fixed top-10 right-[10vw] bg-gray-200 rounded-full animate-pulse"></div>}>
          <Navbar />
        </Suspense>

        <main className="h-[90vh]">
          <NextTopLoader />
          <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
            {children}
          </Suspense>
        </main>
      </body>
    </html>
  );
}
