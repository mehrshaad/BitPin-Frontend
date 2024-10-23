import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import MdCard from "../../Components/Card/MdCard";
import MdItem from "../../Components/Item/MdItem";
import { modeHandler } from "../../Utils/ModeHandler";
import "./index.scss";

function MarketLayout({ data }) {
  const [modes] = useState(["all", "sell", "buy", "orders"]);
  const [mode, setMode] = useState(
    window.innerWidth > 1200 ? modes[0] : modes[3]
  );
  useEffect(() => {
    setMode(window.innerWidth > 1200 ? modes[0] : modes[3]);
  }, [window.innerWidth]);
  return (
    <>
      <Row gutter={[16, 16]} className="market-layout" justify={"center"}>
        {[modes[1], modes[3], modes[2]].map((currentMode, index) => (
          <Col
            key={index}
            className="market-col"
            flex={mode === currentMode || mode === modes[0] ? 1 : 0}
            onClick={() => modeHandler(mode, setMode, currentMode, modes)}
          >
            <MdCard market={true} mode={currentMode}>
              <MdItem
                boolean={mode === currentMode || mode === modes[0]}
                mode={currentMode}
                modes={modes}
                data={data}
              />
            </MdCard>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default MarketLayout;
