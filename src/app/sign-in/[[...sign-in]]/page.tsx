import AuthLayout from "@/layouts/AuthLayout";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <AuthLayout>
            <SignIn />
        </AuthLayout>
    );
}
