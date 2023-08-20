import MainHeader from "@/components/Header/MainHeader";
import SearchBar from "@/components/SearchBar/SearchBar";
import SubSidebar from "@/components/common/Sidebar/SubSidebar";
import DefaultLayout from "@/layouts/DefaultLayout";
import { Row, Col } from "antd";

export default function Home() {
    return (
        <DefaultLayout>
            <Row>
                {/* Content */}
                <Col xs={22} sm={22} md={22} lg={19} xl={16} xxl={16}>
                    <div className="h-[2000px]">
                        <MainHeader />
                    </div>
                </Col>
                {/* SubSidebar */}
                <Col xs={3} sm={3} md={3} lg={5} xl={8} xxl={8}>
                    <SubSidebar />
                </Col>
            </Row>
        </DefaultLayout>
    );
}
