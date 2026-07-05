import { useEffect } from 'react';

const siteName = 'Vanta Forge Studio';
const defaultDescription = 'Premium 3D artist portfolio for product visualization, architectural visualization, cinematic rendering, animation, and case studies.';
const defaultOgImage = '/og-image.svg';
const defaultCanonical = 'https://example.com';

function setMeta(selector: string, attribute: 'content' | 'href', value: string) {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
}

export function SEO({ title, description = defaultDescription, image = defaultOgImage, canonical = defaultCanonical }: { title: string; description?: string; image?: string; canonical?: string }) {
  const pageTitle = `${title} | ${siteName}`;

  useEffect(() => {
    document.title = pageTitle;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', pageTitle);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:image"]', 'content', image);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[name="twitter:title"]', 'content', pageTitle);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', image);
    setMeta('link[rel="canonical"]', 'href', canonical);
  }, [canonical, description, image, pageTitle]);

  return null;
}
