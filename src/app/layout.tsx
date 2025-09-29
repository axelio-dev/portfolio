import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script, Cookie } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const dancingScript = Dancing_Script({
  weight: ["500"],
  subsets: ["latin"],
});

export const cookie = Cookie({
  weight: ["400"], // Regular
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Axelio · Portfolio",
  description:
    "Hello! I'm Axelio (axelio-dev), a young student learning full-stack web development and aiming to work in IT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}antialiased bg-linear-to-r from-blue-900 to-slate-900 dark`}
      >
        {children}
      </body>
    </html>
  );
}
