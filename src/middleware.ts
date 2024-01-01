import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { authMiddleware } from "@clerk/nextjs";

const protectedRoutes = ["/", "/video", "/explore"];
let isAuthenticated = false; // fake auth

// async function protectedRouteMiddleware(req: NextRequest) {
//     // protected routes -> redirect login
//     if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
//         const absoluteURL = new URL("/login", req.nextUrl.origin);
//         return NextResponse.redirect(absoluteURL.toString());
//     }
// }

export default authMiddleware({
    publicRoutes: ["/api/webhooks(.*)"],
});

// export default async function middleware(req: NextRequest) {
//     await protectedRouteMiddleware(req);
//     authMiddleware({
//         publicRoutes: ["/api/webhooks(.*)"],
//     });
// }

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
