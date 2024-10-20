import React, { useState, useEffect } from "react";
import MdLoader from "../../Components/Loader/MdLoader";
import MdTable from "../../Components/Table/MdTable";
import { fetchData } from "../../Services/GetApi";

function MarketDashboard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetchData();
      return res;
    };
    const tempDb = getData("IRT");
    setData(tempDb);
    setLoading(false);
  }, []);

  return <>{loading ? <MdLoader /> : <MdTable dataSource={data} />}</>;
}

export default MarketDashboard;
