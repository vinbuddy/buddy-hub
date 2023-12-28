import antdTheme from "@/config/antTheme";
import { ConfigProvider } from "antd";
import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

function AuthLayout({ children }: Props) {
    return (
        <ConfigProvider theme={antdTheme}>
            <div className="bg-gray-100 w-screen h-screen flex items-center justify-center">
                {children}
            </div>
        </ConfigProvider>
    );
}

export default AuthLayout;
