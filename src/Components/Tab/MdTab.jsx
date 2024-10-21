import { Tabs } from "antd";
import "./MdTab.scss";

function MdTab({ currency, setCurrency, children }) {
  const onChange = (key) => {
    setCurrency(key);
  };
  const items = [
    {
      key: "IRT",
      label: "تومان",
      children: children,
    },
    {
      key: "USDT",
      label: "تتر",
      children: children,
    },
  ];
  return (
    <>
      <Tabs
        className="tab"
        animated
        type="card"
        defaultActiveKey={currency}
        items={items}
        onChange={onChange}
      />
    </>
  );
}
export default MdTab;
