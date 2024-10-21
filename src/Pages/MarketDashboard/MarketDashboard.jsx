import React, { useState, useEffect } from "react";
import MdLoader from "../../Components/Loader/MdLoader";
import MdTable from "../../Components/Table/MdTable";
import MdCard from "../../Components/Card/MdCard";
import MdTab from "../../Components/Tab/MdTab";
import { fetchData } from "../../Services/GetApi";

function MarketDashboard() {
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState("IRT");
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetchData(currency);
    setData(() => [...res]);
    setLoading(false);
  };
  useEffect(() => {
    getData();
    const interval = setInterval(() => {
      getData();
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
