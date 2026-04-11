/** Open Graph locale codes for Indonesia-first bilingual site */
export const OG_LOCALE_ID = 'id_ID';
export const OG_LOCALE_EN = 'en_US';

export function ogLocalePair(lang: string): { primary: string; alternate: string } {
  const isId = lang === 'id' || lang.startsWith('id');
  return isId
    ? { primary: OG_LOCALE_ID, alternate: OG_LOCALE_EN }
    : { primary: OG_LOCALE_EN, alternate: OG_LOCALE_ID };
}
