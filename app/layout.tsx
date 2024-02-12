import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import BootstrapClient from "../components/BootstrapClient"
import Navigation from "../components/Navigation";
import Footer from "../components/Footer"
import SessionProvider from "../components/Session-Provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Idunn SMP Server",
  description: "A Minecraft Server",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <SessionProvider>
        
        <Navigation />
        {children}
        <BootstrapClient />
        {/* <Footer /> */}
        
        </SessionProvider>
      </body>
    </html>
  );
}
