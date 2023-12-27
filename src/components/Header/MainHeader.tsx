import { Row, Col, Segmented } from "antd";
import SearchBar from "../SearchBar/SearchBar";

function MainHeader() {
    return (
        <header className="p-4 sticky top-0 w-full h-[80px] border-b border-secondary">
            <Row className="items-center">
                <Col span={10}>
                    <Segmented size="large" options={["Feed", "Following"]} />
                </Col>
                <Col span={14}>
                    <SearchBar />
                </Col>
            </Row>
        </header>
    );
}

export default MainHeader;
