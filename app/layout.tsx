import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SideBar } from "@/components/SideBar";
import { NavBar } from "@/components/NavBar";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GoIndiaAssignment",
  description: "GoIndiaAssignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Suspense fallback={<div>Loding...</div>}>
          <NavBar />
        </Suspense>
        <div className="flex relative">
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  );
}
