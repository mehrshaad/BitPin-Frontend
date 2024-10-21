import React, { useEffect, useState } from "react";
import MdCard from "../../Components/Card/MdCard";
import MdLoader from "../../Components/Loader/MdLoader";
import MdTab from "../../Components/Tab/MdTab";
import MdTable from "../../Components/Table/MdTable";
import { fetchMarketData } from "../../Services/GetApi";

function MarketDashboard() {
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState("IRT");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetchMarketData(currency);
    setData(() => [...res]);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 3000);
    return () => clearInterval(interval);
  }, [currency]);
  return (
    <>
      {loading ? (
        <MdLoader />
      ) : (
        <MdCard>
          <MdTab currency={currency} setCurrency={setCurrency}>
            <MdTable dataSource={data} />
          </MdTab>
        </MdCard>
      )}
    </>
  );
}

export default MarketDashboard;
