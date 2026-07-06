export const siteConfig = {
  name: 'Maherison Daddy',
  title: 'Maherison Daddy | Premium Product Visualization Specialist',
  description:
    'Premium CGI product visualization for Amazon A+ content, hero images, packaging visualization, lifestyle visuals, and commercial product campaigns.',
  url: 'https://maherisondaddy.com',
  image: '/og-image.svg',
  locale: 'en_US',
  type: 'website',
  author: 'Maherison Daddy',
  sameAs: ['https://www.linkedin.com/', 'https://www.instagram.com/', 'https://www.behance.net/'],
} as const;

export const absoluteUrl = (path = '/') => {
  if (/^https?:\/\//i.test(path)) return path;
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
};

export const pageTitle = (title: string) => (title === 'Home' ? siteConfig.title : `${title} | ${siteConfig.name}`);

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteConfig.name,
  url: siteConfig.url,
  image: absoluteUrl(siteConfig.image),
  description: siteConfig.description,
  areaServed: 'Worldwide',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'MG',
  },
  sameAs: siteConfig.sameAs,
  serviceType: ['Product Visualization', 'Packaging Visualization', 'Amazon A+ Content', 'Commercial CGI', 'Product Animation'],
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    '@type': 'Organization',
    name: siteConfig.name,
  },
};
