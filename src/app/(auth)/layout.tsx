import AuthLayout from "@/layouts/AuthLayout";

export default function AuthenticationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <AuthLayout>{children}</AuthLayout>;
}
