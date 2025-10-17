import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://axelio-dev.vercel.app',
      lastModified: new Date('2025-10-17'),
      changeFrequency: 'monthly', 
      priority: 1, 
    },
  ]
}
