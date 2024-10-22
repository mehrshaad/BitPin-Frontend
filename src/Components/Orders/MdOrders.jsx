import Progress from "../Progress/MdProgress";

function MdOrders({ data, mode }) {
  const keys = Object.keys(data[0]);
  const max = Math.max(...data.map((item) => item[keys[1]]));
  return (
    <>
      {data?.map((item, index) => {
        const percent = (item[keys[1]] / max) * 100;
        console.log(12, max);
        return (
          <Progress
            key={index + mode}
            percent={percent}
            mode={mode}
            items={Object.values(item)}
          />
        );
      })}
    </>
  );
}

export default MdOrders;
