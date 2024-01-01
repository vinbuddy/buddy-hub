import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { authMiddleware } from "@clerk/nextjs";

const protectedRoutes = ["/", "/video", "/explore"];
let isAuthenticated = true; // fake auth

function protectedRouteMiddleware(req: NextRequest) {
    // protected routes -> redirect login
    if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
        const absoluteURL = new URL("/login", req.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }
}

export default function middleware(req: NextRequest) {
    protectedRouteMiddleware(req);
    authMiddleware({});
}

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
