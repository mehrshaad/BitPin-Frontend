import { Table } from "antd";
import ColumnsFaTrade from "./Columns/ColumnsFaTrade";
import "./MdTableTrade.scss";

function MdTableTrade({ dataSource }) {
    return (
      <Table
        // scroll={{ x: true }}
        columns={ColumnsFaTrade}
        pagination={false}
        dataSource={dataSource}
      />
    );
}

export default MdTableTrade;
