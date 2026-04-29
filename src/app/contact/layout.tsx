import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact · Axel",
  description:
    "Get in touch for a project, internship opportunity, or any question.",
  keywords: [
    "contact",
    "Axel",
    "AxelioDev",
    "axel developer contact",
    "contact developer portfolio",
    "contact axelio",
    "stage développeur web",
    "alternance développeur",
    "offre stage informatique",
    "développeur disponible stage",
    "recruter développeur junior",
    "embaucher développeur Next.js",
    "contacter développeur France",
    "hire web developer",
    "internship offer developer",
    "hire Next.js developer",
    "junior developer available",
    "remote web developer for hire",
    "freelance developer contact",
    "Next.js developer",
    "TypeScript developer",
    "full-stack developer",
    "student developer",
    "open to work",
    "seeking internship 2026",
  ],

  openGraph: {
    title: "Contact · Axel",
    description: "Reach out for projects, internships, or questions.",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Contact · Axel",
    description: "Contact page for project and internship opportunities.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
