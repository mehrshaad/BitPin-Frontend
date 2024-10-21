import { Table } from "antd";
import ColumnsFa from "./ColumnsFa.jsx";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./MdTable.scss";

function MdTable({ dataSource }) {
  return (
    <>
      <Table
        rowKey={(row) => row.id}
        scroll={{ x: "auto" }}
        columns={ColumnsFa}
        pagination={{
          pageSize: 10,
          nextIcon: <LeftOutlined />,
          prevIcon: <RightOutlined />,
          // total: dataSource.length,
        }}
        dataSource={dataSource}
        footer={() => <div>تعداد کل: {dataSource.length}</div>}
      />
    </>
  );
}

export default MdTable;
