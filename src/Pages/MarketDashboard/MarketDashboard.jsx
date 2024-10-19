import React, { useState, useEffect } from "react";
import MdLoader from "../../Components/Loader/MdLoader";
import MdTable from "../../Components/Table/MdTable";
import { fetchData } from "../../Services/GetApi";
import { filterByCurrency2 } from "../../Utils/DataPreprocess";

function MarketDashboard() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [loadText, setLoadText] = useState("");
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetchData();
      console.log(res);
      setLoading(false);
      return res;
    };
    const filterData = async () => {
      setLoading(true);
      const res = await filterByCurrency2(fullData, "IRT");
      setLoading(false);
      return res;
    };
    setLoadText(() => "در حال خواندن دیتا");
    setFullData(() => getData());
    setLoadText(() => "در حال پردازش دیتا");
    setData(() => filterData());
  }, []);

  return <>{loading ? <MdLoader loadText={loadText} /> : <MdTable />}</>;
}

export default MarketDashboard;
