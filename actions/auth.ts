"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function getUserSession() {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();

    if (error) return null;

    return {
        status: "success",
        user: data?.user,
    };
}

export async function signUp(fd: FormData) {
    const supabase = await createClient();

    const username = fd.get("username") as string;
    const email = fd.get("email") as string;
    const password = fd.get("password") as string;

    const credentials = { username: username, email: email, password: password };

    const { data, error } = await supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
        options: {
            data: {
                username: credentials.username,
            },
        },
    });

    if (error) {
        return { status: "error", message: error.message, user: null };
    } else if (data?.user?.identities?.length === 0) {
        return {
            status: "error",
            message: "Email exists already",
            user: null,
        };
    } else {
        revalidatePath("/", "layout");
        return {
            status: "success",
            message: "User created successfully",
            user: data?.user,
        };
    }
}

export async function signIn(fd: FormData) {
    const supabase = await createClient();

    const email = fd.get("email") as string;
    const password = fd.get("password") as string;

    const credentials = { email: email, password: password };

    const { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
    });

    if (error) {
        return { status: "error", message: error.message, user: null };
    } else {
        const { data: existingUser } = await supabase
            .from("users")
            .select("*")
            .eq("email", credentials?.email)
            .limit(1)
            .single();

        if (!existingUser) {
            const { error: insertError } = await supabase.from("users").insert({
                email: data?.user.email,
                username: data?.user?.user_metadata?.username,
            });

            if (insertError) {
                return {
                    status: "error",
                    message: insertError.message,
                    user: null,
                };
            }
        }

        revalidatePath("/", "layout");
        return {
            status: "success",
            message: "User logged in successfully",
            user: data?.user,
        };
    }
}

export async function signOut() {
    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();

    if (error) return redirect("/error");
    revalidatePath("/", "layout");
    redirect("/login");
}
