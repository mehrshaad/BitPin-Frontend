import { Flex, Progress, Row, Col } from "antd";
import "./MdProgress.scss";

function MdProgress({ percent = 100, mode = "buy", items = ["a", "b", "c"] }) {
  return (
    <Flex gap="small" vertical>
      <Progress
        percent={percent}
        percentPosition={{
          align: "center",
          type: "outer",
        }}
        strokeColor={`var(--progress-${mode}-background-color)`}
        format={() => (
          <Row
            className="order-dets"
            align={"middle"}
            justify={"space-between"}
          >
            <Col span={8} align={"right"}>
              {items[0]}
            </Col>
            <Col span={8} align={"center"}>
              {items[1]}
            </Col>
            <Col span={8} align={"left"}>
              {items[2]}
            </Col>
          </Row>
        )}
        strokeLinecap={"square"}
        size={["100%", 40]}
      />
    </Flex>
  );
}
export default MdProgress;
