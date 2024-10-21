import React, { useState, useEffect } from "react";
import MdLoader from "../../Components/Loader/MdLoader";
import MdTable from "../../Components/Table/MdTable";
import MdCard from "../../Components/Card/MdCard";
import { fetchData } from "../../Services/GetApi";

function MarketDashboard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetchData("IRT");
    setData(() => [...res]);
    setLoading(false);
  };
  useEffect(() => {
    getData();
    const interval = setInterval(() => {
      getData();
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {loading ? (
        <MdLoader />
      ) : (
        <MdCard>
          <MdTable dataSource={data} />
        </MdCard>
      )}
    </>
  );
}

export default MarketDashboard;
