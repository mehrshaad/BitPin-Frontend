import { Col, Row, Divider } from "antd";
function MdOrdersRow({ colA, colB, colC }) {
  return (
    <>
      <Row className="order-dets" align={"middle"} justify={"space-between"}>
        <Col span={8} align={"right"}>
          {colA}
        </Col>
        <Col span={8} align={"center"}>
          {colB}
        </Col>
        <Col span={8} align={"left"}>
          {colC}
        </Col>
      </Row>
      <Divider className="order-divider" />
    </>
  );
}

export default MdOrdersRow;
