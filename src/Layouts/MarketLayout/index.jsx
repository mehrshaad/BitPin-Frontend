import { Col, Row } from "antd";
import { useState } from "react";
import MdCard from "../../Components/Card/MdCard";
import MdItem from "../../Components/Item/MdItem";
import { modeHandler } from "../../Utils/ModeHandler";
import "./index.scss";

function MarketLayout({
  queueData,
  setQueueData,
  buyData,
  setBuyData,
  sellData,
  setSellData,
}) {
  const [modes] = useState(["all", "sell", "buy", "orders"]);
  const [modesMapper] = useState({
    sell: [sellData, setSellData],
    buy: [buyData, setBuyData],
    orders: [queueData, setQueueData],
  });
  const [mode, setMode] = useState(modes[0]);
  return (
    <>
      <Row gutter={[16, 16]} className="market-layout">
        {modes.slice(1, 4).map((currentMode, index) => (
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
                data={modesMapper[currentMode][0]}
                setData={modesMapper[currentMode][1]}
              />
            </MdCard>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default MarketLayout;
