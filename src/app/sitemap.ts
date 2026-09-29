import { MetadataRoute } from 'next';
import { treatmentsData } from '@/data/treatments';
import { doctorsData } from '@/data/doctors';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kovaihealthcenter.com';
  const currentDate = new Date().toISOString();

  // Core Static Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/doctors`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/awards`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Dynamic Treatment Pages
  const treatmentRoutes: MetadataRoute.Sitemap = Object.keys(treatmentsData).map((slug) => ({
    url: `${baseUrl}/treatments/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Dynamic Doctor Detail Pages
  const doctorRoutes: MetadataRoute.Sitemap = doctorsData.map((doc) => ({
    url: `${baseUrl}/doctors/${doc.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...staticRoutes, ...treatmentRoutes, ...doctorRoutes];
}
