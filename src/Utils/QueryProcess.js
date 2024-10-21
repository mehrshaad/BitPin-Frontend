import { useLocation } from "react-router-dom";

export const queryByRecord = (record) => {
  return record.id;
};
export const handleQuery = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const record = searchParams.get("record");
  if (record === null) {
    window.location.href = "/";
    return;
  }
  return record;
};
