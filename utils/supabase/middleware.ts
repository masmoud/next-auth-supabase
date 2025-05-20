import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({ request });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
                    supabaseResponse = NextResponse.next({ request });
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    );
                },
            },
        }
    );

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const path = request.nextUrl.pathname;

    const guestOnlyRoutes = ["/login", "/register", "/forgot-password", "/reset-password", "/auth"];

    // 1. If user is NOT logged in and trying to access protected page => redirect to login
    const isGuestPage = guestOnlyRoutes.some((route) => path.startsWith(route));

    if (!user && !isGuestPage) {
        const url = request.nextUrl.clone();
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }

    // 2. If user IS logged in and trying to access a guest-only page => redirect to dashboard
    if (user && isGuestPage) {
        const url = request.nextUrl.clone();
        url.pathname = "/"; // or wherever you want
        return NextResponse.redirect(url);
    }

    return supabaseResponse;
}
