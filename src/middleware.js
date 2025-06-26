import { NextResponse } from 'next/server';

const PUBLIC_PATHS = ['/', '/login', '/signup', '/reset-password'];

export function middleware(request) {
  const { pathname } = request.nextUrl;
  // Allow public paths
  if (
    pathname === '/' ||
    pathname === '' ||
    pathname === '/index' ||
    pathname === '/home' ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/public') ||
    pathname.startsWith('/api') ||
    pathname.match(/\.(js|css|png|jpg|jpeg|svg|mp4|webm|ico|gif|avif)$/) ||
    PUBLIC_PATHS.includes(pathname)
  ) {
    return NextResponse.next();
  }
  // Authentication check removed: all pages are now public
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|public).*)'],
};
