import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'supersecretkey';

// Define protected routes with roles
const roleProtectedPaths = {
  '/dashboard': ['admin', 'farmer'],  // both can access
  '/admin': ['admin'],              // only admin can access
  '/orders': ['admin'],
  '/live-monitoring': ['farmer'],
  '/monitoring-history': ['farmer'],
  '/notifications': ['farmer'],
  '/billing-status': ['farmer'],
};

export function middleware(request) {
  const { pathname } = request.nextUrl

  console.log('pathname', pathname)

  for (const path in roleProtectedPaths) {
    if (pathname.startsWith(path)) {
      const token = request.cookies.get('token')?.value;

      console.log('token found', token)

      if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
      }

      try {
        const decoded = jwt.verify(token, SECRET_KEY);

        console.log('decoded', decoded)
        // return
        if (!roleProtectedPaths[path].includes(decoded.role)) {
          return NextResponse.redirect(new URL('/login', request.url));
        }

        return NextResponse.next();
      } catch (err) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
    }
  }

  return NextResponse.next();
}
