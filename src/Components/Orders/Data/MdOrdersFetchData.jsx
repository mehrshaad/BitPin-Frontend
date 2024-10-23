import { useEffect } from "react";
import {
    fetchCryptoOrdersData,
    fetchCryptoQueueData,
} from "../../../Services/GetApi";
import { handleQuery } from "../../../Utils/QueryProcess";

function MdOrdersFetchData({ data, setData }) {
  const record = handleQuery();

  const fetchData = async () => {
    const resOrders = await fetchCryptoQueueData(record);
    const resBuy = await fetchCryptoOrdersData(record, "buy");
    const resSell = await fetchCryptoOrdersData(record, "sell");
    setData({
      orders: { orders: resOrders },
      buy: resBuy,
      sell: resSell,
    });
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return null;
}

export default MdOrdersFetchData;
