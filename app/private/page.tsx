import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function PrivatePage() {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();

    if (error || !data?.user) {
        redirect("/login");
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <p>Hello {data.user.email}</p>
        </div>
    );
}
