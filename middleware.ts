import { NextResponse } from 'next/server'

export function middleware() {
  return new NextResponse('Situs ini sedang tidak tersedia.', { status: 503 })
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}