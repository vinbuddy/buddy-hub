import AuthLayout from "@/layouts/AuthLayout";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <AuthLayout>
            <SignUp />
        </AuthLayout>
    );
}
