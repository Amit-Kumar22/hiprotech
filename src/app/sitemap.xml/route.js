import { getServerSideSitemap } from 'next-sitemap';

export async function GET() {
  const fields = [
    {
      loc: 'https://hyprotech.in/',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 1.0,
    },
    // Add more URLs as needed
  ];

  return getServerSideSitemap(fields);
}
