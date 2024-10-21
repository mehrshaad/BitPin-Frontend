import { Col, Row } from "antd";
import "./index.scss";

function Header() {
  return (
    <>
      <Row
        style={{
          width: "100%",
          verticalAlign: "middle",
        }}
        justify={"space-between"}
        align={"middle"}
        gutter={[16, 16]}
      >
        <Col>
          <Row justify={"space-between"}>
            <h1 className="title" style={{ justifyContent: "center" }}>
              مارکت رمز ارز بیت پین
            </h1>
          </Row>
          <Row justify={"space-between"}>
            <div className="info">
              توسعه داده شده توسط <span className="name">علی داداش زاده</span>
            </div>
          </Row>
        </Col>
      </Row>
    </>
  );
}
export default Header;
