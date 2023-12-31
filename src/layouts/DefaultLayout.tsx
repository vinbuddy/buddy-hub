import Sidebar from "@/components/common/Sidebar/Sidebar";
import antdTheme from "@/config/antTheme";
import { Row, Col, ConfigProvider } from "antd";
import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

function DefaultLayout({ children }: Props) {
    return (
        <ConfigProvider theme={antdTheme}>
            <Row>
                <Col xs={0} sm={0} md={3} lg={5} xl={5} xxl={5}>
                    <Sidebar />
                </Col>
                <Col xs={24} sm={24} md={21} lg={19} xl={19} xxl={19}>
                    {children}
                </Col>
            </Row>
        </ConfigProvider>
    );
}

export default DefaultLayout;
