"use client";
import { signUp } from "@/actions/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AuthButton from "./AuthButton";

const RegisterForm = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        const fd = new FormData(event.currentTarget);
        const result = await signUp(fd);

        if (result.status === "success") {
            router.push("/login");
        } else {
            setError(result.message);
        }

        setLoading(false);
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-200">Username</label>
                    <input
                        type="text"
                        placeholder="Username"
                        id="username"
                        name="username"
                        className="mt-1 w-full px-4 p-2  h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-200">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        id="Email"
                        name="email"
                        className="mt-1 w-full px-4 p-2  h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-200">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        className="mt-1 w-full px-4 p-2  h-10 rounded-md border border-gray-200 bg-white text-sm text-gray-700"
                    />
                </div>
                <div className="mt-4">
                    <AuthButton type="register" loading={loading} />
                </div>
                {error && <p className="text-red-500">{error}</p>}
            </form>
        </div>
    );
};

export default RegisterForm;
