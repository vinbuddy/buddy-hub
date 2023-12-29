import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/", "/video", "/explore"];
let isAuthenticated = true; // fake auth

export default function middleware(req: NextRequest) {
    // protected routes -> redirect login
    if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
        const absoluteURL = new URL("/login", req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }
}
