import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { queryByRecord } from "../../Utils/QueryProcess.js";
import ColumnsFa from "./ColumnsFa.jsx";
import "./MdTable.scss";

function MdTable({ dataSource }) {
  return (
    <>
      <Table
        rowKey={(row) => row.id}
        onRow={(record) => {
          return {
            onClick: () => {
              window.location.href = `/trade?record=${queryByRecord(record)}`;
            },
          };
        }}
        scroll={{ x: true }}
        columns={ColumnsFa}
        pagination={{
          pageSize: 10,
          nextIcon: <LeftOutlined />,
          prevIcon: <RightOutlined />,
          pageSizeOptions: [5, 10, 20, 50],
          locale: { items_per_page: "رمز ارز در صفحه" },
        }}
        dataSource={dataSource}
        footer={() => <div>تعداد کل: {dataSource.length}</div>}
      />
    </>
  );
}

export default MdTable;
