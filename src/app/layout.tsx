import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import QueryClientProvider from "@/components/QueryClientProvider";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export const inter = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[radial-gradient(circle,#08314C_0%,#2B1A1F_150%)]`}
      >
        <QueryClientProvider>{children}</QueryClientProvider>
      </body>
    </html>
  );
}
