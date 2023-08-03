"use client";
import Image from "next/image";

import { MdHomeFilled, MdOutlineEmail } from "react-icons/md";
import {
    AiOutlineBell,
    AiOutlineSetting,
    AiOutlineUser,
    AiOutlineMenu,
} from "react-icons/ai";
import { VscDiffAdded } from "react-icons/vsc";
import { FiBookmark, FiLogOut, FiSearch } from "react-icons/fi";

import { SidebarItemType } from "@/libs/types/sidebar";

import SidebarItem from "./SidebarItem";

import logoImg from "@/assets/images/logo.png";
import Link from "next/link";

import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

const sidebarItems: SidebarItemType[] = [
    {
        href: "/",
        icon: <MdHomeFilled />,
        content: "Home",
    },
    {
        href: "/search",
        icon: <FiSearch />,
        content: "Search",
    },
    {
        href: "/messages",
        icon: <MdOutlineEmail />,
        content: "Messages",
    },
    {
        href: "/notification",
        icon: <AiOutlineBell />,
        content: "Notifications",
    },
    {
        href: "/setting",
        icon: <AiOutlineSetting />,
        content: "Setting",
    },
    {
        href: "/profile",
        icon: <AiOutlineUser />,
        content: "Profile",
    },
    {
        icon: <VscDiffAdded />,
        content: "Post",
    },
];

const items: MenuProps["items"] = [
    {
        label: (
            <Space className="tw-menu-dropdown-item">
                <AiOutlineSetting />
                Setting
            </Space>
        ),
        key: "0",
    },
    {
        label: (
            <Space className="tw-menu-dropdown-item">
                <FiBookmark />
                Bookmark
            </Space>
        ),
        key: "1",
    },
    {
        type: "divider",
    },
    {
        label: (
            <Space className="tw-menu-dropdown-item text-red-500">
                <FiLogOut />
                Log out
            </Space>
        ),
        key: "3",
    },
];

function Sidebar() {
    return (
        <aside className="h-screen p-4 border-r-2 border-secondary">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <Link href="/">
                        <Image className="w-[70px] mb-2" src={logoImg} alt="" />
                    </Link>
                    {sidebarItems.map((item, index) => (
                        <SidebarItem
                            key={index}
                            icon={item.icon}
                            href={item.href!}
                        >
                            {item.content}
                        </SidebarItem>
                    ))}
                </div>
                <Dropdown placement="top" menu={{ items }} trigger={["click"]}>
                    <SidebarItem
                        onClick={(e) => e.preventDefault()}
                        icon={<AiOutlineMenu />}
                    >
                        More
                    </SidebarItem>
                </Dropdown>
            </div>
        </aside>
    );
}

export default Sidebar;
