import antdTheme from "@/config/antTheme";
import { ConfigProvider } from "antd";
import { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/images/logo.png";

interface Props {
    children?: ReactNode;
}

function AuthLayout({ children }: Props) {
    return (
        <ConfigProvider theme={antdTheme}>
            <div className="bg-gray-100 w-screen h-screen flex items-center justify-center">
                <Link className="absolute top-5 left-5" href="/">
                    <Image className="w-[60px]" src={logoImg} alt="" />
                </Link>
                {children}
            </div>
        </ConfigProvider>
    );
}

export default AuthLayout;
