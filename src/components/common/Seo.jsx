import { useEffect } from 'react';

const SITE_URL = 'https://prusys.com';

function setMeta(selector, attributes) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement(attributes.property ? 'meta' : 'link');
    document.head.appendChild(node);
  }
  Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
}

export default function Seo({ title, description, path = '/', breadcrumbs = [] }) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;
    setMeta('meta[name="description"]', { name: 'description', content: description });
    setMeta('link[rel="canonical"]', { rel: 'canonical', href: url });
    setMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    setMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    setMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    setMeta('meta[property="og:url"]', { property: 'og:url', content: url });
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary' });
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });

    document.getElementById('page-breadcrumb-schema')?.remove();
    if (breadcrumbs.length) {
      const schema = document.createElement('script');
      schema.id = 'page-breadcrumb-schema';
      schema.type = 'application/ld+json';
      schema.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL }, ...breadcrumbs.map((item, index) => ({ '@type': 'ListItem', position: index + 2, name: item.name, item: `${SITE_URL}${item.path}` }))]
      });
      document.head.appendChild(schema);
    }
  }, [title, description, path, breadcrumbs]);

  return null;
}
