import Sidebar from "@/components/shared/Sidebar/Sidebar";
import { Row, Col } from "antd";
import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

function DefaultLayout({ children }: Props) {
    return (
        <Row>
            <Col xs={0} sm={0} md={3} lg={4} xl={4} xxl={4}>
                <Sidebar />
            </Col>
            <Col xs={24} sm={24} md={21} lg={20} xl={20} xxl={20}>
                {children}
            </Col>
        </Row>
    );
}

export default DefaultLayout;
