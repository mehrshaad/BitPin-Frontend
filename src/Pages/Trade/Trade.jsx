import { useEffect, useState } from "react";
import MdLoader from "../../Components/Loader/MdLoader";
import {
  fetchCryptoOrdersData,
  fetchCryptoQueueData,
} from "../../Services/GetApi";
import { handleQuery } from "../../Utils/QueryProcess";

function Trade() {
  const [record, setRecord] = useState(handleQuery());
  const [loading, setLoading] = useState(true);
  const [queueData, setQueueData] = useState([]);
  const [buyData, setBuyData] = useState({ orders: [], volume: 0 });
  const [sellData, setSellData] = useState({ orders: [], volume: 0 });

  const fetchData = async () => {
    const resQueue = await fetchCryptoQueueData(record);
    setQueueData(resQueue);
    const resBuy = await fetchCryptoOrdersData(record, "buy");
    setBuyData(resBuy);
    const resSell = await fetchCryptoOrdersData(record, "sell");
    setSellData(resSell);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return <>{loading ? <MdLoader /> : <div>{record}</div>}</>;
}

export default Trade;
