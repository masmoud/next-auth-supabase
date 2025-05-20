import { capitalizeWords } from "@/utils";

const AuthButton = ({
    type,
    loading,
}: {
    type: "login" | "register" | "Reset Password" | "Forgot Password";
    loading: boolean;
}) => {
    return (
        <button
            disabled={loading}
            type="submit"
            className={`${
                loading ? "bg-gray-600" : "bg-blue-600"
            } rounded-md w-full px-12 py-3 text-sm font-medium text-white`}>
            {loading ? "Loading..." : capitalizeWords(type)}
        </button>
    );
};

export default AuthButton;
