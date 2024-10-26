import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { queryByRecord } from "../../Utils/QueryProcess.js";
import ColumnsFa from "./Column/ColumnsFa";
import "./MdTable.scss";

function MdTable({ dataSource }) {
  const navigate = useNavigate();
  return (
    <>
      <Table
        rowKey={(row) => row.id}
        onRow={(record) => {
          return {
            onClick: () => {
              navigate(
                `/BitPin-Frontend-Task/trade?record=${queryByRecord(record)}`
              );
            },
          };
        }}
        scroll={{ x: true, scrollToFirstRowOnChange: true }}
        columns={ColumnsFa}
        pagination={{
          defaultPageSize: 10,
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
