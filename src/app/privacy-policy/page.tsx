import type { Metadata } from 'next';
import idT from '@/locales/id/translation.json';
import { SITE_URL } from '@/config/site';
import PrivacyPolicy from '@/views/PrivacyPolicy';

export const metadata: Metadata = {
  title: idT.seo.privacyTitle,
  description: idT.seo.privacyDescription,
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  openGraph: {
    title: idT.seo.privacyTitle,
    description: idT.seo.privacyDescription,
    url: `${SITE_URL}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
