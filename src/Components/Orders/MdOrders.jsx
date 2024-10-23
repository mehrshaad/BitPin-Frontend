import { useState } from "react";
import { convertNumberToTime } from "../../Utils/ConvertNumberToTime";
import { normalizeToRange } from "../../Utils/NormalizeToRange";
import Progress from "../Progress/MdProgress";
import MdOrdersFetchData from "./Data/MdOrdersFetchData";
import "./MdOrders.scss";
import MdOrdersRow from "./Row/MdOrdersRow";
import MdOrdersRowSummary from "./Row/MdOrdersRowSummary";
import {
  calculateNumbers,
  calculateFilterNumbers,
} from "../../Utils/CalculateNumbers";

function MdOrders({ dataSource, mode }) {
  const [data, setData] = useState(dataSource);
  const cols = ["قیمت", "مقدار", "کل", "زمان"];
  const dataMode = data[mode]["orders"]?.slice(0, 10);
  const [min, max, sumRemain, sumValues, priceAverage] =
    calculateNumbers(dataMode);
  const [latestTime, sumBuy, sumSell] = calculateFilterNumbers(dataMode);

  return (
    <>
      <MdOrdersFetchData data={data} setData={setData} />
      <MdOrdersRow
        colA={cols[0]}
        colB={cols[1]}
        colC={mode == "orders" ? cols[3] : cols[2]}
      />
      {dataMode?.map((item, index) => {
        return (
          <Progress
            key={index + mode}
            percent={
              mode == "orders" ? 0 : normalizeToRange(item?.price, min, max)
            }
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
      {mode == "orders" ? (
        <MdOrdersRowSummary
          mode={0}
          values={[convertNumberToTime(latestTime), sumBuy, sumSell]}
        />
      ) : (
        <MdOrdersRowSummary
          mode={1}
          values={[sumRemain, sumValues, priceAverage]}
        />
      )}
    </>
  );
}

export default MdOrders;
