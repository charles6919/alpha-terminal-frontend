import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
    const nickname = request.cookies.get("nickname")
    if (!nickname) {
        return NextResponse.redirect(new URL("/login", request.url))
    }
}

export const config = {
    matcher: ["/dashboard", "/watchlist"],
}
