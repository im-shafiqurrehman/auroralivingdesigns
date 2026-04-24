import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Next.js Edge Middleware
 * Protects /admin/* routes — redirects to /login if the aurora_token cookie is absent.
 * Full role verification (admin vs user) happens inside the AdminLayout via the auth store.
 */
export function middleware(request: NextRequest) {
  const token = request.cookies.get('aurora_token')?.value;

  if (!token) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
};
