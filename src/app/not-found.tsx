import type { Metadata } from 'next';
import NotFound from '@/views/NotFound';

export const metadata: Metadata = {
  title: '404 — Halaman Tidak Ditemukan | Glassbox',
  robots: { index: false, follow: true },
};

export default function NotFoundPage() {
  return <NotFound />;
}
