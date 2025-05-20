function getEnvVar(key: string): string {
    const val = process.env[key];
    if (!val) throw new Error(`Missing environment variable: ${key}`);
    return val;
}

export const supabaseUrl = getEnvVar("NEXT_PUBLIC_SUPABASE_URL");
export const supabaseKey = getEnvVar("NEXT_PUBLIC_SUPABASE_ANON_KEY");
export const baseUrl = getEnvVar("NEXT_PUBLIC_BASE_URL");

export const env = {
    supabaseUrl,
    supabaseKey,
    baseUrl,
} as const;
