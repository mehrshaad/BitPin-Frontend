import { convertNumberToTime } from "../../Utils/ConvertNumberToTime";
import Progress from "../Progress/MdProgress";
import "./MdOrders.scss";
import MdOrdersRow from "./Row/MdOrdersRow";
import MdOrdersFetchData from "./Data/MdOrdersFetchData";
import { useState } from "react";

function MdOrders({ dataSource, mode }) {
  const [data, setData] = useState(dataSource);
  const cols = ["قیمت", "مقدار", "کل", "زمان"];
  const dataMode = data[mode]["orders"].slice(0, 10);
  const sum = dataMode.reduce((acc, item) => acc + Number(item?.amount), 0);

  return (
    <>
      <MdOrdersFetchData data={data} setData={setData} />
      <MdOrdersRow
        colA={cols[0]}
        colB={cols[1]}
        colC={mode == "orders" ? cols[3] : cols[2]}
      />
      {dataMode?.map((item, index) => {
        const percent = (Number(item?.amount) / sum) * 100 + 30;
        return (
          <Progress
            key={index + mode}
            percent={mode == "orders" ? 0 : percent}
            mode={mode == "orders" ? item?.type : mode}
            items={
              mode == "orders"
                ? [
                    item?.price,
                    item?.match_amount,
                    convertNumberToTime(item?.time),
                  ]
                : [
                    item?.price,
                    item?.remain,
                    Number(item?.value).toLocaleString(),
                  ]
            }
          />
        );
      })}
    </>
  );
}

export default MdOrders;
