import type { Metadata } from "next";
import { Geist, Neuton } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";
import Footer from "@/components/sections/Footer";
// import PageScrollBar from "@/components/ui/PageScrollBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const neuton = Neuton({ 
  variable: "--font-neuton", 
  subsets: ["latin"],
  weight: ['200', '300', '400', '700', '800']
});


export const metadata: Metadata = {
  title: "Arun Patel | Frontend Engineer",
  description: "I am a Frontend Engineer with experience in designing, developing, and implementing scalable, responsive enterprise-level applications",
};

if (!Promise.withResolvers) {
  Promise.withResolvers = function <T>() {
    let resolve: (value: T | PromiseLike<T>) => void;
    let reject: (reason?: any) => void;

    const promise = new Promise<T>((res, rej) => {
      resolve = res;
      reject = rej;
    });

    return { promise, resolve: resolve!, reject: reject! };
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"  rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${neuton.variable} font-sans antialiased flex flex-col min-h-screen dark  bg-gradient-to-b from-black via-black/90 to-blue-900`}
      >
        {/* <PageScrollBar/> */}
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
