import { Avatar, Space, Tooltip } from "antd";

import { AiOutlineMessage, AiOutlineBell } from "react-icons/ai";
import Button from "../Button/Button";

function SubSidebar() {
    return (
        <aside className="tw-fixed-sidebar border-l-2 border-secondary">
            {/* Sub-header */}
            <header className="sticky p-4 top-0 w-full h-[80px]">
                <div className="h-full flex justify-between items-center">
                    <Button size="small" type="primary">
                        Post
                    </Button>

                    <div>
                        <Space size={12}>
                            <Tooltip
                                mouseEnterDelay={0.25}
                                arrow={false}
                                title="Message"
                            >
                                <Button
                                    type="transparent"
                                    shape="circle"
                                    size="medium"
                                    iconSize={23}
                                    icon={<AiOutlineMessage />}
                                ></Button>
                            </Tooltip>

                            <Tooltip
                                mouseEnterDelay={0.25}
                                arrow={false}
                                title="Notification"
                            >
                                <Button
                                    type="transparent"
                                    size="medium"
                                    shape="circle"
                                    iconSize={23}
                                    icon={<AiOutlineBell />}
                                ></Button>
                            </Tooltip>

                            <Avatar
                                className="cursor-pointer"
                                size={40}
                                src="https://lh3.googleusercontent.com/a/AAcHTteNe3gZ6nGtv9uai1rC4IS5WZJ6RK__kCRVDcO4kMM2170=s96-c-rg-br100"
                            />
                        </Space>
                    </div>
                </div>
            </header>
        </aside>
    );
}

export default SubSidebar;
