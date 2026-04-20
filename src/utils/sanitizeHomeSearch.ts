/** Query keys allowed on `/` (marketing attribution). Strip everything else (e.g. legacy `?products/…` from previous domain). */
const ALLOWED_HOME_PARAMS = new Set([
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'fbclid',
  'msclkid',
]);

/**
 * Returns the query string to keep for the homepage (with leading `?`), or `''` if none.
 */
export function sanitizedHomeSearch(search: string): string {
  if (!search || search === '?') return '';
  const raw = search.startsWith('?') ? search.slice(1) : search;
  if (!raw) return '';
  const params = new URLSearchParams(raw);
  const out = new URLSearchParams();
  params.forEach((value, key) => {
    if (ALLOWED_HOME_PARAMS.has(key.toLowerCase())) {
      out.set(key, value);
    }
  });
  const s = out.toString();
  return s ? `?${s}` : '';
}
