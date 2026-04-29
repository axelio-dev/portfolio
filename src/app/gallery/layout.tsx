import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Astrophotography · Axel",
  description:
    "Deep sky astrophotography images captured from my backyard, including nebulae, galaxies, and more.",
  keywords: [
    "astrophotography",
    "deep sky",
    "nebula",
    "galaxy",
    "astronomy",
    "space photography",
    "deep sky imaging",
    "long exposure astrophotography",
    "emission nebula",
    "reflection nebula",
    "planetary nebula",
    "star cluster",
    "Milky Way",
    "Andromeda",
    "Orion Nebula",
    "backyard astrophotography",
    "image stacking",
    "astrologs founder",
    "astrophotographie France",
    "astronomie amateur France",
    "photo ciel profond France",
    "astrophotography portfolio",
    "night sky photography",
    "amateur astronomer",
    "astronomy photography",
    "deep sky objects photos",
  ],

  openGraph: {
    title: "Astrophotography · Axel",
    description: "Explore deep sky objects captured through astrophotography.",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Astrophotography · Axel",
    description: "Collection of deep sky astrophotography images.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
