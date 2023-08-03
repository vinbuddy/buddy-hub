import { IconType } from "react-icons";

export interface SidebarItemType {
    href?: string;
    icon: React.ReactNode;
    content?: string;
    onClick?: (e: any) => void;
}
