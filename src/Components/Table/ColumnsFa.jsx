import { Grid } from "antd";
import { Col, Row } from "antd";
import notFound from "../../Assets/not-found.svg";
import images from "../../Assets/image.svg";
const ColumnsFa = [
  {
    title: "نام رمز ارز",
    dataIndex: "title",
    key: "title",
    width: 500,
    align: "center",
    // render: (_, record) => (
    //   <>
    //     <Row>
    //       <Col>
    //         {record.image ? (
    //           <img
    //             src={record.image}
    //             alt=""
    //             style={{
    //               width: "var(--table-icon-size)",
    //               height: "var(--table-icon-size)",
    //             }}
    //           />
    //         ) : (
    //           <img
    //             src={notFound}
    //             alt=""
    //             style={{
    //               width: "var(--table-icon-size)",
    //               height: "var(--table-icon-size)",
    //             }}
    //           />
    //         )}
    //       </Col>
    //       <Col>
    //         <Row>
    //           <Col span={24}>col</Col>
    //         </Row>
    //         <Row>
    //           <Col span={24}>col</Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //   </>
    // ),
  },
  {
    title: "Name",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

export default ColumnsFa;
