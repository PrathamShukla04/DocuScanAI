"use client";  // <-- this makes it a Client Component

import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <SessionProvider>
          <div className="relative w-full flex items-center justify-center">
            <Navbar />
          </div>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
