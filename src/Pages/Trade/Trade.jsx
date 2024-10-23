import { useEffect, useState } from "react";
import MdLoader from "../../Components/Loader/MdLoader";
import MarketLayout from "../../Layouts/MarketLayout";
import {
  fetchCryptoOrdersData,
  fetchCryptoQueueData,
} from "../../Services/GetApi";
import { handleQuery } from "../../Utils/QueryProcess";

function Trade() {
  const record = handleQuery();
  const [loading, setLoading] = useState(true);
  const [initialData, setInitialData] = useState({});

  const fetchData = async () => {
    const resOrders = await fetchCryptoQueueData(record);
    const resBuy = await fetchCryptoOrdersData(record, "buy");
    const resSell = await fetchCryptoOrdersData(record, "sell");
    setInitialData({
      orders: { orders: resOrders },
      buy: resBuy,
      sell: resSell,
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
      {loading ? (
        <MdLoader />
      ) : (
        <>
          <MarketLayout data={initialData} />
        </>
      )}
    </>
  );
}

export default Trade;
