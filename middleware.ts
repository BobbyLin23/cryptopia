import { ofetch } from 'ofetch'
import type { Session } from 'better-auth/types'
import { NextResponse, type NextRequest } from 'next/server'

export default async function authMiddleware(request: NextRequest) {
  const session = await ofetch<Session>('/api/auth/get-session', {
    baseURL: request.nextUrl.origin,
    headers: {
      cookie: request.headers.get('cookie') || '',
    },
  })

  if (!session) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|auth).*)'],
}
