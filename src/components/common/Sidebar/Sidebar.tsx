"use client";
import Image from "next/image";

import { MdHomeFilled, MdOutlineEmail } from "react-icons/md";
import { AiOutlineSetting, AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { VscDiffAdded } from "react-icons/vsc";
import { PiVideo } from "react-icons/pi";
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
        href: "/video",
        icon: <PiVideo />,
        content: "Video",
    },
    {
        href: "/search",
        icon: <FiSearch />,
        content: "Explore",
    },
    {
        href: "/messages",
        icon: <MdOutlineEmail />,
        content: "Messages",
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
        key: "2",
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
        <aside className="tw-fixed-sidebar p-4 border-r-2 border-secondary">
            <div id="sidebar" className="flex flex-col justify-between h-full">
                <div>
                    <Link href="/">
                        <Image
                            className="w-[70px] h-auto mb-2"
                            src={logoImg}
                            alt=""
                        />
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
                <Dropdown
                    placement="topLeft"
                    menu={{ items }}
                    trigger={["click"]}
                >
                    <SidebarItem icon={<AiOutlineMenu />}>More</SidebarItem>
                </Dropdown>
            </div>
        </aside>
    );
}

export default Sidebar;
