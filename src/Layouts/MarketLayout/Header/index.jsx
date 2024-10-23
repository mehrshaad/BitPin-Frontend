import { Col, Row, Space } from "antd";
import { useEffect, useState } from "react";
import images from "../../../Assets/image.svg";
import { fetchMarketData } from "../../../Services/GetApi";
import { handleQuery } from "../../../Utils/QueryProcess";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

function MarketLayoutHeader() {
  const record = handleQuery();
  const [coinData, setCoinData] = useState({});
  const fetchData = async () => {
    const res = await fetchMarketData("id", record);
    setCoinData(res[0]);
  };
  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  document.documentElement.style.setProperty(
    "--coin-color",
    `#${coinData?.currency1?.color}15`
  );
  return (
    <>
      <Row gutter={[16, 0]} justify={"start"} align={"middle"}>
        <Col>
          <img src={coinData?.currency1?.image} alt={images} />
        </Col>
        <Col>
          <Space direction="vertical" size={"small"}>
            <h2>{coinData?.title_fa}</h2>
            <p>{coinData?.code}</p>
          </Space>
        </Col>
        <Col align={"start"} flex="auto" dir="ltr">
          <h3>
            {Number(coinData?.price_info?.price).toLocaleString()}{" "}
            <span className="currency">{coinData?.currency2?.code}</span> (
            {parseFloat(coinData?.price_info?.change) > 0 ? (
                <span className="possitive">
                  <TiArrowSortedUp />
                {parseFloat(coinData?.price_info?.change)}%
              </span>
            ) : (
              <span className="negative">
                <TiArrowSortedDown />
                {parseFloat(coinData?.price_info?.change)}%
              </span>
            )}
            )
          </h3>
        </Col>
      </Row>
    </>
  );
}

export default MarketLayoutHeader;
