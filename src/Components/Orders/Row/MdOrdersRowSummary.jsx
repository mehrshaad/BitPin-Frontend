import { Divider, Row, Col } from "antd";

function MdOrdersRowSummary({ mode, values, currency = "IRT" }) {
  const cols =
    mode == 1
      ? ["مجموع مقدار", "مجموع کل", "میانگین قیمت"]
      : ["زمان آخرین سفارش", "مجموع مقدار خرید", "مجموع مقدار فروش"];

  return (
    <>
      <Divider className="order-divider-summary" />
      {cols.map((col, index) => (
        <Col span={24} className="summary-col" key={index}>
          <span className="summary-title">{col}:</span>{" "}
          {values[index].toLocaleString()}
        </Col>
      ))}
    </>
  );
}

export default MdOrdersRowSummary;
