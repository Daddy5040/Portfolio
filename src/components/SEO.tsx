import { useEffect } from 'react';
import { absoluteUrl, organizationJsonLd, pageTitle, siteConfig, websiteJsonLd } from '../lib/seo';

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

type SEOProps = {
  title: string;
  description?: string;
  image?: string;
  canonicalPath?: string;
  canonical?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  jsonLd?: JsonLd;
};

function ensureMeta(selector: string, create: () => HTMLMetaElement | HTMLLinkElement) {
  const existing = document.head.querySelector(selector);
  if (existing) return existing;
  const element = create();
  document.head.appendChild(element);
  return element;
}

function setMeta(selector: string, attribute: 'content' | 'href', value: string, create: () => HTMLMetaElement | HTMLLinkElement) {
  ensureMeta(selector, create).setAttribute(attribute, value);
}

const createNamedMeta = (name: string) => {
  const meta = document.createElement('meta');
  meta.name = name;
  return meta;
};

const createPropertyMeta = (property: string) => {
  const meta = document.createElement('meta');
  meta.setAttribute('property', property);
  return meta;
};

export function SEO({
  title,
  description = siteConfig.description,
  image = siteConfig.image,
  canonicalPath,
  canonical,
  type = siteConfig.type,
  noindex = false,
  jsonLd,
}: SEOProps) {
  const fullTitle = pageTitle(title);
  const canonicalUrl = canonical ?? absoluteUrl(canonicalPath ?? (typeof window !== 'undefined' ? window.location.pathname : '/'));
  const imageUrl = absoluteUrl(image);

  useEffect(() => {
    document.title = fullTitle;
    document.documentElement.lang = 'en';

    setMeta('meta[name="description"]', 'content', description, () => createNamedMeta('description'));
    setMeta('meta[name="robots"]', 'content', noindex ? 'noindex, nofollow' : 'index, follow', () => createNamedMeta('robots'));
    setMeta('meta[property="og:type"]', 'content', type, () => createPropertyMeta('og:type'));
    setMeta('meta[property="og:site_name"]', 'content', siteConfig.name, () => createPropertyMeta('og:site_name'));
    setMeta('meta[property="og:locale"]', 'content', siteConfig.locale, () => createPropertyMeta('og:locale'));
    setMeta('meta[property="og:title"]', 'content', fullTitle, () => createPropertyMeta('og:title'));
    setMeta('meta[property="og:description"]', 'content', description, () => createPropertyMeta('og:description'));
    setMeta('meta[property="og:image"]', 'content', imageUrl, () => createPropertyMeta('og:image'));
    setMeta('meta[property="og:url"]', 'content', canonicalUrl, () => createPropertyMeta('og:url'));
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image', () => createNamedMeta('twitter:card'));
    setMeta('meta[name="twitter:title"]', 'content', fullTitle, () => createNamedMeta('twitter:title'));
    setMeta('meta[name="twitter:description"]', 'content', description, () => createNamedMeta('twitter:description'));
    setMeta('meta[name="twitter:image"]', 'content', imageUrl, () => createNamedMeta('twitter:image'));
    setMeta('link[rel="canonical"]', 'href', canonicalUrl, () => {
      const link = document.createElement('link');
      link.rel = 'canonical';
      return link;
    });
  }, [canonicalUrl, description, fullTitle, imageUrl, noindex, type]);

  const schemas = [organizationJsonLd, websiteJsonLd, ...(Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [])];

  return (
    <script type="application/ld+json">
      {JSON.stringify(schemas)}
    </script>
  );
}
