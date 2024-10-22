import { Button, Col, Row } from "antd";
import images from "../../../Assets/image.svg";
import { queryByRecord } from "../../../Utils/QueryProcess";

const ColumnsFaTrade = [
  {
    title: "مقدار",
    dataIndex: "amount",
    key: "amount",
    width: "1%",
  },
  {
    title: "مقدار",
    dataIndex: "remain",
    key: "remain",
    width: "1%",
  },
  {
    title: "مقدار",
    dataIndex: "price",
    key: "price",
    width: "1%",
  },
];

export default ColumnsFaTrade;
