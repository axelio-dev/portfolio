import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Student Developer · Axel",
  
  description:
    "Student developer specializing in Next.js and TypeScript. Portfolio, projects, and astrophotography.",

  keywords: [
    "Axel",
    "AxelioDev",
    "axelio",
    "axel developer",
    "axel web dev",
    "developer",
    "portfolio",
    "web developer portfolio",
    "student developer",
    "étudiant développeur",
    "développeur web junior",
    "junior web developer",
    "stage développeur web",
    "web dev intern",
    "alternance développeur",
    "seeking internship",
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "PostgreSQL",
    "Prisma",
    "Node.js",
    "full-stack",
    "REST API",
    "web development",
    "networking",
    "infrastructure web",
    "développeur web France",
    "développeur Next.js France",
    "portfolio développeur français",
    "web developer Paris",
    "développeur web Paris",
    "développeur freelance France",
    "Next.js developer portfolio",
    "freelance web developer",
    "full stack developer portfolio",
    "hire Next.js developer",
    "French web developer",
    "remote developer",
    "astrophotography",
    "astrologs",
    "astrophotography dashboard",
    "astrophotography app",
    "astrophotography tracker",
    "build portfolio with Next.js",
    "modern portfolio website",
    "responsive developer portfolio",
    "open to work developer",
    "freelance Next.js TypeScript",
  ],

  authors: [{ name: "Axel" }],
  creator: "Axel",

  openGraph: {
    title: "Student Developer · Axel",
    description:
      "Portfolio of a student developer building modern web applications and sharing astrophotography.",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary",
    title: "Student Developer · Axel",
    description: "Portfolio, projects, and astrophotography.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#020617] text-white">
        {children}
      </body>
    </html>
  );
}
