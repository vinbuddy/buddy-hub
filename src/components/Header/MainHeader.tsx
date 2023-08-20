import { Row, Col } from "antd";
import SearchBar from "../SearchBar/SearchBar";

function MainHeader() {
    return (
        <header className="p-4 sticky top-0 w-full h-[80px] border-b border-secondary">
            <Row className="items-center">
                <Col span={10}>
                    <h1 className="text-xl font-bold">Home</h1>
                </Col>
                <Col span={14}>
                    <SearchBar />
                </Col>
            </Row>
        </header>
    );
}

export default MainHeader;
