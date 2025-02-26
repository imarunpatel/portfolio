import type { Metadata } from "next";
import { Geist, Neuton, M_PLUS_Code_Latin } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import PageScrollBar from "@/components/ui/pageScrollBar";
import Footer from "@/components/sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const neuton = Neuton({ 
  variable: "--font-neuton", 
  subsets: ["latin"],
  weight: ['200', '300', '400', '700', '800']
});

const codeLatin = M_PLUS_Code_Latin({ 
  variable: "--font-codeLatin", 
  subsets: ["latin"],
  weight: ['200', '300', '400', '700']
});

export const metadata: Metadata = {
  title: "Arun Patel | Frontend Engineer",
  description: "I am a Frontend Engineer with experience in designing, developing, and implementing scalable, responsive enterprise-level applications",
  icons: {
    icon: 'icons/10411620_1974.svg'
  }
};

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
        <PageScrollBar/>
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
