import Columns from "./Columns.jsx";
import ColumnsFa from "./ColumnsFa.jsx";
import { Table } from "antd";
function MdTable({ dataSource }) {
  return (
    <>
      <Table
        // rowKey={(row) => row.id}
        columns={ColumnsFa}
        dataSource={dataSource}
      />
    </>
  );
}

export default MdTable;
