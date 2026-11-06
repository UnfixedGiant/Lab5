//export { auth as proxy } from "@/auth"

import { auth } from "@/auth"


const publicRoutes = ["/login", "/register"]

export const proxy = auth((req) => {
    const isPublic = publicRoutes.includes(req.nextUrl.pathname)

    if (!req.auth && !isPublic) {
        const newUrl = new URL("/login", req.nextUrl.origin)
        return Response.redirect(newUrl)
    }
})


export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}