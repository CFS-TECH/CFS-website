import { NextResponse } from 'next/server'

export function middleware(request) {
  const token = request.cookies.get('adminToken')?.value
  const { pathname } = request.nextUrl

  const isPublicAdminRoute = 
    pathname === '/admin/login' || 
    pathname.startsWith('/admin/forgot-password') || 
    pathname.startsWith('/admin/reset-password');

  // If path starts with /admin and is not a public admin route
  if (pathname.startsWith('/admin') && !isPublicAdminRoute) {
    // Check for adminToken cookie
    if (!token) {
      // Redirect to login page
      const url = new URL('/admin/login', request.url)
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

// Only match /admin and its subroutes
export const config = {
  matcher: '/admin/:path*',
}
