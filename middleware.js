/**
 * Vercel Edge Middleware: unknown non-asset paths get the SPA shell with HTTP 410 Gone.
 * Invalid /articles/:slug stays 200 until slugs are listed here.
 * When adding a vacancy, add its slug to CAREER_SLUGS.
 */
import { next } from '@vercel/functions';

const CAREER_SLUGS = new Set(['sales-business-development']);

const ASSET =
  /\.(js|mjs|css|map|ico|png|jpe?g|gif|webp|svg|avif|woff2?|ttf|eot|txt|xml|json|webmanifest|html)$/i;

function isStaticPath(path) {
  return ASSET.test(path) || path.startsWith('/static/');
}

function isAllowedSpaPath(path) {
  if (path === '/' || path === '/privacy-policy' || path === '/articles' || path === '/careers') {
    return true;
  }
  if (/^\/articles\/[a-z0-9-]+$/.test(path)) return true;
  if (/^\/services\/(media-placement|ooh-transit|offline-event)$/.test(path)) return true;
  const career = path.match(/^\/careers\/([a-z0-9-]+)$/);
  if (career && CAREER_SLUGS.has(career[1])) return true;
  return false;
}

export default async function middleware(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return next();
  }

  if (isStaticPath(path) || isAllowedSpaPath(path)) {
    return next();
  }

  const indexUrl = new URL('/index.html', request.url);
  const indexRes = await fetch(indexUrl, { method: request.method });

  const ct = indexRes.headers.get('content-type') || '';
  if (!ct.includes('text/html')) {
    return indexRes;
  }

  const headers = new Headers(indexRes.headers);
  return new Response(indexRes.body, {
    status: 410,
    statusText: 'Gone',
    headers,
  });
}

export const config = {
  matcher: ['/((?!static/).*)'],
};
