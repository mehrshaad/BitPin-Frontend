import { Col, Row } from "antd";
import "./index.scss";

function Header() {
  return (
    <>
      <Row
        className="header-container"
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
              توسعه داده شده توسط{" "}
              <span className="name">
                <a
                  href="https://github.com/mehrshaad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  علی داداش زاده
                </a>
              </span>
            </div>
          </Row>
        </Col>
      </Row>
    </>
  );
}
export default Header;
