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
  title: "Axelio · Aspiring Full-Stack Developer",
  description:
    "Hi! I'm Axelio, a passionate full-stack web developer in training, creating projects with Next.js, React, and TailwindCSS. I aim to grow in IT and web development.",
  other: {
    "google-site-verification": "uIikr_SsrUVqu6LN7Vrux_OjjMhyI_kSwgBIXaueX_o",
    keywords:
      "Axelio, portfolio, full-stack developer, web development, Next.js, React, TailwindCSS, web projects, student developer",
    robots: "index, follow",
  },
  openGraph: {
    title: "Axelio · Aspiring Full-Stack Developer",
    description:
      "Explore the projects and skills of Axelio, a dedicated student passionate about full-stack web development with Next.js, React, and TailwindCSS.",
    url: "https://axelio-dev.vercel.app",
    siteName: "Axelio",
    images: [
      {
        url: "/public/profile.webp",
        width: 1200,
        height: 630,
        alt: "Axelio · Portfolio and Full-Stack Web Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axelio · Aspiring Full-Stack Developer",
    description:
      "Check out Axelio's portfolio and projects, showcasing skills in full-stack web development with Next.js, React, and TailwindCSS.",
    images: ["/public/profile.webp"],
  },
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
