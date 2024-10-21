import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Table } from "antd";
import ColumnsFa from "./ColumnsFa.jsx";
import "./MdTable.scss";

function MdTable({ dataSource }) {
  return (
    <>
      <Table
        rowKey={(row) => row.id}
        scroll={{ x: true }}
        columns={ColumnsFa}
        pagination={{
          pageSize: 10,
          nextIcon: <LeftOutlined />,
          prevIcon: <RightOutlined />,
          pageSizeOptions: [5, 10, 20, 50],
          locale:{ items_per_page: "تعداد در صفحه"}
          // total: dataSource.length,
        }}
        dataSource={dataSource}
        footer={() => <div>تعداد کل: {dataSource.length}</div>}
      />
    </>
  );
}

export default MdTable;
