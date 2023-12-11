
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const publicPages = [];

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(request) {
    const token = request.nextauth.token
    if (token && request.nextUrl.pathname.startsWith("/login")) {
      request.nextUrl.pathname = "/";
      return NextResponse.redirect(request.nextUrl);
    }
    if (!token && publicPages.includes(request.nextUrl.pathname)) {
      return NextResponse.next();
    }
    if (!token && !request.nextUrl.pathname.startsWith("/login")) {
      request.nextUrl.pathname = "/login";
      return NextResponse.redirect(request.nextUrl);
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        return true;
      },
    },
  }
);


export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.+.svg|.+.png|.+.jpe?g|.+.gif|favicon.ico).*)",
  ],
};
