import React, { useMemo } from "react";
import "animate.css";
import "./MdItem.scss";
import MdOrders from "../Orders/MdOrders";
import { Col, Row } from "antd";

function MdItem({ boolean, mode, modes, data, setData }) {
  const text = useMemo(() => {
    if (mode === modes[1]) {
      return "سفارشات فروش";
    } else if (mode === modes[2]) {
      return "سفارشات خرید";
    }
    return "معاملات";
  }, [mode, modes]);
  console.log(data);
  return (
    <>
      {boolean ? (
        <Row
          gutter={[16, 0]}
          align={"top"}
          className="animate__animated animate__fadeIn"
        >
          <Col span={24} align={"right"}>
            <h2>{text}</h2>
          </Col>
          <Col
            span={24}
            align={"right"}
            className="table-col animate__animated animate__fadeIn"
          >
            <MdOrders data={data?.orders.slice(0, 15)} mode={mode} />
            {/* <MdTableTrade dataSource={data?.orders.slice(0, 10)} /> */}
          </Col>
        </Row>
      ) : (
        <p className="placeholder animate__animated animate__fadeIn">{text}</p>
      )}
    </>
  );
}

export default React.memo(MdItem);
