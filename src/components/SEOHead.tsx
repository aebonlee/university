import { useEffect } from 'react';
import { SITE_CONFIG } from '../config/site';

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
}

export default function SEOHead({ title, description, path }: SEOHeadProps) {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE_CONFIG.name}` : SITE_CONFIG.name;

    const setMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const desc = description || SITE_CONFIG.description;
    setMeta('og:title', document.title);
    setMeta('og:description', desc);
    setMeta('og:url', path ? `${SITE_CONFIG.url}${path}` : SITE_CONFIG.url);

    let descMeta = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (descMeta) descMeta.setAttribute('content', desc);
  }, [title, description]);

  return null;
}
