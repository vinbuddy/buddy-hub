"use client";
import { SidebarItemType } from "@/libs/types/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props extends SidebarItemType {
    children?: string;
}

function SidebarItem({ href = "", icon, children, ...props }: Props) {
    const pathName = usePathname();
    const isActive = pathName === href;

    return (
        <>
            {href ? (
                <Link
                    className={`${
                        isActive && "font-bold text-primary"
                    } tw-sidebar-item `}
                    href={href!}
                >
                    <span
                        className={`${
                            isActive && "font-bold text-primary"
                        } mr-4 text-3xl`}
                    >
                        {icon}
                    </span>
                    <span
                        className={`${
                            isActive && "font-bold text-primary"
                        } text-lg`}
                    >
                        {children}
                    </span>
                </Link>
            ) : (
                <button
                    {...props}
                    className={`${
                        isActive && "font-bold text-primary"
                    } tw-sidebar-item `}
                >
                    <span
                        className={`${
                            isActive && "font-bold text-primary"
                        } mr-4 text-3xl`}
                    >
                        {icon}
                    </span>
                    <span
                        className={`${
                            isActive && "font-bold text-primary"
                        } text-lg`}
                    >
                        {children}
                    </span>
                </button>
            )}
        </>
    );
}

export default SidebarItem;
