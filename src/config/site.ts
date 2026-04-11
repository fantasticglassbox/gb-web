/** Canonical site URL for SEO (sitemap, Open Graph, JSON-LD). Override with REACT_APP_SITE_URL at build time. */
export const SITE_URL =
  (typeof process !== 'undefined' && process.env.REACT_APP_SITE_URL) ||
  'https://glassbox.id';
