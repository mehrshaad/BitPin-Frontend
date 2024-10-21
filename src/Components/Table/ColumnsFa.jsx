import { Button, Col, Row } from "antd";
import images from "../../Assets/image.svg";

const ColumnsFa = [
  {
    title: "نام رمز ارز",
    dataIndex: "title",
    key: "title",
    width: 500,
    align: "center",
    render: (_, record) => (
      <>
        <Row className="name-col">
          <Col className="coin-icon">
            {record.currency1.image ? (
              <img src={record.currency1.image} alt="" />
            ) : (
              <img src={images} alt="" />
            )}
          </Col>
          <Col>
            <Row>
              <Col span={24} className="coin-title">
                {record.currency1.title_fa}
              </Col>
            </Row>
            <Row>
              <Col span={24} className="coin-dets">
                {record.currency1.code} / {record.currency2.code}
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    ),
  },
  {
    title: "آخرین قیمت",
    dataIndex: "price_info",
    key: "price_info",
    render: (price_info, record) => (
      <span dir="ltr">
        {parseFloat(price_info.price).toLocaleString()} {record.currency2.code}
      </span>
    ),
  },
  {
    title: "تغییرات",
    dataIndex: "price_info",
    key: "price_info",
    render: (price_info) =>
      parseFloat(price_info.change) > 0 ? (
        <span className="possitive" dir="ltr">
          {parseFloat(price_info.change)}%
        </span>
      ) : (
        <span className="negative" dir="ltr">
          {parseFloat(price_info.change)}%
        </span>
      ),
  },
  {
    title: "",
    dataIndex: "buy",
    key: "buy",
    width: "1%",
    render: (buy) => (
      <Button type="primary">
        خرید / فروش
      </Button>
    ),
  },
];

export default ColumnsFa;
